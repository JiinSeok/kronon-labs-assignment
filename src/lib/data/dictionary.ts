import en from '@/lib/data/en.json'
import { Metadata } from 'next'

// import ko from "@/stores/ko.json";

// import ko from "@/stores/ko.json";

// import ko from "@/stores/ko.json";

// import ko from "@/stores/ko.json";

const dictionaries: Record<string, Record<string, any>> = {
  en,
  // ko,
}

export const getDictionary = (locale: string) => dictionaries[locale] || dictionaries.en

export type Dictionary = Record<string, Record<string, Metadata>>

export const dictionary: Dictionary = {
  '/': {
    default: { title: 'Home', description: 'Welcome to our website!' },
    en: { title: 'Home', description: 'Welcome to our website!' },
    ko: { title: '홈', description: '우리 웹사이트에 오신 것을 환영합니다!' },
  },
  '/trade/BTC_USDT': {
    default: { title: 'Trade BTC/USDT', description: 'Live BTC/USDT trading.' },
    en: { title: 'Trade BTC/USDT', description: 'Live BTC/USDT trading.' },
    ko: { title: 'BTC/USDT 거래', description: '실시간 BTC/USDT 거래를 확인하세요.' },
  },
}
