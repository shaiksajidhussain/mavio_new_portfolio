import { useEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import { accreditations } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function StandardsCertifications() {
  const trackRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current) return
    const tween = gsap.to(trackRef.current, { xPercent: -50, duration: 22, ease: 'none', repeat: -1 })
    return () => tween.kill()
  }, [])

  const loop = [...accreditations, ...accreditations]

  return (
    <section className="border-y border-line bg-bg-muted py-16 themeblack:bg-black md:py-20">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Standards & Certifications</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            Held to every standard our buyers require
          </h2>
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
