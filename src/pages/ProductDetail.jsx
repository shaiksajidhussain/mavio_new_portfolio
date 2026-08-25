import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { productCategories, productCatalog } from '../data/siteContent'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import SectionHeading from '../components/ui/SectionHeading'

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams()
  const { openEnquiry } = useEnquiryModal()
  const heroImgRef = useRef(null)
  const sectionRef = useRef(null)

  const category = productCategories.find((c) => c.slug === categorySlug)
  const product = (productCatalog[categorySlug] || []).find((p) => p.slug === productSlug)

  useEffect(() => {
    if (prefersReducedMotion || !product) return
    const ctx = gsap.context(() => {
      gsap.to(heroImgRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [product])

  if (!category || !product) {
    return (
      <section className="container-px mx-auto flex min-h-[50vh] max-w-container flex-col items-start justify-center py-20">
        <SectionLabel tone="pill">Not found</SectionLabel>
        <SectionHeading as="h1" className="mt-4">
          Product not found
        </SectionHeading>
        <Button to="/products" variant="outline" className="mt-6">
          <ArrowLeft size={16} /> All products
        </Button>
      </section>
    )
  }

  return (
    <>
      <section ref={sectionRef} className="relative -mt-[4.5rem] flex min-h-[58svh] flex-col justify-end overflow-hidden md:min-h-[68svh]">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            ref={heroImgRef}
            src={product.image || category.image}
            alt=""
            data-no-dim
            className="h-full w-full scale-110 object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/85 via-transparent to-black/30" />

        <div className="container-px relative mx-auto w-full max-w-container pb-14 pt-40 md:pb-16">
          <Link
            to={`/products/${categorySlug}`}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-gold"
          >
            ← Back to {category.name}
          </Link>
          <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {product.name}
          </h1>
          {product.hsCode ? (
            <p className="mt-4 font-mono text-sm text-gold">HSN {product.hsCode}</p>
          ) : null}
        </div>
      </section>

      <section className="container-px mx-auto max-w-container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label="Product categories" className="lg:sticky lg:top-28 lg:self-start">
            <ul>
              {productCategories.map((cat) => {
                const active = cat.slug === categorySlug
                return (
                  <li key={cat.slug} className="border-b border-gold-deep/45">
                    <Link
                      to={`/products/${cat.slug}`}
                      className={`flex w-full items-center justify-between gap-3 py-4 transition-colors ${
                        active ? 'text-navy dark:text-gold' : 'text-ink/70 hover:text-navy dark:text-white/65'
                      }`}
                    >
                      <span
                        className={`font-display text-lg ${
                          active ? 'font-bold underline decoration-gold-deep decoration-2 underline-offset-8' : 'font-medium'
                        }`}
                      >
                        {cat.name}
                      </span>
                      <ChevronRight size={16} className="text-gold-deep" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div>
            <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{product.description}</p>
            {product.usage ? (
              <p className="mt-4 text-sm text-ink md:text-base">
                <span className="font-semibold text-navy dark:text-gold">Usage:</span> {product.usage}
              </p>
            ) : null}

            <div className="mt-8">
              <Button variant="primary" onClick={() => openEnquiry({ name: product.name, hsCode: product.hsCode })}>
                Enquire
              </Button>
            </div>

            {product.variants?.length ? (
              <div className="mt-14 space-y-10 border-t border-line pt-10">
                {product.variants.map((variant) => (
                  <article key={variant.name} className="grid gap-5 sm:grid-cols-[140px_1fr] sm:gap-7">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={product.image || category.image}
                        alt=""
                        data-no-dim
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy dark:text-white md:text-2xl">
                        {variant.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                        {variant.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
