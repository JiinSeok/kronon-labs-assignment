import ChartSection from '@/app/[locale]/trade/components/ChartSection'
import MarketTrades from '@/app/[locale]/trade/components/MarketTrades'
import OpenOrders from '@/app/[locale]/trade/components/OpenOrders'
import OrderBook from '@/app/[locale]/trade/components/OrderBook'
import PriceSearch from '@/app/[locale]/trade/components/PriceSearch'
import TopMovers from '@/app/[locale]/trade/components/TopMovers'
import TradeConsole from '@/app/[locale]/trade/components/TradeConsole'
import TradeOverview from '@/app/[locale]/trade/components/TradeOverview'

export default function Home() {
  return (
    <>
      <main>
        <div className="flex-auto grid gap-1 p-4 grid-cols-12 grid-rows-19">
          <TradeOverview />
          <OrderBook />
          <ChartSection />
          <PriceSearch />
          <TradeConsole />
          <MarketTrades />
          <TopMovers />
          <OpenOrders />
        </div>
      </main>
    </>
  )
}
