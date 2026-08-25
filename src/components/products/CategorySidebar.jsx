import { ChevronRight } from 'lucide-react'
import { productCategories } from '../../data/siteContent'

export default function CategorySidebar({ activeSlug, onSelect }) {
  return (
    <nav aria-label="Product categories" className="lg:sticky lg:top-28">
      <ul>
        {productCategories.map((cat) => {
          const active = cat.slug === activeSlug
          return (
            <li key={cat.slug} className="border-b border-gold-deep/45">
              <button
                type="button"
                onClick={() => onSelect(cat.slug)}
                className={`flex w-full items-center justify-between gap-3 py-4 text-left transition-colors ${
                  active ? 'text-navy dark:text-gold' : 'text-ink/70 hover:text-navy dark:text-white/65 dark:hover:text-gold'
                }`}
              >
                <span
                  className={`font-display text-lg md:text-xl ${
                    active ? 'font-bold underline decoration-gold-deep decoration-2 underline-offset-8' : 'font-medium'
                  }`}
                >
                  {cat.name}
                </span>
                <ChevronRight
                  size={16}
                  className={active ? 'text-gold-deep' : 'text-gold-deep/60'}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
