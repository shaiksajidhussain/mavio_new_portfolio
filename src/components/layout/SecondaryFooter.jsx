import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, footer } from '../../data/siteContent'

export default function SecondaryFooter() {
  return (
    <div className="bg-navy-deep text-white/80">
      <div className="container-px mx-auto grid max-w-container gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {brand.name.toUpperCase()}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow text-gold">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="eyebrow text-gold">Contact</p>
          <ul className="mt-3 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold-deep" /> {footer.contact.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold-deep" /> {footer.contact.phone}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-gold-deep" /> {footer.contact.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
