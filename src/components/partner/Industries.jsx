import { ArrowRight, Building2, Factory, Pill, Ship, Tag, UtensilsCrossed } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = { UtensilsCrossed, Building2, Pill, Factory, Ship, Tag }
const { eyebrow, heading, items } = partnerPage.industries

export default function Industries() {
  const { role } = usePartnerRole()
  const activeRole = role === 'supplier' ? 'supplier' : 'buyer'
  const { subheading, cta } = partnerPage.industries[activeRole]

  return (
    <section className="bg-bg-muted py-16 md:py-24">
      <div className="container-px mx-auto max-w-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
          <Reveal as="div" stagger={0.1}>
            <div className="flex items-center gap-2 text-gold-deep">
              <span className="h-px w-6 bg-gold-deep" />
              <span className="eyebrow">{eyebrow}</span>
              <Ship size={14} />
            </div>
            <SectionHeading as="h2" className="mt-3">
              {heading}
            </SectionHeading>
            <p key={subheading} className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              {subheading}
            </p>

            <Button to={cta.to} variant="primary" className="mt-6 w-fit">
              {cta.label}
              <ArrowRight size={16} />
            </Button>
          </Reveal>

          <Reveal
            as="div"
            stagger={0.06}
            delay={0.1}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5"
          >
            {items.map((item) => {
              const Icon = icons[item.icon]
              return (
                <div key={item.name} className="group flex flex-col items-center gap-3 p-6 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full text-gold-deep transition-all duration-300 group-hover:scale-110 group-hover:text-gold-bright group-hover:drop-shadow-[0_0_18px_rgba(255,191,0,0.55)]">
                    {Icon && <Icon size={36} />}
                  </span>
                  <p className="font-display text-sm font-bold leading-tight text-ink transition-colors duration-300 group-hover:text-gold-deep">
                    {item.name}
                  </p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
