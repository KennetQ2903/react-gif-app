import { API_KEY, API_URL } from './settings'

export default function getTrendingTags () {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
  return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
      const { data = [] } = res
      return data
    })
    .catch(err => {
      console.log(err)
    })
}
