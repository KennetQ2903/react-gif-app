import React from 'react'
import './Gif.css'
import { Link } from 'wouter'
import { Fav } from 'components/Fav'
const GIf = ({ id, title, url } = {}) => {
  return (
    <div className='Gif'>
      <h4>{title}</h4>
      <Link to={`/gif/${id}`} role='Gif'>
        <img src={url} alt={title} />
      </Link>
      <div className='gif-options'>
        <Fav id={id} />
      </div>
    </div>
  )
}

export default React.memo(GIf, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
