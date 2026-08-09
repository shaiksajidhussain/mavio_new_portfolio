import { useEffect, useRef } from 'react'
import { hero, partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function PartnerHero() {
  const { role, setRole } = usePartnerRole()
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
        <SectionLabel tone="onDark">{partnerPage.hero.eyebrow}</SectionLabel>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {partnerPage.hero.heading}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {partnerPage.hero.subheading}
        </p>

        <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
          {['buyer', 'supplier'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium capitalize transition-colors ${
                role === r ? 'bg-gold-gradient text-navy-deep' : 'text-white/80 hover:text-white'
              }`}
            >
              I'm a {r}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
