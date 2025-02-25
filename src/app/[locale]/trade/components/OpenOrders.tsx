import Container from '@/components/Container'

export default function OpenOrders() {
  return (
    <Container className="col-span-full row-span-7 row-end-20">
      <Container.Tabs initialTab="Open Orders" />
      <Container.Skeleton />
    </Container>
  )
}
