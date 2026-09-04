import { sustainabilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'

const { heading, subheading, milestones } = sustainabilityPage.journey

export default function SustainabilityJourney() {
  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Our Ongoing Journey</SectionLabel>
          <SectionHeading className="mt-3 max-w-xl">
            {heading}
          </SectionHeading>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        </Reveal>

        <div className="relative mt-12 pl-10 md:pl-14">
          <div className="absolute left-3 top-0 h-full w-[2px] bg-line md:left-5" />

          <Reveal as="div" stagger={0.12} y={30} className="space-y-10 md:space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <span className="absolute -left-10 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-surface md:-left-14">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>

                <p className="font-mono text-xs font-semibold tracking-wide text-gold-deep">{m.year}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{m.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{m.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
