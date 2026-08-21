import { useEffect, useRef } from 'react'
import { Handshake, ShieldCheck, Sprout, Timer } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Timer, Handshake }

export default function CompetitiveAdvantage() {
  const { role } = usePartnerRole()
  const activeRole = role === 'supplier' ? 'supplier' : 'buyer'
  const { heading, subheading, items } = partnerPage.competitiveAdvantage[activeRole]
  const gridRef = useRef(null)
  const lineRef = useRef(null)
  const iconsRef = useRef([])
  const copyRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        iconsRef.current,
        { scale: 0, rotate: -35 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'back.out(2)',
          delay: 0.15,
          scrollTrigger: { trigger: gridRef.current, start: 'top 78%', once: true, fastScrollEnd: true },
        }
      )

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 78%', once: true, fastScrollEnd: true },
          }
        )
      }
    }, gridRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !copyRef.current) return
    gsap.fromTo(copyRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })
  }, [activeRole])

  const handleTiltMove = (e, i) => {
    if (prefersReducedMotion) return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    gsap.to(card, {
      rotateX: (py - 0.5) * -8,
      rotateY: (px - 0.5) * 8,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 700,
    })
    gsap.to(iconsRef.current[i], { scale: 1.12, rotate: 8, duration: 0.35, ease: 'power2.out' })
  }

  const handleTiltLeave = (i) => {
    const card = iconsRef.current[i]?.closest('[data-tilt-card]')
    if (card) gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' })
    if (iconsRef.current[i]) {
      gsap.to(iconsRef.current[i], { scale: 1, rotate: 0, duration: 0.5, ease: 'power3.out' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-bg py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0} className="text-center">
          <div ref={copyRef}>
            <SectionLabel>Our Competitive Advantage</SectionLabel>
            <SectionHeading className="mt-3">{heading}</SectionHeading>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
          </div>
        </Reveal>

        <div ref={gridRef} className="relative mt-16">
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-gold-deep/50 to-transparent sm:block"
          />

          <Reveal as="div" stagger={0.08} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => {
              const Icon = icons[item.icon]
              return (
                <div
                  key={`${activeRole}-${item.title}`}
                  data-tilt-card
                  style={{ perspective: 700 }}
                  onMouseMove={(e) => handleTiltMove(e, i)}
                  onMouseLeave={() => handleTiltLeave(i)}
                  className="group relative flex h-full flex-col items-center rounded-2xl border border-line bg-surface px-5 pb-6 pt-8 text-center shadow-card transition-shadow duration-300 will-change-transform hover:shadow-xl hover:border-gold/50"
                >
                  <span className="absolute right-4 top-4 font-mono text-xs font-semibold text-line group-hover:text-gold-deep/60">
                    0{i + 1}
                  </span>

                  <span
                    ref={(el) => (iconsRef.current[i] = el)}
                    className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-card will-change-transform"
                  >
                    <span className="absolute inset-0 -z-10 rounded-full bg-gold/30 blur-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                    <Icon size={30} strokeWidth={1.75} />
                  </span>

                  <h3 className="mt-5 font-display text-base font-bold text-ink md:text-lg">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
