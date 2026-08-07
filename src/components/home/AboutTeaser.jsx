import { Calendar, MapPin, Ship } from 'lucide-react'
import { about, brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const facts = [
  { icon: Calendar, label: 'Founded', value: String(brand.founded) },
  { icon: MapPin, label: 'Headquarters', value: brand.hq },
  { icon: Ship, label: 'Export ports', value: brand.ports.join(' & ') },
]

export default function AboutTeaser() {
  return (
    <section className="container-px mx-auto max-w-container pb-16 pt-24 md:pb-24 md:pt-32">
      <Reveal stagger={0}>
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          About Mavio Global
        </h2>
      </Reveal>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line shadow-card">
          <img src={about.image} alt={about.imageAlt} className="aspect-[4/3] w-full object-cover" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-surface/90 px-4 py-2 shadow-card backdrop-blur-sm">
            <Ship size={14} className="text-gold-deep" />
            <span className="font-mono text-xs font-semibold text-ink">
              Est. {brand.founded} &middot; {brand.hq}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-2xl font-semibold italic leading-snug text-gold-deep md:text-3xl">
            {about.heading}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{about.body}</p>

          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {facts.map((f) => (
              <div key={f.label}>
                <f.icon size={16} className="text-gold-deep" />
                <p className="mt-2 text-sm font-semibold text-ink">{f.value}</p>
                <p className="text-xs text-muted">{f.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
