"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import a1 from "@/assets/a1.jpg"
import a2 from "@/assets/a2.jpg"
import a3 from "@/assets/a3.jpg"

export function AboutSection() {
  return (
    <section className="py-24 bg-background" id="acercaDe">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Stack Column */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center lg:block lg:w-auto"
        >
          <div className="relative h-[420px] sm:h-[480px] md:h-[520px] lg:h-[600px] overflow-hidden w-[320px] sm:w-[420px] md:w-[520px] lg:w-auto mx-auto lg:mx-0">
            {/* Background decorative element */}
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            
            {/* Imagen 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 z-10"
            >
              <Image
                src={a1}
                alt="Comunidad de la iglesia reunida"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Imagen 2  */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-12 left-12 sm:left-16 md:left-20 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 z-20"
            >
              <Image src={a2} alt="Servicio de adoración" fill className="object-cover" />
            </motion.div>

            {/* Imagen 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-20 left-24 sm:left-28 md:left-32 lg:left-40 w-58 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 z-30 hover:scale-105 transition-transform duration-300"
            >
              <Image src={a3} alt="Grupo de oración" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider"
              >
                Nuestra Historia
              </motion.span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            >
              ¿Quiénes <span className="text-primary">Somos</span>?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p className="text-lg">
                La <strong className="text-foreground">Iglesia Nacional Presbiteriana</strong> es una comunidad de fe
                comprometida con la enseñanza de la Palabra de Dios y el servicio a nuestra comunidad desde hace más de
                50 años.
              </p>

              <p>
                Somos una familia diversa unida por el amor de Cristo, donde cada persona es valorada y tiene un lugar
                para crecer espiritualmente. Nuestra misión es compartir el evangelio, formar discípulos y transformar
                vidas a través del poder del Espíritu Santo.
              </p>

              <p>
                Creemos en la importancia de la adoración genuina, la comunión fraternal, el estudio bíblico profundo y
                el servicio desinteresado. Nos esforzamos por ser luz en nuestra ciudad y llevar esperanza a quienes más
                lo necesitan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Años de Historia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Miembros Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Ministerios</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4 flex justify-center"
            >
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Conoce Más Sobre Nosotros
              </button>
            </motion.div>
        </motion.div>

        </div>
      </div>
    </section>
  )
}
