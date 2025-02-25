import Container from '@/components/Container'

export default function TopMovers() {
  return (
    <Container className={'col-span-3 row-span-2 row-end-auto'}>
      <Container.Tabs initialTab="Top Movers" />
      <Container.Skeleton />
    </Container>
  )
}
