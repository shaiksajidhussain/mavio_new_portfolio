import ProductList from './layouts/ProductList'
import ProductCards from './layouts/ProductCards'
import ProductCompact from './layouts/ProductCompact'
import ProductMosaic from './layouts/ProductMosaic'
import ProductFilm from './layouts/ProductFilm'
import ProductLedger from './layouts/ProductLedger'
import ProductZigzag from './layouts/ProductZigzag'

export const PRODUCT_STYLES = [
  { id: 'list', n: '01', name: 'List' },
  { id: 'cards', n: '02', name: 'Cards' },
  { id: 'compact', n: '03', name: 'Compact' },
  { id: 'mosaic', n: '04', name: 'Mosaic' },
  { id: 'film', n: '05', name: 'Film' },
  { id: 'ledger', n: '06', name: 'Ledger' },
  { id: 'zigzag', n: '07', name: 'Zigzag' },
]

const LAYOUTS = {
  list: ProductList,
  cards: ProductCards,
  compact: ProductCompact,
  mosaic: ProductMosaic,
  film: ProductFilm,
  ledger: ProductLedger,
  zigzag: ProductZigzag,
}

export default function ProductGrid({ activeSlug, style = 'list' }) {
  const Layout = LAYOUTS[style] || ProductList
  return <Layout activeSlug={activeSlug} />
}
