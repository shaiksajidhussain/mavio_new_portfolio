import { ChevronRight } from 'lucide-react'
import { productCategories } from '../../data/siteContent'

export default function CategorySidebar({ activeSlug = null, onSelect }) {
  return (
    <nav
      aria-label="Product categories"
      className="sticky top-16 z-30 self-start -mx-5 border-b border-line bg-bg px-5 pb-1 sm:top-[4.5rem] md:-mx-10 md:px-10 lg:top-24 lg:z-10 lg:mx-0 lg:border-b-0 lg:border-r lg:border-gold-deep/45 lg:bg-transparent lg:px-0 lg:pb-0 lg:pr-8"
    >
      <ul>
        {productCategories.map((cat) => {
          const active = cat.slug === activeSlug
          return (
            <li key={cat.slug} className="border-b border-gold-deep/45">
              <button
                type="button"
                onClick={() => onSelect(cat.slug)}
                className={`flex w-full items-center justify-between gap-3 py-3.5 text-left transition-colors sm:py-4 ${
                  active
                    ? 'text-navy dark:text-gold'
                    : 'text-ink/70 hover:text-navy dark:text-white/65 dark:hover:text-gold'
                }`}
              >
                <span
                  className={`font-display text-lg md:text-xl ${
                    active
                      ? 'font-bold underline decoration-gold-deep decoration-2 underline-offset-8'
                      : 'font-medium'
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
