import Gif from 'components/Gif/Gif'
import { Spinner } from 'components/Spinner/Spinner'
import { useGifs } from 'hooks/useGifs'
import { useEffect, useState } from 'react'

export const NotFound = () => {
  const { gifs, loading } = useGifs({ keyword: '404', limit: 25 })
  const [randomGif, setRandomGif] = useState(0)
  useEffect(() => {
    const random = Math.floor(Math.random() * 25) + 1
    setRandomGif(random)
  }, [])
  return (
    <div>
      <h1>Ups...Parece que aqui no hay nada</h1>
      {
              loading
                ? <Spinner />
                : <Gif {...gifs[randomGif]} />
          }
    </div>
  )
}
