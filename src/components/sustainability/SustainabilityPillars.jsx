import { HandHeart, Sprout, Truck, Users } from 'lucide-react'
import { sustainabilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const icons = { Users, HandHeart, Sprout, Truck }
const { subheading, items } = sustainabilityPage.pillars

export default function SustainabilityPillars() {
  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container pb-16 pt-16 md:pb-24 md:pt-24">
      <RouteBackground />
      <Reveal stagger={0}>
        <SectionLabel>Our Sustainability Pillars</SectionLabel>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          Four commitments, one purpose
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <Reveal as="div" stagger={0.1} className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.title} className="flex flex-col rounded-3xl border border-line bg-surface p-7 shadow-card md:p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm font-medium italic text-gold-deep">{item.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
              <p className="mt-5 border-t border-line pt-4 font-display text-sm font-semibold text-navy dark:text-white">
                “{item.motto}”
              </p>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
