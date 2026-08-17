import { traceability } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'

const bannerImage =
  'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=2200&q=80'

export default function Traceability() {
  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal
        as="div"
        stagger={0}
        className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-card md:min-h-[480px]"
      >
        <img
          src={bannerImage}
          alt="Trucks loading shipping containers at a freight yard"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/0" />

        <div className="relative flex h-full min-h-[420px] flex-col justify-end gap-6 p-8 md:min-h-[480px] md:p-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <SectionLabel tone="onDark">Traceability</SectionLabel>
            <SectionHeading tone="onDark" className="mt-3">
              {traceability.heading}
            </SectionHeading>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/85 md:text-base">
            {traceability.description}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
