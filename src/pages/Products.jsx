import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productCategories } from '../data/siteContent'
import SectionLabel from '../components/ui/SectionLabel'
import Reveal from '../components/ui/Reveal'
import CategorySidebar from '../components/products/CategorySidebar'
import ProductGrid from '../components/products/ProductGrid'
import ProductsHero from '../components/products/ProductsHero'
import SectionHeading from '../components/ui/SectionHeading'

export default function Products() {
  const { categorySlug } = useParams()
  const initial = productCategories.some((c) => c.slug === categorySlug)
    ? categorySlug
    : productCategories[0].slug
  const [activeSlug, setActiveSlug] = useState(initial)

  return (
    <>
      <ProductsHero />

      <section className="container-px mx-auto max-w-container py-16 md:py-24">
        <Reveal stagger={0}>
          <SectionLabel>Product Layer</SectionLabel>
          <SectionHeading className="mt-3">Explore our categories</SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
          <CategorySidebar activeSlug={activeSlug} onSelect={setActiveSlug} />
          <ProductGrid activeSlug={activeSlug} />
        </div>
      </section>
    </>
  )
}
