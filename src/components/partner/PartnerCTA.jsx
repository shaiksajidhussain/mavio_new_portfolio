import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { accreditations, partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'

export default function PartnerCTA() {
  const { role } = usePartnerRole()
  const content = partnerPage.cta[role === 'supplier' ? 'supplier' : 'buyer']
  const panelRef = useRef(null)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const skewTo = useRef(null)
  const marqueeRef = useRef(null)
  const btnWrapRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !panelRef.current) return
    gsap.fromTo(panelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
  }, [role])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, { xPercent: -50, duration: 24, ease: 'none', repeat: -1 })
      }

      skewTo.current = gsap.quickTo(headingRef.current, 'skewX', { duration: 0.4, ease: 'power3.out' })
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = self.getVelocity()
          skewTo.current(gsap.utils.clamp(-12, 12, v / 400))
        },
      })
      const resetSkew = () => skewTo.current?.(0)
      ScrollTrigger.addEventListener('scrollEnd', resetSkew)
      return () => {
        trigger.kill()
        ScrollTrigger.removeEventListener('scrollEnd', resetSkew)
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleMagnetMove = (e) => {
    if (prefersReducedMotion || !btnWrapRef.current || !btnRef.current) return
    const rect = btnWrapRef.current.getBoundingClientRect()
    const x = gsap.utils.clamp(-18, 18, (e.clientX - rect.left - rect.width / 2) * 0.28)
    const y = gsap.utils.clamp(-12, 12, (e.clientY - rect.top - rect.height / 2) * 0.28)
    gsap.to(btnRef.current, { x, y, duration: 0.35, ease: 'power3.out', overwrite: 'auto' })
  }

  const handleMagnetLeave = () => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.55, ease: 'power3.out', overwrite: 'auto' })
  }

  const loop = [...accreditations, ...accreditations]

  return (
    <section ref={sectionRef} className="relative overflow-hidden container-px mx-auto max-w-container pb-16 pt-8 md:pb-24 md:pt-14">
      <RouteBackground />
      <Reveal
        as="div"
        stagger={0}
        className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-14 text-center md:px-16 md:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(rgb(255 255 255 / 0.6) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse 70% 100% at 50% 50%, black, transparent)',
          }}
        />

        <div ref={panelRef} className="relative mx-auto max-w-xl">
          <SectionHeading ref={headingRef} tone="onDark" className="text-center">
            {content.heading}
          </SectionHeading>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{content.body}</p>

          <div className="mt-8 flex justify-center">
            <div
              ref={btnWrapRef}
              data-magnetic
              onMouseMove={handleMagnetMove}
              onMouseLeave={handleMagnetLeave}
              className="inline-flex p-5"
            >
              <Link
                ref={btnRef}
                to={content.primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-card will-change-transform"
              >
                {content.primaryCta.label} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden border-t border-white/10 pt-8">
          <div ref={marqueeRef} className="flex w-max items-center gap-4">
            {loop.map((a, i) => (
              <span
                key={`${a}-${i}`}
                className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 text-xs font-medium text-white/70"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
