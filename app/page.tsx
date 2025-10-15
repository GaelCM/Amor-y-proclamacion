import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import AnnouncementsSection from "@/components/announcements-section"
import { Suspense } from "react"
import { CursosSkeleton } from "@/components/skeletons/cursosSkeleton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection/>
      <CoursesSection />
      <Suspense fallback={<CursosSkeleton></CursosSkeleton>}>
      <AnnouncementsSection />
      </Suspense>
      <GallerySection />
      <Footer />
    </main>
  )
}
