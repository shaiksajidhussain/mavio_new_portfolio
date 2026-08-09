import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function PartnerCTA() {
  const { role } = usePartnerRole()
  const content = partnerPage.cta[role === 'supplier' ? 'supplier' : 'buyer']
  const panelRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !panelRef.current) return
    gsap.fromTo(panelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
  }, [role])

  return (
    <section className="container-px mx-auto max-w-container pb-16 md:pb-24">
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
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{content.body}</p>
          <Button to={content.primaryCta.to} variant="primary" className="mt-8">
            {content.primaryCta.label} <ArrowRight size={16} />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
