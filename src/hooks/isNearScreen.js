import { useEffect, useRef, useState } from 'react'

export default function useNearScreen ({ distance = '100px' } = {}) {
  const elementRef = useRef()
  const [show, setShow] = useState(false)
  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })
    observer.observe(elementRef.current)
    return () => observer.disconnect()
  })
  return { show, elementRef }
}
