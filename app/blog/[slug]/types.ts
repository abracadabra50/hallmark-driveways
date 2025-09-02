export type Post = {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  readTime: string
  content: string
}

export type BlogData = Record<string, Post>