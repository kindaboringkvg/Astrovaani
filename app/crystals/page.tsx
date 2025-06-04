import CrystalGrid from "@/components/crystals/CrystalGrid"
import { Button } from "@/components/ui/button"

export default function CrystalsPage() {
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
              Sacred <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Crystals</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the healing power and spiritual properties of sacred crystals
            </p>
          </div>
        </div>
      </section>

      {/* Crystals Grid Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Explore Crystal Properties</h2>
            <p className="text-lg text-muted-foreground">
              Click on each crystal to learn about its unique properties, uses, and spiritual significance
            </p>
          </div>

          <CrystalGrid />
        </div>
      </section>

      {/* Crystal Healing CTA */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Begin Your Crystal Healing Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a personalized crystal healing session with our experienced practitioners
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/80">
              Book a Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}