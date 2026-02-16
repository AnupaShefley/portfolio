import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { AnimatedDiv } from '@/components/AnimatedSection'
import { LaptopMockup } from '@/components/LaptopMockup'
import { asset } from '@/lib/asset'
import { slugify } from '@/lib/slug'

const TOC_SECTIONS = [
  'Project Overview',
  'Understanding the Fleet and Duty Cycles',
  'Planning a Phased Transition',
  'Infrastructure and Charging Strategy',
  'Communicating Outcomes with Stakeholders',
  'Impact',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'EcoFleet | Anupa Shefley',
  description:
    'Decision-support and planning tool helping commercial fleets transition from conventional fuels to cleaner alternatives like electric, hydrogen and LNG.',
}

export default function EcoFleetPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero */}
        <header className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-teal-dark mb-4 tracking-tight pt-4">
            EcoFleet
          </h1>
          <div
            className="h-1 w-20 rounded-full bg-gradient-to-r from-teal-content to-teal-light mb-6"
            aria-hidden
          />
          <p className="text-base md:text-lg lg:text-xl text-teal-dark/90 max-w-3xl mb-6 leading-snug">
            EcoFleet is a decision-support and planning tool that helps commercial fleet operators
            move from conventional fuels to cleaner alternatives such as electric, hydrogen and LNG.
            It brings together vehicle data, duty cycles, infrastructure planning and cost modelling
            to reduce uncertainty and enable confident, phased adoption of renewable fuels.
          </p>
          <dl className="flex flex-wrap gap-4 md:gap-6 mt-4 p-5 md:p-6 rounded-xl bg-teal-content/10 border border-teal-medium/30">
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                Field
              </dt>
              <dd className="text-sm text-teal-dark font-medium">
                Decision-support, Service Design, Stakeholder Alignment
              </dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                Sector
              </dt>
              <dd className="text-sm text-teal-dark font-medium">
                Commercial Fleets, Mobility, Sustainability
              </dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                My Role
              </dt>
              <dd className="text-sm text-teal-dark font-medium">
                UX / UI Designer, Product Designer
              </dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                Company
              </dt>
              <dd className="text-sm text-teal-dark font-medium">Dynamon</dd>
            </div>
          </dl>
        </header>

        {/* Hero image strip – main screenshot on laptop */}
        <section className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16 md:mb-20">
          <AnimatedDiv delay={0.1}>
            <LaptopMockup angle="none" className="mb-8 md:mb-10">
              <Image
                src={asset('/Ecofleet/Screenshot 2026-02-09 165602.png')}
                alt="EcoFleet overview dashboard showing high-level fleet transition planning"
                fill
                className="object-cover object-top"
                sizes="(max-width: 900px) 92vw, 85vw"
              />
            </LaptopMockup>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-md bg-slate-950/80">
                <Image
                  src={asset('/Ecofleet/Screenshot 2026-02-09 165724.png')}
                  alt="Scenario comparison view within EcoFleet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-md bg-slate-950/80">
                <Image
                  src={asset('/Ecofleet/Screenshot 2026-02-09 165804.png')}
                  alt="Route and duty cycle insights in EcoFleet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedDiv>
        </section>

        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-6xl space-y-14 md:space-y-16">
          {/* Project overview */}
          <section id={TOC_SECTIONS[0].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Project Overview
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Commercial fleets know they must decarbonise, but the path to get there is rarely
              straightforward. Operators are trying to balance vehicle performance, depot
              constraints, driver needs and whole-life costs — all while regulations and available
              technologies continue to evolve. EcoFleet was designed to reduce this uncertainty and
              give operators a single, trusted space where they can explore transition options
              before committing capital.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The tool brings together real-world telematics data, duty cycle modelling and
              infrastructure planning to surface where and when alternative fuels make sense. It
              supports gradual, phased adoption – helping teams start with high-impact vehicle
              groups, validate feasibility and then scale with confidence.
            </p>
          </section>

          {/* Understanding the fleet */}
          <section id={TOC_SECTIONS[1].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Understanding the Fleet and Duty Cycles
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              A core part of the experience is helping operators understand how their current fleet
              behaves in practice. EcoFleet ingests telematics data and transforms it into clear
              patterns: which routes are predictable, which vehicles have spare dwell time and where
              operational risk is highest. Instead of raw spreadsheets, users see journeys and duty
              cycles visualised in a way that supports informed decision-making.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base">
              These insights create the foundation for all future scenarios. By grounding change in
              existing behaviour, EcoFleet makes it easier for operations, finance and sustainability
              teams to have a shared conversation about what is realistically possible.
            </p>
            <AnimatedDiv delay={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/Ecofleet/Screenshot 2026-02-09 165827.png')}
                    alt="EcoFleet visualising vehicle utilisation and duty cycles"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/Ecofleet/Screenshot 2026-02-09 165841.png')}
                    alt="Detailed journey and route performance breakdown in EcoFleet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedDiv>
          </section>

          {/* Planning the transition */}
          <section id={TOC_SECTIONS[2].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Planning a Phased Transition
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Rather than encouraging a single &ldquo;big bang&rdquo; change, EcoFleet is shaped
              around realistic, phased transition plans. Users can group vehicles into candidate
              cohorts, simulate the introduction of electric, hydrogen or LNG options, and evaluate
              how each choice affects emissions, total cost of ownership and operational risk over
              time.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base">
              Each scenario focuses on clarity and comparability. Key metrics are surfaced in plain
              language, with visual cues that highlight trade-offs – for example, cost savings
              versus infrastructure investment, or emissions reductions versus range constraints.
              This makes it easier for decision-makers to defend their choices internally and with
              external stakeholders.
            </p>
            <AnimatedDiv delay={0.14}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="lg:col-span-8">
                  <LaptopMockup angle="none">
                    <Image
                      src={asset('/Ecofleet/Screenshot 2026-02-09 165855.png')}
                      alt="Scenario planning view comparing transition options in EcoFleet"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </LaptopMockup>
                </div>
                <div className="lg:col-span-4 relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/Ecofleet/Screenshot 2026-02-09 165915.png')}
                    alt="EcoFleet scenario summary card showing costs and emissions over time"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </AnimatedDiv>
          </section>

          {/* Infrastructure and charging strategy */}
          <section id={TOC_SECTIONS[3].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Infrastructure and Charging Strategy
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              For most fleets, infrastructure is where risk and uncertainty feel highest. EcoFleet
              highlights where charging or refuelling capacity is needed, when it is likely to be
              used and how this changes as the fleet transitions. Depots, routes and dwell times are
              connected so that infrastructure decisions are rooted in operational reality, not
              abstract assumptions.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base">
              The interface prioritises clarity, using colour, hierarchy and layout to emphasise
              what needs attention now and what can wait for later phases. This supports practical
              conversations between operations teams, finance and infrastructure partners.
            </p>
            <AnimatedDiv delay={0.16}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/Ecofleet/Screenshot 2026-02-09 165925.png')}
                    alt="EcoFleet depot and infrastructure planning view"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/Ecofleet/Screenshot 2026-02-09 170037.png')}
                    alt="Charging utilisation and capacity planning visualised in EcoFleet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedDiv>
          </section>

          {/* Communicating outcomes */}
          <section id={TOC_SECTIONS[4].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Communicating Outcomes with Stakeholders
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              A successful transition depends on clear communication. EcoFleet is designed to help
              users move from analysis to narrative – transforming complex modelling into visuals
              that can be shared with leadership teams, procurement, sustainability leads and
              external partners.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base">
              Summary screens and scenario overviews emphasise the &ldquo;so what&rdquo;:
              emissions impact, operational feasibility and cost implications. This enables teams to
              make faster, better-aligned decisions and track progress as plans move from concept to
              live operations.
            </p>
            <AnimatedDiv delay={0.18}>
              <LaptopMockup angle="none" className="max-w-5xl mx-auto">
                <Image
                  src={asset('/Ecofleet/Screenshot 2026-02-09 170052.png')}
                  alt="EcoFleet summary dashboard used to communicate outcomes to stakeholders"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 100vw, 1024px"
                />
              </LaptopMockup>
            </AnimatedDiv>
          </section>

          {/* Impact */}
          <section id={TOC_SECTIONS[5].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Impact
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              EcoFleet helps turn decarbonisation from an abstract ambition into a structured,
              data-informed roadmap. By grounding decisions in actual fleet behaviour and making
              trade-offs visible, it gives operators confidence to take the next step – whether
              that&apos;s piloting a small cohort of electric vehicles or planning a multi-year
              transition across depots.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The design emphasises clarity, trust and collaboration, supporting conversations
              between technical experts and non-specialist stakeholders. Ultimately, EcoFleet is
              about giving teams the tools they need to adopt cleaner fuels in a way that is both
              commercially responsible and environmentally ambitious.
            </p>
            <AnimatedDiv delay={0.2}>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-teal-medium/25 shadow-xl bg-slate-950/80">
                <Image
                  src={asset('/Ecofleet/Screenshot 2026-02-09 170104.png')}
                  alt="High-level EcoFleet impact view highlighting transition progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1152px"
                />
              </div>
            </AnimatedDiv>
          </section>

          {/* Other Works */}
          <section>
            <OtherWorks currentSlug="ecofleet" />
          </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
