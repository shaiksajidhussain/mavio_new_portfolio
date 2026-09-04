import { productCategories, productsPage } from '../../data/siteContent'
import SmartImage from '../ui/SmartImage'

export default function CatalogueOverview({ onSelect }) {
  const { overviewTitle, overviewBody } = productsPage.catalogue

  return (
    <div className="lg:pl-2">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy dark:text-white md:text-4xl lg:text-[2.5rem]">
        {overviewTitle}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
        {overviewBody}
      </p>
      <div className="mt-8 h-px w-full bg-gold-deep/45 md:mt-10" />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10">
        {productCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => onSelect?.(cat.slug)}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.35rem] text-left outline-none transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold md:rounded-[1.5rem]"
          >
            <SmartImage
              src={cat.image}
              alt=""
              data-no-dim
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
            <span className="absolute inset-x-0 bottom-0 p-5 font-display text-xl font-semibold text-white md:p-6 md:text-2xl">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
