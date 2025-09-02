"use client"

import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useMediaQuery } from "@/hooks/use-media-query"

export function VideoBackground() {
  const [isClient, setIsClient] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  // Show a static image background on mobile
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/DJI_0164.jpg)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/95" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/95 z-10" />
      <div className="absolute inset-0 z-[5]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=EYSPHO9-_oQ"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) scale(1.2)',
            pointerEvents: 'none'
          }}
          playsinline={true}
          config={{
            youtube: {
              playerVars: {
                start: 41,
                modestbranding: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
                playsinline: 1,
                iv_load_policy: 3,
                fs: 0,
                disablekb: 1
              }
            }
          }}
          onError={(e) => {
            console.error("Video playback error:", e)
          }}
        />
      </div>
    </div>
  )
}