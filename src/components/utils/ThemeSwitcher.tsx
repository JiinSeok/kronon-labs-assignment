'use client'

import useHydration from '@/hooks/useHydration'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme } from 'next-themes'
import { FaCircleHalfStroke } from 'react-icons/fa6'

const storageKey = 'theme-preference'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { resolvedTheme } = useTheme()
  const isHydrated = useHydration()

  if (!isHydrated) return null
  return (
    <NextThemesProvider attribute="class" defaultTheme={resolvedTheme} enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }
  const isHydrated = useHydration()

  if (!isHydrated) return null
  return (
    <button
      id="theme-toggle"
      aria-label={`${resolvedTheme} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke
        className={`h-[14px] w-[14px] ${resolvedTheme === 'dark' ? 'text-[#D4D4D4]' : 'text-[#1c1c1c]'}`}
      />
    </button>
  )
}
