import { ArrowRight } from 'lucide-react'
import { downloadCentrePage } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

const { cta } = downloadCentrePage

export default function NeedDocument() {
  return (
    <section className="container-px mx-auto max-w-container pb-16 md:pb-24">
      <Reveal
        as="div"
        stagger={0}
        className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-14 text-center md:px-16 md:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(rgb(255 255 255 / 0.6) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse 70% 100% at 50% 50%, black, transparent)',
          }}
        />

        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">{cta.heading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{cta.body}</p>
          <Button to="/contact" variant="primary" className="mt-8">
            {cta.buttonLabel} <ArrowRight size={16} />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
