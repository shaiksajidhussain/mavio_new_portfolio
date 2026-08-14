import { brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import GlobalReachMap from '../ui/GlobalReachMap'

export default function GlobalMap() {
  return (
    <section className="bg-bg py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Global Collaboration Map</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            Marking every region we work with today
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Shipping to {brand.marketsCount} countries from the ports of {brand.ports.join(' and ')}.
          </p>
        </Reveal>

        <GlobalReachMap className="mt-10" />
      </div>
    </section>
  )
}
