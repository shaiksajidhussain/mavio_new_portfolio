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
    <section ref={sectionRef} className="container-px mx-auto max-w-container py-14 md:py-20">
      <Reveal
        as="div"
        stagger={0}
        className="grid grid-cols-2 rounded-2xl border border-line bg-surface shadow-card md:grid-cols-4"
      >
        {trustStats.map((stat, i) => {
          const Icon = statIcons[i]
          const last = i === trustStats.length - 1
          return (
            <div
              key={stat.label}
              className={[
                'flex min-h-[7.5rem] items-center gap-4 px-6 py-8 sm:min-h-[8.5rem] sm:px-8 md:min-h-[9.5rem] md:py-10',
                i % 2 === 0 ? 'border-r border-line' : '',
                i < 2 ? 'border-b border-line md:border-b-0' : '',
                !last ? 'md:border-r md:border-line' : '',
              ].join(' ')}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-deep/10 text-gold-deep sm:h-14 sm:w-14">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-mono text-2xl font-semibold text-ink sm:text-3xl">
                  <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
                  {stat.suffix}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
