import { useState, useEffect } from 'react'
import getSingleGif from 'services/getSingleGif'
import { useGifs } from './useGifs'
export default function useSingleGif ({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gifFromCache)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (!gif) {
      getSingleGif({ id })
        .then(gif => {
          setGif(gif)
          setError(false)
          setLoading(false)
        })
        .catch(err => {
          setError(true)
          console.log(err)
          setLoading(false)
        })
        .finally(
          setLoading(false)
        )
    } else {
      setLoading(false)
    }
  }, [gif, id])
  return { gif, error, loading }
}
