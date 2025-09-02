import { Suspense } from 'react'
import { ProjectPage } from "./project-page"
import type { ProjectData } from "./types"

// This would typically come from a CMS or database
const projectData: ProjectData = {
  "modern-block-paving": {
    title: "Modern Block Paving",
    location: "Morningside, Edinburgh",
    description: "Contemporary herringbone pattern using premium granite blocks",
    completion: "January 2024",
    duration: "5 days",
    mainImage: "/images/DJI_0164.jpg",
    gallery: [
      "/images/DJI_0225.jpg",
      "/images/DJI_0207.jpg",
      "/images/DJI_0102.jpg"
    ],
    features: [
      "Premium granite blocks for durability",
      "Herringbone pattern for maximum stability",
      "Professional drainage system",
      "10-year guarantee",
      "Full excavation and preparation",
      "Premium sub-base materials"
    ],
    testimonial: {
      name: "Sarah Thompson",
      text: "Absolutely delighted with our new driveway. The team was professional, punctual, and the workmanship is outstanding.",
      location: "Morningside"
    }
  },
  "resin-bound-driveway": {
    title: "Resin-Bound Driveway",
    location: "Stockbridge, Edinburgh",
    description: "Permeable resin surface with decorative border",
    completion: "February 2024",
    duration: "4 days",
    mainImage: "/images/DJI_0225.jpg",
    gallery: [
      "/images/DJI_0164.jpg",
      "/images/DJI_0207.jpg",
      "/images/DJI_0102.jpg"
    ],
    features: [
      "Premium resin-bound surface",
      "Permeable design for drainage",
      "UV-stable materials",
      "10-year guarantee",
      "Full site preparation",
      "Decorative border options"
    ],
    testimonial: {
      name: "James Wilson",
      text: "Excellent workmanship and attention to detail. Very pleased with the result and the whole process was smooth from start to finish.",
      location: "Stockbridge"
    }
  },
  "natural-stone-terrace": {
    title: "Natural Stone Terrace",
    location: "New Town, Edinburgh",
    description: "Indian sandstone patio with integrated lighting",
    completion: "March 2024",
    duration: "7 days",
    mainImage: "/images/DJI_0207.jpg",
    gallery: [
      "/images/DJI_0164.jpg",
      "/images/DJI_0225.jpg",
      "/images/DJI_0102.jpg"
    ],
    features: [
      "Premium Indian sandstone",
      "Integrated LED lighting",
      "Custom pattern layout",
      "10-year guarantee",
      "Professional drainage",
      "Sealed for protection"
    ],
    testimonial: {
      name: "Emma MacDonald",
      text: "The team did an amazing job with our patio. The lighting feature is particularly impressive and has transformed how we use the space in the evenings.",
      location: "New Town"
    }
  },
  "contemporary-porcelain": {
    title: "Contemporary Porcelain",
    location: "Bruntsfield, Edinburgh",
    description: "Large format porcelain tiles with seamless indoor-outdoor flow",
    completion: "March 2024",
    duration: "6 days",
    mainImage: "/images/DJI_0102.jpg",
    gallery: [
      "/images/DJI_0164.jpg",
      "/images/DJI_0225.jpg",
      "/images/DJI_0207.jpg"
    ],
    features: [
      "Premium porcelain tiles",
      "Seamless transition design",
      "Anti-slip surface treatment",
      "10-year guarantee",
      "Precision installation",
      "Weather-resistant finish"
    ],
    testimonial: {
      name: "David Anderson",
      text: "The attention to detail in aligning the indoor and outdoor spaces is remarkable. The team's expertise really shows in the final result.",
      location: "Bruntsfield"
    }
  },
  "modern-garden-design": {
    title: "Modern Garden Design",
    location: "Trinity, Edinburgh",
    description: "Complete garden transformation with zones for dining and relaxation",
    completion: "March 2024",
    duration: "14 days",
    mainImage: "/images/48e42c1f-9b00-47fb-8992-b0a840032f80.jpg",
    gallery: [
      "/images/DJI_0164.jpg",
      "/images/DJI_0225.jpg",
      "/images/DJI_0207.jpg"
    ],
    features: [
      "Custom outdoor dining area",
      "Modern relaxation zones",
      "Integrated lighting design",
      "Low-maintenance planting",
      "Water feature installation",
      "Premium outdoor furniture"
    ],
    testimonial: {
      name: "Claire Mitchell",
      text: "Our garden has been completely transformed into a modern outdoor living space. The different zones work perfectly for both entertaining and relaxing.",
      location: "Trinity"
    }
  },
  "family-garden": {
    title: "Family Garden",
    location: "Corstorphine, Edinburgh",
    description: "Multi-functional space with artificial grass and play areas",
    completion: "February 2024",
    duration: "10 days",
    mainImage: "/images/c07e3a2b-fcf0-48d6-af37-d7dbe98ce749.jpg",
    gallery: [
      "/images/DJI_0164.jpg",
      "/images/DJI_0225.jpg",
      "/images/DJI_0207.jpg"
    ],
    features: [
      "Premium artificial grass",
      "Safe play area design",
      "Durable garden furniture",
      "Low-maintenance plants",
      "Secure fencing",
      "Storage solutions"
    ],
    testimonial: {
      name: "Robert Campbell",
      text: "The team understood exactly what we needed for our family garden. The artificial grass is perfect for the kids, and the whole space is so practical yet beautiful.",
      location: "Corstorphine"
    }
  }
}

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug: slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug]
  return (
    <Suspense fallback={null}>
      <ProjectPage project={project} />
    </Suspense>
  )
}