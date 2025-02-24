// 차트 라이브러리 연동
import Container from '@/components/Container'

export default function ChartSection() {
  return (
    <Container className="col-span-6 row-span-7 row-start-2">
      <h2 className="font-semibold mb-2">Chart</h2>
      <div className=" h-auto bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded">
        <span className="opacity-50">Trading Chart Placeholder</span>
      </div>
    </Container>
  )
}
