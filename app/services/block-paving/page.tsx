"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Shield, 
  Star, 
  Clock,
  Palette,
  Hammer,
  Droplets,
  Award
} from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const patterns = [
  {
    name: "Herringbone",
    description: "The strongest and most popular pattern for driveways",
    image: "/images/DJI_0164.jpg",
    benefits: ["Maximum strength", "Classic appearance", "Excellent for heavy traffic"]
  },
  {
    name: "Stretcher Bond",
    description: "Simple, elegant pattern perfect for pathways",
    image: "/images/DJI_0225.jpg",
    benefits: ["Cost-effective", "Easy maintenance", "Timeless design"]
  },
  {
    name: "Basketweave",
    description: "Traditional pattern ideal for period properties",
    image: "/images/DJI_0207.jpg",
    benefits: ["Heritage appeal", "Distinctive look", "Perfect for Edinburgh homes"]
  }
]

const materials = [
  {
    name: "Concrete Blocks",
    description: "Versatile and affordable with excellent durability",
    priceRange: "£65-85 per m²",
    features: ["Wide color range", "Consistent quality", "Cost-effective", "Easy replacement"]
  },
  {
    name: "Clay Pavers",
    description: "Premium natural material that improves with age",
    priceRange: "£85-120 per m²",
    features: ["Natural colors", "Weather resistant", "Eco-friendly", "Unique character"]
  },
  {
    name: "Granite Blocks",
    description: "Luxury option with exceptional longevity",
    priceRange: "£120-180 per m²",
    features: ["Premium appearance", "Extremely durable", "Low maintenance", "Adds property value"]
  }
]

const benefits = [
  {
    icon: Shield,
    title: "Exceptional Durability",
    description: "Block paving can last 25+ years with proper installation and minimal maintenance"
  },
  {
    icon: Palette,
    title: "Design Flexibility",
    description: "Countless color and pattern combinations to match your property's style"
  },
  {
    icon: Hammer,
    title: "Easy Repairs",
    description: "Individual blocks can be replaced without affecting the entire surface"
  },
  {
    icon: Droplets,
    title: "Excellent Drainage",
    description: "Permeable options available for SUDS compliance and flood prevention"
  }
]

const process = [
  {
    step: "1",
    title: "Design Consultation",
    description: "We discuss your requirements, measure the area, and create a detailed design proposal"
  },
  {
    step: "2", 
    title: "Excavation & Preparation",
    description: "Professional excavation to the correct depth, typically 200-250mm for driveways"
  },
  {
    step: "3",
    title: "Sub-base Installation",
    description: "Installation of MOT Type 1 aggregate base, properly compacted for stability"
  },
  {
    step: "4",
    title: "Edge Restraints",
    description: "Concrete edge courses installed to prevent block movement over time"
  },
  {
    step: "5",
    title: "Laying Course",
    description: "Sharp sand screeded to create the perfect level surface for block laying"
  },
  {
    step: "6",
    title: "Block Installation",
    description: "Blocks laid in your chosen pattern with precision cutting around edges"
  },
  {
    step: "7",
    title: "Compaction & Finishing",
    description: "Final compaction and jointing sand application for a perfect finish"
  }
]

export default function BlockPavingPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
                  Block Paving Specialists
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-white">
                  Premium Block Paving
                  <span className="bg-gradient-text block mt-2">Driveways in Edinburgh</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Transform your property with our expert block paving installation. Choose from 
                  extensive patterns, colors, and materials to create the perfect driveway for your Edinburgh home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">25+</div>
                    <div className="text-sm text-gray-400">Years Lifespan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">10</div>
                    <div className="text-sm text-gray-400">Year Guarantee</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">100+</div>
                    <div className="text-sm text-gray-400">Design Options</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">5★</div>
                    <div className="text-sm text-gray-400">Customer Rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-black" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
                Why Choose Block Paving?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Block paving offers unmatched versatility, durability, and aesthetic appeal for Edinburgh driveways
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-black/50 border-[#CCA873]/20 text-center">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-[#CCA873] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patterns */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Popular Block Paving Patterns
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our most popular patterns, each offering unique benefits and aesthetic appeal
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {patterns.map((pattern) => (
              <Card key={pattern.name} className="bg-black/50 border-[#CCA873]/20 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src={pattern.image}
                    alt={`${pattern.name} block paving pattern`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{pattern.name}</h3>
                  <p className="text-gray-300 mb-4">{pattern.description}</p>
                  <ul className="space-y-2">
                    {pattern.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-[#CCA873] mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Block Paving Materials
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer a range of high-quality materials to suit every budget and style preference
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {materials.map((material) => (
              <Card key={material.name} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{material.name}</h3>
                    <p className="text-[#CCA873] font-semibold text-lg">{material.priceRange}</p>
                  </div>
                  <p className="text-gray-300 mb-6 text-center">{material.description}</p>
                  <ul className="space-y-3">
                    {material.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-[#CCA873] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional installation following industry best practices for lasting results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#CCA873] rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready for Your Block Paving Driveway?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and detailed quote. Our expert team 
              will help you choose the perfect design for your Edinburgh property.
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