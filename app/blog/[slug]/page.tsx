import { Suspense } from 'react'
import { BlogPostClient } from "./blog-post-client"
import type { BlogData } from "./types"

// This would typically come from a CMS or database
const posts: BlogData = {
  "ultimate-guide-block-paving": {
    title: "The Ultimate Guide to Block Paving: Materials, Patterns, and Installation",
    excerpt: "Discover everything you need to know about block paving, from choosing the right materials to understanding installation processes and maintenance requirements.",
    image: "/images/IMG_5626.JPG",
    category: "Guide",
    date: "March 15, 2024",
    author: "John Smith",
    readTime: "8 min read",
    content: `
      <h2>Choosing the Right Block Paving Materials</h2>
      <p>When it comes to block paving, material selection is crucial. The most common options include:</p>
      <ul>
        <li>Concrete blocks</li>
        <li>Clay pavers</li>
        <li>Natural stone</li>
      </ul>

      <h2>Popular Block Paving Patterns</h2>
      <p>The pattern you choose can dramatically impact the final look of your driveway. Here are some popular options:</p>
      <ul>
        <li>Herringbone - Ideal for driveways due to its interlocking strength</li>
        <li>Stretcher bond - A classic, simple pattern</li>
        <li>Basketweave - Perfect for traditional properties</li>
      </ul>

      <h2>Installation Process</h2>
      <p>Professional installation typically follows these steps:</p>
      <ol>
        <li>Site preparation and excavation</li>
        <li>Installing edge restraints</li>
        <li>Laying the sub-base</li>
        <li>Adding and compacting the laying course</li>
        <li>Laying the blocks in the chosen pattern</li>
        <li>Cutting blocks to fit edges</li>
        <li>Vibrating the surface and adding jointing sand</li>
      </ol>
    `
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  return (
    <Suspense fallback={null}>
      <BlogPostClient post={post} />
    </Suspense>
  )
}