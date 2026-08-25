import { Link } from 'react-router-dom'
import { productCategories, productCatalog } from '../../data/siteContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import Button from '../ui/Button'

export default function ProductGrid({ activeSlug }) {
  const category = productCategories.find((c) => c.slug === activeSlug)
  const products = productCatalog[activeSlug] || []
  const { openEnquiry } = useEnquiryModal()

  if (!category) return null

  return (
    <div>
      <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{category.description}</p>

      <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
        {products.map((product) => (
          <article
            key={product.slug}
            className="grid gap-5 border-b border-line pb-10 last:border-b-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-7 md:grid-cols-[168px_1fr] md:gap-8"
          >
            <Link
              to={`/products/${activeSlug}/${product.slug}`}
              className="group block overflow-hidden rounded-xl"
            >
              <img
                src={product.image || category.image}
                alt=""
                data-no-dim
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:aspect-square"
              />
            </Link>

            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <Link to={`/products/${activeSlug}/${product.slug}`}>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-navy transition-colors hover:text-gold-deep dark:text-white md:text-[1.75rem]">
                    {product.name}
                  </h3>
                </Link>
                {product.hsCode ? (
                  <span className="font-mono text-xs text-gold-deep">HSN {product.hsCode}</span>
                ) : null}
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-[0.95rem]">
                {product.description}
              </p>

              {product.usage ? (
                <p className="mt-2 text-sm text-ink/80 dark:text-white/75">
                  <span className="font-medium text-navy dark:text-gold">Usage:</span> {product.usage}
                </p>
              ) : null}

              <div className="mt-5">
                <Button
                  variant="outline"
                  className="!px-5 !py-2.5 !text-xs"
                  onClick={() => openEnquiry({ name: product.name, hsCode: product.hsCode })}
                >
                  Enquire
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
