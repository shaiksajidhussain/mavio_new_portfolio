import { faqPage } from '../../data/siteContent'
import { useFaqRole } from '../../context/FaqRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const { hero } = faqPage

export default function FaqHero() {
  const { role, setRole } = useFaqRole()

  return (
    <section className="container-px mx-auto max-w-container pb-6 pt-16 md:pt-24">
      <Reveal stagger={0}>
        <SectionLabel>FAQ</SectionLabel>
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          {hero.heading}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{hero.caption}</p>
      </Reveal>

      <Reveal stagger={0} delay={0.1} className="mt-8 inline-flex rounded-full border border-line bg-surface p-1">
        <div className="flex">
          {['supplier', 'buyer'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
                role === r ? 'bg-navy text-white dark:bg-gold dark:text-navy-deep' : 'text-muted hover:text-ink'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </Reveal>

      <p className="mt-4 max-w-md text-sm italic text-muted">Selecting a label swaps the FAQ list below to match that role.</p>
    </section>
  )
}
