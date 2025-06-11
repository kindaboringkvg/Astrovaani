"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Clock, Home, Phone } from "lucide-react"

export default function OrderConfirmationPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container px-4 mx-auto py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been successfully placed and payment confirmed.
          </p>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Package className="h-5 w-5 mr-2 text-blue-600" />
                  Crystal Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your crystals will be carefully packaged and shipped to your address within 3-5 business days. You'll receive a tracking number via email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  Service Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our team will contact you within 24 hours to schedule your consultation sessions at your preferred time.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about your order, feel free to contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> contact@astralinsights.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Hours:</strong> Monday - Friday, 9am - 8pm</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-secondary/20 rounded-lg">
            <h3 className="font-serif font-semibold mb-3">What Happens Next?</h3>
            <div className="space-y-3 text-sm text-muted-foreground text-left">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                <p>You'll receive an order confirmation email with all the details</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                <p>Our team will prepare your crystals with complimentary energizing</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                <p>We'll contact you to schedule your consultation sessions</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                <p>Your crystals will be shipped with tracking information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}