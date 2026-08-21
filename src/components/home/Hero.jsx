import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { hero, productCategories } from '../../data/siteContent'
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
      className="relative -mt-[4.5rem] flex min-h-screen flex-col overflow-hidden sm:-mt-[4.5rem]"
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
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="flex flex-1 flex-col pt-[4.5rem] sm:pt-[4.5rem]">
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
                <p className="max-w-lg text-sm leading-relaxed text-white/55 md:text-[0.9375rem]">
                  {hero.subheading}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {hero.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-base font-semibold tracking-tight text-white md:text-lg"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient shadow-[0_0_16px_rgba(212,162,76,0.45)]">
                        <Check size={13} className="text-navy-deep" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    to={hero.primaryCta.to}
                    variant="primary"
                    className="!px-8 !py-3.5 !text-base !font-semibold shadow-[0_10px_28px_-8px_rgba(212,162,76,0.65)]"
                  >
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

      
          </div>
        </div>
      </div>
    </section>
  )
}
