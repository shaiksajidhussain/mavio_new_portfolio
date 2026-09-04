import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { aboutPage } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function AboutHero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { scale: 1.12 }, { scale: 1, duration: 1.8, ease: 'power2.out' })
      gsap.to(imgRef.current, {
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
      className="relative -mt-[4.5rem] flex min-h-[70vh] items-end overflow-hidden sm:min-h-[78vh]"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          ref={imgRef}
          src={aboutPage.hero.image}
          alt=""
          data-no-dim
          className="h-full w-full scale-110 object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="container-px relative mx-auto w-full max-w-container pb-16 pt-[7.5rem] md:pb-20">
        <Reveal stagger={0.1} className="max-w-3xl">
          <p className="gold-text eyebrow">About Us</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            A connected journey for global buyers sourcing from{' '}
            <span className="gold-text">India.</span>
          </h1>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="font-medium text-gold hover:text-gold-bright">
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="text-white">About Us</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
