import { useContext, useEffect, useState } from 'react'
import getGif from 'services/getGifs'
import GifContext from 'context/GifContext'
export function useGifs ({ keyword } = { keyword: null }) {
  // const [ gifs, setGifs ] = useState( [] )
  const { gifs, setGifs } = useContext(GifContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyWord') || 'anime'
    getGif({ keyword: keywordToUse }).then(res => {
      setGifs(res)
      setLoading(false)
      localStorage.setItem('lastKeyWord', keyword)
    })
      .catch(err => {
        console.log(err)
      })
  }, [keyword, setGifs])
  return { loading, gifs }
}
