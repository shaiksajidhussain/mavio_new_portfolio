import { useEffect, useRef } from 'react'
import { Award, Globe2, MapPin, Radar } from 'lucide-react'
import { trustStats } from '../../data/siteContent'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import Reveal from '../ui/Reveal'

const statIcons = [Radar, MapPin, Globe2, Award]

export default function TrustStrip() {
  const sectionRef = useRef(null)
  const numberRefs = useRef([])

  useEffect(() => {
    if (prefersReducedMotion) {
      numberRefs.current.forEach((el, i) => {
        if (el) el.textContent = trustStats[i].value
      })
      return
    }
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return
        const target = Number(trustStats[i].value.replace(/,/g, ''))
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toLocaleString('en-US')
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="container-px mx-auto max-w-container py-10 md:py-14">
      <Reveal
        as="div"
        stagger={0}
        className="grid grid-cols-2 gap-6 rounded-2xl border border-line bg-surface px-6 py-6 shadow-card sm:px-8 md:grid-cols-4 md:gap-4"
      >
        {trustStats.map((stat, i) => {
          const Icon = statIcons[i]
          return (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-deep/10 text-gold-deep">
                <Icon size={18} />
              </span>
              <div>
                <p className="font-mono text-xl font-semibold text-ink sm:text-2xl">
                  <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
                  {stat.suffix}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
