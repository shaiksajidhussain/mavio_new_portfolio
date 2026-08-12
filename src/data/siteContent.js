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

// Individual products within each category, keyed by category slug.
// Each product has its own detail page listing numbered variants.
export const productCatalog = {
  spices: [
    {
      slug: 'black-pepper',
      name: 'Black Pepper',
      hsCode: '0904.11',
      description:
        'Kerala’s signature export since 1987 — Mavio Global grades and ships black pepper to specification, from bulk garbled lots to premium bold berries for the retail grinder market.',
      variants: [
        { name: 'Malabar Garbled Black Pepper (MG-1)', description: 'Sun-dried and hand-garbled peppercorns from Idukki and Wayanad estates; consistent 500–560 g/l density, machine-cleaned to less than 1% extraneous matter.' },
        { name: 'Tellicherry Extra Bold (TGSEB)', description: 'Large-berry premium grade prized by specialty grinders and retail spice brands; sorted to 4.25mm+ screen size.' },
        { name: 'White Pepper', description: 'Water-retted and sun-dried black peppercorns with the outer skin removed; used in light-colored sauces, dressings and processed foods.' },
      ],
    },
    {
      slug: 'cardamom',
      name: 'Green Cardamom',
      hsCode: '0908.31',
      description:
        'Small cardamom (Elettaria cardamomum) grown in the high-range estates of Idukki, graded by size and color for export markets across the Middle East and Europe.',
      variants: [
        { name: 'Cardamom 8mm Bold', description: 'Large, deep-green pods with high oil content; the preferred grade for Middle Eastern coffee and dessert markets.' },
        { name: 'Cardamom 7mm / 6mm', description: 'Mid-size grading for general culinary and grinding use; consistent moisture content below 10%.' },
      ],
    },
    {
      slug: 'turmeric',
      name: 'Turmeric',
      hsCode: '0910.30',
      description:
        'Alleppey and Erode-origin turmeric, valued for curcumin content and deep golden color, supplied whole (finger) or ground to specification.',
      variants: [
        { name: 'Turmeric Finger (Whole)', description: 'Boiled, sun-dried turmeric rhizomes; curcumin content 3–5%, polished or unpolished on request.' },
        { name: 'Turmeric Powder', description: 'Ground and sieved to 80–100 mesh; packed in moisture-barrier bags to preserve color and aroma over long transit.' },
      ],
    },
    {
      slug: 'red-chilli',
      name: 'Dried Red Chilli',
      hsCode: '0904.22',
      description:
        'Guntur and Byadagi-variety dried chillies, graded for heat (SHU) and color extract value, supplied whole or as stemless pods.',
      variants: [
        { name: 'Guntur Sannam S4', description: 'High-pungency variety (40,000–50,000 SHU) used in oleoresin extraction and spice blends.' },
        { name: 'Byadagi Chilli', description: 'Low-pungency, deep-red variety prized for color value in curry powders and sauces.' },
      ],
    },
  ],
  seafood: [
    {
      slug: 'shrimps-prawns',
      name: 'Shrimps & Prawns',
      hsCode: '0306.17',
      description:
        'India is the world’s leading shrimp exporter, and Mavio Global connects international buyers with the highest-quality Indian seafood processed at state-of-the-art, internationally certified facilities. Our marine exports comply with the stringent norms of MPEDA (Marine Products Export Development Authority) and all importing-country regulatory bodies.',
      variants: [
        { name: 'Vannamei Shrimp (White Leg)', description: 'Farm-raised Pacific white shrimp (Litopenaeus vannamei); available HOSO, HLSO, PD, and IQF-frozen in a range of counts (10/20, 16/20, 21/25, 26/30, 31/40, 41/50); sourced from antibiotic-free, ASC-certified farms.' },
        { name: 'Black Tiger Shrimp', description: 'Wild and farm-raised Penaeus monodon; larger sizes, distinct dark banding; popular in Japanese and Southeast Asian markets; HOSO and headless block-frozen.' },
        { name: 'Scampi / Freshwater Prawn', description: 'Macrobrachium rosenbergii sourced from freshwater aquaculture; large-sized, succulent, and popular in European markets; exported IQF and block-frozen.' },
        { name: 'Baby Shrimp', description: 'Small-count shrimp (71/90, 91/110) used in food processing, pasta, and salad applications; exported cooked or raw, peeled and deveined.' },
      ],
    },
    {
      slug: 'whole-fish',
      name: 'Whole Fish',
      hsCode: '0303.89',
      description:
        'Ocean and aquaculture-sourced finfish, block-frozen at sea or immediately on landing to preserve texture and freshness for export.',
      variants: [
        { name: 'Seer Fish (King Mackerel)', description: 'Whole round or gutted, IQF or block-frozen; a premium species popular across Middle Eastern markets.' },
        { name: 'Pomfret', description: 'Silver and black pomfret, whole gutted and scaled; sized and graded for retail and foodservice buyers.' },
      ],
    },
    {
      slug: 'crab-lobster',
      name: 'Crab & Lobster',
      hsCode: '0306.14',
      description:
        'Live-caught mud crab and spiny lobster, processed and frozen within hours of harvest for maximum shelf life and quality.',
      variants: [
        { name: 'Mud Crab (Whole / Meat)', description: 'Whole cooked-frozen crab or picked crab meat, graded by claw size and meat yield.' },
        { name: 'Spiny Lobster (Tail / Whole)', description: 'Whole or tail-only, block-frozen; sized 4–6oz through 10oz+ for foodservice and retail.' },
      ],
    },
  ],
  'fresh-produce': [
    {
      slug: 'onions',
      name: 'Onions',
      hsCode: '0703.10',
      description: 'Nashik and Solapur-origin onions, graded for size and shelf life, packed in export-grade mesh bags or cartons.',
      variants: [
        { name: 'Red Onion (40–60mm)', description: 'Standard export grade, firm bulbs with tight skin; packed in 25kg mesh bags.' },
        { name: 'Red Onion (60–80mm)', description: 'Larger-count grade for foodservice and processing buyers.' },
      ],
    },
    {
      slug: 'bananas',
      name: 'Bananas',
      hsCode: '0803.90',
      description: 'Cavendish bananas harvested green and shipped under controlled ripening protocols for extended transit windows.',
      variants: [
        { name: 'Cavendish (Green, Export Grade)', description: 'Hand-harvested at 75–80% maturity, boxed in ventilated cartons for sea-freight transit.' },
      ],
    },
    {
      slug: 'mangoes',
      name: 'Mangoes',
      hsCode: '0804.50',
      description: 'Alphonso and Kesar mango varieties, hot-water treated and vapor heat-treated per destination-market phytosanitary requirements.',
      variants: [
        { name: 'Alphonso Mango', description: 'Premium variety from Ratnagiri and Devgad; hand-picked and sorted by weight for retail export.' },
        { name: 'Kesar Mango', description: 'Gujarat-origin variety with distinct aroma; suited to both fresh and pulp processing markets.' },
      ],
    },
  ],
  chemicals: [
    {
      slug: 'castor-oil',
      name: 'Castor Oil',
      hsCode: '1515.30',
      description: 'Cold-pressed and refined castor oil derivatives for industrial, pharmaceutical and cosmetic applications, REACH and ISO-compliant.',
      variants: [
        { name: 'Commercial Grade Castor Oil', description: 'First-pressed, filtered oil for industrial lubricant and coating applications.' },
        { name: 'Pharma Grade Castor Oil', description: 'Refined and deodorized to USP/BP pharmacopeia specifications.' },
      ],
    },
    {
      slug: 'guar-gum',
      name: 'Guar Gum',
      hsCode: '1302.32',
      description: 'Food and industrial-grade guar gum powder milled to specified viscosity for use as a thickener and stabilizer.',
      variants: [
        { name: 'Food Grade Guar Gum', description: 'Fine-milled powder meeting food-additive purity standards; used in bakery, dairy and sauces.' },
        { name: 'Industrial Grade Guar Gum', description: 'Coarser mesh grade for oilfield fracturing fluids and textile printing applications.' },
      ],
    },
    {
      slug: 'agro-intermediates',
      name: 'Agrochemical Intermediates',
      hsCode: '3808.99',
      description: 'Custom-manufactured intermediates for crop protection formulations, produced to buyer specification under REACH compliance.',
      variants: [
        { name: 'Technical Grade Intermediates', description: 'Bulk intermediate compounds supplied per buyer’s technical data sheet.' },
      ],
    },
  ],
  'cashew-dry-fruits': [
    {
      slug: 'cashew-kernels',
      name: 'Cashew Kernels',
      hsCode: '0801.32',
      description: 'Kerala-processed cashew kernels, hand-graded to international size standards (W180 through W450) and vacuum-packed for freshness.',
      variants: [
        { name: 'W240 Whole White', description: 'Premium whole kernel grade, uniform ivory-white color, low moisture for extended shelf life.' },
        { name: 'W320 Whole White', description: 'The most widely traded whole-kernel grade, balancing size and value for retail and foodservice.' },
        { name: 'Cashew Splits (SW/SSW)', description: 'Split kernels graded by size, used in confectionery, bakery and snack manufacturing.' },
      ],
    },
    {
      slug: 'almonds',
      name: 'Almonds',
      hsCode: '0802.12',
      description: 'Shelled almonds sourced and re-graded to buyer specification for bulk food-manufacturing and retail packing.',
      variants: [
        { name: 'Almond Kernels (Natural)', description: 'Whole shelled almonds, sized and sorted; suited to retail repacking and snack use.' },
      ],
    },
    {
      slug: 'dried-fruits',
      name: 'Dried Fruits Mix',
      hsCode: '0813.50',
      description: 'Sun-dried and dehydrated fruit mixes including raisins, apricots and dates, packed to retail or bulk specification.',
      variants: [
        { name: 'Raisins (Golden / Black)', description: 'Sun-dried seedless grapes, sorted by size and moisture content.' },
      ],
    },
  ],
  'rice-grains': [
    {
      slug: 'basmati-rice',
      name: 'Basmati Rice',
      hsCode: '1006.30',
      description: 'Aged, extra-long-grain basmati rice milled and sorted to export specification, sourced from Punjab and Haryana paddy fields.',
      variants: [
        { name: '1121 Basmati (Extra Long)', description: 'Extra-long grain length (8.3mm+) after cooking; aged a minimum of 12 months for aroma and elongation.' },
        { name: 'Pusa Basmati 1509', description: 'Shorter-cycle basmati variety offering strong aroma at a more accessible price point.' },
      ],
    },
    {
      slug: 'non-basmati-rice',
      name: 'Non-Basmati Rice',
      hsCode: '1006.30',
      description: 'Parboiled and white non-basmati rice varieties milled for bulk food-security and retail markets.',
      variants: [
        { name: 'IR64 Parboiled', description: 'Widely traded parboiled variety for bulk retail and institutional buyers.' },
      ],
    },
    {
      slug: 'pulses-cereals',
      name: 'Pulses & Cereals',
      hsCode: '0713.40',
      description: 'Lentils, chickpeas and other pulses cleaned, graded and packed for export to retail and bulk buyers.',
      variants: [
        { name: 'Toor Dal (Split Pigeon Pea)', description: 'Cleaned and polished split pigeon pea, sorted for uniform size and color.' },
      ],
    },
  ],
}

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

export const aboutPage = {
  hero: {
    eyebrow: 'About Mavio Global',
    heading: 'Four decades of trade, built one relationship at a time.',
    body: 'From a single pepper warehouse on the Kochi waterfront to a multi-category export house serving 40+ countries — the throughline has always been trust, traceability and relationships built to last generations.',
    image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1800&q=80',
  },
  visionMission: {
    vision: {
      title: 'Vision',
      body: 'To be the most trusted name in traceable agricultural and specialty exports from India — where every shipment can be traced back to the hands that grew it.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=80',
    },
    mission: {
      title: 'Mission',
      body: 'To connect Indian farms and processors directly with global buyers through transparent sourcing, rigorous quality control, and export logistics that never leave a customer guessing.',
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=80',
    },
  },
  milestones: [
    { year: '1987', title: 'Founded in Kochi', description: 'Started as a single-warehouse pepper trading desk on the Kochi waterfront.' },
    { year: '1998', title: 'Whole spice expansion', description: 'Added cardamom, turmeric and chilli to the export line, alongside pepper.' },
    { year: '2005', title: 'Seafood division opens', description: 'MPEDA certification secured; began exporting shrimp and marine produce.' },
    { year: '2012', title: 'Tuticorin operations', description: 'Opened a second port operation and entered Middle East markets directly.' },
    { year: '2018', title: 'Specialty chemicals', description: 'Launched a REACH & ISO-certified chemicals export division.' },
    { year: '2023', title: '40+ export markets', description: 'Crossed 40 countries served with full lot-level traceability rolled out.' },
    { year: 'Today', title: 'Multi-category export house', description: '50+ direct farm partnerships across spices, seafood, produce and chemicals.' },
  ],
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

export const partnerPage = {
  hero: {
    eyebrow: 'Partner With Us',
    heading: 'Partner with a team that treats every shipment like its own.',
    subheading:
      'Whether you’re sourcing export-grade produce or looking for a buyer who pays on time and communicates clearly — Mavio Global has been building those relationships since 1987.',
    image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Container cranes loading freight at a busy port',
  },
  competitiveAdvantage: {
    heading: 'Our competitive advantage',
    subheading: 'What sets us apart from other trading houses and brokers.',
    items: [
      {
        icon: 'Sprout',
        title: 'Farm-direct sourcing',
        description: 'No layers of middlemen between origin and export — pricing and quality stay honest.',
      },
      {
        icon: 'ShieldCheck',
        title: 'In-house quality control',
        description: 'Every lot is tested and graded in our own labs before it leaves the warehouse.',
      },
      {
        icon: 'Timer',
        title: 'On-time, every time',
        description: 'Consistent lead times and proactive updates — the reason buyers renew year after year.',
      },
      {
        icon: 'Handshake',
        title: 'Long-term relationships',
        description: 'We build multi-year partnerships with farms and buyers, not one-off transactions.',
      },
    ],
  },
  industries: {
    heading: 'Industries we’ve collaborated with',
    subheading: 'Sector coverage across the global food and specialty trade landscape.',
    items: [
      { icon: 'UtensilsCrossed', name: 'Food & Beverage Retail', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Building2', name: 'Hospitality & Foodservice', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Pill', name: 'Pharmaceutical & Nutraceutical', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Factory', name: 'Agro Processing', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Ship', name: 'Import Distribution', image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Tag', name: 'Private Label Manufacturing', image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1000&q=80' },
    ],
  },
  commitment: {
    heading: 'Our commitment to every procurement',
    subheading: 'The same service promise, whether it’s your first container or your hundredth.',
    points: [
      { icon: 'ClipboardCheck', title: 'Consistent quality', description: 'Every lot graded against the same standard, shipment after shipment.' },
      { icon: 'MessageCircle', title: 'Transparent communication', description: 'Status updates without having to chase — no black-box logistics.' },
      { icon: 'Truck', title: 'On-time delivery', description: 'Realistic timelines, proactively flagged the moment anything changes.' },
      { icon: 'Headphones', title: 'Dedicated support', description: 'A named point of contact for every account, from quote to delivery.' },
    ],
  },
  cta: {
    buyer: {
      heading: 'Ready to source with confidence?',
      body: 'Talk to our team about your next shipment — sample requests, MOQs and lead times, sorted in one call.',
      primaryCta: { label: 'Request a Quote', to: '/contact' },
    },
    supplier: {
      heading: 'Ready to grow with a long-term partner?',
      body: 'If you grow, process or manufacture export-grade produce, seafood or specialty chemicals, we want to hear from you.',
      primaryCta: { label: 'Become a Supplier', to: '/contact' },
    },
  },
}

export const qualityCompliancePage = {
  hero: {
    eyebrow: 'Quality & Compliance',
    heading: 'Every lot tested, graded and documented before it ships.',
    subheading:
      'Our quality and compliance program is built around one principle: nothing leaves our warehouse without being verified — for the buyers who receive it, and against the standards our suppliers are held to.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Spices being sorted and quality-checked at a grading table',
  },
  qualityCommitments: {
    buyer: {
      heading: 'What buyers can expect',
      points: [
        'Certificate of Analysis issued with every shipment',
        'Lot-level traceability back to the point of origin',
        'Independent third-party lab verification on request',
        'Non-conformances flagged before dispatch, never after',
      ],
    },
    supplier: {
      heading: 'What we expect from suppliers',
      points: [
        'Consistent moisture, purity and grading standards',
        'Full harvest and post-harvest processing records',
        'Compliance with destination-market pesticide residue limits',
        'Advance notice of any quality or supply deviation',
      ],
    },
  },
  qualityAssurance: {
    heading: 'Our quality assurance process',
    subheading: 'Every consignment moves through the same five checkpoints, whether it’s a first order or the hundredth.',
    steps: [
      {
        step: 1,
        label: 'Sample Collection',
        icon: 'TestTubes',
        description: 'Representative samples drawn from every lot at intake, before anything is accepted.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 2,
        label: 'Lab Testing',
        icon: 'FlaskConical',
        description: 'Moisture, purity and contaminant screening carried out in our own labs.',
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 3,
        label: 'Grading',
        icon: 'BarChart3',
        description: 'Sorted and graded against the exact specification each buyer has contracted for.',
        image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 4,
        label: 'Documentation',
        icon: 'FileCheck2',
        description: 'Certificates of analysis and origin prepared and cross-checked per shipment.',
        image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 5,
        label: 'Final Release',
        icon: 'PackageCheck',
        description: 'QC sign-off is required before any lot is cleared for packing and export.',
        image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  inspectionTesting: {
    heading: 'Inspection & testing checkpoints',
    subheading: 'Four checkpoints, one shared standard, applied to every lot regardless of destination.',
    points: [
      { icon: 'Droplets', title: 'Moisture Content', description: 'Checked against category-specific thresholds before grading begins.' },
      { icon: 'FlaskConical', title: 'Purity & Contaminants', description: 'Screened for foreign matter, pesticide residue and adulterants.' },
      { icon: 'Ruler', title: 'Size & Grading', description: 'Sorted to the exact grading specification each buyer contracts for.' },
      { icon: 'PackageCheck', title: 'Packaging Integrity', description: 'Verified food-grade and export-compliant before every lot is sealed.' },
    ],
  },
  complianceDocuments: {
    heading: 'Compliance documents, ready on request',
    subheading: 'Every shipment carries a documentation set matched to the regulations of its destination market.',
    items: [
      { icon: 'FileCheck2', title: 'Certificate of Analysis', description: 'Lot-level lab results issued with every shipment, no exceptions.' },
      { icon: 'Globe', title: 'Certificate of Origin', description: 'Verifying source and eligibility for preferential trade terms.' },
      { icon: 'Leaf', title: 'Phytosanitary Certificate', description: 'Required clearance for plant-based exports at customs.' },
      { icon: 'ShieldCheck', title: 'Compliance Declaration', description: 'Confirms conformity with destination-market food safety law.' },
    ],
  },
}

export const supplyChainVisibilityPage = {
  hero: {
    eyebrow: 'Supply Chain Visibility',
    heading: 'See every shipment the moment it moves.',
    subheading:
      'From the first sample pulled at origin to the container leaving port, Mavio gives buyers and suppliers the same real-time view of where things stand.',
    image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Trucks loading shipping containers at a freight yard',
  },
  journey: {
    heading: 'The end-to-end supply chain journey',
    subheading: 'Full visibility, presented as a timeline — from farm to final delivery.',
  },
  logistics: {
    heading: 'Logistics coordination, tracked in real time',
    subheading: 'Every leg of the journey — port handling, freight booking, customs — coordinated and visible in one place.',
    backgroundImage: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
    origin: 'Kochi, India',
    destination: 'Rotterdam, Netherlands',
  },
  communication: {
    heading: 'Communication throughout the journey',
    subheading: 'No black box — you hear from us at every checkpoint, not just when something goes wrong.',
    touchpoints: [
      { icon: 'FileCheck2', title: 'Order Confirmation', description: 'Written confirmation of specs, pricing and timeline within 24 hours.' },
      { icon: 'ShieldCheck', title: 'QC Sign-off Alert', description: 'Notified the moment a lot clears quality assurance.' },
      { icon: 'Ship', title: 'Shipment Departure', description: 'Booking confirmation and vessel details as soon as cargo is loaded.' },
      { icon: 'PackageCheck', title: 'Delivery Confirmation', description: 'Proof of delivery and final documentation on arrival.' },
    ],
    cta: { label: 'Talk To Our Team', to: '/contact' },
  },
  trust: {
    heading: 'Why businesses trust Mavio',
    subheading: 'The same numbers buyers and suppliers point to when asked why they stayed.',
  },
  documentation: {
    heading: 'Documentation & compliance, without the chase',
    subheading: 'Flip each card for what’s inside — every document is prepared before you have to ask.',
    documents: [
      { icon: 'FileCheck2', title: 'Certificate of Analysis', back: 'Lot-level lab results confirming moisture, purity and grade.' },
      { icon: 'Globe', title: 'Certificate of Origin', back: 'Confirms source for customs and preferential trade terms.' },
      { icon: 'Leaf', title: 'Phytosanitary Certificate', back: 'Required clearance for plant-based exports at destination customs.' },
      { icon: 'ShieldCheck', title: 'Compliance Declaration', back: 'Confirms conformity with destination-market food safety law.' },
    ],
  },
}

export const exportLogisticsPage = {
  process: {
    heading: 'Our export process',
    subheading: 'Scroll to move through every stage between booking and final delivery.',
    steps: [
      {
        step: 1,
        label: 'Booking',
        icon: 'ClipboardList',
        description: 'Container and vessel space confirmed against your shipment window.',
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 2,
        label: 'Customs Clearance',
        icon: 'FileCheck2',
        description: 'Export documentation filed and cleared before cargo reaches port.',
        image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 3,
        label: 'Port Handling',
        icon: 'Warehouse',
        description: 'Container staged, inspected and loaded under our supervision.',
        image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 4,
        label: 'Vessel Loading',
        icon: 'Ship',
        description: 'Loaded onto the booked vessel, tracked from the moment it departs.',
        image: 'https://images.unsplash.com/photo-1759272840538-ae4b07214c71?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 5,
        label: 'Transit',
        icon: 'Navigation',
        description: 'Live transit status shared until the vessel reaches the destination port.',
        image: 'https://images.unsplash.com/photo-1700777685830-f501e67260e6?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 6,
        label: 'Discharge & Delivery',
        icon: 'PackageCheck',
        description: 'Customs cleared at destination and delivered to the final consignee.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  capabilities: {
    heading: 'Logistics capabilities',
    subheading: 'One team coordinating every leg of the journey.',
    items: [
      { icon: 'ClipboardList', label: 'Container Booking' },
      { icon: 'FileCheck2', label: 'Customs Clearance' },
      { icon: 'Ship', label: 'Freight Forwarding' },
      { icon: 'Warehouse', label: 'Warehousing' },
      { icon: 'Snowflake', label: 'Cold Chain Handling' },
      { icon: 'Navigation', label: 'Real-Time Tracking' },
      { icon: 'Globe', label: 'Multi-Port Access' },
      { icon: 'PackageCheck', label: 'Final-Mile Delivery' },
    ],
  },
  documentation: {
    heading: 'Documentation & compliance',
    subheading: 'Every export document prepared, cross-checked and filed before your cargo reaches the port.',
    documents: [
      { icon: 'FileCheck2', title: 'Bill of Lading', description: 'Issued and verified against booking details before vessel departure.' },
      { icon: 'Globe', title: 'Certificate of Origin', description: 'Prepared for customs and preferential trade-tariff eligibility.' },
      { icon: 'ShieldCheck', title: 'Export Declaration', description: 'Filed with customs authorities ahead of the shipping cutoff.' },
      { icon: 'Leaf', title: 'Phytosanitary Certificate', description: 'Required clearance for plant-based cargo at destination customs.' },
    ],
  },
  trust: {
    heading: 'Why businesses trust our logistics',
    subheading: 'The numbers behind every shipment we move.',
    stats: [
      { value: '2', suffix: '', label: 'Export Ports' },
      { value: '8', suffix: '+', label: 'Shipping Line Partners' },
      { value: '40', suffix: '+', label: 'Countries Served' },
      { value: '24', suffix: 'hr', label: 'Avg. Documentation Turnaround' },
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

export const accreditationsPage = {
  commitment: {
    heading: 'Our commitment to global standards',
    body: 'Every certification we hold exists for a reason — to give buyers and regulators a documented, third-party-verified answer to "how do you know this is safe?" We renew and audit against each standard on schedule, not just when a buyer asks.',
  },
  benefits: {
    heading: 'What these certifications mean for you',
    points: [
      'Fewer customs delays — documentation is prepared and matched to destination-market requirements in advance.',
      'Consistent quality — every certification ties back to a testing or process standard we hold ourselves to on every lot.',
      'Lower audit burden — most retailer and import compliance checks are already covered by our existing certifications.',
      'A verifiable paper trail — every certificate is lot-traceable, not a blanket claim.',
    ],
  },
  framework: {
    heading: 'Our quality & compliance framework',
    body: 'Certifications are the outcome of a framework, not the framework itself. Every lot moves through the same sequence — sampling, in-house lab testing, grading against the buyer\'s specification, and document preparation — before it is cleared for export. The certifications on this page are the external audits that verify that framework is actually being followed.',
  },
  ethical: {
    heading: 'Commitment to ethical trade',
    body: 'Certification alone doesn\'t guarantee a fair supply chain — the relationships behind it do. Every farm and processing partner is paid on agreed terms, on time, with pricing set before procurement rather than negotiated down after harvest.',
  },
  grid: {
    heading: 'Our accreditations',
    subheading: 'Icon-badge grid — one card per certification, each with a short description of what it verifies.',
    items: [
      { icon: 'ShieldCheck', title: 'Spice Board of India', description: 'Registered exporter recognized by India\'s apex spice trade authority.' },
      { icon: 'BadgeCheck', title: 'ISO 22000', description: 'Certified food safety management system across our facilities.' },
      { icon: 'FileCheck2', title: 'FSSAI', description: 'Licensed under India\'s Food Safety and Standards Authority.' },
      { icon: 'Globe', title: 'APEDA Registered', description: 'Registered with the Agricultural & Processed Food Products Export Development Authority.' },
      { icon: 'Anchor', title: 'MPEDA Certified', description: 'Certified for seafood and marine product exports.' },
      { icon: 'FlaskConical', title: 'REACH Compliant', description: 'Meets EU chemical safety regulations for specialty exports.' },
      { icon: 'ClipboardCheck', title: 'HACCP', description: 'Hazard Analysis and Critical Control Points certified processing.' },
      { icon: 'Leaf', title: 'Organic (NPOP)', description: 'Certified under India\'s National Programme for Organic Production.' },
    ],
  },
}

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

export const faqPage = {
  hero: {
    heading: 'Answers for buyers and suppliers',
    caption: 'Choose your role below — the questions update to match what matters most to you.',
  },
  buyer: faqs,
  supplier: [
    {
      q: 'How do I become an approved supplier for Mavio Global?',
      a: 'Send us your product category, capacity and current certifications through the Partner With Us form. Our sourcing team reviews every application and follows up for a site visit before onboarding.',
    },
    {
      q: 'What quality standards do I need to meet before onboarding?',
      a: 'Consistent moisture, purity and grading standards for your category, plus full harvest and post-harvest processing records. We run a joint quality audit before the first consignment.',
    },
    {
      q: 'How and when do I get paid for a consignment?',
      a: 'Payment terms are agreed before the first order and held to on every consignment after — most suppliers are settled within 7–14 days of delivery and quality sign-off.',
    },
    {
      q: 'Do you offer long-term contracts or only spot purchases?',
      a: 'We prefer long-term partnerships over one-off purchases. Most of our farm and processor relationships run on multi-season or multi-year agreements with pre-agreed volumes.',
    },
    {
      q: 'What support do you provide beyond procurement?',
      a: 'Agronomic and post-harvest guidance from our field team, plus advance notice of quality or documentation requirements so nothing holds up a shipment on your end.',
    },
  ],
}

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

export const downloadCentrePage = {
  hero: {
    heading: 'Find the resource you need',
    subheading: 'Catalogs, certifications, guides and templates — search or browse by category.',
    searchPlaceholder: 'Search resources…',
  },
  featured: [
    { title: 'Company Profile 2026', description: 'Full company overview, capabilities and certifications in one PDF.', icon: 'FileText', fileType: 'PDF · 2.1 MB' },
    { title: 'Buyer’s Sourcing Guide', description: 'MOQs, lead times and the sourcing process end to end.', icon: 'BookOpen', fileType: 'PDF · 1.4 MB' },
    { title: 'Certifications Pack', description: 'All 8 current certifications and accreditation documents.', icon: 'ShieldCheck', fileType: 'ZIP · 4.8 MB' },
  ],
  categories: [
    {
      title: 'Product Catalogs',
      items: [
        { title: 'Spices & Whole Spices Catalog', fileType: 'PDF · 3.2 MB' },
        { title: 'Seafood & Marine Exports Catalog', fileType: 'PDF · 2.8 MB' },
        { title: 'Fresh Produce Catalog', fileType: 'PDF · 1.9 MB' },
        { title: 'Specialty Chemicals Catalog', fileType: 'PDF · 2.2 MB' },
        { title: 'Cashew & Dry Fruits Catalog', fileType: 'PDF · 1.7 MB' },
        { title: 'Rice & Grains Catalog', fileType: 'PDF · 1.5 MB' },
      ],
    },
    {
      title: 'Export Documentation Resources',
      items: [
        { title: 'Certificate of Origin — Sample & Guide', fileType: 'PDF · 0.6 MB' },
        { title: 'Bill of Lading Explained', fileType: 'PDF · 0.8 MB' },
        { title: 'Phytosanitary Certificate Overview', fileType: 'PDF · 0.5 MB' },
        { title: 'Export Declaration Checklist', fileType: 'PDF · 0.4 MB' },
      ],
    },
    {
      title: 'Supplier Resources',
      items: [
        { title: 'Supplier Onboarding Checklist', fileType: 'PDF · 0.5 MB' },
        { title: 'Quality & Grading Standards', fileType: 'PDF · 1.1 MB' },
        { title: 'Harvest Documentation Template', fileType: 'DOCX · 0.3 MB' },
      ],
    },
    {
      title: 'Buyer Resources',
      items: [
        { title: 'Sample Request Form', fileType: 'PDF · 0.3 MB' },
        { title: 'Import Compliance Checklist', fileType: 'PDF · 0.5 MB' },
        { title: 'Buyer Onboarding Guide', fileType: 'PDF · 0.9 MB' },
      ],
    },
    {
      title: 'Company Resources',
      items: [
        { title: 'Company Profile', fileType: 'PDF · 2.1 MB' },
        { title: 'Sustainability Report 2025', fileType: 'PDF · 1.6 MB' },
        { title: 'Accreditations & Certifications Pack', fileType: 'ZIP · 4.8 MB' },
      ],
    },
  ],
  cta: {
    heading: 'Need a specific document?',
    body: 'If it’s not listed here, our team can put it together — certifications, lab reports or a custom spec sheet.',
    buttonLabel: 'Contact Us',
  },
}

export const contactPage = {
  cards: [
    { icon: 'Phone', label: 'Call Us', value: '+91 484 000 0000', href: 'tel:+914840000000' },
    { icon: 'Mail', label: 'Email', value: 'hello@mavioglobal.com', href: 'mailto:hello@mavioglobal.com' },
    { icon: 'Linkedin', label: 'LinkedIn', value: '@mavioglobal', href: 'https://linkedin.com' },
    { icon: 'MessageCircle', label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/914840000000' },
  ],
  flow: [
    { step: 'Submit', description: 'Fill out the role-based form with your requirement.' },
    { step: 'Review', description: 'Our team reviews and routes it to the right specialist.' },
    { step: 'We Reach Out', description: 'You hear back within one business day.' },
  ],
  support: {
    heading: 'Our global support',
    body: 'Buyers and suppliers across 40+ countries — our team responds within one business day, regardless of time zone.',
  },
}

export const sustainabilityPage = {
  pillars: {
    heading: 'Our sustainability pillars',
    subheading: 'Core commitments, presented as a set.',
    items: [
      { icon: 'Sprout', label: 'Farm-Level Sustainability' },
      { icon: 'HandHeart', label: 'Fair & Ethical Sourcing' },
      { icon: 'Truck', label: 'Lower-Carbon Logistics' },
      { icon: 'Recycle', label: 'Sustainable Packaging' },
      { icon: 'Droplets', label: 'Water & Soil Stewardship' },
      { icon: 'Users', label: 'Community Investment' },
    ],
  },
  journey: {
    heading: 'Our ongoing journey',
    subheading: 'Progress narrative over time.',
    milestones: [
      { year: '2015', title: 'Organic certification push', description: 'Began supporting farm partners through NPOP organic certification.' },
      { year: '2019', title: 'Biodegradable packaging', description: 'Shifted spice packaging lines to biodegradable and recyclable materials.' },
      { year: '2022', title: 'Lower-carbon logistics pilot', description: 'Piloted consolidated freight routing to cut transport emissions per shipment.' },
      { year: '2024', title: 'Community reinvestment program', description: 'Launched a reinvestment fund for farm-community infrastructure.' },
      { year: 'Today', title: 'Regenerative farming partnerships', description: 'Expanding soil-health and regenerative practices across partner farms.' },
    ],
  },
}
