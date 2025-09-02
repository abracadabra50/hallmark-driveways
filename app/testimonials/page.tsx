"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { LogoButton } from "@/components/ui/logo-button"
import { Star, Quote, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Morningside",
    rating: 5,
    text: "Absolutely delighted with our new driveway. The team was professional, punctual, and the workmanship is outstanding. The attention to detail and communication throughout the project was excellent.",
    project: "Block Paving Driveway",
    date: "January 2024",
    image: "/images/DJI_0164.jpg"
  },
  {
    name: "James Wilson",
    location: "Stockbridge",
    rating: 5,
    text: "From design to completion, Hallmark Driveways exceeded our expectations. Their attention to detail and communication throughout the project was excellent. The new resin driveway has completely transformed our property.",
    project: "Resin-Bound Driveway",
    date: "February 2024",
    image: "/images/DJI_0225.jpg"
  },
  {
    name: "Emma MacDonald",
    location: "Trinity",
    rating: 5,
    text: "Transformed our garden completely. The landscaping team was knowledgeable and professional. The result is exactly what we wanted. The integrated lighting and seating areas have made such a difference to how we use the space.",
    project: "Garden Landscaping",
    date: "March 2024",
    image: "/images/DJI_0207.jpg"
  },
  {
    name: "David Anderson",
    location: "Bruntsfield",
    rating: 5,
    text: "Very impressed with the quality of work and professionalism. The new pattern imprinted concrete driveway has completely transformed the front of our house. The team was clean, tidy, and completed the work ahead of schedule.",
    project: "Pattern Imprinted Concrete",
    date: "March 2024",
    image: "/images/DJI_0102.jpg"
  }
]

const stats = [
  { number: "1000+", label: "Happy Customers" },
  { number: "15+", label: "Years Experience" },
  { number: "5.0", label: "Star Rating" },
  { number: "100%", label: "Satisfaction" },
]

export default function TestimonialsPage() {
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
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                  Customer Stories
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  What Our Clients
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Say About Us</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Don't just take our word for it. Here's what our customers say about 
                  their experience with Hallmark Driveways.
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

      <section className="py-12 bg-black/95 border-t border-b border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CCA873] mb-2">{stat.number}</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</p>
              </div>
            ))}
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
            <div className="grid gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="bg-black/50 border-[#CCA873]/20 overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative aspect-[16/9] lg:aspect-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <Image 
                        src={testimonial.image}
                        alt={`${testimonial.project} by Hallmark Driveways`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <CardContent className={`p-6 sm:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-[#CCA873]/20 mb-4 sm:mb-6" />
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[#CCA873] text-[#CCA873]" />
                        ))}
                      </div>
                      <p className="text-base sm:text-lg text-gray-300 mb-6">{testimonial.text}</p>
                      <div className="mt-auto">
                        <p className="font-semibold text-[#CCA873] text-lg">{testimonial.name}</p>
                        <p className="text-gray-400">{testimonial.location}</p>
                        <div className="mt-4 pt-4 border-t border-[#CCA873]/20">
                          <p className="text-sm text-[#CCA873]">{testimonial.project}</p>
                          <p className="text-sm text-gray-400">{testimonial.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
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
              Join our growing list of satisfied customers. Contact us today for a 
              free consultation and quote.
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