"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { 
  CircleDot, 
  Palmtree, 
  Fence, 
  SunDim, 
  CheckCircle2,
  ArrowRight,
  Phone
} from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const services = [
  {
    icon: CircleDot,
    title: "Driveways",
    description: "Premium driveway solutions tailored to your needs",
    features: [
      "Block paving with extensive design options",
      "Durable resin-bound surfaces",
      "Professional tarmac installation",
      "Pattern imprinted concrete",
      "Expert drainage solutions"
    ],
    image: "/images/DJI_0164.jpg"
  },
  {
    icon: SunDim,
    title: "Patios",
    description: "Create your perfect outdoor living space",
    features: [
      "Natural stone patios",
      "Porcelain tile installations",
      "Custom patio designs",
      "Seamless indoor-outdoor transitions",
      "Built-in seating and features"
    ],
    image: "/images/DJI_0225.jpg"
  },
  {
    icon: Palmtree,
    title: "Landscaping",
    description: "Complete garden transformation services",
    features: [
      "Artificial grass installation",
      "Professional turfing",
      "Garden wall construction",
      "Custom decking solutions",
      "Full garden design service"
    ],
    image: "/images/DJI_0207.jpg"
  },
  {
    icon: Fence,
    title: "Fencing",
    description: "Secure and stylish boundary solutions",
    features: [
      "Wooden fence installations",
      "Metal and composite fencing",
      "Gate installations",
      "Privacy screens",
      "Decorative panels"
    ],
    image: "/images/DJI_0102.jpg"
  }
]

export default function ServicesPage() {
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
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                  Our Services
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Premium Outdoor
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Transformation Solutions</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Comprehensive outdoor transformation solutions delivered with 
                  expertise and backed by our 10-year guarantee across Edinburgh & Lothians.
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

      <section className="py-24 bg-black" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-16 lg:gap-24">
              {services.map((service, index) => (
                <div 
                  key={service.title} 
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#CCA873] flex-shrink-0" />
                      <h2 className="text-3xl sm:text-4xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-300">
                      {service.description}
                    </p>
                    <ul className="space-y-3 sm:space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#CCA873] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="bg-[#CCA873]/10 hover:bg-[#CCA873]/20 text-[#CCA873] border border-[#CCA873]/20 w-full sm:w-auto"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`group overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative aspect-[4/3]">
                      <Image 
                        src={service.image}
                        alt={`${service.title} services in Edinburgh by Hallmark Driveways`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready 
              to bring your vision to life with our premium craftsmanship.
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