import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { contactPage } from '../../data/siteContent'

export default function ContactHero() {
  const { headline, body, image } = contactPage
  const [lead, ...rest] = headline.split('. ')
  const trail = rest.length ? `${rest.join('. ')}` : ''

  return (
    <section className="relative -mt-[4.5rem] flex min-h-[70svh] items-end overflow-hidden md:min-h-[78svh]">
      <div className="absolute inset-0 -z-20">
        <img src={image} alt="" data-no-dim fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-black/25" />

      <div className="container-px relative mx-auto w-full max-w-container pb-16 pt-[8rem] md:pb-20">
        <p className="gold-text eyebrow">Contact</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {lead}.
          {trail ? (
            <>
              {' '}
              <span className="gold-text">{trail}</span>
            </>
          ) : null}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{body}</p>
        <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
          <Link to="/" className="font-medium text-gold hover:text-gold-bright">
            Home
          </Link>
          <ArrowRight size={14} />
          <span className="text-white">Contact</span>
        </div>
      </div>
    </section>
  )
}
