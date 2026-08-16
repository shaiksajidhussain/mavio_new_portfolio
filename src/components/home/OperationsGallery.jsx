import { Link } from 'react-router-dom'
import { ArrowRight, Ship } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const heroImage = {
  src: 'https://images.unsplash.com/photo-1759272840538-ae4b07214c71?auto=format&fit=crop&w=1600&q=80',
  alt: 'Shipping containers stacked at port during golden hour',
  label: 'Logistics',
  title: 'Freight & Port Operations',
  to: '/capabilities/export-logistics',
}

const rowImages = [
  {
    src: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=900&q=80',
    alt: 'Container cranes loading freight at a busy port',
  },
  {
    src: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=900&q=80',
    alt: 'Trucks loading shipping containers at a freight yard',
  },
  {
    src: 'https://images.unsplash.com/photo-1700777685830-f501e67260e6?auto=format&fit=crop&w=900&q=80',
    alt: 'Stacked shipping containers under a clear sky',
  },
]

export default function OperationsGallery() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-24">
      <Reveal as="div" stagger={0.08} className="grid gap-5 md:grid-cols-3">
        <div className="flex flex-col justify-center rounded-3xl border border-line bg-surface p-8 shadow-card md:p-10">
          <div className="flex items-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">Our Operations</span>
            <Ship size={14} />
          </div>
          <SectionHeading weight="bold" className="mt-4">
            The Scale of Our Operations
          </SectionHeading>
          <Button to="/capabilities/export-logistics" variant="primary" className="mt-7 w-fit">
            View Our Capabilities
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
