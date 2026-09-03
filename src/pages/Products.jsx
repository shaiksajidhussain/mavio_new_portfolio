import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productCategories } from '../data/siteContent'
import CategorySidebar from '../components/products/CategorySidebar'
import CatalogueOverview from '../components/products/CatalogueOverview'
import ProductGrid from '../components/products/ProductGrid'
import ProductsHero from '../components/products/ProductsHero'
import { useIsLg } from '../components/products/layouts/shared'

export default function Products() {
  const { categorySlug } = useParams()
  const navigate = useNavigate()

  const hasCategory = productCategories.some((c) => c.slug === categorySlug)
  const [activeSlug, setActiveSlug] = useState(hasCategory ? categorySlug : null)
  const isDesktop = useIsLg()

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

  return (
    <>
      <ProductsHero category={category} />

      <section className="bg-bg py-12 md:py-16 lg:py-20">
        <div className="container-px mx-auto max-w-container">
          <div className="grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[260px_minmax(0,1fr)]">
            <CategorySidebar activeSlug={activeSlug} onSelect={selectCategory} />
            {category ? (
              <div className="min-w-0">
                <ProductGrid activeSlug={activeSlug} style={isDesktop ? 'zigzag' : 'ledger'} />
              </div>
            ) : (
              <CatalogueOverview onSelect={selectCategory} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
