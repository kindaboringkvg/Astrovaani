import ContactForm from "@/components/contact/ContactForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
              Contact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Reach out to our celestial team for guidance and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services or need personalized guidance? We're here to help. Fill out the form, and our celestial team will respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      1234 Cosmic Avenue<br />
                      Celestial City, CS 98765
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      contact@AstroSaarthi.com<br />
                      support@AstroSaarthi.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      (555) 123-4567<br />
                      (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 8pm<br />
                      Saturday: 10am - 6pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Visit our celestial center for in-person consultations
            </p>
          </div>

          <div className="rounded-lg overflow-hidden h-[400px] bg-secondary/20 flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
            {/* In a real implementation, this would be replaced with an actual map component *
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-3">How accurate are your readings?</h3>
              <p className="text-muted-foreground">
                Our readings are based on precise astrological calculations and interpreted by experienced astrologers. While we provide insights into potential influences and tendencies, remember that free will plays a significant role in how these influences manifest in your life.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-3">What information do you need for a reading?</h3>
              <p className="text-muted-foreground">
                For most accurate readings, we need your exact birth date, time, and location. This information allows us to calculate your precise natal chart. If you don't know your exact birth time, we can still provide a reading, though some details may be less specific.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-3">How long does it take to receive my reading?</h3>
              <p className="text-muted-foreground">
                Once we receive your order and birth information, personalized readings are typically delivered within 3-5 business days. Rush orders are available for an additional fee and can be delivered within 24-48 hours.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold mb-3">Can I get a refund if I'm not satisfied?</h3>
              <p className="text-muted-foreground">
                We stand behind the quality of our readings. If you're not completely satisfied, please contact us within 7 days of receiving your reading, and we'll work with you to address your concerns or provide a refund.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}