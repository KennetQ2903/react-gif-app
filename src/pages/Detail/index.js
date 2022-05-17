import { useContext, useEffect, useState } from 'react'

import '../../components/Gif/Gif'
import { Spinner } from '../../components/Spinner/Spinner'
import StaticContext from '../../context/StaticContext'
import getGifByID from '../../services/getGifByID'
export const Detail = ({ params }) => {
  const context = useContext(StaticContext)
  console.log(context)
  const { id } = params
  const [gif, setGif] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getGifByID({ id }).then(res => {
      setGif(res)
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }, [id])
  return (
    <>
      {
        loading
          ? <Spinner />
          : (
            <div className='Gif'>
              <img src={gif.url} alt={gif.id} />
            </div>
            )
      }
    </>
  )
}
