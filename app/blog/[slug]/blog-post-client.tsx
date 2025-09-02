"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import type { Post } from "./types"

export function BlogPostClient({ post }: { post: Post | undefined }) {
  if (!post) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 pt-32">
          <h1>Post not found</h1>
          <Link href="/blog">
            <Button variant="link" className="text-[#CCA873] -ml-4">
              <ArrowLeft className="mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <article className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="link" className="text-[#CCA873] mb-8 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-[#CCA873]">{post.category}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
              </div>
            </div>

            <div className="aspect-[21/9] relative overflow-hidden rounded-xl mb-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div 
              className="prose prose-lg prose-invert max-w-none prose-headings:text-[#CCA873] prose-a:text-[#CCA873]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </main>
  )
}