

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Bell } from "lucide-react"
import { Aviso } from "@/types/avisos"
import Image from "next/image"


  async function getCursos() {
  const res = await fetch("https://script.google.com/macros/s/AKfycbxKnY8_5dGBYIUoIlsVra4M-Y7cd-1dck9kTMK4VUEdIi0e3V0XyRT-_saE_DQoWqnvNQ/exec", {
    cache: "no-store", // o "force-cache" si quieres que se guarde en build
  });
  return res.json();
  }

export default async function AnnouncementsSection() {
    const courses:Aviso[]=await getCursos();
    // 🔹 Toma los últimos 4 elementos del arreglo
    const last4 = courses.slice(-4);

  return (
    <section id="avisos" className="py-24 bg-gradient-to-b from-white to-secondary/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Bell className="h-4 w-4" />
            <span>Mantente Informado</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Avisos y Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No te pierdas las actividades y eventos especiales de nuestra comunidad de fe.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-8xl mx-auto">
          {last4.map((announcement, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />

              {/* Responsive layout: image left on lg, stacked on mobile */}
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Image column */}
                <div className="w-full lg:w-84 flex-shrink-0 bg-muted/5">
                  {announcement.imagen ? (
                    <div className="w-full h-58 lg:h-full relative">
                      <Image
                        src={announcement.imagen}
                        alt={announcement.titulo}
                        className="object-contain"
                        fill
                        sizes="(max-width: 1024px) 100vw, 176px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-44 lg:h-full bg-gray-100" />
                  )}
                </div>

                {/* Content column */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={announcement.color}>{announcement.tipoEvento}</Badge>
                      </div>
                      <CardTitle className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                        {announcement.titulo}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {announcement.descripcion}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-foreground">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Calendar className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{announcement.fecha}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground">
                          <div className="p-2 rounded-lg bg-accent/10">
                            <Clock className="h-4 w-4 text-accent" />
                          </div>
                          <span className="font-medium">{announcement.hora}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <MapPin className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{announcement.lugar}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="mt-2">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Más Detalles
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Ver Calendario Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
