import { useCallback, useEffect, useState } from 'react'
import { ToastMessage } from 'components/Toasts'
import { Button } from 'primereact/button'
import { useUser } from 'hooks/useUser'
import ModalPortal from 'components/Modal'
import { Login } from 'components/Login'

const HEARTS = ['pi pi-heart', 'pi pi-heart-fill']
export const Fav = ({ id }) => {
  const [heart, setHeart] = useState(HEARTS[0])
  const [requestLogin, setRequestLogin] = useState(false)
  const [showModal, setModal] = useState(false)
  const { isLoggedIn, addFav, favs } = useUser()
  // const isFav = () => favs.some(favId => favId === id)
  const fav = () => {
    addFav({ id })
  }
  useEffect(() => {
    favs.some(favId => favId === id) ? setHeart(HEARTS[1]) : setHeart(HEARTS[0])
    // console.log(isFav)
  }, [favs, id])

  const loginRequest = useCallback(() => {
    setRequestLogin(true)
    setModal(true)
    setTimeout(() => {
      setRequestLogin(false)
    }, 3000)
  }, [])

  const handleCloseModal = () => {
    setModal(false)
  }

  const handelLogin = () => {
    setModal(false)
  }

  return (
    <>
      <div>{
        isLoggedIn
          ? <Button style={{ color: 'red' }} icon={heart} onClick={fav} className='p-button-rounded  p-button-help p-button-text' aria-label='Favorite' />
          : <Button style={{ color: 'red' }} icon={HEARTS[0]} onClick={loginRequest} className='p-button-rounded  p-button-help p-button-text' aria-label='Favorite' />
      }
      </div>
      <ToastMessage visibilityMsg={requestLogin} severity='info' summary='Guardar Favorito' detail='Debe iniciar sesion para guardar este GIF en Favoritos' />
      {
        showModal &&
          <ModalPortal onClose={handleCloseModal}>
            <h3>iniciar Sesion</h3>
            <Login onLogin={handelLogin} />
          </ModalPortal>
      }
    </>
  )
}
