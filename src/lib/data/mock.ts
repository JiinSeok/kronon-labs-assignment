export const TodayDate = new Date().toLocaleDateString()
const RelativeDateGenerator = (days: number) =>
  new Date(new Date().setDate(new Date().getDate() + days)).toLocaleDateString()

export const TradingPriceData = [
  { x: RelativeDateGenerator(-1), y: [100, 110, 90, 105] },
  { x: RelativeDateGenerator(-2), y: [105, 115, 100, 110] },
  { x: RelativeDateGenerator(-3), y: [110, 125, 105, 115] },
]

export const TradingVolumeData = [
  { x: RelativeDateGenerator(-1), y: [1005] },
  { x: RelativeDateGenerator(-2), y: [1750] },
  { x: RelativeDateGenerator(-3), y: [1105] },
]
