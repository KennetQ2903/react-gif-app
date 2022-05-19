import React from 'react'
import './Gif.css'
import { Link } from 'wouter'
const GIf = ({ id, title, url } = {}) => {
  return (
    <Link to={`/gif/${id}`} className='Gif' role='Gif'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  )
}

export default React.memo(GIf, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
