import { brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import WorldMapVisual from '../ui/WorldMapVisual'

export default function GlobalNetwork() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal stagger={0}>
        <SectionLabel>Our Global Network</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          One HQ, {brand.marketsCount} markets
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Every shipment traces back to {brand.hq} — routed through {brand.ports.join(' and ')} to buyers
          across every region we serve.
        </p>
      </Reveal>

      <WorldMapVisual className="mt-10" />
    </section>
  )
}
