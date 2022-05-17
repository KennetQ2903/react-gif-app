import GIf from 'components/Gif/Gif'
import './listOfGifs.css'
export const ListOfGifs = ({ gifs }) => {
  return (
    <div className='container-gifs'>
      {
        gifs.map(({ title, id, url }) => (
          <GIf
            id={id}
            key={id}
            title={title}
            url={url}
          />
        ))
      }
    </div>
  )
}
