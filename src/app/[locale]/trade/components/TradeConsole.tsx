import Container from '@/components/Container'

export default function TradeConsole() {
  return (
    <Container className={'col-span-6 row-span-5'}>
      <Container.Tabs initialTab={'Spot'} />
      <Container.Skeleton />
    </Container>
  )
}
