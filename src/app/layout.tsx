import ClientSideSetUp from '@/app/ClientSideSetUp'
import LoadingSpinner from '@/components/LoadingSpinner'
import NavigationBar from '@/components/NavigationBar'
import { ThemeProvider } from '@/components/utils/theme-switch'
import { metaData } from '@/lib/data/data'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Suspense } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 antialiased`}
      >
        <ClientSideSetUp>
          <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
            <Suspense fallback={<LoadingSpinner full />}>
              <NavigationBar />
              {children}
            </Suspense>
          </ThemeProvider>
        </ClientSideSetUp>
      </body>
    </html>
  )
}
