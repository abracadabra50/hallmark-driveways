import { Organization, LocalBusiness, BreadcrumbList, FAQPage, Review, Service, WithContext } from 'schema-dts'

const edinburghAreas = [
  "Morningside",
  "Stockbridge", 
  "New Town",
  "Old Town",
  "Bruntsfield",
  "Marchmont",
  "Corstorphine",
  "Trinity",
  "Leith",
  "Portobello",
  "Duddingston",
  "Cramond",
  "Barnton",
  "Murrayfield",
  "Blackhall",
  "The Grange",
  "Newington",
  "Dalry",
  "Gorgie",
  "Balerno",
  "Currie",
  "Juniper Green",
  "Craigmillar",
  "Liberton",
  "Gilmerton",
  "Fountainbridge",
  "Tollcross",
  "Canongate",
  "Grassmarket",
  "Dean Village",
  "Calton Hill",
  "Arthur's Seat",
  "Holyrood",
  "Abbeyhill",
  "Pilrig",
  "Restalrig",
  "Lochend",
  "Meadowbank",
  "Joppa",
  "Musselburgh",
  "Prestonpans",
  "Tranent",
  "Haddington",
  "North Berwick",
  "Dunbar",
  "Livingston",
  "Bathgate",
  "Linlithgow",
  "Bo'ness",
  "Falkirk",
  "Stirling",
  "Alloa",
  "Clackmannan",
  "Dollar",
  "Tillicoultry"
]

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hallmark Driveways",
  alternateName: ["Hallmark Driveways Edinburgh", "Hallmark Driveway Company"],
  url: "https://hallmarkdriveways.com",
  logo: "https://hallmarkdriveways.com/logo.png",
  image: [
    "https://hallmarkdriveways.com/images/DJI_0164.jpg",
    "https://hallmarkdriveways.com/images/DJI_0225.jpg",
    "https://hallmarkdriveways.com/images/DJI_0207.jpg"
  ],
  description: "Edinburgh's premier driveway and landscaping specialists, delivering excellence in outdoor transformations across all Edinburgh areas. Specializing in block paving, resin driveways, pattern imprinted concrete, and complete garden landscaping.",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 South Charlotte Street",
    addressLocality: "Edinburgh",
    addressRegion: "Scotland",
    postalCode: "EH2 4AN",
    addressCountry: "GB"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "0800-135-7000",
      contactType: "customer service",
      areaServed: ["Edinburgh", "Lothians", "Scotland"],
      availableLanguage: "English",
      contactOption: "TollFree"
    },
    {
      "@type": "ContactPoint",
      email: "info@hallmarkdriveways.com",
      contactType: "customer service",
      areaServed: ["Edinburgh", "Lothians", "Scotland"],
      availableLanguage: "English"
    }
  ],
  sameAs: [
    "https://facebook.com/hallmarkdrives",
    "https://instagram.com/hallmarkdrives", 
    "https://twitter.com/hallmarkdrives",
    "https://linkedin.com/company/hallmarkdrives",
    "https://youtube.com/hallmarkdrives"
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Edinburgh",
      sameAs: "https://en.wikipedia.org/wiki/Edinburgh"
    },
    {
      "@type": "AdministrativeArea",
      name: "Lothians",
      sameAs: "https://en.wikipedia.org/wiki/Lothian"
    }
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 55.9533,
      longitude: -3.1883
    },
    geoRadius: "50000"
  }
}

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hallmarkdriveways.com/#business",
  name: "Hallmark Driveways",
  image: [
    "https://hallmarkdriveways.com/images/DJI_0164.jpg",
    "https://hallmarkdriveways.com/images/DJI_0225.jpg"
  ],
  telephone: "0800-135-7000",
  email: "info@hallmarkdriveways.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 South Charlotte Street",
    addressLocality: "Edinburgh", 
    addressRegion: "Scotland",
    postalCode: "EH2 4AN",
    addressCountry: "GB"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9533,
    longitude: -3.1883
  },
  url: "https://hallmarkdriveways.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"], 
      opens: "09:00",
      closes: "16:00"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "247",
    bestRating: "5",
    worstRating: "1"
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah Thompson"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "Absolutely delighted with our new driveway. The team was professional, punctual, and the workmanship is outstanding.",
      datePublished: "2024-01-15"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Driveway Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Block Paving Installation",
          description: "Professional block paving driveway installation with 10-year guarantee"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Resin Driveway Installation",
          description: "Permeable resin-bound driveway installation for modern properties"
        }
      }
    ]
  },
  priceRange: "££",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Finance Available"],
  currenciesAccepted: "GBP"
}

export const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://hallmarkdriveways.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://hallmarkdriveways.com/services"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Portfolio",
      item: "https://hallmarkdriveways.com/portfolio"
    }
  ]
}

export const areasServed = edinburghAreas

// Enhanced Edinburgh-specific Local Business Schema
export const edinburghLocalBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hallmarkdriveways.com/#edinburgh-business",
  name: "Hallmark Driveways - Edinburgh's Premier Driveway Specialists",
  alternateName: ["Hallmark Driveways Edinburgh", "Edinburgh Driveway Company", "Driveway Installation Edinburgh"],
  description: "Edinburgh's leading driveway installation specialists serving all Edinburgh postcodes (EH1-EH17). Expert in conservation area requirements, Georgian & Victorian properties, and Edinburgh Council planning permissions.",
  image: [
    "https://hallmarkdriveways.com/images/edinburgh-driveway-installation.jpg",
    "https://hallmarkdriveways.com/images/new-town-block-paving.jpg",
    "https://hallmarkdriveways.com/images/morningside-resin-driveway.jpg"
  ],
  telephone: "0800-135-7000",
  email: "info@hallmarkdriveways.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 South Charlotte Street",
    addressLocality: "Edinburgh", 
    addressRegion: "Scotland",
    postalCode: "EH2 4AN",
    addressCountry: "GB"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9533,
    longitude: -3.1883
  },
  url: "https://hallmarkdriveways.com",
  areaServed: [
    {
      "@type": "City",
      name: "Edinburgh",
      sameAs: "https://en.wikipedia.org/wiki/Edinburgh"
    },
    ...edinburghAreas.map(area => ({
      "@type": "Place" as const,
      name: `${area}, Edinburgh`
    }))
  ],
  serviceArea: [
    {
      "@type": "GeoCircle",
      name: "Edinburgh City Centre",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 55.9533,
        longitude: -3.1883
      },
      geoRadius: "25000"
    }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"], 
      opens: "09:00",
      closes: "16:00"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "247",
    bestRating: "5",
    worstRating: "1"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Edinburgh Driveway Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Block Paving Installation Edinburgh",
          description: "Professional block paving driveway installation across all Edinburgh areas with 10-year guarantee",
          areaServed: "Edinburgh",
          provider: {
            "@type": "LocalBusiness",
            name: "Hallmark Driveways"
          }
        },
        price: "£45-80 per square metre"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Resin Driveway Installation Edinburgh",
          description: "Permeable resin-bound driveway installation for Edinburgh properties",
          areaServed: "Edinburgh",
          provider: {
            "@type": "LocalBusiness",
            name: "Hallmark Driveways"
          }
        },
        price: "£40-70 per square metre"
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Edinburgh Planning Permission Assistance",
          description: "Expert planning permission assistance for Edinburgh Council applications including conservation areas",
          areaServed: "Edinburgh",
          provider: {
            "@type": "LocalBusiness",
            name: "Hallmark Driveways"
          }
        },
        price: "Free with installation"
      }
    ]
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Free Edinburgh Driveway Quote",
      description: "Free, no-obligation quotes for all Edinburgh driveway projects",
      price: "0",
      priceCurrency: "GBP"
    },
    {
      "@type": "Offer", 
      name: "10-Year Guarantee",
      description: "Industry-leading 10-year guarantee on all Edinburgh driveway installations"
    }
  ],
  knowsAbout: [
    "Edinburgh Council Planning Permission",
    "Conservation Area Requirements",
    "Georgian Property Driveways", 
    "Victorian Property Driveways",
    "New Town Edinburgh Driveways",
    "Block Paving Edinburgh",
    "Resin Driveways Edinburgh",
    "Pattern Concrete Edinburgh",
    "Edinburgh Climate Considerations"
  ],
  priceRange: "££",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Finance Available"],
  currenciesAccepted: "GBP"
}

// FAQ Schema for Edinburgh Driveway Questions
export const edinburghDrivewayFAQSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need planning permission for a driveway in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Edinburgh, you need planning permission if your property is in a conservation area (New Town, Old Town, Stockbridge, etc.), is listed, or if you're converting a front garden over 5m² to driveway. You also need permission for new dropped kerbs. Hallmark Driveways handles all Edinburgh Council applications free of charge."
      }
    },
    {
      "@type": "Question", 
      name: "What's the best driveway material for Edinburgh's climate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Block paving is ideal for Edinburgh's freeze-thaw cycles, allowing individual block replacement. Resin driveways offer excellent drainage for Edinburgh's 700mm annual rainfall. Pattern concrete is very durable but can crack in severe frost. We recommend materials based on your specific Edinburgh location and property type."
      }
    },
    {
      "@type": "Question",
      name: "How much does a driveway cost in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edinburgh driveway costs vary by material and location. Block paving: £45-80/m², Resin driveways: £40-70/m², Pattern concrete: £35-60/m². Additional costs include planning permission (£400-800), dropped kerbs (£500-1200), and potential access premiums for narrow Edinburgh streets. We provide transparent, all-inclusive quotes."
      }
    },
    {
      "@type": "Question",
      name: "Which Edinburgh areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer", 
        text: "We serve all Edinburgh postcodes EH1-EH17 including New Town, Old Town, Morningside, Stockbridge, Leith, Portobello, Corstorphine, and surrounding areas. We're specialists in conservation area requirements and Georgian/Victorian property considerations across Edinburgh."
      }
    },
    {
      "@type": "Question",
      name: "How long does driveway installation take in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Edinburgh driveway installations take 3-5 days depending on size and complexity. Planning permission adds 8-12 weeks. Conservation area applications may take longer. We work around Edinburgh's narrow streets and parking restrictions to minimize disruption to your neighbourhood."
      }
    },
    {
      "@type": "Question",
      name: "Do you handle Edinburgh Council planning applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we handle all Edinburgh Council planning applications at no extra charge. With 15+ years of Edinburgh experience, we know exactly what the council requires and have a 95%+ success rate. We prepare all documents, drawings, and heritage assessments needed for approval."
      }
    }
  ]
}

// Service Schema for Edinburgh Driveway Installation
export const edinburghDrivewayServiceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Edinburgh Driveway Installation",
  description: "Professional driveway installation services across all Edinburgh areas, specializing in conservation area requirements and heritage property considerations.",
  provider: {
    "@type": "LocalBusiness",
    name: "Hallmark Driveways",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 South Charlotte Street",
      addressLocality: "Edinburgh",
      postalCode: "EH2 4AN",
      addressCountry: "GB"
    }
  },
  areaServed: {
    "@type": "City",
    name: "Edinburgh"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Edinburgh Driveway Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EH1 New Town Driveway Installation",
          description: "Specialist driveway installation for Georgian properties in Edinburgh's New Town conservation area"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "EH3 Fountainbridge Driveway Installation",
          description: "Modern driveway solutions for contemporary properties in Fountainbridge Edinburgh"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EH10 Morningside Driveway Installation", 
          description: "Victorian property driveway specialists serving Morningside Edinburgh"
        }
      }
    ]
  },
  serviceOutput: {
    "@type": "Thing",
    name: "Professional Driveway Installation"
  },
  category: "Home Improvement",
  audience: {
    "@type": "Audience",
    geographicArea: {
      "@type": "City",
      name: "Edinburgh"
    }
  }
}