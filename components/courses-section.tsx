"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, GraduationCap, Bike as Bible, Heart, Music, Baby } from "lucide-react"

const courses = [
  {
    title: "Estudio Bíblico",
    description: "Profundiza en las Escrituras con estudios guiados y reflexiones semanales.",
    icon: Bible,
    duration: "8 semanas",
    participants: "25 personas",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Escuela Dominical",
    description: "Educación cristiana para todas las edades, desde niños hasta adultos.",
    icon: GraduationCap,
    duration: "Todo el año",
    participants: "100+ personas",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Ministerio de Alabanza",
    description: "Aprende a adorar a Dios a través de la música y el canto congregacional.",
    icon: Music,
    duration: "12 semanas",
    participants: "30 personas",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Consejería Familiar",
    description: "Fortalece tu matrimonio y familia con principios bíblicos sólidos.",
    icon: Heart,
    duration: "6 semanas",
    participants: "15 parejas",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Discipulado",
    description: "Crece en tu fe con mentores espirituales y grupos pequeños.",
    icon: Users,
    duration: "10 semanas",
    participants: "40 personas",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Ministerio Infantil",
    description: "Enseñanza bíblica creativa y divertida para los más pequeños.",
    icon: Baby,
    duration: "Todo el año",
    participants: "50+ niños",
    color: "bg-accent/10 text-accent",
  },
]

export function CoursesSection() {
  return (
    <section id="cursos" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Educación y Formación</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Nuestros Cursos y Ministerios
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecemos una variedad de programas diseñados para fortalecer tu fe y equiparte para el servicio cristiano.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 hover:-translate-y-2 bg-card"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">{course.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{course.participants}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Ver Todos los Cursos
          </Button>
        </div>
      </div>
    </section>
  )
}
