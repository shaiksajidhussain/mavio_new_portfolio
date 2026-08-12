import { BookOpen, Download, FileText, ShieldCheck } from 'lucide-react'
import { downloadCentrePage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

const icons = { FileText, BookOpen, ShieldCheck }
const { featured } = downloadCentrePage

export default function FeaturedDownloads() {
  return (
    <section className="container-px mx-auto max-w-container py-10 md:py-14">
      <Reveal stagger={0}>
        <SectionLabel>Featured Downloads</SectionLabel>
      </Reveal>

      <Reveal as="div" stagger={0.1} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-xs text-muted">{item.fileType}</span>
                <Button to="/contact" variant="outline" className="!px-4 !py-2 text-xs">
                  <Download size={14} /> Get it
                </Button>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
