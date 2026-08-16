import { Search } from 'lucide-react'
import { downloadCentrePage } from '../../data/siteContent'
import { useDownloadSearch } from '../../context/DownloadSearchContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const { hero } = downloadCentrePage

export default function DownloadHero() {
  const { query, setQuery } = useDownloadSearch()

  return (
    <section className="container-px mx-auto max-w-container pb-6 pt-16 md:pt-24">
      <Reveal stagger={0}>
        <SectionLabel>Download Centre</SectionLabel>
        <SectionHeading as="h1" className="mt-3 max-w-2xl">
          {hero.heading}
        </SectionHeading>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{hero.subheading}</p>
      </Reveal>

      <Reveal stagger={0} delay={0.1} className="relative mt-8 max-w-lg">
        <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={hero.searchPlaceholder}
          className="w-full rounded-full border border-line bg-surface py-3.5 pl-11 pr-5 text-sm text-ink shadow-card focus:border-gold focus:outline-none"
        />
      </Reveal>
    </section>
  )
}
