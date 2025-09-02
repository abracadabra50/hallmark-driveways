"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowRight, Phone, Camera, Eye } from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// All Hallmark Driveways project images
const portfolioImages = [
  "/images/IMG_5610.JPG",
  "/images/IMG_5616.JPG", 
  "/images/IMG_5617.JPG",
  "/images/IMG_5624.JPG",
  "/images/IMG_5625.JPG",
  "/images/IMG_5626.JPG",
  "/images/IMG_5627.JPG",
  "/images/IMG_5628.JPG",
  "/images/IMG_5629.JPG",
  "/images/IMG_5630.JPG",
  "/images/IMG_5632.JPG",
  "/images/IMG_5642.JPG",
  "/images/IMG_5643.JPG",
  "/images/IMG_5645.JPG",
  "/images/IMG_5679.JPG",
  "/images/IMG_5680.JPG",
  "/images/IMG_5681.JPG",
  "/images/IMG_5778.JPG",
  "/images/IMG_5915.JPG",
  "/images/IMG_5981.JPG",
  "/images/IMG_5988.JPG",
  "/images/IMG_6103.JPG",
  "/images/IMG_6140.JPG",
  "/images/IMG_6141.JPG",
  "/images/IMG_6328.JPG",
  "/images/1e23c7de-4b3b-4bb7-b7c2-b19a06c2cc16.jpg",
  "/images/230d12d6-1039-43d0-b15a-8687ec214368.jpg",
  "/images/a38246e1-3378-45f7-906b-918399a810d7.jpg",
  "/images/ab998c2d-b0fd-4597-a8c3-3149c0575001.jpg",
  "/images/bcac53ee-4580-4d7c-af9c-4be77c2a74ae.jpg",
  "/images/c73f6ebb-141e-4d12-99e1-f300f5054c72.jpg",
  "/images/de458c79-9a9a-42d9-8ce0-06cd594b3629.jpg",
  "/images/Photo_6553639_DJI_39_jpg_4033678_0_20211023152132_photo_original.jpg",
  "/images/RemoteMediaFile_6553646_0_2021_11_01_09_22_36.jpg",
  "/images/IMG_2890.PNG",
  "/images/IMG_2997.PNG",
  "/images/IMG_2998.PNG",
  "/images/IMG_2999.PNG",
  "/images/IMG_3001.PNG",
  "/images/IMG_4530.PNG",
  "/images/IMG_4534.PNG",
  "/images/IMG_4535.PNG",
  "/images/IMG_4969.PNG",
  "/images/IMG_5357.PNG",
  "/images/IMG_5794.PNG",
  "/images/IMG_6147.PNG"
]

const categories = [
  "All Projects",
  "Block Paving", 
  "Resin Driveways",
  "Pattern Concrete",
  "Heritage Properties",
  "Modern Driveways"
]

export default function PortfolioPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [selectedCategory, setSelectedCategory] = React.useState("All Projects")
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[80svh]">
        <div className="absolute inset-0 bg-[url('https://hallmarkdriveways.com/images/DJI_0164.jpg')] bg-cover bg-center">
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
                  <Camera className="inline w-4 h-4 mr-2" />
                  Our Work
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Premium Driveways
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Across Edinburgh</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Explore our portfolio of premium driveway installations across Edinburgh and surrounding areas. 
                  Quality craftsmanship that speaks for itself.
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

      {/* Portfolio Gallery */}
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
                Our Portfolio
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Browse through our completed projects showcasing the quality and craftsmanship 
                that has made us Edinburgh's premier driveway specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {portfolioImages.map((image, index) => (
                <Card 
                  key={index} 
                  className="bg-black/50 border-[#CCA873]/20 hover:border-[#CCA873]/40 transition-all group overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image}
                      alt={`Hallmark Driveways Project ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      quality={75}
                      loading={index < 8 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#CCA873] text-black p-2 rounded-full">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src={selectedImage}
              alt="Portfolio Image"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
              quality={85}
              priority
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Portfolio Stats */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#CCA873] mb-2">200+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#CCA873] mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#CCA873] mb-2">24</div>
              <div className="text-gray-300">Areas Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#CCA873] mb-2">4.9/5</div>
              <div className="text-gray-300">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready for Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join our portfolio of satisfied customers with a premium driveway installation 
              from Edinburgh's most trusted specialists.
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