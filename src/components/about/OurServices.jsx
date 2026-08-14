import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Radar, Ship } from 'lucide-react'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const services = [
  {
    icon: FlaskConical,
    title: 'Quality & Compliance',
    description: 'Every product tested and graded before it moves.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    to: '/capabilities/quality-compliance',
  },
  {
    icon: Radar,
    title: 'Supply Chain Visibility',
    description: 'Live visibility from origin to final delivery.',
    image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=900&q=80',
    to: '/capabilities/supply-chain-visibility',
  },
  {
    icon: Ship,
    title: 'Export & Logistics',
    description: 'Freight, customs and documentation, fully managed.',
    image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=900&q=80',
    to: '/capabilities/export-logistics',
  },
]

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px mx-auto max-w-container text-center">
        <Reveal stagger={0}>
          <div className="flex items-center justify-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">Our Service</span>
            <Ship size={14} />
          </div>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            Trade Services We Deliver With{' '}
            <span className="text-gold-gradient underline decoration-gold-deep/40 underline-offset-4">
              Confidence
            </span>
          </h2>
        </Reveal>

        <Reveal as="div" stagger={0.1} className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group text-left">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative rounded-b-2xl border border-t-0 border-line bg-surface p-6 pr-20 shadow-card">
                <span
                  className="absolute -top-9 right-0 flex h-16 w-16 items-center justify-center bg-navy-deep text-gold transition-colors duration-300 group-hover:bg-gold-deep group-hover:text-navy-deep"
                  style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                >
                  <s.icon size={22} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                  Read More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
