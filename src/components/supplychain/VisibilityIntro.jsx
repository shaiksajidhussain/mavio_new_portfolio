import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'

const { heading, body, image, imageAlt } = supplyChainVisibilityPage.intro

export default function VisibilityIntro() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0.1}>
          <SectionLabel>Operational Governance</SectionLabel>
        </Reveal>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <Reveal as="div" stagger={0} className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gold-gradient opacity-20 blur-3xl"
            />
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl shadow-card md:min-h-[360px]">
              <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal as="div" stagger={0} delay={0.1} className="rounded-3xl border border-line bg-surface p-8 shadow-card md:p-10">
            <SectionHeading className="max-w-lg">{heading}</SectionHeading>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
