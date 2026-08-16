import { ClipboardList, FileCheck2, Navigation, PackageCheck, Ship, Warehouse } from 'lucide-react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const icons = { ClipboardList, FileCheck2, Warehouse, Ship, Navigation, PackageCheck }
const { heading, subheading, steps } = exportLogisticsPage.process

export default function LogisticsFlow() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Our Export Process</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.08} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <div
                key={s.step}
                className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6"
              >
                <img
                  src={s.image}
                  alt={s.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/10" />

                <span
                  className="pointer-events-none absolute -top-3 right-3 font-display text-6xl font-black leading-none text-transparent"
                  style={{ WebkitTextStroke: '1.5px rgba(255,191,0,0.85)' }}
                >
                  {String(s.step).padStart(2, '0')}
                </span>

                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                  <Icon size={20} />
                </span>

                <h3 className="relative mt-4 font-display text-lg font-bold text-white">{s.label}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
