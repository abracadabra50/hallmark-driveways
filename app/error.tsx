'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
          <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
          <p className="text-gray-300 mb-8">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset}
              className="bg-[#CCA873] hover:bg-[#CCA873]/90 text-black"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button variant="outline" asChild className="border-[#CCA873] text-[#CCA873] hover:bg-[#CCA873]/10">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
