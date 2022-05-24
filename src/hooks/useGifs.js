import { useContext, useEffect, useState } from 'react'
import getGif from 'services/getGifs'
import GifContext from 'context/GifContext'
const INITIAL_PAGE = 0
export function useGifs ({ keyword, limit } = { keyword: 'anime', limit: 5 }) {
  const { gifs, setGifs } = useContext(GifContext)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState(false)
  const keywordToUse = keyword || localStorage.getItem('lastKeyWord') || 'anime'

  useEffect(() => {
    setLoading(true)
    getGif({ keyword: keywordToUse, limit }).then(res => {
      setGifs(res)
      setLoading(false)
      localStorage.setItem('lastKeyWord', keyword)
    })
      .catch(err => {
        console.log(err)
      })
  }, [setGifs, keyword, keywordToUse, limit])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGif({ keyword: keywordToUse, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [page, keywordToUse, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
