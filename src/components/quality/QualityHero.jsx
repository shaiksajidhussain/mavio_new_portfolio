import { useEffect, useRef } from 'react'
import { qualityCompliancePage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { hero } = qualityCompliancePage

export default function QualityHero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const copyRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
      gsap.fromTo(
        copyRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative -mt-20 flex min-h-[85vh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img ref={imgRef} src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/55 to-navy-deep/40" />

      <div ref={copyRef} className="container-px relative mx-auto w-full max-w-container pb-14 pt-40 md:pb-20">
        <SectionLabel tone="onDark">{hero.eyebrow}</SectionLabel>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {hero.heading}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{hero.subheading}</p>
      </div>
    </section>
  )
}
