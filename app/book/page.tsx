"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00"
]

export default function BookPage() {
  const [date, setDate] = React.useState<Date>()
  const [selectedTime, setSelectedTime] = React.useState<string>()

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
              <h1 className="text-4xl font-bold mb-4">Book Your Free Consultation</h1>
              <p className="text-gray-300 text-lg">
                Choose a convenient date and time for your consultation. Our expert will visit 
                your property to discuss your requirements and provide a detailed quote.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/50 border-[#CCA873]/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-[#CCA873]">Select Date</h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-[#CCA873]/20"
                    disabled={(date) => {
                      const day = date.getDay()
                      return day === 0 // Disable Sundays
                    }}
                  />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-black/50 border-[#CCA873]/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-[#CCA873]">Select Time</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            selectedTime === time
                              ? 'border-[#CCA873] bg-[#CCA873]/10 text-white'
                              : 'border-[#CCA873]/20 text-gray-300 hover:border-[#CCA873]/60'
                          }`}
                        >
                          <Clock className="h-4 w-4 mb-1 text-[#CCA873]" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {date && selectedTime && (
                  <Card className="bg-black/50 border-[#CCA873]/20">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4 text-[#CCA873]">Confirmation</h2>
                      <p className="text-gray-300 mb-4">
                        You've selected a consultation for:
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-white">
                          <Calendar className="h-5 w-5 mr-2 text-[#CCA873]" />
                          {format(date, 'EEEE, MMMM do, yyyy')}
                        </div>
                        <div className="flex items-center text-white">
                          <Clock className="h-5 w-5 mr-2 text-[#CCA873]" />
                          {selectedTime}
                        </div>
                        <div className="flex items-center text-white">
                          <MapPin className="h-5 w-5 mr-2 text-[#CCA873]" />
                          At your property
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-[#CCA873] hover:bg-[#CCA873]/90 text-black"
                      >
                        Confirm Booking <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}