"use client";

import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/lib/store";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Cart() {
  const { items, removeItem, updateItem, total, clearCart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const handleCheckout = async () => {
    if (!phoneNumber) {
      toast.error("Please enter your WhatsApp number");
      return;
    }

    setIsProcessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
            total: total(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send notification");
      }

      toast.success("Order placed successfully! Check your WhatsApp for confirmation.");
      clearCart();
      setIsOpen(false);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleEnergizeToggle = (itemId: string, checked: boolean) => {
    updateItem(itemId, { energized: checked });
  };

  useEffect(() => {
    // Auto scroll to bottom when cart changes
    if (cartRef.current) {
      cartRef.current.scrollTop = cartRef.current.scrollHeight;
    }
  }, [items]);

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
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {/* Scrollable Items Section */}
        <div className="flex-1 overflow-y-auto mt-4 pr-1" ref={cartRef}>
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground mt-8">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4 pb-40"> {/* Padding to avoid overlap with checkout */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col bg-secondary/20 p-4 rounded-lg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      {item.type === "service" && item.questions && (
                        <p className="text-sm text-muted-foreground">
                          {item.questions} questions
                        </p>
                      )}
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

                  {item.type === "crystal" && (
                    <div className="flex items-center space-x-2 pt-2 border-t border-border">
                      <Checkbox
                        id={`energize-${item.id}`}
                        checked={item.energized || false}
                        onCheckedChange={(checked) =>
                          handleEnergizeToggle(item.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`energize-${item.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Energise the crystal for ₹49
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sticky Checkout Section */}
        {items.length > 0 && (
          <div className="bg-background border-t border-border pt-4 pb-6 sticky bottom-0 w-full z-10">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total:</span>
              <span className="text-primary font-medium">₹{total()}</span>
            </div>
            <div className="space-y-4">
              <Input
                type="tel"
                placeholder="WhatsApp number (with country code)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button
                className="w-full bg-primary hover:bg-primary/80"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Checkout"}
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
