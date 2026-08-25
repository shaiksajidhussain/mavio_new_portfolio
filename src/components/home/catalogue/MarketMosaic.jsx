import { useState } from 'react'
import { productCatalogue } from '../../../data/siteContent'

const chapters = [
  { key: 'spices', span: 'min-h-[280px] lg:col-span-2 lg:row-span-2 lg:min-h-0', ...productCatalogue.spices },
  { key: 'fresh', span: 'min-h-[180px] lg:min-h-0', ...productCatalogue.fresh },
  { key: 'marine', span: 'min-h-[180px] lg:min-h-0', ...productCatalogue.marine },
  { key: 'chemicals', span: 'min-h-[180px] lg:min-h-0', ...productCatalogue.chemicals },
  { key: 'granite', span: 'min-h-[180px] lg:min-h-0', ...productCatalogue.granite },
]

export default function MarketMosaic() {
  const [active, setActive] = useState(0)
  const chapter = chapters[active]
  const products = chapter.products || []

  return (
    <div className="container-px mx-auto max-w-container">
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:h-[520px]">
        {chapters.map((c, i) => {
          const selected = active === i
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-[1.5rem] text-left ${c.span} ${
                selected ? 'ring-2 ring-gold ring-offset-2 ring-offset-bg' : ''
              }`}
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,#2a4a6c_0%,#021528_60%)]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="font-mono text-[10px] tracking-[0.28em] text-gold">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-white md:text-2xl">{c.name}</h3>
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-line bg-surface p-6 shadow-card md:mt-10 md:p-10">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold-deep">
          {String(active + 1).padStart(2, '0')} — {chapter.name.toUpperCase()}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{chapter.intro}</p>
        {products.length > 0 && (
          <ul className="mt-8 space-y-5">
            {products.map((item) => (
              <li key={item.name}>
                <h4 className="font-display text-lg font-bold text-navy dark:text-white">{item.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        )}
        {chapter.footnote && <p className="mt-8 text-xs text-muted">{chapter.footnote}</p>}
      </div>
    </div>
  )
}
