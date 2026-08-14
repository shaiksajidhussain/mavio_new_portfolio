import { useEffect, useRef } from 'react'
import { ClipboardList, Eye, Layers, ShieldCheck } from 'lucide-react'
import { qualityCompliancePage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { ClipboardList, Eye, Layers, ShieldCheck }
const { heading, body, points } = qualityCompliancePage.qualityCommitments

export default function QualityCommitments() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
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
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px mx-auto max-w-container">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_1.4fr] md:gap-12">
          <Reveal stagger={0}>
            <SectionLabel>Our Quality Commitments</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">{body}</p>
          </Reveal>

          <div ref={gridRef} className="grid gap-5 sm:grid-cols-2">
            {points.map((p) => {
              const Icon = icons[p.icon]
              return (
                <div
                  key={p.title}
                  data-card
                  className="rounded-2xl border border-line bg-surface p-6 shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
