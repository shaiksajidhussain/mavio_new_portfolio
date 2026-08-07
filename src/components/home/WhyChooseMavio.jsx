import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { whyChooseMavio } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function WhyChooseMavio() {
  const [role, setRole] = useState('buyer')
  const panelRef = useRef(null)
  const content = whyChooseMavio[role]

  useEffect(() => {
    if (prefersReducedMotion || !panelRef.current) return
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
  }, [role])

  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-20">
      <SectionLabel>Why Choose Mavio</SectionLabel>

      <Reveal
        as="div"
        stagger={0}
        className="mt-6 rounded-3xl border border-line bg-surface p-8 shadow-card md:p-10"
      >
        <div className="inline-flex rounded-full border border-line bg-bg-muted p-1">
          {['buyer', 'supplier'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                role === r ? 'bg-navy text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div ref={panelRef} className="mt-8">
          <h3 className="font-display text-2xl font-semibold text-navy dark:text-white">
            {content.heading}
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {content.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted">
                <Check size={16} className="mt-0.5 shrink-0 text-gold-deep" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
