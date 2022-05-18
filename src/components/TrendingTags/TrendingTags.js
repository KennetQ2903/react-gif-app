import { Spinner } from 'components/Spinner/Spinner.js'
import useNearScreen from 'hooks/isNearScreen'
import { lazy, Suspense } from 'react'

const TrendingTags = lazy(
  () => import('./TrendingSearches.js')
)

export default function LazyTrending () {
  const { show, elementRef } = useNearScreen({ distance: '100px' })
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingTags /> : null}
      </Suspense>
    </div>
  )
}
