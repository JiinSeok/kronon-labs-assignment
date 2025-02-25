import { create } from 'zustand'

interface SymbolState {
  baseSymbol: string
  quoteSymbol: string
  setBaseSymbol: (newBaseSymbol: string) => void
  setQuoteSymbol: (newQuoteSymbol: string) => void
}

export const useSymbolStore = create<SymbolState>((set) => ({
  baseSymbol: 'BTC',
  quoteSymbol: 'USDT',
  setBaseSymbol: (newBaseSymbol) => set({ baseSymbol: newBaseSymbol }),
  setQuoteSymbol: (newQuoteSymbol) => set({ quoteSymbol: newQuoteSymbol }),
}))
