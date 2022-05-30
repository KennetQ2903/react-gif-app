import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTags from 'services/getTrendingService'
import { List, Tag, Title } from './styles'
const TrendingTags = () => {
  const [tags, setTags] = useState([])
  useEffect(() => {
    getTrendingTags().then(res => {
      setTags(res)
    })
  }, [])
  return (
    <div>
      <Title>Tendencias</Title>
      <List>
        {
        tags.map((gif, index) => {
          return (
            <Link key={gif} to={`/search/${gif}`}>
              <Tag index={index}>{gif}</Tag>
            </Link>
          )
        })
      }
      </List>
    </div>
  )
}

export default TrendingTags
