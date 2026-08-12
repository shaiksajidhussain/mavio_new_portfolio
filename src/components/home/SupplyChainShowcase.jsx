import { useEffect, useRef } from 'react'
import { FileCheck2, MapPin, Package, PackageCheck, Ship, ShieldCheck, Sprout, Truck } from 'lucide-react'
import { supplyChainSteps, supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Package, FileCheck2, Truck, PackageCheck }
const { origin, destination } = supplyChainVisibilityPage.logistics
const activeStep = 5

export default function SupplyChainShowcase() {
  const sectionRef = useRef(null)

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

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-bg py-16 themeblack:bg-black md:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-navy/20 blur-[120px] dark:bg-blue-500/10" />

      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Supply Chain Showcase</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            The full journey, farm to freight
          </h2>
          <p className="mt-2 text-sm text-muted">Scroll to follow a shipment through every stage.</p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-line/70 bg-surface/70 shadow-card backdrop-blur-2xl md:mt-14">
          <div className="flex flex-col gap-6 border-b border-line/70 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-10">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <MapPin size={16} />
              </span>
              <div>
                <p className="eyebrow text-muted">Origin</p>
                <p className="text-sm font-semibold text-ink sm:text-base">{origin}</p>
              </div>
            </div>

            <div className="hidden flex-1 items-center gap-2 px-4 sm:flex">
              <span className="h-px flex-1 border-t border-dashed border-line" />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-bg-muted text-gold-deep">
                <Ship size={16} />
              </span>
              <span className="h-px flex-1 border-t border-dashed border-line" />
            </div>

            <div className="flex items-center gap-3 sm:flex-row-reverse sm:text-right">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <MapPin size={16} />
              </span>
              <div>
                <p className="eyebrow text-muted">Destination</p>
                <p className="text-sm font-semibold text-ink sm:text-base">{destination}</p>
              </div>
            </div>
          </div>

          <div className="relative px-6 py-8 sm:px-10 md:py-10">
            <div className="absolute left-[2.85rem] top-8 bottom-8 w-px bg-line sm:left-[3.6rem]" />
            <div className="space-y-4">
              {supplyChainSteps.map((s) => {
                const Icon = icons[s.icon]
                const isActive = s.step === activeStep
                return (
                  <div key={s.step} data-row className="relative flex items-start gap-4 sm:gap-6">
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-11 sm:w-11 ${
                        isActive
                          ? 'border-transparent bg-gold-gradient text-navy-deep shadow-card'
                          : 'border-line bg-surface text-gold-deep'
                      }`}
                    >
                      <Icon size={16} />
                    </span>

                    <div
                      className={`flex-1 rounded-2xl border px-5 py-4 transition-colors ${
                        isActive
                          ? 'border-gold/30 bg-gold/10 shadow-card'
                          : 'border-line/70 bg-surface/60 backdrop-blur-md'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="eyebrow text-muted">Step {String(s.step).padStart(2, '0')}</p>
                        {isActive && (
                          <span className="eyebrow rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] text-navy-deep">
                            In Transit
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
