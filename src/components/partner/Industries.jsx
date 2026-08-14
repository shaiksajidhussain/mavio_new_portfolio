import { Building2, Factory, Pill, Ship, Tag, UtensilsCrossed } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const icons = { UtensilsCrossed, Building2, Pill, Factory, Ship, Tag }
const { heading, subheading, items } = partnerPage.industries

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Industries We've Collaborated With</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div
                key={item.name}
                className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />

                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                  <Icon size={20} />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-bold text-white">{item.name}</h3>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
