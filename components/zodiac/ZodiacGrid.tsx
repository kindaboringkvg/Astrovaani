import Link from "next/link"
import Image from "next/image"
import { zodiacSigns } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function ZodiacGrid() {
  const getElementColor = (element: string) => {
    switch (element) {
      case "Fire": return "bg-red-500/10 text-red-400 border-red-500/30";
      case "Earth": return "bg-green-500/10 text-green-400 border-green-500/30";
      case "Air": return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Water": return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {zodiacSigns.map((sign) => (
        <Link 
          key={sign.name} 
          href={`/horoscope/${sign.name.toLowerCase()}`}
          className="zodiac-card group"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:rotate-180 transition-transform duration-1000"></div>
              <Image 
                src={sign.image}
                alt={sign.name}
                fill
                className="object-cover group-hover:rotate-[360deg] transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-serif font-semibold text-center mb-2">{sign.name}</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">{sign.dates}</p>
            
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <span className={cn(
                  "px-2 py-1 text-xs rounded-full border",
                  getElementColor(sign.element)
                )}>
                  {sign.element}
                </span>
                <span className="text-sm text-muted-foreground">
                  Ruled by {sign.planet}
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {sign.traits.slice(0, 3).map((trait, index) => (
                  <span 
                    key={index}
                    className="bg-secondary/40 px-2 py-1 text-xs rounded-md"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-4 px-4">
                {sign.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}