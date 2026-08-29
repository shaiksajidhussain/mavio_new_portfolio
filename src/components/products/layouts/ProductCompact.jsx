import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  useProductSection,
} from './shared.jsx'

/** 03 Compact — denser catalogue rows */
export default function ProductCompact({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-line md:mt-10">
        {products.map((product, i) => (
          <article
            key={product.slug}
            className={`flex items-center gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5 ${
              i < products.length - 1 ? 'border-b border-line' : ''
            }`}
          >
            <Link
              to={`/products/${slug}/${product.slug}`}
              className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20"
            >
              <img
                src={product.image || category.image}
                alt=""
                data-no-dim
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <ProductTitle to={`/products/${slug}/${product.slug}`} className="text-lg sm:text-xl">
                  {product.name}
                </ProductTitle>
                <HsCode code={product.hsCode} />
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{product.description}</p>
            </div>
            <div className="hidden shrink-0 sm:block">
              <EnquireButton product={product} openEnquiry={openEnquiry} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
