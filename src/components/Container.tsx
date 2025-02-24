import { LayoutProps } from '@/lib/types/types'
import classNames from 'classnames'

export default function Container({ children, className }: LayoutProps) {
  const combinedClass = classNames(className, 'bg-white dark:bg-gray-800 rounded p-4')
  return (
    <section className={combinedClass}>
      <div className="text-sm">{children}</div>
    </section>
  )
}

function Tabs({ tabs }: { tabs: any[] }) {
  return (
    <nav>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a href={tab.href}>
              <h2 className="font-semibold mb-2">{tab.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Container.Tabs = Tabs
