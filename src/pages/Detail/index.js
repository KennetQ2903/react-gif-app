import GIf from 'components/Gif/Gif'
import { Spinner } from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
export const Detail = ({ params }) => {
  const { id } = params
  const { gif, error, loading } = useSingleGif({ id })
  if (loading) {
    return (
      <>
        <Helmet><title>Cargando...</title></Helmet>
        <Spinner />
      </>
    )
  }
  if (error) return <Redirect to='/404' />
  if (!gif) return null
  return (
    <>
      <Helmet><title>{`${gif.title} | nmkzGIF`}</title></Helmet>
      <GIf {...gif} />
    </>
  )
}
