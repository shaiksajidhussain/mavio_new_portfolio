import { productCategories } from '../../data/siteContent'

export default function CategorySidebar({ activeSlug, onSelect }) {
  return (
    <div className="rounded-2xl border border-line bg-bg-muted p-3 shadow-card themeblack:bg-black/40">
      <p className="eyebrow px-2 pb-2 pt-1 text-muted">Category Sidebar</p>
      <div className="space-y-2">
        {productCategories.map((cat) => {
          const active = cat.slug === activeSlug
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => onSelect(cat.slug)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                active
                  ? 'bg-navy text-white dark:bg-gold dark:text-navy-deep'
                  : 'bg-surface text-ink hover:bg-bg-muted'
              }`}
            >
              {cat.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
