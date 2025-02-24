import { SupportedLocale } from '@/lib/types/types'
import { create } from 'zustand'

interface LocaleState {
  locale: SupportedLocale
  setLocale: (newLocale: SupportedLocale) => void
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'en',
  setLocale: (newLocale) => set({ locale: newLocale }),
}))
