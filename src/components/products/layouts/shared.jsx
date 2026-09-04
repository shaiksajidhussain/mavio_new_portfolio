import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useEnquiryModal } from '../../../context/EnquiryModalContext'
import Button from '../../ui/Button'
import { productCategories, productCatalog } from '../../../data/siteContent'

export function useIsLg() {
  const [isLg, setIsLg] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : true
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const apply = () => setIsLg(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return isLg
}

export function useProductSection(activeSlug) {
  const category = productCategories.find((c) => c.slug === activeSlug)
  const products = (productCatalog[activeSlug] || []).map((item) => ({
    ...item,
    categorySlug: activeSlug,
    categoryImage: category?.image,
  }))
  const { openEnquiry } = useEnquiryModal()
  return { category, products, openEnquiry, activeSlug }
}

export function productsForCategory(slug) {
  if (!slug) return []
  const category = productCategories.find((c) => c.slug === slug)
  return (productCatalog[slug] || []).map((item) => ({
    ...item,
    categorySlug: slug,
    categoryImage: category?.image,
  }))
}

export function productHref(product, fallbackSlug) {
  const categorySlug = product.categorySlug || fallbackSlug
  if (!categorySlug) return '/products'
  if (product.slug) return `/products/${categorySlug}/${product.slug}`
  return `/products/${categorySlug}`
}

export function CategoryIntro({ category }) {
  if (!category) return null
  return (
    <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{category.description}</p>
  )
}

export function EnquireButton({ product, openEnquiry, variant = 'outline', className = '' }) {
  return (
    <Button
      variant={variant}
      className={`!px-5 !py-2.5 !text-xs ${className}`}
      onClick={() => openEnquiry({ name: product.name, hsCode: product.hsCode })}
    >
      Enquire
    </Button>
  )
}

export function ProductTitle({ to, children, className = '' }) {
  return (
    <Link to={to}>
      <h3
        className={`font-display font-semibold tracking-tight text-navy transition-colors hover:text-gold-deep dark:text-white ${className}`}
      >
        {children}
      </h3>
    </Link>
  )
}

export function HsCode({ code }) {
  if (!code) return null
  return <span className="font-mono text-xs text-gold-deep">HSN {code}</span>
}
