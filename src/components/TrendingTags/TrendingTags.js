import './TrendingTags.css'
import useNearScreen from 'hooks/isNearScreen'
import { lazy, Suspense } from 'react'
import { Spinner } from 'components/Spinner/Spinner'

const TrendingTags = lazy(
  () => import('./TrendingSearches.js')
)

export default function LazyTrending () {
  const { show, elementRef } = useNearScreen({ distance: '50px' })
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingTags /> : null}
      </Suspense>
    </div>
  )
}
