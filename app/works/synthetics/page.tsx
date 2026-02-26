import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import { asset } from '@/lib/asset'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { SyntheticsFlowDiagram } from '@/components/SyntheticsGraphics'
import { ImpactCards } from '@/components/ImpactCards'
import { slugify } from '@/lib/slug'

const TOC_SECTIONS = [
  'Context',
  'The Problem',
  'The Solution',
  'Key UX Insight',
  'Key Improvements',
  'Impact',
  'Design Thinking and Process',
  'Final UI Showcase',
  'Reflection',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'Synthetics – Fleet Scheduling Redesign | Anupa Shefley',
  description:
    'Case study: redesigning the Synthetic Telematics scheduling interface from a hierarchical table into a calendar-based system for 50+ vehicles.',
}

export default function SyntheticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* 1. Hero Section – Immediate Impact */}
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={asset('/backgrounds/background3.jpg')}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              quality={85}
            />
            <div
              className="absolute inset-0 z-10 bg-gradient-to-b from-teal-950/85 via-teal-900/75 to-teal-950/90"
              aria-hidden
            />
          </div>

          <div className="container relative z-20 mx-auto px-6 py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center max-w-8xl mx-auto">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-teal-200/90 mb-5">
                  Synthetic Telematics · Fleet Scheduling
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                  Redesigning Fleet Scheduling for Synthetic Telematics
                </h1>
                <p className="text-base md:text-lg text-teal-100/90 leading-relaxed mb-10 max-w-xl">
                  Transforming a form-based table into a scalable scheduling system for managing 50+
                  vehicles and generating telematics simulations.
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md items-stretch min-w-0">
                  <div className="flex flex-col p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 min-w-0">
                    <dt className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-teal-200/90 mb-1.5 shrink-0">
                      Schedule creation
                    </dt>
                    <dd className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white leading-tight tabular-nums shrink-0 whitespace-nowrap">
                      ↓ 60–80%
                    </dd>
                    <dd className="text-[11px] sm:text-xs text-teal-200/80 mt-1 break-words line-clamp-2">
                      time reduction
                    </dd>
                  </div>
                  <div className="flex flex-col p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 min-w-0">
                    <dt className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-teal-200/90 mb-1.5 shrink-0">
                      Scale
                    </dt>
                    <dd className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white leading-tight tabular-nums shrink-0 whitespace-nowrap">
                      ↑ 50+
                    </dd>
                    <dd className="text-[11px] sm:text-xs text-teal-200/80 mt-1 break-words line-clamp-2">
                      vehicles supported
                    </dd>
                  </div>
                  <div className="flex flex-col p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 min-w-0">
                    <dt className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-teal-200/90 mb-1.5 shrink-0">
                      Configuration
                    </dt>
                    <dd className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white leading-tight shrink-0 whitespace-nowrap">
                      ↓ Fewer
                    </dd>
                    <dd className="text-[11px] sm:text-xs text-teal-200/80 mt-1 break-words line-clamp-2">
                      repetitive actions
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="relative flex flex-col items-center lg:items-end justify-center">
                <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] lg:max-w-none lg:aspect-auto lg:min-h-[480px] lg:w-full">
                  <Image
                    src={asset('/synthetics/hero2.png')}
                    alt="Synthetic Telematics fleet scheduling interface – calendar-based view with vehicles and routes"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority
                    quality={90}
                  />
                </div>

              </div>
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
                Company
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                Dynamon
              </dd>
            </div>
          </dl>
        </header>

        <div className="w-full max-w-[1400px] mx-auto pl-2 md:pl-4 pr-4 md:pr-8 flex gap-2 lg:gap-4">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-12">
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

            {/* 3. The Problem – Before vs After */}
            <section id={TOC_SECTIONS[1].id} className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                  The Problem: Before vs After
                </h2>
                <p className="text-teal-dark/90 leading-relaxed mb-4 font-medium">
                  The original table didn&apos;t scale with real fleet size.
                </p>
                <ul className="list-disc list-inside space-y-2 text-teal-dark/90 mb-10">
                  <li>Hard to scan across days and vehicles</li>
                  <li>Required hundreds of repetitive manual assignments</li>
                  <li>Limited visibility of scheduling patterns</li>
                  <li>Difficult to validate schedules before generating telematics</li>
                </ul>
              </div>

              <div
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))]"
                style={{
                  maxWidth: 'min(calc(100vw - 2rem), 1144px)',
                }}
              >
                <div className="grid grid-cols-2 gap-4 md:gap-6 w-full min-w-0 items-start">
                  <div className="min-w-0 w-full">
                    <Image
                      src={asset('/synthetics/OldSyn.svg')}
                      alt="Old Synthetic Telematics UI – hierarchical table structure"
                      width={0}
                      height={0}
                      sizes="45vw"
                      className="w-full h-auto"
                    />
                    <p className="mt-3 text-base font-semibold text-teal-dark">
                      Before: Form-based · Fragmented structure · High interaction cost
                    </p>
                  </div>
                  <div className="min-w-0 w-full">
                    <Image
                      src={asset('/synthetics/NewSyn1.svg')}
                      alt="New Synthetic Telematics UI – calendar-based scheduling"
                      width={0}
                      height={0}
                      sizes="45vw"
                      className="w-full h-auto"
                    />
                    <p className="mt-3 text-base font-semibold text-teal-dark">
                      After: Calendar-based · Clear relationships · Fewer interactions
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. The Solution (After) */}
            <section id={TOC_SECTIONS[2].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                The Solution (After)
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                A calendar-based scheduling system:
              </p>
              <ul className="list-disc list-inside space-y-1 text-teal-dark/90 mb-4">
                <li>Vehicles organised as rows</li>
                <li>Days organised as columns</li>
                <li>Routes displayed as visual schedule cards</li>
                <li>Users can see and interact with the entire weekly schedule at once</li>
              </ul>
              <div
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <video
                  src={asset('/synthetics/AssignWeek.mp4')}
                  loop
                  playsInline
                  muted
                  autoPlay
                  className="w-full h-auto block"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            {/* 5. Key UX Insight */}
            <section id={TOC_SECTIONS[3].id}>
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

            {/* 6. Key Improvements */}
            <section id={TOC_SECTIONS[4].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Key Improvements
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-2">
                    Improvement 1: Full Schedule Visibility
                  </h3>
                  <div
                    className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                    style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
                  >
                    <Image
                      src={asset('/synthetics/WeekSchedule.png')}
                      alt="Full weekly schedule view"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="space-y-2 text-teal-dark/90 leading-relaxed">
                    <p>
                      Users can see the entire weekly schedule at once, making it easy to identify
                      gaps, spot patterns, and validate assignments before generating telematics.
                    </p>
                    <p>
                      The calendar grid replaces fragmented form views with a single, scannable overview—so operators no longer need to click through multiple screens to understand fleet coverage.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-2">
                    Improvement 2: Ability to Filter Vehicles
                  </h3>
                  <div
                    className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                    style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
                  >
                    <video
                      src={asset('/synthetics/FilterVehicles.mp4')}
                      loop
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-auto block"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="space-y-2 text-teal-dark/90 leading-relaxed">
                    <p>
                      Users can filter vehicles by type, depot, or custom criteria to focus on specific subsets of the fleet. This reduces visual clutter when working with 50+ vehicles and makes it easier to target configuration changes.
                    </p>
                    <p>
                      Filters persist across interactions, so operators can quickly switch between fleet-wide and focused views without losing context.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-2">
                    Improvement 3: Horizontal and Vertical Copy Workflows
                  </h3>
                  <div
                    className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                    style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
                  >
                    <video
                      src={asset('/synthetics/CopySchedule.mp4')}
                      loop
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-auto block"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="space-y-2 text-teal-dark/90 leading-relaxed">
                    <p>
                      Users can copy schedules across days (horizontal) or across vehicles (vertical), enabling rapid configuration of large fleets. A typical route pattern can be replicated in seconds instead of minutes.
                    </p>
                    <p>
                      This workflow proved critical for fleets with repetitive weekly patterns—operators report up to 5× fewer interactions compared to manual assignment.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-2">
                    Improvement 4: Higher Information Density with Better Clarity
                  </h3>
                  <div
                    className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                    style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
                  >
                    <Image
                      src={asset('/synthetics/RouteDetails.png')}
                      alt="Route card details showing route name and time"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="space-y-2 text-teal-dark/90 leading-relaxed">
                    <p>
                      Route cards display route name, duration, and timing at a glance—more information visible without overwhelming users. Clear typography and colour-coding help operators distinguish routes and validate schedules visually.
                    </p>
                    <p>
                      The redesign prioritises information hierarchy: critical details (which route, when) are immediately visible, while secondary details remain accessible on demand.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Impact Section */}
            <ImpactCards id={TOC_SECTIONS[5].id} />

            {/* 8. Design Thinking and Process */}
            <section id={TOC_SECTIONS[6].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Design Thinking and Process
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-4">
                I explored multiple layout models before selecting the calendar grid. Early
                explorations included alternative table layouts and different grouping strategies.
                The calendar grid was chosen for its scalability and alignment with how users
                think about time and fleet operations.
              </p>
              <ul className="list-disc list-inside space-y-1 text-teal-dark/90 mb-6">
                <li>Early layout explorations</li>
                <li>Grid structure exploration</li>
                <li>Interaction ideas (copy, drag, inline assign)</li>
              </ul>
              <div
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))]"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">
                  <Image
                    src={asset('/synthetics/Iter1.svg')}
                    alt="Design iteration 1 – early layout exploration"
                    width={0}
                    height={0}
                    sizes="45vw"
                    className="w-full h-auto"
                  />
                  <Image
                    src={asset('/synthetics/Iter2.svg')}
                    alt="Design iteration 2 – grid structure exploration"
                    width={0}
                    height={0}
                    sizes="45vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* 9. Final UI Showcase */}
            <section id={TOC_SECTIONS[7].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Final UI Showcase
              </h2>
              <p className="text-teal-dark/80 text-sm mb-4">
                Full calendar view with route cards and interaction states.
              </p>
              <div
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <video
                  src={asset('/synthetics/Final.mp4')}
                  loop
                  playsInline
                  muted
                  autoPlay
                  className="w-full h-auto block"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            {/* 10. Reflection */}
            <section id={TOC_SECTIONS[8].id}>
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
                patterns—reduced errors and made it possible to manage 50+ vehicles with
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
