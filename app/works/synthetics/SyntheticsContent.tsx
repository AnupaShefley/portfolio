'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ProjectToc } from '@/components/ProjectToc'
import { ImpactCards } from '@/components/ImpactCards'
import OtherWorks from '@/components/OtherWorks'
import { SyntheticsFlowDiagram } from '@/components/SyntheticsGraphics'
import { asset } from '@/lib/asset'
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
    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-500/60 mb-2 select-none">
      {n}
    </p>
  )
}

function BulletList({ items, variant = 'indigo' }: { items: string[]; variant?: 'indigo' | 'red' | 'emerald' }) {
  const dot =
    variant === 'red'
      ? 'bg-red-400'
      : variant === 'emerald'
      ? 'bg-emerald-500'
      : 'bg-indigo-500'
  return (
    <ul className="space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className={`mt-[7px] w-[5px] h-[5px] rounded-full shrink-0 ${dot}`} />
          {item}
        </li>
      ))}
    </ul>
  )
}

interface ImprovementItemProps {
  num: string
  title: string
  children: React.ReactNode
  media: React.ReactNode
}

function ImprovementItem({ num, title, children, media }: ImprovementItemProps) {
  return (
    <motion.div
      {...rv()}
      className="space-y-3 pt-8 border-t border-slate-200 first:border-t-0 first:pt-0"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold ring-1 ring-indigo-200 shrink-0 tabular-nums">
          {num}
        </span>
        <h3 className="text-base md:text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <MediaWrap>{media}</MediaWrap>
      <div className="space-y-2 text-slate-600 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  )
}

export default function SyntheticsContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24">
        {/* ─── Hero ───────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-50">
          {/* Soft gradient orbs */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.1) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, rgba(139,92,246,0.07) 0%, transparent 65%)',
            }}
          />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 lg:pt-40">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 mb-4"
                >
                  Case Study · Fleet Scheduling
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
                >
                  Redesigning Fleet Scheduling for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                    Synthetic Telematics
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl"
                >
                  Transforming a form-based table into a scalable scheduling system for managing
                  50+ vehicles and generating telematics simulations.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  {[
                    { label: 'Schedule creation', value: '↓ 60–80%', sub: 'time reduction' },
                    { label: 'Scale', value: '↑ 50+', sub: 'vehicles' },
                    { label: 'Configuration', value: '↓ Fewer', sub: 'repetitive actions' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200"
                    >
                      <dt className="text-[10px] uppercase tracking-widest font-semibold text-indigo-600 mb-1 leading-tight">
                        {stat.label}
                      </dt>
                      <dd className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-slate-900 leading-tight whitespace-nowrap tabular-nums">
                        {stat.value}
                      </dd>
                      <dd className="text-[11px] text-slate-400 mt-0.5 leading-tight">{stat.sub}</dd>
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
                      'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(99,102,241,0.1), transparent 70%)',
                    filter: 'blur(32px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src={asset('/synthetics/hero2.png')}
                    alt="Synthetic Telematics fleet scheduling interface – calendar view"
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

        {/* ─── Meta panel ─────────────────────────────────── */}
        <motion.header {...rv()} className="container mx-auto px-6 mb-12 md:mb-16 mt-10">
          <div className="flex flex-wrap gap-6 md:gap-12 p-6 md:p-8 bg-white ring-1 ring-slate-200 rounded-2xl shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 mb-1.5">
                Field
              </p>
              <p className="text-slate-700 font-medium">
                Synthetic Telematics · UX/UI Design · Information Architecture
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 mb-1.5">
                Company
              </p>
              <p className="text-slate-700 font-medium">Dynamon</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 mb-1.5">
                Role
              </p>
              <p className="text-slate-700 font-medium">Lead UX/UI Designer</p>
            </div>
          </div>
        </motion.header>

        {/* ─── TOC + content ──────────────────────────────── */}
        <div className="w-full max-w-[1400px] mx-auto pl-2 md:pl-4 pr-4 md:pr-8 flex gap-2 lg:gap-4">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-14">

            {/* 01 Context */}
            <section id={TOC_SECTIONS[0].id}>
              <motion.div {...rv()}>
                <SectionNum n="01" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5">
                  Context: The Product and Problem Space
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4">
                <h3 className="text-base font-semibold text-slate-700">
                  What is Synthetic Telematics?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Synthetic Telematics simulates vehicle operations by combining vehicles, routes,
                  and schedules to generate telematics data used for:
                </p>
                <BulletList
                  items={[
                    'Fleet electrification planning',
                    'Energy consumption modelling',
                    'Charging infrastructure planning',
                  ]}
                />
                <p className="text-slate-600 leading-relaxed">
                  The scheduling step defines the operational logic that drives all simulation
                  outputs. Fleet operators use it to assign which vehicles run which routes on
                  which days, building a weekly operational plan before generating telematics.
                </p>
              </motion.div>
              <motion.div
                {...rv(0.1)}
                className="mt-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-5 overflow-hidden"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Workflow
                </p>
                <SyntheticsFlowDiagram className="w-full h-28" />
                <p className="text-xs text-slate-400 mt-3">
                  Vehicles → Routes → Schedule → Telematics Data → Analysis
                </p>
              </motion.div>
            </section>

            {/* 02 The Problem */}
            <section id={TOC_SECTIONS[1].id}>
              <motion.div {...rv()}>
                <SectionNum n="02" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5">
                  The Problem: Before vs After
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 mb-8">
                <p className="text-slate-800 font-medium">
                  The original table didn&apos;t scale with real fleet size.
                </p>
                <BulletList
                  variant="red"
                  items={[
                    'Hard to scan across days and vehicles',
                    'Required hundreds of repetitive manual assignments',
                    'Limited visibility of scheduling patterns',
                    'Difficult to validate schedules before generating telematics',
                  ]}
                />
              </motion.div>
              <motion.div
                {...rv(0.1)}
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))]"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <div className="grid grid-cols-2 gap-3 md:gap-5 items-start">
                  <div>
                    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                      <Image
                        src={asset('/synthetics/OldSyn.svg')}
                        alt="Old Synthetic Telematics UI – hierarchical table structure"
                        width={0}
                        height={0}
                        sizes="45vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <p className="text-sm text-slate-500 font-medium">
                        Before: Form-based · Fragmented
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                      <Image
                        src={asset('/synthetics/NewSyn1.svg')}
                        alt="New Synthetic Telematics UI – calendar-based scheduling"
                        width={0}
                        height={0}
                        sizes="45vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <p className="text-sm text-slate-500 font-medium">
                        After: Calendar-based · Efficient
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 03 The Solution */}
            <section id={TOC_SECTIONS[2].id}>
              <motion.div {...rv()}>
                <SectionNum n="03" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  The Solution
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 mb-4">
                <p className="text-slate-600 leading-relaxed">
                  A calendar-based scheduling system that maps fleet operations to a natural
                  time grid:
                </p>
                <BulletList
                  items={[
                    'Vehicles organised as rows',
                    'Days organised as columns',
                    'Routes displayed as visual schedule cards',
                    'Entire weekly schedule visible and editable at once',
                  ]}
                />
              </motion.div>
              <motion.div
                {...rv(0.1)}
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                  <video
                    src={asset('/synthetics/AssignWeek.mp4')}
                    loop
                    playsInline
                    muted
                    autoPlay
                    preload="none"
                    className="w-full h-auto block"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </section>

            {/* 04 Key UX Insight */}
            <section id={TOC_SECTIONS[3].id}>
              <motion.div {...rv()}>
                <SectionNum n="04" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
                  Key UX Insight
                </h2>
              </motion.div>
              <motion.div
                {...rv(0.05)}
                className="relative rounded-2xl border border-indigo-100 bg-indigo-50/60 p-8 md:p-12 text-center overflow-hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(99,102,241,0.05), transparent)',
                  }}
                />
                <span
                  className="absolute font-serif text-indigo-300/50 select-none pointer-events-none"
                  aria-hidden
                  style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
                >
                  &ldquo;
                </span>
                <p className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-snug z-10">
                  Users think in time and patterns,
                  <br className="hidden sm:block" /> not in form fields.
                </p>
                <p className="relative mt-5 text-slate-600 z-10 max-w-md mx-auto leading-relaxed">
                  Fleet scheduling is inherently calendar-based. The interface needed to reflect
                  this mental model.
                </p>
              </motion.div>
            </section>

            {/* 05 Key Improvements */}
            <section id={TOC_SECTIONS[4].id}>
              <motion.div {...rv()}>
                <SectionNum n="05" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
                  Key Improvements
                </h2>
              </motion.div>

              <div className="space-y-0">
                <ImprovementItem
                  num="1"
                  title="Full Schedule Visibility"
                  media={
                    <Image
                      src={asset('/synthetics/WeekSchedule.png')}
                      alt="Full weekly schedule view"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  }
                >
                  <p>
                    Users can see the entire weekly schedule at once, making it easy to identify
                    gaps, spot patterns, and validate assignments before generating telematics.
                  </p>
                  <p>
                    The calendar grid replaces fragmented form views with a single, scannable
                    overview. Operators no longer need to click through multiple screens to
                    understand fleet coverage.
                  </p>
                </ImprovementItem>

                <ImprovementItem
                  num="2"
                  title="Ability to Filter Vehicles"
                  media={
                    <video
                      src={asset('/synthetics/FilterVehicles.mp4')}
                      loop
                      playsInline
                      muted
                      autoPlay
                      preload="none"
                      className="w-full h-auto block"
                    >
                      Your browser does not support the video tag.
                    </video>
                  }
                >
                  <p>
                    Users can filter vehicles by type, depot, or custom criteria to focus on
                    specific subsets of the fleet. This reduces visual clutter when working with
                    50+ vehicles and makes it easier to target configuration changes.
                  </p>
                  <p>
                    Filters persist across interactions, so operators can quickly switch between
                    fleet-wide and focused views without losing context.
                  </p>
                </ImprovementItem>

                <ImprovementItem
                  num="3"
                  title="Horizontal and Vertical Copy Workflows"
                  media={
                    <video
                      src={asset('/synthetics/CopySchedule.mp4')}
                      loop
                      playsInline
                      muted
                      autoPlay
                      preload="none"
                      className="w-full h-auto block"
                    >
                      Your browser does not support the video tag.
                    </video>
                  }
                >
                  <p>
                    Users can copy schedules across days (horizontal) or across vehicles
                    (vertical), enabling rapid configuration of large fleets. A route pattern can
                    be replicated in seconds instead of minutes.
                  </p>
                  <p>
                    Operators report up to 5× fewer interactions compared to manual
                    assignment, which is a real time-saver for fleets with repetitive weekly patterns.
                  </p>
                </ImprovementItem>

                <ImprovementItem
                  num="4"
                  title="Higher Information Density with Better Clarity"
                  media={
                    <Image
                      src={asset('/synthetics/RouteDetails.png')}
                      alt="Route card details showing route name and time"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  }
                >
                  <p>
                    Route cards display route name, duration, and timing at a glance. More
                    information visible without overwhelming users. Typography and colour-coding
                    help operators validate schedules visually.
                  </p>
                  <p>
                    Critical details are immediately visible; secondary details remain accessible
                    on demand, reducing cognitive load during high-volume configuration.
                  </p>
                </ImprovementItem>
              </div>
            </section>

            {/* 06 Impact */}
            <ImpactCards id={TOC_SECTIONS[5].id} sectionNum="06" />

            {/* 07 Design Thinking */}
            <section id={TOC_SECTIONS[6].id}>
              <motion.div {...rv()}>
                <SectionNum n="07" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Design Thinking and Process
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  I explored multiple layout models before selecting the calendar grid. Early
                  explorations included alternative table layouts and different grouping
                  strategies. The calendar grid was chosen for its scalability and alignment with
                  how users think about time and fleet operations.
                </p>
                <BulletList
                  items={[
                    'Early layout explorations',
                    'Grid structure exploration',
                    'Interaction ideas (copy, drag, inline assign)',
                  ]}
                />
              </motion.div>
              <motion.div
                {...rv(0.1)}
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))]"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <div className="grid grid-cols-2 gap-3 md:gap-5 items-start">
                  {[
                    { src: asset('/synthetics/Iter1.svg'), alt: 'Design iteration 1 – early layout exploration' },
                    { src: asset('/synthetics/Iter2.svg'), alt: 'Design iteration 2 – grid structure exploration' },
                  ].map(({ src, alt }) => (
                    <div key={alt} className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                      <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        sizes="45vw"
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* 08 Final UI Showcase */}
            <section id={TOC_SECTIONS[7].id}>
              <motion.div {...rv()}>
                <SectionNum n="08" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  Final UI Showcase
                </h2>
                <p className="text-slate-500 text-sm mb-4">
                  Full calendar view with route cards and interaction states.
                </p>
              </motion.div>
              <motion.div
                {...rv(0.05)}
                className="w-full min-w-0 lg:w-[min(calc(100vw-14rem),calc(100%+24rem))] my-2"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                  <video
                    src={asset('/synthetics/Final.mp4')}
                    loop
                    playsInline
                    muted
                    autoPlay
                    preload="none"
                    className="w-full h-auto block"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </section>

            {/* 09 Reflection */}
            <section id={TOC_SECTIONS[8].id}>
              <motion.div {...rv()}>
                <SectionNum n="09" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
                  Reflection
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-slate-800 font-semibold">What I learned</p>
                <p>
                  Working on data-heavy products taught me that small inefficiencies get much worse
                  at scale. What feels like a minor friction point for ten vehicles becomes a real
                  problem at fifty.
                </p>
                <p>
                  This redesign turned a slow, form-based workflow into a scheduling system that
                  actually keeps up with real fleet operations. Aligning the interface with how
                  users think (in time and patterns) reduced errors and made it practical to manage
                  50+ vehicles with confidence.
                </p>
              </motion.div>
            </section>

            <OtherWorks currentSlug="synthetics" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
