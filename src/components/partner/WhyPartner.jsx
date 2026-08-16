import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { partnerPage, whyChooseMavio } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const IMAGE = 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1200&q=80'

export default function WhyPartner() {
  const { role } = usePartnerRole()
  const content = whyChooseMavio[role === 'supplier' ? 'supplier' : 'buyer']
  const intro = partnerPage.whyPartner[role === 'supplier' ? 'supplier' : 'buyer']
  const panelRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !panelRef.current) return
    gsap.fromTo(panelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
  }, [role])

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Why Partner With Mavio</SectionLabel>
        </Reveal>

        <Reveal
          as="div"
          stagger={0}
          className="mt-6 overflow-hidden rounded-3xl border border-line bg-surface shadow-card md:grid md:grid-cols-2 md:items-stretch"
        >
          <div className="relative h-64 md:h-auto">
            <img src={IMAGE} alt="Farm partner harvesting produce" className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div ref={panelRef} className="relative flex flex-col justify-center overflow-hidden bg-bg p-8 md:p-12">
            <RouteBackground flip className="opacity-[0.08]" />
            <div className="relative">
              <SectionHeading>{intro.heading}</SectionHeading>

              <div className="mt-4 space-y-3">
                {intro.paragraphs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted md:text-base">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {content.points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                      <Check size={13} />
                    </span>
                    <p className="text-sm leading-relaxed text-ink">{p}</p>
                  </div>
                ))}
              </div>

              <Button to="/contact" variant="primary" className="mt-8 w-fit">
                Get In Touch
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
