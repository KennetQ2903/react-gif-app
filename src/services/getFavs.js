import { ENDPOINT } from './settings'

export default function getFav ({ jwt }) {
  return fetch(`${ENDPOINT}/favs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwt,
      Accept: 'application/json'
    }
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
