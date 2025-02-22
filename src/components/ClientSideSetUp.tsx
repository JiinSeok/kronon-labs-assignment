'use client'

import { ThemeProvider } from '@/components/theme-switch'
import { ReactNode } from 'react'

export default function ClientSideSetUp({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
