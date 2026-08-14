import { useEffect, useRef, useState } from 'react'
import { FileCheck2, MapPin, Package, PackageCheck, Ship, ShieldCheck, Sprout, Truck } from 'lucide-react'
import { supplyChainSteps, supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Package, FileCheck2, Truck, PackageCheck }
const { origin, destination } = supplyChainVisibilityPage.logistics

export default function SupplyChainShowcase() {
  const sectionRef = useRef(null)
  const stepsWrapRef = useRef(null)
  const markerRefs = useRef([])
  const truckRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray('[data-row]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true, fastScrollEnd: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !stepsWrapRef.current || !truckRef.current) return

    let firstTop = 0
    let lastTop = 0

    const measure = () => {
      const wrap = stepsWrapRef.current
      const markers = markerRefs.current
      if (!wrap || !markers[0] || !markers[markers.length - 1]) return
      const wrapRect = wrap.getBoundingClientRect()
      firstTop = markers[0].getBoundingClientRect().top - wrapRect.top + markers[0].offsetHeight / 2
      lastTop =
        markers[markers.length - 1].getBoundingClientRect().top - wrapRect.top + markers[markers.length - 1].offsetHeight / 2
    }

    measure()

    const st = ScrollTrigger.create({
      trigger: stepsWrapRef.current,
      start: 'top 75%',
      end: 'bottom 55%',
      scrub: 0.6,
      onRefresh: measure,
      onUpdate: (self) => {
        const y = firstTop + self.progress * (lastTop - firstTop)
        gsap.set(truckRef.current, { top: y })
        setActiveIndex(Math.min(supplyChainSteps.length - 1, Math.round(self.progress * (supplyChainSteps.length - 1))))
      },
    })

    window.addEventListener('resize', measure)
    return () => {
      st.kill()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-bg py-16 themeblack:bg-black md:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-navy/20 blur-[120px] dark:bg-blue-500/10" />
      <RouteBackground />

      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Supply Pathway</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            Supply Pathway
          </h2>
          <p className="mt-2 text-sm text-muted">
            A pathway tailored to deliver quality, safety, and compliance at every step.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-line/70 bg-surface/70 shadow-card backdrop-blur-2xl md:mt-14">
          <div className="flex flex-col gap-4 border-b border-line/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <MapPin size={14} />
              </span>
              <div>
                <p className="eyebrow text-muted">Origin</p>
                <p className="text-sm font-semibold text-ink">{origin}</p>
              </div>
            </div>

            <div className="hidden flex-1 items-center gap-2 px-4 sm:flex">
              <span className="h-px flex-1 border-t border-dashed border-line" />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-bg-muted text-gold-deep">
                <Ship size={14} />
              </span>
              <span className="h-px flex-1 border-t border-dashed border-line" />
            </div>

            <div className="flex items-center gap-2.5 sm:flex-row-reverse sm:text-right">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <MapPin size={14} />
              </span>
              <div>
                <p className="eyebrow text-muted">Destination</p>
                <p className="text-sm font-semibold text-ink">{destination}</p>
              </div>
            </div>
          </div>

          <div ref={stepsWrapRef} className="relative px-5 py-6 sm:px-8 md:py-8">
            <div className="absolute left-[2.35rem] top-6 bottom-6 w-px bg-line sm:left-[3rem]" />

            <span
              ref={truckRef}
              className="pointer-events-none absolute left-[2.35rem] top-6 z-20 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-card sm:left-[3rem] sm:h-8 sm:w-8"
            >
              <Truck size={13} />
            </span>

            <div className="space-y-3">
              {supplyChainSteps.map((s, i) => {
                const Icon = icons[s.icon]
                const isActive = i === activeIndex
                const isDone = i < activeIndex
                return (
                  <div key={s.step} data-row className="relative flex items-start gap-3 sm:gap-4">
                    <span
                      ref={(el) => (markerRefs.current[i] = el)}
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-9 sm:w-9 ${
                        isActive
                          ? 'border-transparent bg-gold-gradient text-navy-deep shadow-card'
                          : isDone
                            ? 'border-transparent bg-gold-deep/80 text-white'
                            : 'border-line bg-surface text-gold-deep'
                      }`}
                    >
                      <Icon size={14} />
                    </span>

                    <div
                      className={`flex-1 rounded-2xl border px-4 py-3 transition-colors duration-300 ${
                        isActive
                          ? 'border-gold/30 bg-gold/10 shadow-card'
                          : 'border-line/70 bg-surface/60 backdrop-blur-md'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="eyebrow text-muted">Step {String(s.step).padStart(2, '0')}</p>
                        {isActive && (
                          <span className="eyebrow rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] text-navy-deep">
                            {i === supplyChainSteps.length - 1 ? 'In Transit' : 'In Progress'}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">{s.label}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
