"use client"

import { ShoppingCart, X, Plus, Minus } from "lucide-react"
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
import { useRouter } from "next/navigation"
import { Gift, Percent } from "lucide-react"

export default function Cart() {
  const { items, removeItem, updateItemQuantity, total } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleCheckout = () => {
    if (items.length === 0) return
    setIsOpen(false)
    router.push('/checkout')
  }

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId)
    } else {
      updateItemQuantity(itemId, newQuantity)
    }
  }

  // Calculate crystal count and discount
  const crystalItems = items.filter(item => item.type === 'crystal')
  const totalCrystalCount = crystalItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
  const hasDiscount = totalCrystalCount >= 2
  const discountAmount = hasDiscount ? Math.round(total() * 0.05) : 0
  const finalTotal = total() - discountAmount

  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative bg-background/80 hover:bg-background border border-border"
        >
          <ShoppingCart className="h-5 w-5 text-foreground" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background border-l border-border flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-foreground">Your Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto pr-2 -mr-2">
              <div className="space-y-4 pb-4">
                {/* Special Offers Banner */}
                {totalCrystalCount > 0 && (
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

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col bg-secondary/20 p-4 rounded-lg space-y-3 border border-border"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
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
                        className="hover:bg-destructive/10 hover:text-destructive flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Quantity controls for crystals */}
                    {item.type === 'crystal' && (
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Includes complimentary Pendulum Crystal Healing energizing
                        </p>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity || 1}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {item.type === 'service' && (
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Our team will contact you to schedule your consultation
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fixed checkout section */}
            <div className="flex-shrink-0 pt-4 border-t border-border bg-background">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Subtotal:</span>
                  <span className="text-foreground">₹{total()}</span>
                </div>
                {hasDiscount && (
                  <div className="flex justify-between text-accent">
                    <span>5% Discount ({totalCrystalCount} Crystals):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium text-lg border-t border-border pt-2">
                  <span className="text-foreground">Total:</span>
                  <span className="text-primary font-medium">₹{finalTotal}</span>
                </div>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                onClick={handleCheckout}
              >
                Checkout ({totalItems} item{totalItems !== 1 ? 's' : ''})
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}