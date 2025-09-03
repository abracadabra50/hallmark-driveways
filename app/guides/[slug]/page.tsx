import { Suspense } from 'react'
import { GuidePageClient } from "./guide-page-client"
import type { Guide } from "./types"

// This would typically come from a CMS or database
const guides: Record<string, Guide> = {
  "2024-driveway-design-trends-edinburgh": {
    title: "2024 Driveway Design Trends: What's Hot in Edinburgh",
    excerpt: "Discover the latest driveway design trends taking Edinburgh by storm. From sustainable materials to smart integration, explore what's shaping outdoor spaces this year.",
    image: "/images/IMG_5610.JPG",
    category: "Industry Insights",
    date: "August 20, 2025",
    author: {
      name: "Darren Inglis",
      role: "Managing Director",
      image: "/images/IMG_5616.JPG"
    },
    readTime: "8 min read",
    relatedGuides: [
      "resin-driveways-guide",
      "eco-friendly-driveways"
    ],
    content: `
      <h2 id="sustainable-materials">Sustainable Materials Leading the Way</h2>
      <p>2024 has seen a significant shift towards environmentally conscious driveway solutions in Edinburgh. Homeowners are increasingly choosing materials that not only look stunning but also contribute to environmental sustainability.</p>
      
      <p>Permeable resin-bound surfaces have become particularly popular, offering excellent drainage while reducing surface water runoff. These surfaces comply with SUDS (Sustainable Urban Drainage Systems) regulations, making them an ideal choice for Edinburgh properties.</p>

      <h2 id="smart-integration">Smart Technology Integration</h2>
      <p>The integration of smart technology into driveway design is no longer a luxury—it's becoming standard. LED lighting systems with motion sensors, heated driveway elements for winter months, and even smart irrigation systems for surrounding landscaping are trending features.</p>

      <h2 id="color-trends">Color and Pattern Trends</h2>
      <p>This year's color palette favors natural, earthy tones that complement Edinburgh's historic architecture. Warm grays, sandstone hues, and charcoal blacks are dominating the scene, often combined in sophisticated patterns.</p>

      <ul>
        <li>Herringbone patterns in contrasting colors</li>
        <li>Large format slabs with minimal jointing</li>
        <li>Mixed material designs combining stone and resin</li>
        <li>Geometric patterns inspired by contemporary architecture</li>
      </ul>

      <h2 id="maintenance-considerations">Low-Maintenance Solutions</h2>
      <p>Edinburgh homeowners are prioritizing low-maintenance solutions that look great year-round with minimal upkeep. This has led to increased demand for sealed surfaces, stain-resistant materials, and designs that naturally hide wear and weathering.</p>

      <h2 id="future-outlook">Looking Ahead</h2>
      <p>As we move through 2024, we expect to see continued innovation in sustainable materials, smart integration, and designs that seamlessly blend with Edinburgh's unique architectural heritage while meeting modern lifestyle needs.</p>
    `
  },
  "complete-block-paving-guide": {
    title: "The Complete Guide to Block Paving: From Planning to Perfection",
    excerpt: "Everything you need to know about block paving installation, from choosing the right materials to understanding the process and maintenance requirements.",
    image: "/images/IMG_5610.JPG",
    category: "Expert Tips",
    date: "August 15, 2025",
    author: {
      name: "Darren Inglis",
      role: "Managing Director",
      image: "/images/IMG_5617.JPG"
    },
    readTime: "12 min read",
    relatedGuides: [
      "resin-driveways-guide",
      "pattern-concrete-guide"
    ],
    content: `
      <h2 id="understanding">Understanding Block Paving</h2>
      <p>Block paving is one of the most popular choices for driveways in Edinburgh, offering durability, aesthetic appeal, and excellent value for money. This comprehensive guide will walk you through everything you need to know about block paving installation.</p>

      <h2 id="types">Types of Block Paving Materials</h2>
      <p>There are several types of block paving materials available, each with their own characteristics:</p>
      <ul>
        <li><strong>Concrete Blocks</strong> - Affordable and versatile with a wide range of colors and finishes</li>
        <li><strong>Clay Pavers</strong> - Premium option with natural colors that improve with age</li>
        <li><strong>Natural Stone</strong> - Highest quality with unique character and exceptional durability</li>
      </ul>

      <h2 id="patterns">Popular Block Paving Patterns</h2>
      <p>The pattern you choose can dramatically impact the final look and structural integrity:</p>
      <ul>
        <li><strong>Herringbone</strong> - Most popular for driveways due to its interlocking strength</li>
        <li><strong>Stretcher Bond</strong> - Classic and simple pattern, ideal for pathways</li>
        <li><strong>Basketweave</strong> - Traditional look, perfect for period properties</li>
        <li><strong>Random Pattern</strong> - Natural stone appearance with irregular shapes</li>
      </ul>

      <h2 id="installation">Professional Installation Process</h2>
      <p>Professional installation typically follows these critical steps:</p>
      <ol>
        <li><strong>Site Preparation</strong>
          <ul>
            <li>Excavation to required depth (typically 200-250mm)</li>
            <li>Installation of drainage systems where needed</li>
            <li>Compaction of sub-base using mechanical compactors</li>
          </ul>
        </li>
        <li><strong>Edge Restraints</strong>
          <ul>
            <li>Installation of concrete edge courses</li>
            <li>Securing boundaries to prevent movement</li>
          </ul>
        </li>
        <li><strong>Laying Course</strong>
          <ul>
            <li>Screeding sharp sand to create level surface</li>
            <li>Ensuring proper falls for drainage</li>
          </ul>
        </li>
        <li><strong>Block Installation</strong>
          <ul>
            <li>Laying blocks in chosen pattern</li>
            <li>Cutting blocks to fit edges and obstacles</li>
            <li>Final compaction with plate compactor</li>
          </ul>
        </li>
        <li><strong>Finishing</strong>
          <ul>
            <li>Jointing sand application and vibration</li>
            <li>Final inspection and cleanup</li>
          </ul>
        </li>
      </ol>

      <h2 id="maintenance">Maintenance Tips</h2>
      <p>To keep your block paving looking its best:</p>
      <ul>
        <li>Regular sweeping to prevent weed growth in joints</li>
        <li>Annual cleaning with pressure washer (careful not to damage joints)</li>
        <li>Reapplication of jointing sand when needed</li>
        <li>Sealing every 3-5 years to protect against stains</li>
        <li>Prompt treatment of oil stains and spills</li>
      </ul>

      <h2 id="costs">Cost Considerations</h2>
      <p>The cost of block paving installation depends on several factors:</p>
      <ul>
        <li>Size of the area (larger areas typically cost less per m²)</li>
        <li>Choice of materials (concrete vs clay vs natural stone)</li>
        <li>Pattern complexity (simple patterns cost less to install)</li>
        <li>Site preparation requirements (drainage, excavation depth)</li>
        <li>Access to the site (restricted access increases costs)</li>
      </ul>

      <h2>Why Choose Professional Installation?</h2>
      <p>While DIY is possible for small areas, professional installation offers several benefits:</p>
      <ul>
        <li>Proper drainage design to prevent water damage</li>
        <li>Guaranteed workmanship with warranty coverage</li>
        <li>Efficient completion with minimal disruption</li>
        <li>Access to trade-quality materials at better prices</li>
        <li>Compliance with local building regulations</li>
        <li>Long-term warranty and aftercare service</li>
      </ul>
    `
  },
  "resin-driveways-guide": {
    title: "Resin Driveways: The Modern Solution for Edinburgh Homes",
    excerpt: "Why resin-bound driveways are becoming the go-to choice for modern Edinburgh properties. Explore benefits, costs, and stunning design possibilities.",
    image: "/images/IMG_5616.JPG",
    category: "Design Inspiration",
    date: "August 12, 2025",
    author: {
      name: "Darren Inglis",
      role: "Managing Director",
      image: "/images/IMG_5624.JPG"
    },
    readTime: "10 min read",
    relatedGuides: [
      "complete-block-paving-guide",
      "ultimate-edinburgh-driveway-guide"
    ],
    content: `
      <h2>Introduction to Resin Driveways</h2>
      <p>Resin driveways are becoming increasingly popular in Edinburgh due to their durability, aesthetic appeal, and low maintenance requirements. This modern surfacing solution offers homeowners a perfect blend of functionality and style.</p>

      <h2>Types of Resin Systems</h2>
      <p>There are two main types of resin driveway systems:</p>
      <ul>
        <li><strong>Resin Bound</strong> - Aggregate is mixed with resin before application, creating a smooth, permeable surface</li>
        <li><strong>Resin Bonded</strong> - Resin is applied first, then aggregate is scattered on top, creating a textured finish</li>
      </ul>

      <h2>Benefits of Resin Driveways</h2>
      <ul>
        <li><strong>Permeable and SUDS compliant</strong> - Allows water to drain naturally</li>
        <li><strong>Wide range of colors and finishes</strong> - Customizable to match your property</li>
        <li><strong>Low maintenance requirements</strong> - Easy to clean and maintain</li>
        <li><strong>Excellent durability</strong> - Resistant to cracking and weather damage</li>
        <li><strong>Smooth finish</strong> - Comfortable to walk on and easy to clean</li>
      </ul>

      <h2>Design Options</h2>
      <p>Resin driveways offer extensive design flexibility:</p>
      <ul>
        <li>Natural stone aggregates in various colors</li>
        <li>Decorative borders and patterns</li>
        <li>Integration with existing landscaping</li>
        <li>Custom color matching to complement your property</li>
      </ul>

      <h2>Installation Process</h2>
      <p>Professional installation ensures the best results:</p>
      <ol>
        <li>Site preparation and base construction</li>
        <li>Application of primer where required</li>
        <li>Mixing of resin and aggregate</li>
        <li>Application and leveling</li>
        <li>Final finishing and curing</li>
      </ol>

      <h2>Maintenance and Care</h2>
      <p>Resin driveways require minimal maintenance:</p>
      <ul>
        <li>Regular sweeping to remove debris</li>
        <li>Occasional pressure washing</li>
        <li>Prompt treatment of any stains</li>
        <li>Annual inspection for any minor repairs</li>
      </ul>
    `
  },
  "ultimate-edinburgh-driveway-guide": {
    title: "Ultimate Edinburgh Driveway Guide 2024: Complete Installation Guide",
    excerpt: "Everything you need to know about driveway installation in Edinburgh. Costs, materials, planning permission, best contractors, and area-specific considerations.",
    image: "/images/IMG_5610.JPG",
    category: "Expert Tips",
    date: "August 15, 2025",
    author: {
      name: "Darren Inglis",
      role: "Managing Director",
      image: "/images/IMG_5617.JPG"
    },
    readTime: "15 min read",
    relatedGuides: [
      "edinburgh-planning-permission-guide",
      "complete-block-paving-guide"
    ],
    content: `
      <h2 id="introduction">Edinburgh Driveway Installation: The Complete Guide</h2>
      <p>Edinburgh's unique character, from Georgian townhouses in the New Town to Victorian villas in Morningside, requires specialist knowledge when installing driveways. This comprehensive guide covers everything you need to know about driveway installation in Scotland's capital.</p>

      <h2 id="planning-permission">Planning Permission in Edinburgh</h2>
      <p>Edinburgh Council has specific requirements for driveway installations, particularly in conservation areas:</p>
      <ul>
        <li><strong>Conservation Areas:</strong> New Town, Old Town, Stockbridge, and Morningside require planning permission</li>
        <li><strong>Listed Buildings:</strong> Any changes to listed property curtilage need consent</li>
        <li><strong>Front Garden Conversions:</strong> Converting front gardens over 5m² requires permission</li>
        <li><strong>Dropped Kerbs:</strong> All new vehicle access points need council approval</li>
      </ul>

      <h2 id="materials">Best Materials for Edinburgh Climate</h2>
      <p>Edinburgh's weather - with freeze-thaw cycles, high rainfall (700mm annually), and winter gritting - requires careful material selection:</p>
      
      <h3>Block Paving (Most Popular)</h3>
      <ul>
        <li><strong>Cost:</strong> £45-80 per m²</li>
        <li><strong>Lifespan:</strong> 25-30 years</li>
        <li><strong>Benefits:</strong> Excellent for freeze-thaw cycles, individual block replacement possible</li>
        <li><strong>Best for:</strong> All Edinburgh areas, especially heritage properties</li>
      </ul>

      <h3>Resin Driveways (Modern Choice)</h3>
      <ul>
        <li><strong>Cost:</strong> £40-70 per m²</li>
        <li><strong>Lifespan:</strong> 15-20 years</li>
        <li><strong>Benefits:</strong> Seamless, permeable, quick installation</li>
        <li><strong>Best for:</strong> Contemporary properties, areas requiring SUDS compliance</li>
      </ul>

      <h3>Pattern Concrete (Durable Option)</h3>
      <ul>
        <li><strong>Cost:</strong> £35-60 per m²</li>
        <li><strong>Lifespan:</strong> 20-25 years</li>
        <li><strong>Benefits:</strong> Extremely durable, wide design range</li>
        <li><strong>Best for:</strong> Large areas, modern properties</li>
      </ul>

      <h2 id="costs">Edinburgh Driveway Costs 2024</h2>
      <p>Driveway costs in Edinburgh vary by location and complexity:</p>

      <h3>Average Project Costs:</h3>
      <ul>
        <li><strong>Small (20m²):</strong> £1,200-2,400</li>
        <li><strong>Medium (40m²):</strong> £2,400-4,800</li>
        <li><strong>Large (60m²):</strong> £3,600-7,200</li>
        <li><strong>Extra Large (80m²):</strong> £4,800-9,600</li>
      </ul>

      <h3>Additional Edinburgh-Specific Costs:</h3>
      <ul>
        <li><strong>Planning Permission:</strong> £400-800</li>
        <li><strong>Dropped Kerb Installation:</strong> £500-1,200</li>
        <li><strong>Conservation Area Premium:</strong> +10-20%</li>
        <li><strong>Narrow Street Access:</strong> +15-25%</li>
      </ul>

      <h2 id="areas">Edinburgh Area Considerations</h2>
      
      <h3>New Town (EH1, EH2)</h3>
      <ul>
        <li>UNESCO World Heritage Site with strict material requirements</li>
        <li>Natural stone or heritage-style paving preferred</li>
        <li>Historic Environment Scotland consultation required</li>
        <li>12-16 week planning process</li>
      </ul>

      <h3>Morningside (EH10)</h3>
      <ul>
        <li>Victorian villa conservation area</li>
        <li>Premium materials expected</li>
        <li>Garden integration important</li>
        <li>Sandstone boundary considerations</li>
      </ul>

      <h3>Leith (EH6)</h3>
      <ul>
        <li>Mixed modern and traditional properties</li>
        <li>More flexible material choices</li>
        <li>Drainage considerations near water</li>
        <li>Industrial heritage influences</li>
      </ul>

      <h2 id="contractors">Choosing Edinburgh Driveway Contractors</h2>
      <p>When selecting a contractor for your Edinburgh driveway:</p>

      <h3>Essential Qualifications:</h3>
      <ul>
        <li><strong>Edinburgh Council Experience:</strong> Proven track record with local planning</li>
        <li><strong>Conservation Area Expertise:</strong> Understanding of heritage requirements</li>
        <li><strong>Insurance & Guarantees:</strong> Comprehensive coverage and long-term warranty</li>
        <li><strong>Local References:</strong> Verifiable Edinburgh customer testimonials</li>
      </ul>

      <h3>Warning Signs to Avoid:</h3>
      <ul>
        <li>Door-to-door sales without established local presence</li>
        <li>Requests for full payment upfront</li>
        <li>No fixed address or Edinburgh office</li>
        <li>Unwillingness to provide local references</li>
        <li>Pressure to sign immediately</li>
      </ul>

      <h2 id="maintenance">Edinburgh Weather & Maintenance</h2>
      <p>Edinburgh's climate requires specific maintenance approaches:</p>

      <h3>Winter Maintenance:</h3>
      <ul>
        <li>Use rock salt rather than table salt for de-icing</li>
        <li>Clear snow promptly to prevent freeze-thaw damage</li>
        <li>Check drainage before winter to prevent ice formation</li>
        <li>Avoid metal shovels that can damage surfaces</li>
      </ul>

      <h3>Annual Maintenance:</h3>
      <ul>
        <li><strong>Spring:</strong> Deep clean and reseal if necessary</li>
        <li><strong>Summer:</strong> Weed treatment and joint sand replenishment</li>
        <li><strong>Autumn:</strong> Clear leaves and check drainage</li>
        <li><strong>Winter:</strong> Regular clearing and careful de-icing</li>
      </ul>

      <h2 id="timeline">Installation Timeline</h2>
      <p>Typical Edinburgh driveway project timeline:</p>

      <h3>With Planning Permission Required:</h3>
      <ul>
        <li><strong>Weeks 1-2:</strong> Site survey and application preparation</li>
        <li><strong>Weeks 3-14:</strong> Planning permission process</li>
        <li><strong>Weeks 15-16:</strong> Material ordering and scheduling</li>
        <li><strong>Weeks 17-18:</strong> Installation (3-5 days actual work)</li>
      </ul>

      <h3>Without Planning Permission:</h3>
      <ul>
        <li><strong>Week 1:</strong> Site survey and quotation</li>
        <li><strong>Week 2:</strong> Material ordering</li>
        <li><strong>Week 3:</strong> Installation</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>Installing a driveway in Edinburgh requires careful consideration of planning requirements, material selection, and local expertise. By choosing experienced contractors who understand Edinburgh's unique requirements, you can ensure a successful project that enhances your property for decades to come.</p>

      <p>For expert advice on your Edinburgh driveway project, contact Hallmark Driveways - Edinburgh's most trusted driveway specialists with over 15 years of local experience.</p>
    `
  },
  "edinburgh-planning-permission-guide": {
    title: "Edinburgh Planning Permission for Driveways: Complete Guide 2024",
    excerpt: "Navigate Edinburgh Council's planning permission requirements for driveways. Conservation areas, listed buildings, and application process explained by experts.",
    image: "/images/IMG_5610.JPG",
    category: "Expert Tips",
    date: "August 10, 2025",
    author: {
      name: "Darren Inglis",
      role: "Managing Director",
      image: "/images/IMG_5617.JPG"
    },
    readTime: "12 min read",
    relatedGuides: [
      "ultimate-edinburgh-driveway-guide",
      "complete-block-paving-guide"
    ],
    content: `
      <h2 id="overview">Edinburgh Planning Permission Overview</h2>
      <p>Edinburgh Council has specific planning requirements for driveway installations, particularly due to the city's UNESCO World Heritage status and numerous conservation areas. Understanding these requirements is crucial before starting any driveway project.</p>

      <h2 id="when-required">When You NEED Planning Permission</h2>
      <p>You must obtain planning permission in these situations:</p>

      <h3>Conservation Areas</h3>
      <ul>
        <li><strong>New Town (EH1, EH2):</strong> UNESCO World Heritage Site with strictest requirements</li>
        <li><strong>Old Town (EH1):</strong> Medieval heritage considerations</li>
        <li><strong>Stockbridge (EH3, EH4):</strong> Village character protection</li>
        <li><strong>Morningside (EH10):</strong> Victorian villa conservation</li>
        <li><strong>Dean Village (EH4):</strong> Historic village preservation</li>
      </ul>

      <h3>Listed Buildings</h3>
      <ul>
        <li>Any changes to Category A, B, or C listed properties</li>
        <li>Works affecting the setting of listed buildings</li>
        <li>Changes to curtilage within listed property boundaries</li>
      </ul>

      <h3>Other Requirements</h3>
      <ul>
        <li>Converting front gardens to driveways over 5m²</li>
        <li>Creating new vehicle access points (dropped kerbs)</li>
        <li>Affecting shared access or rights of way</li>
        <li>Works in areas with Tree Preservation Orders</li>
      </ul>

      <h2 id="application-process">Edinburgh Council Application Process</h2>
      
      <h3>Step 1: Pre-Application Advice (Recommended)</h3>
      <ul>
        <li><strong>Cost:</strong> £120</li>
        <li><strong>Timeline:</strong> 21 days</li>
        <li><strong>Benefits:</strong> Confirms requirements, identifies issues early</li>
        <li><strong>Includes:</strong> Planning officer consultation, written advice</li>
      </ul>

      <h3>Step 2: Prepare Application Documents</h3>
      <p>Required documents for Edinburgh Council:</p>
      <ul>
        <li>Completed application form</li>
        <li>Site location plan (1:1250 scale)</li>
        <li>Existing and proposed site plans (1:200 or 1:500)</li>
        <li>Materials specification</li>
        <li>Drainage details and calculations</li>
        <li>Heritage impact assessment (if applicable)</li>
        <li>Tree survey (if trees affected)</li>
      </ul>

      <h3>Step 3: Submit and Pay</h3>
      <p>2024 application fees:</p>
      <ul>
        <li><strong>Householder Application:</strong> £401</li>
        <li><strong>Listed Building Consent:</strong> £150</li>
        <li><strong>Conservation Area Consent:</strong> £150</li>
        <li><strong>Tree Work Consent:</strong> £150</li>
      </ul>

      <h3>Step 4: Consultation Period</h3>
      <p>Edinburgh Council consults:</p>
      <ul>
        <li><strong>Neighbours:</strong> 21-day consultation period</li>
        <li><strong>Historic Environment Scotland:</strong> For heritage sites</li>
        <li><strong>Edinburgh World Heritage:</strong> For World Heritage Sites</li>
        <li><strong>Transport Department:</strong> For access changes</li>
      </ul>

      <h3>Step 5: Decision</h3>
      <ul>
        <li><strong>Standard Applications:</strong> 8 weeks</li>
        <li><strong>Conservation Areas:</strong> 12 weeks</li>
        <li><strong>Complex Cases:</strong> Up to 16 weeks</li>
      </ul>

      <h2 id="conservation-areas">Conservation Area Requirements</h2>

      <h3>New Town Specific Requirements</h3>
      <ul>
        <li>Natural stone or heritage-style materials only</li>
        <li>Traditional laying patterns preferred</li>
        <li>Minimal impact on historic streetscape</li>
        <li>Historic Environment Scotland consultation required</li>
      </ul>

      <h3>Approved Materials by Area</h3>
      <p><strong>Generally Approved:</strong></p>
      <ul>
        <li>Natural stone setts</li>
        <li>Clay brick pavers</li>
        <li>Neutral-coloured block paving</li>
        <li>Traditional gravel with appropriate edging</li>
      </ul>

      <p><strong>Often Rejected:</strong></p>
      <ul>
        <li>Brightly coloured materials</li>
        <li>Artificial surfaces</li>
        <li>Highly reflective finishes</li>
        <li>Non-permeable modern materials</li>
      </ul>

      <h2 id="common-mistakes">Common Planning Mistakes</h2>

      <h3>Costly Errors to Avoid</h3>
      <ul>
        <li><strong>Starting work without permission:</strong> Can result in enforcement action</li>
        <li><strong>Using inappropriate materials:</strong> Leads to application refusal</li>
        <li><strong>Poor quality drawings:</strong> Causes delays and additional costs</li>
        <li><strong>Ignoring drainage requirements:</strong> SUDS compliance essential</li>
        <li><strong>Not consulting neighbours:</strong> Can lead to objections</li>
      </ul>

      <h3>Success Tips</h3>
      <ul>
        <li>Get pre-application advice (£120 investment saves thousands)</li>
        <li>Use professional drawings and specifications</li>
        <li>Research approved local examples</li>
        <li>Engage with neighbours early</li>
        <li>Use experienced Edinburgh contractors</li>
      </ul>

      <h2 id="professional-help">Professional Planning Services</h2>
      
      <h3>When to Use Planning Consultants</h3>
      <ul>
        <li>Complex conservation area applications</li>
        <li>Listed building consent requirements</li>
        <li>Previous application refusals</li>
        <li>Objections from neighbours or consultees</li>
      </ul>

      <h3>Hallmark Driveways Planning Service</h3>
      <p>We handle all Edinburgh Council planning applications for our customers:</p>
      <ul>
        <li><strong>No additional charges:</strong> Planning assistance included free</li>
        <li><strong>95%+ success rate:</strong> Based on 15+ years Edinburgh experience</li>
        <li><strong>Complete service:</strong> From application to condition discharge</li>
        <li><strong>Regular updates:</strong> Keep you informed throughout process</li>
      </ul>

      <h2 id="timeline">Planning Permission Timeline</h2>
      
      <h3>Typical Timeline for Edinburgh Applications</h3>
      <ul>
        <li><strong>Week 1:</strong> Site survey and document preparation</li>
        <li><strong>Week 2:</strong> Application submission</li>
        <li><strong>Weeks 3-5:</strong> Validation and consultation period</li>
        <li><strong>Weeks 6-8:</strong> Assessment and decision (standard)</li>
        <li><strong>Weeks 6-12:</strong> Assessment and decision (conservation areas)</li>
      </ul>

      <h3>Factors That Can Extend Timeline</h3>
      <ul>
        <li>Incomplete applications requiring additional information</li>
        <li>Objections requiring additional consultation</li>
        <li>Complex heritage considerations</li>
        <li>Committee referral for controversial applications</li>
      </ul>

      <h2 id="appeals">Appeals Process</h2>
      <p>If your application is refused:</p>
      <ul>
        <li><strong>Review refusal reasons:</strong> Understand specific concerns</li>
        <li><strong>Consider amendments:</strong> Address issues and reapply</li>
        <li><strong>Appeal to Scottish Ministers:</strong> Within 3 months of refusal</li>
        <li><strong>Seek professional advice:</strong> Planning consultant or solicitor</li>
      </ul>

      <h2 id="conclusion">Getting It Right First Time</h2>
      <p>Edinburgh's planning system can seem complex, but with proper preparation and local expertise, most driveway applications are approved. The key is understanding the specific requirements for your property type and location.</p>

      <p>At Hallmark Driveways, we handle all Edinburgh Council planning applications as part of our service, with a 95%+ success rate based on our 15+ years of local experience. Contact us for expert guidance on your Edinburgh driveway project.</p>
    `
  }
}

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({
    slug: slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug]
  return (
    <Suspense fallback={null}>
      <GuidePageClient guide={guide} />
    </Suspense>
  )
}