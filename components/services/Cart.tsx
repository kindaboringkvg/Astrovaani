"use client"

import { ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCartStore } from "@/lib/store"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function Cart() {
  const { items, removeItem, updateItem, total, clearCart } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCheckout = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter your WhatsApp number")
      alert("Phone number is missing") // Optional: Debug fallback
      return
    }

    setIsProcessing(true)

    try {
      // Simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000))

      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/notify`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          orderDetails: {
            orderId: `ORDER-${Date.now()}`,
            items,
            total: total()
          }
        })
      })

      if (!response.ok) {
        throw new Error("Failed to send notification")
      }

      toast.success("Order placed successfully! Check your WhatsApp for confirmation.")
      clearCart()
      setIsOpen(false)
    } catch (error) {
      console.error("Checkout error:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleEnergizeToggle = (itemId: string, checked: boolean) => {
    updateItem(itemId, { energized: checked })
  }

  const crystalItems = items.filter(item => item.type === 'crystal')
  const crystalCount = crystalItems.length
  const hasDiscount = crystalCount >= 2
  const discountAmount = hasDiscount ? Math.round(total() * 0.05) : 0
  const finalTotal = total() - discountAmount

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative bg-background/80 hover:bg-background border border-border"
        >
          <ShoppingCart className="h-5 w-5 text-foreground" />
          {items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background border-l border-border">
        <SheetHeader>
          <SheetTitle className="text-foreground">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {crystalCount > 0 && (
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-medium text-foreground mb-2">Crystal Benefits Applied:</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-primary">✓ Free Crystal Energizing (Pendulum Healing)</p>
                    {hasDiscount && (
                      <p className="text-accent">✓ 5% Discount Applied (2+ Crystals)</p>
                    )}
                  </div>
                </div>
              )}

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col bg-secondary/20 p-4 rounded-lg space-y-3 border border-border"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{item.name}</h3>
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
                      <p className="text-primary font-medium">₹{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="hover:bg-destructive/10 hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {item.type === 'crystal' && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        This crystal includes complimentary Pendulum Crystal Healing energizing
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {items.length > 0 && (
            <div className="pt-4 border-t border-border">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Subtotal:</span>
                  <span className="text-foreground">₹{total()}</span>
                </div>
                {hasDiscount && (
                  <div className="flex justify-between text-accent">
                    <span>5% Discount (2+ Crystals):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium text-lg border-t border-border pt-2">
                  <span className="text-foreground">Total:</span>
                  <span className="text-primary font-medium">₹{finalTotal}</span>
                </div>
              </div>
              <div className="space-y-4">
                <Input
                  type="tel"
                  placeholder="WhatsApp number (with country code)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-background border-border text-foreground"
                />

                <div className="flex items-center space-x-2">
                  {/* <Checkbox
                    id="test-checkbox"
                    onCheckedChange={(checked) => {
                      if (checked) toast("Checkbox is working!")
                    }}
                  /> */}
                  {/* <label htmlFor="test-checkbox" className="text-sm text-foreground">
                    Click me to test
                  </label> */}
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Checkout"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
