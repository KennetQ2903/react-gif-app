import { Tag } from 'primereact/tag'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTags from 'services/getTrendingService'
import './TrendingTags.css'
import useNearScreen from 'hooks/isNearScreen'
const TrendingTags = () => {
  const [tags, setTags] = useState([])
  useEffect(() => {
    getTrendingTags().then(res => {
      setTags(res)
    })
  }, [])
  return (
    <div>
      <h5 className='flex-tags'>Categorias Populares</h5>
      <div className='flex-tags'>
        {
        tags.map(gif => {
          return (
            <Link className='tag-item' key={gif} to={`/search/${gif}`}>
              <Tag className='mr-2 p-tag' value={gif} rounded />
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default function LazyTrending () {
  const { show, elementRef } = useNearScreen({ distance: '50px' })
  return (
    <div ref={elementRef}>
      {show ? <TrendingTags /> : null}
    </div>
  )
}
