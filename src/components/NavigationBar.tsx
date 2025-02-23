'use client'

import { LocaleSwitcher } from '@/components/utils/locale-switch'
import { metaData, navItems } from '@/lib/data'
import Link from 'next/link'

import { ThemeSwitcher } from './utils/theme-switch'

export default function NavigationBar() {
  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-800 px-4 py-2">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
          {/* 좌측: 로고 및 데스크탑 네비게이션 메뉴 */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="/" className="text-3xl font-semibold tracking-tight">
              {metaData.title}
            </Link>
            {/* 데스크탑에서는 네비 메뉴 보이기 */}
            <div className="hidden md:flex gap-4">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* 우측: 로그인, 회원가입, 테마 토글 */}
          <div className="flex items-center gap-4">
            <button className="bg-gray-700 px-3 py-1 rounded text-white">Log In</button>
            <button className="bg-yellow-500 text-black px-3 py-1 rounded">Sign Up</button>
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </>
  )
}
