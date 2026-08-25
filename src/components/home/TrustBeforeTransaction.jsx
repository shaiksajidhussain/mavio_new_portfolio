import { trustBeforeTransaction } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import MarketStack from './markets/MarketStack'

const { eyebrow, heading } = trustBeforeTransaction

export default function TrustBeforeTransaction() {
  return (
    <section className="relative z-0 isolate bg-bg pt-16 md:pt-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0} className="text-center">
          <SectionLabel>{eyebrow}</SectionLabel>
          <SectionHeading className="mx-auto mt-3 max-w-3xl">{heading}</SectionHeading>
        </Reveal>
        <MarketStack />
      </div>
    </section>
  )
}
