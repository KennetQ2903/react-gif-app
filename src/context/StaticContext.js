import { createContext } from 'react'

const StaticContext = createContext({
  user: null,
  rol: null,
  auth: false
})
export default StaticContext
