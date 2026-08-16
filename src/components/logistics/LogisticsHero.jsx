import { useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Ship } from 'lucide-react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

const { hero } = exportLogisticsPage

export default function LogisticsHero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const copyRef = useRef(null)

  const mapSvgUri = useMemo(() => {
    const map = new DottedMap({ map: worldMapData })
    const svg = map.getSVG({
      radius: 0.22,
      color: '#ffffff26',
      shape: 'circle',
      backgroundColor: 'transparent',
    })
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
      gsap.fromTo(
        copyRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex min-h-[420px] items-center overflow-hidden sm:-mt-[7.25rem] sm:min-h-[460px]"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img ref={imgRef} src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />
      <img
        src={mapSvgUri}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />

      <span className="pointer-events-none absolute right-[14%] top-[22%] hidden sm:block">
        <Plane
          aria-hidden
          size={26}
          strokeWidth={1.5}
          className="animate-float-slow text-gold/70"
          style={{ '--float-rotate': '35deg' }}
        />
      </span>
      <span className="pointer-events-none absolute right-[24%] bottom-[20%] hidden md:block">
        <Ship
          aria-hidden
          size={20}
          strokeWidth={1.5}
          className="animate-float text-gold/50"
          style={{ '--float-rotate': '-4deg' }}
        />
      </span>

      <div ref={copyRef} className="container-px relative mx-auto w-full max-w-container pt-20 sm:pt-[7.25rem]">
        <SectionLabel tone="onDark">{hero.eyebrow}</SectionLabel>
        <SectionHeading as="h1" tone="onDark" size="hero" weight="bold" className="mt-4 max-w-2xl">
          {hero.heading}
        </SectionHeading>
        <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
          <Link to="/" className="font-medium text-gold hover:text-gold-bright">
            Home
          </Link>
          <ArrowRight size={14} />
          <span className="text-white">Export &amp; Logistics</span>
        </div>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{hero.subheading}</p>
      </div>
    </section>
  )
}
