"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/guides' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Block Paving', href: '/services#block-paving' },
    { name: 'Resin Driveways', href: '/services#resin' },
    { name: 'Pattern Imprinted', href: '/services#pattern' },
    { name: 'Tarmac Solutions', href: '/services#tarmac' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Pre-Footer CTA */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#CCA873] to-[#F5D9A2] p-8 md:p-12">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Transform Your Driveway?
              </h3>
              <p className="text-black/80 text-lg mb-0">
                Get your free, no-obligation quote today and join our satisfied customers.
              </p>
            </div>
            <LogoButton asChild size="lg" className="bg-black hover:bg-gray-900 text-[#CCA873] whitespace-nowrap px-8">
              <Link href="/quote">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </LogoButton>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10">
            <Image
              src="/logo.svg"
              alt=""
              width={400}
              height={100}
              className="w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-[#CCA873]/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="inline-block mb-6">
                <div className="w-[240px] relative">
                  <Image 
                    src="/logo.svg"
                    alt="Hallmark Driveways" 
                    width={444} 
                    height={110} 
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </Link>
              <p className="text-gray-300 mb-6">
                Edinburgh's premier driveway specialists, delivering excellence in outdoor transformations since 2010.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="bg-[#CCA873]/10 hover:bg-[#CCA873]/20 text-[#CCA873] p-2 rounded-full transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#CCA873] transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#CCA873] transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:01315555555" 
                    className="flex items-center text-gray-300 hover:text-[#CCA873] transition-colors group"
                  >
                    <Phone className="h-5 w-5 mr-3 text-[#CCA873] group-hover:scale-110 transition-transform" />
                    0800 135 7000
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@hallmarkdriveways.com" 
                    className="flex items-center text-gray-300 hover:text-[#CCA873] transition-colors group"
                  >
                    <Mail className="h-5 w-5 mr-3 text-[#CCA873] group-hover:scale-110 transition-transform" />
                    info@hallmarkdriveways.com
                  </a>
                </li>
                <li className="flex items-start text-gray-300 group">
                  <MapPin className="h-5 w-5 mr-3 text-[#CCA873] group-hover:scale-110 transition-transform mt-1" />
                  <div>
                    5 South Charlotte Street<br />
                    Edinburgh, EH2 4AN
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-[#CCA873]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Hallmark Driveways. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/privacy" className="text-gray-300 hover:text-[#CCA873] text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-[#CCA873] text-sm transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/sitemap" className="text-gray-300 hover:text-[#CCA873] text-sm transition-colors">
                  Sitemap
                </Link>
                <a 
                  href="https://builtproper.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-[#CCA873] px-4 py-2 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-[#CCA873]/20 group"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-gray-300">This site was</span>
                  <span className="text-[#CCA873] font-bold">BUILT PROPER</span>
                  <span className="text-gray-500">✓</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}