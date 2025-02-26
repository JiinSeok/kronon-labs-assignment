import TradePage from '@/app/en/trade/BTC_USDT/page'

export default function HomePage() {
  // const { [symbolPair] } = params
  // const type = searchParams.type ?? 'spot'
  //
  // if (![symbolPair]) {
  //   return null
  // }
  // const [base, quote] = [symbolPair].split('_')
  // const { setBaseSymbol, setQuoteSymbol } = useSymbolStore()
  //
  // setBaseSymbol(base.toUpperCase())
  // setQuoteSymbol(quote.toUpperCase())

  return (
    <>
      <TradePage />
    </>
  )
}
