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
  DollarSign, 
  Clock, 
  Truck,
  Shield,
  Hammer,
  Zap,
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
    title: "Most Cost-Effective",
    description: "Excellent value for money, especially for larger driveways and commercial projects"
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Fastest installation time - most driveways completed in 1-2 days"
  },
  {
    icon: Truck,
    title: "Heavy Duty Performance",
    description: "Excellent for high-traffic areas and heavy vehicle access"
  },
  {
    icon: Zap,
    title: "Immediate Use",
    description: "Ready to use within hours of installation completion"
  }
]

const types = [
  {
    name: "Standard Tarmac",
    description: "Traditional hot-rolled asphalt perfect for most residential driveways",
    priceRange: "£35-55 per m²",
    features: ["Cost-effective", "Quick installation", "Smooth finish", "Proven durability"],
    image: "/images/DJI_0102.jpg"
  },
  {
    name: "Colored Tarmac",
    description: "Enhanced appearance with colored aggregates for a premium look",
    priceRange: "£50-70 per m²",
    features: ["Enhanced appearance", "Color options", "Non-fade finish", "Premium quality"],
    image: "/images/DJI_0164.jpg"
  },
  {
    name: "SMA (Stone Mastic Asphalt)",
    description: "Premium grade tarmac with superior durability and appearance",
    priceRange: "£60-85 per m²",
    features: ["Superior durability", "Excellent grip", "Weather resistant", "Professional finish"],
    image: "/images/DJI_0225.jpg"
  }
]

const applications = [
  {
    title: "Residential Driveways",
    description: "Perfect for family homes requiring reliable, cost-effective access",
    icon: "🏠"
  },
  {
    title: "Commercial Car Parks",
    description: "Ideal for businesses needing durable, high-capacity parking solutions",
    icon: "🏢"
  },
  {
    title: "Farm Access Roads",
    description: "Excellent for agricultural properties with heavy machinery access",
    icon: "🚜"
  },
  {
    title: "Industrial Sites",
    description: "Heavy-duty solution for warehouses and industrial facilities",
    icon: "🏭"
  }
]

const process = [
  {
    step: "1",
    title: "Site Survey & Preparation",
    description: "Assessment of existing surface and preparation including excavation if required"
  },
  {
    step: "2",
    title: "Sub-base Installation",
    description: "Installation of appropriate sub-base material for load-bearing capacity"
  },
  {
    step: "3",
    title: "Binder Course",
    description: "Application of base layer tarmac for structural strength and stability"
  },
  {
    step: "4",
    title: "Surface Course",
    description: "Final wearing course applied with professional rolling for smooth finish"
  },
  {
    step: "5",
    title: "Line Marking & Finishing",
    description: "Optional line marking and final inspection to ensure quality standards"
  }
]

export default function TarmacPage() {
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
        <div className="absolute inset-0 bg-[url('/images/DJI_0102.jpg')] bg-cover bg-center">
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
                  Professional Tarmac Solutions
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight text-white">
                  Professional Tarmac
                  <span className="bg-gradient-text block mt-2">Driveways in Edinburgh</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Fast, reliable, and cost-effective tarmac solutions for residential and 
                  commercial properties across Edinburgh. Professional installation with lasting results.
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
                    <div className="text-2xl font-bold text-[#CCA873]">1-2</div>
                    <div className="text-sm text-gray-400">Days Install</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">15+</div>
                    <div className="text-sm text-gray-400">Year Lifespan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">£35</div>
                    <div className="text-sm text-gray-400">From per m²</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#CCA873]">24hr</div>
                    <div className="text-sm text-gray-400">Ready to Use</div>
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
                Why Choose Professional Tarmac?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The practical choice for Edinburgh properties requiring reliable, cost-effective surfacing
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

      {/* Types */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Tarmac Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the right tarmac solution for your specific requirements and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {types.map((type) => (
              <Card key={type.name} className="bg-black/50 border-[#CCA873]/20 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src={type.image}
                    alt={`${type.name} installation`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">{type.name}</h3>
                    <p className="text-[#CCA873] font-semibold">{type.priceRange}</p>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
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

      {/* Applications */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Perfect Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tarmac is ideal for a wide range of surfacing requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app) => (
              <Card key={app.title} className="bg-black/50 border-[#CCA873]/20 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{app.title}</h3>
                  <p className="text-gray-300 text-sm">{app.description}</p>
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
              Our experienced team follows industry best practices for lasting results
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
              Ready for Your Tarmac Driveway?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and competitive quote. 
              Fast, professional tarmac installation across Edinburgh.
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