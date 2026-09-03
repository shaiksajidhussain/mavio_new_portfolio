import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  productHref,
  useProductSection,
} from './shared.jsx'

/** 06 Ledger — structured catalogue table */
export default function ProductLedger({ activeSlug, items, hideIntro = false }) {
  const { category, products: sectionProducts, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  const products = items ?? sectionProducts
  if (!products.length) return null

  return (
    <div>
      {hideIntro ? null : <CategoryIntro category={category} />}
      <div className={`${hideIntro ? '' : 'mt-10 md:mt-12 '}overflow-hidden rounded-[1.35rem] border border-line`}>
        <div className="hidden grid-cols-[72px_1.4fr_0.7fr_1.6fr_auto] gap-4 border-b border-line bg-bg-muted px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep md:grid">
          <span>Ref</span>
          <span>Product</span>
          <span>HSN</span>
          <span>Specification note</span>
          <span className="text-right">Action</span>
        </div>

        {products.map((product, i) => {
          const href = productHref(product, slug)
          return (
            <article
              key={`${product.categorySlug || slug}-${product.slug || product.name}`}
              className={`grid items-center gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[72px_1.4fr_0.7fr_1.6fr_auto] md:gap-4 ${
                i < products.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <Link to={href} className="group relative h-14 w-14 overflow-hidden rounded-lg md:h-16 md:w-16">
                <img
                  src={product.image || category?.image}
                  alt=""
                  data-no-dim
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="min-w-0 md:contents">
                <div>
                  <ProductTitle to={href} className="text-lg md:text-xl">
                    {product.name}
                  </ProductTitle>
                  <div className="mt-1 md:hidden">
                    <HsCode code={product.hsCode} />
                  </div>
                </div>
                <div className="hidden md:block">
                  <HsCode code={product.hsCode} />
                </div>
                <p className="line-clamp-2 text-sm text-muted">{product.description}</p>
              </div>

              <div className="md:justify-self-end">
                <EnquireButton product={product} openEnquiry={openEnquiry} />
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
