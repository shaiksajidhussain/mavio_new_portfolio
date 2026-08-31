import { ArrowRight } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'

export default function WhyPartner() {
  const intro = partnerPage.whyPartner

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Why Partner With Mavio</SectionLabel>
        </Reveal>

        <Reveal
          as="div"
          stagger={0}
          className="mt-6 overflow-hidden rounded-3xl border border-line bg-surface shadow-card md:grid md:grid-cols-2 md:items-stretch"
        >
          <div className="relative h-64 overflow-hidden md:h-auto">
            <img src={intro.image} alt={intro.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden bg-bg p-8 md:p-12">
            <RouteBackground flip className="opacity-[0.08]" />
            <div className="relative">
              <SectionHeading>{intro.heading}</SectionHeading>

              <div className="mt-4 space-y-3">
                {intro.paragraphs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted md:text-base">
                    {p}
                  </p>
                ))}
              </div>

              <Button to="#become-a-partner" variant="primary" className="mt-8 w-fit">
                Become a Partner
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
