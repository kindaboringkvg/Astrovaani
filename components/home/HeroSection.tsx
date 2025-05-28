"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src= "starBack.jpg" 
          alt="Cosmic background"
          fill
          priority
          quality={100}
          className="object-cover opacity-50"
        />
      </div>
      
      <div ref={parallaxRef} className="absolute inset-0 z-0 transition-transform duration-300 ease-out">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Discover Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Celestial</span> Path
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Explore the cosmic influences that shape your destiny and guide your journey through life's mysteries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
                Get Your Reading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Explore Horoscopes
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">Trusted by 10,000+ clients</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                  <span className="ml-1 text-muted-foreground">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hero-animation">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main circle glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-[50px] animate-pulse"></div>
              
              {/* Main planet container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-6 border-primary/20">
                <Image 
                  src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8fDA%3D"
                  alt="Earth from space"
                  fill
                  className="object-cover scale-[1.2]"
                />
              </div>
              
              {/* Top right planet */}
              <div className="absolute -top-6 -right-6 w-24 h-24">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-[20px] animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                    <Image 
                      src="https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Mars"
                      fill
                      className="object-cover scale-[1.2] rotating-planet"
                    />
                  </div>
                </div>
              </div>
              
              {/* Bottom left planet */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-[20px] animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                    <Image 
                      src="https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Venus"
                      fill
                      className="object-cover scale-[1.2] rotating-planet"
                      style={{ animationDuration: '40s' }}
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