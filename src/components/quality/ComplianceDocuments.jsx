import { useEffect, useRef } from 'react'
import { FileCheck2, FlaskConical, Globe, Leaf, ShieldCheck } from 'lucide-react'
import { qualityCompliancePage, trustStats } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const icons = { FileCheck2, Globe, Leaf, ShieldCheck, FlaskConical }
const { heading, subheading, closing, items } = qualityCompliancePage.complianceDocuments
const certStat = trustStats.find((s) => s.label === 'Live Traceability')

export default function ComplianceDocuments() {
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
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true, fastScrollEnd: true },
        }
      )
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground />
      <Reveal stagger={0}>
        <SectionLabel>Compliance Documents</SectionLabel>
        <SectionHeading className="mt-3">{heading}</SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>

        {certStat && (
          <p className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-2xl font-black text-gold-deep">
              {certStat.value}
              {certStat.suffix}
            </span>
            <span className="text-sm text-muted">{certStat.label}</span>
          </p>
        )}
      </Reveal>

      <div ref={gridRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[item.icon]
          const reverse = i % 2 === 1
          return (
            <div
              key={item.title}
              data-card
              className={`flex min-h-[220px] flex-col justify-between border border-line bg-surface p-6 shadow-card ${
                reverse
                  ? 'rounded-tr-2xl rounded-bl-2xl md:rounded-tr-3xl md:rounded-bl-3xl'
                  : 'rounded-tl-2xl rounded-br-2xl md:rounded-tl-3xl md:rounded-br-3xl'
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
        …and every other regional document needed for smooth entry. {closing}
      </p>
    </section>
  )
}
