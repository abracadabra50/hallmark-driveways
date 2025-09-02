"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowRight, Phone, Clock, PenTool as Tool, Shield, Ruler, Droplet, Leaf, PoundSterling } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const categories = [
  {
    name: "Installation Guides",
    description: "Step-by-step guides on driveway installation processes",
    icon: Tool,
    color: "text-blue-500"
  },
  {
    name: "Maintenance Tips",
    description: "Keep your driveway looking great for years to come",
    icon: Shield,
    color: "text-green-500"
  },
  {
    name: "Material Guides",
    description: "Compare different driveway materials and finishes",
    icon: Ruler,
    color: "text-purple-500"
  },
  {
    name: "Cost Guides",
    description: "Understanding driveway installation costs",
    icon: PoundSterling,
    color: "text-yellow-500"
  }
]

const guides = [
  {
    title: "Ultimate Edinburgh Driveway Guide 2025: Complete Installation Guide",
    excerpt: "Everything you need to know about driveway installation in Edinburgh. Costs, materials, planning permission, best contractors, and area-specific considerations.",
    image: "https://hallmarkdriveways.com/images/DJI_0164.jpg",
    category: "Expert Tips",
    readTime: "15 min read",
    slug: "ultimate-edinburgh-driveway-guide",
    tags: ["Edinburgh driveways", "planning permission", "driveway costs", "local expertise"]
  },
  {
    title: "Edinburgh Planning Permission for Driveways: Complete Guide 2025",
    excerpt: "Navigate Edinburgh Council's planning permission requirements for driveways. Conservation areas, listed buildings, and application process explained by experts.",
    image: "https://hallmarkdriveways.com/images/DJI_0164.jpg",
    category: "Expert Tips",
    readTime: "12 min read",
    slug: "edinburgh-planning-permission-guide",
    tags: ["Edinburgh planning", "conservation areas", "council applications", "heritage properties"]
  },
  {
    title: "The Complete Guide to Block Paving Installation",
    excerpt: "Everything you need to know about block paving, from preparation to finishing touches. Learn about patterns, materials, and professional installation techniques.",
    image: "https://hallmarkdriveways.com/images/DJI_0164.jpg",
    category: "Installation Guides",
    readTime: "12 min read",
    slug: "complete-block-paving-guide",
    tags: ["block paving", "driveway installation", "paving patterns"]
  },
  {
    title: "Resin Driveways: Benefits, Costs & Installation",
    excerpt: "Discover why resin-bound driveways are becoming increasingly popular. Compare costs, explore benefits, and understand the installation process.",
    image: "/images/IMG_5616.JPG",
    category: "Material Guides",
    readTime: "10 min read",
    slug: "resin-driveways-guide",
    tags: ["resin driveways", "permeable surfaces", "driveway materials"]
  },
  {
    title: "How to Maintain Your Driveway Through Scottish Winters",
    excerpt: "Essential maintenance tips to protect your driveway from harsh winter conditions. Learn about de-icing, drainage, and preventive measures.",
    image: "/images/IMG_5624.JPG",
    category: "Maintenance Tips",
    readTime: "8 min read",
    slug: "winter-driveway-maintenance",
    tags: ["winter maintenance", "driveway care", "weather protection"]
  },
  {
    title: "Driveway Installation Costs in Edinburgh: A Complete Breakdown",
    excerpt: "Understanding the costs involved in installing different types of driveways. Get detailed pricing information and factors that affect cost.",
    image: "/images/IMG_5630.JPG",
    category: "Cost Guides",
    readTime: "15 min read",
    slug: "driveway-cost-guide",
    tags: ["driveway costs", "installation pricing", "budget planning"]
  },
  {
    title: "Sustainable Driveway Solutions: Eco-Friendly Options",
    excerpt: "Explore environmentally friendly driveway materials and designs. Learn about permeable solutions and sustainable installation practices.",
    image: "/images/IMG_5642.JPG",
    category: "Material Guides",
    readTime: "10 min read",
    slug: "eco-friendly-driveways",
    tags: ["sustainable driveways", "eco-friendly", "permeable paving"]
  },
  {
    title: "Pattern Imprinted Concrete: Design Ideas & Installation",
    excerpt: "Everything you need to know about pattern imprinted concrete driveways. Explore designs, colors, and installation processes.",
    image: "/images/IMG_5645.JPG",
    category: "Installation Guides",
    readTime: "11 min read",
    slug: "pattern-concrete-guide",
    tags: ["concrete driveways", "pattern imprinted", "driveway design"]
  }
]

export default function GuidesPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const filteredGuides = selectedCategory 
    ? guides.filter(guide => guide.category === selectedCategory)
    : guides

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[80svh]">
        <div className="absolute inset-0 bg-[url('/images/IMG_5610.JPG')] bg-cover bg-center">
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
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                  Expert Resources
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Complete Guide to
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Driveway Excellence</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Expert advice, installation guides, and maintenance tips to help you make 
                  informed decisions about your driveway project.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto font-semibold">
                    Get Your Free Quote <ArrowRight className="ml-2" />
                  </LogoButton>
                  <LogoButton 
                    size="lg" 
                    variant="outline" 
                    className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
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

      <section className="py-24 bg-black" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.name ? null : category.name
                  )}
                  className={`p-4 sm:p-6 rounded-lg border transition-all text-left ${
                    selectedCategory === category.name
                      ? 'border-[#CCA873] bg-[#CCA873]/10'
                      : 'border-[#CCA873]/20 hover:border-[#CCA873]/60'
                  }`}
                >
                  <category.icon className={`h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4 ${category.color}`} />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{category.description}</p>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredGuides.map((guide) => (
                <Link href={`/guides/${guide.slug}`} key={guide.slug}>
                  <Card className="bg-black/50 border-[#CCA873]/20 h-full hover:border-[#CCA873]/40 transition-colors group">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="text-xs sm:text-sm text-[#CCA873]">{guide.category}</span>
                        <span className="text-xs sm:text-sm text-gray-400 flex items-center">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> {guide.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white line-clamp-2">{guide.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">{guide.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-[#CCA873]/10 text-[#CCA873]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="link" className="text-[#CCA873] p-0 hover:text-[#CCA873]/80 text-sm">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Transform Your Driveway?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready 
              to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto font-semibold">
                Get Your Free Quote <ArrowRight className="ml-2" />
              </LogoButton>
              <LogoButton 
                size="lg" 
                variant="outline" 
                className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                asChild
              >
                <a href="tel:01315555555">
                  <Phone className="mr-2" /> Call 0131 555 5555
                </a>
              </LogoButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}