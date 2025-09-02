import { Suspense } from 'react'
import { AreaPageClient } from "./area-page-client"
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Home, TreePine, Award, Shield, MapPin, Wrench, GraduationCap } from "lucide-react"

// Area-specific data with Edinburgh-relevant images
const areaData: Record<string, {
  title: string
  description: string
  image: string
  postcode?: string
  region: string
  specialties: string[]
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  landmarks: string[]
  propertyTypes: string[]
}> = {
  "morningside": {
    title: "Morningside",
    description: "Premium driveway installation for Victorian villas and elegant properties in Edinburgh's prestigious Morningside area.",
    image: "/images/IMG_5610.JPG",
    postcode: "EH10",
    region: "Edinburgh",
    specialties: ["Victorian Villa Driveways", "Conservation Area Compliance", "Premium Block Paving", "Heritage Property Expertise"],
    features: [
      {
        icon: "Home",
        title: "Victorian Villa Specialist",
        description: "Expert installation for period properties with heritage considerations"
      },
      {
        icon: "TreePine",
        title: "Conservation Area Expertise", 
        description: "Full compliance with Morningside conservation area requirements"
      },
      {
        icon: "Award",
        title: "Premium Standards",
        description: "High-end materials and superior craftsmanship for prestigious properties"
      }
    ],
    landmarks: ["Morningside Clock", "Bruntsfield Links", "The Hermitage", "Blackford Hill"],
    propertyTypes: ["Victorian Villas", "Edwardian Terraces", "Garden Flats", "Period Properties"]
  },
  "stockbridge": {
    title: "Stockbridge",
    description: "Specialist driveway installation for the charming village atmosphere of Stockbridge, respecting its unique character and conservation requirements.",
    image: "/images/IMG_5616.JPG",
    postcode: "EH3/EH4",
    region: "Edinburgh",
    specialties: ["Village Character Preservation", "Georgian Property Driveways", "Narrow Street Access", "Conservation Compliance"],
    features: [
      {
        icon: "Home",
        title: "Village Character Specialist",
        description: "Preserving Stockbridge's unique village atmosphere in every installation"
      },
      {
        icon: "MapPin",
        title: "Narrow Street Expertise",
        description: "Specialist equipment and techniques for Stockbridge's narrow streets"
      },
      {
        icon: "TreePine",
        title: "Conservation Compliance",
        description: "Expert navigation of conservation area planning requirements"
      }
    ],
    landmarks: ["Stockbridge Market", "Royal Botanic Garden", "Water of Leith", "Inverleith Park"],
    propertyTypes: ["Georgian Townhouses", "Victorian Villas", "Converted Flats", "Mews Properties"]
  },
  "new-town": {
    title: "New Town",
    description: "UNESCO World Heritage Site driveway specialists. Expert in Georgian architecture requirements and Historic Environment Scotland compliance.",
    image: "/images/IMG_5624.JPG",
    postcode: "EH1/EH2",
    region: "Edinburgh",
    specialties: ["UNESCO Heritage Compliance", "Georgian Architecture", "Historic Environment Scotland", "Premium Materials"],
    features: [
      {
        icon: "Award",
        title: "UNESCO Heritage Specialist",
        description: "Expert compliance with World Heritage Site requirements"
      },
      {
        icon: "Home",
        title: "Georgian Architecture Expert",
        description: "Specialist knowledge of Georgian property requirements"
      },
      {
        icon: "Shield",
        title: "Historic Environment Scotland",
        description: "Full consultation and compliance with heritage authorities"
      }
    ],
    landmarks: ["Princes Street", "George Street", "Charlotte Square", "Edinburgh Castle"],
    propertyTypes: ["Georgian Townhouses", "Listed Buildings", "Heritage Properties", "Period Conversions"]
  },
  "leith": {
    title: "Leith",
    description: "Modern driveway solutions for Edinburgh's vibrant waterfront district. From converted warehouses to contemporary developments.",
    image: "/images/IMG_5630.JPG",
    postcode: "EH6",
    region: "Edinburgh",
    specialties: ["Waterfront Properties", "Industrial Conversions", "Modern Developments", "Marine Environment Durability"],
    features: [
      {
        icon: "Home",
        title: "Waterfront Specialist",
        description: "Durable solutions for coastal and waterfront properties"
      },
      {
        icon: "Award",
        title: "Industrial Conversion Expert",
        description: "Specialist experience with converted warehouses and industrial buildings"
      },
      {
        icon: "Shield",
        title: "Marine Durability",
        description: "Materials and techniques suited to marine environments"
      }
    ],
    landmarks: ["Leith Docks", "Royal Yacht Britannia", "The Shore", "Ocean Terminal"],
    propertyTypes: ["Warehouse Conversions", "Modern Apartments", "Traditional Tenements", "Waterfront Properties"]
  },
  "portobello": {
    title: "Portobello",
    description: "Seaside driveway specialists for Edinburgh's beloved beach community. Expert in coastal conditions and Victorian seaside properties.",
    image: "/images/IMG_5610.JPG",
    postcode: "EH15",
    region: "Edinburgh",
    specialties: ["Seaside Properties", "Victorian Seaside Architecture", "Salt Air Resistance", "Beach Community Expertise"],
    features: [
      {
        icon: "TreePine",
        title: "Coastal Specialist",
        description: "Materials and techniques resistant to salt air and coastal conditions"
      },
      {
        icon: "Home",
        title: "Victorian Seaside Expert",
        description: "Specialist knowledge of Victorian seaside property requirements"
      },
      {
        icon: "Award",
        title: "Beach Community Focus",
        description: "Understanding the unique character of Edinburgh's seaside community"
      }
    ],
    landmarks: ["Portobello Beach", "Portobello Promenade", "The Wash House", "Joppa Rocks"],
    propertyTypes: ["Victorian Villas", "Seaside Terraces", "Beach Houses", "Holiday Properties"]
  },
  "corstorphine": {
    title: "Corstorphine",
    description: "Suburban excellence in driveway installation for Corstorphine's mix of traditional and modern properties.",
    image: "/images/IMG_5616.JPG",
    postcode: "EH12/EH13",
    region: "Edinburgh",
    specialties: ["Suburban Properties", "Mixed Architecture", "Family Homes", "Garden Integration"],
    features: [
      {
        icon: "Home",
        title: "Suburban Specialist",
        description: "Expert in suburban property requirements and family-friendly designs"
      },
      {
        icon: "TreePine",
        title: "Garden Integration",
        description: "Seamless integration with established gardens and landscaping"
      },
      {
        icon: "Award",
        title: "Mixed Architecture Expert",
        description: "Experience with both traditional and modern property styles"
      }
    ],
    landmarks: ["Edinburgh Zoo", "Corstorphine Hill", "Murrayfield Stadium", "Drumbrae"],
    propertyTypes: ["Suburban Villas", "Family Homes", "Modern Developments", "Traditional Properties"]
  },
  "livingston": {
    title: "Livingston",
    description: "Modern driveway solutions for West Lothian's largest town. Specialist in contemporary developments and family properties.",
    image: "/images/IMG_5624.JPG",
    postcode: "EH54",
    region: "West Lothian",
    specialties: ["New Town Planning", "Contemporary Developments", "Family Properties", "Modern Materials"],
    features: [
      {
        icon: "Home",
        title: "New Town Specialist",
        description: "Expert in planned development requirements and modern property standards"
      },
      {
        icon: "Award",
        title: "Contemporary Design",
        description: "Modern driveway solutions for contemporary West Lothian properties"
      },
      {
        icon: "Shield",
        title: "Family-Focused",
        description: "Safe, durable solutions perfect for family homes and children"
      }
    ],
    landmarks: ["Livingston Designer Outlet", "Almondell Country Park", "Howden Park Centre", "The Centre"],
    propertyTypes: ["Modern Detached", "Family Homes", "Contemporary Developments", "New Build Properties"]
  },
  "linlithgow": {
    title: "Linlithgow",
    description: "Historic royal burgh driveway specialists. Expert in heritage properties and conservation area requirements in West Lothian.",
    image: "/images/IMG_5630.JPG",
    postcode: "EH49",
    region: "West Lothian",
    specialties: ["Historic Royal Burgh", "Heritage Properties", "Conservation Areas", "Period Architecture"],
    features: [
      {
        icon: "Award",
        title: "Royal Burgh Specialist",
        description: "Expert in historic royal burgh property requirements and heritage considerations"
      },
      {
        icon: "Home",
        title: "Period Property Expert",
        description: "Specialist knowledge of period architecture and conservation requirements"
      },
      {
        icon: "TreePine",
        title: "Heritage Compliance",
        description: "Full understanding of West Lothian heritage and conservation regulations"
      }
    ],
    landmarks: ["Linlithgow Palace", "St. Michael's Church", "Linlithgow Loch", "Union Canal"],
    propertyTypes: ["Historic Properties", "Period Townhouses", "Heritage Buildings", "Traditional Scottish Properties"]
  },
  "bathgate": {
    title: "Bathgate",
    description: "Comprehensive driveway services for Bathgate and surrounding West Lothian areas. Modern solutions for traditional Scottish properties.",
    image: "/images/IMG_5610.JPG",
    postcode: "EH48",
    region: "West Lothian",
    specialties: ["Traditional Scottish Properties", "Industrial Heritage", "Mixed Developments", "Weather-Resistant Solutions"],
    features: [
      {
        icon: "Home",
        title: "Scottish Property Specialist",
        description: "Expert in traditional Scottish property requirements and local architecture"
      },
      {
        icon: "Shield",
        title: "Weather Resistance",
        description: "Durable solutions designed for West Lothian's varied weather conditions"
      },
      {
        icon: "Award",
        title: "Industrial Heritage",
        description: "Understanding of West Lothian's industrial heritage and converted properties"
      }
    ],
    landmarks: ["Bathgate Hills", "Cairnpapple Hill", "Bathgate Partnership Centre", "Balbardie Park"],
    propertyTypes: ["Traditional Scottish Homes", "Industrial Conversions", "Modern Developments", "Rural Properties"]
  },
  "haddington": {
    title: "Haddington",
    description: "East Lothian's county town driveway specialists. Expert in historic properties and rural estate requirements.",
    image: "/images/IMG_5616.JPG",
    postcode: "EH41",
    region: "East Lothian",
    specialties: ["County Town Heritage", "Rural Estates", "Historic Properties", "Agricultural Access"],
    features: [
      {
        icon: "Award",
        title: "County Town Specialist",
        description: "Expert in East Lothian's county town heritage and property requirements"
      },
      {
        icon: "Home",
        title: "Rural Estate Expert",
        description: "Specialist experience with rural estates and agricultural property access"
      },
      {
        icon: "TreePine",
        title: "Historic Property Focus",
        description: "Deep understanding of historic property conservation in East Lothian"
      }
    ],
    landmarks: ["Haddington Town House", "St. Mary's Church", "River Tyne", "Lennoxlove House"],
    propertyTypes: ["Historic Town Properties", "Rural Estates", "Period Buildings", "Agricultural Properties"]
  },
  "north-berwick": {
    title: "North Berwick",
    description: "Coastal town driveway specialists for East Lothian's premier seaside destination. Expert in coastal conditions and premium properties.",
    image: "/images/IMG_5624.JPG",
    postcode: "EH39",
    region: "East Lothian",
    specialties: ["Coastal Properties", "Premium Seaside Homes", "Golf Course Properties", "Marine Environment"],
    features: [
      {
        icon: "TreePine",
        title: "Coastal Specialist",
        description: "Expert in coastal conditions and salt-resistant materials for seaside properties"
      },
      {
        icon: "Award",
        title: "Premium Property Focus",
        description: "High-end solutions for North Berwick's prestigious seaside properties"
      },
      {
        icon: "Home",
        title: "Golf Course Expertise",
        description: "Specialist experience with golf course and sporting facility properties"
      }
    ],
    landmarks: ["Bass Rock", "North Berwick Beach", "Tantallon Castle", "Glen Golf Club"],
    propertyTypes: ["Seaside Villas", "Golf Course Properties", "Premium Homes", "Coastal Developments"]
  },
  "musselburgh": {
    title: "Musselburgh",
    description: "Historic Honest Toun driveway specialists. Expert in racecourse properties and East Lothian's oldest settlement.",
    image: "/images/IMG_5630.JPG",
    postcode: "EH21",
    region: "East Lothian",
    specialties: ["Historic Settlement", "Racecourse Properties", "Traditional Scottish Architecture", "Coastal Access"],
    features: [
      {
        icon: "Award",
        title: "Historic Settlement Expert",
        description: "Specialist knowledge of Scotland's oldest settlement and heritage requirements"
      },
      {
        icon: "Home",
        title: "Racecourse Property Focus",
        description: "Expert experience with racecourse and sporting facility properties"
      },
      {
        icon: "Shield",
        title: "Traditional Architecture",
        description: "Deep understanding of traditional Scottish architectural requirements"
      }
    ],
    landmarks: ["Musselburgh Racecourse", "Musselburgh Links", "River Esk", "Honest Toun"],
    propertyTypes: ["Historic Properties", "Racecourse Homes", "Traditional Scottish Buildings", "Riverside Properties"]
  },
  "old-town": {
    title: "Old Town",
    description: "UNESCO World Heritage Site driveway specialists for Edinburgh's historic Old Town. Expert in medieval street layouts and listed building requirements.",
    image: "/images/IMG_5610.JPG",
    postcode: "EH1",
    region: "Edinburgh",
    specialties: ["UNESCO Heritage", "Medieval Architecture", "Listed Buildings", "Royal Mile Properties"],
    features: [
      {
        icon: "Award",
        title: "UNESCO Heritage Expert",
        description: "Specialist in World Heritage Site compliance and medieval property requirements"
      },
      {
        icon: "Home",
        title: "Listed Building Specialist",
        description: "Expert experience with Category A, B, and C listed properties"
      },
      {
        icon: "Shield",
        title: "Historic Environment Scotland",
        description: "Full consultation and compliance with heritage conservation requirements"
      }
    ],
    landmarks: ["Royal Mile", "Edinburgh Castle", "Grassmarket", "Canongate"],
    propertyTypes: ["Listed Buildings", "Medieval Properties", "Historic Townhouses", "Heritage Conversions"]
  },
  "bruntsfield": {
    title: "Bruntsfield",
    description: "Victorian elegance meets modern living. Specialist driveway installation for Bruntsfield's prestigious terraces and garden properties.",
    image: "/images/IMG_5616.JPG",
    postcode: "EH10",
    region: "Edinburgh",
    specialties: ["Victorian Terraces", "Garden Properties", "Period Features", "Conservation Compliance"],
    features: [
      {
        icon: "Home",
        title: "Victorian Terrace Specialist",
        description: "Expert in Victorian terrace properties and period architectural features"
      },
      {
        icon: "TreePine",
        title: "Garden Integration Expert",
        description: "Seamless integration with mature gardens and established landscaping"
      },
      {
        icon: "Award",
        title: "Period Property Focus",
        description: "Specialist knowledge of period property requirements and conservation"
      }
    ],
    landmarks: ["Bruntsfield Links", "The Meadows", "Warrender Baths", "Bruntsfield Place"],
    propertyTypes: ["Victorian Terraces", "Garden Flats", "Period Properties", "Traditional Townhouses"]
  },
  "marchmont": {
    title: "Marchmont",
    description: "Student area and Victorian tenement specialists. Expert in shared access solutions and flexible scheduling for Edinburgh's academic quarter.",
    image: "/images/IMG_5624.JPG",
    postcode: "EH9",
    region: "Edinburgh",
    specialties: ["Victorian Tenements", "Student Properties", "Shared Access", "Academic Scheduling"],
    features: [
      {
        icon: "Home",
        title: "Tenement Specialist",
        description: "Expert in Victorian tenement properties and communal area requirements"
      },
      {
        icon: "Shield",
        title: "Shared Access Solutions",
        description: "Specialist coordination for shared driveways and communal spaces"
      },
      {
        icon: "Award",
        title: "Student-Friendly Service",
        description: "Flexible scheduling around academic calendars and student needs"
      }
    ],
    landmarks: ["The Meadows", "Marchmont Road", "Warrender Park", "Sciennes"],
    propertyTypes: ["Victorian Tenements", "Student Accommodation", "Shared Properties", "Academic Housing"]
  },
  "trinity": {
    title: "Trinity",
    description: "Coastal Edinburgh driveway specialists. Expert in seaside properties and salt-resistant materials near the Firth of Forth.",
    image: "/images/IMG_5630.JPG",
    postcode: "EH5",
    region: "Edinburgh",
    specialties: ["Coastal Properties", "Salt Resistance", "Seaside Architecture", "Marine Durability"],
    features: [
      {
        icon: "Shield",
        title: "Coastal Specialist",
        description: "Expert in salt-resistant materials and coastal weather protection"
      },
      {
        icon: "Home",
        title: "Seaside Property Expert",
        description: "Specialist knowledge of coastal property requirements and marine conditions"
      },
      {
        icon: "Award",
        title: "Marine Durability Focus",
        description: "Materials and techniques designed for harsh coastal environments"
      }
    ],
    landmarks: ["Trinity House", "Wardie Bay", "Granton Harbour", "Firth of Forth"],
    propertyTypes: ["Coastal Properties", "Seaside Homes", "Marine Developments", "Waterfront Buildings"]
  },
  "duddingston": {
    title: "Duddingston",
    description: "Historic village driveway specialists near Arthur's Seat. Expert in conservation requirements and traditional Scottish architecture.",
    image: "/images/IMG_5610.JPG",
    postcode: "EH15",
    region: "Edinburgh",
    specialties: ["Historic Village", "Conservation Area", "Traditional Architecture", "Rural Character"],
    features: [
      {
        icon: "TreePine",
        title: "Historic Village Expert",
        description: "Specialist in historic village conservation and traditional architecture"
      },
      {
        icon: "Home",
        title: "Rural Character Preservation",
        description: "Maintaining the rural character whilst providing modern driveway solutions"
      },
      {
        icon: "Award",
        title: "Conservation Compliance",
        description: "Expert navigation of conservation area requirements and planning"
      }
    ],
    landmarks: ["Duddingston Loch", "Arthur's Seat", "Holyrood Park", "Duddingston Kirk"],
    propertyTypes: ["Historic Village Properties", "Traditional Scottish Homes", "Rural Cottages", "Conservation Properties"]
  },
  "cramond": {
    title: "Cramond",
    description: "Historic coastal village specialists. Expert in Roman heritage properties and unique tidal access considerations.",
    image: "/images/IMG_5616.JPG",
    postcode: "EH4",
    region: "Edinburgh",
    specialties: ["Historic Coastal Village", "Roman Heritage", "Tidal Considerations", "Unique Access"],
    features: [
      {
        icon: "Award",
        title: "Historic Coastal Expert",
        description: "Specialist in historic coastal village properties and Roman heritage sites"
      },
      {
        icon: "Shield",
        title: "Tidal Access Specialist",
        description: "Understanding unique tidal access patterns and coastal considerations"
      },
      {
        icon: "Home",
        title: "Village Character Focus",
        description: "Preserving Cramond's unique historic village character and charm"
      }
    ],
    landmarks: ["Cramond Island", "Roman Fort", "River Almond", "Cramond Kirk"],
    propertyTypes: ["Historic Coastal Properties", "Village Cottages", "Heritage Buildings", "Waterfront Homes"]
  },
  "barnton": {
    title: "Barnton",
    description: "Premium suburban driveway installation for Barnton's exclusive properties. Expert in large driveways and luxury home requirements.",
    image: "/images/IMG_5624.JPG",
    postcode: "EH4",
    region: "Edinburgh",
    specialties: ["Premium Suburban", "Large Driveways", "Luxury Properties", "Executive Homes"],
    features: [
      {
        icon: "Award",
        title: "Premium Property Specialist",
        description: "Expert in luxury home requirements and high-end driveway installations"
      },
      {
        icon: "Home",
        title: "Large Driveway Expert",
        description: "Specialist experience with extensive driveways and multiple vehicle access"
      },
      {
        icon: "Shield",
        title: "Executive Standards",
        description: "Premium materials and superior craftsmanship for executive properties"
      }
    ],
    landmarks: ["Royal Burgess Golf Club", "Barnton Avenue", "Cramond Bridge", "Davidson's Mains"],
    propertyTypes: ["Executive Homes", "Large Suburban Properties", "Golf Course Properties", "Premium Developments"]
  },
  "the-grange": {
    title: "The Grange",
    description: "Prestigious Edinburgh address specialists. Expert in Victorian villa driveways and conservation area compliance in The Grange.",
    image: "/images/IMG_5630.JPG",
    postcode: "EH9",
    region: "Edinburgh",
    specialties: ["Victorian Villas", "Prestigious Properties", "Conservation Area", "Heritage Features"],
    features: [
      {
        icon: "Award",
        title: "Prestigious Property Expert",
        description: "Specialist in high-end Victorian villas and prestigious Edinburgh addresses"
      },
      {
        icon: "Home",
        title: "Victorian Villa Focus",
        description: "Expert knowledge of Victorian villa requirements and period features"
      },
      {
        icon: "TreePine",
        title: "Conservation Specialist",
        description: "Full compliance with Grange conservation area planning requirements"
      }
    ],
    landmarks: ["Grange Cemetery", "Dick Place", "Lauder Road", "Blackford Hill"],
    propertyTypes: ["Victorian Villas", "Period Properties", "Heritage Homes", "Conservation Buildings"]
  },
  "newington": {
    title: "Newington",
    description: "University area driveway specialists. Expert in student properties, shared access, and flexible scheduling around academic calendars.",
    image: "/images/IMG_5610.JPG",
    postcode: "EH8/EH9",
    region: "Edinburgh",
    specialties: ["University Area", "Student Properties", "Academic Scheduling", "Shared Access"],
    features: [
      {
        icon: "Home",
        title: "University Area Expert",
        description: "Specialist knowledge of university area properties and student accommodation"
      },
      {
        icon: "Shield",
        title: "Academic Calendar Friendly",
        description: "Flexible scheduling around academic terms and examination periods"
      },
      {
        icon: "Award",
        title: "Student Property Focus",
        description: "Understanding of multiple occupancy and shared living arrangements"
      }
    ],
    landmarks: ["University of Edinburgh", "Royal Observatory", "Blackford Hill", "Mayfield"],
    propertyTypes: ["Student Accommodation", "University Properties", "Victorian Terraces", "Academic Buildings"]
  },
  "prestonpans": {
    title: "Prestonpans",
    description: "Historic East Lothian town driveway specialists. Expert in traditional Scottish properties and coastal considerations.",
    image: "/images/IMG_5616.JPG",
    postcode: "EH32",
    region: "East Lothian",
    specialties: ["Historic Town", "Traditional Scottish", "Coastal Properties", "Heritage Features"],
    features: [
      {
        icon: "Award",
        title: "Historic Town Expert",
        description: "Specialist in East Lothian's historic town properties and traditional architecture"
      },
      {
        icon: "Shield",
        title: "Coastal Durability",
        description: "Materials and techniques suited to coastal East Lothian conditions"
      },
      {
        icon: "Home",
        title: "Traditional Scottish Focus",
        description: "Expert knowledge of traditional Scottish property requirements"
      }
    ],
    landmarks: ["Prestonpans Battlefield", "Hamilton House", "Prestongrange Museum", "Firth of Forth"],
    propertyTypes: ["Historic Town Properties", "Traditional Scottish Homes", "Coastal Properties", "Heritage Buildings"]
  },
  "tranent": {
    title: "Tranent",
    description: "East Lothian market town driveway specialists. Expert in rural and suburban properties with agricultural access considerations.",
    image: "/images/IMG_5624.JPG",
    postcode: "EH33",
    region: "East Lothian",
    specialties: ["Market Town", "Rural Properties", "Agricultural Access", "Suburban Developments"],
    features: [
      {
        icon: "Home",
        title: "Market Town Specialist",
        description: "Expert in East Lothian market town properties and rural considerations"
      },
      {
        icon: "Shield",
        title: "Agricultural Access Expert",
        description: "Specialist knowledge of agricultural access and rural property requirements"
      },
      {
        icon: "Award",
        title: "Rural-Suburban Mix",
        description: "Understanding both rural and suburban property development needs"
      }
    ],
    landmarks: ["Tranent Parish Church", "Ormiston Hall", "Meadowmill Sports Centre", "Fa'side Castle"],
    propertyTypes: ["Market Town Properties", "Rural Homes", "Agricultural Properties", "Suburban Developments"]
  },
  "dunbar": {
    title: "Dunbar",
    description: "East Lothian coastal town specialists. Expert in seaside properties, harbour access, and historic Scottish architecture.",
    image: "/images/IMG_5630.JPG",
    postcode: "EH42",
    region: "East Lothian",
    specialties: ["Coastal Town", "Harbour Properties", "Historic Scottish", "Marine Environment"],
    features: [
      {
        icon: "Shield",
        title: "Coastal Town Expert",
        description: "Specialist in coastal town properties and marine environment considerations"
      },
      {
        icon: "Home",
        title: "Harbour Access Specialist",
        description: "Expert knowledge of harbour access and coastal property requirements"
      },
      {
        icon: "Award",
        title: "Historic Scottish Focus",
        description: "Deep understanding of historic Scottish coastal architecture"
      }
    ],
    landmarks: ["Dunbar Castle", "Dunbar Harbour", "John Muir Country Park", "Belhaven Beach"],
    propertyTypes: ["Coastal Properties", "Historic Town Houses", "Harbour Properties", "Seaside Developments"]
  }
}

interface AreaPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const slugs = Object.keys(areaData)
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const area = areaData[params.slug]
  
  if (!area) {
    return {
      title: 'Area Not Found | Hallmark Driveways',
      description: 'The requested area page could not be found.'
    }
  }

  return {
    title: `Driveway Installation ${area.title} ${area.region} | Hallmark Driveways`,
    description: `${area.description} Expert driveway installation in ${area.title} with 10-year guarantee. Free quotes available.`,
    keywords: `driveway installation ${area.title.toLowerCase()}, ${area.title.toLowerCase()} driveways, block paving ${area.title.toLowerCase()}, ${area.region.toLowerCase()} driveway company`,
    openGraph: {
      title: `Premium Driveways in ${area.title} | Hallmark Driveways`,
      description: area.description,
      images: [area.image],
    }
  }
}

export default function Page({ params }: AreaPageProps) {
  const area = areaData[params.slug]
  
  if (!area) {
    notFound()
  }

  return (
    <Suspense fallback={null}>
      <AreaPageClient area={area} />
    </Suspense>
  )
}