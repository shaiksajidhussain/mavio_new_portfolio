import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { partnerPage, whyChooseMavio } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function WhyPartner() {
  const { role } = usePartnerRole()
  const content = whyChooseMavio[role === 'supplier' ? 'supplier' : 'buyer']
  const intro = partnerPage.whyPartner[role === 'supplier' ? 'supplier' : 'buyer']
  const headingRef = useRef(null)
  const gridRef = useRef(null)
  const cardsRef = useRef([])
  const firstRun = useRef(true)

  useEffect(() => {
    if (prefersReducedMotion || !headingRef.current) return
    gsap.fromTo(headingRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
  }, [role])

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    const fromVars = { opacity: 0, scale: 0.55, rotate: -6 }
    const toVars = { opacity: 1, scale: 1, rotate: 0, ease: 'back.out(1.9)' }

    if (firstRun.current) {
      firstRun.current = false
      const ctx = gsap.context(() => {
        gsap.fromTo(cards, fromVars, {
          ...toVars,
          duration: 0.65,
          stagger: 0.1,
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true, fastScrollEnd: true },
        })
      })
      return () => ctx.revert()
    }

    gsap.fromTo(cards, fromVars, { ...toVars, duration: 0.5, stagger: 0.08, overwrite: 'auto' })
  }, [role])

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
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Why Partner With Mavio</SectionLabel>
        </Reveal>

        <Reveal stagger={0} delay={0.05}>
          <h2
            ref={headingRef}
            className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl"
          >
            {intro.heading}
          </h2>
        </Reveal>

        <Reveal stagger={0} delay={0.08} className="mt-4 max-w-3xl space-y-3">
          {intro.paragraphs.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted md:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <div ref={gridRef} className="mt-10 grid gap-4 sm:grid-cols-2">
          {content.points.map((p, i) => (
            <div key={p} style={{ perspective: 700 }}>
              <div
                data-card
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
        </div>
      </div>
    </section>
  )
}
