'use client'

import Container from '@/components/Container'
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import React, { useState } from 'react'

async function fetchSymbols() {
  const res = await fetch('https://api.binance.com/api/v3/exchangeInfo')
  if (!res.ok) {
    throw new Error('Failed to fetch exchangeInfo')
  }
  return res.json()
}

export function CoinPairPrice({ allSymbols, count }: { allSymbols: any[]; count?: number }) {
  const priceChangePercent = -0.5432
  return (
    <ul className="mt-2 w-full h-full overflow-y-auto">
      {allSymbols.slice(0, count).map((symbolInfo) => (
        <li key={symbolInfo.symbol} className="flex gap-1 justify-between">
          <div className={'flex gap-1 justify-start'}>
            <FavoriteStar />
            {symbolInfo.symbol}
          </div>
          <div className={'flex gap-5 justify-end text-right'}>
            0.0000001
            {symbolInfo.priceChangePercent > 0 ? (
              <p className="text-green-600 dark:text-green-400">+{priceChangePercent}%</p>
            ) : (
              <p className="text-red-600 dark:text-red-400">{priceChangePercent}%</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function FavoriteStar() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6 text-gray-400 dark:text-gray-500"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.173 3.007L12.768 3l2.41 5.11 5.326.831.496 1.495-3.89 4.013.895 5.636-1.298.915-4.735-2.648L7.236 21l-1.296-.923.946-5.632L3 10.436l.496-1.495 5.322-.83 2.355-5.104z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  )
}

export default function CoinSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isTopSearchOpen, setIsTopSearchOpen] = useState(false)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['exchangeInfo'],
    queryFn: fetchSymbols,
    staleTime: 5 * 60 * 1000, // 5분
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error while fetching data: {(error as Error).message}</div>

  const allSymbols: any[] = data.symbols
  return (
    <>
      <Container className={'relative col-span-3 row-span-6 row-start-1'}>
        <input
          className="border p-2 w-full rounded mb-4"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsTopSearchOpen(true)}
          onBlur={() => setIsTopSearchOpen(false)}
        />

        <div className={classNames('z-10 h-full', searchTerm || !isTopSearchOpen ? 'hidden' : '')}>
          <h2 className="font-semibold text-gray-400">Top Search</h2>
          <CoinPairPrice allSymbols={allSymbols} count={10} />
        </div>

        <div className={classNames('h-full gap-1 justify-start', !searchTerm && isTopSearchOpen ? 'hidden' : '')}>
          <div className="flex gap-1 justify-start items-center mb-2">
            <FavoriteStar />
            <Container.Tabs initialTab={'USDT'} />
          </div>
          <Container.Line />
          <div className="text-sm">
            <div className="flex font-semibold text-gray-400 dark:text-gray-500 justify-between">
              <p>Pair</p>
              <div className={'flex gap-1 justify-end'}>
                <p>Last Price</p>/<p>24h Change</p>
              </div>
            </div>
            <CoinPairPrice allSymbols={allSymbols} count={30} />
          </div>
        </div>
      </Container>
    </>
  )
}
