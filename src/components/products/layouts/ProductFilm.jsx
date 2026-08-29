import { Link } from 'react-router-dom'
import {
  CategoryIntro,
  EnquireButton,
  HsCode,
  useProductSection,
} from './shared.jsx'

/** 05 Film — cinematic image panels with overlay copy */
export default function ProductFilm({ activeSlug }) {
  const { category, products, openEnquiry, activeSlug: slug } = useProductSection(activeSlug)
  if (!category) return null

  return (
    <div>
      <CategoryIntro category={category} />
      <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
        {products.map((product, i) => (
          <article
            key={product.slug}
            className="group relative min-h-[280px] overflow-hidden rounded-[1.5rem] md:min-h-[320px] md:rounded-[1.75rem]"
          >
            <img
              src={product.image || category.image}
              alt=""
              data-no-dim
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/75 transition-colors duration-500 group-hover:bg-black/65" />
            <div className="relative flex min-h-[280px] flex-col justify-end p-6 md:min-h-[320px] md:p-9">
              <span className="font-display text-[11px] tracking-[0.22em] text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <Link to={`/products/${slug}/${product.slug}`}>
                    <h3 className="font-display text-2xl font-semibold text-white transition-colors hover:text-gold md:text-3xl">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-2">
                    <HsCode code={product.hsCode} />
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/75 md:text-base">
                    {product.description}
                  </p>
                </div>
                <EnquireButton
                  product={product}
                  openEnquiry={openEnquiry}
                  variant="outlineLight"
                  className="!border-white/35 !text-white hover:!border-gold hover:!text-gold"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
