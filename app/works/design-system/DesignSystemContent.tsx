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
  'Colour & Typography',
  'Spacing System',
  'Components',
  'Data Visualisation',
  'Alerts & Feedback',
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
    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-violet-600/60 mb-2 select-none">
      {n}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[7px] w-[5px] h-[5px] rounded-full shrink-0 bg-violet-500" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function TwoImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {images.map((img) => (
        <div key={img.src} className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
          <Image
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto block"
            quality={90}
          />
        </div>
      ))}
    </div>
  )
}

export default function DesignSystemContent() {
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
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.10) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, rgba(167,139,250,0.07) 0%, transparent 65%)',
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
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-violet-600 mb-4"
                >
                  Case Study · Design Systems · Component Library
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
                >
                  One language,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">
                    every screen.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-lg"
                >
                  A structured design system built for EcoFleet, giving the team a shared source
                  of truth for colour, typography, spacing, components and interaction patterns.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  {[
                    { label: 'Project', value: 'EcoFleet' },
                    { label: 'Company', value: 'Dynamon' },
                    { label: 'Role', value: 'Product Designer' },
                    { label: 'Deliverable', value: 'Design System' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200"
                    >
                      <dt className="text-[10px] uppercase tracking-widest font-semibold text-violet-600 mb-1 leading-tight">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-semibold text-slate-900 leading-snug">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>

              {/* Right: hero video */}
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
                      'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(139,92,246,0.15), transparent 70%)',
                    filter: 'blur(32px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <video
                    src={asset('/DesignSystem/DesignSystem.mp4')}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-auto block"
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

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Good design at scale needs more than good taste. It needs a shared language.
                  While working on EcoFleet, I recognised early on that without consistent
                  foundations, every new screen would introduce its own micro-decisions: slightly
                  different spacing, a new shade of blue, another way to show an alert. That
                  inconsistency compounds fast.
                </p>
                <p>
                  To address this, I built a design system for the EcoFleet project: a single
                  source of truth that brought visual coherence, reduced repetitive decision-making
                  and gave the team a shared toolkit to build from.
                </p>
                <p className="font-medium text-slate-800">
                  The system covers every layer of the interface.
                </p>
                <p>
                  From the base tokens (colour, typography and spacing) through to fully assembled
                  components, chart patterns and feedback states. Each piece was designed to work
                  independently and compose cleanly with everything else.
                </p>
              </motion.div>

              {/* Callout */}
              <motion.div
                {...rv(0.08)}
                className="relative rounded-2xl border border-violet-100 bg-violet-50/60 p-8 md:p-12 text-center overflow-hidden mb-8"
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(139,92,246,0.06), transparent)',
                  }}
                />
                <span
                  className="absolute font-serif text-violet-300/40 select-none pointer-events-none"
                  aria-hidden
                  style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
                >
                  &ldquo;
                </span>
                <p className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-snug z-10">
                  Built for EcoFleet, but designed to outlast it.
                </p>
                <p className="relative mt-5 text-slate-500 z-10 max-w-md mx-auto leading-relaxed">
                  A system that gives the team a shared starting point, so every new screen starts
                  from a place of consistency rather than a blank canvas.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <MediaWrap>
                  <Image
                    src={asset('/DesignSystem/Components1.png')}
                    alt="EcoFleet Design System — component library overview"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            {/* 02 – Colour & Typography */}
            <section id={TOC_SECTIONS[1].id}>
              <motion.div {...rv()}>
                <SectionNum n="02" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Colour &amp; Typography
                </h2>
                <p className="text-slate-500 mb-8">
                  The visual foundation of the system, with every decision guided by legibility,
                  accessibility and brand coherence.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <motion.div
                  {...rv(0.05)}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">Colour</h3>
                  </div>
                  <BulletList
                    items={[
                      'A structured palette with primary, secondary and semantic tokens',
                      'Semantic colours for status: success, warning, error and neutral',
                      'Sufficient contrast ratios across all text and interactive elements',
                      'Consistent use of teal as the brand-primary action colour',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-violet-100 bg-violet-50/40 p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">Typography</h3>
                  </div>
                  <BulletList
                    items={[
                      'A clear type scale from display headings to captions',
                      'Defined weights and line heights for readability in data-heavy views',
                      'Serif headings paired with clean sans-serif body text',
                      'Monospace styles for data labels, codes and micro-copy',
                    ]}
                  />
                </motion.div>
              </div>

              <motion.div {...rv(0.12)}>
                <TwoImageGrid
                  images={[
                    {
                      src: asset('/DesignSystem/Colours.png'),
                      alt: 'EcoFleet Design System — colour palette and token structure',
                    },
                    {
                      src: asset('/DesignSystem/Typography.png'),
                      alt: 'EcoFleet Design System — typography scale and usage guidelines',
                    },
                  ]}
                />
              </motion.div>
            </section>

            {/* 03 – Spacing System */}
            <section id={TOC_SECTIONS[2].id}>
              <motion.div {...rv()}>
                <SectionNum n="03" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Spacing System
                </h2>
                <p className="text-slate-500 mb-8">
                  Consistent spacing is what makes an interface feel considered rather than assembled.
                  A predictable rhythm across the layout reduces visual noise and helps users focus
                  on content.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  The spacing system follows a base-4 scale, giving every element (from padding
                  inside a button to the gap between sections) a home within a defined set of
                  values. Layout decisions never have to be arbitrary.
                </p>
                <p>
                  Applying the same scale throughout the interface creates a visual rhythm that
                  users feel even if they never consciously notice it. Components align, sections
                  breathe and the whole product feels intentional.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <MediaWrap>
                  <Image
                    src={asset('/DesignSystem/Spacing.png')}
                    alt="EcoFleet Design System — spacing scale and layout guidelines"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            {/* 04 – Components */}
            <section id={TOC_SECTIONS[3].id}>
              <motion.div {...rv()}>
                <SectionNum n="04" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Components
                </h2>
                <p className="text-slate-500 mb-8">
                  Reusable, composable building blocks, each designed to handle a specific job
                  clearly and hand off cleanly to engineering.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Every component in the library was designed with both use and reuse in mind.
                  Rather than designing one-off solutions for each screen, I worked from a library
                  of defined building blocks: buttons, inputs, cards, tables and modals, each with
                  documented states, variants and interaction behaviour.
                </p>
                <p>
                  For a complex product like EcoFleet, where data tables, filter panels and
                  summary cards appear throughout, having consistent component patterns made the
                  design feel cohesive even as individual screens varied significantly in purpose.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <TwoImageGrid
                  images={[
                    {
                      src: asset('/DesignSystem/Components1.png'),
                      alt: 'EcoFleet Design System — primary component set',
                    },
                    {
                      src: asset('/DesignSystem/Components2.png'),
                      alt: 'EcoFleet Design System — secondary components and variants',
                    },
                  ]}
                />
              </motion.div>
            </section>

            {/* 05 – Data Visualisation */}
            <section id={TOC_SECTIONS[4].id}>
              <motion.div {...rv()}>
                <SectionNum n="05" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Data Visualisation
                </h2>
                <p className="text-slate-500 mb-8">
                  EcoFleet is a data-intensive product. Charts and graphs are not decorative;
                  they are the primary way users understand their fleet and make decisions.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Getting data visualisation right required more than picking chart types. It meant
                  defining a consistent visual grammar: how colour encodes meaning, how axes are
                  labelled, when to use a bar versus a line, and how to present uncertainty.
                </p>
                <p>
                  The chart components were designed to work across all context sizes, from a small
                  summary card to a full-width comparison view, maintaining readability and
                  clarity at every scale.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <TwoImageGrid
                  images={[
                    {
                      src: asset('/DesignSystem/Charts1.png'),
                      alt: 'EcoFleet Design System — primary chart patterns and data visualisation',
                    },
                    {
                      src: asset('/DesignSystem/Charts2.png'),
                      alt: 'EcoFleet Design System — chart variants and comparison layouts',
                    },
                  ]}
                />
              </motion.div>
            </section>

            {/* 06 – Alerts & Feedback */}
            <section id={TOC_SECTIONS[5].id}>
              <motion.div {...rv()}>
                <SectionNum n="06" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Alerts &amp; Feedback
                </h2>
                <p className="text-slate-500 mb-8">
                  Users should always know what the system is doing and what it needs from them.
                  Clear, consistent feedback patterns reduce anxiety and build trust.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  In a product where users are configuring scenarios, running simulations and
                  reviewing results, feedback states are critical. A failed validation, a successful
                  submission, a loading state. Each of these is a moment where the interface
                  either reassures or unsettles the user.
                </p>
                <p>
                  The alert and feedback system uses semantic colour consistently: green for success,
                  amber for warnings, red for errors, and neutral tones for information. Alerts are
                  designed to be immediately legible without relying on colour alone. Icons and
                  language carry equal weight.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <motion.div
                  {...rv(0.06)}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">Alert types covered</h3>
                  </div>
                  <BulletList
                    items={[
                      'Success: an action was completed',
                      'Warning: something worth checking',
                      'Error: a blocking issue that needs attention',
                      'Info: contextual guidance, no urgency',
                    ]}
                  />
                </motion.div>

                <motion.div
                  {...rv(0.1)}
                  className="rounded-xl border border-violet-100 bg-violet-50/40 p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">Design principles</h3>
                  </div>
                  <BulletList
                    items={[
                      'Colour reinforces meaning but never carries it alone',
                      'Copy is direct. Users know exactly what happened and what to do',
                      'Inline and toast patterns for different interruption levels',
                      'Consistent placement so users always know where to look',
                    ]}
                  />
                </motion.div>
              </div>

              <motion.div {...rv(0.12)}>
                <TwoImageGrid
                  images={[
                    {
                      src: asset('/DesignSystem/Alerts1.png'),
                      alt: 'EcoFleet Design System — alert components and feedback states',
                    },
                    {
                      src: asset('/DesignSystem/Alerts2.png'),
                      alt: 'EcoFleet Design System — alert variants in context',
                    },
                  ]}
                />
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
                  A design system is an investment that pays out over time: consistency,
                  speed and trust between design and engineering.
                </p>
              </motion.div>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mb-10">
                {[
                  {
                    title: 'Faster design iteration',
                    desc: 'Starting from a shared library of components meant new screens could be assembled quickly without starting from scratch.',
                  },
                  {
                    title: 'Consistent user experience',
                    desc: 'Every screen in EcoFleet speaks the same visual language, which reduces cognitive load and builds user familiarity over time.',
                  },
                  {
                    title: 'Clearer design handoff',
                    desc: 'Engineers received documented components with defined states, reducing back-and-forth and avoiding implementation guesswork.',
                  },
                  {
                    title: 'Scalable foundations',
                    desc: 'New features could be built using existing components, keeping the product coherent as it grew in complexity.',
                  },
                  {
                    title: 'Shared team vocabulary',
                    desc: 'Giving named, documented components to the team created a common language for discussing design decisions.',
                  },
                  {
                    title: 'Reduced design debt',
                    desc: 'Centralising decisions early prevented the accumulation of one-off styles that become expensive to reconcile later.',
                  },
                ].map((card, i) => (
                  <motion.article
                    key={card.title}
                    {...rv(i * 0.06)}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                      <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.article>
                ))}
              </div>

              <motion.div {...rv(0.1)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Design systems are often treated as a luxury, something you build when there is
                  time. The reality is the opposite. The earlier you invest in shared foundations,
                  the more time you save as the product grows. Every inconsistency caught at the
                  system level is one that never makes it into the product.
                </p>
                <p>
                  For EcoFleet, the design system was not a separate project. It was the
                  scaffolding that made the product possible to build well. It is the kind of
                  work that does not always get seen, but you feel it in every screen.
                </p>
              </motion.div>
            </section>

            <OtherWorks currentSlug="design-system" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
