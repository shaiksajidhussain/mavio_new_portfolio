import { useEffect, useRef } from 'react'
import { Handshake, ShieldCheck, Sprout, Timer } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Timer, Handshake }
const { heading, subheading, items } = partnerPage.competitiveAdvantage

export default function CompetitiveAdvantage() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true, fastScrollEnd: true },
        }
      )
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal stagger={0}>
        <SectionLabel>Our Competitive Advantage</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <div ref={gridRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.title} data-card className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
