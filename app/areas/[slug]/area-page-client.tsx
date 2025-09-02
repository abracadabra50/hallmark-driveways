"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowRight, Phone, MapPin, Star, Shield, Clock, Award, Home, TreePine } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

interface AreaData {
  title: string
  description: string
  image: string
  postcode?: string
  region: string
  specialties: string[]
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  landmarks: string[]
  propertyTypes: string[]
}

interface AreaPageClientProps {
  area: AreaData
}

const getIconComponent = (iconName: string) => {
  const icons = {
    Home,
    TreePine,
    Award,
    Shield,
    MapPin
  }
  return icons[iconName as keyof typeof icons] || Shield
}

export function AreaPageClient({ area }: AreaPageClientProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Use consistent branding colors for all regions
  const regionColorClasses = {
    bg: "bg-[#CCA873]/10",
    text: "text-[#CCA873]"
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[80svh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${area.image}')` }}
        >
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
                <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${regionColorClasses.bg} ${regionColorClasses.text} text-sm sm:text-base font-medium tracking-wide mb-4 sm:mb-6`}>
                  <MapPin className="inline w-4 h-4 mr-2" />
                  {area.region} • {area.postcode}
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Premium Driveways in
                  <span className="bg-gradient-text block mt-1 sm:mt-2">{area.title}</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  {area.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto font-semibold">
                    Get Free {area.title} Quote <ArrowRight className="ml-2" />
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

      {/* Specialties */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-text inline-block">
              {area.title} Driveway Specialists
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our expertise in {area.title} ensures your driveway project meets all local requirements 
              and complements the area's unique character.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {area.features.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon)
              return (
                <Card key={index} className="bg-black/50 border-[#CCA873]/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <IconComponent className="h-8 w-8 text-[#CCA873] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
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
                Our {area.title} Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive driveway solutions tailored specifically for {area.title} properties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {area.specialties.map((specialty, index) => (
                <Card 
                  key={index}
                  className="bg-black/50 border-[#CCA873]/20 hover:border-[#CCA873]/40 transition-colors group"
                >
                  <CardContent className="p-6 text-center">
                    <Shield className="h-8 w-8 text-[#CCA873] mx-auto mb-4" />
                    <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-[#CCA873] transition-colors">
                      {specialty}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-text inline-block">
                Local {area.title} Knowledge
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our deep understanding of {area.title} ensures every driveway installation 
                respects the local character and meets specific area requirements.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Local Landmarks</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((landmark, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#CCA873]/10 text-[#CCA873] rounded-full text-sm"
                      >
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Property Types We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.propertyTypes.map((type, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#CCA873]/10 text-[#CCA873] rounded-full text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-[#CCA873]/20">
              <h3 className="text-2xl font-bold text-white mb-4">Get Your {area.title} Quote</h3>
              <p className="text-gray-300 mb-6">
                Specialist driveway installation for {area.title} properties. Free consultation 
                and area-specific expertise included.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">4.9/5 from 200+ local customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#CCA873]" />
                  <span className="text-gray-300">10-year guarantee on all work</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-gray-300">{area.title} area specialists</span>
                </div>
              </div>
              <LogoButton className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold">
                Request Free {area.title} Quote
              </LogoButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Transform Your {area.title} Driveway?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Contact Edinburgh's most trusted driveway specialists for your {area.title} project.
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
