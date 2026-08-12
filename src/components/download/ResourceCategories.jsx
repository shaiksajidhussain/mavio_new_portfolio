import { Download, FileText } from 'lucide-react'
import { downloadCentrePage } from '../../data/siteContent'
import { useDownloadSearch } from '../../context/DownloadSearchContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const { categories } = downloadCentrePage

export default function ResourceCategories() {
  const { query } = useDownloadSearch()
  const q = query.trim().toLowerCase()

  const filtered = categories
    .map((cat) => ({ ...cat, items: q ? cat.items.filter((i) => i.title.toLowerCase().includes(q)) : cat.items }))
    .filter((cat) => cat.items.length > 0)

  return (
    <section className="container-px mx-auto max-w-container py-10 md:py-14">
      {filtered.length === 0 ? (
        <p className="text-sm text-muted">No resources match “{query}”. Try a different search term.</p>
      ) : (
        <div className="space-y-12">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <Reveal stagger={0}>
                <SectionLabel>{cat.title}</SectionLabel>
              </Reveal>
              <Reveal as="div" stagger={0.06} className="mt-4 grid gap-3 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <a
                    key={item.title}
                    href="/contact"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition-colors hover:border-gold"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                      <FileText size={18} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink">{item.title}</p>
                      <p className="font-mono text-xs text-muted">{item.fileType}</p>
                    </div>
                    <Download size={16} className="shrink-0 text-muted transition-colors group-hover:text-gold-deep" />
                  </a>
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
