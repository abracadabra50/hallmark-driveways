"use client"

import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Send, Check, Phone, Calendar, Clock, MapPin, Star, Shield, Award, Mail, Upload, X, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const slideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
}

type Service = {
  id: string
  title: string
  description: string
  image: string
  priceRange: string
  features: string[]
}

const services: Service[] = [
  {
    id: "block-paving",
    title: "Block Paving",
    description: "Premium block paving with extensive design options and patterns. Perfect for Edinburgh's traditional properties.",
    image: "/images/IMG_5610.JPG",
    priceRange: "£65-120 per m²",
    features: ["Herringbone & basketweave patterns", "Premium granite blocks", "Excellent durability", "Traditional Edinburgh style"]
  },
  {
    id: "resin",
    title: "Resin Driveways", 
    description: "Modern, permeable resin-bound surfaces in a range of finishes. SUDS compliant for Edinburgh planning.",
    image: "/images/IMG_5624.JPG",
    priceRange: "£75-140 per m²",
    features: ["Permeable & eco-friendly", "Wide color selection", "Low maintenance", "Modern aesthetic"]
  },
  {
    id: "pattern-imprinted",
    title: "Pattern Imprinted Concrete",
    description: "Decorative concrete driveways with authentic stone effects. Cost-effective premium appearance.",
    image: "/images/IMG_5625.JPG",
    priceRange: "£60-100 per m²", 
    features: ["Stone & brick effects", "Durable concrete base", "Cost-effective", "Quick installation"]
  },
  {
    id: "tarmac",
    title: "Tarmac Driveways",
    description: "Professional tarmac installation for a smooth, durable surface. Great value for larger driveways.",
    image: "/images/IMG_5626.JPG",
    priceRange: "£35-65 per m²",
    features: ["Smooth finish", "Quick installation", "Cost-effective", "Low maintenance"]
  }
]

const getServiceTitle = (id: string) => {
  return services.find(service => service.id === id)?.title || id
}

const getServiceDetails = (id: string) => {
  return services.find(service => service.id === id)
}

type Step = {
  id: string
  title: string
  description: string
  component: React.ComponentType<StepProps>
}

type StepProps = {
  onNext: (data?: any) => void
  onBack: () => void
  data: any
  updateData: (data: any) => void
}

const ServiceSelection: React.FC<StepProps> = ({ onNext, data, updateData }) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Choose Your Driveway Type</h2>
        <p className="text-gray-300">Select the service that best fits your needs and budget</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => {
              updateData({ ...data, service: service.id })
              onNext()
            }}
            className={`group relative overflow-hidden rounded-lg border transition-all duration-300 text-left ${
              data.service === service.id 
                ? 'border-[#CCA873] ring-2 ring-[#CCA873]/20' 
                : 'border-[#CCA873]/20 hover:border-[#CCA873]/60'
            }`}
          >
            <div className="aspect-[16/9] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 transition-colors duration-300 ${
                data.service === service.id 
                  ? 'bg-black/40' 
                  : 'bg-black/60 group-hover:bg-black/40'
              }`} />
              <div className="absolute top-4 right-4">
                <span className="bg-[#CCA873] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {service.priceRange}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="text-xs text-gray-400 flex items-center">
                    <Check className="h-3 w-3 text-[#CCA873] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

const PropertyDetails: React.FC<StepProps> = ({ onNext, onBack, data, updateData }) => {
  const [size, setSize] = React.useState(data.size || '')
  const [condition, setCondition] = React.useState(data.condition || '')
  const [access, setAccess] = React.useState(data.access || '')

  const handleNext = () => {
    updateData({ ...data, size, condition, access })
    onNext()
  }

  const sizeOptions = [
    { value: 'Small (1-2 cars)', label: 'Small (1-2 cars)', description: 'Up to 20m²' },
    { value: 'Medium (2-3 cars)', label: 'Medium (2-3 cars)', description: '20-40m²' },
    { value: 'Large (4+ cars)', label: 'Large (4+ cars)', description: '40m²+' },
    { value: 'Commercial', label: 'Commercial', description: 'Large commercial space' }
  ]

  const conditionOptions = [
    'New build - no existing driveway',
    'Needs complete replacement',
    'Needs repair/renovation', 
    'Just looking to upgrade',
    'Extending existing driveway'
  ]

  const accessOptions = [
    'Easy access for machinery',
    'Restricted access (narrow entrance)',
    'Very restricted (manual work required)',
    'Not sure - please advise'
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-white mb-4">
            What's the approximate size of your driveway?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sizeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSize(option.value)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  size === option.value
                    ? 'border-[#CCA873] bg-[#CCA873]/10 text-white'
                    : 'border-[#CCA873]/20 text-gray-300 hover:border-[#CCA873]/60'
                }`}
              >
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-400">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-white mb-4">
            What's the current condition of your driveway?
          </label>
          <div className="grid gap-3">
            {conditionOptions.map((option) => (
              <button
                key={option}
                onClick={() => setCondition(option)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  condition === option
                    ? 'border-[#CCA873] bg-[#CCA873]/10 text-white'
                    : 'border-[#CCA873]/20 text-gray-300 hover:border-[#CCA873]/60'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-white mb-4">
            How is access to your property?
          </label>
          <div className="grid gap-3">
            {accessOptions.map((option) => (
              <button
                key={option}
                onClick={() => setAccess(option)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  access === option
                    ? 'border-[#CCA873] bg-[#CCA873]/10 text-white'
                    : 'border-[#CCA873]/20 text-gray-300 hover:border-[#CCA873]/60'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button
          variant="outline"
          className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button
          className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black"
          onClick={handleNext}
          disabled={!size || !condition || !access}
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const Timeline: React.FC<StepProps> = ({ onNext, onBack, data, updateData }) => {
  const [timeline, setTimeline] = React.useState(data.timeline || '')
  const [budget, setBudget] = React.useState(data.budget || '')

  const handleNext = () => {
    updateData({ ...data, timeline, budget })
    onNext()
  }

  const timelineOptions = [
    { value: 'ASAP', label: 'As soon as possible', description: 'Start within 2 weeks' },
    { value: '1-month', label: 'Within the next month', description: 'Flexible timing' },
    { value: '2-3-months', label: 'Within 2-3 months', description: 'Planning ahead' },
    { value: 'research', label: 'Just researching for now', description: 'Getting quotes' }
  ]

  const budgetOptions = [
    'Under £5,000',
    '£5,000 - £10,000', 
    '£10,000 - £20,000',
    '£20,000+',
    'Not sure - please advise'
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-white mb-4">
            When would you like the work to be completed?
          </label>
          <div className="grid gap-4">
            {timelineOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTimeline(option.value)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  timeline === option.value
                    ? 'border-[#CCA873] bg-[#CCA873]/10 text-white'
                    : 'border-[#CCA873]/20 text-gray-300 hover:border-[#CCA873]/60'
                }`}
              >
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-400">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-white mb-4">
            What's your approximate budget?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {budgetOptions.map((option) => (
              <button
                key={option}
                onClick={() => setBudget(option)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  budget === option
                    ? 'border-[#CCA873] bg-[#CCA873]/10 text-white'
                    : 'border-[#CCA873]/20 text-gray-300 hover:border-[#CCA873]/60'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button
          variant="outline"
          className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button
          className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black"
          onClick={handleNext}
          disabled={!timeline || !budget}
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const ContactDetails: React.FC<StepProps> = ({ onNext, onBack, data, updateData }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [uploadedImages, setUploadedImages] = React.useState<File[]>([])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/')
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB limit
      return isValidType && isValidSize
    })
    
    setUploadedImages(prev => [...prev, ...validFiles].slice(0, 5)) // Max 5 images
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add the existing data to the form
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string') {
        formData.append(key, value)
      }
    })

    // Add uploaded images
    uploadedImages.forEach((file, index) => {
      formData.append(`image_${index}`, file)
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      })

      if (response.ok) {
        // Update data with form values
        const newData = { ...data }
        formData.forEach((value, key) => {
          if (key !== 'form-name' && key !== 'bot-field' && !key.startsWith('image_')) {
            newData[key] = value
          }
        })
        newData.uploadedImages = uploadedImages.length
        updateData(newData)
        onNext()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your quote request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceDetails = getServiceDetails(data.service)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Quote Summary */}
        <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-white mb-6">Your Quote Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Service:</span>
              <span className="text-white font-medium">{getServiceTitle(data.service)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Size:</span>
              <span className="text-white">{data.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Condition:</span>
              <span className="text-white">{data.condition}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Access:</span>
              <span className="text-white">{data.access}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Timeline:</span>
              <span className="text-white">{data.timeline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Budget:</span>
              <span className="text-white">{data.budget}</span>
            </div>
            {serviceDetails && (
              <div className="pt-4 border-t border-[#CCA873]/20">
                <span className="text-gray-400">Estimated Range:</span>
                <span className="text-[#CCA873] font-semibold ml-2">{serviceDetails.priceRange}</span>
              </div>
            )}
            
            {/* Assigned Surveyor */}
            <div className="pt-4 border-t border-[#CCA873]/20">
              <h4 className="text-white font-medium mb-3">Your Assigned Surveyor</h4>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#CCA873]/20 flex items-center justify-center">
                  <span className="text-[#CCA873] font-semibold text-sm">DI</span>
                </div>
                <div>
                  <p className="text-white font-medium">Darren Inglis</p>
                  <p className="text-gray-400 text-sm">Senior Surveyor</p>
                  <p className="text-[#CCA873] text-sm">darren@hallmarkdriveways.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          name="quote" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="quote" />
          <div className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">Your Contact Details</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="phone">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
              Email Address *
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
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="address">
              Property Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="postcode">
              Postcode *
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              required
              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white"
            />
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Photos of Current Driveway (Optional)
            </label>
            <p className="text-xs text-gray-400 mb-3">
              Upload photos to help us provide a more accurate quote. Max 5 images, 5MB each.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label htmlFor="images" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#CCA873]/20 border-dashed rounded-lg cursor-pointer bg-black/20 hover:bg-black/30 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-[#CCA873]" />
                    <p className="mb-2 text-sm text-gray-300">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG, JPEG (MAX. 5MB each)</p>
                  </div>
                  <input 
                    id="images" 
                    type="file" 
                    className="hidden" 
                    multiple 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {uploadedImages.map((file, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-black/30 rounded-lg overflow-hidden border border-[#CCA873]/20">
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-[#CCA873]" />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3 text-white" />
                      </button>
                      <p className="text-xs text-gray-400 mt-1 truncate">{file.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="additionalInfo">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className="w-full px-4 py-3 bg-black/50 border border-[#CCA873]/20 rounded-lg focus:outline-none focus:border-[#CCA873] transition-colors text-white resize-none"
              placeholder="Any specific requirements, preferences, or questions..."
            />
          </div>

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
              onClick={onBack}
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button
              type="submit"
              className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get My Free Quote'} <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

const Success: React.FC<StepProps> = ({ data }) => {
  const serviceDetails = getServiceDetails(data.service)
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 rounded-full bg-[#CCA873]/10 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-[#CCA873]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Quote Request Sent Successfully!</h2>
        <p className="text-gray-300 text-lg">
          Thank you for choosing Hallmark Driveways. Your request has been received and 
          our team will process it right away.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* What Happens Next */}
        <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-white mb-6">What Happens Next?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#CCA873] text-black flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-medium text-white">Immediate Confirmation</h4>
                <p className="text-gray-300 text-sm">You'll receive an email confirmation within 5 minutes</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#CCA873] text-black flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-medium text-white">Expert Consultation</h4>
                <p className="text-gray-300 text-sm">Darren will call within 24 hours to discuss your project</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#CCA873] text-black flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-medium text-white">Site Survey</h4>
                <p className="text-gray-300 text-sm">Free site visit to provide accurate measurements and quote</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#CCA873] text-black flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-medium text-white">Detailed Quote</h4>
                <p className="text-gray-300 text-sm">Comprehensive written quote with no hidden costs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Project Details */}
        <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Your Project Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Service:</span>
              <span className="text-white">{getServiceTitle(data.service)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Property:</span>
              <span className="text-white">{data.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Size:</span>
              <span className="text-white">{data.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Timeline:</span>
              <span className="text-white">{data.timeline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Budget:</span>
              <span className="text-white">{data.budget}</span>
            </div>
            {data.uploadedImages > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-400">Photos:</span>
                <span className="text-white">{data.uploadedImages} uploaded</span>
              </div>
            )}
            {serviceDetails && (
              <div className="pt-4 border-t border-[#CCA873]/20">
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Range:</span>
                  <span className="text-[#CCA873] font-semibold">{serviceDetails.priceRange}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-black/50 border border-[#CCA873]/20 rounded-lg p-8 mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#CCA873]">
            <Image
              src="/images/IMG_5616.JPG"
              alt="Darren Inglis - Senior Surveyor"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Your Assigned Specialist: Darren Inglis
          </h3>
          <p className="text-[#CCA873] mb-4">Senior Surveyor & Project Manager</p>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Darren has over 12 years of experience in driveway installation across Edinburgh. 
            He'll personally handle your project from initial consultation through to completion.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/50 border border-[#CCA873]/20">
              <Phone className="h-6 w-6 text-[#CCA873] mb-2" />
              <p className="text-gray-400 text-sm">Direct Line</p>
              <p className="text-white font-medium">0800 135 7000</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/50 border border-[#CCA873]/20">
              <Mail className="h-6 w-6 text-[#CCA873] mb-2" />
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-medium text-sm">darren@hallmarkdriveways.com</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/50 border border-[#CCA873]/20">
              <Clock className="h-6 w-6 text-[#CCA873] mb-2" />
              <p className="text-gray-400 text-sm">Response Time</p>
              <p className="text-white font-medium">Within 24hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <Shield className="h-12 w-12 text-[#CCA873] mx-auto mb-4" />
          <h4 className="font-semibold text-white mb-2">10-Year Guarantee</h4>
          <p className="text-gray-300 text-sm">Comprehensive warranty on all work</p>
        </div>
        <div className="text-center">
          <Star className="h-12 w-12 text-[#CCA873] mx-auto mb-4" />
          <h4 className="font-semibold text-white mb-2">5-Star Rated</h4>
          <p className="text-gray-300 text-sm">247+ verified customer reviews</p>
        </div>
        <div className="text-center">
          <Award className="h-12 w-12 text-[#CCA873] mx-auto mb-4" />
          <h4 className="font-semibold text-white mb-2">Edinburgh's #1</h4>
          <p className="text-gray-300 text-sm">Most trusted driveway company</p>
        </div>
      </div>

      <div className="text-center">
        <Button asChild className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold">
          <a href="/">Return to Homepage <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  )
}

const steps: Step[] = [
  {
    id: "service",
    title: "Choose Your Service",
    description: "Select the type of driveway service you're interested in",
    component: ServiceSelection
  },
  {
    id: "property",
    title: "Property Details", 
    description: "Tell us about your property and current driveway",
    component: PropertyDetails
  },
  {
    id: "timeline",
    title: "Timeline & Budget",
    description: "When would you like the work completed and what's your budget?",
    component: Timeline
  },
  {
    id: "contact",
    title: "Contact Details",
    description: "Provide your details to receive your personalized quote",
    component: ContactDetails
  },
  {
    id: "success",
    title: "Quote Request Sent",
    description: "We'll be in touch within 24 hours",
    component: Success
  }
]

export default function QuotePage() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [formData, setFormData] = React.useState({})

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#CCA873]/20 z-50">
        <motion.div
          className="h-full bg-[#CCA873]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <section className="relative min-h-[calc(100vh-5rem)] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-4">
              <span className="text-sm text-[#CCA873] font-medium">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {steps[currentStep].description}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideIn}
              transition={{ duration: 0.3 }}
            >
              <CurrentStepComponent
                onNext={handleNext}
                onBack={handleBack}
                data={formData}
                updateData={setFormData}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}