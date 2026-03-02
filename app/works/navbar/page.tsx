import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { NavbarStructureDiagram } from '@/components/NavbarGraphics'
import { asset } from '@/lib/asset'
import { slugify } from '@/lib/slug'

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

export const metadata: Metadata = {
  title: 'Navigation Bar Redesign | Anupa Shefley',
  description:
    'Case study on redesigning the global navigation bar to improve findability, consistency and user flows across the product.',
}

export default function NavbarPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero visuals */}
        <section className="bg-teal-content/5 border-b border-teal-medium/20">
          <div className="container mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1.1fr)] gap-10 items-center">
            <div>
              <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-teal-content mb-4">
                Navigation Bar / UX · UI Design
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-dark mb-6">
                A clearer path through the product.
              </h1>
              <p className="text-base md:text-lg text-teal-dark/90 leading-relaxed mb-8 max-w-xl">
                This case study documents the redesign of the global navigation bar to improve
                findability, visual hierarchy and consistency. The goal was to give users a
                predictable, scannable structure so they can reach key areas and actions without
                friction.
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 p-5 md:p-6 bg-white/70 border border-teal-medium/30 rounded-xl backdrop-blur-sm">
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Avg. time to find
                  </dt>
                  <dd className="text-2xl md:text-3xl font-serif font-semibold text-teal-dark">
                    17% 
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">reduction</dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Hierarchy
                  </dt>
                  <dd className="text-2xl md:text-3xl font-serif font-semibold text-teal-dark">
                    Clear
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">
                    primary vs secondary
                  </dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    User Confidence
                  </dt>
                  <dd className="text-2xl md:text-3xl font-serif font-semibold text-teal-dark">
                    Improved
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">through reduced cognitive load</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div
                className="relative w-full min-w-0 max-w-xl mx-auto"
                style={{ maxWidth: 'min(calc(100vw - 2rem), 1144px)' }}
              >
                <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src={asset('/navbar/NavMenu.png')}
                    alt="Navigation bar redesign overview – header visual"
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="w-full h-auto"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meta panel */}
        <header className="container mx-auto px-6 mb-16 md:mb-20 mt-10 md:mt-16">
          <dl className="flex flex-wrap gap-4 md:gap-6 p-6 md:p-8 bg-teal-content/10 border border-teal-medium/30 rounded-2xl backdrop-blur-sm">
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                Field
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                UX · UI design · Information architecture
              </dd>
            </div>
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                Deliverables
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                Nav structure  · Visual design
              </dd>
            </div>
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                My role
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                 Product designer
              </dd>
            </div>
          </dl>
        </header>

        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-20">
            {/* Project Overview */}
            <section id={TOC_SECTIONS[0].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Project Overview</h2>
              <p className="text-teal-dark/90 leading-relaxed mb-2">
              When I joined Dynamon, I began working on ZERO, the company’s core fleet electrification platform. ZERO helps fleet operators upload operational data, run electrification simulations, and analyse outputs to make informed decisions about transitioning to electric vehicles.
              </p>

              <p className="text-teal-dark/90 leading-relaxed mb-2">
              The platform contained powerful analytical capabilities, but users struggled to navigate the system effectively. The navigation structure did not reflect the complexity or progression of the electrification workflow, making it difficult for users to understand where to begin, where they were, and how to move forward.
              </p>
              <p className="text-teal-dark/90 leading-relaxed">
              I led a redesign of the navigation system, transitioning from a horizontal top navigation to a scalable vertical sidebar, while simultaneously restructuring the product’s information architecture.
              </p>
            </section>

            {/* Problem */}
            <section id={TOC_SECTIONS[1].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Problem</h2>
              <p className="text-teal-dark/90 leading-relaxed mb-8">
                The existing top navigation created several critical usability and scalability
                issues.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Users didn&apos;t know where to start
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed mb-3">
                    ZERO supports a multi-stage workflow involving:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal-dark/90 mb-3">
                    <li>Uploading fleet data</li>
                    <li>Running simulations</li>
                    <li>Analysing results</li>
                  </ul>
                  <p className="text-teal-dark/90 leading-relaxed mb-4">
                    However, the navigation did not reflect this progression. Users frequently
                    expressed uncertainty about where to begin or what to do next. This increased
                    cognitive load and reduced confidence in using the platform.
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
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Navigation did not scale with product growth
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed mb-3">
                    As ZERO evolved, new features and pages were added. The horizontal navigation
                    quickly became overcrowded, making it difficult to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal-dark/90 mb-3">
                    <li>Add new sections without clutter</li>
                    <li>Maintain clear structure</li>
                    <li>Support future expansion</li>
                  </ul>
                  <p className="text-teal-dark/90 leading-relaxed mb-4">
                    This created long-term scalability limitations.
                  </p>
                  <MediaWrap>
                    <Image
                      src={asset('/navbar/OldvsNew.svg')}
                      alt="Before vs after – old horizontal navigation vs new scalable structure"
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 1144px"
                      className="w-full h-auto"
                    />
                  </MediaWrap>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Information architecture did not match user mental models
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    The navigation structure reflected internal system organisation rather than user
                    workflows. Users had to explore multiple areas to complete a single task, making
                    the experience inefficient and fragmented.
                  </p>
                </div>
              </div>
            </section>

            {/* Solution overview with structure diagram */}
            <section id={TOC_SECTIONS[2].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Solution: Introduce a Vertical Sidebar and New Information Architecture
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
              To address these challenges, I redesigned the navigation system across two key dimensions:
•	User experience and information architecture
•	Visual design and interaction behaviour
Moving to a vertical sidebar removed previous layout constraints and allowed us to create a navigation structure that reflected the true organisation of the product.
Instead of forcing content into limited horizontal space, we could now expose meaningful categories and logical groupings, improving discoverability and reducing reliance on deep navigation layers.

              </p>

              <MediaWrap>
                <video
                  src={asset('/navbar/Overview.mp4')}
                  loop
                  playsInline
                  muted
                  autoPlay
                  className="w-full h-auto block"
                >
                  Your browser does not support the video tag.
                </video>
              </MediaWrap>



            </section>

            {/* Research and Discovery */}
            <section id={TOC_SECTIONS[3].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Research and Discovery
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-8">
                To understand the problem deeply, I conducted several discovery activities.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    User Observation and Feedback
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed mb-3">
                    I observed users interacting with ZERO during onboarding and regular use.
                    Common behaviours included:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal-dark/90 mb-3">
                    <li>Hesitation after logging in</li>
                    <li>Opening multiple sections to find the right page</li>
                    <li>Difficulty understanding platform structure</li>
                    <li>Asking for guidance on where to begin</li>
                  </ul>
                  <p className="text-teal-dark/90 leading-relaxed">
                    This confirmed that navigation was a core usability issue.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Workflow Analysis
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed mb-3">
                    I mapped the typical electrification journey within the platform. This revealed
                    a clear progression:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-teal-dark/90 mb-3">
                    <li>Data input and preparation</li>
                    <li>Simulation and modelling</li>
                    <li>Results analysis and decision-making</li>
                  </ol>
                  <p className="text-teal-dark/90 leading-relaxed mb-4">
                    However, the navigation did not reflect this progression. This mismatch created
                    friction.
                  </p>
                  <MediaWrap>
                    <video
                      src={asset('/navbar/newUserflow.mp4')}
                      loop
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-auto block"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </MediaWrap>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Key Insight
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    The core issue was not just the visual design of the navigation—it was the
                    underlying information architecture. The navigation needed to reflect the
                    user&apos;s workflow, not the system&apos;s internal structure. This required both
                    structural and visual redesign.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Design Strategy
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed mb-3">
                    The solution focused on two key changes:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-teal-dark/90">
                    <li>Transition from top navigation to vertical sidebar</li>
                    <li>Redesign information architecture around user workflows</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Information architecture redesign */}
            <section id={TOC_SECTIONS[4].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Information architecture redesign
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                I reorganised the platform into clear workflow-based groups aligned with the
                electrification journey. This structure matched user mental models and reduced
                friction.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <article className="rounded-xl border border-teal-medium/30 bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-teal-dark mb-2">
                    Data setup and inputs
                  </h3>
                  <p className="text-sm text-teal-dark/80 leading-relaxed">
                    Upload, validate and prepare fleet data—vehicle lists, duty cycles, depots and
                    energy tariffs. One clear starting point so users know where to begin.
                  </p>
                </article>
                <article className="rounded-xl border border-teal-medium/30 bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-teal-dark mb-2">
                    Simulation and modelling
                  </h3>
                  <p className="text-sm text-teal-dark/80 leading-relaxed">
                    Run electrification scenarios and models. Configuration, scenario selection
                    and parameters in one place—logical step from data in to run analysis.
                  </p>
                </article>
                <article className="rounded-xl border border-teal-medium/30 bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-teal-dark mb-2">
                    Results and analysis
                  </h3>
                  <p className="text-sm text-teal-dark/80 leading-relaxed">
                    Interpret outputs and make decisions. Dashboards, reports, comparisons and
                    exports in a dedicated area—data to decision in a single flow.
                  </p>
                </article>
              </div>
            </section>

            {/* Interaction Design */}
            <section id={TOC_SECTIONS[5].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Interaction Design
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-8">
                I introduced several behavioural improvements to enhance usability.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Collapsible Sidebar
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    Users could collapse the sidebar to maximise workspace when needed, giving them
                    control over screen space.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Auto-collapse Behaviour
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    During early testing, users opened multiple sections, causing clutter. I
                    introduced auto-collapse so only one section remained open at a time, improving
                    clarity.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Active State Highlighting
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    Users needed clearer feedback on their current location. I introduced strong
                    active states to improve orientation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Hover-to-expand Interaction
                  </h3>
                  <p className="text-teal-dark/90 leading-relaxed">
                    When collapsed, the sidebar could temporarily expand on hover, balancing space
                    efficiency with accessibility.
                  </p>
                </div>

                </div>
            </section>

            {/* Outcome and Impact */}
            <section id={TOC_SECTIONS[6].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
                Outcome and Impact
              </h2>
              <p className="text-teal-dark/90 leading-relaxed mb-8">
                The redesign significantly improved usability and scalability.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-teal-medium/30 bg-white/80 p-5">
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    User Experience Improvements
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-teal-dark/90 text-sm">
                    <li>Improved clarity and orientation</li>
                    <li>Reduced cognitive load</li>
                    <li>Faster navigation between sections</li>
                    <li>Improved user confidence</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-teal-medium/30 bg-white/80 p-5">
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Product Improvements
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-teal-dark/90 text-sm">
                    <li>Scalable navigation system</li>
                    <li>Information architecture aligned with workflows</li>
                    <li>Strong foundation for future features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Reflection */}
            <section id={TOC_SECTIONS[7].id}>
              <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Reflection</h2>
              <p className="text-teal-dark/90 leading-relaxed mb-6">
                Treating the navbar as a product in its own right – with clear goals, user flows and
                success criteria – helped move the conversation from &quot;where do we put this
                link?&quot; to &quot;how do we help users get where they need to go?&quot; Constraining
                the number of primary items and defining a single CTA forced prioritisation that
                benefited both usability and business objectives.
              </p>
              <p className="text-teal-dark/90 leading-relaxed">
                The same discipline – clear hierarchy, constrained choices, one primary CTA – can
                be applied to other global UI elements so the whole experience stays coherent as
                the product grows.
              </p>
            </section>

            {/* Other works */}
            <OtherWorks currentSlug="navbar" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
