import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import { about } from '../../data/siteContent'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function CTABanner() {
  const mapSvgUri = useMemo(() => {
    const map = new DottedMap({ map: worldMapData })
    const svg = map.getSVG({
      radius: 0.22,
      color: '#ffffff30',
      shape: 'circle',
      backgroundColor: 'transparent',
    })
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }, [])

  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal
        as="div"
        stagger={0}
        className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-14 shadow-card sm:px-12 md:px-16 md:py-20"
      >
        <img
          src={mapSvgUri}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-0 hidden h-full w-64 opacity-90 md:block"
          style={{ clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 20% 100%)' }}
        >
          <div className="h-full w-full bg-gold-gradient" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 hidden h-full w-64 opacity-20 md:block"
          style={{ clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 20% 100%)' }}
        >
          <div className="h-full w-full bg-white" />
        </div>

        <div className="relative max-w-lg">
          <SectionHeading tone="onDark" weight="bold">
            Recognized as a Trusted Partner in Global Trade
          </SectionHeading>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            A trade partner recognized for reliability, transparency, and on-time delivery across
            25+ countries.
          </p>
          <Button to="/contact" variant="primary" className="mt-8">
            Request a Quote
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="absolute -top-10 right-12 hidden w-56 overflow-hidden rounded-2xl border-4 border-surface shadow-card lg:block xl:right-24 xl:w-64">
          <img
            src={about.secondaryImage}
            alt={about.secondaryImageAlt}
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}
