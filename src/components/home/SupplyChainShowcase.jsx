import { useEffect, useRef } from 'react'
import { FileCheck2, Package, PackageCheck, ShieldCheck, Sprout, Truck } from 'lucide-react'
import { supplyChainSteps } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Package, FileCheck2, Truck, PackageCheck }

export default function SupplyChainShowcase() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current
      const lastPanel = track.lastElementChild
      const total = Math.max(
        lastPanel.getBoundingClientRect().right - pinRef.current.getBoundingClientRect().right + 40,
        0
      )

      const tween = gsap.to(track, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${total}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      return () => tween.scrollTrigger?.kill()
    })

    return () => mm.revert()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray('[data-panel]'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true, fastScrollEnd: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-bg themeblack:bg-black">
      <div className="container-px relative mx-auto max-w-container pt-16 md:pt-24">
        <Reveal stagger={0}>
          <SectionLabel>Supply Chain Showcase</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            The full journey, farm to freight
          </h2>
          <p className="mt-2 text-sm text-muted">Scroll to follow a shipment through every stage.</p>
        </Reveal>
      </div>

      <div ref={pinRef} className="mt-10 overflow-x-auto pb-10 scrollbar-hide md:mt-14 lg:overflow-hidden lg:pb-0">
        <div
          ref={trackRef}
          className="container-px mx-auto flex max-w-container items-start gap-6 pr-10 md:gap-10 lg:min-h-[520px]"
        >
          {supplyChainSteps.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <div
                key={s.step}
                data-panel
                className="group relative flex w-[78vw] shrink-0 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-7 sm:w-[52vw] md:w-[380px] md:p-8 lg:h-[62vh] lg:min-h-[440px]"
              >
                <img
                  src={s.image}
                  alt={s.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/10" />

                <span
                  className="pointer-events-none absolute -top-4 right-4 font-display text-[7rem] font-black leading-none text-transparent md:text-[9rem]"
                  style={{ WebkitTextStroke: '2px rgba(255,191,0,0.9)' }}
                >
                  {String(s.step).padStart(2, '0')}
                </span>

                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                  <Icon size={22} />
                </span>

                <h3 className="relative mt-6 font-display text-2xl font-bold text-white">{s.label}</h3>
                <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                  {s.description}
                </p>

                {i < supplyChainSteps.length - 1 && (
                  <span className="relative mt-6 h-[3px] w-10 rounded-full bg-gold-gradient" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
