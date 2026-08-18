import { Ship } from 'lucide-react'
import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const { heading, subheading, backgroundImage, origin, destination } = supplyChainVisibilityPage.logistics

export default function LogisticsCoordination() {
  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Logistics Coordination</SectionLabel>
      </Reveal>

      <div className="relative mt-8">
        <Reveal
          as="div"
          stagger={0}
          className="relative h-[380px] overflow-hidden rounded-3xl rounded-tr-[100px] shadow-card md:h-[460px] md:rounded-tr-[140px]"
        >
          <img src={backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </Reveal>

        <Reveal
          as="div"
          stagger={0}
          delay={0.15}
          className="relative z-10 -mt-16 ml-auto w-[92%] rounded-3xl bg-navy-deep p-8 shadow-card md:absolute md:-bottom-12 md:right-0 md:mt-0 md:w-[52%] md:p-10"
        >
          <span className="absolute -top-7 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient shadow-card">
            <Ship size={26} className="text-navy-deep" />
          </span>

          <SectionHeading tone="onDark" size="medium" weight="bold" className="max-w-sm">
            {heading}
          </SectionHeading>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">{subheading}</p>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm font-medium text-white">
            <span>{origin}</span>
            <span className="text-gold">&rarr;</span>
            <span>{destination}</span>
          </div>

          <Button to="/contact" variant="primary" className="mt-6 w-fit">
            Talk To Our Team
          </Button>
        </Reveal>
      </div>

      <div className="h-16 md:h-24" aria-hidden />
    </section>
  )
}
