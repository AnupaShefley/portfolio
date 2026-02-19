import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import {
  SyntheticsHeroCalendar,
  SyntheticsFlowDiagram,
} from '@/components/SyntheticsGraphics'
import { slugify } from '@/lib/slug'

const TOC_SECTIONS = [
  'Context',
  'My Role',
  'The Problem',
  'Understanding User Workflow',
  'Key UX Insight',
  'The Solution',
  'Before vs After',
  'Key Improvements',
  'Impact',
  'Design Thinking and Process',
  'Final UI Showcase',
  'Reflection',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'Synthetics – Fleet Scheduling Redesign | Anupa Shefley',
  description:
    'Case study: redesigning the Synthetic Telematics scheduling interface from a hierarchical table into a calendar-based system for 100+ vehicles.',
}

export default function SyntheticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* 1. Hero Section – Immediate Impact */}
        <section className="bg-teal-content/5 border-b border-teal-medium/20">
          <div className="container mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1.1fr)] gap-10 items-center">
            <div>
              <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-teal-content mb-4">
                Synthetic Telematics · Fleet Scheduling
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-dark mb-6">
                Redesigning Fleet Scheduling for Synthetic Telematics
              </h1>
              <p className="text-base md:text-lg text-teal-dark/90 leading-relaxed mb-8 max-w-xl">
                Transforming a form-based table into a scalable scheduling system for managing 100+
                vehicles and generating telematics simulations.
              </p>

              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-5 md:p-6 bg-white/70 border border-teal-medium/30 rounded-xl backdrop-blur-sm">
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Schedule creation
                  </dt>
                  <dd className="text-xl md:text-2xl font-serif font-semibold text-teal-dark">
                    ↓ 60–80%
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">time reduction</dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Scale
                  </dt>
                  <dd className="text-xl md:text-2xl font-serif font-semibold text-teal-dark">
                    ↑ 100+
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">vehicles supported</dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Configuration
                  </dt>
                  <dd className="text-xl md:text-2xl font-serif font-semibold text-teal-dark">
                    ↓ Fewer
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">repetitive actions</dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Visibility
                  </dt>
                  <dd className="text-xl md:text-2xl font-serif font-semibold text-teal-dark">
                    ↑ Improved
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">schedule validation</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(15,118,110,0.2)] bg-gradient-to-br from-teal-50 via-sky-50 to-slate-50">
                <SyntheticsHeroCalendar className="w-full h-full" />
              </div>
              <p className="mt-3 text-xs md:text-sm text-teal-dark/70 text-center">
                Calendar-based scheduling: vehicles as rows, days as columns, routes as cards.
              </p>
            </div>
          </div>
        </section>

        {/* Meta panel */}
        <header className="container mx-auto px-6 mb-12 md:mb-16 mt-10 md:mt-14">
          <dl className="flex flex-wrap gap-4 md:gap-6 p-6 md:p-8 bg-teal-content/10 border border-teal-medium/30 rounded-2xl backdrop-blur-sm">
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                Field
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                Synthetic Telematics · UX/UI Design · Information architecture
              </dd>
            </div>
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                My role
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                UX/UI Designer
              </dd>
            </div>
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                Company
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                Dynamon
              </dd>
            </div>
          </dl>
        </header>

        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-20">
            {/* 2. Context: The Product and Problem Space */}
            <section id={TOC_SECTIONS[0].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Context: The Product and Problem Space
              </h2>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-semibold text-teal-dark">
                    What is Synthetic Telematics?
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    Synthetic Telematics simulates vehicle operations by combining vehicles, routes,
                    and schedules to generate telematics data used for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal-dark/90">
                    <li>Fleet electrification planning</li>
                    <li>Energy consumption modelling</li>
                    <li>Charging infrastructure planning</li>
                  </ul>
                  <p className="text-teal-dark/90 leading-relaxed">
                    The scheduling step defines the operational logic that drives all simulation
                    outputs. Fleet operators use it to assign which vehicles run which routes on
                    which days, building a weekly operational plan before generating telematics.
                  </p>
                </div>
                <div className="rounded-2xl border border-teal-medium/30 bg-white/80 p-4 overflow-hidden">
                  <p className="text-sm font-medium text-teal-dark mb-3">Workflow flow</p>
                  <SyntheticsFlowDiagram className="w-full h-32" />
                  <p className="text-xs text-teal-dark/70 mt-2">
                    Vehicles → Routes → Schedule → Telematics Data → Analysis
                  </p>
                </div>
              </div>
            </section>

            {/* 3. My Role */}
            <section id={TOC_SECTIONS[1].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">My Role</h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                <strong>Role:</strong> UX/UI Designer. I led the research, interaction redesign,
                and UI design for the new scheduling experience and collaborated closely with
                development throughout.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-teal-dark/90">
                <li className="flex items-start gap-2">
                  <span className="text-teal-content mt-0.5">•</span>
                  <span>UX research and workflow analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-content mt-0.5">•</span>
                  <span>Interaction and information architecture redesign</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-content mt-0.5">•</span>
                  <span>UI design and prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-content mt-0.5">•</span>
                  <span>Developer collaboration</span>
                </li>
              </ul>
            </section>

            {/* 4. The Problem (Before) */}
            <section id={TOC_SECTIONS[2].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                The Problem (Before)
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6 font-medium">
                The original table didn&apos;t scale with real fleet size.
              </p>
              <ul className="list-disc list-inside space-y-2 text-teal-dark/90 mb-8">
                <li>Hard to scan across days and vehicles</li>
                <li>Required hundreds of repetitive manual assignments</li>
                <li>Limited visibility of scheduling patterns</li>
                <li>Difficult to validate schedules before generating telematics</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-teal-medium/30 overflow-hidden bg-slate-50">
                  <div className="aspect-video bg-slate-200 flex items-center justify-center text-teal-dark/60 text-sm">
                    Old UI screenshot (hierarchical table)
                  </div>
                  <div className="p-3 border-t border-teal-medium/20">
                    <p className="text-xs font-semibold text-teal-content uppercase tracking-wider">
                      Annotations: Fragmented structure · Hidden relationships · High interaction cost
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-teal-medium/30 overflow-hidden bg-slate-50">
                  <div className="aspect-video bg-slate-200 flex items-center justify-center text-teal-dark/60 text-sm">
                    Annotated version highlighting issues
                  </div>
                  <p className="p-3 border-t border-teal-medium/20 text-xs text-teal-dark/80">
                    Add your annotated screenshot here.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Understanding User Workflow */}
            <section id={TOC_SECTIONS[3].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Understanding User Workflow
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                Users follow this workflow:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-teal-dark/90 mb-8">
                <li>Create vehicles</li>
                <li>Create routes</li>
                <li><strong>Assign weekly schedules</strong> ← This step</li>
                <li>Generate telematics data</li>
                <li>Analyse results</li>
              </ol>
              <div className="rounded-xl border-l-4 border-teal-content bg-teal-content/10 p-5">
                <p className="text-sm font-semibold text-teal-dark mb-1">Key insight</p>
                <p className="text-teal-dark/90">
                  Scheduling is the highest interaction and highest risk step. Errors here directly
                  impact simulation outputs.
                </p>
              </div>
            </section>

            {/* 6. Key UX Insight */}
            <section id={TOC_SECTIONS[4].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Key UX Insight
              </h2>
              <div className="rounded-2xl border-2 border-teal-content bg-teal-content/10 p-8 text-center">
                <p className="text-xl md:text-2xl font-serif font-semibold text-teal-dark leading-relaxed">
                  Users think in time and patterns, not in form fields.
                </p>
                <p className="mt-4 text-teal-dark/90">
                  Fleet scheduling is inherently calendar-based. The interface needed to reflect this
                  mental model.
                </p>
              </div>
            </section>

            {/* 7. The Solution (After) */}
            <section id={TOC_SECTIONS[5].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                The Solution (After)
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                A calendar-based scheduling system:
              </p>
              <ul className="list-disc list-inside space-y-1 text-teal-dark/90 mb-8">
                <li>Vehicles organised as rows</li>
                <li>Days organised as columns</li>
                <li>Routes displayed as visual schedule cards</li>
                <li>Users can see and interact with the entire weekly schedule at once</li>
              </ul>
              <div className="rounded-2xl border border-teal-medium/30 overflow-hidden bg-gradient-to-br from-teal-50 to-slate-50">
                <div className="aspect-video w-full flex items-center justify-center p-4">
                  <SyntheticsHeroCalendar className="w-full h-full max-h-80" />
                </div>
                <p className="p-3 text-center text-sm text-teal-dark/70 bg-white/60">
                  Calendar-based scheduling system – full weekly view
                </p>
              </div>
            </section>

            {/* 8. Before vs After Comparison */}
            <section id={TOC_SECTIONS[6].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Before vs After Comparison
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-teal-medium/30 overflow-hidden bg-white">
                  <div className="aspect-video bg-slate-100 flex items-center justify-center text-teal-dark/60 text-sm">
                    Old UI
                  </div>
                  <div className="p-4 border-t border-teal-medium/20">
                    <p className="font-semibold text-teal-dark">Form-based</p>
                    <p className="text-sm text-teal-dark/70">Fragmented · High effort</p>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-teal-content overflow-hidden bg-white">
                  <div className="aspect-video bg-teal-50 flex items-center justify-center">
                    <SyntheticsHeroCalendar className="w-full h-full max-h-40" />
                  </div>
                  <div className="p-4 border-t border-teal-medium/20 bg-teal-content/5">
                    <p className="font-semibold text-teal-dark">Calendar-based</p>
                    <p className="text-sm text-teal-dark/70">Visual · Efficient</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Key Improvements */}
            <section id={TOC_SECTIONS[7].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-8">
                Key Improvements
              </h2>

              <div className="space-y-16">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-4">
                    Improvement 1: Full Schedule Visibility
                  </h3>
                  <div className="rounded-xl border border-teal-medium/30 overflow-hidden mb-4">
                    <div className="aspect-video bg-teal-50 flex items-center justify-center p-4">
                      <SyntheticsHeroCalendar className="w-full h-full max-h-48" />
                    </div>
                  </div>
                  <p className="text-teal-dark/90 leading-relaxed">
                    Users can see the entire weekly schedule at once, making it easy to identify
                    gaps, spot patterns, and validate assignments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-4">
                    Improvement 2: Faster Scheduling Through Direct Interaction
                  </h3>
                  <div className="rounded-xl border border-teal-medium/30 bg-white p-6 mb-4">
                    <div className="h-24 rounded-lg bg-teal-content/20 border border-teal-content/40 flex items-center justify-center text-teal-dark/80 text-sm">
                      Route card example – assign directly in grid
                    </div>
                  </div>
                  <p className="text-teal-dark/90 leading-relaxed">
                    Users assign routes directly within the grid instead of dropdown forms,
                    reducing repetitive interactions dramatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-4">
                    Improvement 3: Horizontal and Vertical Copy Workflows
                  </h3>
                  <div className="rounded-xl border border-teal-medium/30 bg-white p-6 mb-4">
                    <p className="text-sm text-teal-dark/70 text-center">
                      Copy across days · Copy across vehicles
                    </p>
                  </div>
                  <p className="text-teal-dark/90 leading-relaxed">
                    Users reuse scheduling patterns across days and vehicles, enabling rapid
                    configuration of large fleets.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-4">
                    Improvement 4: Higher Information Density with Better Clarity
                  </h3>
                  <div className="rounded-xl border border-teal-medium/30 bg-white p-6 mb-4">
                    <p className="text-sm text-teal-dark/70 text-center">
                      Route cards show route name and time – more information without overwhelm
                    </p>
                  </div>
                  <p className="text-teal-dark/90 leading-relaxed">
                    More information is visible without overwhelming users. Schedules can be
                    validated visually.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. Impact Section */}
            <section id={TOC_SECTIONS[8].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-8">Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border-2 border-teal-content bg-teal-content/10 p-8 text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-teal-dark">
                    60–80%
                  </p>
                  <p className="text-sm uppercase tracking-wider font-semibold text-teal-content mt-2">
                    reduction
                  </p>
                  <p className="text-teal-dark/90 mt-1">Schedule creation time</p>
                </div>
                <div className="rounded-2xl border-2 border-teal-content bg-teal-content/10 p-8 text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-teal-dark">
                    100+
                  </p>
                  <p className="text-sm uppercase tracking-wider font-semibold text-teal-content mt-2">
                    vehicles
                  </p>
                  <p className="text-teal-dark/90 mt-1">Supported efficiently</p>
                </div>
                <div className="rounded-2xl border-2 border-teal-content bg-teal-content/10 p-8 text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-teal-dark">
                    5× fewer
                  </p>
                  <p className="text-sm uppercase tracking-wider font-semibold text-teal-content mt-2">
                    interactions
                  </p>
                  <p className="text-teal-dark/90 mt-1">Using copy workflows</p>
                </div>
                <div className="rounded-2xl border-2 border-teal-content bg-teal-content/10 p-8 text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-teal-dark">
                    Improved
                  </p>
                  <p className="text-sm uppercase tracking-wider font-semibold text-teal-content mt-2">
                    confidence
                  </p>
                  <p className="text-teal-dark/90 mt-1">User validation and trust</p>
                </div>
              </div>
            </section>

            {/* 11. Design Thinking and Process */}
            <section id={TOC_SECTIONS[9].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Design Thinking and Process
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                I explored multiple layout models before selecting the calendar grid. Early
                explorations included alternative table layouts and different grouping strategies.
                The calendar grid was chosen for its scalability and alignment with how users
                think about time and fleet operations.
              </p>
              <ul className="list-disc list-inside space-y-1 text-teal-dark/90">
                <li>Early layout explorations</li>
                <li>Grid structure exploration</li>
                <li>Interaction ideas (copy, drag, inline assign)</li>
              </ul>
            </section>

            {/* 12. Final UI Showcase */}
            <section id={TOC_SECTIONS[10].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Final UI Showcase
              </h2>
              <p className="text-teal-dark/80 text-sm mb-6">
                Full calendar view, route card details, and interaction states. Add your final
                screenshots here.
              </p>
              <div className="space-y-6">
                <div className="rounded-2xl border border-teal-medium/30 overflow-hidden bg-gradient-to-br from-teal-50 to-slate-50">
                  <div className="aspect-video flex items-center justify-center p-4">
                    <SyntheticsHeroCalendar className="w-full h-full max-h-72" />
                  </div>
                  <p className="p-3 text-center text-xs text-teal-dark/70 bg-white/60">
                    Full calendar
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-teal-medium/30 bg-white p-6">
                    <p className="text-xs uppercase tracking-wider text-teal-content font-semibold mb-2">
                      Route card details
                    </p>
                    <div className="h-20 rounded-lg bg-teal-content/15" />
                  </div>
                  <div className="rounded-xl border border-teal-medium/30 bg-white p-6">
                    <p className="text-xs uppercase tracking-wider text-teal-content font-semibold mb-2">
                      Interaction states
                    </p>
                    <div className="h-20 rounded-lg bg-teal-content/15" />
                  </div>
                </div>
              </div>
            </section>

            {/* 13. Reflection */}
            <section id={TOC_SECTIONS[11].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Reflection</h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                <strong>What I learned</strong>
              </p>
              <p className="text-teal-dark/90 leading-relaxed mb-4">
                Designing for data-intensive products requires optimising for scalability,
                interaction efficiency, and information visibility. Small inefficiencies multiply
                dramatically at scale.
              </p>
              <p className="text-teal-dark/90 leading-relaxed">
                This redesign transformed a slow, form-based workflow into a fast, scalable
                scheduling system. Aligning the interface with how users think—in time and
                patterns—reduced errors and made it possible to manage 100+ vehicles with
                confidence.
              </p>
            </section>

            <OtherWorks currentSlug="synthetics" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
