import { useState } from 'react'
import { productCatalogue, productCategories } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SectionLabel from '../ui/SectionLabel'
import ProductZigzag from '../products/layouts/ProductZigzag'
import ProductLedger from '../products/layouts/ProductLedger'
import { productsForCategory, useIsLg } from '../products/layouts/shared'

export default function ProductCatalogue() {
  const [slug, setSlug] = useState('spices')
  const items = productsForCategory(slug)
  const isDesktop = useIsLg()

  return (
    <section className="relative z-20 bg-bg pb-10 pt-10 md:pb-14 md:pt-14">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0} className="text-center">
          <SectionLabel>What We Trade</SectionLabel>
          <SectionHeading className="mx-auto mt-3">{productCatalogue.heading}</SectionHeading>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted md:text-base">{productCatalogue.intro}</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-10">
          {productCategories.map((cat) => {
            const active = cat.slug === slug
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSlug(cat.slug)}
                aria-pressed={active}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? 'bg-gold-gradient text-navy-deep'
                    : 'border border-line bg-surface text-muted hover:border-gold/50 hover:text-navy'
                }`}
              >
                {cat.name}
              </button>
            )
          })}
        </div>

        <div className="mt-8 md:mt-10">
          {isDesktop ? (
            <ProductZigzag items={items} hideIntro />
          ) : (
            <ProductLedger items={items} hideIntro />
          )}
        </div>
      </div>
    </section>
  )
}
