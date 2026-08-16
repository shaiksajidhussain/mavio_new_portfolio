import { Link } from 'react-router-dom'
import { ArrowRight, Ship } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'

const heroImage = {
  src: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1600&q=80',
  alt: 'Sourcing team at an origin facility',
  label: 'Sourcing',
  title: 'Verified at the Point of Origin',
  to: '/capabilities/quality-compliance',
}

const rowImages = [
  {
    src: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    alt: 'Goods packed and staged for export',
  },
  {
    src: 'https://images.unsplash.com/photo-1700777685830-f501e67260e6?auto=format&fit=crop&w=900&q=80',
    alt: 'Stacked shipping containers under a clear sky',
  },
  {
    src: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=900&q=80',
    alt: 'Graded goods ready for packing',
  },
]

export default function AboutGallery() {
  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal as="div" stagger={0.08} className="grid gap-5 md:grid-cols-3">
        <div className="flex flex-col justify-center rounded-3xl border border-line bg-surface p-8 shadow-card md:p-10">
          <div className="flex items-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">Behind Every Shipment</span>
            <Ship size={14} />
          </div>
          <SectionHeading weight="bold" className="mt-4">
            A Look Inside Our Trade Network
          </SectionHeading>
          <Button to="/capabilities/supply-chain-visibility" variant="primary" className="mt-7 w-fit">
            See How We Operate
            <ArrowRight size={16} />
          </Button>
        </div>

        <Link
          to={heroImage.to}
          className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-card md:col-span-2 md:aspect-auto"
        >
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-x-5 bottom-5 origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 md:inset-x-8 md:bottom-8">
            <div className="flex items-center justify-between gap-4 rounded-full border-l-4 border-gold-deep bg-surface py-3 pl-5 pr-3 shadow-card">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">{heroImage.label}</p>
                <p className="font-display text-base font-bold text-navy sm:text-lg">{heroImage.title}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>

      <Reveal as="div" stagger={0.08} delay={0.1} className="mt-5 grid gap-5 sm:grid-cols-3">
        {rowImages.map((img) => (
          <div key={img.src} className="group aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </Reveal>
    </section>
  )
}
