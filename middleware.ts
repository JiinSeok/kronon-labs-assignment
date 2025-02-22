import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'ko']
const defaultLocale = 'en'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const { pathname, searchParams } = url

  // URL에 locale 없으면 리다이렉트
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  )

  if (!pathnameHasLocale) {
    const acceptLanguage = req.headers.get('accept-language')
    const detectedLocale = acceptLanguage
      ? locales.find((locale) => acceptLanguage.includes(locale))
      : defaultLocale

    return NextResponse.redirect(
      new URL(`/${detectedLocale}${pathname}`, req.url),
    )
  }

  // "/trade/BTC_USDT" 경로 query param 기본값 "type=spot" 추가
  if (pathname.includes('/trade/BTC_USDT') && !searchParams.has('type')) {
    url.searchParams.set('type', 'spot')
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// 적용할 경로
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // API, _next, 정적 파일 제외
}
