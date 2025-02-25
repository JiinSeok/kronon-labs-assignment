import { ComponentProps } from '@/lib/types/types'
import classNames from 'classnames'
import React from 'react'

export default function Container({ children, className }: ComponentProps) {
  const combinedClass = classNames(className, 'relative bg-white dark:bg-gray-800 rounded p-4')
  return (
    <section className={combinedClass}>
      <div className="text-sm">{children}</div>
    </section>
  )
}

function Tabs({ tabs, initialTab }: { tabs?: string[]; initialTab: string }) {
  // const [selectedTab, setSelectedTab] = useState(initialTab)

  return (
    <div className="flex-col mb-1 w-full">
      <nav className={'flex items-center gap-1'}>
        <ul>
          <h2 className="font-semibold text-gray-900">{initialTab}</h2>
          {tabs?.map((tab) => (
            <li key={tab}>
              <h2 className="text-gray-400 ">
                {tab}
                {/*<a href={tab.href}>*/}
              </h2>
            </li>
          ))}
        </ul>
      </nav>
      {/*<Line />*/}
    </div>
  )
}

function Line() {
  return <div className={'h-[1px] w-full bg-gray-200 mb-2'} />
}

function ContentSkeleton() {
  return (
    <div className="animate-pulse w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded p-2">
      <span className="opacity-50 text-sm w-full h-full flex justify-center items-center">Now preparing</span>
    </div>
  )
}

Container.Tabs = Tabs
Container.Line = Line
Container.Skeleton = ContentSkeleton
