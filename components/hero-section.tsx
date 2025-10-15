"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"
import foto from "@/assets/banner3.jpg"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: `url(${foto.src})`,
          }}
        />
   
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-primary/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float-particle" />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-float-particle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/25 rounded-full animate-float-particle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent/15 rounded-full animate-float-particle"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
         
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-lg font-medium mb-8 animate-fade-in-up border border-primary/20">
            <Heart className="h-4 w-4 animate-pulse-slow" />
            <span>Bienvenidos a nuestra comunidad de fe</span>
          </div>

        
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up text-balance drop-shadow-sm"
            style={{ animationDelay: "0.1s" }}
          >
            Iglesia Nacional Presbiteriana
            <br />
            <span className="text-primary animate-gradient">Amor y Proclamación</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up leading-relaxed drop-shadow-sm"
            style={{ animationDelay: "0.2s" }}
          >
            Somos una iglesia con una visión integral. Diseñada por Dios para bendecir tu vida.
          </p>

   
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#cursos" className="flex items-center text-base text-white px-8 py-2 rounded-xl bg-primary backdrop-blur-sm hover:bg-primary/70 shadow-md">
              Descubrenos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#acercaDe"
              className="text-base px-5 py-2 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 shadow-md"
            >
              Conoce Más de Dios
            </a>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur-md hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Miembros Activos</div>
            </div>

            <div
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur-md hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="p-3 rounded-full bg-accent/10">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Cursos Disponibles</div>
            </div>

            <div
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur-md hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="p-3 rounded-full bg-primary/10">
                <Heart className="h-4 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Años de Servicio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
