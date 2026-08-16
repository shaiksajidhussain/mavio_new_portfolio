import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const { heading, body } = supplyChainVisibilityPage.intro

export default function VisibilityIntro() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Operational Governance</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{body}</p>
        </Reveal>
      </div>
    </section>
  )
}
