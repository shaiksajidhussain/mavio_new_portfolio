import { useEffect, useRef } from 'react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import ParticleField from '../ui/ParticleField'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const words = partnerPage.hero.heading.split(' ')

export default function PartnerHero() {
  const { role, setRole } = usePartnerRole()
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const restRef = useRef(null)
  const wordsRef = useRef([])
  const glowRef = useRef(null)
  const quickX = useRef(null)
  const quickY = useRef(null)
  const toggleWrapRef = useRef(null)
  const tabRefs = useRef([])
  const indicatorRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })

      gsap.fromTo(
        wordsRef.current,
        { opacity: 0, y: '60%', filter: 'blur(10px)' },
        { opacity: 1, y: '0%', filter: 'blur(0px)', duration: 0.8, stagger: 0.06, ease: 'power3.out', delay: 0.2 }
      )

      gsap.fromTo(
        restRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 + words.length * 0.06 + 0.15 }
      )

      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      quickX.current = gsap.quickTo(glowRef.current, 'x', { duration: 0.5, ease: 'power3.out' })
      quickY.current = gsap.quickTo(glowRef.current, 'y', { duration: 0.5, ease: 'power3.out' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const moveIndicator = (index, animate = true) => {
    const btn = tabRefs.current[index]
    const indicator = indicatorRef.current
    if (!btn || !indicator) return
    const { offsetLeft, offsetWidth } = btn
    if (animate && !prefersReducedMotion) {
      gsap.to(indicator, { left: offsetLeft, width: offsetWidth, duration: 0.45, ease: 'power3.out' })
    } else {
      indicator.style.left = `${offsetLeft}px`
      indicator.style.width = `${offsetWidth}px`
    }
  }

  useEffect(() => {
    moveIndicator(role === 'buyer' ? 0 : 1, false)
    const onResize = () => moveIndicator(role === 'buyer' ? 0 : 1, false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelect = (index, r) => {
    setRole(r)
    moveIndicator(index)
  }

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !quickX.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    quickX.current(e.clientX - rect.left)
    quickY.current(e.clientY - rect.top)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative -mt-20 flex min-h-[85vh] flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img ref={imgRef} src={partnerPage.hero.image} alt={partnerPage.hero.imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/55 to-navy-deep/40" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <ParticleField />
      </div>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl"
      />

      <div ref={restRef} className="container-px relative mx-auto w-full max-w-container pb-14 pt-40 md:pb-20">
        <SectionLabel tone="onDark">{partnerPage.hero.eyebrow}</SectionLabel>

        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {words.map((word, wi) => (
            <span key={wi} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top">
              <span ref={(el) => (wordsRef.current[wi] = el)} className="inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {partnerPage.hero.subheading}
        </p>

        <div
          ref={toggleWrapRef}
          className="relative mt-8 inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm"
        >
          <div ref={indicatorRef} className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-gold-gradient" />
          {['buyer', 'supplier'].map((r, i) => (
            <button
              key={r}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              onClick={() => handleSelect(i, r)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium capitalize transition-colors ${
                role === r ? 'text-navy-deep' : 'text-white/80 hover:text-white'
              }`}
            >
              I'm a {r}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
