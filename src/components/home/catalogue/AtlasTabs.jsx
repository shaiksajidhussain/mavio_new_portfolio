import { useState } from 'react'
import { productCatalogue } from '../../../data/siteContent'

const chapters = [
  { key: 'spices', ...productCatalogue.spices },
  { key: 'fresh', ...productCatalogue.fresh },
  { key: 'marine', ...productCatalogue.marine },
  { key: 'chemicals', ...productCatalogue.chemicals },
  { key: 'granite', ...productCatalogue.granite },
]

export default function AtlasTabs() {
  const [active, setActive] = useState(0)
  const chapter = chapters[active]
  const products = chapter.products || []

  return (
    <div className="container-px mx-auto max-w-container">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {chapters.map((c, i) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              active === i
                ? 'bg-navy text-white dark:bg-gold dark:text-navy-deep'
                : 'bg-bg-muted text-ink/70 hover:text-navy dark:hover:text-gold'
            }`}
          >
            {String(i + 1).padStart(2, '0')} {c.name}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card md:rounded-[2rem]">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative min-h-[280px] lg:min-h-full">
            {chapter.image ? (
              <img src={chapter.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-navy-deep" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent lg:bg-gradient-to-r" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="font-mono text-[11px] tracking-[0.28em] text-gold">
                {String(active + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{chapter.name}</h3>
            </div>
          </div>

          <div className="max-h-[640px] overflow-y-auto p-6 md:p-10">
            <p className="text-sm leading-relaxed text-muted md:text-base">{chapter.intro}</p>
            {products.length > 0 && (
              <ul className="mt-8 space-y-6">
                {products.map((item) => (
                  <li key={item.name} className="border-l-2 border-gold-deep pl-4">
                    <h4 className="font-display text-lg font-bold text-navy dark:text-white">{item.name}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            )}
            {chapter.footnote && <p className="mt-8 text-xs text-muted">{chapter.footnote}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
