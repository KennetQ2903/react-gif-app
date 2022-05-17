import { API_KEY, API_URL } from './settings'

export default function getGifByID ({ id }) {
  const apiURI = `${API_URL}/gifs/${id}?api_key=${API_KEY}`
  return fetch(apiURI)
    .then(res => res.json())
    .then(res => {
      const { data = {} } = res
      const { id, url } = data.images.downsized_still
      return { id, url }
    })
    .catch(err => {
      console.log(err)
    })
}
