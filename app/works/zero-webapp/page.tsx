import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { ZeroArchitectureDiagram, ZeroHeroVisualization } from '@/components/ZeroWebappGraphics'
import { slugify } from '@/lib/slug'

const TOC_SECTIONS = [
  'Context',
  'Challenges',
  'Solution overview',
  'Key web journeys',
  'Outcomes',
  'Reflection',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'ZERO Webapp | Anupa Shefley',
  description:
    'ZERO is a web application that centralises operational data, improves data quality and gives Murphy Oil-style teams a single place to steward and govern master data.',
}

export default function ZeroWebappPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero visuals */}
        <section className="bg-teal-content/5 border-b border-teal-medium/20">
          <div className="container mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1.1fr)] gap-10 items-center">
            <div>
              <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-teal-content mb-4">
                ZERO webapp / Data Platform
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-dark mb-6">
                Operational data made trustworthy and usable.
              </h1>
              <p className="text-base md:text-lg text-teal-dark/90 leading-relaxed mb-8 max-w-xl">
                ZERO is a web application that gives operations teams a single, governed view of
                wells, pipelines and inventory. Inspired by Murphy Oil&apos;s master data
                management initiative, it turns siloed, inconsistent records into reliable insight
                that people can act on every day.
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 p-5 md:p-6 bg-white/70 border border-teal-medium/30 rounded-xl backdrop-blur-sm">
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Sites unified
                  </dt>
                  <dd className="text-2xl md:text-3xl font-serif font-semibold text-teal-dark">
                    40+
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">fields, terminals & depots</dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Data quality
                  </dt>
                  <dd className="text-2xl md:text-3xl font-serif font-semibold text-teal-dark">
                    96%
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">
                    complete on critical attributes
                  </dd>
                </div>
                <div>
                  <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-1">
                    Time to insight
                  </dt>
                  <dd className="text-2xl md:text-3xl font-serif font-semibold text-teal-dark">
                    -60%
                  </dd>
                  <dd className="text-xs md:text-sm text-teal-dark/70">reduction in manual wrangling</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(15,118,110,0.2)] bg-gradient-to-br from-teal-50 via-sky-50 to-slate-50">
                <ZeroHeroVisualization className="w-full h-full" />
              </div>
              <p className="mt-3 text-xs md:text-sm text-teal-dark/70 text-center">
                Vector illustration of ZERO&apos;s data pipelines and stewardship workspace. The
                SVG is fully editable in code for future refinements.
              </p>
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
                Web application · Data platform
              </dd>
            </div>
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                Sector
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                Energy · Operations · Master data
              </dd>
            </div>
            <div className="flex-1 min-w-[180px]">
              <dt className="text-xs md:text-sm uppercase tracking-wider font-semibold text-teal-content mb-2">
                My role
              </dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">
                UX researcher · Product designer
              </dd>
            </div>
          </dl>
        </header>

        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-20">
          {/* Context */}
          <section id={TOC_SECTIONS[0].id}>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Context</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Large upstream and midstream organisations rely on hundreds of sources to describe
              their physical world – wells, pipelines, tanks, terminals and contracts. Over time,
              each team builds its own version of the truth. Different IDs, slightly different
              names and mismatched hierarchies create friction whenever data is shared across teams.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              ZERO was designed as a browser-based workspace that sits between raw data feeds and
              downstream tools such as reporting, planning and optimisation. It consolidates
              records from operational systems, allows stewards to review and approve changes, and
              then republishes clean, governed master data back into the ecosystem.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              The visual language of this case study is inspired by Murphy Oil&apos;s master data
              management initiative{' '}
              <a
                href="https://dmurthykumar.com/p/MurphyoilMDM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-content underline-offset-4 hover:underline"
              >
                described here
              </a>
              , reimagined as an interactive web application and rendered as editable vector
              graphics in this portfolio.
            </p>
          </section>

          {/* Challenges */}
          <section id={TOC_SECTIONS[1].id}>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Challenges</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Discovery sessions with operations, production accounting and planning teams revealed
              recurring pain points:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90">
              <li>Multiple, conflicting IDs for the same physical asset across systems.</li>
              <li>Manual spreadsheet reconciliations every month-end to align volumes and status.</li>
              <li>Limited visibility into who changed what, and why conflicting versions existed.</li>
              <li>
                Difficulty explaining data lineage to new staff, making onboarding and audits time
                consuming.
              </li>
              <li>
                Decisions delayed while stakeholders debated which dataset was &quot;more
                correct&quot;.
              </li>
            </ul>
          </section>

          {/* Solution overview with architecture diagram */}
          <section id={TOC_SECTIONS[2].id}>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Solution overview</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              ZERO introduces a dedicated master data layer exposed through a modern web interface.
              Source systems continue to own operational workflows, but ZERO owns the canonical
              representation of each asset and the rules that determine &quot;golden&quot;
              records. The application guides users through reviewing proposed changes, resolving
              duplicates and approving updates which are then pushed out to consumers.
            </p>

            <div className="mt-8 rounded-2xl border border-teal-medium/30 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-teal-medium/20 flex items-center justify-between">
                <p className="text-sm font-medium text-teal-dark">
                  High-level architecture – editable SVG diagram
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-content/10 px-3 py-1 text-xs font-medium text-teal-content">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-content" />
                  Vector · code editable
                </span>
              </div>

              <div className="bg-gradient-to-br from-teal-50 via-sky-50 to-slate-50 px-2 pb-2 pt-4 md:px-4 md:pb-4">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <ZeroArchitectureDiagram className="w-full h-full" />
                </div>
              </div>
            </div>

            <p className="text-teal-dark/80 leading-relaxed mt-4 text-sm">
              Each block in the diagram is drawn in SVG rather than as a raster image. This makes
              it easy to adjust labels, colours and layout directly in code as the platform
              evolves.
            </p>
          </section>

          {/* Steward journeys */}
          <section id={TOC_SECTIONS[3].id}>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Key web journeys
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Instead of showing static screenshots, the case study highlights the core flows that
              define ZERO&apos;s UX. Each journey was prototyped at low, mid and high fidelity
              before being implemented in the production webapp.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-teal-medium/30 bg-white/80 p-4">
                <h3 className="text-base font-semibold text-teal-dark mb-2">
                  1. Investigate a duplicate
                </h3>
                <p className="text-sm text-teal-dark/80 leading-relaxed">
                  Stewards are notified when ZERO proposes a merge between records. The interface
                  presents a side-by-side comparison, lineage and impacted systems before a decision
                  is made.
                </p>
              </article>
              <article className="rounded-xl border border-teal-medium/30 bg-white/80 p-4">
                <h3 className="text-base font-semibold text-teal-dark mb-2">
                  2. Approve a new asset
                </h3>
                <p className="text-sm text-teal-dark/80 leading-relaxed">
                  New wells and terminals flow in automatically from source systems. ZERO highlights
                  missing attributes and enforces mandatory fields so that downstream models always
                  receive complete records.
                </p>
              </article>
              <article className="rounded-xl border border-teal-medium/30 bg-white/80 p-4">
                <h3 className="text-base font-semibold text-teal-dark mb-2">
                  3. Explain an outlier
                </h3>
                <p className="text-sm text-teal-dark/80 leading-relaxed">
                  When analytics teams question an outlier, the audit trail links each attribute
                  back to its source, the steward who approved it and the rule that was applied.
                </p>
              </article>
            </div>
          </section>

          {/* Outcomes */}
          <section id={TOC_SECTIONS[4].id}>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Outcomes</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Quantitative metrics were used to track the impact of ZERO over time. By aligning
              adoption targets with existing planning cycles, the team avoided a &quot;big bang&quot;
              cutover and instead matured the platform safely.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-emerald-700 mb-3">
                  Reliability
                </p>
                <p className="text-3xl font-serif font-semibold text-emerald-900 mb-1">96%</p>
                <p className="text-sm text-emerald-900/80">
                  of critical attributes met the agreed quality threshold after three release
                  cycles, up from 72% at baseline.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-5">
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-sky-800 mb-3">
                  Time saved
                </p>
                <p className="text-3xl font-serif font-semibold text-sky-900 mb-1">60%</p>
                <p className="text-sm text-sky-900/80">
                  reduction in manual reconciliation effort at month-end close for the pilot
                  business units.
                </p>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section id={TOC_SECTIONS[5].id}>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Reflection</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Designing ZERO as a web experience rather than as a purely technical platform helped
              make master data tangible for business users. Instead of hiding complexity in
              integration diagrams, the UI foregrounds real-world assets, clear decisions and
              outcomes.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              The process reinforced the value of pairing deep domain research with simple,
              constrained interfaces. Each screen is intentionally quiet, focusing attention on the
              judgement calls that actually need a human – and letting the platform automate the
              rest.
            </p>
          </section>

          {/* Other works */}
          <OtherWorks currentSlug="zero-webapp" />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

