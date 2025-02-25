import { useLocaleStore } from '@/lib/stores/localeStore'
import { SupportedLocale } from '@/lib/types'

export function LocaleSwitcher() {
  const selectedLocale = useLocaleStore((state) => state.locale)

  return (
    <select
      value={selectedLocale}
      onChange={(e) => {
        useLocaleStore.setState({ locale: e.target.value as SupportedLocale })
      }}
    >
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  )
}
