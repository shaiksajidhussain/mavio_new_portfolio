// Centralized site content. Facts marked (real) come from Mavio Global's public
// site; everything else is placeholder/representative copy for this rebuild.

export const brand = {
  name: 'Mavio Global',
  tagline: "India's Leading and Trusted Gateway to Global Markets",
  founded: 1987, // (real)
  hq: 'Hyderabad, Telangana',
  ports: ['Kochi', 'Tuticorin'], // (real)
  marketsCount: '25+',
}

export const secondaryHeader = {
  countriesText: 'Partnered with 25+ Countries',
  usp: '“See Your Trade. Every Step.”',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mavio-global/' },
    { label: 'Instagram', href: 'https://www.instagram.com/mavioglobal' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590789818692' },
    { label: 'X', href: 'https://x.com/mavioglobal' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCjKWbkRlSFZE_awMK607upw' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Partner With Us', to: '/partner-with-us' },
  // {
  //   label: 'Capabilities',
  //   children: [
  //     { label: 'Quality & Compliance', to: '/capabilities/quality-compliance' },
  //     { label: 'Supply Chain Visibility', to: '/capabilities/supply-chain-visibility' },
  //     { label: 'Export & Logistics', to: '/capabilities/export-logistics' },
  //     { label: 'Sustainability', to: '/sustainability' },
  //   ],
  // },
  // {
  //   label: 'Resources',
  //   children: [
  //     { label: 'FAQ', to: '/resources/faq' },
  //     { label: 'Accreditations & Certifications', to: '/resources/accreditations' },
  //     { label: 'Privacy and Policy', to: '/resources/privacy-policy' },
  //   ],
  // },
  { label: 'Accreditations', to: '/resources/accreditations' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Mavio Global · Est. 1987',
  heading: "India's Largest B2B Procurement & Digital Platform",
  subheading: 'Excellence Beyond Borders',
  primaryCta: { label: 'Schedule a Call', to: '/contact' },
  secondaryCta: { label: 'Explore Products', to: '/products' },
  images: [
    {
      src: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/hero/background-image-with-rows-export-import-cargo-containers-various-colors-3d-rendering_3_11zon.webp',
      alt: 'Rows of export-import cargo containers',
    },
    {
      src: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/hero/54f9e609-8126-4522-a29c-4ec6c347bb83.avif',
      alt: 'Container logistics across ship, port, and truck',
    },
    {
      src: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/hero/container-ship-loading-unloading-deep-sea-port-sunset-aerial-view-business-logistic-import-export_6_11zon.webp',
      alt: 'Container ship loading and unloading at a deep-sea port at sunset',
    },
    {
      src: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/hero/red+chilli_8_11zon.webp',
      alt: 'Export-grade red chilli at origin',
    },
  ],
  secondaryImage:
    'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/hero/red+chilli_8_11zon.webp',
  secondaryImageAlt: 'Export-grade red chilli at origin',
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

export const homeTrustBar = [
  { value: '25', suffix: '+', label: 'Trusted Global Partners' },
  { value: '150', suffix: '+', label: 'Verified Procurement Partners' },
  { value: '100', suffix: '%', label: 'Quality Inspected Shipments' },
  { value: '50000', suffix: '+', label: 'Metric Tons Exported' },
]

export const trustBeforeTransaction = {
  eyebrow: 'Trust Before Transaction',
  heading: 'Trust should be built before the transaction begins.',
  markets: [
    {
      country: 'UAE',
      lines: [
        'Halal-compliant. Precisely packed. Export-ready.',
        'Built around UAE customs and buyer requirements.',
        'From India to Dubai, compliance comes first.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/UAE_2_17_11zon.webp',
    },
    {
      country: 'USA',
      lines: [
        'Matched to your specification. Tested for your confidence.',
        'Built around food-safety and import requirements.',
        'The sample you approve is the product you receive.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/USA_2_18_11zon.webp',
    },
    {
      country: 'Europe',
      lines: [
        'Tested for the standards your market demands.',
        'Traceability and documentation built into every shipment.',
        'From farm region to final delivery, every detail accounted for.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/Europe_2_3_11zon.webp',
    },
    {
      country: 'Malaysia',
      lines: [
        'Consistent grade. Consistent appearance. Consistent supply.',
        'Every shipment built around the approved specification.',
        'So your next order feels like the first.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/MALAYSIA_2_4_11zon.webp',
    },
    {
      country: 'Vietnam',
      lines: [
        'Built for volume without compromising consistency.',
        'Procurement, packing and documentation coordinated as one.',
        'Multiple containers. One controlled supply process.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/VIETNAM_19_11zon.webp',
    },
    {
      country: 'Singapore',
      lines: [
        'Certified product. Complete documentation. Shipment-ready.',
        'Safety and compliance handled alongside production.',
        'Ready in the drum. Ready on paper.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/SINGAPORE_10_11zon.webp',
    },
    {
      country: 'Thailand',
      lines: [
        'Right specification. Right protection. Right documentation.',
        'Every detail coordinated from origin to port.',
        'Reliable execution, without the unnecessary complexity.',
      ],
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/trust_before_transaction/THAILAND_14_11zon.webp',
    },
  ],
}

export const productCatalogue = {
  heading: 'Product Catalogue',
  intro:
    'Spices, shrimps and prawns, fruits and vegetables, and industrial chemicals. Each selected, tested, and packed around the destination market.',
  spices: {
    name: 'Spices',
    intro:
      'From the rich agricultural belts of Guntur and Nizamabad to kitchens around the world, our spice story starts at origin. Every lot is selected, graded, tested, packed, and prepared around the requirements of the destination market.',
    image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/hero/red+chilli_8_11zon.webp',
    products: [
      {
        name: 'Teja S17 Red Chilli',
        image: 'http://mavioglobal.s3.eu-north-1.amazonaws.com/products/spices/teja-s17-dry-red-chilli_11zon.jpg',
        body: 'A high-pungency chilli variety grown in the Guntur belt of Andhra Pradesh, prized globally for its sharp heat and deep red colour. Teja S17 is widely used in chilli powder production, oleoresin extraction, and sauce manufacturing where consistent Scoville strength matters. We grade for colour value, moisture, and pungency before every shipment, and pack to protect colour and heat retention through transit, critical for buyers running continuous production lines.',
      },
      {
        name: 'Byadgi Chilli',
        image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/byadgi-chilli_2_4_11zon.webp',
        body: 'Grown primarily in Karnataka, Byadgi chilli is known for its deep red colour and mild-to-moderate heat, making it the preferred choice for colour-focused applications, oleoresin, natural food colouring, and culinary blends where visual richness matters more than intensity. We select for skin thickness and colour extraction potential, and grade every lot to match the buyer\'s end-use specification.',
      },
      {
        name: 'Stem and Stemless Chilli',
        image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/stem+and+stemless+chilli_1_13_11zon.webp',
        body: 'Available in both whole-stem and destemmed formats to match different processing lines, destemmed for direct powder production, stemmed for buyers who process at their own facility. Sorting and stem-removal are carried out to consistent standards, so every container matches the grade a buyer has already approved.',
      },
      {
        name: 'Chilli Powder',
        image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/red-chilli-powder-with-dried-red-chillies_9_11zon.webp',
        body: 'Ground to order from selected chilli varieties, with colour value, mesh size, and moisture content controlled to buyer specification. Whether the requirement is culinary-grade heat or industrial colour extraction, grinding and packing are matched to the product\'s final application.',
      },
      {
        name: 'Turmeric Finger',
        image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/turmeric-finger_15_11zon.webp',
        body: 'Whole, unpeeled turmeric rhizomes sourced from India\'s major turmeric belts, valued for curcumin content, colour, and aroma. Turmeric finger is dried and graded before shipment, with curcumin percentage tested where required, an essential detail for buyers in pharmaceutical, nutraceutical, and premium culinary markets.',
      },
      {
        name: 'Turmeric Powder',
        image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/turmeric-powder-fresh-turmeric-wooden-spoon-with-green-leaf-old-wooden-table-herbs-are-native-southeast-asia_16_11zon.webp',
        body: 'Finely ground from selected turmeric fingers, with curcumin content, colour, and fineness matched to the buyer\'s requirement, from standard culinary grade to high-curcumin variants for health and wellness applications. Every batch is tested before packing to confirm it meets the agreed specification.',
      },
    ],
  },
  fresh: {
    name: 'Fresh Agriculture',
    intro:
      'Fresh produce is a race against time. Our job is to protect the product from farm to shipment, careful selection, sorting, packing, and coordinated movement, every step of the way.',
    image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/products+we+export/happy-indian-farmer-with-fresh-greens-lush-field.jpg',
    products: [
      {
        name: 'Green Chillies',
        body: 'Sourced fresh and sorted for size, firmness, and colour uniformity, then packed and moved on a tight timeline to preserve freshness from farm to destination.',
      },
      {
        name: 'Ginger',
        body: 'Selected for size, skin quality, and pungency, cleaned and graded before export, and packed in formats suited to both short-haul and long-haul shipments.',
      },
      {
        name: 'Onions',
        body: 'Graded by size and quality, cured appropriately for export, and packed to withstand extended transit without compromising shelf life at destination.',
      },
      {
        name: 'Fruits & Vegetables',
        body: 'A seasonal range handled with the same discipline as our core categories, sorted, quality-checked, and packed for export timelines, with movement coordinated around each product\'s shelf life.',
      },
    ],
  },
  marine: {
    name: 'Shrimps  ',
    intro:
      "India is the world's leading shrimp exporter, and Mavio Global connects international buyers with the highest quality Indian seafood processed at state of the art, internationally certified facilities. Our marine exports comply with the stringent norms of MPEDA (Marine Products Export Development Authority) and all importing country regulatory bodies.",
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1600&q=80',
    products: [
      {
        name: 'Vannamei Shrimp (White Leg)',
        body: 'Farm raised Pacific white shrimp (Litopenaeus vannamei); available HOSO, HLSO, PD, and IQF frozen in a range of counts (10/20, 16/20, 21/25, 26/30, 31/40, 41/50); sourced from antibiotic free, ASC certified farms.',
      },
      {
        name: 'Black Tiger Prawn',
        body: 'Premium wild caught and aquaculture raised Penaeus monodon; renowned for robust flavor and firm texture; available in HOSO, HLSO, PUD, and butterfly cut forms.',
      },
      {
        name: 'Scampi / Freshwater Prawn',
        body: 'Macrobrachium rosenbergii sourced from freshwater aquaculture; large sized, succulent, and popular in European markets; exported IQF and block frozen.',
      },
      {
        name: 'Baby Shrimp',
        body: 'Small count shrimp (71/90, 91/110) used in food processing, pasta, and salad applications; exported cooked or raw, peeled and deveined.',
      },
    ],
  },
  chemicals: {
    name: 'Industrial Chemicals',
    intro:
      'Industrial buyers need more than a product name, they need consistency, specifications, purity, packaging, documentation, and dependable supply.',
    footnote: 'Other approved industrial products are available subject to availability and buyer specification.',
    products: [
      {
        name: 'Isopropanol (IPA)',
        body: 'Supplied to buyer-specified purity grades for industrial, pharmaceutical, and cosmetic applications, with certificates of analysis and safety documentation provided alongside every shipment.',
      },
      {
        name: 'Acetone',
        body: 'Available to industrial-grade specifications with consistent purity, packed in export-compliant containers and supported by the documentation industrial buyers need for customs and safety compliance.',
      },
      {
        name: 'Taurine',
        body: 'Supplied to pharmaceutical and nutraceutical-grade specifications, with quality documentation aligned to buyer and destination-market requirements.',
      },
    ],
  },
  granite: {
    name: 'Natural Granite',
    intro:
      'India\'s natural stone is shaped by geology, craftsmanship, and careful finishing. We connect buyers with granite selected for appearance, structural characteristics, finishing requirements, and project-specific requirements, from slabs to custom-cut formats, finished and packed to protect surface quality through long-distance transit.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
  },
}

export const productCategories = [
  {
    slug: 'spices',
    name: 'Spices',
    tagline: 'Checked, handled and ready to move.',
    description:
      'Export-grade spices coordinated for heat, colour, and specification: Teja S17, Byadgi, stem and stemless chilli, chilli powder, turmeric finger, and turmeric powder.',
    color: 'gold-deep',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/products+we+export/variety-spices-_11zon.jpg',
  },
  {
    slug: 'shrimps',
    name: 'Shrimps',
    tagline: 'MPEDA ready marine exports from certified facilities.',
    description:
      "India is the world's leading shrimp exporter, and Mavio Global connects international buyers with the highest quality Indian seafood processed at state of the art, internationally certified facilities. Our marine exports comply with the stringent norms of MPEDA (Marine Products Export Development Authority) and all importing country regulatory bodies.",
    color: 'navy',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'agri',
    name: 'Fruits and Vegetables',
    tagline: 'Farm-graded produce, ready to move.',
    description:
      'Fresh agricultural commodities sourced and graded at origin: green chillies, ginger, onion, and fruits & vegetables prepared for export markets.',
    color: 'bay',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/products+we+export/happy-indian-farmer-with-fresh-greens-lush-field.jpg',
  },
  {
    slug: 'chemicals',
    name: 'Chemicals',
    tagline: 'Industrial solvents moved to specification.',
    description:
      'Industrial chemicals supplied with clear usage guidance and HSN documentation, including IPA, Acetone, and Toluene for manufacturing and processing applications.',
    color: 'paprika',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/products+we+export/chemical-storage_2.png',
  },
]

// Individual products within each category, keyed by category slug.
export const productCatalog = {
  shrimps: [
    {
      slug: 'vannamei-shrimp',
      name: 'Vannamei Shrimp (White Leg)',
      hsCode: '0306.17',
      description:
        'Farm raised Pacific white shrimp (Litopenaeus vannamei); available HOSO, HLSO, PD, and IQF frozen in a range of counts (10/20, 16/20, 21/25, 26/30, 31/40, 41/50); sourced from antibiotic free, ASC certified farms.',
      usage: 'Retail, foodservice, and further processing in HOSO, HLSO, PD, and IQF formats',
      image: 'https://images.unsplash.com/photo-1756364084889-9a8d9ece6112?auto=format&fit=crop&w=1600&q=80',
      variants: [
        {
          name: 'Vannamei Shrimp (White Leg)',
          description:
            'Farm raised Pacific white shrimp (Litopenaeus vannamei); available HOSO, HLSO, PD, and IQF frozen in a range of counts (10/20, 16/20, 21/25, 26/30, 31/40, 41/50); sourced from antibiotic free, ASC certified farms.',
        },
      ],
    },
    {
      slug: 'black-tiger-prawn',
      name: 'Black Tiger Prawn',
      hsCode: '0306.17',
      description:
        'Premium wild caught and aquaculture raised Penaeus monodon; renowned for robust flavor and firm texture; available in HOSO, HLSO, PUD, and butterfly cut forms.',
      usage: 'Premium retail and foodservice in HOSO, HLSO, PUD, and butterfly cut forms',
      image: 'https://images.unsplash.com/photo-1572924420478-43580a26a7c9?auto=format&fit=crop&w=1600&q=80',
      variants: [
        {
          name: 'Black Tiger Prawn',
          description:
            'Premium wild caught and aquaculture raised Penaeus monodon; renowned for robust flavor and firm texture; available in HOSO, HLSO, PUD, and butterfly cut forms.',
        },
      ],
    },
    {
      slug: 'scampi-freshwater-prawn',
      name: 'Scampi / Freshwater Prawn',
      hsCode: '0306.19',
      description:
        'Macrobrachium rosenbergii sourced from freshwater aquaculture; large sized, succulent, and popular in European markets; exported IQF and block frozen.',
      usage: 'European retail and foodservice, IQF and block frozen',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1600&q=80',
      variants: [
        {
          name: 'Scampi / Freshwater Prawn',
          description:
            'Macrobrachium rosenbergii sourced from freshwater aquaculture; large sized, succulent, and popular in European markets; exported IQF and block frozen.',
        },
      ],
    },
    {
      slug: 'baby-shrimp',
      name: 'Baby Shrimp',
      hsCode: '0306.17',
      description:
        'Small count shrimp (71/90, 91/110) used in food processing, pasta, and salad applications; exported cooked or raw, peeled and deveined.',
      usage: 'Food processing, pasta, and salad applications',
      image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1600&q=80',
      variants: [
        {
          name: 'Baby Shrimp',
          description:
            'Small count shrimp (71/90, 91/110) used in food processing, pasta, and salad applications; exported cooked or raw, peeled and deveined.',
        },
      ],
    },
  ],
  agri: [
    {
      slug: 'green-chillies',
      name: 'Green Chillies',
      hsCode: '0709.60',
      description:
        'Fresh green chillies sourced for export grade, graded for size, colour, and firmness, packed for cold-chain transit to destination markets.',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/agri/green-pepper-vegetables-white_5_11zon.webp',
      variants: [
        {
          name: 'Fresh Green Chilli',
          description: 'Sorted and packed for export; moisture and appearance checked against buyer specification before dispatch.',
        },
      ],
    },
    {
      slug: 'ginger',
      name: 'Ginger',
      hsCode: '0910.11',
      description:
        'Fresh and dried ginger coordinated from reliable growing regions, prepared to the size, moisture, and packing format required for the destination market.',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/agri/ginger_1_4_11zon.webp',
      variants: [
        {
          name: 'Fresh / Dried Ginger',
          description: 'Available as fresh rhizomes or dried ginger, graded and packed to buyer specification.',
        },
      ],
    },
    {
      slug: 'onion',
      name: 'Onion',
      hsCode: '0703.10',
      description:
        'Export onions graded for size and shelf life, packed in mesh bags or cartons suited to long-haul transit and destination retail or foodservice use.',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/agri/red-onion-white-background_9_11zon.webp',
      variants: [
        {
          name: 'Red Onion',
          description: 'Firm bulbs with tight skin, graded by size and packed for export.',
        },
      ],
    },
    {
      slug: 'fruits-vegetables',
      name: 'Fruits & Vegetables',
      hsCode: '0709.99',
      description:
        'A curated line of fruits and vegetables sourced for export readiness, selected for quality, packing integrity, and destination-market requirements.',
      image:
        'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
      variants: [
        {
          name: 'Seasonal Produce Mix',
          description: 'Assorted fruits and vegetables prepared to buyer brief, with packing and transit aligned to product type.',
        },
      ],
    },
  ],
  spices: [
    {
      slug: 'teja-s17-red-chilli',
      name: 'Teja S17 Red Chilli',
      hsCode: '0904.21',
      description:
        'A high-pungency chilli variety grown in the Guntur belt of Andhra Pradesh, prized globally for its sharp heat and deep red colour. Teja S17 is widely used in chilli powder production, oleoresin extraction, and sauce manufacturing where consistent Scoville strength matters. We grade for colour value, moisture, and pungency before every shipment, and pack to protect colour and heat retention through transit, critical for buyers running continuous production lines.',
      usage: 'Chilli powder production, oleoresin extraction, and sauce manufacturing',
      image:
        'http://mavioglobal.s3.eu-north-1.amazonaws.com/products/spices/teja-s17-dry-red-chilli_11zon.jpg',
      variants: [
        {
          name: 'Teja S17',
          description: 'Graded for colour value, moisture, and pungency, then packed to protect heat and colour through transit.',
        },
      ],
    },
    {
      slug: 'byadgi-chilli',
      name: 'Byadgi Chilli',
      hsCode: '0904.21',
      description:
        "Grown primarily in Karnataka, Byadgi chilli is known for its deep red colour and mild-to-moderate heat, making it the preferred choice for colour-focused applications, oleoresin, natural food colouring, and culinary blends where visual richness matters more than intensity. We select for skin thickness and colour extraction potential, and grade every lot to match the buyer's end-use specification.",
      usage: 'Oleoresin, natural food colouring, and culinary blends',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/byadgi-chilli_2_4_11zon.webp',
      variants: [
        {
          name: 'Byadgi Chilli',
          description: 'Selected for skin thickness and colour extraction potential, graded to the buyer’s end-use specification.',
        },
      ],
    },
    {
      slug: 'stem-and-stemless-chilli',
      name: 'Stem and Stemless Chilli',
      hsCode: '0904.21',
      description:
        'Available in both whole-stem and destemmed formats to match different processing lines, destemmed for direct powder production, stemmed for buyers who process at their own facility. Sorting and stem-removal are carried out to consistent standards, so every container matches the grade a buyer has already approved.',
      usage: 'Powder production and further processing',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/stem+and+stemless+chilli_1_13_11zon.webp',
      variants: [
        {
          name: 'Stem / Stemless',
          description: 'Whole-stem or destemmed chilli, sorted to a consistent approved grade for each container.',
        },
      ],
    },
    {
      slug: 'chilli-powder',
      name: 'Chilli Powder',
      hsCode: '0904.22',
      description:
        "Ground to order from selected chilli varieties, with colour value, mesh size, and moisture content controlled to buyer specification. Whether the requirement is culinary-grade heat or industrial colour extraction, grinding and packing are matched to the product's final application.",
      usage: 'Culinary heat and industrial colour extraction',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/red-chilli-powder-with-dried-red-chillies_9_11zon.webp',
      variants: [
        {
          name: 'Ground Chilli Powder',
          description: 'Mesh size, colour value, and moisture controlled to the agreed specification before packing.',
        },
      ],
    },
    {
      slug: 'turmeric-finger',
      name: 'Turmeric Finger',
      hsCode: '0910.30',
      description:
        "Whole, unpeeled turmeric rhizomes sourced from India's major turmeric belts, valued for curcumin content, colour, and aroma. Turmeric finger is dried and graded before shipment, with curcumin percentage tested where required, an essential detail for buyers in pharmaceutical, nutraceutical, and premium culinary markets.",
      usage: 'Pharmaceutical, nutraceutical, and premium culinary markets',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/turmeric-finger_15_11zon.webp',
      variants: [
        {
          name: 'Dried Turmeric Finger',
          description: 'Dried and graded whole rhizomes, with curcumin tested where the buyer specification requires it.',
        },
      ],
    },
    {
      slug: 'turmeric-powder',
      name: 'Turmeric Powder',
      hsCode: '0910.30',
      description:
        'Finely ground from selected turmeric fingers, with curcumin content, colour, and fineness matched to the buyer’s requirement, from standard culinary grade to high-curcumin variants for health and wellness applications. Every batch is tested before packing to confirm it meets the agreed specification.',
      usage: 'Culinary grade and high-curcumin health applications',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/product_catelogue/turmeric-powder-fresh-turmeric-wooden-spoon-with-green-leaf-old-wooden-table-herbs-are-native-southeast-asia_16_11zon.webp',
      variants: [
        {
          name: 'Ground Turmeric Powder',
          description: 'Ground from selected fingers and tested for curcumin, colour, and fineness before packing.',
        },
      ],
    },
  ],
  chemicals: [
    {
      slug: 'ipa',
      name: 'IPA',
      hsCode: '29051220',
      description:
        'Isopropyl alcohol (IPA) used in sanitizer and related industrial applications. HSN Code: 29051220.',
      usage: 'Sanitizer and related industrial applications',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/chemicals/IPA_7_11zon.webp',
      variants: [
        {
          name: 'Industrial / Sanitizer Grade IPA',
          description: 'Supplied to specification for sanitizer production and related industrial use. HSN Code: 29051220.',
        },
      ],
    },
    {
      slug: 'acetone',
      name: 'Acetone',
      hsCode: '29141100',
      description:
        'Acetone used in the making of paints, nail polish remover, and textile industry applications. HSN Code: 29141100.',
      usage: 'Paints, nail polish remover, textile industry',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/chemicals/warehouse-with-blue-industrial-metal-barrels_12_11zon.webp',
      variants: [
        {
          name: 'Industrial Grade Acetone',
          description: 'Solvent grade for paints, nail polish remover, and textile processing. HSN Code: 29141100.',
        },
      ],
    },
    {
      slug: 'toluene',
      name: 'Toluene',
      hsCode: '29023000',
      description:
        'Toluene used as a paint thinner, high-octane fuel additive, and cleaning solvent. HSN Code: 29023000.',
      usage: 'Paint thinner, high-octane fuel additives, cleaning',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/chemicals/full-frame-shot-building_3_11zon.webp',
      variants: [
        {
          name: 'Industrial Grade Toluene',
          description: 'Used as paint thinner, high-octane fuel additive, and cleaning solvent. HSN Code: 29023000.',
        },
      ],
    },
  ],
}

export const supplyChainSteps = [
  {
    step: 1,
    label: 'Sourcing at Origin',
    icon: 'Sprout',
    description:
      'We start where the product starts. Procurement focuses on identifying the right supply, understanding availability, and matching it to what the buyer actually needs.',
    longDescription:
      'We start where the product starts. Procurement focuses on identifying the right supply, understanding availability, and matching it to what the buyer actually needs.',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/the_chain_of_trust/2c9d6ce9-6cc7-4a73-9958-beb5aaaeb408_1_11zon.webp',
    video: 'https://videos.pexels.com/video-files/2887460/2887460-sd_640_360_25fps.mp4',
  },
  {
    step: 2,
    label: 'Sorting & Grading',
    icon: 'Package',
    description:
      'Quantity alone doesn’t make a shipment commercially useful. Size, appearance, grade, moisture, colour, and purity all matter, handling is aligned to the agreed specification from the start.',
    longDescription:
      'Quantity alone doesn’t make a shipment commercially useful. Size, appearance, grade, moisture, colour, and purity all matter, handling is aligned to the agreed specification from the start.',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/the_chain_of_trust/sorting_2_11_11zon.webp',
    video: 'https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_30fps.mp4',
  },
  {
    step: 3,
    label: 'Lab Testing & Inspection',
    icon: 'ShieldCheck',
    description:
      'Confidence is stronger when it’s measurable. Where applicable, products are tested and inspected against agreed parameters before they ever reach the port.',
    longDescription:
      'Confidence is stronger when it’s measurable. Where applicable, products are tested and inspected against agreed parameters before they ever reach the port.',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/the_chain_of_trust/researchers-laboratories-medical-vaccines-generative-ai-art_2_11zon.webp',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4',
  },
  {
    step: 4,
    label: 'Secure Packaging',
    icon: 'PackageCheck',
    description:
      'Packaging is part of the journey, not an afterthought. We coordinate export-suitable packing built to protect quality through handling, storage, and transport.',
    longDescription:
      'Packaging is part of the journey, not an afterthought. We coordinate export-suitable packing built to protect quality through handling, storage, and transport.',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/the_chain_of_trust/3748330d-e756-4a07-b919-cc0618a0713e_2_11zon.webp',
    video: 'https://videos.pexels.com/video-files/7578552/7578552-sd_640_360_30fps.mp4',
  },
  {
    step: 5,
    label: 'Logistics & Documentation',
    icon: 'FileCheck2',
    description:
      'International trade is as much paperwork as it is physical movement. We coordinate commercial and shipping documentation, customs processes, freight, and shipment milestones through the right partners.',
    longDescription:
      'International trade is as much paperwork as it is physical movement. We coordinate commercial and shipping documentation, customs processes, freight, and shipment milestones through the right partners.',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/the_chain_of_trust/Custom-Clearance_7_11zon.webp',
    video: 'https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4',
  },
  {
    step: 6,
    label: 'Real-Time Visibility',
    icon: 'Ship',
    description:
      'Once the shipment moves, you shouldn’t have to wonder what’s happening. Milestones and updates are communicated clearly, what’s happened, what’s happening, and what’s next.',
    longDescription:
      'Once the shipment moves, you shouldn’t have to wonder what’s happening. Milestones and updates are communicated clearly, what’s happened, what’s happening, and what’s next.',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/the_chain_of_trust/16196946_375-mj-1289-fon-l_1_11zon.webp',
    video: 'https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4',
  },
]

export const traceability = {
  heading: 'Every Move Stays Tracked',
  description:
    'Once a shipment leaves, the waiting begins. We keep you close to every movement, so you always know what’s happening from origin to destination. Every step of the journey stays visible, so everyone involved can know where your delivery is and what’s happening next, all partners, teams, and customers can access live updates without constantly chasing information.',
  roles: [
    { role: 'Buyer', description: 'Full visibility into the procurement they’re involved in, lot origin, grading and shipment status.' },
    { role: 'Seller', description: 'Clear terms, transparent quality feedback and on-time settlement for every consignment.' },
    { role: 'Logistics', description: 'Consolidated documentation and live shipment status across every port and carrier.' },
  ],
}

export const about = {
  eyebrow: 'About',
  heading: 'We didn’t start with products. We started with a',
  headingAccent: 'problem.',
  body: 'Across global sourcing, too much still depends on assumptions, trusting the quality, waiting for updates, and hoping every step stays on schedule. When one part falls out of place, the entire process becomes uncertain and difficult to manage. Mavio Global was built to bring more certainty to that journey, with better sourcing, verified quality, clear visibility, and a more connected way of moving products from origin to destination.',
  image:
    'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/indian-exports_14_11zon.webp',
  imageAlt: 'Indian exports prepared for global markets',
  secondaryImage:
    'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/16196946_375-mj-1289-fon-l_13_11zon.webp',
  secondaryImageAlt: 'Coordinated trade operations from origin to destination',
  highlights: [
    '100% Live Shipment Tracking',
    'Strict Lab Quality Testing',
    'Unlimited Product Sourcing',
    'Verified Global Compliance',
  ],
}

export const productsPage = {
  catalogue: {
    eyebrow: 'Quality assured, globally sourced',
    heading: 'Explore Our Premium Product Portfolio',
    image:
      'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/hero+section/Agri_1.avif',
    overviewTitle: 'Products We Export',
    overviewBody:
      'Mavio Global is a supplier of agricultural commodities, seafood, and specialty chemicals from India. We work with a carefully selected network of growers and processors, coordinating quality checks, documentation, and logistics so every shipment meets destination-market standards.',
  },
  hero: {
    image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/products/hero+section/Agri_1_11zon.webp',
  },
}

export const aboutPage = {
  hero: {
    eyebrow: 'About Us',
    heading: 'A connected journey for global buyers sourcing from India.',
    body: 'Mavio was founded on a simple observation: international trade gets difficult when responsibility is fragmented. A buyer might know exactly what product they need, and still have to navigate sourcing, quality checks, packaging, documentation, customs, freight, and delivery as separate problems, with separate people.',
    image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/WhatsApp+Image+2026-09-04+at+3.12.24+PM.jpeg',
  },
  story: [
    'Mavio was founded on a simple observation: international trade gets difficult when responsibility is fragmented. A buyer might know exactly what product they need, and still have to navigate sourcing, quality checks, packaging, documentation, customs, freight, and delivery as separate problems, with separate people.',
    'We built Mavio Global to make that journey connected instead. We bring together procurement, quality coordination, trade documentation, logistics, and digital visibility into one organised experience for global buyers sourcing from India. Our goal was never just to sell an Indian product it\'s to build confidence around the entire transaction.',
  ],
  storyImages: [
    'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/problem_33.png',
    'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/16196946_375-mj-1289-fon-l_13_11zon.webp',
  ],
  visionMission: {
    vision: {
      title: 'Vision',
      body: 'To build a connected global trade ecosystem where quality products move across borders with greater visibility, dependable execution, and lasting trust.',
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/vision_2_11_11zon.webp',
    },
    mission: {
      title: 'Mission',
      body: 'To empower global businesses with greater confidence in cross-border trade by connecting sourcing, quality, coordination, and logistics into one transparent journey.',
      image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/About/mission_8_11zon.webp',
    },
  },
  belief: {
    title: 'What We Believe',
    body: "A successful shipment isn't the end of the relationship. It's proof that the relationship works.",
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=2200&q=80',
  },
  whyChoose: {
    eyebrow: 'Why Choose Mavio Global?',
    slides: [
      {
        title: 'One Partner, Multiple Trade Functions',
        body: 'Instead of coordinating procurement, quality, documentation, and logistics separately, you work through one organised trade partner.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80',
      },
      {
        title: 'Procurement Capacity',
        body: 'We start by understanding your required quantity, specification, destination, and timeline, then we build the procurement route around that.',
        image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1800&q=80',
      },
      {
        title: 'Quality Discipline',
        body: "Quality isn't a sentence on a website. It's a process of checking the product against agreed requirements before it ships.",
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1800&q=80',
      },
      {
        title: 'Long-Term Supply',
        body: 'For recurring buyers, the goal is consistency, repeatable specifications, volumes, packaging formats, and commercial processes, order after order.',
        image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1800&q=80',
      },
      {
        title: 'Digital Visibility',
        body: 'The digital layer exists to remove uncertainty, making shipment and operational information easier to access and easier to talk about.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1800&q=80',
      },
      {
        title: 'Human Accountability',
        body: 'Technology can show you a status. A responsible trade team makes sure that status means something, and that the next action has an owner.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=80',
      },
    ],
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
    eyebrow: 'Partner with Mavio Global',
    heading: 'Build the next global trade relationship.',
    lead: 'Great trade begins with the right partners.',
    paragraphs: [
      'We are building a global trade network where quality is verified, communication is transparent, and every partnership is built for the long term.',
    ],
    close: ['Partner with Mavio Global.', 'Take your capabilities to the world.'],
    cta: { label: 'Become a Partner', to: '#become-a-partner' },
    image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/partners+with+us/businessmen-handshake-business-meeting-partnership-concept-copy-space.jpg',
    imageAlt: 'Business partners shaking hands on a successful agreement',
    buyer: {
      image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=2200&q=80',
      imageAlt: 'Container cranes loading freight at a busy port',
    },
    supplier: {
      image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=2200&q=80',
      imageAlt: 'Producers preparing harvest for export at origin',
    },
  },
  partnerTypes: {
    eyebrow: 'Who we partner with',
    heading: 'Four ways into the network.',
    subheading: 'Choose how you work. One application covers every partner type.',
    items: [
      {
        id: 'producer',
        label: 'Producer',
        title: 'Producers',
        body: 'Origin farms and growers ready to supply verified quality at consistent volume.',
        image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Producers preparing harvest for export at origin',
      },
      {
        id: 'manufacturer',
        label: 'Manufacturer',
        title: 'Manufacturers',
        body: 'Processors and packers who can hold specification, hygiene, and dispatch windows.',
        image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Manufacturing and packing line prepared for export',
      },
      {
        id: 'sourcing',
        label: 'Sourcing Partner',
        title: 'Sourcing partners',
        body: 'Category specialists who already know origin, grade, and reliable supply bases.',
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Quality inspection of sourced product at origin',
      },
      {
        id: 'logistics',
        label: 'Logistics Specialist',
        title: 'Logistics specialists',
        body: 'Freight, warehousing, and last-mile partners who keep cross-border movement visible.',
        image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Port logistics and container movement',
      },
    ],
  },
  applyForm: {
    eyebrow: 'Become a Partner',
    heading: 'Take your capabilities to the world.',
    body: 'Partner with Mavio Global. Tell us who you are, what you handle, and we will come back with a practical next step.',
    submitLabel: 'Become a Partner',
    confirmation:
      'Thank you. Your partner application has reached the Mavio Global team. We will review it and contact you with the next step.',
    fields: [
      {
        key: 'partnerType',
        label: 'Partner type',
        type: 'select',
        placeholder: 'Select how you work with us',
        options: ['Producer', 'Manufacturer', 'Sourcing Partner', 'Logistics Specialist'],
        required: true,
      },
      { key: 'name', label: 'Name', type: 'text', placeholder: 'Full name', required: true },
      { key: 'email', label: 'Work email', type: 'email', placeholder: 'you@company.com', required: true },
      { key: 'company', label: 'Company', type: 'text', placeholder: 'Company or farm name', required: true },
      { key: 'country', label: 'Country', type: 'text', placeholder: 'Country', required: true },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 …', required: false },
      {
        key: 'message',
        label: 'What you offer',
        type: 'textarea',
        placeholder: 'Products, capacity, certifications, lanes, or regions you cover.',
        required: true,
        full: true,
      },
    ],
  },
  whyPartner: {
    heading: 'Great trade begins with the right partners.',
    image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Farm partner harvesting produce for international markets',
    paragraphs: [
      'Mavio Global connects trusted producers, manufacturers, sourcing partners, logistics specialists and international buyers to create reliable trade relationships across borders.',
      'We are building a global trade network where quality is verified, communication is transparent, and every partnership is built for the long term.',
    ],
    buyer: {
      heading: 'Why Partner With Mavio',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Quality-checked spices prepared for export buyers',
      paragraphs: [
        'International sourcing usually brings constant worries: bad product quality, late shipments, rising costs, and zero updates when things go wrong. Mavio changes this by working directly on the ground. We check product quality before anything gets loaded, lock in fair pricing, track shipments in real time, ensure proper fumigation and moisture control, and take full responsibility for the entire journey from start to finish.',
        'You get exact product standards and on-time deliveries without the stress of managing overseas trade yourself.',
      ],
    },
    supplier: {
      heading: 'Why Partner With Mavio',
      image: 'https://images.unsplash.com/photo-1755788060367-30e6e3d567fe?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Farm partner harvesting produce for international markets',
      paragraphs: [
        'Reaching international markets can sometimes be challenging, especially around logistics, payment terms, and negotiating from a distance. Maintaining regular orders, market access, and communication on their own takes focus away from daily operations. Mavio simplifies this entire journey by connecting your production directly with active global markets, taking care of export logistics, and ensuring clear communication from day one.',
        'You get steady orders, managed shipping, and more predictable growth, giving you the confidence to scale without added pressure.',
      ],
    },
  },
  competitiveAdvantage: {
    buyer: {
      heading: 'Our competitive advantage',
      subheading: 'What buyers get when they source through Mavio instead of a fragmented broker chain.',
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
    supplier: {
      heading: 'Our competitive advantage',
      subheading: 'What partners get when they grow with Mavio as a long-term export relationship.',
      items: [
        {
          icon: 'Sprout',
          title: 'Direct Market Access',
          description: 'Connect your production to active buyers without building an overseas sales network from scratch.',
        },
        {
          icon: 'Timer',
          title: 'Predictable Order Flow',
          description: 'Clear requirements and steady coordination help you plan capacity with fewer last-minute surprises.',
        },
        {
          icon: 'Handshake',
          title: 'Export Logistics Handled',
          description: 'Documentation, shipping, and handoffs stay with us so you can stay focused on production quality.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Long-Term Brand Elevation',
          description: 'Present your standards to markets that value consistency, with a partner that stays accountable after the first order.',
        },
      ],
    },
  },
  industries: {
    eyebrow: 'Sector Coverage',
    heading: 'Industries we’ve collaborated with',
    buyer: {
      subheading: 'We source and export any item to match your exact procurement requirements across sectors.',
      cta: { label: 'See Our Capabilities', to: '/capabilities/export-logistics' },
    },
    supplier: {
      subheading: 'We open pathways into sectors that need consistent origin supply, without product boundaries.',
      cta: { label: 'Explore Export Routes', to: '/capabilities/export-logistics' },
    },
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
        { icon: 'Headphones', title: 'Beyond a Single Order', description: 'Because a good opportunity should not end with just one order, it should lead to a relationship that grows.' },
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
    heading: 'Partner with Mavio Global.',
    body: 'Take your capabilities to the world. One form, four partner types, producers, manufacturers, sourcing partners, and logistics specialists.',
    primaryCta: { label: 'Become a Partner', to: '#become-a-partner' },
    buyer: {
      heading: 'Ready to source with confidence?',
      body: 'Talk to our team about your next shipment, sample requests, MOQs and lead times, sorted in one call.',
      primaryCta: { label: 'Request a Quote', to: '/contact' },
    },
    supplier: {
      heading: 'Ready to grow with a long-term partner?',
      body: 'If you grow, process or manufacture export-grade produce, seafood or specialty chemicals, we want to hear from you.',
      primaryCta: { label: 'Become a Partner', to: '#become-a-partner' },
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
    body: 'What reaches you matters, so we take every step to make sure it meets the standards you expect. We ensure that every procurement goes through constant checks, from product specifications, fumigation, and moisture control to handling, packaging, and container hygiene. Regular checks help us identify concerns early and maintain consistency throughout the journey. So every shipment reaches you with the quality and care you expect.',
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
    heading: 'Supply Chain Visibility',
    subheading:
      'Integrating buyers, suppliers, and transport networks into one seamless setup, with full ownership of backend logistics.',
    image: 'https://images.unsplash.com/photo-1773126378189-9186d697b797?auto=format&fit=crop&w=2200&q=80',
    imageAlt: 'Trucks loading shipping containers at a freight yard',
  },
  intro: {
    heading: 'Trade with absolute peace of mind',
    body:
      'Global trade without real-time visibility leads to operational bottlenecks, unrecorded fees, and broken communication lines. Disconnected documentation and uncoordinated logistics handoffs ultimately weaken partner trust and compromise schedule reliability. Mavio ensures total operational governance by providing end-to-end visibility throughout the entire shipping lifecycle, integrating buyers, suppliers, and transport networks into one seamless setup, and taking full ownership of backend logistics so you can trade with absolute peace of mind.',
    image: 'https://images.unsplash.com/photo-1723466998040-78d7e2ef6d72?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Warehouse operations being coordinated and tracked',
  },
  journey: {
    heading: 'End-to-End Supply Chain Journey',
    subheading: 'Full visibility, presented as a timeline, from sourcing to final delivery.',
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
    image: 'https://images.unsplash.com/photo-1784914184990-aaaf0e6c81fe?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Shipping containers coordinated at a busy export terminal',
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

export const accreditationsPage = {
  hero: {
    eyebrow: 'Accreditations & Proof',
    heading: 'Proof Behind the Promise',
    body: 'International trade runs on documentation and evidence, not adjectives. We present relevant certifications, registrations, laboratory reports, inspection records, and compliance documentation transparently, for the products and markets they apply to.',
    image: 'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/hero+section/1_11zon.jpg',
    imageAlt: 'Gold wax seal and stamp on a sealed envelope',
  },
  badges: [
    'Spice Board of India',
    'FSSAI Licensed',
    'IEC (DGFT)',
    'GST',
    'APEDA Registered',
    'MPEDA Registered',
  ],
  precisionNote:
    'This precision is a feature, not a limitation, buyers trust a company more when it explains exactly what a certification covers instead of using every badge as a marketing claim.',
  items: [
    {
      code: 'SBI',
      title: 'Spice Board of India',
      subtitle: 'Spice Board of India, Registered Exporter',
      watermark:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/compilance+registry_watermarks/SBI_8_11zon.jpg',
      body: 'The Spice Board of India is the statutory body regulating the export of spices from India. As a registered exporter, Mavio Global is authorized to export all major spice categories including chilli, turmeric, pepper, and cardamom, with quality backed by Spice Board certification.',
      issuingBody: 'Ministry of Commerce & Industry, Government of India',
      scope: 'Red Chilli · Turmeric · Black Pepper · Cardamom · All Major Spices',
    },
    {
      code: 'FSSAI',
      title: 'FSSAI Licensed',
      subtitle: 'Food Safety and Standards Authority of India',
      watermark:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/compilance+registry_watermarks/FSSAI_4_11zon.jpg',
      body: "FSSAI licensing is the foundational food safety authorization for all food businesses in India. It ensures that every product handled, processed, and exported by Mavio Global meets India's domestic food safety standards, which are aligned with Codex Alimentarius principles.",
      issuingBody: 'Ministry of Health & Family Welfare, Government of India',
      scope: 'All Food & Agricultural Products',
    },
    {
      code: 'IEC',
      title: 'IEC (DGFT)',
      subtitle: 'Importer Exporter Code',
      watermark:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/compilance+registry_watermarks/IEC+-+DGFT_6_11zon.jpg',
      body: 'The Importer Exporter Code (IEC) is the primary business identification number required for any entity conducting international trade from India. Issued by DGFT, it is mandatory for all export shipments, customs clearance, and foreign exchange transactions. Mavio Global holds an active IEC enabling seamless cross-border trade.',
      issuingBody: 'Directorate General of Foreign Trade, Ministry of Commerce',
      scope: 'All Import & Export Transactions',
    },
    {
      code: 'GST',
      title: 'GST',
      subtitle: 'GST Registration & Registration Cum Membership Certificate',
      watermark:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/compilance+registry_watermarks/GST_5_11zon.jpg',
      body: "GST registration ensures Mavio Global is fully compliant with India's Goods and Services Tax framework, enabling smooth domestic procurement and input tax credit on exports. The RCMC (Registration Cum Membership Certificate) from the relevant Export Promotion Council authorizes us to avail export incentives and schemes under India's Foreign Trade Policy.",
      issuingBody: 'GSTN / Export Promotion Councils, Government of India',
      scope: 'Tax Compliance · Export Incentives · FTP Benefits',
    },
    {
      code: 'APEDA',
      title: 'APEDA Registered',
      subtitle: 'Agricultural & Processed Food Products Export Development Authority',
      watermark:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/compilance+registry_watermarks/APEDA_3_11zon.jpg',
      body: "APEDA registration is mandatory for exporters of scheduled agricultural and processed food products from India. It authorizes Mavio Global to export commodities including fresh fruits, vegetables, cereals, and processed foods to global markets, and enables access to APEDA's quality development and market promotion schemes.",
      issuingBody: 'Ministry of Commerce & Industry, Government of India',
      scope: 'Fresh Produce · Spices · Cereals · Processed Foods',
    },
    {
      code: 'MPEDA',
      title: 'MPEDA Registered',
      subtitle: 'Marine Products Export Development Authority',
      watermark:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/Accreditations+%26+certifications/compilance+registry_watermarks/MPEDA_7_11zon.jpg',
      body: 'MPEDA registration is the primary authorization required for any Indian entity exporting marine products. It ensures our shrimp and seafood exports meet the hygiene, traceability, and species-compliance requirements of importing countries including the EU, USA, and Japan.',
      issuingBody: 'Ministry of Commerce & Industry, Government of India',
      scope: 'Shrimps · Prawns · Seafood',
    },
  ],
}

export const accreditations = accreditationsPage.items.map((item) => item.title)

export const testimonials = [
  {
    quote:
      'We used to waste so much time dealing with delays between sourcing and delivery. Working with Mavio turned shipping into the easiest, most reliable part of our day.',
    name: 'Global Supply Lead',
    role: 'Agricultural Sector',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
    video: 'https://videos.pexels.com/video-files/2887460/2887460-sd_640_360_25fps.mp4',
  },
  {
    quote:
      'Finding good products was never our problem; getting them delivered consistently was. Mavio fixed that completely and brought real trust to every single shipment.',
    name: 'Head of Sourcing',
    role: 'Retail Commerce',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
    video: 'https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_30fps.mp4',
  },
  {
    quote:
      'We just started looking for products, but the real value came later. Their clear communication and steady supply helped us grow our own business much faster.',
    name: 'VP of Operations',
    role: 'Industrial Materials',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4',
  },
  {
    quote:
      'The best part is how smooth everything runs. Orders are steady, updates are clear and direct, and we can just focus on making good products.',
    name: 'Managing Director',
    role: 'Group Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    video: 'https://videos.pexels.com/video-files/7578552/7578552-sd_640_360_30fps.mp4',
  },
  {
    quote:
      'Selling abroad used to bring a lot of stress. With Mavio, sending our goods overseas feels just as simple as shipping to a business down the street.',
    name: 'Commercial Lead',
    role: 'Specialized Commodities',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    video: 'https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4',
  },
  {
    quote:
      'It doesn’t feel like using a middle channel, it feels like having a real partner taking our quality to the world. That trust has completely changed how we look at our future.',
    name: 'Founder',
    role: 'Specialty Goods Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    video: 'https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4',
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
    countryIds: ['276', '528', '826', '056', '250', '380'],
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

/** Head of government keyed by ISO 3166-1 numeric id. Replace `image` with official portraits when ready. */
export const countryLeaders = {
  '356': {
    country: 'India',
    name: 'Narendra Modi',
    title: 'Prime Minister',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg',
  },
  '784': {
    country: 'United Arab Emirates',
    name: 'Mohammed bin Rashid Al Maktoum',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAGPK-fAPTWxyjadeOdvLOfGXjAWFG3IrlUQKLLO9iqMq-D2-lvJZprPVhW8vbOK61AwbYUC3QR40l5zx5Z6vtxwCkBWVoWCo-iApGIQx&s=10',
  },
  '682': {
    country: 'Saudi Arabia',
    name: 'Mohammed bin Salman',
    title: 'Crown Prince',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKEAmZQkKsPmPddxkHjDLsd02T71oOvuvmodxYZ4QLoTJyNacXSPwdrlZnK85UwQnPYoHbWNpMtwutoUqskuXtWC2joOzwrVz-z6M4TEEEw&s=10',
  },
  '512': {
    country: 'Oman',
    name: 'Haitham bin Tariq',
    title: 'Sultan',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYZTdDRXA8eGBPqu9Wg5hah3SBxgnffDciHHYUAAkyKx_4K_ID8Y2hSwQC6drZwaoSepoXAXR5Wkpx52osFoFu2iKqWCjbPhFhvxhFBp2ArwHTmt7x0K_tou3-lp7efUJpVFAuV_k3AqQ&s=19',
  },
  '634': {
    country: 'Qatar',
    name: 'Mohammed bin Abdulrahman Al Thani',
    title: 'Prime Minister',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mohammed_bin_Abdulrahman_Al-Thani_of_Qatar_on_25_January_2024_-_2_%28cropped%29.jpg/500px-Mohammed_bin_Abdulrahman_Al-Thani_of_Qatar_on_25_January_2024_-_2_%28cropped%29.jpg',
  },
  '276': {
    country: 'Germany',
    name: 'Friedrich Merz',
    title: 'Chancellor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHdGvpZdwHQEdeeKAZ9djJeyex_LSy5tlC46drhGlfhHTzC3zuMHUVs4SdHFXXtcwFHTDxMoZUVfsE-9D6-1SVH5eMBYxAxWFCjHy5dbuKg&s=10',
  },
  '528': {
    country: 'Netherlands',
    name: 'Dick Schoof',
    title: 'Prime Minister',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dick_Schoof_in_2025.jpg/500px-Dick_Schoof_in_2025.jpg',
  },
  '826': {
    country: 'United Kingdom',
    name: 'Keir Starmer',
    title: 'Prime Minister',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/500px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg',
  },
  '056': {
    country: 'Belgium',
    name: 'Bart De Wever',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSLe2Q9Tb0eo-XBwQC39tNIHJufgOoGWsYSaI_D6QCK3jtUNm1voVBG-m72r1X7DXmRSlQtw3GPHLlykxs',
  },
  '250': {
    country: 'France',
    name: 'Emmanuel Macron',
    title: 'President',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS8X6VtzmVi7SwzNYzVPiN3Kc--5YaxaX_xqjZv_RaIEc8Tu841W5OkRrCiJBDblhC9F4vmrE41bc60xO8DHGg62VAn8EMT5YHBDCdPeoEGAWBY7caaCACoqBuYxeOCCSq6N-9dMvV5enw&s=19',
  },
  '380': {
    country: 'Italy',
    name: 'Giorgia Meloni',
    title: 'Prime Minister',
    image: 'https://foreignpolicy.com/wp-content/uploads/2025/10/Giorgia-Meloni-Italy-GettyImages-2223761066.jpg?resize=1200,1200',
  },
  '840': {
    country: 'United States',
    name: 'Donald Trump',
    title: 'President',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS4bILfHNwii8uAEjhc6MqCZRtxiTt24vRZ1n-LD4Y-VEELv1_dikkgW4YOPB29KIBPAnCgdDHQO7LcfM06wx_HAw9HHObdsVM16NENz75VoCtaKeGY4ocbQbKAkDyhz9WVFFMbaVd5jbx3&s=19',
  },
  '124': {
    country: 'Canada',
    name: 'Mark Carney',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRmXyDlYHYw2WQ22w6TOiLyTHigRraE0G2txsPe1IfanqO7jQVlAbTIWqfn7MrKiGqPyukIlSiobRIFk_o',
  },
  '702': {
    country: 'Singapore',
    name: 'Lawrence Wong',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZkme1z7F6lUyTM5v62ZSQcIr7BW0wczPMIddC_jk1kCxTdwTTOI8MamuFLHJS0QrXx4vvmrKfiMyDZoJq993w5Wd-58pg9qZcOIKLg&s=10',
  },
  '458': {
    country: 'Malaysia',
    name: 'Anwar Ibrahim',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsyeGThNU6mxj9lt5u5jOmKysYQU2lNIcA-V7CY3qQ8kEbbiGz1g3UL34sGUEruahPtthf7MQpuF8MsYuCgx7oL_NkrshAj_RdFGQJw&s=10',
  },
  '704': {
    country: 'Vietnam',
    name: 'Phạm Minh Chính',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTeAZv--aLYaSPWOT9wfNM8U1Nn0rwJvNgDRSQEUW9Q0j3pJonEBbE7rQwVhu-k645CGccz9sabLtITesk',
  },
  '360': {
    country: 'Indonesia',
    name: 'Prabowo Subianto',
    title: 'President',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCwjiHSuuAFFVd5wqC5m8W2KFCOrtUGkVDQRURv6_RxKFH8NfcH2msfv5Gv5HAFD-Y_V6dZOzvJsKDERwmCnaZUOzgGv2ZNJe_IBzRA&s=10',
  },
  '156': {
    country: 'China',
    name: 'Li Qiang',
    title: 'Premier',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Li_Qiang_meets_Keir_Starmer_Jan_2026.jpg/960px-Li_Qiang_meets_Keir_Starmer_Jan_2026.jpg',
  },
  '392': {
    country: 'Japan',
    name: 'Shigeru Ishiba',
    title: 'Prime Minister',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ishiba_Shigeru_2025_%28cropped%29.jpg/500px-Ishiba_Shigeru_2025_%28cropped%29.jpg',
  },
  '410': {
    country: 'South Korea',
    name: 'Lee Jae-myung',
    title: 'President',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8rAhFUX2YY7w755rrlfWNuG7nitnQas39RUmcQbECKI3yP6VB25YOPU2-UjW6-syS3BAGRy1d1V6xo-Ce-ticEbYZbEq1Au4s68Nku4&s=10',
  },
  '344': {
    country: 'Hong Kong',
    name: 'John Lee',
    title: 'Chief Executive',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Inmediahk_-_John_Lee_2023_%28cropped%29.jpg/500px-Inmediahk_-_John_Lee_2023_%28cropped%29.jpg',
  },
  '404': {
    country: 'Kenya',
    name: 'William Ruto',
    title: 'President',
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTWxqqx8VoJq0xYIox0cmG85IWLWBRrcX9xzZL1fpJU19EfCnNHgcVX8Ql8xYPs61DRRwf9N1Tds3DmqQ0',
  },
  '818': {
    country: 'Egypt',
    name: 'Mostafa Madbouly',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSND-mMZ0LLmiYGM160T_r0Z33HfkhYyQN7nf_a_UMDgI7A4mHmWBlTr1Dwq99ftCcM0IoR3kENPMbBAapXePH6-TnMCbiRF4E7ysdKjK4&s=10',
  },
  '710': {
    country: 'South Africa',
    name: 'Cyril Ramaphosa',
    title: 'President',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlySEGJGwYc2x0qH_mU-8WZeGrHtXStqg-t_z5Wq24M0QN7kbPI_L2EG9c&s=10',
  },
  '036': {
    country: 'Australia',
    name: 'Anthony Albanese',
    title: 'Prime Minister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHd0AHbBHeNuWOoV4m_B2yspHsgPvEJ7aMMNFCVhWTlXlCNL0AMgDXwrvH&s=10',
  },
  '554': {
    country: 'New Zealand',
    name: 'Christopher Luxon',
    title: 'Prime Minister',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/LUXON%2C_Christopher_-_Botany_%28cropped%29.png/500px-LUXON%2C_Christopher_-_Botany_%28cropped%29.png',
  },
}

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
    caption: 'Choose your role below, the questions update to match what matters most to you.',
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
    'Mavio Global connects Indian products with global buyers through organised procurement, quality coordination, documentation, logistics, and digital visibility.',
  talkToUs: {
    heading: 'Have a sourcing requirement?',
    body: '',
    cta: { label: "Let's talk.", to: '/contact' },
    image:
      'https://images.unsplash.com/photo-1613690399151-65ea69478674?auto=format&fit=crop&w=2200&q=80',
  },
  columns: [
    {
      title: 'Navigation',
      links: [
        { label: 'Products', to: '/products' },
        { label: 'How We Work', to: '/capabilities/supply-chain-visibility' },
        { label: 'Why Mavio', to: '/partner-with-us' },
        { label: 'About Us', to: '/about' },
        { label: 'Global Presence', to: '/#global-presence' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Accreditations', to: '/resources/accreditations' },
        { label: 'Contact', to: '/contact' },
        { label: 'Privacy Policy', to: '/resources/privacy-policy' },
        { label: 'Terms', to: '/resources/terms' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', handle: 'Mavio Global', href: 'https://www.linkedin.com/company/mavio-global/' },
    { label: 'Instagram', handle: 'mavioglobal', href: 'https://www.instagram.com/mavioglobal' },
    { label: 'Facebook', handle: 'Mavio Global', href: 'https://www.facebook.com/profile.php?id=61590789818692' },
    { label: 'X', handle: 'mavioglobal', href: 'https://x.com/mavioglobal' },
    { label: 'YouTube', handle: 'Mavio Global', href: 'https://www.youtube.com/channel/UCjKWbkRlSFZE_awMK607upw' },
  ],
  socialGallery: [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCjKWbkRlSFZE_awMK607upw',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/social_media/youtube_5_11zon_5_11zon.webp',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61590789818692',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/social_media/facebook_1_11zon_1_11zon.webp',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mavioglobal',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/social_media/instagram_2_11zon_2_11zon.webp',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/mavio-global/',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/social_media/linkedin_3_11zon_3_11zon.webp',
    },
    {
      label: 'X',
      href: 'https://x.com/mavioglobal',
      image:
        'https://mavioglobal.s3.eu-north-1.amazonaws.com/homepage/social_media/x_4_11zon_4_11zon.webp',
    },
  ],
  contact: {
    email: 'contact@mavioglobal.com',
    phone: '+91 90526 88088',
    website: 'https://www.mavioglobal.com',
    whatsapp: 'https://wa.me/919052688088',
    address:
      'E/10, 2nd floor, 8-1-293, Old Mumbai Hwy, Senore Valley Villas, Ambedkar Nagar, Hyderabad, Telangana 500096',
    maps:
      'https://www.google.com/maps/search/?api=1&query=E%2F10%2C+2nd+floor%2C+8-1-293%2C+Old+Mumbai+Hwy%2C+Senore+Valley+Villas%2C+Ambedkar+Nagar%2C+Hyderabad%2C+Telangana+500096',
  },
}

export const downloadCentrePage = {
  hero: {
    heading: 'Find the resource you need',
    subheading: 'Catalogs, certifications, guides and templates, search or browse by category.',
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
        { title: 'Certificate of Origin: Sample & Guide', fileType: 'PDF · 0.6 MB' },
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
    body: 'If it’s not listed here, our team can put it together, certifications, lab reports or a custom spec sheet.',
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
    'This page covers our Privacy Policy and related site policies. It explains what information we collect when you contact Mavio Global, request a quote, download resources, or partner with us, and the rules that apply when you use this website.',
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
      body: 'Our site may use cookies and similar tools to remember preferences and understand how visitors use key pages such as Products and Contact. You can control cookies through your browser settings.',
    },
    {
      title: 'Website Use Policy',
      body: 'Content on this site, including product descriptions, catalogs, and capability summaries, is provided for general trade information. Quotes, availability, and lead times are confirmed only after a formal enquiry. You agree not to misuse forms, scrape content, or submit false commercial details.',
    },
    {
      title: 'Trade & Enquiry Policy',
      body: 'Submitting an enquiry does not create a binding contract. Commercial terms, Incoterms, payment methods, and documentation requirements are agreed separately for each shipment. Sample requests and custom specs are subject to availability and destination rules.',
    },
    {
      title: 'Data Retention',
      body: 'Enquiry and trade records are kept only as long as needed for commercial, legal, or compliance reasons, typically up to 7 years for shipment and customs-related correspondence, unless a longer period is required by law.',
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
    body: 'Reach our compliance desk at contact@mavioglobal.com or call +91 90526 88088. We aim to respond within two business days.',
  },
}

export const termsPage = {
  updatedAt: 'Last updated: 12 March 2026',
  intro:
    'These terms explain how you may use the Mavio Global website and what applies when you send an enquiry, request a quote, or begin a trade conversation with us.',
  sections: [
    {
      title: 'Use of this website',
      body: 'Content on this site, including product descriptions, catalogs, and capability summaries, is provided for general trade information. Quotes, availability, and lead times are confirmed only after a formal enquiry. You agree not to misuse forms, scrape content, or submit false commercial details.',
    },
    {
      title: 'Enquiries and trade',
      body: 'Submitting an enquiry does not create a binding contract. Commercial terms, Incoterms, payment methods, and documentation requirements are agreed separately for each shipment. Sample requests and custom specs are subject to availability and destination rules.',
    },
    {
      title: 'Liability',
      body: 'Mavio Global is not liable for decisions made solely on the basis of website copy. Confirmed specifications, pricing, and shipping terms are those stated in written commercial correspondence and contracts.',
    },
  ],
  contactNote: {
    heading: 'Questions about these terms?',
    body: 'Reach us at contact@mavioglobal.com or through the Contact page. We aim to respond within two business days.',
  },
}

export const contactPage = {
  headline: "Tell us what you need. We'll help you build the route.",
  body: 'Share your product, quantity, destination, specification, and timeline. Our team will review the requirement and come back with the next practical step.',
  whatsapp: {
    heading: 'Prefer a quick conversation?',
    body: 'Connect with our team on WhatsApp.',
    href: 'https://wa.me/919052688088',
    label: 'Chat on WhatsApp',
  },
  confirmation:
    "Thank you. Your requirement has reached the Mavio Global team. We'll review the details and contact you with the next step.",
  image:
    'https://mavioglobal.s3.eu-north-1.amazonaws.com/contact/6c8d27ad-1149-492d-91d2-234fe4be42e1.avif',
  fields: [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Full name', required: true },
    { key: 'email', label: 'Work Email', type: 'email', placeholder: 'you@company.com', required: true },
    { key: 'company', label: 'Company', type: 'text', placeholder: 'Company name', required: true },
    { key: 'country', label: 'Country', type: 'text', placeholder: 'Country', required: true },
    {
      key: 'category',
      label: 'Product / Category',
      type: 'select',
      placeholder: 'Select a category',
      options: productCategories.map((c) => c.name),
      required: true,
    },
    {
      key: 'quantity',
      label: 'Estimated Quantity',
      type: 'text',
      placeholder: 'e.g. 1 FCL / month',
      required: true,
    },
    {
      key: 'destination',
      label: 'Destination Port or City',
      type: 'text',
      placeholder: 'e.g. Jebel Ali, Dubai',
      required: true,
    },
    {
      key: 'specification',
      label: 'Required Specification',
      type: 'text',
      placeholder: 'Grade, packing, moisture, etc.',
      required: false,
    },
    {
      key: 'timeline',
      label: 'Expected Timeline',
      type: 'text',
      placeholder: 'e.g. Within 30 days',
      required: false,
    },
    {
      key: 'message',
      label: 'Message / Additional Requirements',
      type: 'textarea',
      placeholder: 'Anything else we should know',
      required: false,
      full: true,
    },
  ],
  cards: [
    {
      icon: 'MapPin',
      label: 'Location',
      value:
        'E/10, 2nd floor, 8-1-293, Old Mumbai Hwy, Senore Valley Villas, Ambedkar Nagar, Hyderabad, Telangana 500096',
      href: 'https://www.google.com/maps/search/?api=1&query=E%2F10%2C+2nd+floor%2C+8-1-293%2C+Old+Mumbai+Hwy%2C+Senore+Valley+Villas%2C+Ambedkar+Nagar%2C+Hyderabad%2C+Telangana+500096',
    },
    { icon: 'Phone', label: 'Call Us', value: '+91 90526 88088', href: 'tel:+919052688088' },
    { icon: 'Mail', label: 'Email', value: 'contact@mavioglobal.com', href: 'mailto:contact@mavioglobal.com' },
    { icon: 'Linkedin', label: 'LinkedIn', value: 'Mavio Global', href: 'https://www.linkedin.com/company/mavio-global/' },
    { icon: 'MessageCircle', label: 'WhatsApp', value: '+91 90526 88088', href: 'https://wa.me/919052688088' },
  ],
  flow: [
    { step: 'Submit', description: 'Share your requirement with product, quantity, and destination.' },
    { step: 'Review', description: 'Our team reviews the details and maps the practical next step.' },
    { step: 'We Reach Out', description: 'You hear back with clear guidance on how to proceed.' },
  ],
  support: {
    heading: 'Our global support',
    body: 'Buyers and suppliers across 25+ countries, our team responds within one business day, regardless of time zone.',
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
    subheading: 'Sustainability at Mavio Global rests on four commitments to people, to the planet, and to every partner along the way.',
    items: [
      {
        icon: 'Users',
        title: 'Women & Inclusive Workforce',
        subtitle: 'Nurturing the Hands Behind Global Trade',
        body: 'Behind every product moving across global borders, from factory assembly lines to quality control bays, are millions of women driving international trade. At Mavio Global, sustainability starts by uplifting these women at origin. We partner with suppliers who guarantee safe working environments, equal opportunities, and fair wages for women artisans, factory workers, and quality inspectors. When women thrive, local communities and industries grow stronger together.',
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
