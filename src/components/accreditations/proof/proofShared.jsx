import { accreditationsPage } from '../../../data/siteContent'

export const { badges, precisionNote, items } = accreditationsPage

export function scopeTags(scope) {
  return scope.split('·').map((s) => s.trim()).filter(Boolean)
}

export function ProofIntro({ label = 'Compliance registry', heading = 'Every registration, explained clearly.' }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="gold-text eyebrow">{label}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">{heading}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{precisionNote}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
