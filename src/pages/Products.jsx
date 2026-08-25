import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productCategories } from '../data/siteContent'
import CategorySidebar from '../components/products/CategorySidebar'
import ProductGrid from '../components/products/ProductGrid'
import ProductsHero from '../components/products/ProductsHero'

export default function Products() {
  const { categorySlug } = useParams()
  const navigate = useNavigate()

  const initial = productCategories.some((c) => c.slug === categorySlug)
    ? categorySlug
    : productCategories[0].slug

  const [activeSlug, setActiveSlug] = useState(initial)

  useEffect(() => {
    const next = productCategories.some((c) => c.slug === categorySlug)
      ? categorySlug
      : productCategories[0].slug
    setActiveSlug(next)
  }, [categorySlug])

  const category =
    productCategories.find((c) => c.slug === activeSlug) || productCategories[0]

  const selectCategory = (slug) => {
    setActiveSlug(slug)
    navigate(`/products/${slug}`, { replace: true })
  }

  return (
    <>
      <ProductsHero category={category} />

      <section className="bg-bg py-12 md:py-16 lg:py-20">
        <div className="container-px mx-auto grid max-w-container gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[260px_minmax(0,1fr)]">
          <CategorySidebar activeSlug={activeSlug} onSelect={selectCategory} />
          <ProductGrid activeSlug={activeSlug} />
        </div>
      </section>
    </>
  )
}
