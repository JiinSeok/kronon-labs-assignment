import { SUPPORTED_LOCALES, defaultLocale } from '@/lib/types'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const { pathname, searchParams, locale } = url

  const pathnameHasLocale = SUPPORTED_LOCALES.some((loc) =>
    pathname.startsWith(`/${loc}`),
  )

  if (!pathnameHasLocale) {
    const acceptLanguage = req.headers.get('accept-language')
    const detectedLocale =
      (acceptLanguage &&
        SUPPORTED_LOCALES.find((loc) => acceptLanguage.includes(loc))) ||
      defaultLocale

    return NextResponse.redirect(
      new URL(`/${detectedLocale}/trade/BTC_USDT`, req.url),
    )
  }

  if (
    pathname.startsWith(`/${locale}/trade/`) &&
    !searchParams.has('type') &&
    req.headers.get('referer') !== url.toString()
  ) {
    url.searchParams.set('type', 'spot')
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// ✅ 적용할 경로 설정
export const config = {
  matcher: ['/((?!network|_next|.*\\..*).*)'], // API, _next, 정적 파일 제외
}
