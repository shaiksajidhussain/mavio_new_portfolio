import { trustBeforeTransaction } from '../../../data/siteContent'

const { markets } = trustBeforeTransaction

export default function MarketCard({ market, className = '' }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}>
      <img
        src={market.image}
        alt=""
        data-no-dim
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/35" />
      <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
        <p className="gold-text eyebrow">{market.country}</p>
        <p className="mt-2 font-display text-xl font-bold text-white md:text-2xl">{market.lines[0]}</p>
        <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-white/85">
          {market.lines.slice(1).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export { markets }
