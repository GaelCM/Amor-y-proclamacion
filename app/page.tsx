import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { AnnouncementsSection } from "@/components/announcements-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection/>
      <CoursesSection />
      <AnnouncementsSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
