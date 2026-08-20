import { contactPage } from '../../data/siteContent'
import FAQ from '../home/FAQ'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const { support } = contactPage

export default function GlobalSupportBanner() {
  return (
    <section className="border-t border-line bg-bg-muted py-16 themeblack:bg-bg-muted md:py-24">
      <div className="container-px mx-auto grid max-w-container gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal as="div" stagger={0}>
          <SectionLabel>Our Global Support</SectionLabel>
          <SectionHeading className="mt-3 max-w-md">{support.heading}</SectionHeading>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">{support.body}</p>
        </Reveal>

        <Reveal
          as="div"
          stagger={0}
          delay={0.1}
          className="rounded-3xl border border-line bg-surface p-8 shadow-card md:p-10"
        >
          <FAQ />
        </Reveal>
      </div>
    </section>
  )
}
