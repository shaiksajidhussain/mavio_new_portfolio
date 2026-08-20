import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, Ship } from 'lucide-react'
import { about, testimonials, trustStats } from '../../data/siteContent'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const experienceStat = trustStats.find((s) => s.label === 'Years of Experience')
const proofAvatars = testimonials.slice(0, 3)

export default function AboutTeaser() {
  const imgWrapRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { clipPath: 'inset(32% round 64px)' },
        {
          clipPath: 'inset(0% round 24px)',
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: imgWrapRef.current, start: 'top 85%', once: true, fastScrollEnd: true },
        }
      )
    }, imgWrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container pb-16 pt-24 md:pb-24 md:pt-32">
      <RouteBackground />
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-10">
        <Reveal stagger={0} className="relative">
          <div aria-hidden className="absolute -left-4 -top-4 grid grid-cols-5 gap-1.5 opacity-40">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-gold-deep" />
            ))}
          </div>

          <div className="relative">
            <div ref={imgWrapRef} className="media-dim w-[80%] overflow-hidden rounded-3xl border-4 border-surface shadow-card">
              <img src={about.image} alt={about.imageAlt} className="aspect-[4/5] w-full object-cover" />
            </div>

            <Reveal delay={0.3} stagger={0} className="absolute -right-2 bottom-16 w-[52%] sm:bottom-20">
              <div className="media-dim overflow-hidden rounded-3xl border-4 border-surface shadow-card">
                <img
                  src={about.secondaryImage}
                  alt={about.secondaryImageAlt}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>

            {experienceStat && (
              <Reveal delay={0.5} stagger={0} className="absolute -right-4 top-10 sm:top-14">
                <div className="flex w-36 flex-col items-start gap-0.5 rounded-2xl bg-navy-deep p-4 text-left shadow-card sm:w-40">
                  <Ship size={16} className="mb-1 text-gold" />
                  <p className="font-display text-2xl font-bold text-white">
                    {experienceStat.value}
                    {experienceStat.suffix}
                  </p>
                  <p className="text-xs leading-tight text-white/70">{experienceStat.label}</p>
                </div>
              </Reveal>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">About Us</span>
            <Ship size={14} />
          </div>

          <SectionHeading weight="bold" className="mt-4">
            {`${about.heading} ${about.headingAccent}`}
          </SectionHeading>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">{about.body}</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="shrink-0 text-gold-deep" />
                <span className="text-sm font-medium text-ink">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button to="/about" variant="primary">
              Discover More
              <ArrowRight size={16} />
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {proofAvatars.map((t) => (
                  <img
                    key={t.avatar}
                    src={t.avatar}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-surface object-cover"
                  />
                ))}
              </div>
              <p className="max-w-[9rem] text-xs font-medium leading-snug text-muted">
                Trusted across 25+ countries
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
