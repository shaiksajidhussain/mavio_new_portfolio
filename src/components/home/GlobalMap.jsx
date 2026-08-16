import { brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import GlobalReachMap from '../ui/GlobalReachMap'
import SectionHeading from '../ui/SectionHeading'

export default function GlobalMap() {
  return (
    <section className="bg-bg py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Global Collaboration Map</SectionLabel>
          <SectionHeading className="mt-3">
            Marking every region we work with today
          </SectionHeading>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Shipping to {brand.marketsCount} countries from the ports of {brand.ports.join(' and ')}.
          </p>
        </Reveal>

        <GlobalReachMap className="mt-10" />
      </div>
    </section>
  )
}
