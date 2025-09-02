"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "0800 135 7000",
    href: "tel:08001357000",
    description: "Available Mon-Sat, 8am-6pm"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@hallmarkdriveways.com",
    href: "mailto:info@hallmarkdriveways.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "5 South Charlotte Street",
    description: "Edinburgh, EH2 4AN",
    href: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Monday - Friday: 8am - 6pm",
    description: "Saturday: 9am - 4pm\nSunday: Closed",
    href: null
  }
]

const services = [
  "Block Paving",
  "Resin Driveways",
  "Pattern Imprinted Concrete",
  "Tarmac Solutions",
  "Natural Stone Patios",
  "Garden Landscaping"
]

export default function ContactPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                  Get In Touch
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Let's Start Your
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Dream Project</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Contact us today for a free consultation and quote. Our expert team is ready 
                  to bring your vision to life with our premium craftsmanship.
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
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-text inline-block">Contact Information</h2>
                  <p className="text-gray-300">
                    Get in touch with our team for any questions about our services or to schedule 
                    a free consultation.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item) => (
                    <Card key={item.title} className="bg-black/50 border-[#CCA873]/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-[#CCA873]/10 p-3 rounded-lg">
                            <item.icon className="h-6 w-6 text-[#CCA873]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                
                            {item.href ? (
                              <a 
                                href={item.href}
                                className="text-gray-300 hover:text-[#CCA873] transition-colors block break-words"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-gray-300">{item.content}</p>
                            )}
                            <p className="text-sm text-gray-400 mt-1 whitespace-pre-line">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.9042606035835!2d-3.2067374839615684!3d55.95734998465401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79109a9ffff%3A0x3b2c5b9c0b5d0b0!2s64a%20Cumberland%20St%2C%20Edinburgh%20EH3%206RE!5e0!3m2!1sen!2suk!4v1629789456789!5m2!1sen!2suk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="absolute inset-0"
                  />
                </div>
              </div>

              <div>
                <Card className="bg-black/50 border-[#CCA873]/20">
                  <CardContent className="p-6 sm:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[#CCA873]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send className="h-8 w-8 text-[#CCA873]" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Message Sent!</h3>
                        <p className="text-gray-300 mb-6">
                          Thank you for your message. We'll get back to you within 24 hours.
                        </p>
                        <Button 
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                          className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                        <form 
                          name="contact" 
                          method="POST" 
                          data-netlify="true" 
                          netlify-honeypot="bot-field"
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <input type="hidden" name="form-name" value="contact" />
                          <div className="hidden">
                            <label>
                              Don't fill this out if you're human: <input name="bot-field" />
                            </label>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="firstName">
                                First Name *
                              </label>
                              <input 
                                type="text" 
                                id="firstName"
                                name="firstName"
                                required
                                className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white" 
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="lastName">
                                Last Name *
                              </label>
                              <input 
                                type="text" 
                                id="lastName"
                                name="lastName"
                                required
                                className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white" 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="email">
                              Email *
                            </label>
                            <input 
                              type="email" 
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="phone">
                              Phone
                            </label>
                            <input 
                              type="tel" 
                              id="phone"
                              name="phone"
                              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="service">
                              Service Interested In
                            </label>
                            <select 
                              id="service"
                              name="service"
                              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white appearance-none"
                            >
                              <option value="" className="bg-black">Select a service</option>
                              {services.map((service) => (
                                <option key={service} value={service} className="bg-black">
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="message">
                              Message *
                            </label>
                            <textarea 
                              rows={4} 
                              id="message"
                              name="message"
                              required
                              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white resize-none" 
                            />
                          </div>
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold py-4 text-lg"
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-5 w-5" />
                          </Button>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Why Choose Hallmark Driveways?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join our growing list of satisfied customers. Experience the difference of working 
              with Edinburgh's premier driveway specialists.
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