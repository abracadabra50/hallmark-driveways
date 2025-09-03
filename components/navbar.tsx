"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Block Paving', href: '/services/block-paving' },
      { name: 'Resin Driveways', href: '/services/resin-driveways' },
      { name: 'Pattern Concrete', href: '/services/pattern-concrete' },
      { name: 'Tarmac Solutions', href: '/services/tarmac' }
    ]
  },
  { name: 'Areas', href: '/areas' },
  { name: 'Portfolio', href: '/portfolio' },
  { 
    name: 'Resources', 
    href: '/guides',
    submenu: [
      { name: 'Blog & Guides', href: '/guides' },
      { name: 'Price Calculator', href: '/calculator' },
      { name: 'Virtual Tours', href: '/virtual-tour' },
      { name: 'Customer Reviews', href: '/reviews' },
      { name: 'Careers', href: '/careers' }
    ]
  },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

const social = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-black'
    }`}>
      {/* Top Bar */}
      <div className="hidden lg:block border-b border-[#CCA873]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#CCA873]" />
                <span>Mon-Fri: 8am-6pm | Sat: 9am-4pm</span>
              </div>
              <a 
                href="mailto:info@hallmarkdriveways.com" 
                className="flex items-center space-x-2 hover:text-[#CCA873] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#CCA873]" />
                <span>info@hallmarkdriveways.com</span>
              </a>
              <a 
                href="tel:08001357000" 
                className="flex items-center space-x-2 hover:text-[#CCA873] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#CCA873]" />
                <span>0800 135 7000</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#CCA873] transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="relative" aria-label="Top">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-[140px] md:w-[180px] relative">
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
            </div>
            
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((link) => (
                link.submenu ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="flex items-center text-sm font-medium text-white hover:text-[#CCA873] transition-colors">
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black border-[#CCA873]/20 min-w-[200px]">
                      {link.submenu.map((sublink) => (
                        <DropdownMenuItem key={sublink.name} asChild>
                          <Link 
                            href={sublink.href}
                            className="text-white hover:text-[#CCA873] hover:bg-[#CCA873]/10 cursor-pointer"
                          >
                            {sublink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-white hover:text-[#CCA873] transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <LogoButton asChild className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                <Link href="/quote">Get Quote</Link>
              </LogoButton>
            </div>

            <div className="flex lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-black border-[#CCA873]/20">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navigation.map((link) => (
                      <div key={link.name}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-white hover:text-[#CCA873] transition-colors block"
                        >
                          {link.name}
                        </Link>
                        {link.submenu && (
                          <div className="ml-4 mt-2 space-y-2">
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="text-sm text-gray-300 hover:text-[#CCA873] transition-colors block"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="pt-4 border-t border-[#CCA873]/20 space-y-4">
                      <a 
                        href="tel:08001357000" 
                        className="flex items-center space-x-3 text-gray-300 hover:text-[#CCA873] transition-colors"
                      >
                        <Phone className="h-5 w-5 text-[#CCA873]" />
                        <span>0800 135 7000</span>
                      </a>
                      <a 
                        href="mailto:info@hallmarkdriveways.com" 
                        className="flex items-center space-x-3 text-gray-300 hover:text-[#CCA873] transition-colors"
                      >
                        <Mail className="h-5 w-5 text-[#CCA873]" />
                        <span>info@hallmarkdriveways.com</span>
                      </a>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Clock className="h-5 w-5 text-[#CCA873]" />
                        <span>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</span>
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4 border-t border-[#CCA873]/20">
                      {social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:text-[#CCA873] transition-colors"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>

                    <LogoButton asChild className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                      <Link href="/quote">Get Your Free Quote</Link>
                    </LogoButton>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}