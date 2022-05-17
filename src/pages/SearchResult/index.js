import { Spinner } from '../../components/Spinner/Spinner'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
export const SearchResult = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
  if (loading) return <Spinner />
  return (
    <ListOfGifs gifs={gifs} />
  )
}
