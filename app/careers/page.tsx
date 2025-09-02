"use client"

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { ArrowRight, Phone, Users, Wrench, GraduationCap, Shield, Clock, PoundSterling, Car, Home, Award } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const benefits = [
  {
    icon: PoundSterling,
    title: "Competitive Pay",
    description: "Above-market rates with performance bonuses and overtime opportunities"
  },
  {
    icon: Car,
    title: "Company Vehicle",
    description: "Fully equipped work vehicles for senior team members and squads"
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Ongoing skills training and professional development opportunities"
  },
  {
    icon: Shield,
    title: "Job Security",
    description: "Stable employment with Edinburgh's most established driveway company"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible hours, weekend work optional, and respect for personal time"
  },
  {
    icon: Award,
    title: "Career Progression",
    description: "Clear advancement paths from labourer to squad leader to management"
  }
]

const positions = [
  {
    title: "Driveway Installation Squads",
    type: "Full-time Teams",
    experience: "2+ years experience preferred",
    description: "We're looking for experienced driveway installation teams who can work independently across Edinburgh and surrounding areas. Perfect for established squads wanting to join Scotland's premier driveway company.",
    requirements: [
      "Proven experience in block paving, resin, or pattern concrete",
      "Own transport and basic tools",
      "Knowledge of Edinburgh area and access considerations",
      "Ability to work with planning permissions and conservation areas",
      "Professional attitude and customer service skills"
    ],
    benefits: [
      "£400-600 per day for experienced squads",
      "Guaranteed work throughout the year",
      "All materials and specialist equipment provided",
      "Marketing and lead generation handled",
      "Administrative support included"
    ]
  },
  {
    title: "Skilled Driveway Installers",
    type: "Full-time Permanent",
    experience: "1+ years experience",
    description: "Join our growing team of skilled installers. We're looking for craftspeople who take pride in their work and want to be part of Edinburgh's most respected driveway company.",
    requirements: [
      "Experience in block paving, resin driveways, or concrete work",
      "Understanding of drainage and foundation work",
      "Ability to read plans and follow specifications",
      "Valid driving licence",
      "Willingness to work across Edinburgh and Lothians"
    ],
    benefits: [
      "£180-250 per day depending on experience",
      "Company van and fuel allowance",
      "All tools and equipment provided",
      "Overtime opportunities available",
      "Annual bonus scheme"
    ]
  },
  {
    title: "General Labourers",
    type: "Full-time/Part-time",
    experience: "No experience required",
    description: "Perfect opportunity for those wanting to start a career in the construction industry. We provide full training and support to help you develop valuable skills in driveway installation.",
    requirements: [
      "Physical fitness and willingness to learn",
      "Reliable and punctual",
      "Positive attitude and team player",
      "Valid right to work in the UK",
      "Basic English communication skills"
    ],
    benefits: [
      "£120-160 per day (increases with training)",
      "Full training programme provided",
      "Potential progression to skilled installer",
      "Stable employment with growing company",
      "Supportive team environment"
    ]
  }
]

export default function CareersPage() {
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
                  <Users className="inline w-4 h-4 mr-2" />
                  Join Our Team
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight text-white">
                  Build Your Career with
                  <span className="bg-gradient-text block mt-1 sm:mt-2">Edinburgh's Premier</span>
                  <span className="bg-gradient-text block">Driveway Company</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Join Hallmark Driveways and become part of Edinburgh's most trusted driveway installation team. 
                  We're hiring experienced squads, skilled installers, and enthusiastic labourers.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto font-semibold">
                    Apply Now <ArrowRight className="ml-2" />
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

      {/* Why Join Us */}
      <section className="py-16 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-text inline-block">
              Why Work with Hallmark Driveways?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join Edinburgh's most established driveway company with over 15 years of excellence. 
              We invest in our team and provide the support you need to build a successful career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-6 flex items-start space-x-4">
                  <benefit.icon className="h-8 w-8 text-[#CCA873] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
                Current Opportunities
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We're actively hiring across all skill levels. Whether you're an experienced squad 
                or just starting your career, we have opportunities for you.
              </p>
            </div>

            <div className="space-y-8">
              {positions.map((position, index) => (
                <Card key={index} className="bg-black/50 border-[#CCA873]/20">
                  <CardHeader className="border-b border-[#CCA873]/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl text-white">{position.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <span className="text-sm text-[#CCA873] bg-[#CCA873]/10 px-3 py-1 rounded-full">
                            {position.type}
                          </span>
                          <span className="text-sm text-gray-400">
                            {position.experience}
                          </span>
                        </div>
                      </div>
                      <LogoButton className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold">
                        Apply for This Role
                      </LogoButton>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-6 text-base sm:text-lg">
                      {position.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-gray-300 text-sm flex items-start">
                              <span className="text-[#CCA873] mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">What We Offer:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-gray-300 text-sm flex items-start">
                              <span className="text-[#CCA873] mr-2">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-text inline-block">
                Our Company Culture
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                At Hallmark Driveways, we believe our success comes from our people. We've built 
                Edinburgh's most respected driveway company by investing in our team and creating 
                an environment where everyone can thrive.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#CCA873] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Team-First Approach</h3>
                    <p className="text-gray-300">We support each other and celebrate successes together</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-[#CCA873] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Continuous Learning</h3>
                    <p className="text-gray-300">Regular training on new techniques and industry best practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[#CCA873] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Quality Focus</h3>
                    <p className="text-gray-300">We take pride in delivering the highest quality work in Edinburgh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-[#CCA873] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Local Expertise</h3>
                    <p className="text-gray-300">Deep knowledge of Edinburgh's unique requirements and heritage properties</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-[#CCA873]/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
              <p className="text-gray-300 mb-6">
                Whether you're an experienced squad or just starting your career, we'd love to hear from you. 
                Send us your details and we'll be in touch about current opportunities.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[#CCA873]" />
                  <span className="text-gray-300">Call: 0800 135 7000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#CCA873]" />
                  <span className="text-gray-300">Email: careers@hallmarkdriveways.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#CCA873]" />
                  <span className="text-gray-300">Office Hours: Mon-Fri 8AM-6PM</span>
                </div>
              </div>
              
              <LogoButton className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold">
                Apply Now
              </LogoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
                Application Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">
                We make our application process straightforward and respectful of your time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-[#CCA873]/20 text-center">
                <CardContent className="p-6">
                  <div className="bg-[#CCA873] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
                  <p className="text-gray-300 text-sm">
                    Call us or send your CV and experience details. We'll discuss opportunities 
                    that match your skills and availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-[#CCA873]/20 text-center">
                <CardContent className="p-6">
                  <div className="bg-[#CCA873] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Meet the Team</h3>
                  <p className="text-gray-300 text-sm">
                    Visit our Edinburgh office or meet us on-site to see our work standards 
                    and discuss how you'd fit with our team.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-[#CCA873]/20 text-center">
                <CardContent className="p-6">
                  <div className="bg-[#CCA873] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Start Working</h3>
                  <p className="text-gray-300 text-sm">
                    Begin with a trial project to ensure we're a good fit, then join our 
                    permanent team with full benefits and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Working in Edinburgh */}
      <section className="py-24 bg-black/95 border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-text inline-block">
                Working Across Edinburgh & Lothians
              </h2>
              <p className="text-lg text-gray-300">
                Our work takes us to some of Edinburgh's most prestigious addresses and beautiful locations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/50 border-[#CCA873]/20">
                <CardHeader>
                  <CardTitle className="text-[#CCA873] flex items-center">
                    <Home className="w-6 h-6 mr-2" />
                    Prestigious Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Georgian townhouses in New Town</li>
                    <li>• Victorian villas in Morningside</li>
                    <li>• Modern developments in Fountainbridge</li>
                    <li>• Historic properties in conservation areas</li>
                    <li>• Coastal homes in North Berwick</li>
                    <li>• Rural estates in East Lothian</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-[#CCA873]/20">
                <CardHeader>
                  <CardTitle className="text-[#CCA873] flex items-center">
                    <Wrench className="w-6 h-6 mr-2" />
                    Diverse Skills Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Block paving installation and patterns</li>
                    <li>• Resin-bound surface application</li>
                    <li>• Pattern imprinted concrete techniques</li>
                    <li>• Heritage property considerations</li>
                    <li>• Planning permission compliance</li>
                    <li>• Customer service excellence</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-text inline-block">
              Ready to Build Your Career?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join Edinburgh's premier driveway company and become part of a team that takes pride 
              in delivering excellence across Scotland's capital and beyond.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#CCA873]">15+ Years</div>
                <div className="text-sm text-gray-400">Edinburgh Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#CCA873]">200+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#CCA873]">4.9/5</div>
                <div className="text-sm text-gray-400">Customer Rating</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <LogoButton size="lg" className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto font-semibold">
                Apply Now <ArrowRight className="ml-2" />
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
            
            <p className="text-sm text-gray-400 mt-6">
              All applications are treated confidentially. We're an equal opportunity employer 
              committed to diversity and inclusion.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
