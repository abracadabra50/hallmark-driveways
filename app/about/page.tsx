"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Trophy, ArrowRight, PenTool as Tool, Clock, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stats = [
  { number: "1000+", label: "Happy Customers" },
  { number: "15+", label: "Years Experience" },
  { number: "5.0", label: "Star Rating" },
  { number: "100%", label: "Satisfaction" },
]

const values = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project is backed by our comprehensive 10-year guarantee, ensuring lasting quality and peace of mind."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience and craftsmanship to every project we undertake."
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description: "Recognized for excellence in driveway installation and customer service across Edinburgh."
  },
  {
    icon: Tool,
    title: "Premium Materials",
    description: "We use only the highest quality materials from trusted suppliers for lasting results."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Projects completed on schedule without compromising on quality or attention to detail."
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Consistently rated 5 stars by our customers for our professional service and results."
  }
]

export default function AboutPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-[url('/images/DJI_0164.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] font-semibold mb-6">
                About Hallmark Driveways
              </span>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white">
                Edinburgh's Most Trusted
                <span className="bg-gradient-text block mt-2">Driveway Specialists</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                With over 15 years of experience, we've built a reputation for excellence 
                in driveway installation and outdoor transformations across Edinburgh 
                and the surrounding areas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-b border-[#CCA873]/20 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#CCA873] mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Since our establishment in 2010, Hallmark Driveways has been at the 
                    forefront of outdoor space transformation in Edinburgh and across Scotland.
                  </p>
                  <p>
                    Our journey began with a simple mission: to provide exceptional quality 
                    driveways and landscaping services that stand the test of time. Today, 
                    we're proud to be one of Edinburgh's most trusted names in driveway 
                    installation and outdoor renovations.
                  </p>
                  <p>
                    What sets us apart is our unwavering commitment to quality, craftsmanship, 
                    and customer satisfaction. Every project we undertake is approached with 
                    the same dedication to excellence and attention to detail.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/DJI_0164.jpg"
                      alt="Driveway project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/DJI_0225.jpg"
                      alt="Driveway project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/DJI_0207.jpg"
                      alt="Driveway project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/DJI_0102.jpg"
                      alt="Driveway project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on principles of quality, integrity, and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-[#CCA873] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready 
              to bring your vision to life with our premium craftsmanship.
            </p>
            <Button size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
              Get Free Quote <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}