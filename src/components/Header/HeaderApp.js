import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import './HeaderApp.css'
export default function HeaderApp () {
  const [keyword, setKeyword] = useState('')
  const pushLocation = useLocation()[1]

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }
  const searchKeyword = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  return (
    <>
      <Link to='/'><h1 className='App-title'>nmkzGIFS</h1></Link>
      <form onSubmit={searchKeyword} className='inputtext'>
        <div className='col-12 md:col-4'>
          <div className='p-inputgroup'>
            <InputText value={keyword} onChange={handleSearch} placeholder='Buscar GIFS' />
            <Button icon='pi pi-search' className='p-button-primary' />
          </div>
        </div>
      </form>
    </>
  )
}
