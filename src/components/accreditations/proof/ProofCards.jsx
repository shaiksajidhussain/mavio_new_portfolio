import { ProofIntro, items, scopeTags } from './proofShared.jsx'

export default function ProofCards() {
  return (
    <div>
      <ProofIntro />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.code}
            className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface transition-colors duration-300 hover:border-gold-deep"
          >
            <div className="relative flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-navy-deep px-5 py-4">
              {item.watermark ? (
                <img
                  src={item.watermark}
                  alt=""
                  data-no-dim
                  className="pointer-events-none absolute right-3 top-1/2 h-16 w-16 -translate-y-1/2 object-contain opacity-25 md:h-20 md:w-20"
                />
              ) : null}
              <span className="relative gold-text font-display text-2xl font-bold tracking-tight">{item.code}</span>
              <span className="relative rounded-full border border-gold-deep/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                On file
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{item.title}</h3>
              <p className="mt-1 text-xs font-medium text-gold-deep md:text-sm">{item.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>

              <div className="mt-5 space-y-3 border-t border-line pt-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                    Issuing Body
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink md:text-sm">{item.issuingBody}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep">Scope</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {scopeTags(item.scope).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-bg-muted px-2.5 py-1 text-[11px] font-medium text-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
