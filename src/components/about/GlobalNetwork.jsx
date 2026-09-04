import { brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import GlobalReachMap from '../ui/GlobalReachMap'
import SectionHeading from '../ui/SectionHeading'

export default function GlobalNetwork() {
  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Our Global Network</SectionLabel>
        <SectionHeading className="mt-3">
          One HQ, {brand.marketsCount} markets
        </SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Every shipment traces back to {brand.hq}, routed through {brand.ports.join(' and ')} to buyers
          across every region we serve.
        </p>
      </Reveal>

      <GlobalReachMap className="mt-10" />
    </section>
  )
}
