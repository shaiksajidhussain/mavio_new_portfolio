import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { qualityCompliancePage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { buyer, supplier } = qualityCompliancePage.qualityCommitments

function Panel({ label, tone, content }) {
  return (
    <div className="rounded-3xl border border-line bg-surface p-6 shadow-card md:p-8">
      <span
        className={`eyebrow inline-block rounded-full px-3 py-1 ${
          tone === 'buyer' ? 'bg-navy text-white dark:bg-gold dark:text-navy-deep' : 'bg-gold-gradient text-navy-deep'
        }`}
      >
        {label}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold text-ink md:text-2xl">{content.heading}</h3>
      <div data-panel className="mt-6 space-y-3">
        {content.points.map((p) => (
          <div key={p} data-card className="flex items-start gap-3 rounded-xl bg-bg-muted p-4 themeblack:bg-black/40">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
              <Check size={14} />
            </span>
            <p className="text-sm leading-relaxed text-ink">{p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function QualityCommitments() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.6, rotate: -4 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'back.out(1.8)',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true, fastScrollEnd: true },
        }
      )
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Our Quality Commitments</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            One standard, seen from both sides
          </h2>
        </Reveal>

        <div ref={gridRef} className="mt-10 grid gap-6 md:grid-cols-2">
          <Panel label="Buyer Perspective" tone="buyer" content={buyer} />
          <Panel label="Supplier Perspective" tone="supplier" content={supplier} />
        </div>
      </div>
    </section>
  )
}
