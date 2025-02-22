import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'ko']
const defaultLocale = 'en'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // URL에 언어 있음
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  )
  if (pathnameHasLocale) return NextResponse.next()

  // URL에 언어 없음
  // 브라우저 언어
  const acceptLanguage = req.headers.get('accept-language')
  const detectedLocale = acceptLanguage
    ? locales.find((locale) => acceptLanguage.includes(locale))
    : defaultLocale

  // 기본 언어
  const locale = detectedLocale || defaultLocale

  // 리디렉션
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url))
}

// 리디렉션 적용할 경로
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // API, _next, 정적 파일 제외
}
