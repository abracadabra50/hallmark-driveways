"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Star, Clock, PenTool as Tool, ChevronRight, Quote, Check, ArrowRight, Phone, MapPin, Award, Users, Zap, CheckCircle2, Calculator, Eye, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const benefits = [
  "✓ Premium Materials & Craftsmanship",
  "✓ 10-Year Written Guarantee", 
  "✓ Flexible Payment Options",
  "✓ Free Design Consultation",
  "✓ Expert Installation Team",
  "✓ Fully Insured & Licensed"
]

const features = [
  {
    icon: Shield,
    title: "10-Year Guarantee",
    description: "Comprehensive warranty on all installations across Edinburgh"
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Edinburgh's highest-rated driveway company with 247+ reviews"
  },
  {
    icon: Clock,
    title: "Fast Installation", 
    description: "Most driveways completed in just 3-5 days"
  }
]

const quickActions = [
  {
    icon: Calculator,
    title: "Price Calculator",
    description: "Get instant estimates",
    href: "/calculator",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    icon: Eye,
    title: "Virtual Tours",
    description: "See our work in action",
    href: "/virtual-tour",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    icon: MessageSquare,
    title: "Customer Reviews",
    description: "Read real experiences",
    href: "/reviews",
    color: "bg-green-500/10 text-green-400 border-green-500/20"
  }
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Edinburgh's #1 Choice",
    description: "Over 1,000 satisfied customers across Edinburgh & Lothians"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "15+ years experience with certified installation specialists"
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Free quotes within 24 hours, installations start within 2 weeks"
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "Premium materials, professional finish, guaranteed satisfaction"
  }
]

const customerImages = [
  "/images/IMG_5616.JPG",
  "/images/IMG_5617.JPG", 
  "/images/IMG_5624.JPG",
  "/images/IMG_5625.JPG"
]

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Morningside, Edinburgh",
    text: "Best decision we made! Our new block paving driveway has completely transformed the look of our home. The team was professional and the work is outstanding.",
    rating: 5,
    service: "Block Paving"
  },
  {
    name: "James Wilson", 
    location: "Stockbridge, Edinburgh",
    text: "Excellent workmanship and attention to detail. Very pleased with our resin driveway and the whole process was smooth from start to finish.",
    rating: 5,
    service: "Resin Driveway"
  },
  {
    name: "Emma MacDonald",
    location: "New Town, Edinburgh", 
    text: "Professional service from quote to completion. Our pattern imprinted concrete driveway looks amazing and has added real value to our property.",
    rating: 5,
    service: "Pattern Imprinted Concrete"
  }
]

const services = [
  {
    title: "Block Paving Driveways",
    description: "Premium block paving with extensive design options and patterns. Perfect for Edinburgh's traditional properties.",
    image: "/images/DJI_0164.jpg",
    features: ["Herringbone & basketweave patterns", "Premium granite & concrete blocks", "Excellent durability", "Traditional Edinburgh style"]
  },
  {
    title: "Resin Bound Driveways", 
    description: "Modern, permeable resin-bound surfaces in a range of finishes. SUDS compliant for Edinburgh planning.",
    image: "/images/DJI_0225.jpg",
    features: ["Permeable & eco-friendly", "Wide color selection", "Low maintenance", "Modern aesthetic"]
  },
  {
    title: "Pattern Imprinted Concrete",
    description: "Decorative concrete driveways with authentic stone effects. Cost-effective premium appearance.",
    image: "/images/DJI_0207.jpg", 
    features: ["Stone & brick effects", "Durable concrete base", "Cost-effective", "Quick installation"]
  }
]

const areasCovered = [
  "Morningside", "Stockbridge", "New Town", "Bruntsfield", "Corstorphine", "Trinity",
  "Leith", "Portobello", "Marchmont", "The Grange", "Newington", "Dalry"
]

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const router = useRouter()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleGetQuote = () => {
    router.push('/quote')
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] bg-black" style={{
        backgroundImage: `url('/images/hero-tiny.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/hero-mobile.jpg" />
            <source media="(min-width: 769px)" srcSet="/images/hero-desktop.jpg" />
            <img 
              src="/images/hero-desktop.jpg" 
              alt="Premium driveway installation Edinburgh"
              className="w-full h-full object-cover opacity-0"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={(e) => {
                (e.target as HTMLImageElement).style.opacity = '1';
                (e.target as HTMLImageElement).style.transition = 'opacity 0.3s ease-in-out';
              }}
            />
          </picture>
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-20">
          <Navbar />
          
          <div className="container mx-auto px-4 min-h-[calc(100svh-5rem)] flex items-start pt-32">
            <div className="max-w-4xl">
              <div>
                <div className="inline-block px-4 py-2.5 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-base sm:text-lg font-medium tracking-wide mb-6">
                  🏆 Edinburgh's #1 Rated Driveway Company
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Premium Driveway Installation
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Across Edinburgh & Lothians</span>
                </h1>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
                    Transform your property with Edinburgh's most trusted driveway specialists. 
                    Expert installation of block paving, resin, and concrete driveways with our 
                    comprehensive 10-year guarantee.
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 max-w-2xl">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center space-x-2">
                        <span className="text-[#CCA873]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <LogoButton 
                    size="lg" 
                    className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto font-semibold"
                    onClick={handleGetQuote}
                  >
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

                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {customerImages.map((image, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#CCA873] overflow-hidden relative"
                      >
                        <Image 
                          src={image}
                          alt="Happy customer"
                          width={40}
                          height={40}
                          className="object-cover"
                          priority={i < 2}
                          loading={i < 2 ? "eager" : "lazy"}
                          sizes="40px"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      Join 1,000+ happy customers
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#CCA873] text-[#CCA873]" />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">5.0 (247 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-black/95 border-t border-b border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-6 flex items-start space-x-4">
                  <feature.icon className="h-8 w-8 text-[#CCA873] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-text inline-block">
              Explore Your Options
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get instant estimates, see our work, and read real customer experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.href}>
                <Card className={`${action.color} border hover:scale-105 transition-transform cursor-pointer`}>
                  <CardContent className="p-6 text-center">
                    <action.icon className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm opacity-80">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text inline-block">
                Edinburgh's Premier Driveway Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of high-quality driveway options, each installed with 
                expert craftsmanship and backed by our 10-year guarantee
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={service.title} className="bg-black/50 border-[#CCA873]/20 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={`${service.title} installation in Edinburgh`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-[#CCA873] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 w-full"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
                asChild
              >
                <a href="/services">
                  View All Services <ChevronRight className="ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text inline-block">
              Why Edinburgh Chooses Hallmark Driveways
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Over 15 years of excellence in driveway installation across Edinburgh and the Lothians
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="bg-black/50 border-[#CCA873]/20 text-center">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-[#CCA873] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text inline-block">
              Edinburgh Driveway Transformations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we've transformed properties across Edinburgh with our premium driveway installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-80">
                <Image 
                  src="/images/48e42c1f-9b00-47fb-8992-b0a840032f80.jpg"
                  alt="Before driveway transformation in Edinburgh"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg">
                  <p className="text-white font-semibold">Before</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-80">
                <Image 
                  src="/images/DJI_0102.jpg"
                  alt="After premium driveway installation in Edinburgh"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-[#CCA873]/90 px-4 py-2 rounded-lg">
                  <p className="text-black font-semibold">After</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
              asChild
            >
              <a href="/portfolio">
                View Our Portfolio <ChevronRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Serving Edinburgh & Lothians
            </h2>
            <p className="text-gray-300 mb-8">
              Professional driveway installation across all Edinburgh areas
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {areasCovered.map((area) => (
              <span 
                key={area}
                className="px-3 py-1 bg-[#CCA873]/10 text-[#CCA873] rounded-full text-sm border border-[#CCA873]/20"
              >
                <MapPin className="h-3 w-3 inline mr-1" />
                {area}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="link" 
              className="text-[#CCA873] hover:text-[#CCA873]/80"
              asChild
            >
              <a href="/areas">
                View All Areas We Cover <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text inline-block">
              What Edinburgh Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#CCA873] text-[#CCA873]" />
              ))}
              <span className="text-xl text-gray-300 ml-2">5.0 from 247+ reviews</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-[#CCA873]/20 mb-6" />
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#CCA873] text-[#CCA873]" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 text-gray-300">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                    <p className="text-sm text-[#CCA873] mt-1">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
              asChild
            >
              <a href="/reviews">
                Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Transform Your Edinburgh Property?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join over 1,000 satisfied customers across Edinburgh. Get your free, 
              no-obligation quote today and discover why we're Edinburgh's #1 choice for driveways.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <LogoButton 
                size="lg" 
                className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-lg px-8 py-6 font-semibold"
                onClick={handleGetQuote}
              >
                Get Your Free Quote <ArrowRight className="ml-2" />
              </LogoButton>
              <LogoButton 
                size="lg" 
                variant="outline" 
                className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10 text-lg px-8 py-6"
                asChild
              >
                <a href="tel:08001357000">
                  <Phone className="mr-2" /> Call 0800 135 7000
                </a>
              </LogoButton>
            </div>
            
            <p className="text-sm text-gray-400">
              ✓ Free consultation ✓ No obligation ✓ Response within 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}