import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import TrustGrid from './trust/TrustGrid'

export default function SupplyChainShowcase() {
  return (
    <section className="relative bg-bg py-16 md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0} className="text-center">
          <SectionLabel>The Chain of Trust</SectionLabel>
          <SectionHeading className="mx-auto mt-3 max-w-3xl">
            From origin to destination, every step has an owner.
          </SectionHeading>
        </Reveal>

        <TrustGrid />
      </div>
    </section>
  )
}
