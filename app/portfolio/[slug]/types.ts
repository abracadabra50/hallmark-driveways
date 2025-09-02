export type Project = {
  title: string
  location: string
  description: string
  completion: string
  duration: string
  mainImage: string
  gallery: string[]
  features: string[]
  testimonial: {
    name: string
    text: string
    location: string
  }
}

export type ProjectData = Record<string, Project>