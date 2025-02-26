import type { NextConfig } from 'next'





const nextConfig: NextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '^(?!.*\\/en\\/trade).*$',
          },
        ],
        destination: '/en/trade/BTCUSDT',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
