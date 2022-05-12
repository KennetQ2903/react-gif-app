import { useEffect, useState } from 'react'
import getGif from '../services/getGifs'
import GIf from './Gif'

export const ListOfGifs = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getGif({ keyword }).then(res => {
      setGifs(res)
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }, [keyword])
  return (
    <div>
      {
        loading
          ? <h1>Cargando...</h1>
          : gifs.map(({ title, id, url }) => (
            <GIf
              id={id}
              key={id}
              title={title}
              url={url}
            />
          ))
      }
    </div>
  )
}
