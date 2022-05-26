import Context from 'context/UserContext'
import { useCallback, useContext, useState } from 'react'
import addFavService from 'services/addFavService'
import loginService from 'services/login'
export function useUser () {
  const { jwt, favs, setJWT, setFavs } = useContext(Context)
  const [error, setError] = useState(null)
  const Errors = useCallback(({ error }) => {
    if (error === 'Failed to fetch') {
      setError('Error conectando con el servidor')
    } else if (error === 'Username or password is wrong') {
      setError('Nombre de usuario o contraseña incorrecta!')
    } else {
      setError('Algo ha salido mal :(')
    }
  }, [setError])
  const Login = useCallback(({ username, password }) => {
    setError(null)
    loginService({ username, password })
      .then(jwt => {
        sessionStorage.setItem('jwt', jwt)
        setJWT(jwt)
      }).catch(err => {
        sessionStorage.removeItem('jwt', jwt)
        Errors({ error: err.message })
      })
  }, [setJWT, Errors, jwt])
  const Logout = useCallback(() => {
    sessionStorage.removeItem('jwt', jwt)
    setJWT(null)
  }, [setJWT, jwt])

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then(setFavs)
      .catch(err => {
        Errors({ error: err.message })
      })
  }, [Errors, jwt, setFavs])

  return {
    isLoggedIn: Boolean(jwt),
    Login,
    Logout,
    isError: Boolean(error),
    ErrorMSG: error,
    addFav,
    favs
  }
}
