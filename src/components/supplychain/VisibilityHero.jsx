import { useEffect, useRef } from 'react'
import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { hero } = supplyChainVisibilityPage
const words = hero.heading.split(' ')

export default function VisibilityHero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const wordsRef = useRef([])
  const restRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })

      gsap.fromTo(
        wordsRef.current,
        { opacity: 0, y: '100%', filter: 'blur(10px)' },
        {
          opacity: 1,
          y: '0%',
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.07,
          ease: 'power3.out',
          delay: 0.2,
        }
      )

      gsap.fromTo(
        restRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 + words.length * 0.07 + 0.15 }
      )

      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative -mt-20 flex min-h-[85vh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img ref={imgRef} src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/55 to-navy-deep/40" />

      <div ref={restRef} className="container-px relative mx-auto w-full max-w-container pb-14 pt-40 md:pb-20">
        <SectionLabel tone="onDark">{hero.eyebrow}</SectionLabel>

        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {words.map((w, i) => (
            <span key={i} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top">
              <span ref={(el) => (wordsRef.current[i] = el)} className="inline-block">
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{hero.subheading}</p>
      </div>
    </section>
  )
}
