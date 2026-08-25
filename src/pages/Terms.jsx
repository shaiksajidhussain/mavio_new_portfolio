import { termsPage } from '../data/siteContent'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const { updatedAt, intro, sections, contactNote } = termsPage

export default function Terms() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal stagger={0} className="max-w-3xl">
        <p className="gold-text eyebrow">Legal</p>
        <SectionHeading className="mt-3">Terms</SectionHeading>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">{updatedAt}</p>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{intro}</p>
      </Reveal>

      <Reveal as="div" stagger={0.06} className="mt-12 max-w-3xl space-y-8">
        {sections.map((section, i) => (
          <article key={section.title} className="border-t border-line pt-8">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-sm font-semibold tabular-nums text-gold-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {section.title}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{section.body}</p>
          </article>
        ))}
      </Reveal>

      <Reveal stagger={0} className="mt-16 max-w-3xl rounded-3xl border border-line bg-bg-muted p-8 md:p-10">
        <SectionHeading size="medium" weight="bold">
          {contactNote.heading}
        </SectionHeading>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{contactNote.body}</p>
        <Button to="/contact" variant="primary" className="mt-6">
          Contact
        </Button>
      </Reveal>
    </section>
  )
}
