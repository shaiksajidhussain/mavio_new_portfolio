import { useRef } from 'react'
import { CheckCircle2, Plane, Ship } from 'lucide-react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { pressCard } from '../../lib/cardTilt'

const { heading, subheading, points } = exportLogisticsPage.trust

export default function LogisticsStats() {
  const chipsRef = useRef([])

  return (
    <section className="relative overflow-hidden bg-navy py-16 dark:bg-navy-deep themeblack:bg-black md:py-24">
      <span className="pointer-events-none absolute right-[8%] top-[14%] hidden sm:block">
        <Plane
          aria-hidden
          size={24}
          strokeWidth={1.5}
          className="animate-float-slow text-gold/50"
          style={{ '--float-rotate': '30deg' }}
        />
      </span>
      <span className="pointer-events-none absolute left-[6%] bottom-[12%] hidden md:block">
        <Ship aria-hidden size={20} strokeWidth={1.5} className="animate-float text-gold/40" style={{ '--float-rotate': '-4deg' }} />
      </span>
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel tone="onDark">Why Businesses Trust Our Logistics</SectionLabel>
          <SectionHeading tone="onDark" className="mt-3">{heading}</SectionHeading>
          <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.05} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <div
              key={p}
              ref={(el) => (chipsRef.current[i] = el)}
              onPointerDown={() => pressCard(chipsRef.current[i], true)}
              onPointerUp={() => pressCard(chipsRef.current[i], false)}
              onPointerLeave={() => pressCard(chipsRef.current[i], false)}
              onPointerCancel={() => pressCard(chipsRef.current[i], false)}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 will-change-transform"
            >
              <CheckCircle2 size={18} className="shrink-0 text-gold" />
              <p className="text-sm font-medium text-white/90">{p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
