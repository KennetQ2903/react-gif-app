import { Spinner } from 'components/Spinner/Spinner'
import { ListOfGifs } from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import LazyTrending from 'components/TrendingTags/TrendingTags'
import './Home.css'
import HeaderApp from 'components/Header/HeaderApp'
import { useLocation } from 'wouter'
import { useCallback } from 'react'
import { Helmet } from 'react-helmet'
export const Home = () => {
  const { loading, gifs } = useGifs({ limit: 25 })
  const pushLocation = useLocation()[1] // [0] returs actual location

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <div>
      <Helmet>
        <title>Home | nmkzGIF</title>
      </Helmet>
      <HeaderApp onSubmit={handleSubmit} />
      <div className='grid grid-nogutter'>
        <div className='col-12 sm:col-12 md:col-12 lg:col-10' style={{ minHeight: '100vh' }}>
          <h5 style={{ textAlign: 'left', marginLeft: '1.5em' }}>Ultima Busqueda</h5>
          {
            loading
              ? <Spinner />
              : <ListOfGifs gifs={gifs} />
          }
        </div>
        <div className='col'>
          <LazyTrending />
        </div>
      </div>
    </div>
  )
}
