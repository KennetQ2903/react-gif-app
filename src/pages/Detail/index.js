import GIf from '../../components/Gif/Gif'
import useGlobalGif from '../../hooks/useGlobalGif'

export const Detail = ({ params }) => {
  const gifs = useGlobalGif()
  const { id } = params
  const gif = gifs.find(singleGif => singleGif.id === id)
  return <GIf {...gif} />
}
