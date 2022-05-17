import { useEffect, useState } from 'react'
import getGif from '../../services/getGifs'
import { Spinner } from '../../components/Spinner'
import { ListOfGifs } from '../../components/ListOfGifs'
export const SearchResult = ({ params }) => {
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
  if (loading) return <Spinner />
  return (
    <ListOfGifs gifs={gifs} />
  )
}
