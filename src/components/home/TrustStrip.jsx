import { useEffect, useRef } from 'react'
import { trustStats } from '../../data/siteContent'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function TrustStrip() {
  const containerRef = useRef(null)
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
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true, fastScrollEnd: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toLocaleString('en-US')
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-navy py-12 dark:bg-navy-deep themeblack:bg-black">
      <div
        ref={containerRef}
        className="container-px mx-auto grid max-w-container grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-0"
      >
        {trustStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center md:border-l md:border-white/10 md:px-8 md:text-left md:first:border-l-0 md:first:pl-0 ${i % 2 === 0 ? 'border-r border-white/10 pr-6 md:border-r-0 md:pr-8' : 'pl-2 md:pl-8'}`}
          >
            <p className="font-mono text-3xl font-semibold text-gold md:text-4xl">
              <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
              {stat.suffix}
            </p>
            <p className="mt-1 text-xs text-white/60 md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
