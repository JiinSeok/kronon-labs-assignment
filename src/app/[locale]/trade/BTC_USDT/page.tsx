import LocaleLayout from '@/app/[locale]/LocaleLayout'
import { dictionary, getDictionary } from '@/app/[locale]/dictionary'
import { SupportedLocale, SupportedLocales } from '@/lib/types/types'
import { Params } from 'next/dist/server/request/params'

export async function generateMetadata({ params }: { params: Params }) {
  const pathname = params?.toString() || ''
  const locale = params?.toLocaleString() || 'en'
  const pageRoute = pathname.slice(3)

  return dictionary[pageRoute][locale] || dictionary[pageRoute].default
}

export default function TradePage({ params }: { params: Params }) {
  const locale = params?.toLocaleString() as SupportedLocale
  const selectedLocale = SupportedLocales.includes(locale) ? locale : 'en'
  const dict = getDictionary(selectedLocale)

  return (
    <LocaleLayout locale={selectedLocale}>
      <h1>{dict.title}</h1>
      <p>{dict.description}</p>
    </LocaleLayout>
  )
}
