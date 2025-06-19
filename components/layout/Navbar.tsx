"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Cart from "@/components/services/Cart"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border py-3" 
        : "bg-background/80 backdrop-blur-sm py-5"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-0">
        <Image
          src="/assets/images/astro-logo.png"
          alt="AstroSaarthi Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
        <span className="text-lg md:text-xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent justify-center">
          AstroSaarthi
        </span>
        </Link>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-base font-medium",
                pathname === item.href && "nav-link-active"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Cart />
          <Link href="/services" passHref>
          <Button className="bg-primary hover:bg-primary/80">
            Get Reading
          </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <Cart />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "nav-link text-lg font-medium flex items-center space-x-2",
                    pathname === item.href && "nav-link-active"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.title}</span>
                </Link>
              ))}
              <Link href = "/services">
              <Button className="mt-2 bg-primary hover:bg-primary/80">
                Get Reading
              </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}