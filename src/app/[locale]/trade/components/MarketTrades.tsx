// WebSocket이나 API 연결로 실시간 데이터
import Container from '@/components/Container'

export default function MarketTrades() {
  return (
    <Container className="col-span-3 row-span-5 row-start-7 ">
      <Container.Tabs initialTab={'Market Trades'} />
      <Container.Skeleton />
    </Container>
  )
}
