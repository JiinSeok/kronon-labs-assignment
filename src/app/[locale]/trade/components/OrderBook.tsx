// 주문 정보/호가창
// 주문 목록, 매수/매도 표시 복잡
import Container from '@/components/Container'

export default function OrderBook() {
  return (
    <Container className="col-span-3 row-start-2 row-span-12">
      <h2 className="font-semibold mb-2">Order Book</h2>
      <div className="text-sm">
        <p>Price | Amount</p>
        <p className="text-red-500 dark:text-red-400">9,998.50 | 0.1234</p>
        <p className="text-green-600 dark:text-green-400">9,997.80 | 0.5432</p>
      </div>
    </Container>
  )
}
