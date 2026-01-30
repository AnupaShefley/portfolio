import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PhilosophySection from '@/components/PhilosophySection'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ApproachSection from '@/components/ApproachSection'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Content scrolls up and overlays the hero; not visible on initial load */}
      <div className="relative z-10">
        <PhilosophySection />
        <About />
        <Skills />
        <ApproachSection />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
