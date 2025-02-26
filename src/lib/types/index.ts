import { ReactNode } from 'react'





export type SupportedLocale = 'en'
export const defaultLocale: SupportedLocale = 'en'
export const SUPPORTED_LOCALES: SupportedLocale[] = ['en'] as const

export interface CustomMessage {
  title?: string
  message?: string
}

export type LayoutProps = Readonly<{
  children: ReactNode
}>

export interface ComponentProps {
  children?: ReactNode
  className?: string
}

export interface TradePageProps {
  params: {
    symbolPair: string // [[symbolPair]] 동적 라우트에서 가져오는 값
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
