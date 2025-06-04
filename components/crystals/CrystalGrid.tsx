"use client"

import { useState } from "react"
import Image from "next/image"
import { crystals } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CrystalGrid() {
  const [selectedCrystal, setSelectedCrystal] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {crystals.map((crystal) => (
        <Card 
          key={crystal.name}
          className={cn(
            "bg-secondary/20 backdrop-blur-sm border-border hover:border-primary/20 transition-all duration-300 group overflow-hidden",
            selectedCrystal === crystal.name && "ring-2 ring-primary"
          )}
          onClick={() => setSelectedCrystal(crystal.name === selectedCrystal ? null : crystal.name)}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={crystal.image}
              alt={crystal.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <CardHeader>
            <CardTitle className="text-2xl font-serif">{crystal.name}</CardTitle>
            <CardDescription>
              <span className="text-primary">{crystal.color}</span> • {crystal.chakra} Chakra
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {crystal.properties.map((property, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full"
                  >
                    {property}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground">
                {selectedCrystal === crystal.name ? crystal.description : crystal.description.slice(0, 100) + "..."}
              </p>
              
              {selectedCrystal === crystal.name && (
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-medium mb-2">Common Uses:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {crystal.uses.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Element:</h4>
                    <p className="text-muted-foreground">{crystal.element}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Zodiac Affinity:</h4>
                    <div className="flex flex-wrap gap-2">
                      {crystal.zodiacAffinity.map((sign, index) => (
                        <span
                          key={index}
                          className="bg-secondary/40 text-sm px-2 py-1 rounded-full"
                        >
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <Button
                variant="ghost"
                className="w-full mt-2 text-primary hover:text-primary hover:bg-primary/10"
                onClick={() => setSelectedCrystal(crystal.name === selectedCrystal ? null : crystal.name)}
              >
                {selectedCrystal === crystal.name ? "Show Less" : "Learn More"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}