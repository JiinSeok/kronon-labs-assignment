import Container from '@/components/Container'

export default function TradeOverview() {
  const symbolPair = 'BTC/USDT'

  return (
    <Container className={'relative col-span-9 row-span-1 row-start-1'}>
      <h2 className="font-semibold mb-2">{symbolPair}</h2>
      <Container.Tabs initialTab={'USDT'} />
      <Container.Skeleton />
    </Container>
  )
}
