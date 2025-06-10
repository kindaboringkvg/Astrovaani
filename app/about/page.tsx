import Image from "next/image"
// import { teamMembers } from "@/lib/constants"

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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AstroSaarthi</span>
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
              
              <div className="relative w-full top-30 aspect-square max-w-md mx-auto rounded-lg overflow-hidden constellation">
                <Image 
                  src="assets/images/Astrologer.jpg"
                  alt="Astrology consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 justify-content: space-between">
              <h2 className="text-3xl font-serif font-bold top-20">Our Cosmic Journey</h2>
              <p className="text-muted-foreground">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tanvi</span>, a Celebrity Astrologer & Psychic Healer With over 8 years of experience and more than 50k  clients healed worldwide, Tanvi is a renowned celebrity astrologer, psychic, and energy healer.
              </p>

              <p className="text-muted-foreground">
                Specializing in Vedic astrology, tarot reading, numerology, face reading, and vastu consultancy, she provides deep insight and divine guidance to those seeking clarity, healing, and transformation.
              </p>
              <p className="text-muted-foreground">
                Her intuitive readings and personalized remedies help clients overcome emotional blocks, relationship issues, financial struggles, and karmic patterns.
              </p>
              <p className="text-muted-foreground">
                Whether you're looking for love guidance, career solutions, or spiritual alignment, Tanvi offers a safe, powerful space for deep healing and lasting change.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
        <div className="relative w-full h-[250px] top-20 mx-auto rounded-lg overflow-hidden constellation items-center">
                <Image 
                  src="/assets/images/Stars.svg"
                  alt="Star map"
                  fill
                  className="object-cover"
                />
              </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              At AstroSaarthi, we believe that astrology is a powerful tool for self-discovery and personal growth. Our core values guide everything we do.
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
      {/* <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Celestial Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experienced astrologers who will guide you through your cosmic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div> 
        </div>
      </section> */}
    </div>
  )
}