"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowRight, Phone, MapPin, Star, Shield, Clock } from "lucide-react"
import { areasServed } from "@/app/schema"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const features = [
  {
    icon: Shield,
    title: "10-Year Guarantee",
    description: "Peace of mind with our comprehensive warranty on all installations"
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Edinburgh's highest-rated driveway company on Google Reviews"
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Most driveways completed in just 3-5 days"
  }
]

export default function AreasPage() {
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
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm sm:text-base font-medium tracking-wide mb-4 sm:mb-6">
                  Areas We Serve
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Premium Driveways Across
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Edinburgh & Beyond</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Delivering excellence in driveway installations and outdoor transformations 
                  throughout Edinburgh and surrounding areas.
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

      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-6 flex items-start space-x-4">
                  <feature.icon className="h-8 w-8 text-[#CCA873] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
                Areas We Cover
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We provide our premium driveway services across Edinburgh and surrounding areas. 
                Click on an area to see our recent projects.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {areasServed.map((area) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')
                const hasDetailPage = ['morningside', 'stockbridge', 'new-town', 'old-town', 'leith', 'portobello', 'corstorphine', 'bruntsfield', 'marchmont', 'trinity', 'duddingston', 'cramond', 'barnton', 'the-grange', 'newington', 'livingston', 'linlithgow', 'bathgate', 'haddington', 'north-berwick', 'musselburgh', 'prestonpans', 'tranent', 'dunbar'].includes(slug)
                
                if (hasDetailPage) {
                  return (
                    <Link key={area} href={`/areas/${slug}`}>
                      <Card className="bg-black/50 border-[#CCA873]/20 hover:border-[#CCA873]/40 transition-colors cursor-pointer group">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start space-x-3">
                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#CCA873] mt-1 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-[#CCA873] transition-colors break-words">{area}</h3>
                              <p className="text-xs sm:text-sm text-gray-400">
                                {['Livingston', 'Linlithgow', 'Bathgate', 'Bo\'ness'].includes(area) ? 'West Lothian' : 
                                 ['Haddington', 'North Berwick', 'Musselburgh', 'Prestonpans', 'Tranent', 'Dunbar'].includes(area) ? 'East Lothian' : 'Edinburgh'}
                              </p>
                              <p className="text-xs text-[#CCA873] mt-1">View Details →</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                } else {
                  return (
                    <Card 
                      key={area}
                      className="bg-black/50 border-[#CCA873]/20 hover:border-[#CCA873]/40 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#CCA873] mt-1 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-[#CCA873] transition-colors break-words">{area}</h3>
                            <p className="text-xs sm:text-sm text-gray-400">
                              {['Livingston', 'Linlithgow', 'Bathgate', 'Bo\'ness'].includes(area) ? 'West Lothian' : 
                               ['Haddington', 'North Berwick', 'Musselburgh', 'Prestonpans', 'Tranent', 'Dunbar'].includes(area) ? 'East Lothian' : 'Edinburgh'}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                }
              })}
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