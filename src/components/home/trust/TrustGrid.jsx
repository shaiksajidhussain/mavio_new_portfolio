import { supplyChainSteps } from '../../../data/siteContent'
import Reveal from '../../ui/Reveal'
import TrustCard from './TrustCard'

export default function TrustGrid() {
  return (
    <Reveal
      as="div"
      stagger={0.08}
      className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-hide sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:mt-14 lg:grid-cols-3"
    >
      {supplyChainSteps.map((step) => (
        <TrustCard
          key={step.step}
          step={step}
          className="min-h-[240px] w-[82%] shrink-0 snap-start sm:w-auto sm:shrink md:min-h-[280px] lg:min-h-[300px]"
        />
      ))}
    </Reveal>
  )
}
