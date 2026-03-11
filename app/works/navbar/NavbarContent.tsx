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
  'Context',
  'Challenges',
  'Solution overview',
  'Research and Discovery',
  'Information architecture redesign',
  'Interaction Design',
  'Outcome and Impact',
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
    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-red-700/60 mb-2 select-none">
      {n}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[7px] w-[5px] h-[5px] rounded-full shrink-0 bg-red-500" />
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
          <span className="mt-[1px] text-xs font-mono font-bold text-red-700 shrink-0 w-4 tabular-nums">
            {i + 1}.
          </span>
          {item}
        </li>
      ))}
    </ol>
  )
}

export default function NavbarContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24">
        {/* ─── Hero ───────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-50">
          {/* Gradient orbs */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(185,28,28,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, rgba(159,18,57,0.06) 0%, transparent 65%)',
            }}
          />
          {/* Dot grid */}
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
              {/* Left: text */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-red-700 mb-4"
                >
                  Case Study · UX / UI Design
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
                >
                  A clearer path{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-rose-600">
                    through the product.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl"
                >
                  Redesigning the global navigation bar to improve findability, hierarchy and
                  consistency—so users always know where they are and where to go next.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  {[
                    { label: 'Avg. time to find', value: '↓ 17%', sub: 'reduction' },
                    { label: 'Hierarchy', value: 'Clear', sub: 'primary vs secondary' },
                    { label: 'User confidence', value: '↑ Up', sub: 'reduced cognitive load' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200"
                    >
                      <dt className="text-[10px] uppercase tracking-widest font-semibold text-red-700 mb-1 leading-tight">
                        {stat.label}
                      </dt>
                      <dd className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-slate-900 leading-tight">
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
                      'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(185,28,28,0.10), transparent 70%)',
                    filter: 'blur(32px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src={asset('/navbar/NavMenu.png')}
                    alt="Navigation bar redesign overview"
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
            {[
              { label: 'Field', value: 'UX · UI Design · Information Architecture' },
              { label: 'Company', value: 'Dynamon' },
              { label: 'Deliverables', value: 'Nav structure · Visual design' },
              { label: 'Role', value: 'Product Designer' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest font-semibold text-red-700 mb-1.5">
                  {label}
                </p>
                <p className="text-slate-700 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </motion.header>

        {/* ─── TOC + content ──────────────────────────────── */}
        <div className="w-full max-w-[1400px] mx-auto pl-2 md:pl-4 pr-4 md:pr-8 flex gap-2 lg:gap-4">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-16">

            {/* 01 Context */}
            <section id={TOC_SECTIONS[0].id}>
              <motion.div {...rv()}>
                <SectionNum n="01" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5">
                  Project Overview
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  When I joined Dynamon, I began working on ZERO—the company&apos;s core fleet
                  electrification platform. ZERO helps fleet operators upload operational data, run
                  electrification simulations, and analyse outputs to make informed decisions about
                  transitioning to electric vehicles.
                </p>
                <p>
                  The platform contained powerful analytical capabilities, but users struggled to
                  navigate it effectively. The navigation structure did not reflect the progression
                  of the electrification workflow, making it difficult for users to understand where
                  to begin, where they were, and how to move forward.
                </p>
                <p>
                  I led a redesign of the navigation system—transitioning from a horizontal top
                  navigation to a scalable vertical sidebar, while simultaneously restructuring the
                  product&apos;s information architecture.
                </p>
              </motion.div>
            </section>

            {/* 02 Challenges */}
            <section id={TOC_SECTIONS[1].id}>
              <motion.div {...rv()}>
                <SectionNum n="02" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  Challenges
                </h2>
                <p className="text-slate-500 mb-8">
                  The existing top navigation created several critical usability and scalability issues.
                </p>
              </motion.div>

              <div className="space-y-0">
                {/* Challenge 1 */}
                <motion.div
                  {...rv(0.05)}
                  className="space-y-3 pt-8 border-t border-slate-200 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-500 text-xs font-bold ring-1 ring-red-200 shrink-0">
                      1
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      Users didn&apos;t know where to start
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4 pl-9">
                    ZERO supports a multi-stage workflow—uploading fleet data, running simulations,
                    and analysing results—but the navigation did not reflect this progression. Users
                    frequently expressed uncertainty about where to begin or what to do next,
                    increasing cognitive load and reducing confidence in the platform.
                  </p>
                  <MediaWrap>
                    <Image
                      src={asset('/navbar/Confused.svg')}
                      alt="User confusion – unclear where to start in the navigation"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  </MediaWrap>
                </motion.div>

                {/* Challenge 2 */}
                <motion.div
                  {...rv(0.05)}
                  className="space-y-3 pt-8 border-t border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-500 text-xs font-bold ring-1 ring-red-200 shrink-0">
                      2
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      Navigation did not scale with product growth
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4 pl-9">
                    As ZERO evolved, new features and pages were added. The horizontal navigation
                    quickly became overcrowded, making it difficult to add new sections without
                    clutter, maintain clear structure, or support future expansion.
                  </p>
                  <MediaWrap>
                    <Image
                      src={asset('/navbar/OldvsNew.svg')}
                      alt="Before vs after – old horizontal navigation vs new scalable sidebar"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  </MediaWrap>
                </motion.div>

                {/* Challenge 3 */}
                <motion.div
                  {...rv(0.05)}
                  className="space-y-3 pt-8 border-t border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-500 text-xs font-bold ring-1 ring-red-200 shrink-0">
                      3
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      Information architecture did not match user mental models
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-9">
                    The navigation structure reflected internal system organisation rather than user
                    workflows. Users had to explore multiple areas to complete a single task, making
                    the experience inefficient and fragmented.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* ─── Key Insight callout ─────────────────────── */}
            <motion.div
              {...rv()}
              className="relative rounded-2xl border border-red-100 bg-red-50/60 p-8 md:p-12 text-center overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(185,28,28,0.05), transparent)',
                }}
              />
              <span
                className="absolute font-serif text-red-300/50 select-none pointer-events-none"
                aria-hidden
                style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
              >
                &ldquo;
              </span>
              <p className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-snug z-10">
                The core issue wasn&apos;t the visual design—
                <br className="hidden sm:block" />
                it was the information architecture.
              </p>
              <p className="relative mt-5 text-slate-600 z-10 max-w-md mx-auto leading-relaxed">
                The navigation needed to reflect the user&apos;s workflow, not the system&apos;s
                internal structure.
              </p>
            </motion.div>

            {/* 03 Solution overview */}
            <section id={TOC_SECTIONS[2].id}>
              <motion.div {...rv()}>
                <SectionNum n="03" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Solution: Vertical Sidebar and New Information Architecture
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  I redesigned the navigation system across two dimensions: user experience and
                  information architecture, and visual design and interaction behaviour. Moving to a
                  vertical sidebar removed layout constraints and allowed us to create a structure
                  that reflected the true organisation of the product.
                </p>
                <p>
                  Instead of forcing content into limited horizontal space, we could expose
                  meaningful categories and logical groupings—improving discoverability and reducing
                  reliance on deep navigation layers.
                </p>
              </motion.div>
              <motion.div {...rv(0.1)}>
                <MediaWrap>
                  <video
                    src={asset('/navbar/Overview.mp4')}
                    loop
                    playsInline
                    muted
                    autoPlay
                    preload="none"
                    className="w-full h-auto block"
                  >
                    Your browser does not support the video tag.
                  </video>
                </MediaWrap>
              </motion.div>
            </section>

            {/* 04 Research and Discovery */}
            <section id={TOC_SECTIONS[3].id}>
              <motion.div {...rv()}>
                <SectionNum n="04" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Research and Discovery
                </h2>
                <p className="text-slate-500 mb-8">
                  To understand the problem deeply, I conducted several discovery activities.
                </p>
              </motion.div>

              <div className="space-y-0">
                <motion.div
                  {...rv(0.05)}
                  className="space-y-3 pt-8 border-t border-slate-200 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    User Observation and Feedback
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    I observed users interacting with ZERO during onboarding and regular use.
                    Common behaviours included:
                  </p>
                  <BulletList
                    items={[
                      'Hesitation after logging in',
                      'Opening multiple sections to find the right page',
                      'Difficulty understanding the platform structure',
                      'Asking for guidance on where to begin',
                    ]}
                  />
                  <p className="text-slate-600 leading-relaxed mt-3">
                    This confirmed that navigation was a core usability issue, not just a visual one.
                  </p>
                </motion.div>

                <motion.div {...rv(0.05)} className="space-y-3 pt-8 border-t border-slate-200">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    Workflow Analysis
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    I mapped the typical electrification journey within the platform. This revealed
                    a clear progression:
                  </p>
                  <NumberedList
                    items={[
                      'Data input and preparation',
                      'Simulation and modelling',
                      'Results analysis and decision-making',
                    ]}
                  />
                  <p className="text-slate-600 leading-relaxed mt-3 mb-4">
                    The navigation did not reflect this progression—this mismatch was the root of
                    the friction.
                  </p>
                  <MediaWrap>
                    <video
                      src={asset('/navbar/newUserflow.mp4')}
                      loop
                      playsInline
                      muted
                      autoPlay
                      preload="none"
                      className="w-full h-auto block"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </MediaWrap>
                </motion.div>

                <motion.div {...rv(0.05)} className="space-y-3 pt-8 border-t border-slate-200">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    Design Strategy
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    The solution focused on two key structural changes:
                  </p>
                  <NumberedList
                    items={[
                      'Transition from top navigation to a vertical sidebar',
                      'Redesign the information architecture around user workflows',
                    ]}
                  />
                </motion.div>
              </div>
            </section>

            {/* 05 Information architecture redesign */}
            <section id={TOC_SECTIONS[4].id}>
              <motion.div {...rv()}>
                <SectionNum n="05" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Information Architecture Redesign
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  I reorganised the platform into clear workflow-based groups aligned with the
                  electrification journey, matching user mental models and reducing friction at
                  every step.
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: '01',
                    badgeClass: 'bg-red-50 ring-red-200 text-red-500',
                    dotClass: 'bg-red-400',
                    title: 'Data setup and inputs',
                    desc: 'Upload, validate and prepare fleet data—vehicle lists, duty cycles, depots and energy tariffs. One clear starting point so users know exactly where to begin.',
                  },
                  {
                    step: '02',
                    badgeClass: 'bg-amber-50 ring-amber-200 text-amber-600',
                    dotClass: 'bg-amber-400',
                    title: 'Simulation and modelling',
                    desc: 'Run electrification scenarios and models. Configuration, scenario selection and parameters in one place—a logical next step from data input to analysis.',
                  },
                  {
                    step: '03',
                    badgeClass: 'bg-emerald-50 ring-emerald-200 text-emerald-600',
                    dotClass: 'bg-emerald-500',
                    title: 'Results and analysis',
                    desc: 'Interpret outputs and make decisions. Dashboards, reports, comparisons and exports in a dedicated area—data to decision in a single coherent flow.',
                  },
                ].map((card, i) => (
                  <motion.article
                    key={card.step}
                    {...rv(i * 0.06)}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
                  >
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ring-1 ${card.badgeClass}`}
                    >
                      {card.step}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${card.dotClass}`} />
                      <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* 06 Interaction Design */}
            <section id={TOC_SECTIONS[5].id}>
              <motion.div {...rv()}>
                <SectionNum n="06" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Interaction Design
                </h2>
                <p className="text-slate-500 mb-8">
                  Several behavioural improvements were introduced to enhance usability throughout
                  the platform.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    num: '1',
                    title: 'Collapsible Sidebar',
                    desc: 'Users can collapse the sidebar to maximise workspace when needed, giving them control over screen space without losing navigation context.',
                  },
                  {
                    num: '2',
                    title: 'Auto-collapse Behaviour',
                    desc: 'During early testing, users opened multiple sections simultaneously, causing clutter. Auto-collapse ensures only one section remains open at a time, reducing overwhelm.',
                  },
                  {
                    num: '3',
                    title: 'Active State Highlighting',
                    desc: 'Strong active states were introduced—a clear visual anchor so users always know exactly where they are within the platform.',
                  },
                  {
                    num: '4',
                    title: 'Hover-to-expand Interaction',
                    desc: 'When collapsed, the sidebar temporarily expands on hover, balancing space efficiency with full label accessibility. No information is ever hidden.',
                  },
                  {
                    num: '5',
                    title: 'Brand Alignment and Workflow Indicators',
                    desc: "The navigation colour was updated to green to reflect the brand's sustainability focus. Colour indicators (red → amber → green) align with the electrification workflow, helping users understand system structure at a glance.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.num}
                    {...rv()}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-700 text-xs font-bold ring-1 ring-red-200 shrink-0">
                        {item.num}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base pl-9">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 07 Outcome and Impact */}
            <section id={TOC_SECTIONS[6].id}>
              <motion.div {...rv()}>
                <SectionNum n="07" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Outcome and Impact
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  The redesign significantly improved usability and scalability across the product.
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                  {...rv(0.05)}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <h3 className="text-base font-semibold text-slate-900">User Experience</h3>
                  </div>
                  <BulletList
                    items={[
                      'Improved clarity and orientation',
                      'Reduced cognitive load',
                      'Faster navigation between sections',
                      'Improved user confidence',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <h3 className="text-base font-semibold text-slate-900">Product Improvements</h3>
                  </div>
                  <BulletList
                    items={[
                      'Scalable navigation system',
                      'Information architecture aligned with user workflows',
                      'Strong foundation for future feature expansion',
                    ]}
                  />
                </motion.div>
              </div>
            </section>

            {/* 08 Reflection */}
            <section id={TOC_SECTIONS[7].id}>
              <motion.div {...rv()}>
                <SectionNum n="08" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
                  Reflection
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Treating the navbar as a product in its own right—with clear goals, user flows and
                  success criteria—helped move the conversation from &quot;where do we put this
                  link?&quot; to &quot;how do we help users get where they need to go?&quot;
                  Constraining the number of primary items and defining a single CTA forced
                  prioritisation that benefited both usability and business objectives.
                </p>
                <p>
                  The same discipline—clear hierarchy, constrained choices, one primary CTA—can be
                  applied to other global UI elements so the whole experience stays coherent as the
                  product grows.
                </p>
              </motion.div>
            </section>

            <OtherWorks currentSlug="navbar" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
