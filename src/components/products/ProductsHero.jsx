import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { productsPage } from '../../data/siteContent'

export default function ProductsHero({ category = null }) {
  const catalogue = productsPage.catalogue
  const isCatalogue = !category

  return (
    <section className="relative -mt-[4.5rem] flex min-h-[58svh] items-end overflow-hidden md:min-h-[68svh]">
      <div className="absolute inset-0 -z-20">
        <img
          key={isCatalogue ? 'catalogue' : category.slug}
          src={isCatalogue ? catalogue.image : category.image}
          alt=""
          data-no-dim
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/80 via-transparent to-black/25" />

      <div className="container-px relative mx-auto flex w-full max-w-container flex-col pb-14 pt-[8rem] md:pb-16">
        {isCatalogue ? (
          <>
            <p className="gold-text text-[11px] font-semibold uppercase tracking-[0.18em]">
              {catalogue.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {catalogue.heading}
            </h1>
          </>
        ) : (
          <>
            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-gold"
            >
              ← Back to catalogue
            </Link>
            <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {category.name}
            </h1>
          </>
        )}
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70" aria-hidden>
        <ChevronDown size={22} strokeWidth={1.5} className="animate-bounce" />
      </div>
    </section>
  )
}
