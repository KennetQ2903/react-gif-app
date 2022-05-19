import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

import './HeaderApp.css'
function HeaderApp ({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }
  const searchKeyword = (e) => {
    e.preventDefault()
    onSubmit({ keyword })
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
    </>
  )
}

export default React.memo(HeaderApp)
