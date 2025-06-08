"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Cart from "@/components/services/Cart"
import { useCartStore, ServiceItem } from "@/lib/store"

const services = [
  {
    id: "astrology",
    name: "Astrology",
    description: "Get personalized Birth Chart Analysis, Karmic Astrology insights, and tailored Remedies & Mantras.",
    price: 149,
    questions: 1,
    features: [
      "One detailed question answered",
      "Comprehensive card interpretation",
      "Future insights",
      "24-hour delivery"
    ]
  },
  {
    id: "numerology",
    name: "Numerology",
    description: "We offer Name Corrections, Mobile Number Compatibility, and Business Numerology to enhance harmony and success.",
    price: 249,
    questions: 2,
    features: [
      "Two detailed questions answered",
      "In-depth card analysis",
      "Personalized guidance",
      "Priority 12-hour delivery"
    ]
  },
  {
    id: "tarot-reading",
    name: "Tarot Reading",
    description: "Get Love and Career Tarot readings along with Angel Card Messages for clarity, guidance, and inner peace.",
    price: 349,
    questions: 3,
    features: [
      "Three detailed questions answered",
      "Extended card spread analysis",
      "Follow-up clarifications",
      "Express 6-hour delivery"
    ]
  },

  {
    id: "face-reading",
    name: "Face Reading",
    description: "Get Face Readings, Psychic Guidance, Past Life Insights, Soul Connection Readings, and Celebrity Energy Scans for deeper spiritual understanding and awareness.",
    price: 349,
    questions: 3,
    features: [
      "Three detailed questions answered",
      "Extended card spread analysis",
      "Follow-up clarifications",
      "Express 6-hour delivery"
    ]
  },

  {
    id: "vastu-consultancy",
    name: "Vastu Consultancy",
    description: "Get Vastu Consultancy with Home, Business, and Digital Vastu Remedies to harmonize spaces for prosperity and well-being.",
    price: 349,
    questions: 3,
    features: [
      "Three detailed questions answered",
      "Extended card spread analysis",
      "Follow-up clarifications",
      "Express 6-hour delivery"
    ]
  },

  {
    id: "candle-magic",
    name: "Candle Magic",
    description: "We offer Candle Magic, Attraction & Abundance Rituals, and Energy Cleansing Spells to manifest positivity and clear blockages.",
    price: 349,
    questions: 3,
    features: [
      "Three detailed questions answered",
      "Extended card spread analysis",
      "Follow-up clarifications",
      "Express 6-hour delivery"
    ]
  },

]

export default function ServicesPage() {
  const { addItem, items } = useCartStore()
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleAddToCart = (service: ServiceItem) => {
    addItem(service)
    setSelectedService(service.id)
    setTimeout(() => setSelectedService(null), 2000)
  }

  const isInCart = (serviceId: string) => {
    return items.some(item => item.id === serviceId)
  }

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
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose from our range of spiritual services to receive detailed insights and guidance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,112,219,0.1)]"
              >
                <div className="mb-6">
                  <span className="inline-block text-2xl font-serif font-semibold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ₹{service.price}
                  </span>
                  <h2 className="text-2xl font-serif font-semibold mb-3">{service.name}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/80"
                  onClick={() => handleAddToCart({
                    ...service,
                    type: 'service'
                  })}
                  disabled={isInCart(service.id)}
                >
                  {selectedService === service.id ? (
                    "Added to Cart!"
                  ) : isInCart(service.id) ? (
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

      {/* Crystal Collection Banner */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Enhance Your Spiritual Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our carefully curated collection of sacred crystals. Each crystal is selected for its unique healing properties and can be energized for enhanced spiritual benefits.
            </p>
            <Link href="/crystals">
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                Check out our crystal collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Getting your spiritual guidance is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Choose Service</h3>
              <p className="text-muted-foreground">
                Select the reading package that best suits your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Add to Cart</h3>
              <p className="text-muted-foreground">
                Add your chosen services to the cart and proceed to checkout
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Submit Questions</h3>
              <p className="text-muted-foreground">
                Share your questions and any relevant details with our readers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Receive Guidance</h3>
              <p className="text-muted-foreground">
                Get your detailed reading within the specified delivery time
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}