"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load heavy components to reduce initial bundle size
export const LazyPortfolio = dynamic(() => import('@/app/portfolio/page'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading gallery...</div>,
  ssr: false
})

export const LazyQuoteBuilder = dynamic(() => import('@/app/quote/page'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading quote builder...</div>,
  ssr: false
})

// Lazy load Framer Motion components only when needed
export const LazyMotionDiv = dynamic(() => 
  import('framer-motion').then(mod => ({ default: mod.motion.div })), {
  ssr: false
})

export const LazyAnimatePresence = dynamic(() => 
  import('framer-motion').then(mod => ({ default: mod.AnimatePresence })), {
  ssr: false
})

// Performance wrapper for heavy sections
export function PerformanceWrapper({ 
  children, 
  fallback = <div>Loading...</div> 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
