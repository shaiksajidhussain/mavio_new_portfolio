import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck2, PackageCheck, Ship, ShieldCheck } from 'lucide-react'
import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const icons = { FileCheck2, ShieldCheck, Ship, PackageCheck }
const { heading, subheading, touchpoints, cta } = supplyChainVisibilityPage.communication

export default function CommunicationTouchpoints() {
  const cardsRef = useRef([])
  const btnWrapRef = useRef(null)
  const btnRef = useRef(null)

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

  const handleMagnetMove = (e) => {
    if (prefersReducedMotion) return
    const rect = btnWrapRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btnRef.current, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: 'power2.out' })
  }

  const handleMagnetLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' })
  }

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Communication Throughout The Journey</SectionLabel>
        <SectionHeading className="mt-3">{heading}</SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <Reveal as="div" stagger={0.1} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {touchpoints.map((t, i) => {
          const Icon = icons[t.icon]
          return (
            <div key={t.title} style={{ perspective: 700 }}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseMove={(e) => handleTiltMove(e, i)}
                onMouseLeave={() => handleTiltLeave(i)}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow will-change-transform hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.description}</p>
              </div>
            </div>
          )
        })}
      </Reveal>

      <div className="mt-12 flex justify-center">
        <div
          ref={btnWrapRef}
          onMouseMove={handleMagnetMove}
          onMouseLeave={handleMagnetLeave}
          className="inline-block p-4"
        >
          <Link
            ref={btnRef}
            to={cta.to}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-card transition-transform"
          >
            {cta.label} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
