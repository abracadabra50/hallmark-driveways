"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { Star, Quote, ArrowRight, Phone, MapPin, Calendar, Filter, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "Morningside",
    rating: 5,
    date: "2025-08-15",
    service: "Block Paving Driveway",
    text: "Absolutely delighted with our new driveway. The team was professional, punctual, and the workmanship is outstanding. They transformed our front garden completely and the attention to detail is incredible. Would definitely recommend to anyone looking for quality work.",
    image: "/images/IMG_5625.JPG",
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    name: "James Wilson",
    location: "Stockbridge",
    rating: 5,
    date: "2025-08-10",
    service: "Resin-Bound Driveway",
    text: "From design to completion, Hallmark Driveways exceeded our expectations. The resin surface looks amazing and the drainage is perfect. The team was clean, efficient, and completed the work exactly when they said they would. Excellent value for money.",
    image: "/images/IMG_5616.JPG",
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    name: "Emma MacDonald",
    location: "Trinity",
    rating: 5,
    date: "2025-08-05",
    service: "Garden Landscaping",
    text: "Transformed our garden completely. The landscaping team was knowledgeable and professional. The result is exactly what we wanted and more. The integrated lighting and seating areas have made such a difference to how we use the space.",
    image: "/images/IMG_5624.JPG",
    verified: true,
    helpful: 31
  },
  {
    id: 4,
    name: "David Anderson",
    location: "Bruntsfield",
    rating: 5,
    date: "2025-08-02-28",
    service: "Pattern Imprinted Concrete",
    text: "Very impressed with the quality of work and professionalism. The pattern imprinted concrete looks like real stone but at a fraction of the cost. The team was clean, tidy, and completed ahead of schedule. Highly recommended.",
    image: "/images/IMG_5627.JPG",
    verified: true,
    helpful: 15
  },
  {
    id: 5,
    name: "Claire Mitchell",
    location: "Corstorphine",
    rating: 5,
    date: "2025-08-02-20",
    service: "Complete Driveway & Patio",
    text: "Outstanding service from start to finish. The design consultation was thorough and the final result exceeded our expectations. The team was professional, courteous, and left everything spotless. Worth every penny.",
    image: "/images/IMG_5625.JPG",
    verified: true,
    helpful: 22
  },
  {
    id: 6,
    name: "Robert Campbell",
    location: "Leith",
    rating: 5,
    date: "2025-08-02-15",
    service: "Tarmac Driveway",
    text: "Great value for money. The tarmac driveway was completed quickly and to a high standard. The team was friendly and professional throughout. Very happy with the result and would use them again.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=150&h=150&q=80",
    verified: true,
    helpful: 12
  }
]

const stats = [
  { number: "247", label: "Total Reviews" },
  { number: "5.0", label: "Average Rating" },
  { number: "100%", label: "Recommend Us" },
  { number: "98%", label: "5-Star Reviews" },
]

export default function ReviewsPage() {
  const [filter, setFilter] = React.useState("all")
  const [sortBy, setSortBy] = React.useState("newest")

  const filteredReviews = React.useMemo(() => {
    let filtered = [...reviews]
    
    if (filter !== "all") {
      filtered = filtered.filter(review => 
        review.service.toLowerCase().includes(filter.toLowerCase())
      )
    }
    
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "helpful") {
      filtered.sort((a, b) => b.helpful - a.helpful)
    }
    
    return filtered
  }, [filter, sortBy])

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[80svh]">
        <div className="absolute inset-0 bg-[url('/images/DJI_0164.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-20">
          <Navbar />
          
          <div className="container mx-auto px-4 min-h-[calc(80svh-5rem)] flex items-center pt-16 sm:pt-20">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm font-semibold mb-6">
                  Customer Reviews
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-white">
                  Real Reviews from
                  <span className="bg-gradient-text block mt-2">Edinburgh Customers</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  See what our customers say about their experience with Hallmark Driveways. 
                  Every review is verified and from real Edinburgh homeowners.
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#CCA873] text-[#CCA873]" />
                    ))}
                    <span className="text-xl font-semibold text-white ml-2">5.0</span>
                  </div>
                  <div className="text-gray-300">
                    Based on 247+ verified reviews
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                    Get Your Free Quote <ArrowRight className="ml-2" />
                  </LogoButton>
                  <LogoButton 
                    size="lg" 
                    variant="outline" 
                    className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
                    asChild
                  >
                    <a href="tel:01315555555">
                      <Phone className="mr-2" /> Call 0131 555 5555
                    </a>
                  </LogoButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-[#CCA873] mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-[#CCA873]" />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-48 bg-black/50 border-[#CCA873]/20">
                  <SelectValue placeholder="Filter by service" />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#CCA873]/20">
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="block">Block Paving</SelectItem>
                  <SelectItem value="resin">Resin Driveways</SelectItem>
                  <SelectItem value="concrete">Pattern Concrete</SelectItem>
                  <SelectItem value="landscaping">Landscaping</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-black/50 border-[#CCA873]/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-black border-[#CCA873]/20">
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image 
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">{review.name}</h3>
                          {review.verified && (
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="h-4 w-4" />
                          {review.location}
                          <Calendar className="h-4 w-4 ml-2" />
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#CCA873] text-[#CCA873]" />
                        ))}
                      </div>
                      <p className="text-sm text-[#CCA873]">{review.service}</p>
                    </div>
                  </div>
                  
                  <Quote className="h-8 w-8 text-[#CCA873]/20 mb-4" />
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{review.text}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#CCA873]/20">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#CCA873]">
                      👍 Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#CCA873]">
                      Share Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
            >
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-text inline-block">
              Had Work Done by Us?
            </h2>
            <p className="text-gray-300 mb-8">
              We'd love to hear about your experience. Your review helps other Edinburgh 
              homeowners make informed decisions.
            </p>
            <Button className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold">
              Write a Review
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}