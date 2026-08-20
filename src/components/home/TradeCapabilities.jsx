import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Globe2, Radar, Settings, ShieldCheck, Ship } from 'lucide-react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import { testimonials, trustStats } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const image = {
  src: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1400&q=80',
  alt: 'Container cranes loading freight at a busy port',
}

const capabilities = [
  {
    icon: Globe2,
    title: 'Global Trade Network',
    description: 'Sourcing and shipping coordinated across 25+ countries.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Quality & Safety',
    description: 'Every shipment lab-tested and inspected before it moves.',
  },
  {
    icon: Settings,
    title: 'End-to-End Ownership',
    description: 'From documentation to delivery, one accountable partner.',
  },
  {
    icon: Radar,
    title: 'Live Shipment Tracking',
    description: '100% visibility from origin to destination.',
  },
]

const countriesStat = trustStats.find((s) => s.label === 'Countries Served')
const avatars = testimonials.slice(0, 4).map((t) => t.avatar)

export default function TradeCapabilities() {
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
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal
        as="div"
        stagger={0}
        className="relative overflow-hidden rounded-3xl shadow-card md:min-h-[640px]"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative overflow-hidden bg-navy-deep px-8 py-14 sm:px-12 md:px-14 md:py-16">
            <img
              src={mapSvgUri}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div className="relative">
              <div className="flex items-center gap-2 text-gold-deep">
                <span className="h-px w-6 bg-gold-deep" />
                <span className="eyebrow">Our Capabilities</span>
                <Ship size={14} />
              </div>

              <SectionHeading tone="onDark" weight="bold" className="mt-4">
                Trade Capabilities We Are Often Trusted For
              </SectionHeading>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                Mavio Global connects buyers and suppliers through a single, accountable trade
                partner — handling sourcing, quality, documentation and logistics as one
                connected system.
              </p>

              {countriesStat && (
                <div className="relative mt-9">
                  <div className="flex items-center gap-4 border-l-2 border-gold-deep pl-5">
                    <div className="flex -space-x-3">
                      {avatars.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt=""
                          className="h-10 w-10 rounded-full border-2 border-navy-deep object-cover"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-display text-3xl font-black text-white">
                        {countriesStat.value}
                        {countriesStat.suffix}
                      </p>
                      <p className="text-sm text-white/60">Countries Served</p>
                    </div>
                  </div>

                  <svg
                    aria-hidden
                    viewBox="0 0 220 70"
                    className="pointer-events-none absolute left-1 top-full mt-6 hidden w-44 text-gold-deep/50 lg:block"
                  >
                    <path
                      d="M4 10 C 55 2, 80 34, 130 30 C 155 28, 150 46, 172 44 C 186 43, 182 34, 196 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="pointer-events-none absolute left-0 top-full mt-3 hidden h-8 w-8 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep lg:flex">
                    <Ship size={14} />
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="relative hidden min-h-[280px] md:block">
            <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />

            <Link
              to="/capabilities/export-logistics"
              aria-label="Explore our export and logistics capabilities"
              className="group absolute right-10 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-card transition-transform duration-300 hover:scale-110"
            >
              <ArrowUpRight size={26} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 -mt-1 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 md:absolute md:bottom-10 md:left-[38%] md:right-10 md:mt-0 md:overflow-hidden md:rounded-2xl md:shadow-card">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-surface px-6 py-6">
              <c.icon size={22} className="text-gold-deep" />
              <p className="mt-3 font-display text-base font-bold text-ink">{c.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{c.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
