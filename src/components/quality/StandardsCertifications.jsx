import { useEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import { accreditations } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

export default function StandardsCertifications() {
  const trackRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current) return
    const tween = gsap.to(trackRef.current, { xPercent: -50, duration: 22, ease: 'none', repeat: -1 })
    return () => tween.kill()
  }, [])

  const loop = [...accreditations, ...accreditations]

  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-muted py-16 md:py-20">
      <RouteBackground />
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Standards & Certifications</SectionLabel>
          <SectionHeading className="mt-3">
            Held to every standard our buyers require
          </SectionHeading>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
            We align our operations with recognized global safety and trade standards. Holding these certifications
            ensures smooth customs clearance and easy entry into international markets.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-4">
          {loop.map((a, i) => (
            <span
              key={`${a}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-card"
            >
              <ShieldCheck size={15} className="text-gold-deep" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
