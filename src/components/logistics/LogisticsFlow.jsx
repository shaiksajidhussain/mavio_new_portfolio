import { useEffect, useRef } from 'react'
import { ClipboardList, FileCheck2, Navigation, PackageCheck, Ship, Warehouse } from 'lucide-react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { ClipboardList, FileCheck2, Warehouse, Ship, Navigation, PackageCheck }
const { heading, subheading, steps } = exportLogisticsPage.process

export default function LogisticsFlow() {
  const sectionRef = useRef(null)
  const wrapRef = useRef(null)
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

      if (wrapRef.current) {
        wrapRef.current.style.height = `${pinRef.current.offsetHeight + total}px`
      }

      const tween = gsap.to(track, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${total}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        if (wrapRef.current) wrapRef.current.style.height = ''
      }
    })

    return () => mm.revert()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray('[data-flow-panel]'),
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
    <section ref={sectionRef} className="relative bg-bg themeblack:bg-black">
      <div className="container-px relative mx-auto max-w-container pt-16 md:pt-24">
        <Reveal stagger={0}>
          <SectionLabel>Our Export Process</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{subheading}</p>
        </Reveal>
      </div>

      <div ref={wrapRef} className="relative mt-10 md:mt-14 lg:mt-0">
        <div
          ref={pinRef}
          className="overflow-x-auto pb-10 scrollbar-hide lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden lg:pb-0"
        >
          <div
            ref={trackRef}
            className="container-px mx-auto flex max-w-container items-start gap-6 pr-10 md:gap-10 lg:min-h-[520px]"
          >
            {steps.map((s, i) => {
              const Icon = icons[s.icon]
              return (
                <div
                  key={s.step}
                  data-flow-panel
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
                  <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-white/70">{s.description}</p>

                  {i < steps.length - 1 && <span className="relative mt-6 h-[3px] w-10 rounded-full bg-gold-gradient" />}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
