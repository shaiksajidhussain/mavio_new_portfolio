import { useEffect, useRef } from 'react'
import { Compass, Eye } from 'lucide-react'
import { aboutPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const cards = [
  { ...aboutPage.visionMission.vision, index: '01', icon: Eye },
  { ...aboutPage.visionMission.mission, index: '02', icon: Compass },
]

export default function VisionMission() {
  const panelsRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !panelsRef.current) return
    const panels = panelsRef.current.querySelectorAll('[data-panel]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        panels,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: panelsRef.current, start: 'top 78%', once: true, fastScrollEnd: true },
        }
      )
    }, panelsRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Vision &amp; Mission</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            What drives the work
          </h2>
        </Reveal>

        <div ref={panelsRef} className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              data-panel
              className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-3xl shadow-card md:min-h-[520px]"
            >
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />

              <div className="relative p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <c.icon size={18} />
                  </span>
                  <span className="font-mono text-sm tracking-wide text-gold-deep/80">{c.index}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-white md:text-4xl">{c.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 md:text-base">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
