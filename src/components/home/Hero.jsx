import { useEffect, useRef, useState } from 'react'
import { hero } from '../../data/siteContent'
import Button from '../ui/Button'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const SLIDE_INTERVAL = 3000

const line1Words = ["India's", 'Largest', 'B2B']
const line2Words = [
  { text: 'Procurement' },
  { text: '&' },
  { text: 'Digital' },
  { text: 'Platform', gold: true },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const imgWrapRef = useRef(null)
  const wordsRef = useRef([])
  const copyRef = useRef(null)
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
          { opacity: 1, y: '0%', filter: 'blur(0px)', duration: 0.8, stagger: 0.045, ease: 'power3.out', clearProps: 'filter' },
          0.5
        )
        .fromTo(copyRef.current.children, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.8)

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

      <div className="flex flex-1 flex-col justify-center pt-[4.5rem] sm:pt-[4.5rem]">
        <div className="container-px mx-auto w-full max-w-container">
          <div className="max-w-3xl pb-14 pt-8 text-left md:ml-[6%] md:pb-16 lg:ml-[10%]">
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">
                {line1Words.map((text, i) => (
                  <span key={text} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top last:mr-0">
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
                      className={`inline-block ${w.gold ? 'gold-text' : ''}`}
                    >
                      {w.text}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            <div ref={copyRef} className="mt-6 flex flex-col items-start">
              <p className="gold-text font-display text-lg font-semibold tracking-wide md:text-xl">
                {hero.subheading}
              </p>
              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <Button
                  to={hero.primaryCta.to}
                  variant="primary"
                  className="!px-8 !py-3.5 !text-base !font-semibold shadow-[0_10px_28px_-8px_rgba(212,162,76,0.65)]"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  to={hero.secondaryCta.to}
                  variant="outlineLight"
                  className="!px-8 !py-3.5 !text-base !font-semibold !duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:!scale-[1.07]"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
