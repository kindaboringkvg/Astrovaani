"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { testimonials } from "@/lib/constants"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Cosmic <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from those who have discovered their celestial path with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-secondary/20 backdrop-blur-sm p-8 md:p-12">
            <div className="flex transition-transform duration-500 ease-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn(
                          "w-5 h-5", 
                          i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"
                        )} />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-serif italic mb-8">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div>
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/80 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/80 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}