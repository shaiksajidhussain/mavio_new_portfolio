import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  useProductSection,
} from './shared.jsx'

/** 01 List — original reference rows */
export default function ProductList({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
        {products.map((product) => (
          <article
            key={product.slug}
            className="grid gap-5 border-b border-line pb-10 last:border-b-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-7 md:grid-cols-[168px_1fr] md:gap-8"
          >
            <Link
              to={`/products/${slug}/${product.slug}`}
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
                <ProductTitle
                  to={`/products/${slug}/${product.slug}`}
                  className="text-2xl md:text-[1.75rem]"
                >
                  {product.name}
                </ProductTitle>
                <HsCode code={product.hsCode} />
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
                <EnquireButton product={product} openEnquiry={openEnquiry} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
