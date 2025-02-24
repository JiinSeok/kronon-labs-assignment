// 사용자의 과거 거래내역 표시. 페이지네이션, 필터링, 정렬 기능

export default function TradeHistory() {
  return (
    <section
      className="bg-gray-200 dark:bg-gray-800 rounded p-4
                           col-span-1 md:col-span-1 lg:col-span-6"
    >
      <h2 className="font-semibold mb-2">Trade History</h2>
      <p className="text-sm">No trades yet</p>
    </section>
  )
}
