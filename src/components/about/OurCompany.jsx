import { ArrowRight, Globe2, Headphones, Phone, Ship } from 'lucide-react'
import { about, aboutPage, brand, footer } from '../../data/siteContent'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const features = [
  {
    icon: Globe2,
    title: 'Global Trade Network',
    description: 'Sourcing and shipping coordinated across 25+ countries.',
  },
  {
    icon: Headphones,
    title: 'Responsive Support',
    description: 'Our team responds within one business day, regardless of time zone.',
  },
]

export default function OurCompany() {
  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground />
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-10">
        <Reveal delay={0.1}>
          <div className="flex items-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">{aboutPage.hero.eyebrow}</span>
            <Ship size={14} />
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy dark:text-white md:text-4xl">
            {aboutPage.hero.heading}
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            {aboutPage.hero.body}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border-l-2 border-gold-deep bg-surface p-5 shadow-card">
                <f.icon size={20} className="text-gold-deep" />
                <p className="mt-3 font-display text-sm font-bold text-ink">{f.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button to="/capabilities/export-logistics" variant="primary">
              Explore Our Capabilities
              <ArrowRight size={16} />
            </Button>

            <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-gold-deep">
                <Phone size={16} />
              </span>
              <div>
                <p className="text-xs text-muted">Make A Phone Call</p>
                <p className="text-sm font-semibold text-ink">{footer.contact.phone}</p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="relative">
          <div className="w-[78%] overflow-hidden rounded-3xl border-4 border-surface shadow-card">
            <img src={about.image} alt={about.imageAlt} className="aspect-[4/5] w-full object-cover" />
          </div>

          <div className="absolute -right-2 bottom-14 w-[52%] overflow-hidden rounded-3xl border-4 border-surface shadow-card sm:bottom-20">
            <img src={about.secondaryImage} alt={about.secondaryImageAlt} className="aspect-square w-full object-cover" />
          </div>

          <div className="absolute -right-4 top-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gold-gradient text-center shadow-card sm:top-14">
            <span className="font-display text-lg font-black text-navy-deep">Est.</span>
            <span className="font-display text-xl font-black text-navy-deep">{brand.founded}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
