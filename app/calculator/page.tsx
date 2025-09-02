"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowRight, Phone, Info, CheckCircle2 } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const materials = {
  "block-paving": { name: "Block Paving", priceRange: [65, 120], popular: true },
  "resin": { name: "Resin Bound", priceRange: [75, 140], popular: true },
  "pattern-concrete": { name: "Pattern Imprinted Concrete", priceRange: [60, 100], popular: false },
  "tarmac": { name: "Tarmac", priceRange: [35, 65], popular: false },
  "natural-stone": { name: "Natural Stone", priceRange: [90, 180], popular: false }
}

const complexityFactors = {
  "simple": { name: "Simple (rectangular, good access)", multiplier: 1.0 },
  "moderate": { name: "Moderate (some curves, average access)", multiplier: 1.2 },
  "complex": { name: "Complex (intricate design, difficult access)", multiplier: 1.5 }
}

export default function CalculatorPage() {
  const [area, setArea] = React.useState([50])
  const [material, setMaterial] = React.useState("")
  const [complexity, setComplexity] = React.useState("")
  const [showResults, setShowResults] = React.useState(false)

  const calculatePrice = () => {
    if (!material || !complexity) return { min: 0, max: 0 }
    
    const materialData = materials[material as keyof typeof materials]
    const complexityData = complexityFactors[complexity as keyof typeof complexityFactors]
    
    const baseMin = materialData.priceRange[0] * area[0]
    const baseMax = materialData.priceRange[1] * area[0]
    
    return {
      min: Math.round(baseMin * complexityData.multiplier),
      max: Math.round(baseMax * complexityData.multiplier)
    }
  }

  const price = calculatePrice()

  const handleCalculate = () => {
    if (material && complexity) {
      setShowResults(true)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#CCA873]/10 text-[#CCA873] text-sm font-semibold mb-6">
                Instant Price Calculator
              </span>
              <h1 className="text-4xl font-bold mb-4 text-white">
                Get Your Driveway Cost Estimate
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get an instant estimate for your driveway project. Our calculator uses real Edinburgh pricing data 
                to give you accurate cost ranges.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <Card className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="h-6 w-6 text-[#CCA873]" />
                    <h2 className="text-xl font-semibold text-white">Project Details</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Area */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Driveway Area: {area[0]}m²
                      </label>
                      <Slider
                        value={area}
                        onValueChange={setArea}
                        max={200}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>10m²</span>
                        <span>200m²</span>
                      </div>
                    </div>

                    {/* Material */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Material Type
                      </label>
                      <Select value={material} onValueChange={setMaterial}>
                        <SelectTrigger className="bg-black/50 border-[#CCA873]/20 text-white">
                          <SelectValue placeholder="Choose material" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#CCA873]/20">
                          {Object.entries(materials).map(([key, mat]) => (
                            <SelectItem key={key} value={key} className="text-white">
                              <div className="flex items-center justify-between w-full">
                                <span>{mat.name}</span>
                                {mat.popular && (
                                  <span className="ml-2 text-xs bg-[#CCA873] text-black px-2 py-1 rounded">
                                    Popular
                                  </span>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Complexity */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Project Complexity
                      </label>
                      <Select value={complexity} onValueChange={setComplexity}>
                        <SelectTrigger className="bg-black/50 border-[#CCA873]/20 text-white">
                          <SelectValue placeholder="Choose complexity" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#CCA873]/20">
                          {Object.entries(complexityFactors).map(([key, comp]) => (
                            <SelectItem key={key} value={key} className="text-white">
                              {comp.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      onClick={handleCalculate}
                      disabled={!material || !complexity}
                      className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black font-semibold"
                    >
                      Calculate Price <Calculator className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">Your Estimate</h2>
                  
                  {showResults && material && complexity ? (
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-[#CCA873]/10 rounded-lg border border-[#CCA873]/20">
                        <p className="text-sm text-gray-300 mb-2">Estimated Cost Range</p>
                        <p className="text-3xl font-bold text-[#CCA873]">
                          £{price.min.toLocaleString()} - £{price.max.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                          Based on {area[0]}m² {materials[material as keyof typeof materials].name}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Material:</span>
                          <span className="text-white">{materials[material as keyof typeof materials].name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Area:</span>
                          <span className="text-white">{area[0]}m²</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Complexity:</span>
                          <span className="text-white">{complexityFactors[complexity as keyof typeof complexityFactors].name.split(' ')[0]}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#CCA873]/20 pt-3">
                          <span className="text-gray-300">Price per m²:</span>
                          <span className="text-white">
                            £{materials[material as keyof typeof materials].priceRange[0]} - £{materials[material as keyof typeof materials].priceRange[1]}
                          </span>
                        </div>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-blue-400 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-300 font-medium mb-1">Important Note</p>
                            <p className="text-xs text-blue-200">
                              This is an estimate only. Final prices may vary based on site conditions, 
                              access, drainage requirements, and specific design choices.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <LogoButton className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black">
                          Get Accurate Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </LogoButton>
                        <LogoButton 
                          variant="outline" 
                          className="w-full border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10"
                          asChild
                        >
                          <a href="tel:01315555555">
                            <Phone className="mr-2 h-4 w-4" /> Call for Expert Advice
                          </a>
                        </LogoButton>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">
                        Complete the form to see your estimate
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <Card className="bg-black/50 border-[#CCA873]/20 mt-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">What's Included in Our Prices</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Full excavation and preparation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Premium sub-base materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Professional installation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Drainage solutions</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">10-year guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Full cleanup service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Aftercare support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#CCA873]" />
                      <span className="text-gray-300">Free design consultation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}