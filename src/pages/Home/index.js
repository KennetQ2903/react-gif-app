import { Link, useLocation } from 'wouter'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import './Home.css'
import { Spinner } from '../../components/Spinner/Spinner'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
const POPULAR_GIFS = ['Nami', 'Boa Hancock', 'Nico Robin', 'Zoro']
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
    <>
      <form onSubmit={searchKeyword} className='inputtext'>
        <div className='col-12 md:col-4'>
          <div className='p-inputgroup'>
            <InputText value={keyword} onChange={handleSearch} placeholder='Buscar GIFS' />
            <Button icon='pi pi-search' className='p-button-primary' />
          </div>
        </div>
      </form>
      <h4 className='App-title'>Los gifs mas populares</h4>
      <div className='flex-tags'>
        {
            POPULAR_GIFS.map(gif => {
              return (
                <Link className='tag-item' key={gif} to={`/search/${gif}`}>
                  <Tag className='mr-2 p-tag' value={gif} rounded />
                </Link>
              )
            })
        }
      </div>
      <h4>Ultimas Busquedas</h4>
      {
        loading
          ? <Spinner />
          : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}
