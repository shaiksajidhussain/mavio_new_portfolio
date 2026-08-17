import { useEffect, useRef } from 'react'
import { traceability } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const bannerImage =
  'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=2200&q=80'

export default function Traceability() {
  const imgRef = useRef(null)
  const sweepRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      // vertical float: 0 -> -18 -> 0 -> 12 -> 0, ~8.4s loop, seamless (ends where it starts)
      gsap
        .timeline({ repeat: -1 })
        .to(imgRef.current, { y: -18, duration: 2.2, ease: 'sine.inOut' })
        .to(imgRef.current, { y: 0, duration: 2.2, ease: 'sine.inOut' })
        .to(imgRef.current, { y: 12, duration: 2.0, ease: 'sine.inOut' })
        .to(imgRef.current, { y: 0, duration: 2.0, ease: 'sine.inOut' })

      // horizontal drift: 0 -> 8 -> -8 -> 0, ~7s loop, deliberately out of phase with the vertical timeline
      gsap
        .timeline({ repeat: -1 })
        .to(imgRef.current, { x: 8, duration: 2.2, ease: 'sine.inOut' })
        .to(imgRef.current, { x: -8, duration: 2.6, ease: 'sine.inOut' })
        .to(imgRef.current, { x: 0, duration: 2.2, ease: 'sine.inOut' })

      // breathing zoom: 1 -> 1.07 -> 1.04 -> 1, ~8s loop
      gsap
        .timeline({ repeat: -1 })
        .to(imgRef.current, { scale: 1.07, duration: 3, ease: 'power1.inOut' })
        .to(imgRef.current, { scale: 1.04, duration: 2.5, ease: 'power1.inOut' })
        .to(imgRef.current, { scale: 1, duration: 2.5, ease: 'power1.inOut' })

      // occasional soft light sweep crossing the image, left to right
      gsap.set(sweepRef.current, { xPercent: -160 })
      gsap.to(sweepRef.current, {
        xPercent: 260,
        duration: 4.5,
        ease: 'power1.inOut',
        repeat: -1,
        repeatDelay: 3,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal
        as="div"
        stagger={0}
        className="relative overflow-hidden rounded-t-3xl rounded-b-[48px] border-2 border-navy/15 bg-bg-muted shadow-card md:rounded-b-[64px] dark:border-white/15"
      >
        {/* image viewport — flush with the outer frame (no own border/radius/margin), so the
            card reads as one continuous shape. overflow-hidden clips the animated <img> to it. */}
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[380px]">
          <img
            ref={imgRef}
            src={bannerImage}
            alt="Trucks loading shipping containers at a freight yard"
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            loading="lazy"
          />
          <div
            ref={sweepRef}
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent will-change-transform"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

          <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6 md:min-h-[380px] md:p-10">
            <SectionLabel tone="onDark" className="font-bold">
              Traceability
            </SectionLabel>
            <SectionHeading tone="onDark" weight="bold" className="mt-3 max-w-md">
              {traceability.heading}
            </SectionHeading>
          </div>
        </div>

        {/* same frame, no divider — the text sits directly in the card below the image */}
        <div className="mx-auto max-w-2xl p-6 text-center md:p-8">
          <p className="text-base leading-relaxed text-muted md:text-lg">{traceability.description}</p>
        </div>
      </Reveal>
    </section>
  )
}
