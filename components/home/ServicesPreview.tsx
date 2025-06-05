import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Celestial</span> Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how we can help illuminate your path through the cosmic wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-secondary/30 hover:shadow-[0_0_25px_rgba(147,112,219,0.1)] border border-border hover:border-primary/20 group"
            >
              <div className="mb-4">
                {/* <span className="inline-block text-xl font-serif font-semibold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {service.price}
                </span> */}
                <h3 className="text-xl font-serif font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <span className="mr-2 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" passHref>
            <Button variant="link" className="text-primary hover:text-primary/80 font-medium">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}