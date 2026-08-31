import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import Button from '../ui/Button'

export default function PartnerHero() {
  const { eyebrow, heading, lead, paragraphs, close, cta, image, imageAlt } = partnerPage.hero
  const highlight = heading.trim().split(' ').pop()
  const prefix = heading.trim().slice(0, heading.trim().lastIndexOf(' '))

  return (
    <section className="relative -mt-[4.5rem] flex min-h-[70svh] items-end overflow-hidden md:min-h-[78svh]">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />

      <div className="container-px relative mx-auto w-full max-w-container pb-16 pt-[8rem] md:pb-20">
        <p className="gold-text eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {prefix} <span className="gold-text">{highlight}</span>
        </h1>

        <p className="mt-6 max-w-2xl font-display text-xl leading-snug text-gold md:text-2xl">{lead}</p>

        <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            {close[0]} {close[1]}
          </p>
        </div>

        <div className="mt-8">
          <Button to={cta.to} variant="primary">
            {cta.label}
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
          <Link to="/" className="font-medium text-gold hover:text-gold-bright">
            Home
          </Link>
          <ArrowRight size={14} />
          <span className="text-white">Partner With Us</span>
        </div>
      </div>
    </section>
  )
}
