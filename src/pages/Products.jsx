import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productCategories } from '../data/siteContent'
import CategorySidebar from '../components/products/CategorySidebar'
import CatalogueOverview from '../components/products/CatalogueOverview'
import ProductGrid, { PRODUCT_STYLES } from '../components/products/ProductGrid'
import ProductsHero from '../components/products/ProductsHero'

export default function Products() {
  const { categorySlug } = useParams()
  const navigate = useNavigate()

  const hasCategory = productCategories.some((c) => c.slug === categorySlug)
  const [activeSlug, setActiveSlug] = useState(hasCategory ? categorySlug : null)
  const [style, setStyle] = useState('zigzag')

  useEffect(() => {
    setActiveSlug(hasCategory ? categorySlug : null)
  }, [categorySlug, hasCategory])

  const category = hasCategory
    ? productCategories.find((c) => c.slug === categorySlug)
    : null

  const selectCategory = (slug) => {
    setActiveSlug(slug)
    navigate(`/products/${slug}`)
  }

  const current = PRODUCT_STYLES.find((item) => item.id === style)

  return (
    <>
      <ProductsHero category={category} />

      <section className="bg-bg py-12 md:py-16 lg:py-20">
        <div className="container-px mx-auto max-w-container">
          {category ? (
            <>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:mb-10 md:justify-end lg:mb-12">
                {PRODUCT_STYLES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStyle(item.id)}
                    aria-pressed={style === item.id}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                      style === item.id
                        ? 'bg-gold-gradient text-navy-deep'
                        : 'border border-line bg-surface text-muted hover:border-gold/50 hover:text-navy'
                    }`}
                  >
                    {item.n} {item.name}
                  </button>
                ))}
              </div>
              <p className="mb-6 text-center text-xs text-muted md:text-right">{current?.name} layout</p>
            </>
          ) : null}

          <div className="grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[260px_minmax(0,1fr)]">
            <CategorySidebar activeSlug={activeSlug} onSelect={selectCategory} />
            {category ? (
              <ProductGrid activeSlug={activeSlug} style={style} />
            ) : (
              <CatalogueOverview onSelect={selectCategory} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
