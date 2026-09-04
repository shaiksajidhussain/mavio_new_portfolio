import { useEffect, useRef } from 'react'
import { aboutPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const count = aboutPage.milestones.length

export default function Milestones() {
  const sectionRef = useRef(null)
  const fillRef = useRef(null)
  const itemsRef = useRef([])
  const markersRef = useRef([])
  const yearRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        { isDesktop: '(min-width: 768px)', isMobile: '(max-width: 767px)' },
        (context) => {
          const { isDesktop } = context.conditions

          if (isDesktop) {
            gsap.fromTo(
              fillRef.current,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: 'none',
                transformOrigin: 'top center',
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top top',
                  end: () => `+=${count * 260}`,
                  scrub: 0.6,
                  onUpdate: (self) => {
                    const idx = Math.min(count - 1, Math.floor(self.progress * count))
                    if (yearRef.current) yearRef.current.textContent = aboutPage.milestones[idx].year

                    itemsRef.current.forEach((item, i) => {
                      if (!item) return
                      const active = i === idx
                      gsap.to(item, {
                        opacity: active ? 1 : 0.35,
                        scale: active ? 1.03 : 0.98,
                        duration: 0.3,
                        overwrite: 'auto',
                      })
                      const marker = markersRef.current[i]
                      if (marker) {
                        gsap.to(marker.ring, { borderColor: active ? '#ffbf00' : '#e0b05a', duration: 0.3 })
                        gsap.to(marker.dot, { backgroundColor: active ? '#ffbf00' : 'rgba(224,176,90,0.5)', duration: 0.3 })
                      }
                    })
                  },
                },
              }
            )
          } else {
            gsap.fromTo(
              fillRef.current,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: 'none',
                transformOrigin: 'top center',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', end: 'bottom 75%', scrub: 0.5 },
              }
            )
            itemsRef.current.forEach((item) => {
              if (!item) return
              gsap.fromTo(
                item,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power3.out',
                  scrollTrigger: { trigger: item, start: 'top 85%', once: true, fastScrollEnd: true },
                }
              )
            })
          }
        }
      )

      return () => mm.revert()
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-muted py-16 md:py-0 md:min-h-[calc(100vh_+_var(--ms-scroll))]"
      style={{ '--ms-scroll': `${count * 260}px` }}
    >
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:py-20">
        <div className="flex items-end justify-between">
          <Reveal stagger={0}>
            <SectionLabel>Milestones</SectionLabel>
            <SectionHeading className="mt-3">
              Four decades, one step at a time
            </SectionHeading>
          </Reveal>

          <span
            ref={yearRef}
            className="hidden shrink-0 font-display text-5xl font-black leading-none text-gold-deep/40 md:block md:text-7xl"
          >
            {aboutPage.milestones[0].year}
          </span>
        </div>

        <div className="relative mt-10 pl-10 md:mt-14 md:pl-14">
          <div className="absolute left-3 top-0 h-full w-[2px] bg-line md:left-5" />
          <div
            ref={fillRef}
            className="absolute left-3 top-0 h-full w-[2px] origin-top scale-y-0 bg-gold-gradient md:left-5"
          />

          <div className="space-y-10 md:space-y-8">
            {aboutPage.milestones.map((m, i) => (
              <div
                key={m.year}
                ref={(el) => (itemsRef.current[i] = el)}
                className="relative md:origin-left"
              >
                <span
                  ref={(el) => {
                    if (!el) return
                    markersRef.current[i] = { ring: el, dot: el.firstElementChild }
                  }}
                  className="absolute -left-10 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-surface md:-left-14"
                >
                  <span className="h-2 w-2 rounded-full bg-gold/50" />
                </span>

                <p className="font-mono text-xs font-semibold tracking-wide text-gold-deep">{m.year}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink md:text-xl">{m.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
