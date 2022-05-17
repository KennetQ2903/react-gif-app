import { useLocation } from 'wouter'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import './Home.css'
import { Spinner } from 'components/Spinner/Spinner'
import { ListOfGifs } from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import LazyTrending from 'components/TrendingTags/TrendingTags'
export const Home = () => {
  const [keyword, setKeyword] = useState('')
  const pushLocation = useLocation()[1]

  const { loading, gifs } = useGifs()

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }
  const searchKeyword = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  return (
    <div className='Home'>
      <h1 className='App-title'>nmkzGIFS</h1>
      <form onSubmit={searchKeyword} className='inputtext'>
        <div className='col-12 md:col-4'>
          <div className='p-inputgroup'>
            <InputText value={keyword} onChange={handleSearch} placeholder='Buscar GIFS' />
            <Button icon='pi pi-search' className='p-button-primary' />
          </div>
        </div>
      </form>
      <div className='grid grid-nogutter'>
        <div className='col-12 sm:col-12 md:col-12 lg:col-10'>
          <h5 style={{ textAlign: 'left', marginLeft: '1.5em' }}>Ultimas Busquedas</h5>
          {
            loading
              ? <Spinner />
              : <ListOfGifs gifs={gifs} />
          }
        </div>
        <div className='col'>
          {
            loading ? null : <LazyTrending />
          }
        </div>
      </div>
    </div>
  )
}
