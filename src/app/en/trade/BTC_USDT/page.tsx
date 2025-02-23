import { dictionary } from '@/app/[locale]/dictionary'
import { PageProps } from '@/lib/types/types'
import { Params } from 'next/dist/server/request/params'

export async function generateMetadata({ params }: { params: Params }) {
  const pathname = params?.toString() || ''
  const locale = params?.toLocaleString() || 'en'
  const pageRoute = pathname.slice(3)

  return dictionary[pageRoute][locale] || dictionary[pageRoute].default
}

// export default function TradePage({ params }: { params: string }) {
// const locale = params?.toLocaleString() as SupportedLocale
// const selectedLocale = SupportedLocales.includes(locale) ? locale : 'en'
// const dict = getDictionary(selectedLocale)

//   return (
//     <LocaleLayout locale={selectedLocale}>
//       <h1>{dict.title}</h1>
//       <p>{dict.description}</p>
//     </LocaleLayout>
//   )
// }

export default function TradePage({ params }: PageProps) {
  const locale = params.locale
  // const selectedLocale = SupportedLocales.includes(locale) ? locale : 'en'
  // const dict = getDictionary(selectedLocale)

  return (
    <>
      {/*<LocaleLayout locale={selectedLocale}>*/}
      <h1>{locale}</h1>
      <p>페이지 열기</p>
      {/*</LocaleLayout>*/}
    </>
  )
}
