import { useMemo } from 'react'
import { Quote, Ship, Star } from 'lucide-react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import { testimonials, trustStats } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const featured = testimonials.buyer[1]
const experienceStat = trustStats.find((s) => s.label === 'Years of Experience')

const sideImage = {
  src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
  alt: 'Spices being sorted and quality-checked at a grading table',
}

export default function AboutTestimonial() {
  const mapSvgUri = useMemo(() => {
    const map = new DottedMap({ map: worldMapData })
    const svg = map.getSVG({
      radius: 0.22,
      color: '#0b244226',
      shape: 'circle',
      backgroundColor: 'transparent',
    })
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }, [])

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <img
        src={mapSvgUri}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <RouteBackground flip />
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[5rem] font-black text-navy/5 dark:text-white/5 sm:text-[8rem]"
      >
        TESTIMONIALS
      </p>

      <div className="container-px relative mx-auto max-w-container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal stagger={0.08}>
            <div className="flex items-center gap-2 text-gold-deep">
              <span className="h-px w-6 bg-gold-deep" />
              <span className="eyebrow">Client Testimonial</span>
              <Ship size={14} />
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy dark:text-white md:text-4xl">
              Hear From Our{' '}
              <span className="text-gold-gradient underline decoration-gold-deep/40 underline-offset-4">
                Trade Partners
              </span>
            </h2>

            <div className="relative mt-8 rounded-2xl border-l-4 border-gold-deep bg-surface p-7 shadow-card">
              <span className="absolute -top-4 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-card">
                <Quote size={16} />
              </span>
              <div className="flex items-center gap-3">
                <img
                  src={featured.avatar}
                  alt=""
                  className="h-14 w-14 rounded-full border-2 border-gold-deep object-cover"
                />
                <div>
                  <p className="font-display text-base font-bold text-ink">{featured.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="eyebrow text-gold-deep">{featured.role}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={11} className="fill-gold-deep text-gold-deep" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                “{featured.quote}”
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img src={sideImage.src} alt={sideImage.alt} className="aspect-[4/3] w-full object-cover" />
            </div>

            {experienceStat && (
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card sm:left-10">
                <div className="flex -space-x-3">
                  {testimonials.supplier.slice(0, 3).map((t) => (
                    <img
                      key={t.avatar}
                      src={t.avatar}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-surface object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-display text-lg font-black text-navy dark:text-white">
                    {experienceStat.value}
                    {experienceStat.suffix}
                  </p>
                  <p className="text-xs text-muted">Years of Experience</p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
