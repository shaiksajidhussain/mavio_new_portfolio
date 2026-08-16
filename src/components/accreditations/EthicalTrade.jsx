import { useEffect, useRef } from 'react'
import { accreditationsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const { heading, body } = accreditationsPage.ethical
const IMAGE = 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1400&q=80'

export default function EthicalTrade() {
  const imgWrapRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { clipPath: 'inset(28% round 40px)' },
        {
          clipPath: 'inset(0% round 0px)',
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: imgWrapRef.current, start: 'top 85%', once: true, fastScrollEnd: true },
        }
      )
    }, imgWrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto grid max-w-container gap-10 md:grid-cols-2 md:items-center">
        <Reveal stagger={0}>
          <SectionLabel>Commitment To Ethical Trade</SectionLabel>
          <SectionHeading className="mt-3 max-w-xl">
            {heading}
          </SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{body}</p>
        </Reveal>

        <div ref={imgWrapRef} className="aspect-[4/3] overflow-hidden shadow-card">
          <img src={IMAGE} alt="Farm partner harvesting produce" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
