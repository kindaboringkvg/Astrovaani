import Policies from "@/components/policies/Policies"

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Add top padding to account for fixed navbar */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
              Policies & Legal Information
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Your privacy and trust are important to us. Please review our policies to understand how we protect and serve you.
            </p>
          </div>

          {/* Policies Content Container */}
          <div className="bg-secondary/30 backdrop-blur-sm rounded-lg border border-border p-8 md:p-12 shadow-lg">
            <Policies />
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6">
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                Questions About Our Policies?
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have any questions or concerns about our policies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="mailto:info@astrosaarthi.net" 
                  className="text-primary hover:text-accent transition-colors duration-200"
                >
                  info@astrosaarthi.net
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="tel:+1random number" 
                  className="text-primary hover:text-accent transition-colors duration-200"
                >
                  (+91) 9876543210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}