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
  'Problem and Design Goals',
  'Designing Safer Input Parameters',
  'From Raw Results to Interpretable Duty Cycles',
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

export default function TelematicsContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24">
        {/* ─── Hero ─────────────────────────────────────────────── */}
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
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">

              {/* Left: text */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-teal-600 mb-4"
                >
                  Case Study · UX / UI Design
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
                >
                  From raw data{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                    to trusted duty cycles.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-lg"
                >
                  Redesigning a telematics duty-cycle analysis workflow — turning obscure parameters
                  and raw results into clear, quality-checked outputs that fleet teams can act on.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  {[
                    { label: 'Field', value: 'Telematics, Data UX' },
                    { label: 'Sector', value: 'Commercial Fleets' },
                    { label: 'Role', value: 'UX / UI Designer' },
                    { label: 'Company', value: 'Dynamon' },
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

              {/* Right: hero screenshot */}
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
                    src={asset('/newTelematicsResults/Screenshot 2026-02-11 120929.png')}
                    alt="Redesigned telematics results screen showing duty cycles and quality status"
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

        {/* ─── TOC + content ────────────────────────────────────── */}
        <div className="w-full max-w-[1400px] mx-auto pl-2 md:pl-4 pr-4 md:pr-8 flex gap-2 lg:gap-4 mt-12">
          <ProjectToc sections={TOC_SECTIONS} />

          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-16">

            {/* 01 – Context */}
            <section id={TOC_SECTIONS[0].id}>
              <motion.div {...rv()}>
                <SectionNum n="01" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5">
                  Context
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Commercial fleets often collect large volumes of telematics data — distance
                  travelled, speeds, stops and dwell time — but struggle to turn that into clear duty
                  cycles they can reason about.
                </p>
                <p>
                  Our original internal tool accepted a dense set of parameters, ran a batch
                  analysis, and returned a technical-looking results table with pass or fail flags.
                  While powerful, this workflow made it hard for non-technical users to trust the
                  outcome. Small changes in configuration could completely change which vehicles
                  passed quality analysis. Teams needed a way to see the story behind each duty cycle
                  rather than just a binary result.
                </p>
              </motion.div>
            </section>

            {/* 02 – Problem and Design Goals */}
            <section id={TOC_SECTIONS[1].id}>
              <motion.div {...rv()}>
                <SectionNum n="02" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">
                  Problem and Design Goals
                </h2>
                <p className="text-slate-500 mb-8">
                  The legacy interface was optimised for analysts who already knew the underlying
                  algorithms.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Parameters were scattered across the page, intermediate steps were hidden, and
                  quality scores were expressed in language that meant little to operations or
                  commercial teams.
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: '01',
                    badgeClass: 'bg-teal-50 ring-teal-200 text-teal-600',
                    dotClass: 'bg-teal-400',
                    title: 'Understandable inputs',
                    desc: 'Make input parameters safe to adjust, with clear groupings and sensible defaults so non-technical users can get started confidently.',
                  },
                  {
                    step: '02',
                    badgeClass: 'bg-cyan-50 ring-cyan-200 text-cyan-600',
                    dotClass: 'bg-cyan-400',
                    title: 'Visual duty cycles',
                    desc: 'Present duty cycles so that patterns and outliers are obvious without reading every row of a table.',
                  },
                  {
                    step: '03',
                    badgeClass: 'bg-slate-50 ring-slate-200 text-slate-600',
                    dotClass: 'bg-slate-400',
                    title: 'Plain-language quality',
                    desc: 'Explain quality decisions in plain language, highlighting why a given duty cycle has passed or failed.',
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

            {/* ─── Callout ──────────────────────────────────────────── */}
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
                The problem wasn&apos;t the analysis —
                <br className="hidden sm:block" />
                it was the lack of explanation.
              </p>
              <p className="relative mt-5 text-slate-500 z-10 max-w-md mx-auto leading-relaxed">
                Teams needed to see the story behind each duty cycle, not just a binary pass or fail.
              </p>
            </motion.div>

            {/* 03 – Designing Safer Input Parameters */}
            <section id={TOC_SECTIONS[2].id}>
              <motion.div {...rv()}>
                <SectionNum n="03" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Designing Safer Input Parameters
                </h2>
                <p className="text-slate-500 mb-8">
                  Instead of a long mixed list of numeric fields, the new input screen groups
                  parameters into logical sections with helper copy and sensible defaults.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-6">
                <p>
                  Each section — journey structure, stop detection and analysis horizon — includes
                  short helper copy so that users can get started quickly and only adjust what they
                  understand. Removing the wall of undifferentiated fields made the form feel
                  approachable and reduced the chance of accidental misconfiguration.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-400 mb-2">
                      Before
                    </p>
                    <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                      <Image
                        src={asset('/analyseData/Screenshot 2026-02-11 115915.png')}
                        alt="Original parameter-heavy input view for telematics analysis"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto block"
                        quality={90}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-teal-600 mb-2">
                      After
                    </p>
                    <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                      <Image
                        src={asset('/newTelematicsResults/Screenshot 2026-02-11 120940.png')}
                        alt="Redesigned structured input view for telematics duty-cycle analysis"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto block"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* 04 – From Raw Results to Interpretable Duty Cycles */}
            <section id={TOC_SECTIONS[3].id}>
              <motion.div {...rv()}>
                <SectionNum n="04" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  From Raw Results to Interpretable Duty Cycles
                </h2>
                <p className="text-slate-500 mb-8">
                  The heart of the redesign is the results view — duty cycles surfaced as cards with
                  visual summaries and plain-language quality verdicts.
                </p>
              </motion.div>

              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Instead of a flat table, duty cycles are grouped by vehicle and route. Each card
                  shows a compact visual summary, a clear quality verdict and a short explanation of
                  what contributed most to the score.
                </p>
                <p>
                  Quality rules themselves did not change, but the way they are expressed did. Users
                  can now see which checks failed — for example, missing weekends or inconsistent
                  dwell times — and what would need to change before the duty cycle could be trusted.
                </p>
              </motion.div>

              <motion.div {...rv(0.08)}>
                <div className="mb-3">
                  <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-400 mb-2">
                    Before — flat table with binary pass / fail
                  </p>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                    <Image
                      src={asset('/analyseData/Screenshot 2026-02-11 115850.png')}
                      alt="Legacy telematics analysis results table with pass or fail flags"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto block"
                      quality={90}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div {...rv(0.12)}>
                <MediaWrap>
                  <Image
                    src={asset('/newTelematicsResults/Screenshot 2026-02-11 121006.png')}
                    alt="Redesigned telematics results dashboard highlighting duty-cycle quality"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 1144px"
                    className="w-full h-auto block"
                    quality={90}
                  />
                </MediaWrap>
              </motion.div>
            </section>

            {/* 05 – Impact */}
            <section id={TOC_SECTIONS[4].id}>
              <motion.div {...rv()}>
                <SectionNum n="05" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Impact
                </h2>
                <p className="text-slate-500 mb-8">
                  The redesign gave fleet and analytics teams a shared, visual language for talking
                  about duty cycles.
                </p>
              </motion.div>

              <div className="grid gap-3 md:grid-cols-2 mb-10">
                {[
                  {
                    title: 'Shared understanding',
                    desc: 'Fleet and analytics teams now have a common visual language for discussing duty cycles — reducing misalignment between technical and commercial stakeholders.',
                  },
                  {
                    title: 'Safer configuration',
                    desc: 'Grouped inputs with helper copy reduced accidental misconfiguration and made analysts less reliant on tribal knowledge.',
                  },
                  {
                    title: 'Less black-box',
                    desc: 'Plain-language quality explanations mean users can see exactly why a cycle passed or failed, and what to fix.',
                  },
                  {
                    title: 'Better decisions',
                    desc: "It's now easier to decide when data is good enough to drive decisions — and when more cleaning or collection is required.",
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

              <motion.div {...rv(0.1)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Analysts can still fine-tune parameters when needed, but the default experience is
                  aimed at helping more people understand what the system is doing and why particular
                  vehicles pass or fail. The workflow now feels less like a black box — the
                  combination of contextual inputs, visual duty cycles and plain-language quality
                  explanations makes the whole process more legible.
                </p>
              </motion.div>
            </section>

            <OtherWorks currentSlug="telematics-analysis" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
