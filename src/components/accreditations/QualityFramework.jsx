import { useEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import { accreditationsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { heading, body } = accreditationsPage.framework
const BG_IMAGE = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2200&q=80'

export default function QualityFramework() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })

      gsap.to(badgeRef.current, {
        rotate: 360,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 md:py-24">
      <div ref={bgRef} className="absolute inset-0 -z-10 scale-125">
        <img src={BG_IMAGE} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-navy-deep/80" />

      <div className="container-px relative mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <Reveal stagger={0}>
          <SectionLabel tone="onDark">Our Framework</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{body}</p>
        </Reveal>

        <div
          ref={badgeRef}
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gold/50 md:h-36 md:w-36"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-navy-deep md:h-20 md:w-20">
            <ShieldCheck size={32} />
          </span>
        </div>
      </div>
    </section>
  )
}
