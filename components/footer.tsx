import { Church, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-b from-secondary/20 to-white border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Church className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-foreground leading-tight">Iglesia Nacional</span>
                <span className="font-serif text-sm text-muted-foreground leading-tight">Presbiteriana</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Una comunidad de fe comprometida con el amor, el servicio y el crecimiento espiritual.
            </p>
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {["Inicio", "Sobre Nosotros", "Ministerios", "Eventos", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Av. Principal 123, Ciudad, País</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@iglesianacional.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">Boletín</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Recibe noticias y actualizaciones directamente en tu correo.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Tu correo" className="flex-1" />
              <Button className="flex-shrink-0">Suscribir</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Iglesia Nacional Presbiteriana. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
