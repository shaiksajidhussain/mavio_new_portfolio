import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  useProductSection,
} from './shared.jsx'

/** 06 Ledger — structured catalogue table */
export default function ProductLedger({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-10 overflow-hidden rounded-[1.35rem] border border-line md:mt-12">
        <div className="hidden grid-cols-[72px_1.4fr_0.7fr_1.6fr_auto] gap-4 border-b border-line bg-bg-muted px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep md:grid">
          <span>Ref</span>
          <span>Product</span>
          <span>HSN</span>
          <span>Specification note</span>
          <span className="text-right">Action</span>
        </div>

        {products.map((product, i) => (
          <article
            key={product.slug}
            className={`grid items-center gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[72px_1.4fr_0.7fr_1.6fr_auto] md:gap-4 ${
              i < products.length - 1 ? 'border-b border-line' : ''
            }`}
          >
            <Link
              to={`/products/${slug}/${product.slug}`}
              className="group relative h-14 w-14 overflow-hidden rounded-lg md:h-16 md:w-16"
            >
              <img
                src={product.image || category.image}
                alt=""
                data-no-dim
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>

            <div className="min-w-0 md:contents">
              <div>
                <ProductTitle to={`/products/${slug}/${product.slug}`} className="text-lg md:text-xl">
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
        ))}
      </div>
    </div>
  )
}
