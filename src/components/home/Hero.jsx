import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { brand, hero, productCategories } from '../../data/siteContent'
import Button from '../ui/Button'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const featured = productCategories[0]
const SLIDE_INTERVAL = 3000

const line1Words = ["India's", 'Leading', 'and']
const line2Words = [
  { text: 'Trusted' },
  { text: 'Gateway' },
  { text: 'to' },
  { text: 'Global' },
  { text: 'Markets', gold: true },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const imgWrapRef = useRef(null)
  const markerRef = useRef(null)
  const wordsRef = useRef([])
  const copyRef = useRef(null)
  const cardRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % hero.images.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(imgWrapRef.current, { scale: 1.15 }, { scale: 1, duration: 1.6, ease: 'power2.out' })
        .fromTo(markerRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
        .fromTo(
          wordsRef.current,
          { opacity: 0, y: '60%', filter: 'blur(10px)' },
          { opacity: 1, y: '0%', filter: 'blur(0px)', duration: 0.8, stagger: 0.045, ease: 'power3.out' },
          0.5
        )
        .fromTo(copyRef.current.children, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.8)
        .fromTo(
          cardRef.current,
          { opacity: 0, y: 30, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.6)' },
          0.9
        )

      gsap.to(imgWrapRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex min-h-screen flex-col overflow-hidden sm:-mt-[7.25rem]"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div ref={imgWrapRef} className="relative h-full w-full scale-110">
          {hero.images.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${
                prefersReducedMotion ? 'duration-0' : 'duration-[1200ms]'
              } ${i === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/30" />

      <div className="flex flex-1 flex-col pt-20 sm:pt-[7.25rem]">
        <div
          ref={markerRef}
          className="container-px mx-auto mt-8 flex w-full max-w-container items-center justify-between border-b border-white/20 pb-4 text-white/70"
        >
          <span className="eyebrow">Est. {brand.founded}</span>
          <span className="eyebrow hidden sm:inline">{brand.ports.join(' · ')}</span>
          <span className="eyebrow text-gold">Global Trade &amp; Logistics</span>
        </div>

        <div className="container-px mx-auto mt-auto w-full max-w-container pb-14 pt-16 md:pb-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">
                  {line1Words.map((text, i) => (
                    <span key={text} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top">
                      <span ref={(el) => (wordsRef.current[i] = el)} className="inline-block">
                        {text}
                      </span>
                    </span>
                  ))}
                </span>
                <span className="block">
                  {line2Words.map((w, i) => (
                    <span key={w.text} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top last:mr-0">
                      <span
                        ref={(el) => (wordsRef.current[line1Words.length + i] = el)}
                        className={`inline-block ${w.gold ? 'text-gold-gradient' : ''}`}
                      >
                        {w.text}
                      </span>
                    </span>
                  ))}
                </span>
              </h1>

              <div ref={copyRef} className="mt-6">
                <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                  {hero.subheading}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {hero.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-medium text-white">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-gradient">
                        <Check size={12} className="text-navy-deep" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Button to={hero.primaryCta.to} variant="primary">
                    {hero.primaryCta.label}
                  </Button>
                  <Button
                    to={hero.secondaryCta.to}
                    variant="outline"
                    className="border-white/30 text-white hover:border-gold hover:text-gold"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </div>

            <div
              ref={cardRef}
              className="w-full max-w-xs shrink-0 rounded-2xl bg-surface p-5 shadow-card md:w-80"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">01/{String(productCategories.length).padStart(2, '0')}</span>
                <span className="eyebrow text-muted">Our Products</span>
              </div>
              <div className="my-4 h-px bg-line" />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{featured.name}</p>
                  <p className="mt-1 text-xs text-muted">{featured.description}</p>
                </div>
                <Button
                  to={`/products/${featured.slug}`}
                  variant="primary"
                  className="!h-10 !w-10 shrink-0 !rounded-full !p-0"
                  aria-label={`Explore ${featured.name}`}
                >
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
