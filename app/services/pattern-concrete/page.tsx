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
  Palette, 
  DollarSign, 
  Clock,
  Shield,
  Hammer,
  Sparkles,
  Award
} from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective Premium Look",
    description: "Achieve the appearance of natural stone at a fraction of the cost"
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Faster installation than block paving with immediate usability"
  },
  {
    icon: Palette,
    title: "Extensive Design Options",
    description: "Wide range of patterns, textures, and colors to choose from"
  },
  {
    icon: Shield,
    title: "Durable Concrete Base",
    description: "Strong concrete foundation provides excellent longevity"
  }
]

const patterns = [
  {
    name: "Ashlar Slate",
    description: "Elegant natural stone appearance perfect for traditional properties",
    image: "/images/DJI_0207.jpg",
    features: ["Natural stone texture", "Multiple color options", "Non-slip surface"]
  },
  {
    name: "Cobblestone",
    description: "Classic cobbled street effect ideal for period Edinburgh homes",
    image: "/images/DJI_0164.jpg",
    features: ["Authentic cobble texture", "Heritage appeal", "Excellent grip"]
  },
  {
    name: "Brick Pattern",
    description: "Traditional brick appearance that complements any property style",
    image: "/images/DJI_0225.jpg",
    features: ["Classic brick texture", "Versatile design", "Easy maintenance"]
  }
]

const colors = [
  { name: "Sandstone", description: "Warm, natural tones" },
  { name: "Charcoal", description: "Modern, sophisticated finish" },
  { name: "Terracotta", description: "Rich, earthy appearance" },
  { name: "Slate Grey", description: "Contemporary neutral tone" },
  { name: "Buff", description: "Light, traditional color" },
  { name: "Autumn Brown", description: "Warm, inviting shade" }
]

const process = [
  {
    step: "1",
    title: "Site Preparation",
    description: "Excavation and preparation of the area with proper sub-base installation"
  },
  {
    step: "2",
    title: "Concrete Pour",
    description: "High-quality concrete poured and leveled to the correct thickness"
  },
  {
    step: "3",
    title: "Pattern Stamping",
    description: "Professional stamping tools create the desired texture and pattern"
  },
  {
    step: "4",
    title: "Color Application",
    description: "Release agent and color hardener applied for authentic appearance"
  },
  {
    step: "5",
    title: "Sealing & Protection",
    description: "Protective sealant applied for weather resistance and longevity"
  }
]

export default function PatternConcretePage() {
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
        <div className="absolute inset-0 bg-[url('/images/DJI_0207.jpg')] bg-cover bg-center">
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
                  Pattern Imprinted Concrete
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-white">
                  Decorative Concrete
                  <span className="bg-gradient-text block mt-2">Driveways in Edinburgh</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Get the premium look of natural stone with the strength of concrete. 
                  Our pattern imprinted concrete offers exceptional value and stunning results.
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
                    <div className="text-2xl font-bold text-[#CCA873]">50%</div>
                    <div className="text-sm text-gray-400">Cost Saving</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">20+</div>
                    <div className="text-sm text-gray-400">Year Lifespan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">3-5</div>
                    <div className="text-sm text-gray-400">Days Install</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">100+</div>
                    <div className="text-sm text-gray-400">Design Options</div>
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
                Why Choose Pattern Imprinted Concrete?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The smart choice for Edinburgh homeowners seeking premium appearance at an affordable price
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
              Popular Pattern Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our range of authentic patterns to match your property's style
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {patterns.map((pattern) => (
              <Card key={pattern.name} className="bg-black/50 border-[#CCA873]/20 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src={pattern.image}
                    alt={`${pattern.name} pattern imprinted concrete`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{pattern.name}</h3>
                  <p className="text-gray-300 mb-4">{pattern.description}</p>
                  <ul className="space-y-2">
                    {pattern.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-[#CCA873] mr-2" />
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

      {/* Colors */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Color Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Wide range of colors to complement any Edinburgh property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {colors.map((color) => (
              <Card key={color.name} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">{color.name}</h3>
                  <p className="text-gray-300 text-sm">{color.description}</p>
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
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert installation ensuring perfect patterns and long-lasting results
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
              Ready for Your Pattern Concrete Driveway?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how pattern imprinted 
              concrete can transform your Edinburgh property.
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