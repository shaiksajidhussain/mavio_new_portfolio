import { useEffect, useRef } from 'react'
import { Plane, Ship } from 'lucide-react'
import { supplyChainVisibilityPage, trustStats } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const { heading, subheading, image, imageAlt } = supplyChainVisibilityPage.trust

export default function TrustStats() {
  const gridRef = useRef(null)
  const numberRefs = useRef([])

  useEffect(() => {
    if (prefersReducedMotion) {
      numberRefs.current.forEach((el, i) => {
        if (el) el.textContent = trustStats[i].value
      })
      return
    }

    const ctx = gsap.context(() => {
      const cards = gridRef.current.querySelectorAll('[data-card]')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true, fastScrollEnd: true },
        }
      )

      numberRefs.current.forEach((el, i) => {
        if (!el) return
        const target = Number(trustStats[i].value.replace(/,/g, ''))
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true, fastScrollEnd: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toLocaleString('en-US')
          },
        })
      })
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden bg-navy py-16 dark:bg-navy-deep themeblack:bg-black md:py-24">
      <span className="pointer-events-none absolute right-[8%] top-[14%] hidden sm:block">
        <Plane
          aria-hidden
          size={24}
          strokeWidth={1.5}
          className="animate-float-slow text-gold/50"
          style={{ '--float-rotate': '30deg' }}
        />
      </span>
      <span className="pointer-events-none absolute left-[6%] bottom-[12%] hidden md:block">
        <Ship aria-hidden size={20} strokeWidth={1.5} className="animate-float text-gold/40" style={{ '--float-rotate': '-4deg' }} />
      </span>
      <div className="container-px relative mx-auto max-w-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <Reveal stagger={0}>
            <SectionLabel tone="onDark">Why Businesses Trust Mavio</SectionLabel>
            <SectionHeading tone="onDark" className="mt-3">
              {heading}
            </SectionHeading>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">{subheading}</p>
          </Reveal>

          <Reveal as="div" stagger={0} delay={0.08} className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.55)]">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] h-full w-full object-cover md:aspect-[5/4]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div ref={gridRef} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              data-card
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:text-left"
            >
              <p className="font-mono text-4xl font-black text-gold md:text-5xl">
                <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
