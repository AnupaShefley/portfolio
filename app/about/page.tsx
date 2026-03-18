import type { Metadata } from 'next'
import ScrollProgress from '@/components/ScrollProgress'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import PhilosophySection from '@/components/PhilosophySection'
import ApproachSection from '@/components/ApproachSection'
import SectionDivider from '@/components/SectionDivider'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About – Anupa Shefley',
  description:
    'Designer, developer, and analyst. Learn about my background, career, skills, and approach to design.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <div className="pt-20">
        <About />
        <Skills />
        <SectionDivider topColor="#E0F2F1" bottomColor="#2E473C" />
        <PhilosophySection />
        <SectionDivider topColor="#2E473C" bottomColor="#E0F2F1" />
        <ApproachSection />
        <SectionDivider topColor="#E0F2F1" bottomColor="#2E473C" />
        <Footer />
      </div>
    </main>
  )
}
