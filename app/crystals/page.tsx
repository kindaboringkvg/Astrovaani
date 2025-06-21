"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Gift, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { crystals } from "@/lib/constants"
import { useCartStore, ServiceItem } from "@/lib/store"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function CrystalsPage() {
  const { addItem, items } = useCartStore()
  const [selectedCrystal, setSelectedCrystal] = useState<string | null>(null)

  const handleAddToCart = (crystal: any) => {
    const cartItem: ServiceItem = {
      id: `crystal-${crystal.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: crystal.name,
      price: crystal.price,
      description: crystal.description,
      type: 'crystal'
    }
    addItem(cartItem)
    setSelectedCrystal(crystal.name)
    setTimeout(() => setSelectedCrystal(null), 2000)
  }

  const isInCart = (crystalName: string) => {
    const crystalId = `crystal-${crystalName.toLowerCase().replace(/\s+/g, '-')}`
    return items.some(item => item.id === crystalId)
  }

  const getElementColor = (element: string) => {
    switch (element) {
      case "Fire": return "bg-red-500/10 text-red-400 border-red-500/30";
      case "Earth": return "bg-green-500/10 text-green-400 border-green-500/30";
      case "Air": return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Water": return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "All Elements": return "bg-gradient-to-r from-red-500/10 to-blue-500/10 text-primary border-primary/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Natural Stone <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bracelets</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the power and properties of natural stones.
            </p>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-6 md:p-8 text-center border border-primary/20">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Gift className="h-8 w-8 text-primary" />
              <Percent className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Special Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-3">
                  <Gift className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-serif font-semibold">Free Crystal Energies</h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>Pendulum Stone Energised</strong> - Every stone bracelet comes with complimentary energizing
                </p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="flex items-center justify-center mb-3">
                  <Percent className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-lg font-serif font-semibold">5% Discount</h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>Minimum 2 Bracelets Purchase</strong> - Get 5% off your total order when you buy 2 or more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crystals Grid Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Natural Stone Bracelet Collection</h2>
            <p className="text-lg text-muted-foreground">
              Each bracelet is carefully selected and comes with free energizing 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crystals.map((crystal) => (
              <div 
                key={crystal.name}
                className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,112,219,0.1)] group"
              >
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full hero-animation">
                    <Image
                      src={crystal.image}
                      alt={crystal.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-serif font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ₹{crystal.price}
                    </span>
                    <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                      <Gift className="h-4 w-4 text-primary" />
                      <span className="text-xs text-primary font-medium">Free Energizing</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-3">{crystal.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary font-medium">{crystal.color}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{crystal.chakra} Chakra</span>
                    </div>
                    <span className={cn(
                      "px-2 py-1 text-xs rounded-full border",
                      getElementColor(crystal.element)
                    )}>
                      {crystal.element}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{crystal.description}</p>
                </div>

                <div className="space-y-6 mb-6">
                  {/* Properties */}
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Properties</h4>
                    <div className="flex flex-wrap gap-2">
                      {crystal.properties.map((property, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                        >
                          {property}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Uses */}
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Common Uses</h4>
                    <ul className="space-y-2">
                      {crystal.uses.map((use, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Zodiac Affinity */}
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Zodiac Affinity</h4>
                    <div className="flex flex-wrap gap-2">
                      {crystal.zodiacAffinity.map((sign, index) => (
                        <span
                          key={index}
                          className="bg-secondary/40 text-sm px-2 py-1 rounded-full border border-border"
                        >
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/80"
                  onClick={() => handleAddToCart(crystal)}
                  disabled={isInCart(crystal.name)}
                >
                  {selectedCrystal === crystal.name ? (
                    "Added to Cart!"
                  ) : isInCart(crystal.name) ? (
                    "In Cart"
                  ) : (
                    <>
                      Add to Cart
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crystal Healing CTA */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Begin Your Journey With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a personalized session with our experienced practitioners
            </p>
            <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/80">
              Book a Session
            </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Compliance Disclaimer */}
  <section className="py-8 md:py-12 border-t border-border">
    <div className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
        <p className="mb-2">
          <strong>Disclaimer:</strong> All crystals offered on this website are intended as spiritual and wellness tools to support reflection, intention-setting, and emotional balance.
        </p>
        <p className="mb-2">
          They are not intended to diagnose, treat, cure, or prevent any disease or medical condition. The information provided is not a substitute for medical, legal, or financial advice.
        </p>
        <p>
          Use of these products is entirely at your discretion. We encourage you to consult professionals for matters requiring licensed expertise.
        </p>
      </div>
    </div>
  </section>

      </div>
  )
}