import { Params } from 'next/dist/server/request/params'
import { ReactNode } from 'react'

export const SupportedLocales = ['en', 'ko'] as const
export type SupportedLocale = 'en' | 'ko'

export type PageProps = {
  params: Params
  searchParams?: URLSearchParams
}

export interface CustomMessage {
  title?: string
  message?: string
}

export interface CustomMessage {
  title?: string
  message?: string
}

export interface ClickProps {
  onClick?: () => void
}

export type LayoutProps = Readonly<{
  children: ReactNode
}>

export interface ChildrenProps {
  children: ReactNode
}

export interface ComponentProps {
  children?: ReactNode
  className?: string
}
