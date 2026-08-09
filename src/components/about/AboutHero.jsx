import { useEffect, useRef } from 'react'
import { aboutPage, brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function AboutHero() {
  const sectionRef = useRef(null)
  const copyRef = useRef(null)
  const frameRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        copyRef.current.children,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', delay: 0.15 }
      )

      gsap.fromTo(
        frameRef.current,
        { scale: 0.55, borderRadius: 40 },
        {
          scale: 1,
          borderRadius: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        imgRef.current,
        { scale: 1.25 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-bg-muted">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(rgb(11 36 66 / 0.35) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 60% 100% at 20% 50%, black, transparent)',
          }}
        />

        <div ref={frameRef} className="absolute inset-0 origin-bottom overflow-hidden shadow-2xl">
          <img ref={imgRef} src={aboutPage.hero.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-navy-deep/10" />

          <div ref={copyRef} className="container-px absolute inset-x-0 bottom-0 mx-auto max-w-container pb-10 md:pb-16">
            <SectionLabel tone="onDark">{aboutPage.hero.eyebrow}</SectionLabel>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              {aboutPage.hero.heading}
            </h1>
            <p className="mt-3 max-w-lg text-sm text-white/70 md:text-base">
              Est. {brand.founded} &middot; {brand.hq}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {aboutPage.hero.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
