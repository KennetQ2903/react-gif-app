import { ENDPOINT } from './settings'

export default function registerService ({ username, password }) {
  return fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Register failed')
      return true
    })
}
