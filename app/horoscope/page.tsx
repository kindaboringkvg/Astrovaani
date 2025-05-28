import ZodiacGrid from "@/components/zodiac/ZodiacGrid"
import { Button } from "@/components/ui/button"

export default function HoroscopePage() {
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
              Daily <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Horoscope</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover what the stars have in store for you today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                Get Your Personalized Reading
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Today's Cosmic Forecast
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Explore Your Zodiac Sign</h2>
            <p className="text-lg text-muted-foreground">
              Click on your sign to discover your daily horoscope, compatibility, and more
            </p>
          </div>

          <ZodiacGrid />
        </div>
      </section>

      {/* Astrology Insights */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Planetary Movements</h2>
            <p className="text-lg text-muted-foreground">
              Current planetary positions and their influence on your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">Mercury Retrograde</h3>
              <p className="text-muted-foreground">
                Mercury goes retrograde on July 7th. This period may bring communication challenges and technology issues. Take extra care with important conversations and double-check all details.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">Full Moon in Capricorn</h3>
              <p className="text-muted-foreground">
                The upcoming full moon in Capricorn on June 24th brings focus to career goals and professional aspirations. This is an excellent time to evaluate your progress and make necessary adjustments.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">Venus in Leo</h3>
              <p className="text-muted-foreground">
                Venus enters Leo on June 27th, enhancing romance, creativity, and self-expression. This transit encourages bold displays of affection and artistic pursuits. Embrace your inner performer!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Never Miss Your Daily Cosmic Guidance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive your personalized horoscope directly in your inbox every morning
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 min-w-[200px]">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}