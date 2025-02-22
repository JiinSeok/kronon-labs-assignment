import en from '@/locales/en.json'

// import ko from "@/locales/ko.json";

const dictionaries: Record<string, any> = {
  en,
  // ko,
}

export const getDictionary = (locale: string) => dictionaries[locale] || dictionaries.en
