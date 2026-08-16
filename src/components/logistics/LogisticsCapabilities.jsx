import { useRef } from 'react'
import { Boxes, Plane, Ship, Shuffle } from 'lucide-react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const icons = { Ship, Plane, Shuffle, Boxes }
const { heading, subheading, items } = exportLogisticsPage.capabilities

export default function LogisticsCapabilities() {
  const cardsRef = useRef([])

  const handleTiltMove = (e, i) => {
    if (prefersReducedMotion) return
    const card = cardsRef.current[i]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    gsap.to(card, {
      rotateX: (py - 0.5) * -14,
      rotateY: (px - 0.5) * 14,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 700,
    })
  }

  const handleTiltLeave = (i) => {
    const card = cardsRef.current[i]
    if (!card) return
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' })
  }

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground />
      <Reveal stagger={0}>
        <SectionLabel>Logistics Capabilities</SectionLabel>
        <SectionHeading className="mt-3">{heading}</SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <Reveal as="div" stagger={0.06} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.label} style={{ perspective: 700 }}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseMove={(e) => handleTiltMove(e, i)}
                onMouseLeave={() => handleTiltLeave(i)}
                className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-6 text-center shadow-card will-change-transform"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                  <Icon size={22} />
                </span>
                <p className="font-display text-sm font-semibold text-ink">{item.label}</p>
                {item.description && (
                  <p className="text-xs leading-relaxed text-muted">{item.description}</p>
                )}
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
