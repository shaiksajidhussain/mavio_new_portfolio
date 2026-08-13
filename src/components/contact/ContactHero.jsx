import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import Reveal from '../ui/Reveal'

const heroImage = {
  src: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=2200&q=80',
  alt: 'Trucks loading shipping containers at a freight yard',
}

export default function ContactHero() {
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
        <img src={heroImage.src} alt={heroImage.alt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />
      <img
        src={mapSvgUri}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />

      <div className="container-px relative mx-auto w-full max-w-container pt-20 sm:pt-[7.25rem]">
        <Reveal stagger={0.08} className="border-l-2 border-gold-deep pl-6">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="font-medium text-gold hover:text-gold-bright">
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="text-white">Contact Us</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
