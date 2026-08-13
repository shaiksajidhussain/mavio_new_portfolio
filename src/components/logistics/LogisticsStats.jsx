import { CheckCircle2 } from 'lucide-react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const { heading, subheading, points } = exportLogisticsPage.trust

export default function LogisticsStats() {
  return (
    <section className="bg-navy py-16 dark:bg-navy-deep themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel tone="onDark">Why Businesses Trust Our Logistics</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.06} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 size={18} className="shrink-0 text-gold" />
              <p className="text-sm font-medium text-white/90">{p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
