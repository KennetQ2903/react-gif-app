import { useEffect, useRef } from 'react'
// SEO => SEARCH ENGINE OPTIMIZATION
export default function useSEO ({ description, title }) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

  useEffect(() => {
    const previousTitle = prevTitle.current
    if (title) {
      document.title = `${title} | nmkzGIF`
    }
    return () => {
      document.title = previousTitle
    }
  }, [title])
  useEffect(() => {
    const previousDesc = prevDescription.current
    const metaDescription = document.querySelector('meta[name="description"]')
    if (description) {
      metaDescription.setAttribute('content', description)
    }
    return () => {
      metaDescription.setAttribute('content', previousDesc)
    }
  }, [description])
}
