import { Building2, Factory, Pill, Ship, Tag, UtensilsCrossed } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const icons = { UtensilsCrossed, Building2, Pill, Factory, Ship, Tag }
const { heading, subheading, items } = partnerPage.industries

export default function Industries() {
  return (
    <section className="bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Industries We've Collaborated With</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.08} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div
                key={item.name}
                className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                  <Icon size={20} />
                </span>
                <p className="font-display text-base font-semibold text-ink">{item.name}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
