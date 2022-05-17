const apiKey = 'uxeYKA1feq3Xs7mpEnl9srRLm3r5wZGk'

export default function getGifByID ({ id }) {
  const apiURI = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
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
