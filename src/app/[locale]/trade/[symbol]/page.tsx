import LocaleLayout from '@/app/[locale]/LocaleLayout'
import { dictionary } from '@/app/[locale]/dictionary'
import CoinChart from '@/app/[locale]/trade/components/CoinChart'
import CoinSearch from '@/app/[locale]/trade/components/CoinSearch'
import MarketTrades from '@/app/[locale]/trade/components/MarketTrades'
import OpenOrders from '@/app/[locale]/trade/components/OpenOrders'
import OrderBook from '@/app/[locale]/trade/components/OrderBook'
import TopMovers from '@/app/[locale]/trade/components/TopMovers'
import TradeConsole from '@/app/[locale]/trade/components/TradeConsole'
import TradeOverview from '@/app/[locale]/trade/components/TradeOverview'
import { SupportedLocale } from '@/lib/types/types'
import { Params } from 'next/dist/server/request/params'

export async function generateMetadata({ params }: { params: Params }) {
  const pathname = params?.toString() || ''
  const locale = params?.toLocaleString() || 'en'
  const pageRoute = pathname.slice(3)

  return dictionary[pageRoute][locale] || dictionary[pageRoute].default
}

export default function TradePage({ params }: { params: { locale: string; symbol: string } }) {
  // const dict = getDictionary(params.locale)
  const selectedLocale = params.locale as SupportedLocale

  return (
    <LocaleLayout locale={selectedLocale}>
      <main className={'p-4'}>
        <div className="flex-auto grid gap-1 p-4 grid-cols-12 grid-rows-19">
          <TradeOverview symbol={params.symbol} />
          <OrderBook />
          <CoinChart />
          <CoinSearch />
          <TradeConsole />
          <MarketTrades />
          <TopMovers />
          <OpenOrders />
        </div>
      </main>
    </LocaleLayout>
  )
}
