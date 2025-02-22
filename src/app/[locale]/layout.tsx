import ClientSideSetUp from '@/components/ClientSideSetUp'
import '@/styles/globals.css'
import { ReactNode } from 'react'

import { getDictionary } from './dictionary'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale)
  return {
    title: dict.title,
    description: dict.description,
  }
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  return (
    <html lang={params.locale}>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <ClientSideSetUp>
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
            {children}
          </main>
        </ClientSideSetUp>
      </body>
    </html>
  )
}
