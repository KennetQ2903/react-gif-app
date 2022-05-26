import { ENDPOINT } from './settings'

export default function addFavService ({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ jwt })
  })
    .then(res => {
      if (!res.ok) throw new Error('Username or password is wrong')
      return res.json()
    })
    .then(res => {
      const { favs } = res
      return favs
    })
}
