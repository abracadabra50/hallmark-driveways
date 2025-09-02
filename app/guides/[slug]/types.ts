export type Author = {
  name: string
  role: string
  image: string
}

export type Guide = {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: Author
  readTime: string
  content: string
  relatedGuides?: string[]
}