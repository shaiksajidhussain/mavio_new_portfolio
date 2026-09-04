import { useEffect, useRef, useState } from 'react'
import { Globe2, Handshake, Plane, Repeat, Ship, ShieldCheck, Truck } from 'lucide-react'
import { whyChooseMavio } from '../../data/siteContent'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const pointIcons = [Globe2, ShieldCheck, Truck, Repeat, Handshake]

function splitPoint(p) {
  const idx = p.indexOf(':')
  if (idx === -1) return { title: p, description: '' }
  return { title: p.slice(0, idx).trim(), description: p.slice(idx + 1).trim() }
}

export default function WhyChooseMavio() {
  const [role, setRole] = useState('buyer')
  const gridRef = useRef(null)
  const content = whyChooseMavio[role]

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', overwrite: 'auto' }
    )
  }, [role])

  return (
    <section className="relative mb-6 overflow-hidden rounded-3xl border border-line bg-bg-muted container-px mx-auto max-w-container py-16 shadow-card md:mb-10 md:py-20">
      <RouteBackground />

      <span className="pointer-events-none absolute right-[6%] top-[10%] hidden sm:block">
        <Plane
          aria-hidden
          size={26}
          strokeWidth={1.5}
          className="animate-float-slow text-gold-deep/60"
          style={{ '--float-rotate': '30deg' }}
        />
      </span>
      <span className="pointer-events-none absolute left-[4%] bottom-[8%] hidden md:block">
        <Ship aria-hidden size={22} strokeWidth={1.5} className="animate-float text-gold-deep/50" style={{ '--float-rotate': '-4deg' }} />
      </span>

      <div className="relative">
        <div className="flex items-center gap-2 text-gold-deep">
          <span className="h-px w-6 bg-gold-deep" />
          <span className="eyebrow">Why Choose Us</span>
          <Plane size={14} />
        </div>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading weight="bold" className="max-w-xl">
            {content.heading}
          </SectionHeading>

          <div className="inline-flex shrink-0 rounded-full border border-line bg-surface p-1 shadow-card">
            {['buyer', 'supplier'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                  role === r ? 'bg-gold-gradient text-navy-deep' : 'text-muted hover:text-ink'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-5"
        >
          {content.points.map((p, i) => {
            const { title, description } = splitPoint(p)
            const Icon = pointIcons[i % pointIcons.length]
            return (
              <div
                key={p}
                data-card
                className="relative flex min-h-[220px] w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card sm:w-auto sm:shrink"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-1 font-display text-4xl font-black leading-none text-transparent"
                  style={{ WebkitTextStroke: '1.5px rgba(212,162,76,0.55)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-lg ring-4 ring-gold-deep/15">
                  <Icon size={28} />
                </span>
                <p className="relative mt-4 font-display text-base font-bold text-ink">{title}</p>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
