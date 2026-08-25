import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { brand, footer } from '../../data/siteContent'

const LOGO_SRC = 'https://www.mavioglobal.com/assets/SVG_Logo-header-CTSoE-ST.svg'

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
}

function splitLinks(links) {
  const mid = Math.ceil(links.length / 2)
  return [links.slice(0, mid), links.slice(mid)]
}

export default function PrimaryFooter() {
  const { columns, social } = footer

  return (
    <footer className="bg-navy-deep text-white">
      <div className="h-px w-full bg-[#e08a2c]" />

      <div className="container-px mx-auto grid max-w-container gap-10 py-14 md:grid-cols-[1.35fr_1.5fr_0.85fr] md:gap-8 md:py-16">
        <div>
          <Link to="/" className="inline-flex items-center" aria-label={brand.name}>
            <span
              className="block h-10 w-[11.5rem] bg-gold-gradient md:h-12 md:w-[13.5rem]"
              style={{
                WebkitMaskImage: `url(${LOGO_SRC})`,
                maskImage: `url(${LOGO_SRC})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'left center',
                maskPosition: 'left center',
              }}
              role="img"
              aria-label={brand.name}
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Mavio Global connects Indian products with global buyers through{' '}
            <span className="gold-text font-medium">organised procurement</span>,{' '}
            <span className="gold-text font-medium">quality coordination</span>,{' '}
            <span className="gold-text font-medium">documentation</span>,{' '}
            <span className="gold-text font-medium">logistics</span>, and{' '}
            <span className="gold-text font-medium">digital visibility</span>.
          </p>
        </div>

        {columns.map((col) => {
          const [left, right] = splitLinks(col.links)
          return (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2">
                <ul className="space-y-2.5">
                  {left.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-white/55 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2.5">
                  {right.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-white/55 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}

        <div>
          <p className="text-sm font-semibold text-white">Social</p>
          <ul className="mt-4 space-y-3">
            {social.map((item) => {
              const Icon = socialIcons[item.label] || Linkedin
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <Icon size={16} className="text-gold-deep" />
                    {item.handle}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-container flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>
            Est. {brand.founded} · {brand.hq}
          </span>
        </div>
      </div>
    </footer>
  )
}
