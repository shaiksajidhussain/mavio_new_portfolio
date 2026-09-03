import { forwardRef, useEffect, useRef, useState } from 'react'

function assignRef(ref, node) {
  if (!ref) return
  if (typeof ref === 'function') ref(node)
  else ref.current = node
}

const SmartImage = forwardRef(function SmartImage(
  { src, alt = '', className = '', priority = false, ...rest },
  forwardedRef
) {
  const localRef = useRef(null)
  const [show, setShow] = useState(Boolean(priority))

  const setRefs = (node) => {
    localRef.current = node
    assignRef(forwardedRef, node)
  }

  useEffect(() => {
    if (priority || show) return
    const node = localRef.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: '240px 0px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [priority, show])

  return (
    <img
      ref={setRefs}
        src={show ? src : 'data:image/gif;base64,R0lGODlhAQABAAAAACw='}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'low'}
      decoding="async"
      {...rest}
    />
  )
})

export default SmartImage
