"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "The Ultimate Guide to Block Paving: Materials, Patterns, and Installation",
    excerpt: "Discover everything you need to know about block paving, from choosing the right materials to understanding installation processes and maintenance requirements.",
    image: "https://images.unsplash.com/photo-1626813822281-73c1c5e7c1dd?auto=format&fit=crop&w=800&q=80",
    category: "Guide",
    date: "March 15, 2024",
    slug: "ultimate-guide-block-paving"
  },
  {
    title: "5 Benefits of Resin Driveways for Edinburgh Homes",
    excerpt: "Learn why resin-bound driveways are becoming increasingly popular in Edinburgh and how they can add value to your property.",
    image: "https://images.unsplash.com/photo-1617224908579-c92008fc08bb?auto=format&fit=crop&w=800&q=80",
    category: "Tips",
    date: "March 10, 2024",
    slug: "benefits-resin-driveways"
  },
  {
    title: "How to Maintain Your Driveway Through Scottish Winters",
    excerpt: "Essential maintenance tips to protect your driveway from harsh winter conditions and ensure it stays looking great year-round.",
    image: "https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&w=800&q=80",
    category: "Maintenance",
    date: "March 5, 2024",
    slug: "driveway-winter-maintenance"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text">
              Driveway Design & Maintenance Tips
            </h1>
            <p className="text-xl text-gray-300">
              Expert advice, industry insights, and practical tips for maintaining 
              and improving your outdoor spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="bg-black/50 border-[#CCA873]/20 h-full hover:border-[#CCA873]/40 transition-colors">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-[#CCA873]">{post.category}</span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <Button variant="link" className="text-[#CCA873] p-0 hover:text-[#CCA873]/80">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}