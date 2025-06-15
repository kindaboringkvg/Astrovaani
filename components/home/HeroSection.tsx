"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return
      
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden stars-container">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Stars.jpg"
          alt="Cosmic background"
          fill
          priority
          quality={100}
          className="object-cover hero-image"
        />
      </div>
      
      {/* Parallax Elements */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 transition-transform duration-300 ease-out">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse"></div>
      </div>
      
      {/* Main Content with Homepage Content Class */}
      <div className="container relative z-10 px-4 mx-auto homepage-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
                Discover Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Celestial</span> Path
              </h1>
              <p className="text-xl max-w-lg" style={{ color: 'hsl(0 0% 100%)' }}>
                Explore the cosmic influences that shape your destiny and guide your journey through life's mysteries.
              </p> 
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" passHref>
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
                  Get Your Reading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/horoscope" passHref>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-grey hover:bg-primary/10 bg-transparent"
                >
                  Explore Horoscopes
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background"
                    style={{ backgroundColor: 'hsl(240 3.7% 15.9%)', borderColor: 'hsl(240 10% 3.9%)' }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium text-white">Trusted by 5,000+ clients</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                  <span className="ml-1" style={{ color: 'hsl(240 5% 64.9%)' }}>4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hero-animation">
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Earth (Main) with planet glow */}
              <div className="relative w-full h-full rounded-full overflow-hidden planet-glow">
                <Image 
                  src="/assets/images/Earth.svg"
                  alt="Earth from space"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Mars Orbit */}
              <div className="absolute inset-0 rotating-planet" style={{ animationDuration: '20s' }}>
                <div className="absolute -right-8 sm:-right-12 md:-right-16 top-1/4 -translate-y-1/2">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <Image 
                      src="/assets/images/Mars.svg"
                      alt="Mars"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Moon Orbit */}
              <div className="absolute inset-0 rotating-planet" style={{ animationDuration: '15s' }}>
                <div className="absolute -left-6 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
                    <Image 
                      src="/assets/images/Moon.svg"
                      alt="Moon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}