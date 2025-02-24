import Container from '@/components/Container'

export default function TradeOverview() {
  return (
    <Container className={'col-span-9 row-span-1 row-start-1'}>
      <h2 className="font-semibold">BTC/USDT</h2>
      <div className="w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded">
        <span className="opacity-50">Trading Chart Placeholder</span>
      </div>
    </Container>
  )
}
