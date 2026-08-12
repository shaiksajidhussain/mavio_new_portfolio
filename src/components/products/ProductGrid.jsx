import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { productCategories, productCatalog } from '../../data/siteContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import Button from '../ui/Button'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function ProductGrid({ activeSlug }) {
  const category = productCategories.find((c) => c.slug === activeSlug)
  const products = productCatalog[activeSlug] || []
  const gridRef = useRef(null)
  const { openEnquiry } = useEnquiryModal()

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-card]')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out', overwrite: 'auto' }
    )
  }, [activeSlug])

  return (
    <div>
      <p className="eyebrow text-gold-deep">
        Product Grid &mdash; {category?.name} products
      </p>

      <div ref={gridRef} className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.slug}
            data-card
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-colors hover:border-gold"
          >
            <Link to={`/products/${activeSlug}/${product.slug}`} className="group flex flex-1 flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category?.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-5 pb-0">
                <h3 className="font-display text-base font-bold text-ink">{product.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">HS Code: {product.hsCode}</p>
              </div>
            </Link>

            <div className="p-5 pt-4">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => openEnquiry({ name: product.name, hsCode: product.hsCode })}
              >
                Enquire
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
