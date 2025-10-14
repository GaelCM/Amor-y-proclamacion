"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Church } from "lucide-react"
import Image from "next/image"
import loguito from "@/assets/logo.png"
import logoFinal from "@/assets/logo2.png"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Cursos", href: "#cursos" },
    { name: "Avisos", href: "#avisos" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            
            {/* Mobile centered logo */}
            <div className="block sm:hidden w-full">
              <div className="flex items-center justify-center">
                <Image src={logoFinal} alt="Logo" width={120} height={48} className="object-contain ml-30" />
              </div>
            </div>

            {/* Desktop logo (unchanged) */}
            <div className="hidden sm:block">
              <Image src={logoFinal} alt="Descripción" width={160} className="text-amber-100" style={{ color: "black" }} />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <Button className="ml-4">Únete a Nosotros</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 -mr-3 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent/50 active:scale-95"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay oscuro */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Panel del menú */}
          <nav className="fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-md shadow-2xl md:hidden animate-slide-down border-t border-border">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-1 items-center">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 transition-all py-3 px-4 rounded-lg text-center w-full max-w-md"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4 w-full max-w-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Únete a Nosotros
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
