import { useEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import { accreditations } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function Accreditations() {
  const trackRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current) return
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 22,
      ease: 'none',
      repeat: -1,
    })
    return () => tween.kill()
  }, [])

  const loop = [...accreditations, ...accreditations]

  return (
    <section className="relative border-y border-line bg-bg-muted py-10">
      <RouteBackground />
      <div className="container-px mx-auto mb-5 max-w-container">
        <SectionLabel>Accreditations</SectionLabel>
      </div>
      <div className="overflow-hidden">
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
