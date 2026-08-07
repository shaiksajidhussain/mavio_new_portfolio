import { Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-container py-16 md:py-20">
      <SectionLabel>Testimonials</SectionLabel>
      <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
        Trusted by buyers worldwide
      </h2>

      <Reveal as="div" stagger={0.1} className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
            <Quote size={22} className="text-gold-deep" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  )
}
