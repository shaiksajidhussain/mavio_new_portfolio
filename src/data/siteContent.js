// Centralized site content. Facts marked (real) come from Mavio Global's public
// site; everything else is placeholder/representative copy for this rebuild.

export const brand = {
  name: 'Mavio Global',
  tagline: 'Spices, Sourced with Provenance', // (real)
  founded: 1987, // (real)
  hq: 'Kochi, Kerala', // (real)
  ports: ['Kochi', 'Tuticorin'], // (real)
  marketsCount: '40+', // (real)
}

export const secondaryHeader = {
  trustText: `Exporting since ${brand.founded} · ${brand.hq}`,
  usp: '100% Traceable, Farm-to-Port Supply Chain',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Partner With Us', to: '/partner-with-us' },
  {
    label: 'Capabilities',
    children: [
      { label: 'Why Mavio', to: '/capabilities/why-mavio' },
      { label: 'Quality & Compliance', to: '/capabilities/quality-compliance' },
      { label: 'Supply Chain Visibility', to: '/capabilities/supply-chain-visibility' },
      { label: 'Export & Logistics', to: '/capabilities/export-logistics' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'FAQ', to: '/resources/faq' },
      { label: 'Accreditations & Certifications', to: '/resources/accreditations' },
      { label: 'Download Centre', to: '/resources/download-centre' },
    ],
  },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Mavio Global · Est. 1987',
  heading: 'Spices, sourced with provenance.',
  subheading:
    'From farm to port, we trace, grade and export India’s finest spices, seafood and specialty produce to buyers in 40+ countries — without the supply chain black box.',
  points: ['Farm-level traceability', 'Global certifications', 'On-time export logistics'],
  primaryCta: { label: 'Explore Our Products', to: '/products' },
  secondaryCta: { label: 'Partner With Us', to: '/partner-with-us' },
  image:
    'https://images.unsplash.com/photo-1759272840538-ae4b07214c71?auto=format&fit=crop&w=2200&q=80',
  imageAlt: 'Shipping containers stacked at port during golden hour',
  secondaryImage:
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80',
  secondaryImageAlt: 'Sun-dried spices at a sorting yard',
  trustAvatars: [
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
  ],
}

export const trustStats = [
  { value: '50', suffix: '+', label: 'Direct Farm Partnerships' }, // (real)
  { value: '100', suffix: '%', label: 'Traceable Supply Chain' }, // (real)
  { value: '6', suffix: '+', label: 'Global Certifications' }, // (real)
  { value: '1,000', suffix: '+', label: 'Tonnes / Year' }, // (real)
]

export const productCategories = [
  {
    slug: 'spices',
    name: 'Spices & Whole Spices',
    tagline: 'Graded to the last percentage point.',
    description: 'Pepper, cardamom, turmeric, chilli, cloves, nutmeg and mace.',
    color: 'gold-deep',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'seafood',
    name: 'Seafood & Marine Exports',
    tagline: 'Cold-chain integrity, dock to deck.',
    description: 'Vannamei shrimp, black tiger prawn, scampi — MPEDA-compliant.',
    color: 'navy',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'fresh-produce',
    name: 'Fresh Produce',
    tagline: 'Farm-graded, freight-ready.',
    description: 'Graded onions and agri produce from Nashik & Solapur.',
    color: 'bay',
    image:
      'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'chemicals',
    name: 'Specialty Chemicals',
    tagline: 'Compliance built into every drum.',
    description: 'Castor oil, dyes, agrochemicals — REACH & ISO-certified.',
    color: 'paprika',
    image:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'cashew-dry-fruits',
    name: 'Cashew & Dry Fruits',
    tagline: 'Kerala-grown, hand-graded.',
    description: 'Whole cashew kernels graded W180 to W450, plus almonds and dried fruit.',
    color: 'gold-deep',
    image:
      'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'rice-grains',
    name: 'Rice & Grains',
    tagline: 'Milled, polished, container-ready.',
    description: 'Basmati and non-basmati rice, pulses and cereal grains for bulk export.',
    color: 'bay',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
  },
]

export const supplyChainSteps = [
  {
    step: 1,
    label: 'Sourcing',
    icon: 'Sprout',
    description: 'Direct from 50+ farm partners across Kerala, Karnataka and Andhra Pradesh.',
    image:
      'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 2,
    label: 'Quality Check',
    icon: 'ShieldCheck',
    description: 'Multi-point lab testing for moisture, purity and contaminants.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 3,
    label: 'Packing',
    icon: 'Package',
    description: 'Food-grade, export-compliant packaging sized to your order.',
    image:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 4,
    label: 'Export Clearance',
    icon: 'FileCheck2',
    description: 'Customs documentation and phytosanitary certification handled in-house.',
    image:
      'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 5,
    label: 'Logistics',
    icon: 'Truck',
    description: 'Container booking and freight-forwarding from Kochi and Tuticorin ports.',
    image:
      'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 6,
    label: 'Delivery',
    icon: 'PackageCheck',
    description: 'Tracked door-to-port delivery with real-time shipment visibility.',
    image:
      'https://images.unsplash.com/photo-1700777685830-f501e67260e6?auto=format&fit=crop&w=1000&q=80',
  },
]

export const traceability = {
  heading: 'Visibility for every party in the chain',
  description:
    'Mavio provides traceability into the procurement process — for every party involved.',
  roles: [
    { role: 'Buyer', description: 'Full visibility into the procurement they’re involved in — lot origin, grading and shipment status.' },
    { role: 'Seller', description: 'Clear terms, transparent quality feedback and on-time settlement for every consignment.' },
    { role: 'Logistics', description: 'Consolidated documentation and live shipment status across every port and carrier.' },
  ],
}

export const about = {
  eyebrow: 'About',
  heading: 'Four decades between farm and freight.',
  body: `Mavio Global has been sourcing, grading, packing and shipping spices out of Kochi since ${brand.founded} — long enough that some of our farm partners are now on their second generation. What started as a single-warehouse pepper trading desk has grown into a multi-category export house spanning spices, seafood, fresh produce and specialty chemicals, without losing the farm-level relationships it was built on.`,
  image:
    'https://images.unsplash.com/photo-1777732786164-1f6e359e69ca?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Sacks of spices and bulk goods at a market',
}

export const whyChooseMavio = {
  buyer: {
    heading: 'Why most buyers choose us',
    points: [
      'Lot-level traceability from farm to container',
      'Consistent grading backed by in-house QC',
      'On-time export documentation and logistics',
      'Direct relationships — no unnecessary middlemen',
    ],
  },
  supplier: {
    heading: 'Why most suppliers collaborate with us',
    points: [
      'Fair, transparent pricing at time of procurement',
      'Long-term contracts, not one-off purchases',
      'On-time settlement, every consignment',
      'Agronomic and post-harvest support from our field team',
    ],
  },
}

export const accreditations = [
  'Spice Board of India',
  'ISO 22000',
  'FSSAI',
  'APEDA Registered',
  'MPEDA Certified',
  'REACH Compliant',
  'HACCP',
  'Organic (NPOP)',
]

export const testimonials = [
  {
    quote:
      'Mavio’s lot-level traceability changed how we report to our own retail customers. We finally have documentation that holds up.',
    name: 'Elena Marsh',
    role: 'Procurement Lead, European Foods Import Co.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Consistent grading, shipment after shipment. That consistency is worth more to us than a marginally lower quote.',
    name: 'Rashid Al-Farsi',
    role: 'Category Manager, Gulf Spice Traders',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Our export documentation used to be the bottleneck. With Mavio it clears customs on schedule, every time.',
    name: 'Hana Kobayashi',
    role: 'Supply Chain Director, Kobayashi Foods',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
]

export const regions = [
  { name: 'Middle East', flag: '🇦🇪', example: 'UAE, Saudi Arabia, Oman', lat: 25.2048, lng: 55.2708 },
  { name: 'Europe', flag: '🇪🇺', example: 'Germany, Netherlands, UK', lat: 50.1109, lng: 8.6821 },
  { name: 'North America', flag: '🇺🇸', example: 'USA, Canada', lat: 40.7128, lng: -74.006 },
  { name: 'Southeast Asia', flag: '🇸🇬', example: 'Singapore, Malaysia, Vietnam', lat: 1.3521, lng: 103.8198 },
  { name: 'East Asia', flag: '🇨🇳', example: 'China, Japan, South Korea', lat: 31.2304, lng: 121.4737 },
  { name: 'Africa', flag: '🌍', example: 'Kenya, Egypt, South Africa', lat: -1.2921, lng: 36.8219 },
  { name: 'Oceania', flag: '🇦🇺', example: 'Australia, New Zealand', lat: -33.8688, lng: 151.2093 },
]

export const originCoords = { lat: 9.9312, lng: 76.2673 }

export const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) for export shipments?',
    a: 'MOQs vary by product category — typically a single FCL (full container load) for spices and fresh produce, with LCL options available for first-time buyers requesting samples or trial orders.',
  },
  {
    q: 'Which certifications does Mavio hold?',
    a: 'ISO 22000, FSSAI, APEDA registration, MPEDA certification for marine exports, HACCP, and NPOP organic certification where applicable. Full documentation is available in our Download Centre.',
  },
  {
    q: 'Can we request pre-shipment samples?',
    a: 'Yes — samples are available for all product categories and are typically dispatched within 3–5 business days of a confirmed request.',
  },
  {
    q: 'What are typical lead times from order to shipment?',
    a: 'Lead times depend on category and season, but generally range from 2–4 weeks for spices and fresh produce, and 3–6 weeks for seafood, accounting for quality checks and export clearance.',
  },
  {
    q: 'Which ports do you export from?',
    a: `We ship primarily out of ${brand.ports.join(' and ')}, with routing to over ${brand.marketsCount} countries across the EU, Middle East, North America and Southeast Asia.`,
  },
]

export const leadFormConfig = {
  roles: ['Buyer', 'Supplier', 'Other'],
  buyerCategories: productCategories.map((c) => c.name),
  supplierCategories: productCategories.map((c) => c.name),
}

export const footer = {
  description:
    'Mavio Global is a spice, seafood and specialty export trading house shipping traceable, certified produce to 40+ countries from the ports of Kochi and Tuticorin.',
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Sustainability', to: '/sustainability' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Capabilities',
      links: nav.find((n) => n.label === 'Capabilities').children,
    },
    {
      title: 'Resources',
      links: nav.find((n) => n.label === 'Resources').children,
    },
  ],
  contact: {
    email: 'hello@mavioglobal.com',
    phone: '+91 484 000 0000',
    address: `${brand.hq}, India`,
  },
}
