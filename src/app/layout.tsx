import ClientSideSetUp from '@/app/ClientSideSetUp'
import NavigationBar from '@/components/NavigationBar'
import { metaData } from '@/lib/data'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'

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
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ClientSideSetUp>
          <NavigationBar />
          {children}
        </ClientSideSetUp>
      </body>
    </html>
  )
}
