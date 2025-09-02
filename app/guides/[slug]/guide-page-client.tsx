"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, Phone, User, Tag, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Guide } from "./types"

export function GuidePageClient({ guide }: { guide: Guide | undefined }) {
  if (!guide) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32">
          <h1>Article not found</h1>
          <Link href="/guides">
            <Button variant="link" className="text-[#CCA873] -ml-4">
              <ArrowLeft className="mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  const relatedArticles = [
    {
      title: "Resin Driveways: The Modern Solution for Edinburgh Homes",
      slug: "resin-driveways-guide",
      image: "https://images.unsplash.com/photo-1617224908579-c92008fc08bb?auto=format&fit=crop&w=400&q=80",
      readTime: "10 min read"
    },
    {
      title: "Winter Maintenance for Scottish Driveways",
      slug: "winter-driveway-maintenance", 
      image: "https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&w=400&q=80",
      readTime: "8 min read"
    }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/guides">
              <Button variant="link" className="text-[#CCA873] -ml-4 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#CCA873]/10 text-[#CCA873] px-3 py-1 rounded-full text-sm font-medium">
                  {guide.category}
                </span>
                <span className="text-sm text-gray-400">{guide.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">
                {guide.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {guide.excerpt}
              </p>
              
              <div className="flex items-center justify-between border-b border-[#CCA873]/20 pb-8">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={guide.author.image}
                      alt={guide.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{guide.author.name}</p>
                    <p className="text-sm text-gray-400">{guide.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {guide.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {guide.readTime}
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#CCA873]">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
              </div>
            </div>

            <div className="aspect-[21/9] relative overflow-hidden rounded-xl mb-12">
              <img 
                src={guide.image} 
                alt={guide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg prose-invert max-w-none prose-headings:text-[#CCA873] prose-a:text-[#CCA873] prose-strong:text-white prose-code:text-[#CCA873] prose-blockquote:border-[#CCA873] prose-blockquote:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: guide.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-[#CCA873]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-[#CCA873]" />
                    <span className="font-medium text-white">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['block paving', 'installation', 'driveway design', 'edinburgh'].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[#CCA873]/10 text-[#CCA873] rounded-full text-sm hover:bg-[#CCA873]/20 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-black/50 border border-[#CCA873]/20 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={guide.author.image}
                        alt={guide.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{guide.author.name}</h3>
                      <p className="text-[#CCA873] text-sm mb-2">{guide.author.role}</p>
                      <p className="text-gray-300 text-sm">
                        With over 15 years of experience in driveway installation and design, 
                        {guide.author.name.split(' ')[0]} brings expert insights to help homeowners 
                        make informed decisions about their outdoor spaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-[#CCA873]" />
                      <h3 className="font-semibold text-white">In This Article</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#understanding" className="text-gray-300 hover:text-[#CCA873] transition-colors">Understanding Block Paving</a></li>
                      <li><a href="#types" className="text-gray-300 hover:text-[#CCA873] transition-colors">Types of Materials</a></li>
                      <li><a href="#patterns" className="text-gray-300 hover:text-[#CCA873] transition-colors">Popular Patterns</a></li>
                      <li><a href="#installation" className="text-gray-300 hover:text-[#CCA873] transition-colors">Installation Process</a></li>
                      <li><a href="#maintenance" className="text-gray-300 hover:text-[#CCA873] transition-colors">Maintenance Tips</a></li>
                      <li><a href="#costs" className="text-gray-300 hover:text-[#CCA873] transition-colors">Cost Considerations</a></li>
                    </ul>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((article) => (
                        <Link 
                          key={article.slug}
                          href={`/guides/${article.slug}`}
                          className="block group"
                        >
                          <div className="flex space-x-3">
                            <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                              <img 
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-white group-hover:text-[#CCA873] transition-colors line-clamp-2">
                                {article.title}
                              </h4>
                              <p className="text-xs text-gray-400 mt-1">{article.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-[#CCA873]/10 to-[#CCA873]/5 border border-[#CCA873]/20 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-white mb-2">Need Expert Advice?</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Get personalized recommendations for your project.
                    </p>
                    <LogoButton size="sm" className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                      Get Free Quote
                    </LogoButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-[#CCA873]/20 pt-16 mt-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-text inline-block">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contact us today for a free consultation and quote. Our expert team is ready 
                  to help with your project.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                    Get Your Free Quote <ArrowRight className="ml-2" />
                  </LogoButton>
                  <LogoButton 
                    size="lg" 
                    variant="outline" 
                    className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                  >
                    <Phone className="mr-2" /> Call 0131 555 5555
                  </LogoButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}