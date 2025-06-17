"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useCartStore } from "@/lib/store"
import { ArrowLeft, CreditCard, Package, Clock, Gift, Percent } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Please enter your complete address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Pincode must be 6 digits").max(6, "Pincode must be 6 digits"),
  country: z.string().min(2, "Country is required"),
})

type FormValues = z.infer<typeof formSchema>

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
  })

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => {
      setRazorpayLoaded(true)
      console.log('Razorpay loaded successfully')
    }
    script.onerror = () => {
      console.error('Failed to load Razorpay')
      toast.error('Failed to load payment system')
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (items.length === 0) {
      router.push('/services')
    }
  }, [items, router])

  // Calculate totals
  const crystalItems = items.filter(item => item.type === 'crystal')
  const serviceItems = items.filter(item => item.type === 'service')
  const crystalCount = crystalItems.length
  const hasDiscount = crystalCount >= 2
  const discountAmount = hasDiscount ? Math.round(total() * 0.05) : 0
  const finalTotal = total() - discountAmount

  const hasPhysicalItems = crystalItems.length > 0
  const hasServices = serviceItems.length > 0

  // Google Sheets Web API function
  const sendToGoogleSheets = async (orderData: any) => {
    try {
      // Google Apps Script Web App URL (you'll need to deploy this)
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Google Script URL not configured")
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        type: "paid",         // 👈 this is the missing piece
        ...orderData,
      })

      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Google Sheets response:', result)
      return result
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error)
      throw error
    }
  }

  // Create Razorpay order
  const createRazorpayOrder = async (amount: number) => {
    try {
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          currency: 'INR'
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      return await response.json()
    } catch (error) {
      console.error('Error creating order:', error)
      throw error
    }
  }

  const handlePayment = async (formData: FormValues) => {
    if (!razorpayLoaded) {
      toast.error("Payment system is still loading. Please wait a moment and try again.")
      return
    }

    if (!window.Razorpay) {
      toast.error("Payment system not available. Please refresh the page.")
      return
    }

    setIsProcessing(true)

    try {
      // Create Razorpay order
      const order = await createRazorpayOrder(finalTotal)
      
      // Prepare order data
      const orderData = {
        orderId: order.id,
        razorpayOrderId: order.id,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          country: formData.country
        },
        items: items.map(item => ({
          name: item.name,
          price: item.price,
          type: item.type,
          questions: item.questions || null
        })),
        pricing: {
          subtotal: total(),
          discount: discountAmount,
          finalTotal: finalTotal
        },
        orderType: {
          hasPhysicalItems,
          hasServices
        },
        timestamp: new Date().toISOString()
      }

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'AstroSaarthi',
        description: `Order for ${items.length} item(s)`,
        order_id: order.id,
        handler: async function (response: any) {
          try {
            toast.loading("Processing your order...", { id: 'processing' })
            
            // Verify payment on server
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              })
            })

            if (!verifyResponse.ok) {
              throw new Error('Payment verification failed')
            }

            // Payment verified, now send to Google Sheets
            const finalOrderData = {
              ...orderData,
              paymentId: response.razorpay_payment_id,
              paymentSignature: response.razorpay_signature,
              paymentStatus: 'completed',
              completedAt: new Date().toISOString()
            }

            await sendToGoogleSheets(finalOrderData)
            
            toast.dismiss('processing')
            toast.success("🎉 Order placed successfully!")
            
            // Store order info for confirmation page
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('lastOrder', JSON.stringify({
                orderId: finalOrderData.orderId,
                paymentId: finalOrderData.paymentId,
                items: finalOrderData.items,
                total: finalOrderData.pricing.finalTotal,
                customer: finalOrderData.customer
              }))
            }
            
            clearCart()
            router.push('/order-confirmation')
            
          } catch (error) {
            console.error("Error processing order:", error)
            toast.dismiss('processing')
            toast.error("Payment successful but order processing failed. Please contact support with Payment ID: " + response.razorpay_payment_id)
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
          orderType: hasPhysicalItems ? (hasServices ? 'Physical + Services' : 'Physical Only') : 'Services Only'
        },
        theme: {
          color: '#9370DB'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false)
            toast.error("Payment cancelled")
          }
        }
      }

      const rzp = new window.Razorpay(options)
      
      rzp.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response.error)
        toast.error(`Payment failed: ${response.error.description}`)
        setIsProcessing(false)
      })
      
      rzp.open()
      
    } catch (error) {
      console.error("Payment error:", error)
      toast.error("Failed to initiate payment. Please try again.")
      setIsProcessing(false)
    }
  }

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data)
    handlePayment(data)
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Link href="/services">
            <Button>Browse Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container px-4 mx-auto py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link href="/services">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Button>
            </Link>
            <h1 className="text-3xl font-serif font-bold">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Information Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Customer Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="First Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Last Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Email Address" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Phone Number" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Complete Address</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="House/Flat No., Street, Area, Landmark" 
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="City" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input placeholder="State" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="pincode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pincode</FormLabel>
                              <FormControl>
                                <Input placeholder="PIN code" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/80 mt-6"
                        disabled={isProcessing || !razorpayLoaded}
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        {isProcessing ? "Processing..." : `Pay ₹${finalTotal}`}
                      </Button>
                      
                      {!razorpayLoaded && (
                        <p className="text-sm text-muted-foreground text-center">
                          Loading payment system...
                        </p>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Special Offers */}
                  {crystalCount > 0 && (
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                      <h3 className="font-medium text-foreground mb-2">Crystal Benefits Applied:</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-primary flex items-center">
                          <Gift className="h-4 w-4 mr-1" />
                          Free Crystal Energizing (Pendulum Healing)
                        </p>
                        {hasDiscount && (
                          <p className="text-accent flex items-center">
                            <Percent className="h-4 w-4 mr-1" />
                            5% Discount Applied (2+ Crystals)
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Items */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start p-3 bg-secondary/20 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          {item.type === 'service' && item.questions && (
                            <p className="text-sm text-muted-foreground">
                              {item.questions} questions
                            </p>
                          )}
                          {item.type === 'crystal' && (
                            <p className="text-sm text-primary">
                              ✓ Free Energizing Included
                            </p>
                          )}
                        </div>
                        <span className="font-medium">₹{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Pricing Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₹{total()}</span>
                    </div>
                    {hasDiscount && (
                      <div className="flex justify-between text-accent">
                        <span>5% Discount (2+ Crystals):</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span className="text-primary">₹{finalTotal}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hasPhysicalItems && (
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <Package className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 dark:text-blue-100">Crystal Delivery</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Your crystals will be shipped to the provided address within 3-5 business days.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {hasServices && (
                    <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-900 dark:text-green-100">Service Consultation</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          One of our members will reach out to book your consultation timings within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}