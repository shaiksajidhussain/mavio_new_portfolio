import MarketCard, { markets } from './MarketCard'

export default function MarketStack() {
  const last = markets.length - 1

  return (
    <div className="relative mt-10 pb-8 md:mt-14 md:pb-12">
      {markets.map((market, i) => {
        const isLast = i === last
        return (
          <div
            key={market.country}
            className={isLast ? 'relative' : 'sticky mb-4 md:mb-5'}
            style={isLast ? { zIndex: i + 1 } : { top: `calc(5.5rem + ${Math.min(i, 4) * 8}px)`, zIndex: i + 1 }}
          >
            <MarketCard
              market={market}
              className="h-[52vh] min-h-[240px] max-h-[400px] shadow-[0_20px_40px_rgba(2,16,40,0.16)] md:h-[56vh] md:max-h-[440px]"
            />
          </div>
        )
      })}
    </div>
  )
}
