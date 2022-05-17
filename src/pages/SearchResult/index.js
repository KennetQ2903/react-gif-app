import { Spinner } from 'components/Spinner/Spinner'
import { ListOfGifs } from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import { Button } from 'primereact/button'

export const SearchResult = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const handleNextPage = () => setPage(prevPage => prevPage + 1)
  if (loading) return <Spinner />
  return (
    <>
      <ListOfGifs gifs={gifs} />
      <Button label='Next Page' style={{ margin: '1em' }} onClick={handleNextPage} icon='pi pi-arrow-right' iconPos='right' />
    </>
  )
}
