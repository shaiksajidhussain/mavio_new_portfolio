import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  useProductSection,
} from './shared.jsx'

/** 02 Cards — equal image cards in a grid */
export default function ProductCards({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.slug}
            className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface transition-colors hover:border-gold-deep"
          >
            <Link
              to={`/products/${slug}/${product.slug}`}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={product.image || category.image}
                alt=""
                data-no-dim
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/15" />
            </Link>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <div className="flex items-start justify-between gap-2">
                <ProductTitle to={`/products/${slug}/${product.slug}`} className="text-xl md:text-2xl">
                  {product.name}
                </ProductTitle>
                <HsCode code={product.hsCode} />
              </div>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                {product.description}
              </p>
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
