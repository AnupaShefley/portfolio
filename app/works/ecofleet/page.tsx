import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { asset } from '@/lib/asset'

export const metadata: Metadata = {
  title: 'EcoFleet | Anupa Shefley',
  description:
    'Fleet management and mobility solution focused on sustainability and efficiency. Research, design and stakeholder alignment project.',
}

export default function EcoFleetPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero */}
        <header className="container mx-auto px-6 mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-teal-dark mb-4">
            EcoFleet
          </h1>
          <p className="text-xl md:text-2xl text-teal-dark/90 max-w-2xl mb-8">
            Fleet management and mobility solution focused on sustainability and efficiency.
          </p>
          <dl className="flex flex-wrap gap-4 md:gap-6 mt-8 p-6 md:p-8 bg-teal-content/10 border border-teal-medium/30 rounded-lg backdrop-blur-sm">
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">Field</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">Research, Design and stakeholder alignment</dd>
            </div>
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">Sector</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">Fleet management, mobility & sustainability</dd>
            </div>
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">My Role</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">UX/UI Designer</dd>
            </div>
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">Company</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">Dynamon</dd>
            </div>
          </dl>
        </header>

        <div className="container mx-auto px-6 max-w-3xl space-y-20">
          {/* Project content placeholder */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Project Overview
            </h2>
            <p className="text-teal-dark/90 leading-relaxed">
              Project content coming soon...
            </p>
          </section>

          {/* Other Works */}
          <OtherWorks currentSlug="ecofleet" />
        </div>
      </article>

      <Footer />
    </main>
  )
}
