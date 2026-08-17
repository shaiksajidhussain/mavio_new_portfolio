import { useEffect, useRef } from 'react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const { heading } = partnerPage.commitment

const roleImages = {
  buyer: 'https://res.cloudinary.com/dgus6y6lm/image/upload/v1786964040/38c5d42e-4ec1-49ec-bd99-a5d48ff595f3.png',
  supplier: 'https://res.cloudinary.com/dgus6y6lm/image/upload/v1786964340/598c9159-06b7-45d3-a308-b46a69d3a3ce.png',
}

function RoleToggle() {
  const { role, setRole } = usePartnerRole()
  const tabRefs = useRef([])
  const indicatorRef = useRef(null)

  const moveIndicator = (index, animate = true) => {
    const btn = tabRefs.current[index]
    const indicator = indicatorRef.current
    if (!btn || !indicator) return
    const { offsetLeft, offsetWidth } = btn
    if (animate && !prefersReducedMotion) {
      gsap.to(indicator, { left: offsetLeft, width: offsetWidth, duration: 0.4, ease: 'power3.out' })
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

  return (
    <div className="relative mt-6 inline-flex rounded-full border border-line bg-bg-muted p-1">
      <span ref={indicatorRef} className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-gold-gradient transition-none" />
      {['buyer', 'supplier'].map((r, i) => (
        <button
          key={r}
          ref={(el) => (tabRefs.current[i] = el)}
          type="button"
          onClick={() => {
            setRole(r)
            moveIndicator(i)
          }}
          className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
            role === r ? 'text-navy-deep' : 'text-muted hover:text-ink'
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  )
}

export default function Commitment() {
  const { role } = usePartnerRole()
  const activeRole = role === 'supplier' ? 'supplier' : 'buyer'
  const { subheading } = partnerPage.commitment[activeRole]

  const imgRef = useRef(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    const other = activeRole === 'buyer' ? roleImages.supplier : roleImages.buyer
    const preload = new Image()
    preload.src = other
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.97, y: 8 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
  }, [activeRole])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Our Commitment To Every Procurement</SectionLabel>
        <SectionHeading className="mt-3">{heading}</SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        <RoleToggle />
      </Reveal>

      <Reveal as="div" stagger={0} delay={0.1} className="relative mx-auto mt-14 max-w-5xl">
        <div className="absolute -inset-6 animate-pulse rounded-[40px] bg-gold-gradient opacity-25 blur-3xl" aria-hidden />

        <div className="group relative overflow-hidden rounded-3xl border border-gold-deep/25 shadow-card">
          <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gold-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
          <img
            ref={imgRef}
            key={activeRole}
            src={roleImages[activeRole]}
            alt={activeRole === 'buyer' ? 'Buyer procurement flow through Mavio Global' : 'Supplier procurement flow through Mavio Global'}
            className="relative w-full"
            loading="eager"
            decoding="async"
          />
        </div>
      </Reveal>
    </section>
  )
}
