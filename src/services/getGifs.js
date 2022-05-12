const apiKey = 'uxeYKA1feq3Xs7mpEnl9srRLm3r5wZGk'

export default function getGif ({ keyword = 'nami' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=r&lang=en`
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
