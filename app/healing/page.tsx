import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Compass, Sparkles, Zap, Shield, DollarSign, Brain, Eye } from "lucide-react"
import Link from "next/link"

const healingTypes = [
  {
    name: "Chakra Healing",
    icon: Sparkles,
    description: "Balance your seven energy centers for optimal well-being"
  },
  {
    name: "Financial Healing",
    icon: DollarSign,
    description: "Remove money blocks and attract abundance"
  },
  {
    name: "Energy Healing",
    icon: Zap,
    description: "Restore your natural energy flow and vitality"
  },
  {
    name: "Energy Cleansing",
    icon: Shield,
    description: "Clear negative energies from your aura and space"
  },
  {
    name: "Aura Scanner",
    icon: Eye,
    description: "Analyze and interpret your energetic field"
  },
  {
    name: "Medical Healing",
    icon: Heart,
    description: "Complementary healing for physical ailments"
  },
  {
    name: "Career Healing",
    icon: Brain,
    description: "Unlock your professional potential and purpose"
  },
  {
    name: "Relationship Healing",
    icon: Heart,
    description: "Heal and strengthen your connections with others"
  }
]

export default function HealingPage() {
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
              Spiritual <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover ancient healing practices that restore balance, harmony, and well-being to your mind, body, and spirit
            </p>
          </div>
        </div>
      </section>

      {/* Featured Healing Methods */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Healing Practices</h2>
            <p className="text-lg text-muted-foreground">
              Explore our most powerful and transformative healing modalities
            </p>
          </div>

          {/* Pendulum Dowsing Healing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative hero-animation">
              <div className="relative w-full h-[600px] aspect-square max-w-md mx-auto rounded-lg overflow-hidden constellation">
                <Image 
                  src="/images/pen.jpg"
                  alt="Pendulum dowsing healing session"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 -translate-x-1/4 -translate-y-1/4 rounded-lg overflow-hidden shadow-xl hero-animation" style={{ animationDelay: '1s' }}>
                <Image 
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Crystal pendulum"
                  fill
                  className="object-cover"
                />
              </div> */}
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Compass className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-serif font-bold">Pendulum Dowsing Healing</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Pendulum dowsing is an ancient divination practice that uses a weighted object suspended from a chain or string to access your subconscious wisdom and divine guidance. This powerful healing modality helps identify energy blockages, emotional imbalances, and spiritual disconnections.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-semibold">How It Works:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    The pendulum acts as an amplifier for your intuitive abilities and higher consciousness
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Through subtle movements, it reveals answers to yes/no questions about your health and well-being
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Helps locate chakra imbalances, energy blockages, and areas needing healing attention
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Guides the selection of appropriate crystals, herbs, or healing modalities for your unique needs
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-serif font-semibold mb-3">Benefits Include:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Clarity & Insight</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Energy Balance</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Spiritual Guidance</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Emotional Healing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Love Honey Spell */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-accent" />
                <h3 className="text-3xl font-serif font-bold">Love Honey Spell</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                The Love Honey Spell is a sacred ritual that harnesses the natural sweetness and golden energy of honey to attract love, deepen existing relationships, and heal emotional wounds. This gentle yet powerful practice has been used for centuries to open the heart chakra and invite loving energy into one's life.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-semibold">The Sacred Process:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Pure, raw honey is blessed and infused with loving intentions during specific moon phases
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Rose petals, cinnamon, and other love-drawing herbs are ceremonially added
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Personal items or photos are incorporated to create a direct energetic connection
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    The spell is activated through meditation, visualization, and heartfelt affirmations
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-serif font-semibold mb-3">Manifestations:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Attract Soulmate</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Deepen Love</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Heal Heartbreak</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Self-Love</span>
                </div>
              </div>
            </div>

            <div className="relative hero-animation lg:order-1">
              <div className="relative w-full h-[600px] aspect-square max-w-md mx-auto rounded-lg overflow-hidden constellation">
                <Image 
                  src="/images/LoveSpell.jpg"
                  alt="Love honey spell ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute bottom-0 left-0 w-1/3 h-1/3 translate-x-1/4 translate-y-1/4 rounded-lg overflow-hidden shadow-xl hero-animation" style={{ animationDelay: '1.5s' }}>
                <Image 
                  src="https://images.pexels.com/photos/6646920/pexels-photo-6646920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Honey jar with rose petals"
                  fill
                  className="object-cover"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Other Healing Types */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Additional Healing Modalities</h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of healing services designed to address every aspect of your well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healingTypes.map((healing, index) => (
              <div 
                key={index}
                className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-secondary/30 hover:transform hover:translate-y-[-8px] group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <healing.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-3">{healing.name}</h3>
                <p className="text-muted-foreground text-sm">{healing.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Begin Your Healing Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a personalized healing session with our experienced practitioners and discover the transformative power of spiritual healing
            </p>
            <div className="flex fle-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                Book Healing Session
              </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}