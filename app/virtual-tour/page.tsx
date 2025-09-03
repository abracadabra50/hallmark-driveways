"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { Play, ArrowRight, Phone, Eye, Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const tours = [
  {
    id: 1,
    title: "Modern Block Paving Transformation",
    location: "Morningside, Edinburgh",
    duration: "3:45",
    views: "2.1k",
    rating: 4.9,
    thumbnail: "/images/DJI_0164.jpg",
    description: "Watch this stunning herringbone block paving installation from start to finish. See how we transformed this tired driveway into a beautiful entrance.",
    highlights: ["Excavation Process", "Base Preparation", "Block Laying", "Final Result"]
  },
  {
    id: 2,
    title: "Resin-Bound Driveway Installation",
    location: "Stockbridge, Edinburgh",
    duration: "4:20",
    views: "1.8k",
    rating: 5.0,
    thumbnail: "/images/DJI_0225.jpg",
    description: "Experience the complete resin-bound installation process. From preparation to the final smooth finish, see why this is Edinburgh's most popular choice.",
    highlights: ["Surface Preparation", "Resin Mixing", "Application", "Finishing"]
  },
  {
    id: 3,
    title: "Complete Garden Transformation",
    location: "Trinity, Edinburgh",
    duration: "6:15",
    views: "3.2k",
    rating: 4.8,
    thumbnail: "/images/DJI_0207.jpg",
    description: "A complete outdoor makeover including driveway, patio, and landscaping. See how we created multiple outdoor living zones.",
    highlights: ["Design Planning", "Excavation", "Installation", "Landscaping"]
  },
  {
    id: 4,
    title: "Pattern Imprinted Concrete Process",
    location: "Bruntsfield, Edinburgh",
    duration: "5:30",
    views: "1.5k",
    rating: 4.7,
    thumbnail: "/images/DJI_0102.jpg",
    description: "Discover how pattern imprinted concrete achieves the look of natural stone. Watch the stamping and coloring process in detail.",
    highlights: ["Concrete Pour", "Pattern Stamping", "Color Application", "Sealing"]
  }
]

const benefits = [
  {
    icon: Eye,
    title: "See Before You Buy",
    description: "Watch real installations to understand our process and quality standards"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Get answers to common questions without waiting for a consultation"
  },
  {
    icon: Star,
    title: "Build Confidence",
    description: "See our craftsmanship and attention to detail in every project"
  }
]

export default function VirtualTourPage() {
  const [selectedTour, setSelectedTour] = React.useState<number | null>(null)

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
                  Virtual Tours
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-white">
                  See Our Work
                  <span className="bg-gradient-text block mt-2">Come to Life</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Take virtual tours of our completed projects across Edinburgh. Watch time-lapse 
                  installations and see the transformation process from start to finish.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                    Start Watching <Play className="ml-2 h-5 w-5" />
                  </LogoButton>
                  <LogoButton 
                    size="lg" 
                    variant="outline" 
                    className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
                    asChild
                  >
                    <a href="tel:08001357000">
                      <Phone className="mr-2" /> Call 0800 135 7000
                    </a>
                  </LogoButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-black/50 border-[#CCA873]/20 text-center">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-[#CCA873] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Featured Virtual Tours
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience our installations through immersive virtual tours and time-lapse videos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="bg-black/50 border-[#CCA873]/20 overflow-hidden group">
                <div className="relative aspect-video">
                  <Image 
                    src={tour.thumbnail}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <button 
                    onClick={() => setSelectedTour(tour.id)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-16 h-16 bg-[#CCA873] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-black ml-1" />
                    </div>
                  </button>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-sm">
                    {tour.duration}
                  </div>

                  {/* Views & Rating */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="bg-black/80 px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {tour.views}
                    </div>
                    <div className="bg-black/80 px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Star className="h-3 w-3 fill-[#CCA873] text-[#CCA873]" />
                      {tour.rating}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[#CCA873]" />
                    <span className="text-sm text-gray-400">{tour.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{tour.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{tour.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[#CCA873]">Tour Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs bg-[#CCA873]/10 text-[#CCA873] px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Placeholder */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button 
              onClick={() => setSelectedTour(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="h-16 w-16 mx-auto mb-4 text-[#CCA873]" />
                <p className="text-xl mb-2">Virtual Tour Player</p>
                <p className="text-gray-400">Video player would be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Inspired by what you've seen? Contact us today for a free consultation 
              and let's create something amazing for your property.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                Get Your Free Quote <ArrowRight className="ml-2" />
              </LogoButton>
              <LogoButton 
                size="lg" 
                variant="outline" 
                className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
                asChild
              >
                <a href="tel:08001357000">
                  <Phone className="mr-2" /> Call 0800 135 7000
                </a>
              </LogoButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}