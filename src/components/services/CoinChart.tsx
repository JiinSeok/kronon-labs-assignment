'use client'

import Container from '@/components/Container'
import { TodayDate, TradingPriceData, TradingVolumeData } from '@/lib/data/mockData'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import React from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const CandlestickOptions: ApexOptions = {
  chart: {
    id: 'tradingPrice', // 차트 식별자
    group: 'btcGroup', // 동기화될 그룹명 (두 차트가 동일해야 함)
    type: 'candlestick',
    height: 300,
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
}

const ColumnOptions: ApexOptions = {
  chart: {
    id: 'TradingVolume',
    group: 'btcGroup',
    type: 'bar',
    height: 160,
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    labels: {
      formatter: (val) => val.toFixed(0), // 거래량 정수 표기 예시
    },
  },
}

const PriceSeries = [{ data: TradingPriceData }]
const VolumeSeries = [{ data: TradingVolumeData }]

export default function CoinChart() {
  return (
    <Container className="col-span-6 row-span-7 row-start-2">
      <Container.Tabs initialTab={'Chart'} />
      {/*<div ref={chartRef} className={"h-auto bg-transparent dark:bg-transparent flex items-center justify-center"} />*/}

      {/*거래 금액*/}
      <div>
        <div>
          <h3 className="font-semibold mb-2 bg-transparent">{TodayDate}</h3>
        </div>
        <Chart
          options={CandlestickOptions}
          series={PriceSeries}
          type="candlestick"
          className="h-full w-full bg-transparent dark:bg-transparent flex items-center justify-center"
        />

        {/* 거래량 */}
        <div>
          <h3 className="font-semibold mb-2 bg-transparent">Vol({'BTC'})</h3>
        </div>
        <Chart
          options={ColumnOptions}
          series={VolumeSeries}
          type="bar"
          className="h-full w-full bg-transparent dark:bg-transparent flex items-center justify-center "
        />
      </div>
    </Container>
  )
}
