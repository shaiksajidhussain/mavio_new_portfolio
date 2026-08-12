import { useEffect, useRef } from 'react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { heading, subheading, stats } = exportLogisticsPage.trust

export default function LogisticsStats() {
  const containerRef = useRef(null)
  const numberRefs = useRef([])

  useEffect(() => {
    if (prefersReducedMotion) {
      numberRefs.current.forEach((el, i) => {
        if (el) el.textContent = stats[i].value
      })
      return
    }

    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return
        const target = Number(stats[i].value.replace(/,/g, ''))
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
    <section className="bg-navy py-16 dark:bg-navy-deep themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel tone="onDark">Why Businesses Trust Our Logistics</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">{subheading}</p>
        </Reveal>

        <div
          ref={containerRef}
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-0"
        >
          {stats.map((stat, i) => (
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
      </div>
    </section>
  )
}
