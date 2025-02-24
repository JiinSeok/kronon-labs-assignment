'use client'

import classNames from 'classnames'

interface LoadingSpinnerProps {
  className?: string
  full?: boolean
}

export default function LoadingSpinner({ className, full }: LoadingSpinnerProps) {
  return (
    <article
      className={classNames(
        // 기본 컨테이너
        'relative rounded-full w-full h-full p-[10%] overflow-hidden',
        // full 옵션일 때 (예: 페이지 전체 오버레이)
        full && 'fixed z-16 inset-0 bg-gray-50',
        className,
      )}
      // full일 경우 헤더 높이에 따른 상단 위치 (CSS 변수 --root-header-height-lg를 사용)
      style={full ? { top: 'calc(var(--root-header-height-lg) + 1px)' } : undefined}
    >
      <div className="absolute top-1/2 left-1/2 z-8 transform -translate-x-1/2 -translate-y-1/2 flex flex-row flex-nowrap justify-evenly items-center w-full h-full max-w-[16rem] max-h-[16rem] gap-[10%] origin-center animate-spinner">
        {[1, 2, 3, 4, 5].map((_, i) => {
          let bgColorClass = ''
          switch (i) {
            case 0:
              bgColorClass = 'bg-yellow-300'
              break
            case 1:
              bgColorClass = 'bg-yellow-300'
              break
            case 2:
              bgColorClass = 'bg-yellow-300'
              break
            case 3:
              bgColorClass = 'bg-yellow-300'
              break
            case 4:
              bgColorClass = 'bg-yellow-300'
              break
          }
          return (
            <div
              key={`loading-circle-${i}`}
              className={classNames('block rounded-full w-[10%] max-w-[2rem] aspect-square', bgColorClass)}
            />
          )
        })}
      </div>
    </article>
  )
}
