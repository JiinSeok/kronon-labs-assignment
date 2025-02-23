'use client'

import { ThemeProvider } from '@/components/utils/theme-switch'
import { ReactNode } from 'react'

export default function ClientSideSetUp({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
