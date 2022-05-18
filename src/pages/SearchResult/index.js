import { Spinner } from 'components/Spinner/Spinner'
import { ListOfGifs } from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/isNearScreen'
import { useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'
import { ScrollTop } from 'primereact/scrolltop'
import './searchResult.css'
export const SearchResult = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { show } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const debounceNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 500), [setPage])

  useEffect(() => {
    // console.log(show)
    if (show) debounceNextPage()
  }, [show, debounceNextPage])

  if (loading) return <Spinner />

  return (
    <div>
      <h4>Busqueda "{decodeURI(keyword)}"</h4>
      <ListOfGifs gifs={gifs} />
      <ScrollTop threshold={500} behavior='smooth' className='custom-scrolltop' icon='pi pi-arrow-up' />
      <div id='visor' ref={externalRef} />
    </div>
  )
}
