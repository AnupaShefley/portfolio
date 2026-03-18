import IntroOverlay from '@/components/IntroOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import PhilosophySection from '@/components/PhilosophySection'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroOverlay />
      <ScrollProgress />
      <Header />
      <Hero />
      {/* Content scrolls up and overlays the hero; not visible on initial load */}
      <div className="relative z-10">
        <PhilosophySection />
        <SectionDivider topColor="#2E473C" bottomColor="#4A7C7E" />
        <Work />
        <SectionDivider topColor="#4A7C7E" bottomColor="#E0F2F1" />
        <Contact />
        <SectionDivider topColor="#E0F2F1" bottomColor="#2E473C" />
        <Footer />
      </div>
    </main>
  )
}
