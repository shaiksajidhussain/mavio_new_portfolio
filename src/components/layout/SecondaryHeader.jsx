import { Instagram, Linkedin } from 'lucide-react'
import { secondaryHeader } from '../../data/siteContent'

const socialIcons = { LinkedIn: Linkedin, Instagram: Instagram }

export default function SecondaryHeader() {
  return (
    <div className="hidden h-9 items-center border-b border-white/10 bg-navy-deep sm:flex">
      <div className="container-px mx-auto flex w-full max-w-container items-center justify-between gap-4">
        <p className="whitespace-nowrap text-[11px] font-medium tracking-wide text-white/70">
          {secondaryHeader.countriesText}
        </p>
        <p className="hidden truncate text-center text-[11px] font-semibold italic tracking-wide text-gold md:block">
          {secondaryHeader.usp}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          {secondaryHeader.socials.map((s) => {
            const Icon = socialIcons[s.label]
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-white/70 transition-colors hover:text-gold"
              >
                <Icon size={13} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
