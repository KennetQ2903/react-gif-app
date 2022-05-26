import { ENDPOINT } from './settings'

export default function loginService ({ username, password }) {
  return fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Username or password is wrong')
      return res.json()
    })
    .then(res => {
      const { jwt } = res
      return jwt
    })
}
