import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from './schema'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hallmarkdriveways.com'),
  title: {
    default: 'Edinburgh Driveway Company #1 | Block Paving, Resin & Concrete Specialists | Hallmark Driveways',
    template: '%s | Hallmark Driveways Edinburgh - Premium Driveway Installation'
  },
  description: 'Edinburgh\'s #1 rated driveway company. Expert installation of block paving, resin driveways & pattern imprinted concrete. 10-year guarantee. Free quotes across Edinburgh & Lothians. Call 0800 135 7000',
  keywords: [
    // Primary keywords
    'driveway company edinburgh',
    'edinburgh driveway installation',
    'block paving edinburgh',
    'resin driveways edinburgh',
    'pattern imprinted concrete edinburgh',
    'driveway contractors edinburgh',
    
    // Long-tail keywords
    'best driveway company edinburgh',
    'edinburgh driveway specialists',
    'driveway installation cost edinburgh',
    'block paving contractors edinburgh',
    'resin bound driveways edinburgh',
    'concrete driveways edinburgh',
    
    // Location-based keywords
    'driveways morningside edinburgh',
    'driveways stockbridge edinburgh',
    'driveways new town edinburgh',
    'driveways bruntsfield edinburgh',
    'driveways corstorphine edinburgh',
    'driveways leith edinburgh',
    
    // Service-specific keywords
    'driveway repair edinburgh',
    'driveway cleaning edinburgh',
    'driveway maintenance edinburgh',
    'permeable driveways edinburgh',
    'tarmac driveways edinburgh',
    
    // Commercial intent keywords
    'driveway quotes edinburgh',
    'driveway prices edinburgh',
    'cheap driveways edinburgh',
    'premium driveways edinburgh',
    'driveway finance edinburgh',
    
    // Competitor keywords
    'edinburgh driveway company reviews',
    '5 star driveway company edinburgh',
    'guaranteed driveway installation',
    'professional driveway contractors',
    
    // Seasonal keywords
    'winter driveway maintenance',
    'driveway installation spring',
    'all weather driveways'
  ],
  authors: [{ name: 'Hallmark Driveways Edinburgh', url: 'https://hallmarkdriveways.com' }],
  creator: 'Hallmark Driveways',
  publisher: 'Hallmark Driveways',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hallmarkdriveways.com',
    siteName: 'Hallmark Driveways Edinburgh',
    title: 'Edinburgh\'s #1 Driveway Company | Block Paving & Resin Specialists',
    description: 'Transform your property with Edinburgh\'s highest-rated driveway specialists. Expert installation of block paving, resin & concrete driveways. 10-year guarantee included.',
    images: [
      {
        url: 'https://hallmarkdriveways.com/images/DJI_0164.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium block paving driveway installation in Edinburgh by Hallmark Driveways',
        type: 'image/jpeg',
      },
      {
        url: 'https://hallmarkdriveways.com/images/DJI_0225.jpg',
        width: 1200,
        height: 630,
        alt: 'Resin bound driveway installation Edinburgh - Hallmark Driveways',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hallmarkdrives',
    creator: '@hallmarkdrives',
    title: 'Edinburgh\'s #1 Driveway Company | Hallmark Driveways',
    description: 'Premium driveway installation across Edinburgh. Block paving, resin & concrete specialists. 10-year guarantee. Free quotes.',
    images: ['https://hallmarkdriveways.com/images/DJI_0164.jpg'],
  },
  alternates: {
    canonical: 'https://hallmarkdriveways.com',
    languages: {
      'en-GB': 'https://hallmarkdriveways.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Construction & Home Improvement',
  classification: 'Business',
  other: {
    'geo.region': 'GB-EDH',
    'geo.placename': 'Edinburgh',
    'geo.position': '55.9533;-3.1883',
    'ICBM': '55.9533, -3.1883',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#CCA873" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* NO hero image preloading - loads after page renders */}
        
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" /></noscript>
        
        {/* Critical inline CSS for instant render */}
        <style dangerouslySetInnerHTML={{__html: `
          body{margin:0;background:#000;color:#fff}
          .min-h-screen{min-height:100vh}
          .bg-gradient-to-br{background:linear-gradient(to bottom right,rgba(146,64,14,0.2),#000,rgba(124,45,18,0.2))}
        `}} />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Local Business Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        {/* FAQ Schema for homepage */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a driveway cost in Edinburgh?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Driveway costs in Edinburgh vary depending on size, material, and complexity. Block paving typically costs £40-80 per m², resin driveways £50-90 per m², and pattern imprinted concrete £45-75 per m². Contact Hallmark Driveways for a free, accurate quote."
                }
              },
              {
                "@type": "Question", 
                "name": "How long does driveway installation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most driveway installations in Edinburgh take 3-7 days depending on size and complexity. We provide accurate timelines during your free consultation and work efficiently to minimize disruption."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer guarantees on driveway work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Hallmark Driveways provides a comprehensive 10-year guarantee on all driveway installations in Edinburgh. This covers materials, workmanship, and structural integrity."
                }
              }
            ]
          }) }}
        />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}