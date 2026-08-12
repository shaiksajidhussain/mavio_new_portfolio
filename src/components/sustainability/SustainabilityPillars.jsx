import { Droplets, HandHeart, Recycle, Sprout, Truck, Users } from 'lucide-react'
import { sustainabilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const icons = { Sprout, HandHeart, Truck, Recycle, Droplets, Users }
const { heading, subheading, items } = sustainabilityPage.pillars

export default function SustainabilityPillars() {
  return (
    <section className="container-px mx-auto max-w-container pb-16 pt-16 md:pb-24 md:pt-24">
      <Reveal stagger={0}>
        <SectionLabel>Our Sustainability Pillars</SectionLabel>
        <h1 className="mt-3 max-w-xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          {heading}
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
      </Reveal>

      <Reveal as="div" stagger={0.08} className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-6 text-center shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <Icon size={24} />
              </span>
              <p className="font-display text-sm font-semibold text-ink">{item.label}</p>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
