import { useEffect, useState } from 'react'
import getGif from '../services/getGifs'

export function useGifs ({ keyword }) {
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
  return { loading, gifs }
}
