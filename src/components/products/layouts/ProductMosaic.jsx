import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  ProductTitle,
  useProductSection,
} from './shared.jsx'

/** 04 Mosaic — featured lead + supporting grid */
export default function ProductMosaic({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  const [featured, ...rest] = products

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-10 space-y-5 md:mt-12">
        {featured ? (
          <article className="grid overflow-hidden rounded-[1.75rem] border border-line bg-surface md:grid-cols-[1.15fr_1fr] md:rounded-[2rem]">
            <Link
              to={`/products/${slug}/${featured.slug}`}
              className="group relative min-h-[240px] overflow-hidden md:min-h-[360px]"
            >
              <img
                src={featured.image || category.image}
                alt=""
                data-no-dim
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35" />
            </Link>
            <div className="flex flex-col justify-center p-6 md:p-9 lg:p-10">
              <p className="gold-text eyebrow">Featured</p>
              <ProductTitle
                to={`/products/${slug}/${featured.slug}`}
                className="mt-3 text-2xl md:text-3xl"
              >
                {featured.name}
              </ProductTitle>
              <div className="mt-2">
                <HsCode code={featured.hsCode} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {featured.description}
              </p>
              <div className="mt-6">
                <EnquireButton product={featured} openEnquiry={openEnquiry} />
              </div>
            </div>
          </article>
        ) : null}

        {rest.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((product) => (
              <article
                key={product.slug}
                className="group flex gap-4 overflow-hidden rounded-[1.35rem] border border-line bg-surface p-3 transition-colors hover:border-gold-deep sm:p-4"
              >
                <Link
                  to={`/products/${slug}/${product.slug}`}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28"
                >
                  <img
                    src={product.image || category.image}
                    alt=""
                    data-no-dim
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="min-w-0 flex-1 py-1">
                  <ProductTitle to={`/products/${slug}/${product.slug}`} className="text-lg sm:text-xl">
                    {product.name}
                  </ProductTitle>
                  <div className="mt-1">
                    <HsCode code={product.hsCode} />
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{product.description}</p>
                  <div className="mt-3">
                    <EnquireButton product={product} openEnquiry={openEnquiry} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
