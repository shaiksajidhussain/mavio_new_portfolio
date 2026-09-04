import { useRef } from 'react'
import { Anchor, BadgeCheck, ClipboardCheck, FileCheck2, FlaskConical, Globe, Leaf, ShieldCheck } from 'lucide-react'
import { accreditationsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const icons = { ShieldCheck, BadgeCheck, FileCheck2, Globe, Anchor, FlaskConical, ClipboardCheck, Leaf }
const { heading, subheading, items } = accreditationsPage.grid

export default function AccreditationsGrid() {
  const cardsRef = useRef([])

  const handleTiltMove = (e, i) => {
    if (prefersReducedMotion) return
    const card = cardsRef.current[i]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    gsap.to(card, {
      rotateX: (py - 0.5) * -16,
      rotateY: (px - 0.5) * 16,
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
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
      <Reveal stagger={0}>
        <SectionLabel>Our Accreditations</SectionLabel>
        <SectionHeading className="mt-3 max-w-xl">
          {heading}
        </SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <Reveal as="div" stagger={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.title} style={{ perspective: 700 }}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseMove={(e) => handleTiltMove(e, i)}
                onMouseLeave={() => handleTiltLeave(i)}
                className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-6 text-center shadow-card will-change-transform"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                  <Icon size={24} />
                </span>
                <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          )
        })}
      </Reveal>
      </div>
    </section>
  )
}
