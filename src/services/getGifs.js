import { API_KEY, API_URL } from './settings'
export default function getGif ({ keyword = 'nami', page = 0, limit = 5 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=r&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
      const { data = [] } = res
      const gifs = data.map(image => {
        const { title, id, images } = image
        const { url } = images.downsized_still
        return { title, id, url }
      })
      return gifs
    })
    .catch(err => {
      console.log(err)
    })
}
