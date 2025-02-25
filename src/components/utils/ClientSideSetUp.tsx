'use client'

import defaultQueryClient from '@/lib/defaultQueryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export default function ClientSideSetUp({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={defaultQueryClient}>{children}</QueryClientProvider>
}
