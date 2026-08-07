import { forwardRef, useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'

const Reveal = forwardRef(function Reveal(
  { children, as: Tag = 'div', className = '', y = 56, scale = 0.94, delay = 0, stagger = 0.12, once = true },
  forwardedRef
) {
  const innerRef = useRef(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el || prefersReducedMotion) return

    const targets = stagger ? gsap.utils.toArray(el.children) : el
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay,
          stagger: stagger || 0,
          ease: 'power4.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once,
            fastScrollEnd: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setRefs = (node) => {
    innerRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    <Tag ref={setRefs} className={className}>
      {children}
    </Tag>
  )
})

export default Reveal
