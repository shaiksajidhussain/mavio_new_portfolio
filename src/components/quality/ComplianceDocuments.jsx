import { useEffect, useRef } from 'react'
import { FileCheck2, FlaskConical, Globe, Leaf, ShieldCheck } from 'lucide-react'
import { qualityCompliancePage, trustStats } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { FileCheck2, Globe, Leaf, ShieldCheck, FlaskConical }
const { heading, subheading, closing, items } = qualityCompliancePage.complianceDocuments
const [featured, ...rest] = items
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

  const FeaturedIcon = icons[featured.icon]

  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal stagger={0}>
        <SectionLabel>Compliance Documents</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <div ref={gridRef} className="mt-10 grid gap-5 md:grid-cols-3">
        <div
          data-card
          className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl bg-navy-deep p-8 shadow-card md:row-span-2 md:min-h-[380px]"
        >
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 text-gold/10">
            <FeaturedIcon size={220} strokeWidth={1} />
          </div>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
            <FeaturedIcon size={24} />
          </span>

          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{featured.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 md:text-base">{featured.description}</p>

            {certStat && (
              <div className="mt-6 flex items-baseline gap-2 border-t border-white/10 pt-5">
                <span className="font-display text-4xl font-black text-gold">
                  {certStat.value}
                  {certStat.suffix}
                </span>
                <span className="text-sm text-white/60">{certStat.label}</span>
              </div>
            )}
          </div>
        </div>

        {rest.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.title} data-card className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
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
