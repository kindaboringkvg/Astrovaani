"use client"

import { ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export default function Cart() {
  const { items, removeItem, total, clearCart } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)

  const handleCheckout = () => {
    // Implement checkout logic here
    alert("Proceeding to checkout...")
    clearCart()
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-secondary/20 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.questions} questions
                    </p>
                    <p className="text-primary">₹{item.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="text-primary font-medium">₹{total()}</span>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/80"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}