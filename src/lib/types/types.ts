import { Params } from 'next/dist/server/request/params'
import { ReactNode } from 'react'

export const SupportedLocales = ['en', 'ko'] as const
export type SupportedLocale = 'en' | 'ko'

// export type Params = {
//   locale: SupportedLocale
// }

export type LayoutProps = {
  children: ReactNode
  params?: Params
  className?: string
}

export type PageProps = {
  params: Params
  searchParams?: URLSearchParams
}

export interface CustomMessage {
  title?: string
  message?: string
}
