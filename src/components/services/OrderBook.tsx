'use client'

// 주문 정보/호가창
// 주문 목록, 매수/매도 표시 복잡
import Container from '@/components/Container'

// interface DepthResponse {

// interface DepthResponse {
//   lastUpdateId: number
//   bids: string[][]
//   asks: string[][]
// }

const ORDER_BOOK = {
  lastUpdateId: 123456,
  bids: [
    ['9,998.50', '0.1234'],
    ['9,998.40', '0.1234'],
    ['9,998.30', '0.1234'],
    ['9,998.20', '0.1234'],
    ['9,998.10', '0.1234'],
  ],
  asks: [
    ['9,997.80', '0.5432'],
    ['9,997.90', '0.5432'],
    ['9,998.00', '0.5432'],
    ['9,998.10', '0.5432'],
    ['9,998.20', '0.5432'],
  ],
}

// @TODO 웹소켓 데이터 연결
// { symbol }: { symbol: string }
export default function OrderBook() {
  const orderBook = ORDER_BOOK
  // const [orderBook, setOrderBook] = useState<DepthResponse | null>(null)

  // useEffect(() => {
  //   async function fetchOrderBook() {
  //     const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=10`)
  //     const data = await res.json()
  //     setOrderBook(data)
  //   }
  //
  //   fetchOrderBook()
  //   const interval = setInterval(fetchOrderBook, 5000)
  //
  //   return () => clearInterval(interval)
  // }, [[symbolPair]])

  // const [depth, setDepth] = useState<DepthData | null>(null)

  // useEffect(() => {
  //   const wsUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`
  //   const ws = new WebSocket(wsUrl)
  //   ws.onmessage = (event) => {
  //     try {
  //       const data = JSON.parse(event.data)
  //       console.log(...data)
  //       // setDepth({
  //       //   bids: data.b?.slice(0, 10) || [],
  //       //   asks: data.a?.slice(0, 10) || [],
  //       // })
  //     } catch (err) {
  //       handleError(err)
  //     }
  //   }
  //
  //   return () => {
  //     ws.close()
  //   }
  // }, [])

  // if (!depth) return <div>Loading order book...</div>

  return (
    <>
      <Container className="col-span-3 row-start-2 row-span-12">
        <Container.Tabs initialTab={'Order Book'} />
        <div className="text-sm">
          <p>Price | Amount | Total</p>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <h2 className="font-bold">Bids</h2>
            {orderBook.bids.map(([price, qty], idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-green-500">{price}</span>
                <span>{qty}</span>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <h2 className="font-bold">Asks</h2>
            {orderBook.asks.map(([price, qty], idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-red-500">{price}</span>
                <span>{qty}</span>
              </div>
            ))}
          </div>
          {/*<div className="flex gap-4">*/}
          {/*/!* Bids *!/*/}
          {/*<div className="flex-1">*/}
          {/*  <h2 className="font-bold">Bids</h2>*/}
          {/*  {bids.map(([price, qty], idx) => (*/}
          {/*    <div key={idx} className="flex justify-between">*/}
          {/*      <span className="text-green-600">{price}</span>*/}
          {/*      <span>{qty}</span>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}

          {/*/!* Asks *!/*/}
          {/*<div className="flex-1">*/}
          {/*  <h2 className="font-bold">Asks</h2>*/}
          {/*  {asks.map(([price, qty], idx) => (*/}
          {/*    <div key={idx} className="flex justify-between">*/}
          {/*      <span className="text-red-600">{price}</span>*/}
          {/*      <span>{qty}</span>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
          {/*</div>*/}
        </div>
      </Container>
    </>
  )
}
