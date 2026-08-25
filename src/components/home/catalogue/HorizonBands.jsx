import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { productCatalogue } from '../../../data/siteContent'

const chapters = [
  { key: 'spices', ...productCatalogue.spices },
  { key: 'fresh', ...productCatalogue.fresh },
  { key: 'marine', ...productCatalogue.marine },
  { key: 'chemicals', ...productCatalogue.chemicals },
  { key: 'granite', ...productCatalogue.granite },
]

export default function HorizonBands() {
  const [open, setOpen] = useState(0)

  return (
    <div className="overflow-hidden border-y border-line">
      {chapters.map((chapter, i) => {
        const isOpen = open === i
        const products = chapter.products || []

        return (
          <article key={chapter.key} className="border-b border-white/10 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group relative flex min-h-[7.5rem] w-full items-end overflow-hidden text-left sm:min-h-[9.5rem] md:min-h-[11rem]"
              aria-expanded={isOpen}
            >
              {chapter.image ? (
                <img
                  src={chapter.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                    isOpen ? 'scale-105' : 'scale-100 group-hover:scale-[1.03]'
                  }`}
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#1a3a5c_0%,#021528_55%)]" />
              )}
              <div className="absolute inset-0 bg-navy-deep/45 transition-colors duration-300 group-hover:bg-navy-deep/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/40 to-transparent" />

              <div className="relative z-10 flex w-full items-end justify-between gap-6 px-5 py-5 sm:px-8 md:px-12 md:py-7">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.32em] text-gold sm:text-[11px]">
                    {String(i + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {chapter.name}
                  </h3>
                </div>
                <ChevronDown
                  size={22}
                  className={`mb-1 shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="bg-surface px-5 py-8 sm:px-8 md:px-12 md:py-10">
                  <p className="max-w-3xl text-sm leading-relaxed text-muted md:text-base">{chapter.intro}</p>
                  {products.length > 0 && (
                    <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                      {products.map((item) => (
                        <li key={item.name} className="border-t border-line pt-4">
                          <h4 className="font-display text-lg font-bold text-navy dark:text-white">{item.name}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {chapter.footnote && <p className="mt-8 text-xs text-muted">{chapter.footnote}</p>}
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
