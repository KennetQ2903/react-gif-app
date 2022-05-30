/** @jsxImportSource @emotion/react */
import Gif from 'components/Gif/Gif'
import { Spinner } from 'components/Spinner/Spinner'
import { useGifs } from 'hooks/useGifs'
import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { Helmet } from 'react-helmet'
import Button from 'components/Button'

export const NotFound = () => {
  const { gifs, loading } = useGifs({ keyword: '404', limit: 25 })
  const [randomGif, setRandomGif] = useState(0)

  const errorPageStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  text-align: center;
  `
  const errorText = css`
  font-size: calc(10px + 2vmin);
  text-align: center;
  margin: 10px auto;
  `

  // otra forma de usar emotion con una funcion que recibe un objeto y ademas utilizando el dinamismo de JS
  const WEIGHT = 'bold'

  const errorCode = css({
    fontSize: 'calc(3rem + 2vmin)',
    fontWeight: WEIGHT,
    fontStyle: 'italic',
    textAlign: 'center'
  })

  useEffect(() => {
    const random = Math.floor(Math.random() * 25) + 1
    setRandomGif(random)
  }, [])
  return (
    <>
      <Helmet>
        <title>Error 404 | nmkzGIF</title>
      </Helmet>
      <div css={errorPageStyles}>
        <span css={errorCode}>404</span>
        <span css={errorText}>Ups...Parece que aqui no hay nada</span>
        {
          loading
            ? <Spinner />
            : <Gif {...gifs[randomGif]} />
        }
        <br />
        <Button href='/'><i className='pi pi-arrow-left' /> Home</Button>
      </div>
    </>
  )
}
