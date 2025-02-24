import Container from '@/components/Container'

export default function PriceSearch() {
  return (
    <Container className={'col-span-3 row-span-6 row-start-1'}>
      Search
      <h2 className="font-semibold mb-2">USDT</h2>
      <div className="text-sm">
        <p>Price | Amount</p>
        <p className="text-red-500 dark:text-red-400">9,998.50 | 0.1234</p>
        <p className="text-green-600 dark:text-green-400">9,997.80 | 0.5432</p>
      </div>
    </Container>
  )
}
