import { contactPage } from '../../data/siteContent'
import FAQ from '../home/FAQ'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const { support } = contactPage

export default function GlobalSupportBanner() {
  return (
    <section className="bg-navy-deep py-16 md:py-24">
      <div className="container-px mx-auto grid max-w-container gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal as="div" stagger={0}>
          <SectionLabel tone="onDark">Our Global Support</SectionLabel>
          <SectionHeading tone="onDark" className="mt-3 max-w-md">
            {support.heading}
          </SectionHeading>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">{support.body}</p>
        </Reveal>

        <Reveal as="div" stagger={0} delay={0.1} className="rounded-3xl bg-surface p-8 shadow-card md:p-10">
          <FAQ />
        </Reveal>
      </div>
    </section>
  )
}
