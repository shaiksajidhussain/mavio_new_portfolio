import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, summary'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    document.documentElement.classList.add('custom-cursor-active')

    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' })
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' })
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    let revealed = false
    const handleMove = (e) => {
      setDotX(e.clientX)
      setDotY(e.clientY)
      setRingX(e.clientX)
      setRingY(e.clientY)
      if (!revealed) {
        revealed = true
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
      }
    }

    const handleDown = () => gsap.to(ring, { scale: 0.85, duration: 0.2 })
    const handleUp = () => gsap.to(ring, { scale: 1, duration: 0.2 })

    const handleOver = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) {
        gsap.to(ring, { scale: 1.7, duration: 0.3, ease: 'power2.out' })
        gsap.to(dot, { scale: 0, duration: 0.2 })
      }
    }
    const handleOut = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) {
        gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' })
        gsap.to(dot, { scale: 1, duration: 0.2 })
      }
    }
    const handleLeaveWindow = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 })
    const handleEnterWindow = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 })

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseout', handleOut)
    document.addEventListener('mouseleave', handleLeaveWindow)
    document.addEventListener('mouseenter', handleEnterWindow)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
      document.removeEventListener('mouseleave', handleLeaveWindow)
      document.removeEventListener('mouseenter', handleEnterWindow)
    }
  }, [])

  if (prefersReducedMotion) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-gold-bright opacity-0"
        style={{ marginLeft: '-4px', marginTop: '-4px' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border-[1.5px] border-gold opacity-0"
        style={{ marginLeft: '-18px', marginTop: '-18px' }}
      />
    </>
  )
}
