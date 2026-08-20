// Centralized site content. Facts marked (real) come from Mavio Global's public
// site; everything else is placeholder/representative copy for this rebuild.

export const brand = {
  name: 'Mavio Global',
  tagline: "India's Leading and Trusted Gateway to Global Markets",
  founded: 1987, // (real)
  hq: 'Kochi, Kerala', // (real)
  ports: ['Kochi', 'Tuticorin'], // (real)
  marketsCount: '25+',
}

export const secondaryHeader = {
  countriesText: 'Partnered with 25+ Countries',
  usp: '“See Your Trade. Every Step.”',
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
      { label: 'Quality & Compliance', to: '/capabilities/quality-compliance' },
      { label: 'Supply Chain Visibility', to: '/capabilities/supply-chain-visibility' },
      { label: 'Export & Logistics', to: '/capabilities/export-logistics' },
      { label: 'Sustainability', to: '/sustainability' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'FAQ', to: '/resources/faq' },
      { label: 'Accreditations & Certifications', to: '/resources/accreditations' },
      { label: 'Download Centre', to: '/resources/download-centre' },
      { label: 'Privacy and Policy', to: '/resources/privacy-policy' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Mavio Global · Est. 1987',
  heading: "India's Leading and Trusted Gateway to Global Markets",
  subheading:
    'Mavio Global connects international trade, delivering any commodity to every port through an integrated network with verified testing and on-time transit.',
  points: ['100% Live Shipment Tracking', 'Strict Lab Quality Testing', 'Unlimited Product Sourcing Capacity'],
  primaryCta: { label: 'Explore Our Products', to: '/products' },
  secondaryCta: { label: 'Partner With Us', to: '/partner-with-us' },
  images: [
    {
      src: 'https://images.unsplash.com/photo-1759272840538-ae4b07214c71?auto=format&fit=crop&w=2200&q=80',
      alt: 'Shipping containers stacked at port during golden hour',
    },
    {
      src: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
      alt: 'Container cranes loading freight at a busy port',
    },
    {
      src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2200&q=80',
      alt: 'Sun-dried spices at a sorting yard',
    },
    {
      src: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=2200&q=80',
      alt: 'Cargo ship docked at a busy port terminal',
    },
  ],
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
  { value: '100', suffix: '%', label: 'Live Traceability' },
  { value: '50', suffix: '+', label: 'Port Locations' },
  { value: '25', suffix: '+', label: 'Countries Served' },
  { value: '15', suffix: '+', label: 'Years of Experience' },
]

export const productCategories = [
  {
    slug: 'spices',
    name: 'Spices',
    tagline: 'Checked, handled and ready to move.',
    description: 'Pepper, cardamom, turmeric, chilli, cloves, nutmeg and mace.',
    color: 'gold-deep',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'seafood',
    name: 'Seafood & Fisheries',
    tagline: 'Cold-chain integrity, dock to deck.',
    description: 'Shrimp, prawn and marine exports handled under strict cold-chain protocol.',
    color: 'navy',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'fresh-produce',
    name: 'Agri-Commodities',
    tagline: 'Farm-graded, freight-ready.',
    description: 'Grains, pulses and fresh produce sourced and graded at origin.',
    color: 'bay',
    image:
      'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'chemicals',
    name: 'Industrial Chemicals',
    tagline: 'Compliance built into every drum.',
    description: 'Industrial and specialty chemicals shipped to certified specification.',
    color: 'paprika',
    image:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'minerals',
    name: 'Minerals',
    tagline: 'Sourced, graded and shipped at scale.',
    description: 'Bulk mineral commodities handled from origin through to port delivery.',
    color: 'gold-deep',
    image:
      'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'industrial-metals',
    name: 'Industrial Metals',
    tagline: 'Trade-grade metals, moved reliably.',
    description: 'Industrial metal commodities sourced and exported to specification.',
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
    description: 'Products from trusted sources.',
    longDescription:
      'Direct procurement from primary origins. We source commodities directly from primary producers and verified origin suppliers. This direct approach eliminates unnecessary intermediaries, securing optimal pricing and consistent supply quality.',
    image:
      'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 2,
    label: 'Sorting & Grading',
    icon: 'Package',
    description: 'Sorted by size, grade, and quality.',
    longDescription:
      'Measured and separated by specification. All raw materials undergo strict physical assessment, measurement, and classification in accordance with market standards. This ensures every batch precisely matches the exact grade and specification required by our buyers.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 3,
    label: 'Quality & Lab Testing',
    icon: 'ShieldCheck',
    description: 'Checked for quality and safety.',
    longDescription:
      'Verified for safety and compliance. Products undergo rigorous laboratory testing and safety inspections to verify purity and physical parameters. Every batch is certified to satisfy international quality protocols and import market standards.',
    image:
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 4,
    label: 'Secure Packaging',
    icon: 'PackageCheck',
    description: 'Packed safely for the journey.',
    longDescription:
      'Packed safely for global transit. Goods are packaged using export-grade, durable materials tailored to the specific cargo type. This protects the product integrity against moisture, handling, and environmental exposure during long-distance transit.',
    image:
      'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: 5,
    label: 'Freight & Shipping',
    icon: 'Truck',
    description: 'Tracked until it reaches the port.',
    longDescription:
      'Tracked transport to destination port. Logistics operations are fully managed and monitored from the origin facility to the final port of entry. Continuous shipment tracking provides clear visibility, scheduling predictability, and timely delivery.',
    image:
      'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80',
  },
]

export const traceability = {
  heading: 'Every Move Stays Tracked',
  description:
    'Once a shipment leaves, the waiting begins. We keep you close to every movement, so you always know what’s happening from origin to destination. Every step of the journey stays visible, so everyone involved can know where your delivery is and what’s happening next — all partners, teams, and customers can access live updates without constantly chasing information.',
  roles: [
    { role: 'Buyer', description: 'Full visibility into the procurement they’re involved in — lot origin, grading and shipment status.' },
    { role: 'Seller', description: 'Clear terms, transparent quality feedback and on-time settlement for every consignment.' },
    { role: 'Logistics', description: 'Consolidated documentation and live shipment status across every port and carrier.' },
  ],
}

export const about = {
  eyebrow: 'About',
  heading: 'We didn’t start with products. We started with a',
  headingAccent: 'problem.',
  body: 'Across global sourcing, too much still depends on assumptions — trusting the quality, waiting for updates, and hoping every step stays on schedule. When one part falls out of place, the entire process becomes uncertain and difficult to manage. Mavio Global was built to bring more certainty to that journey — with better sourcing, verified quality, clear visibility, and a more connected way of moving products from origin to destination.',
  image:
    'https://images.unsplash.com/photo-1777732786164-1f6e359e69ca?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Sacks of spices and bulk goods at a market',
  secondaryImage:
    'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=800&q=80',
  secondaryImageAlt: 'Container cranes loading freight at a busy port',
  highlights: [
    '100% Live Shipment Tracking',
    'Strict Lab Quality Testing',
    'Unlimited Product Sourcing',
    'Verified Global Compliance',
  ],
}

export const aboutPage = {
  hero: {
    eyebrow: 'The Story Behind Mavio',
    heading: 'We didn’t start with products. We started with a problem.',
    body: 'Traditional import-export frameworks were built to move goods, but not always to provide the clarity and consistency that modern procurement demands. Gaps in communication, changing standards, and short-term priorities could make reliable trade difficult to sustain, leaving quality-focused producers with limited visibility and fewer opportunities to build lasting global relationships. Mavio Global was built to eliminate this gap. As a direct supply partner, we deliver lab-tested quality paired with live, step-by-step tracking right to your destination port. Every cargo we handle arrives fully verified and on schedule. While we take complete ownership of our supply chain, we actively open doors for quality-focused producers who have exceptional products and want a transparent pathway into serious global markets.',
    image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1800&q=80',
  },
  visionMission: {
    vision: {
      title: 'Vision',
      body: 'Our vision is to shape a borderless future for global trade driven by integrity and consistent performance. We aspire to make international procurement completely hassle-free and dependable across every market we operate in. We exist to elevate how business is conducted worldwide.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=80',
    },
    mission: {
      title: 'Mission',
      body: 'Our mission is to make global procurement simpler, more reliable, and more transparent — taking responsibility for the journey from where a product comes from to where it arrives, while keeping sourcing, quality, and delivery connected so the right products reach the right markets with greater trust and confidence on both sides.',
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
    heading: 'Why Source Through Mavio',
    points: [
      'Quality Starts at Source: Every product begins with trusted producers, carefully selected for quality and consistency.',
      'Every Procurement Checked: Every procurement is carefully reviewed to meet the required quality and standards before it moves forward.',
      'Frictionless Logistics: From documentation to delivery, we handle the details and keep you informed as your shipment moves.',
      'Enduring Business Continuity: We help maintain a dependable supply, so you can keep your operations moving with confidence and fewer disruptions.',
      'Long-Term Partnership: Build lasting partnerships that support your business goals and create value for the long term.',
    ],
  },
  supplier: {
    heading: 'Why Partner With Mavio',
    points: [
      'Global Market Reach: We open the gateway to established markets and growing international demand for your products.',
      'Long-Term Brand Elevation: Showcase your product quality to international markets that value premium standards highly.',
      'Hassle-Free Shipping: Leave the cross-border logistics to us while you focus on what you do best.',
      'Seamless Market Entry: Entering new markets brings complexity; we provide the support to make international trade easier.',
      'Every Step Visible: Follow every order with timely updates, from dispatch through final delivery, without constant follow-ups.',
    ],
  },
}

export const partnerPage = {
  hero: {
    eyebrow: 'Partner With Us',
    heading: 'Partner with us',
    subheading: 'Select your stream to see how we build long-term value together.',
    image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Container cranes loading freight at a busy port',
  },
  whyPartner: {
    buyer: {
      heading: 'Why Partner With Mavio',
      paragraphs: [
        'International sourcing usually brings constant worries—bad product quality, late shipments, rising costs, and zero updates when things go wrong. Mavio changes this by working directly on the ground. We check product quality before anything gets loaded, lock in fair pricing, track shipments in real time, ensure proper fumigation and moisture control, and take full responsibility for the entire journey from start to finish.',
        'You get exact product standards and on-time deliveries without the stress of managing overseas trade yourself.',
      ],
    },
    supplier: {
      heading: 'Why Partner With Mavio',
      paragraphs: [
        'Reaching international markets can sometimes be challenging, especially around logistics, payment terms, and negotiating from a distance. Maintaining regular orders, market access, and communication on their own takes focus away from daily operations. Mavio simplifies this entire journey by connecting your production directly with active global markets, taking care of export logistics, and ensuring clear communication from day one.',
        'You get steady orders, managed shipping, and more predictable growth, giving you the confidence to scale without added pressure.',
      ],
    },
  },
  competitiveAdvantage: {
    heading: 'Our competitive advantage',
    subheading: 'What sets us apart from other trading houses and brokers.',
    items: [
      {
        icon: 'ShieldCheck',
        title: 'On-Ground Quality Assurance',
        description: 'We check quality before loading, so the work put into your product is protected all the way to delivery.',
      },
      {
        icon: 'Timer',
        title: 'Cost & Schedule Stability',
        description: 'Clear pricing and real-time tracking help you avoid unexpected costs, delays, and uncertainty along the way.',
      },
      {
        icon: 'Handshake',
        title: 'Full End-to-End Ownership',
        description: 'From paperwork and customs to shipping, we handle the details so you don’t have to carry the burden.',
      },
      {
        icon: 'Sprout',
        title: 'Friction-Free Trade Growth',
        description: 'Reach global markets and grow with confidence, while we take care of the complexities behind every shipment.',
      },
    ],
  },
  industries: {
    eyebrow: 'Sector Coverage',
    heading: 'Industries we’ve collaborated with',
    subheading: 'We have no product boundaries. We source and export any item to match your exact trade requirements.',
    cta: { label: 'See Our Capabilities', to: '/capabilities/export-logistics' },
    items: [
      { icon: 'UtensilsCrossed', tag: 'Retail Sector', name: 'Food & Beverage Retail', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Building2', tag: 'Foodservice', name: 'Hospitality & Foodservice', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Pill', tag: 'Health & Wellness', name: 'Pharmaceutical & Nutraceutical', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Factory', tag: 'Agro Industry', name: 'Agro Processing', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Ship', tag: 'Distribution', name: 'Import Distribution', image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80' },
      { icon: 'Tag', tag: 'Manufacturing', name: 'Private Label Manufacturing', image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1000&q=80' },
    ],
  },
  commitment: {
    heading: 'Our commitment to every procurement',
    buyer: {
      subheading: 'What every buyer can count on, from the first inquiry to final delivery.',
      points: [
        { icon: 'ClipboardCheck', title: 'Right Product, Right Timing', description: 'Every requirement starts with finding the right product, quality, and timing.' },
        { icon: 'MessageCircle', title: 'Understood Before It Moves', description: 'We take the time to understand what is needed before anything moves forward.' },
        { icon: 'Truck', title: 'Simple, Visible Steps', description: 'From quality checks to clear communication, we keep every step simple and visible.' },
        { icon: 'Headphones', title: 'Delivered As Promised', description: 'Because when something is trusted to us, we make sure it reaches its destination as promised.' },
      ],
    },
    supplier: {
      subheading: 'What every supplier can count on, from the first conversation onward.',
      points: [
        { icon: 'ClipboardCheck', title: 'Every Product Has Value', description: 'Every product has value, but finding the right market for it can take time.' },
        { icon: 'MessageCircle', title: 'Understanding What Fits Best', description: 'We work closely to understand what is available and where it fits best.' },
        { icon: 'Truck', title: 'Clear, Steady Coordination', description: 'With clear requirements, regular communication, and steady coordination, we make the process easier.' },
        { icon: 'Headphones', title: 'Beyond a Single Order', description: 'Because a good opportunity should not end with just one order — it should lead to a relationship that grows.' },
      ],
    },
    complexWay: {
      label: 'The Complex Way (Without Mavio Global)',
      steps: [
        { n: 1, title: 'Vendor Sourcing & Verification' },
        { n: 2, title: 'Price & Term Negotiation' },
        { n: 3, title: 'Quality & Factory Audit' },
        { n: 4, title: 'Export Documentation' },
        { n: 5, title: 'Cross-Border Logistics' },
        { n: 6, title: 'Post-Delivery Assurance' },
      ],
    },
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
    heading: 'Quality & Compliance',
    subheading:
      'From the first check to the final document, every detail is handled to keep quality, safety, and requirements on track.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Spices being sorted and quality-checked at a grading table',
  },
  qualityCommitments: {
    heading: 'Our Quality Commitments',
    body: 'Every product has its own specifications, and every market has its own requirements. We understand both before we make any commitment, ensuring quality expectations are clear from the start. From product selection to final preparation, we maintain consistent quality at every stage. So every requirement is understood, followed, and delivered with confidence.',
    image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Product specifications being checked and documented',
  },
  qualityAssurance: {
    heading: 'Quality Assurance',
    body: 'What reaches you matters, so we take every step to make sure it meets the standards you expect. We ensure that every procurement goes through constant checks — from product specifications, fumigation, and moisture control to handling, packaging, and container hygiene. Regular checks help us identify concerns early and maintain consistency throughout the journey. So every shipment reaches you with the quality and care you expect.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Fumigation and quality control check on packaged goods',
  },
  inspectionTesting: {
    heading: 'Inspection & Testing',
    body: 'Every product receives a thorough inspection before it is approved. We test each product against agreed specifications, quality standards, and destination requirements. Key parameters such as quality, safety, composition, and consistency are carefully assessed. Only products that meet the required standards move forward.',
    image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Inspector testing and verifying product samples before approval',
  },
  complianceDocuments: {
    heading: 'Compliance Documents',
    subheading:
      'Every market has its own rules. We make sure the right documents travel with the product, so requirements are met before the journey begins.',
    closing: 'We prepare every piece of paperwork accurately so your shipments move through ports without delays.',
    items: [
      { icon: 'FileCheck2', title: 'Certificate of Origin (COO)', description: 'Verifying source and eligibility for preferential trade terms.' },
      { icon: 'Leaf', title: 'Phytosanitary Certificate', description: 'Required clearance for plant-based exports at customs.' },
      { icon: 'ShieldCheck', title: 'UAE Halal Certification', description: 'Required clearance for Halal-regulated destination markets.' },
      { icon: 'FileCheck2', title: 'Health & Food Safety Certificate', description: 'Confirms conformity with destination-market food safety law.' },
      { icon: 'Globe', title: 'Bill of Lading (B/L)', description: 'Issued and verified against booking details before departure.' },
      { icon: 'FlaskConical', title: 'Certificate of Analysis (CoA)', description: 'Lot-level lab results issued with every shipment, no exceptions.' },
      { icon: 'ShieldCheck', title: 'Fumigation Certificate', description: 'Confirms fumigation carried out to protocol before dispatch.' },
      { icon: 'FileCheck2', title: 'Pre-Shipment Inspection Report', description: 'Independent verification completed before cargo departs.' },
    ],
  },
}

export const supplyChainVisibilityPage = {
  hero: {
    eyebrow: 'Supply Chain Visibility',
    heading: 'Total Operational Governance, End-to-End Visibility',
    subheading:
      'Integrating buyers, suppliers, and transport networks into one seamless setup — with full ownership of backend logistics.',
    image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Trucks loading shipping containers at a freight yard',
  },
  intro: {
    heading: 'Trade with absolute peace of mind',
    body:
      'Global trade without real-time visibility leads to operational bottlenecks, unrecorded fees, and broken communication lines. Disconnected documentation and uncoordinated logistics handoffs ultimately weaken partner trust and compromise schedule reliability. Mavio ensures total operational governance by providing end-to-end visibility throughout the entire shipping lifecycle — integrating buyers, suppliers, and transport networks into one seamless setup, and taking full ownership of backend logistics so you can trade with absolute peace of mind.',
    image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Warehouse operations being coordinated and tracked',
  },
  journey: {
    heading: 'End-to-End Supply Chain Journey',
    subheading: 'Full visibility, presented as a timeline — from sourcing to final delivery.',
  },
  logistics: {
    heading: 'Logistics Coordination',
    subheading:
      'Managing international shipments requires constant coordination among multiple vendors, customs agents, and shipping companies, which often leads to administrative friction and transit bottlenecks. A single misstep in regulatory paperwork or carrier scheduling can delay your entire supply chain. Mavio serves as your centralized coordinator for all customs clearance, inland transport, and ocean freight operations. Our team manages every stage of logistics execution, ensuring your cargo moves reliably and without operational disruption.',
    backgroundImage: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
    origin: 'Kochi, India',
    destination: 'Rotterdam, Netherlands',
  },
  communication: {
    heading: 'Communication Throughout The Journey',
    subheading:
      'Logistics operations become significantly more complex when communication breakdowns occur during transit. When status inquiries go unanswered, businesses are left guessing about the actual location and progress of their cargo. Mavio eliminates this uncertainty by serving as a responsive, always-available coordination hub. We proactively track every milestone on the ground and respond quickly to your messages, keeping your business fully informed and supported from pickup to final delivery.',
    touchpoints: [
      { icon: 'FileCheck2', title: 'Order Confirmation', description: 'Written confirmation of specs, pricing and timeline within 24 hours.' },
      { icon: 'ShieldCheck', title: 'QC Sign-off Alert', description: 'Notified the moment a lot clears quality assurance.' },
      { icon: 'Ship', title: 'Shipment Departure', description: 'Booking confirmation and vessel details as soon as cargo is loaded.' },
      { icon: 'PackageCheck', title: 'Delivery Confirmation', description: 'Proof of delivery and final documentation on arrival.' },
    ],
    cta: { label: 'Talk To Our Team', to: '/contact' },
  },
  trust: {
    heading: 'Why Businesses Trust Mavio',
    subheading:
      'At Mavio, trust is built on absolute operational clarity, effortless logistics, and strong commercial partnerships. We provide buyers with rigorous quality assurance at the point of origin, continuous route monitoring, and straightforward business terms. At the same time, we give suppliers direct access to international markets, eliminating trade barriers and providing end-to-end visibility throughout the shipping lifecycle. By handling the operational heavy lifting and maintaining open, real-time communication, Mavio creates a frictionless trade environment where both buyers and suppliers can scale with complete confidence.',
  },
  documentation: {
    heading: 'Documentation & Compliance',
    subheading:
      'Regulatory oversights and documentation errors can easily stall shipments and lead to expensive demurrage fees. Mavio takes complete ownership of your compliance lifecycle, preparing and auditing all essential commercial invoices, quality certificates, and import-export permits before cargo movement begins. Our proactive approach ensures that every transaction fully satisfies local and international trade laws, giving buyers and suppliers total confidence in a compliant, delay-free supply chain.',
    documents: [
      { icon: 'FileCheck2', title: 'Certificate of Analysis', back: 'Lot-level lab results confirming moisture, purity and grade.' },
      { icon: 'Globe', title: 'Certificate of Origin', back: 'Confirms source for customs and preferential trade terms.' },
      { icon: 'Leaf', title: 'Phytosanitary Certificate', back: 'Required clearance for plant-based exports at destination customs.' },
      { icon: 'ShieldCheck', title: 'Compliance Declaration', back: 'Confirms conformity with destination-market food safety law.' },
    ],
  },
}

export const exportLogisticsPage = {
  hero: {
    eyebrow: 'Export & Logistics',
    heading: 'Export & Logistics',
    subheading:
      'From booking to final delivery, every shipment is coordinated, tracked, and moved on schedule across every mode of transport.',
    image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Container cranes loading freight at a busy port',
  },
  process: {
    heading: 'Our Export Process',
    subheading: 'Every stage between booking and final delivery, coordinated end to end.',
    steps: [
      {
        step: 1,
        label: 'Requirement Confirmation',
        icon: 'ClipboardList',
        description: 'Confirm product specifications, quantities, timelines, and destination requirements before booking.',
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 2,
        label: 'Product Preparation',
        icon: 'PackageCheck',
        description: 'Prepare, inspect, pack, and label goods according to export requirements.',
        image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 3,
        label: 'Export Documentation',
        icon: 'FileCheck2',
        description: 'Complete invoices, packing lists, certificates, and customs documents for shipment.',
        image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 4,
        label: 'Customs & Dispatch',
        icon: 'Warehouse',
        description: 'Coordinate customs clearance, carrier handover, and final shipment departure smoothly.',
        image: 'https://images.unsplash.com/photo-1759272840538-ae4b07214c71?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 5,
        label: 'Freight Booking',
        icon: 'Ship',
        description: 'We secure ideal shipping routes and schedule timely vessel loading.',
        image: 'https://images.unsplash.com/photo-1700777685830-f501e67260e6?auto=format&fit=crop&w=1000&q=80',
      },
      {
        step: 6,
        label: 'Shipment Tracking',
        icon: 'Navigation',
        description: 'Track shipment progress and share updates until successful delivery.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  capabilities: {
    heading: 'Logistics Capabilities',
    subheading: 'The right transport and container setup for every shipment.',
    items: [
      { icon: 'Ship', label: 'Sea Freight', description: 'Handles large shipments with planned schedules for cost-efficient international transport.' },
      { icon: 'Plane', label: 'Air Freight', description: 'Manages time-sensitive shipments requiring faster movement across international destinations.' },
      { icon: 'Shuffle', label: 'Multimodal Transport', description: 'Combines different transport modes when routes require flexible logistics planning.' },
      { icon: 'Boxes', label: 'Container Options', description: 'The right container for every type of cargo. Choose from 20FT, 40FT, and 40FT High Cube containers, with FCL, LCL, and temperature-controlled options available when needed.' },
    ],
  },
  documentation: {
    heading: 'Documentation & Compliance',
    subheading:
      'Every international shipment comes with specific documentation and compliance requirements. We coordinate the essential paperwork across commercial, customs, shipping, origin, quality, and product-specific requirements, ensuring each shipment is prepared in line with destination regulations and buyer specifications. From certificates of origin and inspection reports to phytosanitary, Halal, laboratory, and other applicable certifications, we manage the documentation required to support a smooth and compliant movement of goods across borders.',
    documents: [
      { icon: 'FileCheck2', title: 'Bill of Lading', description: 'Issued and verified against booking details before vessel departure.' },
      { icon: 'Globe', title: 'Certificate of Origin', description: 'Prepared for customs and preferential trade-tariff eligibility.' },
      { icon: 'ShieldCheck', title: 'Pre-Shipment Inspection Report', description: 'Independent verification completed before cargo departs.' },
      { icon: 'Leaf', title: 'Phytosanitary Certificate', description: 'Required clearance for plant-based cargo at destination customs.' },
      { icon: 'BadgeCheck', title: 'Halal Certification', description: 'Required clearance for Halal-regulated destination markets.' },
      { icon: 'FlaskConical', title: 'Certificate of Analysis', description: 'Lot-level lab results confirming quality, purity and grade.' },
    ],
  },
  trust: {
    heading: 'Why Businesses Trust Our Logistics',
    subheading:
      'Moving goods across borders should be simple and predictable. We coordinate clearances, schedules, and product handling from the factory to the final port. With clear communication and careful coordination, we keep shipments moving safely and on time.',
    points: [
      'On-Time Port Deliveries',
      'Live Order Tracking Updates',
      'Checked Cargo Quality Standards',
      'Clear Shipping Cost Terms',
      'Easy Customs Paperwork Clearance',
      'Direct Daily Route Communication',
    ],
  },
}

export const accreditations = [
  'ISO 9001:2015',
  'ISO 22000 / HACCP',
  'GMP',
  'APEDA / Spice Board Registrations',
  'FDA Registration',
  'FSSAI License',
]

export const accreditationsPage = {
  hero: {
    eyebrow: 'Accreditations & Certifications',
    heading: 'Accreditations & Certifications',
    subheading:
      'Every shipment prepared to meet the safety, quality, and documentation standards of its destination.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Quality inspection at a certified facility',
  },
  commitment: {
    heading: 'Our Commitment To Global Standards',
    body: 'International trade comes with standards that need to be right at every step. Mavio Global carefully checks each process against international requirements, making sure products meet the necessary safety, quality, and documentation standards before they leave. We take care of the details that help shipments move smoothly across borders, giving you confidence that your product is compliant, properly prepared, and ready for its destination. Every shipment is prepared with the standards, documentation, and requirements of its destination in mind.',
  },
  benefits: {
    heading: 'What These Certifications Ensure',
    points: [
      'The right certification gives confidence that a product meets the standards expected in its market.',
      'It reflects the care taken across quality, safety, production, and other important requirements.',
      'For Mavio Global, these standards help us maintain consistency across different products and destinations.',
      'They also give every business we work with greater clarity before moving forward.',
    ],
  },
  framework: {
    heading: 'Our Quality & Compliance Framework',
    body: 'Quality and compliance work together from product selection to final documentation. We review product specifications, required standards, testing needs, and destination regulations. The right checks and documents are maintained according to the requirements of each shipment. This gives every product a clear basis for meeting its intended market requirements.',
  },
  ethical: {
    heading: 'Commitment to Ethical Trade',
    body: 'Long-term trade relationships are built on fair practices, open communication, and responsible sourcing. We believe in clear business terms, safe working conditions, and respect for environmental standards across the way we work. By keeping communication open and taking responsibility at every stage, we support local production while meeting global market needs. Our goal is to build sustainable trade connections that help businesses grow steadily on both sides.',
  },
  grid: {
    heading: 'Our Accreditations',
    subheading: 'We align our operations with recognized global safety and trade standards. Holding these certifications ensures smooth customs clearance and easy entry into international markets.',
    items: [
      { icon: 'ShieldCheck', title: 'ISO 9001:2015', description: 'Certified quality management system across our operations.' },
      { icon: 'BadgeCheck', title: 'ISO 22000 / HACCP', description: 'Certified food safety management and hazard control system.' },
      { icon: 'FileCheck2', title: 'GMP', description: 'Good Manufacturing Practice standards applied across handling and processing.' },
      { icon: 'Globe', title: 'APEDA / Spice Board Registrations', description: 'Registered with India\'s apex agri-export and spice trade authorities.' },
      { icon: 'FlaskConical', title: 'FDA Registration', description: 'US import-ready registration for eligible product categories.' },
      { icon: 'ClipboardCheck', title: 'FSSAI License', description: 'Licensed under India\'s Food Safety and Standards Authority.' },
    ],
  },
}

export const testimonials = [
  {
    quote:
      'We used to waste so much time dealing with delays between sourcing and delivery. Working with Mavio turned shipping into the easiest, most reliable part of our day.',
    name: 'Global Supply Lead',
    role: 'Agricultural Sector',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Finding good products was never our problem; getting them delivered consistently was. Mavio fixed that completely and brought real trust to every single shipment.',
    name: 'Head of Sourcing',
    role: 'Retail Commerce',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'We just started looking for products, but the real value came later. Their clear communication and steady supply helped us grow our own business much faster.',
    name: 'VP of Operations',
    role: 'Industrial Materials',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The best part is how smooth everything runs. Orders are steady, updates are clear and direct, and we can just focus on making good products.',
    name: 'Managing Director',
    role: 'Group Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Selling abroad used to bring a lot of stress. With Mavio, sending our goods overseas feels just as simple as shipping to a business down the street.',
    name: 'Commercial Lead',
    role: 'Specialized Commodities',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'It doesn’t feel like using a middle channel — it feels like having a real partner taking our quality to the world. That trust has completely changed how we look at our future.',
    name: 'Founder',
    role: 'Specialty Goods Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
]

export const regions = [
  {
    name: 'India',
    flag: '🇮🇳',
    example: 'Kochi, Tuticorin, Kolkata',
    places: [
      { name: 'Kochi', lat: 9.9312, lng: 76.2673, label: [1, 1] },
      { name: 'Tuticorin', lat: 8.7642, lng: 78.1348, label: [1, -0.2] },
      { name: 'Kolkata', lat: 22.5726, lng: 88.3639, label: [1, 0.4] },
    ],
    countryIds: ['356'],
    lat: 9.9312,
    lng: 76.2673,
    isOrigin: true,
  },
  {
    name: 'Middle East',
    flag: '🇦🇪',
    example: 'UAE, Saudi Arabia, Oman',
    places: [
      { name: 'Dubai', lat: 25.2048, lng: 55.2708, label: [1, -0.6] },
      { name: 'Jeddah', lat: 21.4858, lng: 39.1925, label: [-1, 0.2] },
      { name: 'Muscat', lat: 23.588, lng: 58.3829, label: [1, 0.5] },
      { name: 'Doha', lat: 25.2854, lng: 51.531, label: [0.2, -1] },
    ],
    countryIds: ['784', '682', '512', '634'],
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    name: 'Europe',
    flag: '🇪🇺',
    example: 'Germany, Netherlands, UK',
    places: [
      { name: 'Rotterdam', lat: 51.9244, lng: 4.4777, label: [-1, 0.3] },
      { name: 'Hamburg', lat: 53.5511, lng: 9.9937, label: [1, -0.5] },
      { name: 'London', lat: 51.5074, lng: -0.1278, label: [-1, -0.6] },
      { name: 'Antwerp', lat: 51.2194, lng: 4.4025, label: [0.4, 1] },
    ],
    countryIds: ['276', '528', '826', '056', '250'],
    lat: 50.1109,
    lng: 8.6821,
  },
  {
    name: 'North America',
    flag: '🇺🇸',
    example: 'USA, Canada',
    places: [
      { name: 'New York', lat: 40.7128, lng: -74.006, label: [1, -0.4] },
      { name: 'Los Angeles', lat: 34.0522, lng: -118.2437, label: [-1, 0.3] },
      { name: 'Houston', lat: 29.7604, lng: -95.3698, label: [0.6, 1] },
      { name: 'Toronto', lat: 43.6532, lng: -79.3832, label: [1, 0.5] },
    ],
    countryIds: ['840', '124'],
    lat: 40.7128,
    lng: -74.006,
  },
  {
    name: 'Southeast Asia',
    flag: '🇸🇬',
    example: 'Singapore, Malaysia, Vietnam',
    places: [
      { name: 'Singapore', lat: 1.3521, lng: 103.8198, label: [1, 0.8] },
      { name: 'Port Klang', lat: 3.0, lng: 101.4, label: [-1, -0.2] },
      { name: 'Ho Chi Minh', lat: 10.8231, lng: 106.6297, label: [1, -0.5] },
    ],
    countryIds: ['702', '458', '704', '360'],
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    name: 'East Asia',
    flag: '🇨🇳',
    example: 'China, Japan, South Korea',
    places: [
      { name: 'Shanghai', lat: 31.2304, lng: 121.4737, label: [1, 0.3] },
      { name: 'Tokyo', lat: 35.6762, lng: 139.6503, label: [1, -0.4] },
      { name: 'Busan', lat: 35.1796, lng: 129.0756, label: [0.8, 1] },
      { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, label: [-0.6, 1] },
    ],
    countryIds: ['156', '392', '410', '344'],
    lat: 31.2304,
    lng: 121.4737,
  },
  {
    name: 'Africa',
    flag: '🌍',
    example: 'Kenya, Egypt, South Africa',
    places: [
      { name: 'Mombasa', lat: -4.0435, lng: 39.6682, label: [1, 0.2] },
      { name: 'Alexandria', lat: 31.2001, lng: 29.9187, label: [0.4, -1] },
      { name: 'Durban', lat: -29.8587, lng: 31.0218, label: [1, 0.5] },
    ],
    countryIds: ['404', '818', '710'],
    lat: -1.2921,
    lng: 36.8219,
  },
  {
    name: 'Oceania',
    flag: '🇦🇺',
    example: 'Australia, New Zealand',
    places: [
      { name: 'Sydney', lat: -33.8688, lng: 151.2093, label: [1, -0.3] },
      { name: 'Melbourne', lat: -37.8136, lng: 144.9631, label: [-1, 0.4] },
      { name: 'Auckland', lat: -36.8509, lng: 174.7645, label: [1, 0.5] },
    ],
    countryIds: ['036', '554'],
    lat: -33.8688,
    lng: 151.2093,
  },
]

export const originCoords = { lat: 9.9312, lng: 76.2673 }

export const faqs = [
  {
    q: 'How do I send an inquiry and get an official quote?',
    a: 'Share your product, destination, and volume. Our team provides a clear, tailored quote backed by 16+ years of trade expertise.',
  },
  {
    q: 'Can I get samples and request custom packaging or specifications?',
    a: 'Yes. We offer samples, custom specifications, and quality checks to ensure consistent quality from origin to destination.',
  },
  {
    q: 'What products and production capacity do I need to work with you?',
    a: 'We source industrial commodities, raw materials, and manufactured goods based on global demand, quality, and capacity.',
  },
  {
    q: 'How do I register or apply to become a supplier?',
    a: 'Share your product and facility details. We verify your capabilities and create a transparent route to global markets.',
  },
]

export const faqPage = {
  hero: {
    heading: 'Answers for buyers and suppliers',
    caption: 'Choose your role below — the questions update to match what matters most to you.',
  },
  buyer: [
    {
      q: 'How do I send an inquiry and get an official quote?',
      a: 'Just fill out our brief contact form with your product needs, destination port, and estimated volume. The Mavio Global team reviews your request and usually responds within 24 to 48 hours with a detailed, tailored quote.',
    },
    {
      q: 'Can I get samples and request custom packaging or specifications?',
      a: 'Yes, absolutely. We encourage product samples so you can verify quality firsthand before placing a bulk order. Mavio Global also handles custom grading, sizing, and private labeling to ensure every specification meets your requirements.',
    },
    {
      q: 'What trade terms and payment methods do you accept?',
      a: 'We work with standard Incoterms based on your requirements, with FOB and CIF being our most common setups. For payments, we use secure international methods such as Bank Wire Transfers (T/T) and Letters of Credit (L/C) to support safe and reliable trade transactions.',
    },
    {
      q: 'What are your Minimum Order Quantities (MOQs)?',
      a: 'Our MOQs depend on the specific commodity and shipping method, usually starting at full container loads (FCL) to offer competitive freight rates. If you have a specific quantity in mind, Mavio Global can work with you to find a practical solution.',
    },
    {
      q: 'Who provides the export and customs clearance documents?',
      a: 'Mavio Global handles standard export documentation from the origin country, including the Bill of Lading, Certificate of Origin, Phytosanitary certificates, and packing lists. We provide complete, compliant documentation to you or your clearing agent for smooth destination customs clearance.',
    },
  ],
  supplier: [
    {
      q: 'What products and production capacity do I need to work with you?',
      a: 'We are constantly sourcing industrial commodities, raw materials, and manufactured goods for global demand. You can submit your product range and available capacity to Mavio Global, and our sourcing team will match suitable supply with relevant international demand.',
    },
    {
      q: 'How do I register or apply to become a supplier?',
      a: 'Getting started is quick and simple. Share your product details, available stock volume, and facility location through our supplier contact form. The Mavio Global sourcing team will connect with you to verify your details and assess your supply.',
    },
    {
      q: 'Do I need specific certificates to sell to you?',
      a: 'Your products must meet the required quality standards for their respective markets. Mavio Global supports the regulatory, documentation, and compliance requirements needed to move your goods efficiently into global markets.',
    },
    {
      q: 'Do you pick up the shipment from my factory?',
      a: 'Yes. You do not need extensive export experience to work with us. Mavio Global can collect goods directly from your factory gate and manage logistics, export paperwork, and international shipping while you focus on production.',
    },
    {
      q: 'How and when do I get paid, and are there any costs to join?',
      a: 'Joining the Mavio Global supplier network is completely free, with no upfront fees. Once a deal is finalized, payment terms are agreed through standard trade agreements and secure payment methods, ensuring a clear and reliable process from order to dispatch.',
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
    'Mavio Global connects international trade, delivering any commodity to every port through an integrated network with verified testing and on-time transit — partnered with 25+ countries.',
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
        { title: 'Privacy and Policy', fileType: 'PDF · 0.4 MB' },
        { title: 'Terms of Trade Overview', fileType: 'PDF · 0.7 MB' },
        { title: 'Data Processing Addendum', fileType: 'PDF · 0.5 MB' },
      ],
    },
  ],
  cta: {
    heading: 'Need a specific document?',
    body: 'If it’s not listed here, our team can put it together — certifications, lab reports or a custom spec sheet.',
    buttonLabel: 'Contact Us',
  },
}

export const privacyPolicyPage = {
  hero: {
    eyebrow: 'Privacy and Policy',
    heading: 'Privacy and Policy',
    subheading:
      'How Mavio Global handles personal information, website use, and the trade policies that guide every enquiry and partnership.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Secure documentation and compliance paperwork on a desk',
  },
  updatedAt: 'Last updated: 12 March 2026',
  intro:
    'This page covers our Privacy Policy and related site policies. It explains what information we collect when you contact Mavio Global, request a quote, download resources, or partner with us — and the rules that apply when you use this website.',
  sections: [
    {
      title: 'Information We Collect',
      body: 'We may collect your name, company name, email address, phone number, shipping destination, product interest, and any details you include in enquiry forms. When you browse our site we may also collect basic device and usage data such as browser type, pages visited, and approximate location.',
    },
    {
      title: 'How We Use Your Information',
      body: 'We use the information you share to respond to enquiries, prepare quotes, coordinate shipments, share catalogs or compliance documents, and improve our website experience. We do not sell personal data to third parties.',
    },
    {
      title: 'Sharing With Partners',
      body: 'In the course of fulfilling an order we may share relevant shipment or contact details with logistics partners, inspection agencies, banks, or customs intermediaries strictly as needed to move cargo and complete documentation.',
    },
    {
      title: 'Cookies & Analytics',
      body: 'Our site may use cookies and similar tools to remember preferences and understand how visitors use key pages such as Products, Download Centre, and Contact. You can control cookies through your browser settings.',
    },
    {
      title: 'Website Use Policy',
      body: 'Content on this site — including product descriptions, catalogs, and capability summaries — is provided for general trade information. Quotes, availability, and lead times are confirmed only after a formal enquiry. You agree not to misuse forms, scrape content, or submit false commercial details.',
    },
    {
      title: 'Trade & Enquiry Policy',
      body: 'Submitting an enquiry does not create a binding contract. Commercial terms, Incoterms, payment methods, and documentation requirements are agreed separately for each shipment. Sample requests and custom specs are subject to availability and destination rules.',
    },
    {
      title: 'Data Retention',
      body: 'Enquiry and trade records are kept only as long as needed for commercial, legal, or compliance reasons — typically up to 7 years for shipment and customs-related correspondence, unless a longer period is required by law.',
    },
    {
      title: 'Your Choices',
      body: 'You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable trade and record-keeping obligations. Contact us at privacy@mavioglobal.com or through the Contact page.',
    },
    {
      title: 'Security',
      body: 'We apply reasonable administrative and technical safeguards to protect information submitted through our forms and shared with our team. No method of transmission over the internet is fully secure, so we encourage careful sharing of sensitive documents.',
    },
    {
      title: 'Policy Updates',
      body: 'We may update this Privacy and Policy page from time to time. The “Last updated” date at the top of this page will change when revisions are published. Continued use of our site after updates means you accept the revised policy.',
    },
  ],
  contactNote: {
    heading: 'Questions about privacy or policy?',
    body: 'Reach our compliance desk at privacy@mavioglobal.com or call +91 484 000 0000. We aim to respond within two business days.',
  },
}

export const contactPage = {
  cards: [
    { icon: 'MapPin', label: 'Location', value: 'Kochi, Kerala, India', href: null },
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
    body: 'Buyers and suppliers across 25+ countries — our team responds within one business day, regardless of time zone.',
  },
}

export const sustainabilityPage = {
  hero: {
    eyebrow: 'Sustainability',
    heading: 'Sustainability',
    subheading: 'Rooted in Care. Built on Trust. Traded with Purpose.',
    image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Farm worker harvesting produce at origin',
  },
  pillars: {
    heading: 'Rooted in Care. Built on Trust. Traded with Purpose.',
    subheading: 'Sustainability at Mavio Global rests on four commitments — to people, to the planet, and to every partner along the way.',
    items: [
      {
        icon: 'Users',
        title: 'Women & Inclusive Workforce',
        subtitle: 'Nurturing the Hands Behind Global Trade',
        body: 'Behind every product moving across global borders — from factory assembly lines to quality control bays — are millions of women driving international trade. At Mavio Global, sustainability starts by uplifting these women at origin. We partner with suppliers who guarantee safe working environments, equal opportunities, and fair wages for women artisans, factory workers, and quality inspectors. When women thrive, local communities and industries grow stronger together.',
        motto: 'Empower her hands, strengthen global trade.',
      },
      {
        icon: 'HandHeart',
        title: 'Animal & Ecosystem Protection',
        subtitle: 'Compassionate Sourcing Across Every Route',
        body: 'Moving goods across oceans and borders comes with a responsibility to safeguard the planet\'s ecosystems and living creatures. Whether executing marine supply chains, protecting coastal biodiversity from port operations, or ensuring ethical raw material sourcing, Mavio Global upholds strict humane standards. We believe global commerce should never come at the cost of environmental harm or animal suffering.',
        motto: 'Sourced with kindness, delivered with care.',
      },
      {
        icon: 'Sprout',
        title: 'Planet & Resource Stewardship',
        subtitle: 'Protecting the Earth for Future Generations',
        body: 'Every shipment uses energy, materials, and transport routes. Mavio Global takes active responsibility for lowering the environmental footprint of cross-border commerce. By optimizing freight routes, reducing factory-to-port waste, favoring eco-friendly packaging, and cutting transport emissions, we protect natural resources so trade remains sustainable for generations to come.',
        motto: 'Heal the earth, secure the future.',
      },
      {
        icon: 'Truck',
        title: 'Community & Fair Livelihoods',
        subtitle: 'Dignity and Trust in Every Shipment',
        body: 'Behind every container shipped is a team of hard-working makers, factory operators, and local producers hoping for a fair living. Mavio Global builds trade corridors rooted in honesty, total supply chain visibility, and human respect. We ensure fair working conditions, eliminate middleman exploitation, and support local industrial and commercial hubs. For us, true execution means making sure every person in the supply chain feels seen, respected, and valued.',
        motto: 'Transparent trade, dignified lives.',
      },
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
