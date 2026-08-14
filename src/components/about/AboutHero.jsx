import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane } from 'lucide-react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import { aboutPage } from '../../data/siteContent'
import Reveal from '../ui/Reveal'

export default function AboutHero() {
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

  return (
    <section className="relative -mt-20 flex min-h-[420px] items-center overflow-hidden sm:-mt-[7.25rem] sm:min-h-[460px]">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img src={aboutPage.hero.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />
      <img
        src={mapSvgUri}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />

      <span className="pointer-events-none absolute right-[12%] top-[22%] hidden sm:block">
        <Plane
          aria-hidden
          size={26}
          strokeWidth={1.5}
          className="animate-float-slow text-gold/70"
          style={{ '--float-rotate': '35deg' }}
        />
      </span>
      <span className="pointer-events-none absolute right-[22%] bottom-[18%] hidden md:block">
        <Plane
          aria-hidden
          size={18}
          strokeWidth={1.5}
          className="animate-float text-gold/50"
          style={{ '--float-rotate': '-20deg' }}
        />
      </span>

      <div className="container-px relative mx-auto w-full max-w-container pt-20 sm:pt-[7.25rem]">
        <Reveal stagger={0.08} className="border-l-2 border-gold-deep pl-6">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">About Us</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
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
