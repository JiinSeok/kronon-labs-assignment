import CoinChart from '@/components/services/CoinChart'
import CoinSearch from '@/components/services/CoinSearch'
import MarketTrades from '@/components/services/MarketTrades'
import OpenOrders from '@/components/services/OpenOrders'
import OrderBook from '@/components/services/OrderBook'
import TopMovers from '@/components/services/TopMovers'
import TradeConsole from '@/components/services/TradeConsole'
import TradeOverview from '@/components/services/TradeOverview'
import { useSymbolStore } from '@/lib/stores/symbolStore'

export async function generateStaticParams(): Promise<{ symbolPair: string }[]> {
  return [{ symbolPair: 'BTC_USDT' }, { symbolPair: 'ETH_USDT' }]
}

// 2) 페이지 props 타입
export interface TradePageProps {
  params: {
    symbolPair: string // [[symbolPair]] 동적 라우트에서 가져오는 값
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

// { params, searchParams }
// : TradePageProps
// 3) 실제 페이지 컴포넌트
export default function TradePage() {
  const searchParams = {
    type: 'spot',
  }
  // const {symbolPair} = params
  const symbolPair = 'BTC_USDT'
  const type = searchParams.type ?? 'spot'

  const [base, quote] = symbolPair.split('_')
  const { setBaseSymbol, setQuoteSymbol } = useSymbolStore()

  setBaseSymbol(base.toUpperCase())
  setQuoteSymbol(quote.toUpperCase())

  return (
    <>
      <main>
        <main>
          <h1>Trade Page</h1>
          <p>Symbol Pair: {symbolPair}</p>
          <p>Type: {type}</p>
        </main>
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
