"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Clock, Home, Phone } from "lucide-react"

export default function OrderConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState<null | {
    orderId: string
    paymentId: string
    total: number
    customer: {
      firstName: string
      lastName: string
      email: string
      phone: string
    }
    items: {
      name: string
      price: number
      type: string
      questions?: number
    }[]
  }>(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const storedOrder = sessionStorage.getItem("lastOrder")
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder))
    }
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container px-4 mx-auto py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* ✅ Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Order Confirmed!
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Thank you {orderDetails?.customer.firstName}! Your order and payment are confirmed.
          </p>

          {/* ✅ Show Order & Payment Details */}
          {orderDetails && (
            <div className="text-left mb-10 bg-secondary/20 p-6 rounded-lg space-y-3">
              <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
              <p><strong>Payment ID:</strong> {orderDetails.paymentId}</p>
              <p><strong>Total Paid:</strong> ₹{orderDetails.total}</p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Items Purchased:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {orderDetails.items.map((item, index) => (
                    <li key={index}>
                      {item.name} – ₹{item.price}
                      {item.type === "service" && item.questions ? ` (${item.questions} questions)` : ""}
                      {item.type === "crystal" ? " (Crystal + Free Energizing)" : ""}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* ... Crystal and Service cards (same as before) */}
          </div>

          {/* Contact Info */}
          {/* ... same as your original code */}

          {/* Actions */}
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

          {/* What Happens Next */}
          {/* ... same as your original code */}
        </div>
      </div>
    </div>
  )
}
