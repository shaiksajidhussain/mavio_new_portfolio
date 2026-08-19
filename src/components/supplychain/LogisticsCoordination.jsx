import { useEffect, useRef } from 'react'
import { Ship } from 'lucide-react'
import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { heading, subheading, backgroundImage, origin, destination } = supplyChainVisibilityPage.logistics

export default function LogisticsCoordination() {
  const imgRef = useRef(null)
  const badgeRef = useRef(null)
  const routeShipRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      // living photo: slow float + breathing zoom, seamless loop (mirrors Traceability's technique)
      gsap
        .timeline({ repeat: -1 })
        .to(imgRef.current, { y: -16, scale: 1.06, duration: 3.4, ease: 'sine.inOut' })
        .to(imgRef.current, { y: 0, scale: 1, duration: 3.4, ease: 'sine.inOut' })
        .to(imgRef.current, { y: 10, scale: 1.03, duration: 3, ease: 'sine.inOut' })
        .to(imgRef.current, { y: 0, scale: 1, duration: 3, ease: 'sine.inOut' })

      gsap
        .timeline({ repeat: -1 })
        .to(imgRef.current, { x: 8, duration: 3.8, ease: 'sine.inOut' })
        .to(imgRef.current, { x: -8, duration: 4.2, ease: 'sine.inOut' })
        .to(imgRef.current, { x: 0, duration: 3.8, ease: 'sine.inOut' })

      // badge: gentle pulse ring + rock
      gsap.to(badgeRef.current, {
        scale: 1.08,
        duration: 1.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // route ship: drifts from origin to destination along the line, fades at the ends
      gsap
        .timeline({ repeat: -1, delay: 0.5 })
        .set(routeShipRef.current, { left: '0%', opacity: 0 })
        .to(routeShipRef.current, { opacity: 1, duration: 0.4 })
        .to(routeShipRef.current, { left: '100%', duration: 2.6, ease: 'power1.inOut' }, '<')
        .to(routeShipRef.current, { opacity: 0, duration: 0.4 }, '-=0.4')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Logistics Coordination</SectionLabel>
      </Reveal>

      <div className="relative mt-8">
        <Reveal
          as="div"
          stagger={0}
          className="relative h-[380px] overflow-hidden rounded-3xl rounded-tr-[100px] shadow-card md:h-[460px] md:rounded-tr-[140px]"
        >
          <img
            ref={imgRef}
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/20 via-transparent to-transparent" />
        </Reveal>

        <Reveal
          as="div"
          stagger={0}
          delay={0.15}
          className="group relative z-10 -mt-16 ml-auto w-[92%] overflow-hidden rounded-3xl bg-navy-deep p-8 shadow-card transition-transform duration-500 hover:-translate-y-1 md:absolute md:-bottom-12 md:right-0 md:mt-0 md:w-[52%] md:p-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-7 right-8 h-16 w-16 animate-pulse rounded-full bg-gold-gradient opacity-40 blur-xl"
          />
          <span ref={badgeRef} className="absolute -top-7 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient shadow-card">
            <Ship size={26} className="text-navy-deep" />
          </span>

          <SectionHeading tone="onDark" size="medium" weight="bold" className="max-w-sm">
            {heading}
          </SectionHeading>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">{subheading}</p>

          <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm font-medium text-white">
            <span>{origin}</span>
            <span className="relative mx-4 h-px flex-1 bg-white/15">
              <span ref={routeShipRef} className="absolute -top-1.5 text-gold opacity-0">
                <Ship size={12} />
              </span>
            </span>
            <span>{destination}</span>
          </div>

          <Button to="/contact" variant="primary" className="mt-6 w-fit">
            Talk To Our Team
          </Button>
        </Reveal>
      </div>

      <div className="h-16 md:h-24" aria-hidden />
    </section>
  )
}
