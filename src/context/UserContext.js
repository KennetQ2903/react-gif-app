import { createContext, useEffect, useState } from 'react'
import getFav from 'services/getFavs'

const Context = createContext({})

export function UserContextProvider ({ children }) {
  const [favs, setFavs] = useState([])
  const [jwt, setJWT] = useState(
    () => sessionStorage.getItem('jwt')
  )
  useEffect(() => {
    if (!jwt) return setFavs([])
    getFav({ jwt }).then(setFavs)
  }, [jwt])
  return (
    <Context.Provider value={{ jwt, favs, setJWT, setFavs }}>
      {children}
    </Context.Provider>
  )
}

export default Context
