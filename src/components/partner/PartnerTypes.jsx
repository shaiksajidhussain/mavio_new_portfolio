import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function PartnerTypes() {
  const { eyebrow, heading, subheading, items } = partnerPage.partnerTypes
  const { partnerType, selectPartnerType } = usePartnerRole()

  return (
    <section id="partner-types" className="scroll-mt-28 bg-navy-deep py-16 text-white md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0.08}>
          <SectionLabel tone="onDark">{eyebrow}</SectionLabel>
          <SectionHeading tone="onDark" className="mt-3 max-w-2xl">
            {heading}
          </SectionHeading>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">{subheading}</p>
        </Reveal>

        <Reveal
          as="div"
          stagger={0.08}
          delay={0.08}
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item, index) => {
            const selected = partnerType === item.label
            return (
              <Link
                key={item.id}
                to="#become-a-partner"
                onClick={() => selectPartnerType(item.id)}
                className={`group relative isolate flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl border p-5 transition-colors duration-300 md:min-h-[320px] md:p-6 ${
                  selected ? 'border-gold' : 'border-white/10 hover:border-gold/60'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/10" />

                <span className="font-mono text-xs tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.body}</p>
                <span
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
                    selected ? 'text-gold' : 'text-white group-hover:text-gold'
                  }`}
                >
                  {selected ? 'Selected for application' : 'Apply as this partner'}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
