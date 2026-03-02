'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { asset } from '@/lib/asset'
import { slugify } from '@/lib/slug'

const TOC_SECTIONS = [
  'Project Overview',
  'AI-Assisted Prototyping',
  'Understanding the Fleet',
  'Planning a Transition',
  'Infrastructure and Charging',
  'Communicating Outcomes',
  'Impact',
].map((label) => ({ id: slugify(label), label }))

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function MediaWrap({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-3"
      style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
    >
      <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
        {children}
      </div>
    </div>
  )
}

function SectionNum({ n }: { n: string }) {
  return (
    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal-600/60 mb-2 select-none">
      {n}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[7px] w-[5px] h-[5px] rounded-full shrink-0 bg-teal-500" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 text-slate-600">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[1px] text-xs font-mono font-bold text-teal-600 shrink-0 w-4 tabular-nums">
            {i + 1}.
          </span>
          {item}
        </li>
      ))}
    </ol>
  )
}

export default function EcoFleetContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24">
        {/* ─── Hero ────────────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-50">
          {/* Gradient orbs */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,184,166,0.10) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, rgba(6,182,212,0.07) 0%, transparent 65%)',
            }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 lg:pt-40">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">

              {/* Left: text */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-teal-600 mb-4"
                >
                  Case Study · Product Design · AI Prototyping
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
                >
                  Fleet transition,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                    made navigable.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-lg"
                >
                  A decision-support tool helping commercial fleets decarbonise with confidence —
                  designed and prototyped in React and Next.js using AI-assisted development.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  {[
                    { label: 'Sector', value: 'Commercial Fleets' },
                    { label: 'Company', value: 'Dynamon' },
                    { label: 'Role', value: 'Product Designer' },
                    { label: 'Method', value: 'AI-Assisted Prototyping' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200"
                    >
                      <dt className="text-[10px] uppercase tracking-widest font-semibold text-teal-600 mb-1 leading-tight">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-semibold text-slate-900 leading-snug">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>

              {/* Right: hero image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(20,184,166,0.15), transparent 70%)',
                    filter: 'blur(32px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src={asset('/Ecofleet/Step1Routes.png')}
                    alt="EcoFleet routes and fleet overview dashboard"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="w-full h-auto"
                    priority
                    quality={90}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── TOC + content ───────────────────────────────────────── */}
        <div className="w-full max-w-[1400px] mx-auto pl-2 md:pl-4 pr-4 md:pr-8 flex gap-2 lg:gap-4 mt-12">
          <ProjectToc sections={TOC_SECTIONS} />

          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-16">

            {/* 01 – Project Overview */}
            <section id={TOC_SECTIONS[0].id}>
              <motion.div {...rv()}>
                <SectionNum n="01" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5">
                  Project Overview
                </h2>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-2">
                <p>
                  Commercial fleets know they must decarbonise, but the path to get there is rarely
                  straightforward. Operators are balancing vehicle performance, depot constraints,
                  driver needs and whole-life costs — all while regulations and technologies continue
                  to evolve.
                </p>
                <p>
                  EcoFleet was designed to reduce this uncertainty and provide a single, trusted space
                  where operators can explore transition options before committing capital.
                </p>
                <p className="font-medium text-slate-800">
                  What makes this project different is how I brought it to life.
                </p>
                <p>
                  Instead of stopping at static mockups, I used AI-assisted prototyping to build a
                  working product prototype directly in the team&apos;s existing tech stack — React
                  and Next.js. Using Cursor, I translated design intent into functional components,
                  allowing stakeholders to interact with real flows, real states and real data
                  structures rather than conceptual screens.
                </p>
                <p>
                  This approach fundamentally changed how the product was discussed, validated and
                  iterated.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <MediaWrap>
                  <Image
                    src={asset('/Ecofleet/CreateRoute.png')}
                    alt="EcoFleet route creation interface — prototype built in React and Next.js using Cursor"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            {/* ─── Callout ─────────────────────────────────────────── */}
            <motion.div
              {...rv()}
              className="relative rounded-2xl border border-teal-100 bg-teal-50/60 p-8 md:p-12 text-center overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(20,184,166,0.06), transparent)',
                }}
              />
              <span
                className="absolute font-serif text-teal-300/40 select-none pointer-events-none"
                aria-hidden
                style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
              >
                &ldquo;
              </span>
              <p className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-snug z-10">
                Rather than designing in Figma and handing over,
                <br className="hidden sm:block" />
                I built it directly in the production stack.
              </p>
              <p className="relative mt-5 text-slate-500 z-10 max-w-md mx-auto leading-relaxed">
                Using Cursor to generate functional React components — blurring the boundary between
                design and engineering.
              </p>
            </motion.div>

            {/* 02 – AI-Assisted Prototyping */}
            <section id={TOC_SECTIONS[1].id}>
              <motion.div {...rv()}>
                <SectionNum n="02" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Designing Through AI-Assisted Prototyping
                </h2>
                <p className="text-slate-500 mb-8">
                  Rather than designing exclusively in Figma and handing over to engineering, I used
                  Cursor to bridge strategy, design and implementation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <motion.div
                  {...rv(0.05)}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">What I used Cursor to do</h3>
                  </div>
                  <BulletList
                    items={[
                      'Generate React components from structured design specifications',
                      'Build scenario comparison modules in Next.js',
                      'Prototype interactive dashboards with realistic data models',
                      'Rapidly iterate on layout, hierarchy and state handling',
                      'Validate technical feasibility early using the actual stack',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-teal-100 bg-teal-50/40 p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">
                      Because it was built in the production stack
                    </h3>
                  </div>
                  <BulletList
                    items={[
                      'Engineers could immediately assess architectural implications',
                      'Stakeholders could click, filter and compare scenarios',
                      'Feedback was based on behaviour, not assumptions',
                      'Design decisions were grounded in implementation reality',
                    ]}
                  />
                </motion.div>
              </div>

              <motion.p {...rv(0.12)} className="text-slate-600 leading-relaxed mb-6">
                This blurred the traditional boundary between design and engineering — accelerating
                alignment and reducing ambiguity before development began.
              </motion.p>

              <motion.div {...rv(0.15)}>
                <MediaWrap>
                  <Image
                    src={asset('/Ecofleet/Step3aScenarios.png')}
                    alt="EcoFleet interactive scenario comparison — built as a functional React prototype using Cursor"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            {/* 03 – Understanding the Fleet */}
            <section id={TOC_SECTIONS[2].id}>
              <motion.div {...rv()}>
                <SectionNum n="03" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Understanding the Fleet and Duty Cycles
                </h2>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  A core part of EcoFleet is helping operators understand how their current fleet
                  behaves in practice. The prototype ingested representative telematics datasets and
                  transformed them into interactive visualisations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <motion.div
                  {...rv(0.07)}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Fleet insights visualised</h3>
                  <BulletList
                    items={[
                      'Vehicle utilisation',
                      'Route predictability',
                      'Dwell time availability',
                      'Operational risk patterns',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-teal-100 bg-teal-50/40 p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Building in React allowed</h3>
                  <BulletList
                    items={[
                      'Real state-driven filtering',
                      'Interactive journey drilldowns',
                      'Conditional UI states to test risk scenarios',
                      'Component reuse across dashboards and planning views',
                    ]}
                  />
                </motion.div>
              </div>

              <motion.p {...rv(0.12)} className="text-slate-600 leading-relaxed mb-6">
                Instead of presenting static charts, I built dynamic views where users could filter
                cohorts, adjust assumptions and immediately see how duty cycles changed. This made
                early validation far more realistic than static visuals alone.
              </motion.p>

              <motion.div {...rv(0.15)}>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/Ecofleet/Step3b.png')}
                      alt="EcoFleet fleet duty cycle and vehicle utilisation visualisation"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/Ecofleet/Step3c.png')}
                      alt="EcoFleet route performance and journey breakdown"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 04 – Planning a Phased Transition */}
            <section id={TOC_SECTIONS[3].id}>
              <motion.div {...rv()}>
                <SectionNum n="04" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Planning a Phased Transition
                </h2>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  EcoFleet avoids encouraging a single &ldquo;big bang&rdquo; transition. Instead,
                  it supports phased adoption. Using AI in Cursor, I rapidly scaffolded comparison
                  logic and built scenario cards that dynamically updated based on input variables.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <motion.div
                  {...rv(0.07)}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Within the prototype, users could
                  </h3>
                  <BulletList
                    items={[
                      'Group vehicles into candidate cohorts',
                      'Simulate the introduction of EV, hydrogen or LNG vehicles',
                      'Compare emissions, total cost of ownership and risk',
                      'Adjust time horizons and infrastructure assumptions',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-teal-100 bg-teal-50/40 p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Because it was functional</h3>
                  <BulletList
                    items={[
                      'Stakeholders could test trade-offs live in workshops',
                      'We identified edge cases early',
                      'Feasibility conversations shifted from "can we build this?" to "how should this behave?"',
                    ]}
                  />
                </motion.div>
              </div>

              <motion.div {...rv(0.15)}>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/Ecofleet/Step3d.png')}
                      alt="EcoFleet scenario planning and vehicle cohort comparison"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/Ecofleet/Step3e.png')}
                      alt="EcoFleet transition scenario summary cards"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 05 – Infrastructure and Charging */}
            <section id={TOC_SECTIONS[4].id}>
              <motion.div {...rv()}>
                <SectionNum n="05" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Infrastructure and Charging Strategy
                </h2>
                <p className="text-slate-500 mb-8">
                  Infrastructure is where fleet operators feel the highest uncertainty.
                </p>
              </motion.div>

              <div className="space-y-0 mb-8">
                <motion.div
                  {...rv(0.05)}
                  className="space-y-3 pb-8 border-b border-slate-200"
                >
                  <h3 className="text-base font-semibold text-slate-900">The prototype connected</h3>
                  <BulletList
                    items={[
                      'Depot locations',
                      'Dwell times',
                      'Charging and refuelling capacity',
                      'Vehicle cohort changes over time',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.07)}
                  className="space-y-3 py-8 border-b border-slate-200"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    Using Next.js routing and modular components, users could move between
                  </h3>
                  <NumberedList
                    items={[
                      'Depot-level planning',
                      'Fleet-wide scenario impact',
                      'Infrastructure utilisation forecasts',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="space-y-3 pt-8"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    AI-assisted development accelerated iteration on
                  </h3>
                  <BulletList
                    items={[
                      'Data visualisation logic',
                      'Conditional highlighting for capacity constraints',
                      'Progressive disclosure patterns for complex planning information',
                    ]}
                  />
                  <p className="text-slate-600 leading-relaxed mt-2">
                    This allowed us to test clarity and usability under realistic data conditions.
                  </p>
                </motion.div>
              </div>

              <motion.div {...rv(0.15)}>
                <MediaWrap>
                  <Image
                    src={asset('/Ecofleet/Step2Infrastructure.png')}
                    alt="EcoFleet depot infrastructure and charging capacity planning view"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            {/* 06 – Communicating Outcomes */}
            <section id={TOC_SECTIONS[5].id}>
              <motion.div {...rv()}>
                <SectionNum n="06" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Communicating Outcomes with Stakeholders
                </h2>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  One of EcoFleet&apos;s biggest challenges was turning modelling complexity into
                  executive-ready narratives. Because the prototype was fully interactive, summary
                  dashboards weren&apos;t just static exports — they were dynamic scenario views.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <motion.div
                  {...rv(0.07)}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Users could</h3>
                  <BulletList
                    items={[
                      'Toggle between transition plans',
                      'View cost and emissions over time',
                      'Export summary-ready views',
                      'Adjust assumptions mid-discussion',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-teal-100 bg-teal-50/40 p-5 shadow-sm flex flex-col justify-center"
                >
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In stakeholder sessions, this dramatically increased engagement. Instead of
                    presenting slides, we navigated the live prototype.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    The credibility of a working system built in React and Next.js created stronger
                    trust than a purely conceptual demonstration.
                  </p>
                </motion.div>
              </div>

              <motion.div {...rv(0.12)}>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/Ecofleet/Step4Results.png')}
                      alt="EcoFleet results and outcomes dashboard"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/Ecofleet/Step4b.png')}
                      alt="EcoFleet stakeholder summary scenario views"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 07 – Impact */}
            <section id={TOC_SECTIONS[6].id}>
              <motion.div {...rv()}>
                <SectionNum n="07" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Impact
                </h2>
                <p className="text-slate-500 mb-8">
                  Using AI-assisted prototyping changed the trajectory of the project.
                </p>
              </motion.div>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mb-10">
                {[
                  {
                    title: 'Reduced ambiguity',
                    desc: 'Functional prototypes replaced conceptual handoffs between design and engineering.',
                  },
                  {
                    title: 'Accelerated validation',
                    desc: 'Complex planning logic was tested early with real stakeholders before development began.',
                  },
                  {
                    title: 'Deeper engagement',
                    desc: 'Live interaction in workshops replaced slide-based presentations.',
                  },
                  {
                    title: 'Earlier constraints',
                    desc: 'Technical constraints were surfaced before they became costly development problems.',
                  },
                  {
                    title: 'Stronger credibility',
                    desc: 'Demonstrating implementation awareness strengthened design authority.',
                  },
                ].map((card, i) => (
                  <motion.article
                    key={card.title}
                    {...rv(i * 0.06)}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                      <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.article>
                ))}
              </div>

              <motion.div {...rv(0.1)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  EcoFleet helps turn decarbonisation from an abstract ambition into a structured,
                  data-informed roadmap. By grounding decisions in actual fleet behaviour and making
                  trade-offs visible, it gives operators confidence to take the next step — whether
                  piloting a small electric cohort or planning a multi-year transition across depots.
                </p>
                <p>
                  For me, this project represents more than a sustainability tool. It demonstrates
                  how AI can extend the role of a product designer — enabling the creation of
                  functional, stack-aligned prototypes that bridge strategy, design and engineering.
                </p>
              </motion.div>

              <motion.div {...rv(0.15)}>
                <MediaWrap>
                  <Image
                    src={asset('/Ecofleet/Step4c.png')}
                    alt="EcoFleet — transition progress and impact overview"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            <OtherWorks currentSlug="ecofleet" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
