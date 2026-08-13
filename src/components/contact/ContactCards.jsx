import { Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contactPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const icons = { Phone, Mail, Linkedin, MessageCircle, MapPin }

export default function ContactCards() {
  return (
    <section className="container-px mx-auto max-w-container pb-6 pt-16 md:pt-24">
      <Reveal stagger={0}>
        <SectionLabel>Get In Touch</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          Reach Us Any Way You Like
        </h2>
      </Reveal>

      <Reveal as="div" stagger={0.08} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {contactPage.cards.map((c) => {
          const Icon = icons[c.icon]
          const cardClasses =
            'group flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-6 text-center shadow-card transition-colors hover:border-gold'
          const content = (
            <>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep transition-transform group-hover:scale-105">
                <Icon size={24} />
              </span>
              <p className="font-display text-base font-bold text-ink">{c.label}</p>
              <p className="text-xs text-muted">{c.value}</p>
            </>
          )

          if (!c.href) {
            return (
              <div key={c.label} className={cardClasses}>
                {content}
              </div>
            )
          }

          return (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              className={cardClasses}
            >
              {content}
            </a>
          )
        })}
      </Reveal>
    </section>
  )
}
