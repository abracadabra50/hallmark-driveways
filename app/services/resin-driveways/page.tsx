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
  Droplets, 
  Leaf, 
  Sparkles,
  Shield,
  Palette,
  Clock,
  Award
} from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const benefits = [
  {
    icon: Droplets,
    title: "Permeable & SUDS Compliant",
    description: "Allows natural drainage, preventing puddles and meeting Edinburgh planning requirements"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solution",
    description: "Sustainable materials with excellent environmental credentials and carbon footprint"
  },
  {
    icon: Sparkles,
    title: "Smooth, Seamless Finish",
    description: "No loose stones or uneven surfaces - comfortable to walk on and easy to clean"
  },
  {
    icon: Shield,
    title: "UV Stable & Durable",
    description: "Won't fade in sunlight and maintains its appearance for 15+ years"
  }
]

const colors = [
  {
    name: "Golden Gravel",
    description: "Warm, natural tones perfect for traditional Edinburgh properties",
    image: "/images/DJI_0225.jpg"
  },
  {
    name: "Silver Grey",
    description: "Contemporary finish ideal for modern homes and commercial properties",
    image: "/images/DJI_0164.jpg"
  },
  {
    name: "Autumn Brown",
    description: "Rich, earthy tones that complement natural stone and brick",
    image: "/images/DJI_0207.jpg"
  }
]

const comparison = [
  {
    feature: "Installation Time",
    resin: "2-3 days",
    block: "5-7 days",
    tarmac: "1-2 days"
  },
  {
    feature: "Maintenance",
    resin: "Very Low",
    block: "Medium",
    tarmac: "High"
  },
  {
    feature: "Drainage",
    resin: "Excellent",
    block: "Good",
    tarmac: "Poor"
  },
  {
    feature: "Appearance",
    resin: "Premium",
    block: "Traditional",
    tarmac: "Basic"
  },
  {
    feature: "Lifespan",
    resin: "15-20 years",
    block: "20-25 years",
    tarmac: "10-15 years"
  }
]

const process = [
  {
    step: "1",
    title: "Surface Preparation",
    description: "Thorough cleaning and preparation of the existing surface or new base installation"
  },
  {
    step: "2",
    title: "Primer Application",
    description: "Specialist primer applied to ensure perfect adhesion of the resin system"
  },
  {
    step: "3",
    title: "Resin Mixing",
    description: "Precise mixing of resin and aggregate in our specialized equipment"
  },
  {
    step: "4",
    title: "Installation",
    description: "Expert application using professional tools for an even, smooth finish"
  },
  {
    step: "5",
    title: "Curing & Finishing",
    description: "24-48 hour curing period before the surface is ready for use"
  }
]

export default function ResinDrivewaysPage() {
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
        <div className="absolute inset-0 bg-[url('/images/DJI_0225.jpg')] bg-cover bg-center">
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
                  Resin Driveway Specialists
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-white">
                  Modern Resin-Bound
                  <span className="bg-gradient-text block mt-2">Driveways in Edinburgh</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Experience the future of driveways with our premium resin-bound surfaces. 
                  Permeable, durable, and beautiful - perfect for modern Edinburgh properties.
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
                    <a href="tel:08001357000">
                      <Phone className="mr-2" /> Call 0800 135 7000
                    </a>
                  </LogoButton>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">100%</div>
                    <div className="text-sm text-gray-400">Permeable</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">15+</div>
                    <div className="text-sm text-gray-400">Year Lifespan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">2-3</div>
                    <div className="text-sm text-gray-400">Days Install</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">Zero</div>
                    <div className="text-sm text-gray-400">Loose Stones</div>
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
                Why Choose Resin-Bound Driveways?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The modern solution for Edinburgh properties seeking style, sustainability, and performance
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

      {/* Color Options */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Popular Color Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our range of natural aggregate colors to complement your property
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {colors.map((color) => (
              <Card key={color.name} className="bg-black/50 border-[#CCA873]/20 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src={color.image}
                    alt={`${color.name} resin driveway`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{color.name}</h3>
                  <p className="text-gray-300">{color.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              How Resin Compares
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how resin-bound driveways stack up against other popular options
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/50 border-[#CCA873]/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#CCA873]/20">
                        <th className="text-left p-6 text-white font-semibold">Feature</th>
                        <th className="text-center p-6 text-[#CCA873] font-semibold">Resin-Bound</th>
                        <th className="text-center p-6 text-gray-400 font-semibold">Block Paving</th>
                        <th className="text-center p-6 text-gray-400 font-semibold">Tarmac</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, index) => (
                        <tr key={row.feature} className={index !== comparison.length - 1 ? "border-b border-[#CCA873]/10" : ""}>
                          <td className="p-6 text-gray-300 font-medium">{row.feature}</td>
                          <td className="p-6 text-center text-[#CCA873] font-semibold">{row.resin}</td>
                          <td className="p-6 text-center text-gray-400">{row.block}</td>
                          <td className="p-6 text-center text-gray-400">{row.tarmac}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expert team follows a proven process for perfect results every time
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
              Ready for Your Resin Driveway?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and see why resin-bound driveways 
              are the smart choice for modern Edinburgh properties.
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