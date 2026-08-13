import { useEffect, useRef } from 'react'
import { Handshake, ShieldCheck, Sprout, Timer } from 'lucide-react'
import { partnerPage, trustStats } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Sprout, ShieldCheck, Timer, Handshake }
const { heading, subheading, items } = partnerPage.competitiveAdvantage
const [featured, top, bottom, wide] = items
const farmStat = trustStats.find((s) => s.label === 'Countries Served')

export default function CompetitiveAdvantage() {
  const gridRef = useRef(null)
  const maskRef = useRef(null)
  const numberRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true, fastScrollEnd: true },
        }
      )

      if (farmStat && numberRef.current) {
        const target = Number(farmStat.value.replace(/,/g, ''))
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true, fastScrollEnd: true },
          onUpdate: () => {
            if (!numberRef.current) return
            numberRef.current.textContent = Math.round(counter.val).toLocaleString('en-US')
          },
        })
      }
    }, gridRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !maskRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        maskRef.current,
        { xPercent: 0 },
        {
          xPercent: 101,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: maskRef.current, start: 'top 85%', once: true, fastScrollEnd: true },
        }
      )
    }, maskRef)
    return () => ctx.revert()
  }, [])

  const FeaturedIcon = icons[featured.icon]
  const TopIcon = icons[top.icon]
  const BottomIcon = icons[bottom.icon]
  const WideIcon = icons[wide.icon]

  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal stagger={0}>
        <SectionLabel>Our Competitive Advantage</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
      </Reveal>

      <div className="relative mt-2 inline-block max-w-xl overflow-hidden">
        <p className="text-sm text-muted md:text-base">{subheading}</p>
        <div ref={maskRef} className="absolute inset-0 bg-bg" />
      </div>

      <div ref={gridRef} className="mt-10 grid gap-5 md:grid-cols-2">
        <div
          data-card
          className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-navy-deep p-8 shadow-card md:row-span-2 md:min-h-[380px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 text-gold/10"
          >
            <FeaturedIcon size={220} strokeWidth={1} />
          </div>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
            <FeaturedIcon size={24} />
          </span>

          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{featured.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
              {featured.description}
            </p>

            {farmStat && (
              <div className="mt-6 flex items-baseline gap-2 border-t border-white/10 pt-5">
                <span className="font-display text-4xl font-black text-gold">
                  <span ref={numberRef}>0</span>
                  {farmStat.suffix}
                </span>
                <span className="text-sm text-white/60">{farmStat.label}</span>
              </div>
            )}
          </div>
        </div>

        <div data-card className="rounded-2xl border border-line bg-surface p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
            <TopIcon size={20} />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-ink">{top.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{top.description}</p>
        </div>

        <div data-card className="rounded-2xl border border-line bg-surface p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
            <BottomIcon size={20} />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-ink">{bottom.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{bottom.description}</p>
        </div>

        <div
          data-card
          className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 shadow-card sm:flex-row sm:items-center md:col-span-2"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
            <WideIcon size={20} />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">{wide.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{wide.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
