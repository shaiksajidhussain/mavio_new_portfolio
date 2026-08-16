import { ArrowRight } from 'lucide-react'
import { brand, contactPage, footer } from '../../data/siteContent'
import LeadForm from '../home/LeadForm'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function ContactFormSection() {
  return (
    <section className="container-px mx-auto max-w-container py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal as="div" stagger={0}>
          <SectionLabel>Contact Info</SectionLabel>
          <div className="mt-3 space-y-1.5 text-sm text-muted">
            <p>{footer.contact.email}</p>
            <p>{footer.contact.phone}</p>
            <p>{footer.contact.address}</p>
            <p className="pt-1 text-xs">
              Est. {brand.founded} &middot; Exporting from {brand.ports.join(' & ')}
            </p>
          </div>

          <div className="mt-6">
            <LeadForm />
          </div>
        </Reveal>

        <Reveal as="div" stagger={0} delay={0.1}>
          <div className="rounded-3xl border border-line bg-surface p-8 shadow-card">
            <SectionLabel>Post-Submission Flow</SectionLabel>
            <SectionHeading size="small" weight="bold" className="mt-3">What happens next</SectionHeading>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
              {contactPage.flow.map((f, i) => (
                <div key={f.step} className="flex flex-1 items-center gap-3">
                  <div className="w-full rounded-2xl border border-line bg-bg-muted p-4 themeblack:bg-black/40">
                    <p className="font-display text-sm font-bold text-ink">{f.step}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{f.description}</p>
                  </div>
                  {i < contactPage.flow.length - 1 && (
                    <ArrowRight size={18} className="hidden shrink-0 text-gold-deep sm:block" />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs italic text-muted">Visualized as a step flowchart on the page.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
