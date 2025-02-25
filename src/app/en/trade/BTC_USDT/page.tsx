import CoinChart from '@/components/services/CoinChart'
import CoinSearch from '@/components/services/CoinSearch'
import MarketTrades from '@/components/services/MarketTrades'
import OpenOrders from '@/components/services/OpenOrders'
import OrderBook from '@/components/services/OrderBook'
import TopMovers from '@/components/services/TopMovers'
import TradeConsole from '@/components/services/TradeConsole'
import TradeOverview from '@/components/services/TradeOverview'

// import { useSymbolStore } from '@/lib/stores/symbolStore'

export default function TradePage() {
  // const { symbolPair } = params
  // const type = searchParams.type ?? 'spot'
  //
  // if (!symbolPair) {
  //   return null
  // }
  // const [base, quote] = symbolPair.split('_')
  // const { setBaseSymbol, setQuoteSymbol } = useSymbolStore()
  //
  // setBaseSymbol(base.toUpperCase())
  // setQuoteSymbol(quote.toUpperCase())

  return (
    <>
      <main>
        <div className="relative flex-auto max-w-7xl max-h-fit grid gap-1 p-4 grid-cols-12 grid-rows-19">
          <TradeOverview />
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
