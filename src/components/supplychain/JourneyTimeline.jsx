import { useEffect, useRef, useState } from 'react'
import { FileCheck2, Package, PackageCheck, ShieldCheck, Sprout, Truck } from 'lucide-react'
import { supplyChainSteps, supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Package, FileCheck2, Truck, PackageCheck }
const { heading, subheading } = supplyChainVisibilityPage.journey
const count = supplyChainSteps.length

export default function JourneyTimeline() {
  const sectionRef = useRef(null)
  const fillRef = useRef(null)
  const itemsRef = useRef([])
  const imageRefs = useRef([])
  const [activeIdx, setActiveIdx] = useState(0)
  const lastIdx = useRef(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add({ isDesktop: '(min-width: 768px)', isMobile: '(max-width: 767px)' }, (context) => {
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
                end: () => `+=${count * 280}`,
                scrub: 0.6,
                onUpdate: (self) => {
                  const idx = Math.min(count - 1, Math.floor(self.progress * count))
                  setActiveIdx((prev) => (prev !== idx ? idx : prev))
                  itemsRef.current.forEach((item, i) => {
                    if (!item) return
                    gsap.to(item, {
                      opacity: i === idx ? 1 : 0.4,
                      x: i === idx ? 8 : 0,
                      duration: 0.3,
                      overwrite: 'auto',
                    })
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
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: { trigger: item, start: 'top 85%', once: true, fastScrollEnd: true },
              }
            )
          })
        }
      })

      return () => mm.revert()
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    if (lastIdx.current === activeIdx) return
    const el = imageRefs.current[activeIdx]
    if (el) {
      gsap.fromTo(
        el,
        { clipPath: 'circle(0% at 50% 50%)' },
        { clipPath: 'circle(75% at 50% 50%)', duration: 0.9, ease: 'power3.out' }
      )
    }
    lastIdx.current = activeIdx
  }, [activeIdx])

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-muted py-16 themeblack:bg-black md:py-0 md:min-h-[calc(100vh_+_var(--jt-scroll))]"
      style={{ '--jt-scroll': `${count * 280}px` }}
    >
      <div className="container-px relative mx-auto max-w-container md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:py-20">
        <Reveal stagger={0}>
          <SectionLabel>End-to-End Supply Chain Journey</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:items-center">
          <div className="relative pl-10 md:pl-14">
            <div className="absolute left-3 top-0 h-full w-[2px] bg-line md:left-5" />
            <div
              ref={fillRef}
              className="absolute left-3 top-0 h-full w-[2px] origin-top scale-y-0 bg-gold-gradient md:left-5"
            />

            <div className="space-y-8">
              {supplyChainSteps.map((s, i) => {
                const Icon = icons[s.icon]
                return (
                  <div key={s.step} ref={(el) => (itemsRef.current[i] = el)} className="relative md:opacity-40">
                    <span className="absolute -left-10 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-surface md:-left-14">
                      <Icon size={12} className="text-gold-deep" />
                    </span>
                    <p className="font-mono text-xs font-semibold tracking-wide text-gold-deep">
                      {String(s.step).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">{s.label}</h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{s.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl bg-navy-deep shadow-card md:block">
            {supplyChainSteps.map((s, i) => (
              <img
                key={s.step}
                ref={(el) => (imageRefs.current[i] = el)}
                src={s.image}
                alt={s.label}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  clipPath: i === 0 ? 'circle(75% at 50% 50%)' : 'circle(0% at 50% 50%)',
                  zIndex: activeIdx === i ? 2 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
