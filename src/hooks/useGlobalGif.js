import { useContext } from 'react'
import GifContext from '../context/GifContext'

export default function useGlobalGif () {
  return useContext(GifContext).gifs
}
