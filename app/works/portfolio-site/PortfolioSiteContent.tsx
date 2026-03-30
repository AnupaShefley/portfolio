'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { slugify } from '@/lib/slug'
import { asset } from '@/lib/asset'

const ACCENT = '#2D6A6A'

const TOC_SECTIONS = [
  'Why build it',
  'Design intent',
  'Information architecture',
  'Visual language',
  'Interaction & motion',
  'Technical decisions',
  'AI-assisted workflow',
  'Reflection',
].map((label) => ({ id: slugify(label), label }))

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function SectionNum({ n }: { n: string }) {
  return (
    <p
      className="text-[11px] font-mono uppercase tracking-[0.2em] mb-2 select-none"
      style={{ color: `${ACCENT}99` }}
    >
      {n}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className="mt-[7px] w-[5px] h-[5px] rounded-full shrink-0"
            style={{ background: ACCENT }}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function PortfolioSiteContent() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24">
        {/* ─── Hero ───────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-slate-50">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${ACCENT}14 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, ${ACCENT}0e 0%, transparent 65%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none"
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
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                  style={{ color: ACCENT }}
                >
                  Case Study · Design &amp; Development
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
                >
                  Building a home{' '}
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${ACCENT}, #3a8a8a)`,
                    }}
                  >
                    for my work.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl"
                >
                  The site you&apos;re browsing right now. I designed and developed it from
                  scratch — a space where design thinking, UX craft and front-end engineering
                  come together.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
                >
                  {[
                    { label: 'Role', value: 'Designer & Developer' },
                    { label: 'Stack', value: 'Next.js · Tailwind' },
                    { label: 'Motion', value: 'Framer Motion' },
                    { label: 'AI-assisted', value: 'Yes' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200"
                    >
                      <dt
                        className="text-[10px] uppercase tracking-widest font-semibold mb-1 leading-tight"
                        style={{ color: ACCENT }}
                      >
                        {stat.label}
                      </dt>
                      <dd className="text-sm md:text-base font-serif font-bold text-slate-900 leading-tight">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>

              {/* Right: portfolio screenshot */}
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
                    background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${ACCENT}18, transparent 70%)`,
                    filter: 'blur(32px)',
                    transform: 'scale(1.1)',
                  }}
                />
                {/* Browser chrome */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    <div className="ml-3 flex-1 max-w-[160px] h-4 rounded-full bg-slate-200/80" />
                  </div>
                  <Image
                    src={asset('/Portfolio.png')}
                    alt="Portfolio site screenshot"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="w-full h-auto block"
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
              { label: 'Field', value: 'UX Design · Visual Design · Front-end Development' },
              { label: 'Deliverables', value: 'Live site · Case studies · Motion design' },
              { label: 'Timeline', value: 'Ongoing, iterative' },
              { label: 'Tools', value: 'Figma · VS Code · GitHub Pages' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-1.5"
                  style={{ color: ACCENT }}
                >
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
            {/* 01 — Why build it */}
            <section id={TOC_SECTIONS[0].id}>
              <motion.div {...rv()}>
                <SectionNum n="01" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5">
                  Why Build It
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  A portfolio is more than a gallery of screenshots. It&apos;s the first conversation
                  you have with someone before you&apos;ve even met them. I wanted mine to feel
                  intentional — not templated, not borrowed — something I could stand behind as
                  a genuine reflection of how I think and work.
                </p>
                <p>
                  Most portfolio templates optimise for speed-to-publish. That&apos;s useful, but
                  it comes at a cost: the design language, the hierarchy, the micro-interactions
                  — they all belong to someone else. By building from scratch, every decision
                  became mine to own — from the type scale down to how a card tilts on hover.
                </p>
                <p>
                  This wasn&apos;t about proving I could code. It was about creating a space
                  where design sensibility, attention to detail and technical fluency could
                  coexist naturally — the way they do in my day-to-day work.
                </p>
              </motion.div>
            </section>

            {/* 02 — Design intent */}
            <section id={TOC_SECTIONS[1].id}>
              <motion.div {...rv()}>
                <SectionNum n="02" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Design Intent
                </h2>
                <p className="text-slate-500 mb-8">
                  Before writing a single line of code, I set three design principles to guide
                  every decision.
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: '01',
                    title: 'Substance over spectacle',
                    desc: 'Every visual choice should serve comprehension. Generous whitespace, a restrained palette and clear typographic hierarchy keep the focus on the work — not the wrapper.',
                  },
                  {
                    step: '02',
                    title: 'Warmth and clarity',
                    desc: 'Portfolios can feel cold and transactional. I wanted this one to feel human — approachable serif headings, a muted teal palette that feels calm rather than corporate, and writing that sounds like me.',
                  },
                  {
                    step: '03',
                    title: 'Show the thinking',
                    desc: 'Each case study walks through the real process — the messy research, the trade-offs, the iterations — because good design is rarely a straight line.',
                  },
                ].map((card, i) => (
                  <motion.article
                    key={card.step}
                    {...rv(i * 0.06)}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
                  >
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ring-1"
                      style={{
                        background: `${ACCENT}12`,
                        color: ACCENT,
                        borderColor: `${ACCENT}30`,
                      }}
                    >
                      {card.step}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* ─── Callout quote ──────────────────────────────── */}
            <motion.div
              {...rv()}
              className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-center"
              style={{ background: `${ACCENT}0b`, border: `1px solid ${ACCENT}20` }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                  background: `radial-gradient(ellipse 70% 80% at 50% 50%, ${ACCENT}08, transparent)`,
                }}
              />
              <span
                className="absolute font-serif select-none pointer-events-none"
                aria-hidden
                style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px', color: `${ACCENT}25` }}
              >
                &ldquo;
              </span>
              <p className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-snug z-10">
                The best portfolio doesn&apos;t just show what you made —
                <br className="hidden sm:block" />
                it shows how you think.
              </p>
              <p className="relative mt-5 text-slate-600 z-10 max-w-md mx-auto leading-relaxed">
                Every layout choice, every transition, every word here is a design decision
                I can explain and defend.
              </p>
            </motion.div>

            {/* 03 — Information architecture */}
            <section id={TOC_SECTIONS[2].id}>
              <motion.div {...rv()}>
                <SectionNum n="03" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Information Architecture
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  The site needed to answer three questions quickly: <em>Who is this person?
                  What have they done? How can I reach them?</em> I structured the experience
                  around those questions in that order.
                </p>
                <p>
                  The landing page opens with a concise introduction, moves into the work
                  section, then closes with a contact form. Each case study follows a
                  consistent internal structure — context, challenge, process, outcome — so
                  visitors always know where they are and what comes next.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    { label: 'Hero', desc: 'Who I am and what I do — in under five seconds' },
                    { label: 'Work', desc: 'Curated projects with visual hierarchy and filtering' },
                    { label: 'Case studies', desc: 'Structured narratives with a sticky table of contents' },
                    { label: 'Contact', desc: 'Low-friction form — no barriers, no dead ends' },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest block mb-2"
                        style={{ color: `${ACCENT}80` }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.label}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* 04 — Visual language */}
            <section id={TOC_SECTIONS[3].id}>
              <motion.div {...rv()}>
                <SectionNum n="04" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Visual Language
                </h2>
                <p className="text-slate-500 mb-8">
                  I built a small but deliberate design system to keep the site cohesive as it
                  grows.
                </p>
              </motion.div>

              <div className="space-y-10">
                {/* Colour */}
                <motion.div {...rv(0.05)}>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">Colour palette</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    The palette centres on a deep, muted teal — calm and professional without
                    being sterile. Warm slate tones handle body text, while small accents of
                    violet mark AI-assisted work. The restrained range avoids visual noise and
                    lets the project imagery take centre stage.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { hex: '#2D6A6A', label: 'Teal dark' },
                      { hex: '#3d7f7f', label: 'Teal content' },
                      { hex: '#e2eeee', label: 'Teal light' },
                      { hex: '#1e293b', label: 'Slate 800' },
                      { hex: '#64748b', label: 'Slate 500' },
                      { hex: '#7c3aed', label: 'Violet accent' },
                    ].map((c) => (
                      <div key={c.hex} className="flex items-center gap-2.5">
                        <span
                          className="w-8 h-8 rounded-lg ring-1 ring-slate-200 shrink-0"
                          style={{ background: c.hex }}
                        />
                        <div>
                          <p className="text-xs font-semibold text-slate-900">{c.label}</p>
                          <p className="text-[10px] font-mono text-slate-400 uppercase">{c.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Typography */}
                <motion.div {...rv(0.05)}>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">Typography</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Headings use a serif typeface to add warmth and editorial character. Body
                    text stays in a clean sans-serif for readability. The pairing creates a
                    subtle contrast — personal yet polished — that mirrors the tone I wanted
                    for the whole site.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-5">
                      <p className="text-2xl font-serif font-bold text-slate-900 mb-1">Serif</p>
                      <p className="text-xs text-slate-400">Headings, titles, hero text</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5">
                      <p className="text-2xl font-sans font-medium text-slate-900 mb-1">Sans-serif</p>
                      <p className="text-xs text-slate-400">Body, labels, navigation</p>
                    </div>
                  </div>
                </motion.div>

                {/* Spacing & layout */}
                <motion.div {...rv(0.05)}>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">Spacing &amp; layout</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Generous whitespace gives content room to breathe. The two-column project
                    grid provides visual rhythm on desktop while collapsing gracefully on
                    mobile. Case study pages use a narrower reading column (max 768 px) with
                    a sticky sidebar for navigation — an editorial pattern that keeps long
                    narratives scannable.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 05 — Interaction & motion */}
            <section id={TOC_SECTIONS[4].id}>
              <motion.div {...rv()}>
                <SectionNum n="05" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Interaction &amp; Motion
                </h2>
                <p className="text-slate-500 mb-8">
                  Motion should feel purposeful, not performative. Every animation here earns
                  its place.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    num: '1',
                    title: 'Scroll-triggered reveals',
                    desc: 'Content fades and slides into view as the user scrolls, providing a sense of progression without being distracting. Each section animates once and stays put — no replay loops.',
                  },
                  {
                    num: '2',
                    title: 'Tilt cards',
                    desc: 'Project cards respond subtly to cursor position with a 3D tilt effect. It adds a tactile quality that invites exploration while keeping the interface professional.',
                  },
                  {
                    num: '3',
                    title: 'Custom cursor on project links',
                    desc: 'Hovering over a project link replaces the default cursor with a soft "Visit" circle. It signals interactivity in a way that feels considered rather than gimmicky.',
                  },
                  {
                    num: '4',
                    title: 'Staggered entry animations',
                    desc: 'In the project grid, cards enter with a staggered delay based on their position — left column first, then right. This creates a natural reading rhythm rather than everything appearing at once.',
                  },
                  {
                    num: '5',
                    title: 'Smooth scroll & sticky navigation',
                    desc: 'Case study pages use smooth anchor scrolling paired with a sticky table of contents that highlights the active section. It helps readers orient themselves in long-form content.',
                  },
                ].map((item) => (
                  <motion.div key={item.num} {...rv()} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ring-1 shrink-0"
                        style={{
                          background: `${ACCENT}12`,
                          color: ACCENT,
                          borderColor: `${ACCENT}30`,
                        }}
                      >
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

            {/* 06 — Technical decisions */}
            <section id={TOC_SECTIONS[5].id}>
              <motion.div {...rv()}>
                <SectionNum n="06" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Technical Decisions
                </h2>
                <p className="text-slate-500 mb-8">
                  Technology choices were driven by the same principle as the design: keep it
                  lean, make it fast, let the content lead.
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Next.js with static export',
                    desc: 'Server components handle metadata and layout. Static export keeps hosting simple and performance instant — no server runtime, just pre-rendered HTML deployed to GitHub Pages.',
                  },
                  {
                    title: 'Tailwind CSS',
                    desc: 'Utility-first styling keeps the design system small and co-located with the markup. No separate stylesheets to drift out of sync, no naming debates — just visual decisions expressed directly in code.',
                  },
                  {
                    title: 'Framer Motion',
                    desc: 'Declarative animations that integrate naturally with React. Scroll-triggered reveals, layout transitions and gesture responses are all handled in a single, composable API.',
                  },
                  {
                    title: 'TypeScript throughout',
                    desc: 'Every component, data model and utility is typed. It catches errors early, makes refactoring safe and keeps the codebase honest as it grows.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...rv(i * 0.06)}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: ACCENT }}
                      />
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div {...rv(0.1)} className="mt-8">
                <h3 className="text-base font-semibold text-slate-900 mb-3">Performance focus</h3>
                <BulletList
                  items={[
                    'Dynamic imports for heavy case study pages — code-split per route',
                    'Optimised images with next/image — responsive sizes and lazy loading',
                    'Video posters and preload="none" for project cards — no unnecessary bandwidth',
                    'Minimal JavaScript footprint — animations are CSS-driven where possible',
                  ]}
                />
              </motion.div>
            </section>

            {/* 07 — AI-assisted workflow */}
            <section id={TOC_SECTIONS[6].id}>
              <motion.div {...rv()}>
                <SectionNum n="07" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                  AI-Assisted Workflow
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  I used AI tools throughout the build — not as a shortcut, but as a
                  collaborator. The distinction matters. AI didn&apos;t make the design
                  decisions; it helped me execute them faster and explore more variations
                  than I could have alone.
                </p>
                <p>
                  Component scaffolding, animation tuning, responsive edge cases, copy
                  refinement — these are the tasks where AI accelerated my process. The
                  creative direction, information architecture and UX rationale remained
                  entirely my own.
                </p>
              </motion.div>

              <motion.div {...rv(0.1)}>
                <div
                  className="rounded-xl px-6 py-5"
                  style={{ background: `${ACCENT}0d`, borderLeft: `4px solid ${ACCENT}` }}
                >
                  <p
                    className="text-[10px] font-mono uppercase tracking-widest mb-2"
                    style={{ color: `${ACCENT}80` }}
                  >
                    My perspective
                  </p>
                  <p className="font-semibold text-slate-900 text-base md:text-lg leading-snug">
                    AI is a force multiplier for designers who know what they want to build.
                    It doesn&apos;t replace taste — it frees you up to exercise it more often.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* 08 — Reflection */}
            <section id={TOC_SECTIONS[7].id}>
              <motion.div {...rv()}>
                <SectionNum n="08" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
                  Reflection
                </h2>
              </motion.div>
              <motion.div {...rv(0.05)} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Building this portfolio was, unexpectedly, one of the most rewarding design
                  projects I&apos;ve worked on. There was no stakeholder brief, no sprint
                  deadline, no compromise between competing priorities. Just a clear question:
                  <em> how do I want my work to be experienced?</em>
                </p>
                <p>
                  That freedom made every decision feel consequential. The palette, the motion
                  timing, the way a case study unfolds — these weren&apos;t handed down from a
                  brand guide. They&apos;re choices I made and can articulate the reasoning
                  behind each one.
                </p>
                <p>
                  The site is intentionally iterative. As I complete new projects, the portfolio
                  grows with me. The component architecture and data-driven project list make
                  adding a new case study as simple as writing the content — the layout,
                  navigation and cross-linking take care of themselves.
                </p>
                <p>
                  If this site tells you anything about how I work, I hope it&apos;s this:
                  I care about the details that most people scroll past — and I believe those
                  details are exactly what separate good design from great design.
                </p>
              </motion.div>
            </section>

            <OtherWorks currentSlug="portfolio-site" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
