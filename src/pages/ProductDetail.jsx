import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { productCategories, productCatalog } from '../data/siteContent'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
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
      <section ref={sectionRef} className="relative -mt-[4.5rem] flex min-h-[60vh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img ref={heroImgRef} src={category.image} alt="" className="h-full w-full scale-110 object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/45 to-navy-deep/40" />

        <div className="container-px relative mx-auto w-full max-w-container pb-10 pt-40 md:pb-14">
          <Link
            to={`/products/${categorySlug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-deep"
          >
            <ArrowLeft size={14} /> All products
          </Link>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">{product.name}</h1>
        </div>
      </section>

      <section className="container-px mx-auto max-w-container py-16 md:py-24">
        <Reveal stagger={0}>
          <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{product.description}</p>
        </Reveal>

        <div className="mt-10 flex items-center gap-4">
          <span className="font-mono text-sm text-muted">HS Code: {product.hsCode}</span>
          <Button variant="primary" onClick={() => openEnquiry({ name: product.name, hsCode: product.hsCode })}>
            Enquire
          </Button>
        </div>

        <div className="mt-16 space-y-16">
          {product.variants.map((variant, i) => {
            const imageFirst = i % 2 === 0
            return (
              <div key={variant.name}>
                <Reveal
                  as="div"
                  stagger={0}
                  className={`grid items-center gap-10 md:grid-cols-2 ${imageFirst ? '' : 'md:[&>*:first-child]:order-2'}`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                    <img src={category.image} alt={variant.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <span className="font-display text-6xl font-black leading-none text-gold/30 md:text-7xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">{variant.name}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {variant.description}
                    </p>
                  </div>
                </Reveal>
                {i < product.variants.length - 1 && <div className="mt-16 border-t border-line" />}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
