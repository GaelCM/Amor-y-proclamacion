"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Heart, Users, Music, BookOpen, Sparkles } from "lucide-react"
import foto from "@/assets/bannerPrincipal.jpg"
import foto1 from "@/assets/jovenes.jpg"
import foto2 from "@/assets/estudio.jpg"
import foto3 from "@/assets/bautismo.jpg"
import foto4 from "@/assets/conferencia.jpg"
import foto5 from "@/assets/oracion.jpg"

const galleryItems = [
  {
    title: "Culto Dominical",
    category: "Adoración",
    image: foto.src,
    icon: Music,
  },
  {
    title: "Retiro de Jóvenes",
    category: "Eventos",
    image: foto1.src,
    icon: Users,
  },
  {
    title: "Estudio Bíblico",
    category: "Educación",
    image: foto2.src,
    icon: BookOpen,
  },
  {
    title: "Eventos",
    category: "Servicio",
    image: foto5.src,
    icon: Heart,
  },
  {
    title: "Oracion y Alabanza",
    category: "Celebraciones",
    image: foto3.src,
    icon: Sparkles,
  },
  {
    title: "Conferencia Anual",
    category: "Eventos",
    image: foto4.src,
    icon: Users,
  },
]

const categories = ["Todos", "Adoración", "Eventos", "Educación", "Servicio", "Celebraciones"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredItems =
    selectedCategory === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Camera className="h-4 w-4" />
            <span>Momentos Especiales</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Galería de Actividades
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Revive los momentos más significativos de nuestra comunidad de fe.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Ver Más Fotos
          </Button>
        </div>
      </div>
    </section>
  )
}
