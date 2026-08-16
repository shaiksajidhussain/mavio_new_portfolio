import { useEffect, useRef } from 'react'
import { Plane, Truck } from 'lucide-react'
import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { heading, subheading, backgroundImage, origin, destination } = supplyChainVisibilityPage.logistics

export default function LogisticsCoordination() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const cardRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.to(cardRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })

      const length = pathRef.current.getTotalLength()
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: length, strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: cardRef.current, start: 'top 75%', end: 'top 25%', scrub: 0.5 },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 md:py-24">
      <div ref={bgRef} className="absolute inset-0 -z-10 scale-125">
        <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-navy-deep/75" />

      <span className="pointer-events-none absolute right-[10%] top-[16%] hidden sm:block">
        <Plane
          aria-hidden
          size={24}
          strokeWidth={1.5}
          className="animate-float-slow text-gold/60"
          style={{ '--float-rotate': '30deg' }}
        />
      </span>
      <span className="pointer-events-none absolute left-[8%] bottom-[18%] hidden md:block">
        <Truck aria-hidden size={20} strokeWidth={1.5} className="animate-float-fast text-gold/50" />
      </span>

      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel tone="onDark">Logistics Coordination</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">{subheading}</p>
        </Reveal>

        <div ref={cardRef} className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
          <svg viewBox="0 0 400 100" className="w-full overflow-visible" preserveAspectRatio="none">
            <path
              ref={pathRef}
              d="M 30 70 Q 200 -10 370 70"
              fill="none"
              stroke="#e0b05a"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="30" cy="70" r="6" fill="#ffbf00" />
            <circle cx="370" cy="70" r="6" fill="#e0b05a" />
          </svg>
          <div className="mt-4 flex items-center justify-between text-sm font-medium text-white">
            <span>{origin}</span>
            <span className="text-white/50">&rarr;</span>
            <span>{destination}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
