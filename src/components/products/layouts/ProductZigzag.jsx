import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  useProductSection,
} from './shared.jsx'

/** 07 Zigzag — alternating image / copy chapters */
export default function ProductZigzag({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-8 h-px w-full bg-gold-deep/45 md:mt-10" />

      <div className="mt-10 space-y-10 md:mt-12 md:space-y-0">
        {products.map((product, i) => {
          const imageLeft = i % 2 === 0
          return (
            <article
              key={product.slug}
              className={`grid items-center gap-6 border-b border-gold-deep/35 pb-10 last:border-b-0 last:pb-0 md:gap-10 md:py-12 md:pb-12 lg:grid-cols-2 lg:gap-12 ${
                imageLeft ? '' : 'lg:[&>*:first-child]:order-2'
              }`}
            >
              <Link
                to={`/products/${slug}/${product.slug}`}
                className="group relative aspect-[16/11] overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem]"
              >
                <img
                  src={product.image || category.image}
                  alt=""
                  data-no-dim
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </Link>

              <div className={imageLeft ? 'lg:pl-2' : 'lg:pr-2'}>
                <ProductTitle
                  to={`/products/${slug}/${product.slug}`}
                  className="text-2xl md:text-3xl"
                >
                  {product.name}
                </ProductTitle>
                <div className="mt-2">
                  <HsCode code={product.hsCode} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {product.description}
                </p>
                {product.usage ? (
                  <p className="mt-2 text-sm text-ink/80 dark:text-white/75">
                    <span className="font-medium text-navy dark:text-gold">Usage:</span> {product.usage}
                  </p>
                ) : null}
                <div className="mt-6">
                  <EnquireButton product={product} openEnquiry={openEnquiry} />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
