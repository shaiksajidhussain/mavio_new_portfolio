import { useRef } from 'react'
import { Check } from 'lucide-react'
import { accreditationsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const { heading, points } = accreditationsPage.benefits

export default function CertificationBenefits() {
  const cardsRef = useRef([])

  const handleTiltMove = (e, i) => {
    if (prefersReducedMotion) return
    const card = cardsRef.current[i]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    gsap.to(card, {
      rotateX: (py - 0.5) * -12,
      rotateY: (px - 0.5) * 12,
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
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Certifications</SectionLabel>
          <SectionHeading className="mt-3 max-w-xl">
            {heading}
          </SectionHeading>
        </Reveal>

        <Reveal as="div" stagger={0.08} className="mt-10 grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <div key={p} style={{ perspective: 700 }}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseMove={(e) => handleTiltMove(e, i)}
                onMouseLeave={() => handleTiltLeave(i)}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 shadow-card will-change-transform"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                  <Check size={16} />
                </span>
                <p className="text-sm leading-relaxed text-ink">{p}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
