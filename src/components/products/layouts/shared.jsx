import { Link } from 'react-router-dom'
import { useEnquiryModal } from '../../../context/EnquiryModalContext'
import Button from '../../ui/Button'
import { productCategories, productCatalog } from '../../../data/siteContent'

export function useProductSection(activeSlug) {
  const category = productCategories.find((c) => c.slug === activeSlug)
  const products = productCatalog[activeSlug] || []
  const { openEnquiry } = useEnquiryModal()
  return { category, products, openEnquiry, activeSlug }
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
