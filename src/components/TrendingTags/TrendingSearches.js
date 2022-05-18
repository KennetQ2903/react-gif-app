import { Tag } from 'primereact/tag'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTags from 'services/getTrendingService'
import './TrendingTags.css'
const TrendingTags = () => {
  const [tags, setTags] = useState([])
  useEffect(() => {
    getTrendingTags().then(res => {
      setTags(res)
    })
  }, [])
  return (
    <div>
      <h5>Categorias Populares</h5>
      <div>
        {
        tags.map(gif => {
          return (
            <Link key={gif} to={`/search/${gif}`}>
              <Tag className='mr-2 p-tag' value={gif} rounded />
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default TrendingTags
