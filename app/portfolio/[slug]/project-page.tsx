"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowLeft, ArrowRight, Phone, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

type Project = {
  title: string
  location: string
  description: string
  completion: string
  duration: string
  mainImage: string
  gallery: string[]
  features: string[]
  testimonial: {
    name: string
    text: string
    location: string
  }
}

export function ProjectPage({ project }: { project: Project | undefined }) {
  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32">
          <h1>Project not found</h1>
          <Link href="/portfolio">
            <Button variant="link" className="text-[#CCA873] -ml-4">
              <ArrowLeft className="mr-2" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[80svh]">
        <div className="absolute inset-0">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        </div>
        
        <div className="relative z-20">
          <Navbar />
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col pt-32 sm:pt-36">
              <Link href="/portfolio">
                <Button variant="link" className="text-[#CCA873] -ml-4 mb-4 sm:mb-6 text-sm sm:text-base relative z-10">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                </Button>
              </Link>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                  Featured Project
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight">
                  {project.title}
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-[#CCA873]" />
                    <span className="text-sm sm:text-base">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Calendar className="h-5 w-5 text-[#CCA873]" />
                    <span className="text-sm sm:text-base">{project.completion}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="h-5 w-5 text-[#CCA873]" />
                    <span className="text-sm sm:text-base">{project.duration}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                    Get Your Free Quote <ArrowRight className="ml-2" />
                  </LogoButton>
                  <LogoButton 
                    size="lg" 
                    variant="outline" 
                    className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                  >
                    <Phone className="mr-2" /> Call 0800 135 7000
                  </LogoButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-text inline-block">
                Project Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-[#CCA873] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-text inline-block">
                Client Testimonial
              </h2>
              <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-8">
                <p className="text-xl text-gray-300 mb-6">"{project.testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#CCA873]">{project.testimonial.name}</p>
                  <p className="text-gray-400">{project.testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-text inline-block">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden group">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready 
              to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                Get Your Free Quote <ArrowRight className="ml-2" />
              </LogoButton>
              <LogoButton 
                size="lg" 
                variant="outline" 
                className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              >
                <Phone className="mr-2" /> Call 0800 135 7000
              </LogoButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}