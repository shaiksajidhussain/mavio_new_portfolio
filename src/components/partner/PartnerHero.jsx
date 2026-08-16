import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Ship, Truck } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function PartnerHero() {
  const { role, setRole } = usePartnerRole()
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const copyRef = useRef(null)
  const toggleWrapRef = useRef(null)
  const tabRefs = useRef([])
  const indicatorRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
      gsap.fromTo(
        copyRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
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

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex min-h-[420px] flex-col justify-end overflow-hidden sm:-mt-[7.25rem] sm:min-h-[460px]"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img ref={imgRef} src={partnerPage.hero.image} alt={partnerPage.hero.imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />

      <span className="pointer-events-none absolute right-[14%] top-[20%] hidden sm:block">
        <Plane
          aria-hidden
          size={28}
          strokeWidth={1.5}
          className="animate-float-slow text-gold/70"
          style={{ '--float-rotate': '35deg' }}
        />
      </span>
      <span className="pointer-events-none absolute right-[26%] top-[55%] hidden md:block">
        <Ship
          aria-hidden
          size={22}
          strokeWidth={1.5}
          className="animate-float text-gold/50"
          style={{ '--float-rotate': '-4deg' }}
        />
      </span>
      <span className="pointer-events-none absolute left-[10%] bottom-[16%] hidden sm:block">
        <Truck aria-hidden size={20} strokeWidth={1.5} className="animate-float-fast text-gold/50" />
      </span>

      <div ref={copyRef} className="container-px relative mx-auto w-full max-w-container pb-10 pt-24 sm:pt-[7.25rem] md:pb-14">
        <SectionLabel tone="onDark">{partnerPage.hero.eyebrow}</SectionLabel>

        <SectionHeading as="h1" tone="onDark" size="hero" weight="bold" className="mt-4 max-w-2xl">
          {partnerPage.hero.heading}
        </SectionHeading>

        <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
          <Link to="/" className="font-medium text-gold hover:text-gold-bright">
            Home
          </Link>
          <ArrowRight size={14} />
          <span className="text-white">Partner With Us</span>
        </div>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {partnerPage.hero.subheading}
        </p>

        <div ref={toggleWrapRef} className="relative mt-8 inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-gold-gradient transition-none"
          />
          {['buyer', 'supplier'].map((r, i) => (
            <button
              key={r}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              onClick={() => handleSelect(i, r)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
                role === r ? 'text-navy-deep' : 'text-white/80 hover:text-white'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
