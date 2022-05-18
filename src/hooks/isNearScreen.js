import { useEffect, useRef, useState } from 'react'

export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
  const elementRef = useRef()
  const [show, setShow] = useState(false)
  useEffect(function () {
    let observer
    const element = externalRef ? externalRef.current : elementRef.current
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      if (typeof element !== 'undefined') observer.observe(element)
      return () => observer.disconnect()
    })
  })
  return { show, elementRef }
}
