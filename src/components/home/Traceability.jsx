import { useEffect, useId, useRef } from 'react'
import { traceability } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const bannerImage =
  'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80'

/* Foot cut: flat top, long straight sides, gentle curve only at the bottom */
const FOOT_CUT =
  'M 0 0 L 1 0 L 1 0.58 C 1 0.82, 0.82 1, 0.5 1 C 0.18 1, 0 0.82, 0 0.58 Z'

export default function Traceability() {
  const cardRef = useRef(null)
  const frameRef = useRef(null)
  const imgRef = useRef(null)
  const markerRef = useRef(null)
  const clipId = useId().replace(/:/g, '')

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { rotateX: 10, y: 28, transformPerspective: 1400 },
        {
          rotateX: 0,
          y: 0,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 78%', once: true },
        }
      )
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.25,
          ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 78%', once: true },
        }
      )
      gsap.to(imgRef.current, {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.fromTo(
        markerRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 72%', once: true },
        }
      )
    }, cardRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal as="div" stagger={0} ref={cardRef} className="relative" style={{ perspective: '1400px' }}>
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d={FOOT_CUT} />
            </clipPath>
          </defs>
        </svg>

        {/* Image — sits above the foot with a 3D lift toward the viewer */}
        <div
          ref={frameRef}
          className="relative z-10 min-h-[300px] overflow-hidden rounded-t-3xl shadow-[0_28px_60px_-18px_rgba(10,16,32,0.45)] sm:min-h-[360px] md:min-h-[420px]"
          style={{ transformOrigin: 'center top', transformStyle: 'preserve-3d' }}
        >
          <img
            ref={imgRef}
            src={bannerImage}
            alt="Shipping containers at a busy port"
            className="absolute inset-0 h-[115%] w-full object-cover will-change-transform"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/55 via-black/25 to-transparent" />

          <div className="relative flex h-full min-h-[300px] flex-col justify-start p-6 sm:min-h-[360px] md:min-h-[420px] md:p-10">
            <SectionLabel tone="onDark">Traceability</SectionLabel>
            <SectionHeading tone="onDark" weight="bold" className="mt-3 max-w-lg">
              {traceability.heading}
            </SectionHeading>
          </div>

          <span
            ref={markerRef}
            aria-hidden
            className="pointer-events-none absolute right-[18%] top-[42%] flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold md:right-[22%] md:top-[46%] md:h-11 md:w-11"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gold md:h-3 md:w-3" />
          </span>
        </div>

        {/* Foot — tucked under the image, straight sides then bottom curve */}
        <div
          className="relative z-0 -mt-1 bg-bg-muted px-6 pb-16 pt-12 md:px-16 md:pb-20 md:pt-14"
          style={{ clipPath: `url(#${clipId})` }}
        >
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base lg:text-lg">
            {traceability.description}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
