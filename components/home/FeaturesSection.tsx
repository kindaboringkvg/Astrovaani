import { Star, Clock, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Expert Astrologers",
    description: "Our team of certified astrologers brings decades of experience to every reading."
  },
  {
    icon: Clock,
    title: "24/7 Cosmic Guidance",
    description: "Access your personalized horoscope and guidance whenever you need it."
  },
  {
    icon: Users,
    title: "Relationship Insights",
    description: "Discover deep compatibility insights with friends, family, and romantic partners."
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    description: "Unlock your spiritual potential with tailored practices based on your celestial chart."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/10 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Astrovaani</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how our celestial expertise can illuminate your path forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:transform hover:translate-y-[-8px] hover:bg-secondary/30 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/5 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl"></div>
    </section>
  )
}