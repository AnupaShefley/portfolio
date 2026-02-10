import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { Zero2HeroGraphic, Zero2StripGraphic } from '@/components/Zero2Graphics'

export const metadata: Metadata = {
  title: 'ZERO2 Webapp | Anupa Shefley',
  description:
    'ZERO2 is a master data management web experience inspired by Murphy Oil’s MDM programme, reimagined in a wider, presentation-style layout.',
}

export default function Zero2Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-20 md:pt-32 md:pb-24">
        {/* Hero section – wide like the reference page */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8 lg:px-12 pb-12 md:pb-16 border-b border-teal-medium/20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-teal-content mb-4">
                  MURPHY-STYLE MDM / ZERO2
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-dark mb-6">
                  A master data hub that teams can actually understand.
                </h1>
                <p className="text-base md:text-lg text-teal-dark/90 leading-relaxed mb-5">
                  ZERO2 takes the ideas behind Murphy Oil&apos;s master data management programme
                  and expresses them as a clear, web-based experience. The layout, diagrams and copy
                  are structured to match the original case study, while staying in my own voice.
                </p>
                <p className="text-sm md:text-base text-teal-dark/80 leading-relaxed">
                  This project explores how complex data foundations can be explained visually –
                  using a wide, presentation-like canvas, simple narrative sections and vector
                  graphics that can be adjusted directly in code.
                </p>
              </div>

              <div className="relative">
                <div className="relative w-full max-w-xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(15,118,110,0.22)] bg-gradient-to-br from-teal-50 via-sky-50 to-slate-50">
                  <Zero2HeroGraphic className="w-full h-full" />
                </div>
                <p className="mt-3 text-xs md:text-sm text-teal-dark/70 text-center">
                  Editable SVG illustration echoing the Murphy Oil MDM overview – sources on the
                  left, ZERO2 hub in the middle and consumers on the right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary strip – full width but with wider max-width and minimal padding */}
        <section className="bg-teal-content/5">
          <div className="mx-auto w-full max-w-6xl px-2 md:px-4 lg:px-8 py-8 md:py-10">
            <Zero2StripGraphic className="w-full h-full" />
          </div>
        </section>

        {/* Body content – structured to mirror the original case study flow */}
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8 lg:px-10 mt-12 md:mt-16 space-y-20">
          {/* Client and brief */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4">
              Client and brief
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The inspiration for ZERO2 comes from Murphy Oil&apos;s initiative to treat data as a
              first-class asset. Multiple operational and commercial systems held overlapping
              information about wells, facilities and movements – but each system used slightly
              different identifiers, names and hierarchies.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The design challenge was to communicate how a master data management hub could
              rationalise this landscape without overwhelming stakeholders with technical diagrams.
              The page had to feel like a narrative walk-through rather than a dense architecture
              document.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              ZERO2 reframes the story as a web experience: a wide, almost slide-like canvas that
              combines copy, diagrams and simple statistics in a way that mirrors the Murphy Oil
              case study while remaining fully responsive.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4">
              Problem
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Without a single, trusted data foundation, Murphy-style operations teams face very
              practical issues. Reports do not agree, planning models use slightly different
              structures, and local spreadsheets quietly diverge from central systems. Every
              cross-functional meeting begins with reconciling numbers instead of discussing what
              to do.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The original Murphy Oil case study makes this challenge tangible by walking through
              how information is spread across production, commercial and finance systems. ZERO2
              adopts the same storyline, but translates it into a web-native layout that can scale
              across devices.
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90 mt-2">
              <li>Duplicate and conflicting asset identifiers across core systems.</li>
              <li>Spreadsheets acting as unofficial &quot;master&quot; sources of truth.</li>
              <li>Limited visibility into data lineage and approval history.</li>
              <li>Time lost reconciling definitions rather than acting on insights.</li>
            </ul>
          </section>

          {/* Approach / design */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4">
              Approach
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The page follows the same high-level rhythm as the Murphy Oil MDM article – moving
              from context, to problem framing, to an explanation of the master data hub, and
              finally to outcomes. Each section is clearly separated but visually connected through
              a consistent grid and a wide content column.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Visuals focus on clarity over decoration. The hero graphic shows three simple regions:
              incoming source systems, the ZERO2 hub and downstream consumers. The outcomes strip
              then summarises the impact in three tiles, echoing the way the original case study
              uses concise metrics to make the benefits concrete.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              All diagrams are implemented as SVG, so colours, labels and geometry can be updated
              without recreating assets. This keeps the layout close to the reference page while
              remaining entirely editable in code.
            </p>
          </section>

          {/* Solution – narrative of the hub */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4">
              Solution
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              At the centre of the layout is the ZERO2 hub – a conceptual master data engine that
              receives feeds from production, commercial and ad‑hoc sources, proposes match and
              merge decisions, and then republishes a curated, canonical view to consumers.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The surrounding copy mirrors the structure of the Murphy Oil narrative: it explains
              how rules are defined, how stewardship workflows are organised and how golden records
              are pushed to downstream systems. Instead of screenshots, the page relies on simple
              blocks and arrows that match the proportions of the original diagrams.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              The result is a story that is approachable for non‑technical stakeholders while still
              accurate enough for data practitioners to recognise the core architectural choices.
            </p>
          </section>

          {/* Outcomes section is visually backed by the outcomes strip above */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4">
              Outcomes
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Following the pattern of the reference page, ZERO2 closes with a clear statement of
              impact. Instead of generic statements, the outcomes are grounded in measurable
              improvements: higher quality golden records, reduced reconciliation effort and a
              single catalogue that can be used across teams.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              The wider layout helps these messages breathe, with significantly less padding on the
              left and right compared to other case studies in this portfolio – deliberately echoing
              the proportions of the original Murphy Oil presentation page.
            </p>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4">
              Reflection
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Recreating the Murphy Oil MDM layout as ZERO2 highlighted how important pacing and
              whitespace are when explaining technical topics. By widening the canvas and reducing
              side padding, each idea can occupy its own space without feeling cramped.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              The page now acts as a template for future data case studies: a structure that can be
              reused, filled with different domain stories, and always edited directly in code –
              from copy and section order to the underlying vector graphics.
            </p>
          </section>

          {/* Other works */}
          <OtherWorks currentSlug="zero2" />
        </div>
      </article>

      <Footer />
    </main>
  )
}

