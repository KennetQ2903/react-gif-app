import React, { useCallback } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import './HeaderApp.css'
import { useLocation } from 'wouter'
import { Dropdown } from 'primereact/dropdown'
import { useForm } from 'hooks/useForm'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function HeaderApp ({ initialKeyword = '', initialRating = 'g' }) {
  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })
  const pushLocation = useLocation()[1] // [0] returs actual location

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${keyword}/${rating}`)
  }, [pushLocation, rating])

  const handleSearch = (e) => {
    updateKeyword(e.target.value)
  }
  const searchKeyword = (e) => {
    e.preventDefault()
    handleSubmit({ keyword })
  }

  const handleSelectOption = e => {
    updateRating(e.target.value)
  }
  return (
    <div>
      <form onSubmit={searchKeyword} className='grid grid-nogutter inputtext'>
        <div className='col-12 md:col-4 m-2'>
          <div className='p-inputgroup'>
            <InputText value={keyword} onChange={handleSearch} placeholder='Buscar GIFS' />
            <Button icon='pi pi-search' className='p-button-primary' />
          </div>
        </div>
        <Dropdown className='col-12 md:col-4 m-2' value={rating} options={RATINGS} onChange={handleSelectOption} optionLabel='' placeholder='Select a Rating' />
      </form>
    </div>
  )
}

export default React.memo(HeaderApp)
