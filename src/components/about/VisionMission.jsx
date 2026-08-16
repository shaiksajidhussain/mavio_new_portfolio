import { useEffect, useRef } from 'react'
import { Compass, Eye } from 'lucide-react'
import { aboutPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

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
          <SectionHeading className="mt-3">
            What drives the work
          </SectionHeading>
        </Reveal>

        <div ref={panelsRef} className="mt-10 flex flex-col gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              data-panel
              className={`flex flex-col overflow-hidden rounded-3xl border border-line shadow-card md:min-h-[340px] ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="flex flex-col justify-center bg-surface p-8 md:w-1/2 md:p-12">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-deep/40 text-gold-deep">
                    <c.icon size={18} />
                  </span>
                  <span className="font-mono text-sm tracking-wide text-gold-deep/80">{c.index}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-navy dark:text-white md:text-4xl">
                  Our <span className="text-gold-gradient">{c.title}</span>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">{c.body}</p>
              </div>

              <div className="group relative min-h-[240px] overflow-hidden md:w-1/2">
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
