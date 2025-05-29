import Image from "next/image"
import { teamMembers } from "@/lib/constants"

export default function AboutPage() {
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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Astrovaani</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Guiding seekers through the cosmic journey since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden constellation">
                <Image 
                  src="https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Astrology consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 -translate-x-1/4 -translate-y-1/4 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.pexels.com/photos/2693210/pexels-photo-2693210.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Star map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">Our Cosmic Journey</h2>
              <p className="text-muted-foreground">
                Things to write about the company and the vision.
              </p>
              <p className="text-muted-foreground">
                As word spread about the accuracy of our readings and the transformative guidance we provided, Astrovaani grew into the comprehensive astrological service it is today. We've now helped over 10,000 clients across the globe navigate their life paths with greater awareness and purpose.
              </p>
              <p className="text-muted-foreground">
                Our approach combines time-honored astrological traditions with modern psychological insights, creating a holistic framework that respects both the cosmic influences and your free will in shaping your destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              At Astrovaani, we believe that astrology is a powerful tool for self-discovery and personal growth. Our core values guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:bg-secondary/30 hover:transform hover:translate-y-[-8px]">
              <h3 className="text-xl font-serif font-semibold mb-4">Cosmic Connection</h3>
              <p className="text-muted-foreground">
                We recognize the profound connection between celestial movements and human experience. The stars and planets are not just distant objects but living archetypes that reflect the patterns of our lives.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:bg-secondary/30 hover:transform hover:translate-y-[-8px]">
              <h3 className="text-xl font-serif font-semibold mb-4">Empowerment Through Knowledge</h3>
              <p className="text-muted-foreground">
                We believe that understanding your astrological makeup empowers you to make conscious choices. Our readings don't predict fixed outcomes but illuminate potentials and possibilities.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:bg-secondary/30 hover:transform hover:translate-y-[-8px]">
              <h3 className="text-xl font-serif font-semibold mb-4">Compassionate Guidance</h3>
              <p className="text-muted-foreground">
                We approach every reading with empathy and respect. Our astrologers create a safe space for exploration and provide insights with kindness and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Celestial Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experienced astrologers who will guide you through your cosmic journey
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-secondary/30 group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  )
}