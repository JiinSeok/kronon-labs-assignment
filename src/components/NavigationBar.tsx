import { metaData } from '@/lib/metadata'
import Link from 'next/link'

import { ThemeSwitcher } from './theme-switch'

const navItems = {
  '/BuyCrypto': { name: 'BuyCrypto' },
  '/Markets': { name: 'Markets' },
  '/Trade': { name: 'Trade' },
  '/Futures': { name: 'Futures' },
  '/Earn': { name: 'Earn' },
  '/Square': { name: 'Square' },
  '/More': { name: 'More' },
}

export function NavigationBar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <svg
            className="bn-svg header-menu-item_dropdown-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          />
          <ThemeSwitcher />
          {/*<LocaleSwitcher />*/}
          {/*{locale === 'ko' ? <a href={'/en'}>English</a> : <a href={'ko'}>한국어</a>}*/}
        </div>
      </div>
    </nav>
  )
}
