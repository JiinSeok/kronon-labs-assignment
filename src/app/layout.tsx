import NavigationBar from '@/components/NavigationBar'
import ClientSideSetUp from '@/components/utils/ClientSideSetUp'
import { ThemeProvider } from '@/components/utils/ThemeSwitcher'
import { METADATA } from '@/lib/data/appData'
import { LayoutProps } from '@/lib/types'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.baseUrl),
  title: {
    default: METADATA.title,
    template: `%s | ${METADATA.title}`,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 antialiased min-h-screen`}
      >
        <ClientSideSetUp>
          <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
            {/*<Suspense fallback={<LoadingSpinner full />}>*/}
            <NavigationBar />
            <div className={'container mx-auto px-4 justify-center flex flex-col md:flex-row md:items-center'}>
              {children}
            </div>
            {/*</Suspense>*/}
          </ThemeProvider>
        </ClientSideSetUp>
      </body>
    </html>
  )
}
