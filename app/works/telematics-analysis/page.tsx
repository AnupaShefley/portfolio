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
  'Context',
  'Problem and Design Goals',
  'Designing Safer Input Parameters',
  'From Raw Results to Interpretable Duty Cycles',
  'Impact',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'Telematics Analysis | Anupa Shefley',
  description:
    'A redesign of a telematics duty-cycle analysis workflow – from raw journeys and parameters to clear, quality-checked duty cycles that teams can trust.',
}

export default function TelematicsAnalysisPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero */}
        <header className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-teal-dark mb-4 tracking-tight pt-4">
            Telematics Analysis
          </h1>
          <div
            className="h-1 w-20 rounded-full bg-gradient-to-r from-teal-content to-teal-light mb-6"
            aria-hidden
          />
          <p className="text-base md:text-lg lg:text-xl text-teal-dark/90 max-w-3xl mb-6 leading-snug">
            Redesigning a duty-cycle analysis workflow so that fleets can move from raw telematics
            feeds and obscure parameters to clear, trustworthy duty cycles and quality scores.
          </p>
          <dl className="flex flex-wrap gap-4 md:gap-6 mt-4 p-5 md:p-6 rounded-xl bg-teal-content/10 border border-teal-medium/30">
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                Field
              </dt>
              <dd className="text-sm text-teal-dark font-medium">Telematics, Data UX, Service Design</dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                Sector
              </dt>
              <dd className="text-sm text-teal-dark font-medium">Commercial Fleets, Analytics</dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                My Role
              </dt>
              <dd className="text-sm text-teal-dark font-medium">UX / UI Designer, Product Designer</dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">
                Company
              </dt>
              <dd className="text-sm text-teal-dark font-medium">Dynamon</dd>
            </div>
          </dl>
        </header>

        {/* Before / after duty-cycle views on data backdrop */}
        <section className="relative w-full mb-16 md:mb-20 overflow-visible">
          {/* Background image spanning full width */}
          <div className="relative w-full min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px]">
            <Image
              src={asset('/background.jpg')}
              alt="Abstract telematics data visualisation used as a backdrop"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>

          {/* Overlay: top half on image, bottom half overflows; no borders, screenshots only */}
          <div className="absolute top-4 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-8 lg:px-12 pointer-events-none">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] translate-y-1/2 pointer-events-auto aspect-[4/3]">
              <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase text-white/90 drop-shadow-sm whitespace-nowrap">
                Before
              </p>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={asset('/analyseData/Screenshot 2026-02-11 115850.png')}
                  alt="Legacy telematics analysis screen for duty cycles"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 42vw, 480px"
                />
              </div>
            </div>

            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] translate-y-1/2 pointer-events-auto aspect-[4/3]">
              <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase text-white/90 drop-shadow-sm whitespace-nowrap">
                After
              </p>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={asset('/newTelematicsResults/Screenshot 2026-02-11 120929.png')}
                  alt="Redesigned telematics results screen showing duty cycles and quality status"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 42vw, 480px"
                />
              </div>
            </div>
          </div>

          <div className="mt-32 sm:mt-36 md:mt-40 px-4 md:px-8 max-w-3xl mx-auto text-center">
            <p className="text-xs md:text-sm text-teal-dark/80 italic">
              Side-by-side comparison of the original duty-cycle results page and the redesigned experience,
              presented on a continuous telematics data backdrop.
            </p>
          </div>
        </section>

        {/* Main narrative */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />
          <div className="min-w-0 flex-1 max-w-6xl space-y-14 md:space-y-16">
          {/* Context */}
          <section id={TOC_SECTIONS[0].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Context
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Commercial fleets often collect large volumes of telematics data – distance travelled, speeds,
              stops and dwell time – but struggle to turn that into clear duty cycles they can reason about.
              Our original internal tool accepted a dense set of parameters, ran a batch analysis, and then
              returned a technical-looking results table with pass or fail flags.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              While powerful, this workflow made it hard for non-technical users to trust the outcome. Small
              changes in configuration could completely change which vehicles passed quality analysis. Teams
              needed a way to see the story behind each duty cycle rather than just a binary result.
            </p>
          </section>

          {/* Problem and goals */}
          <section id={TOC_SECTIONS[1].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Problem and Design Goals
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The legacy interface was optimised for analysts who already knew the underlying algorithms.
              Parameters were scattered across the page, intermediate steps were hidden and quality scores
              were expressed in language that meant little to operations or commercial teams.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The redesign focused on three goals:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90 text-base">
              <li>Make input parameters understandable and safe to adjust.</li>
              <li>
                Present duty cycles visually so that patterns and outliers are obvious without reading every
                row.
              </li>
              <li>
                Explain quality decisions in plain language, highlighting why a given duty cycle has passed or
                failed.
              </li>
            </ul>
          </section>

          {/* Input experience */}
          <section id={TOC_SECTIONS[2].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Designing Safer Input Parameters
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Instead of a long, mixed list of numeric fields, the new input screen groups parameters into a
              small number of logical sections: journey structure, stop detection and analysis horizon. Each
              section includes short helper copy and sensible defaults so that users can get started quickly
              and only adjust what they understand.
            </p>
            <AnimatedDiv delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/analyseData/Screenshot 2026-02-11 115915.png')}
                    alt="Original parameter-heavy input view for telematics analysis"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal-medium/25 shadow-lg bg-slate-950/80">
                  <Image
                    src={asset('/newTelematicsResults/Screenshot 2026-02-11 120940.png')}
                    alt="Redesigned, structured input view for telematics duty-cycle analysis"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimatedDiv>
          </section>

          {/* Results and quality analysis */}
          <section id={TOC_SECTIONS[3].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              From Raw Results to Interpretable Duty Cycles
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The heart of the redesign is the results view. Instead of a flat table, duty cycles are
              surfaced as cards grouped by vehicle and route. Each card shows a compact visual summary of the
              cycle, a clear quality verdict and a short explanation of what contributed most to the score.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base">
              Quality rules themselves did not change, but the way they are expressed did. Users can now see
              which checks failed (for example, missing weekends or inconsistent dwell times) and what would
              need to change in the underlying data before the duty cycle could be trusted.
            </p>
            <AnimatedDiv delay={0.12}>
              <LaptopMockup angle="none" className="max-w-5xl mx-auto">
                <Image
                  src={asset('/newTelematicsResults/Screenshot 2026-02-11 121006.png')}
                  alt="Redesigned telematics results dashboard highlighting duty-cycle quality"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 1280px) 100vw, 1024px"
                />
              </LaptopMockup>
            </AnimatedDiv>
          </section>

          {/* Impact */}
          <section id={TOC_SECTIONS[4].id}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Impact
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Fleet and analytics teams now have a shared, visual language for talking about duty cycles.
              Analysts can still fine-tune parameters when needed, but the default experience is aimed at
              helping more people understand what the system is doing and why particular vehicles pass or
              fail.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Most importantly, the workflow now feels less like a black box. The combination of contextual
              inputs, visual duty cycles and plain-language quality explanations makes it easier to decide
              when the data is good enough to drive decisions – and when more cleaning or data collection is
              required.
            </p>
          </section>

          {/* Other Works */}
          <section>
            <OtherWorks currentSlug="telematics-analysis" />
          </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

