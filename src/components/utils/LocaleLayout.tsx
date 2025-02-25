import { SupportedLocale } from '@/lib/types'
import '@/styles/globals.css'
import { ReactNode } from 'react'

export default function LocaleLayout({ children, locale }: { children: ReactNode; locale: SupportedLocale }) {
  return (
    <html lang={locale}>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
