import { MetadataRoute } from 'next'
import { areasServed } from './schema'

const baseUrl = 'https://hallmarkdriveways.com'

// Generate slugs for all areas
const areasSlugs = areasServed.map(area => area.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''))

// Service pages
const services = [
  'block-paving',
  'resin-driveways', 
  'pattern-imprinted-concrete',
  'tarmac-driveways',
  'driveway-repair',
  'driveway-cleaning'
]

// Blog/Guide topics
const guides = [
  'complete-block-paving-guide',
  'resin-driveways-guide',
  'driveway-cost-guide-edinburgh',
  'winter-driveway-maintenance',
  'eco-friendly-driveways',
  'pattern-concrete-guide',
  'choosing-driveway-material',
  'driveway-planning-permission-edinburgh',
  'maintaining-block-paving',
  'resin-vs-block-paving'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Add service-specific URLs
  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Add area-specific URLs
  const areaRoutes = areasSlugs.map(slug => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Add guide URLs
  const guideRoutes = guides.map(guide => ({
    url: `${baseUrl}/guides/${guide}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Add location + service combination pages for better local SEO
  const locationServiceRoutes = areasSlugs.slice(0, 12).flatMap(area => 
    services.slice(0, 3).map(service => ({
      url: `${baseUrl}/${service}-${area}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...routes, ...serviceRoutes, ...areaRoutes, ...guideRoutes, ...locationServiceRoutes]
}