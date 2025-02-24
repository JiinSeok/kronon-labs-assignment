// 현재 열어보는 주문 표시
// 복잡
import Container from '@/components/Container'

export default function OpenOrders() {
  return (
    <Container className="col-span-full row-span-7 row-end-20">
      <h2 className="font-semibold mb-2">Open Orders</h2>
      <p className="text-sm">No open orders</p>
    </Container>
  )
}
