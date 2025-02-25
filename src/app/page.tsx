import CoinChart from '@/app/[locale]/trade/components/CoinChart'
import CoinSearch from '@/app/[locale]/trade/components/CoinSearch'
import MarketTrades from '@/app/[locale]/trade/components/MarketTrades'
import OpenOrders from '@/app/[locale]/trade/components/OpenOrders'
import OrderBook from '@/app/[locale]/trade/components/OrderBook'
import TopMovers from '@/app/[locale]/trade/components/TopMovers'
import TradeConsole from '@/app/[locale]/trade/components/TradeConsole'
import TradeOverview from '@/app/[locale]/trade/components/TradeOverview'

export default function Home() {
  return (
    <>
      <main>
        <div className="relative flex-auto max-w-7xl max-h-fit grid gap-1 p-4 grid-cols-12 grid-rows-19">
          <TradeOverview symbol={'BTCUSDT'} />
          <OrderBook />
          <CoinChart />
          <CoinSearch />
          <TradeConsole />
          <MarketTrades />
          <TopMovers />
          <OpenOrders />
        </div>
      </main>
    </>
  )
}
