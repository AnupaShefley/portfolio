import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { AnimatedDiv } from '@/components/AnimatedSection'
import { asset } from '@/lib/asset'
import { slugify } from '@/lib/slug'

const ACCENT = '#C2414B'

const TOC_SECTIONS = [
  'Original Dashboard',
  'Design Principles',
  'Progress Through ZERO',
  'Guided First Steps',
  'Step-Based Navigation',
  'Outcome',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'Dashboard Redesign | Anupa Shefley',
  description:
    'A case study on redesigning the ZERO dashboard to make progress visible, guide first actions and connect each stage of the workflow more clearly.',
}

function SectionNum({ n }: { n: string }) {
  return (
    <p
      className="text-[11px] font-mono uppercase tracking-[0.22em] mb-2 select-none"
      style={{ color: `${ACCENT}99` }}
    >
      {n}
    </p>
  )
}

type MediaCardProps = {
  src: string
  alt: string
  caption?: string
  video?: boolean
  poster?: string
  aspectClassName?: string
  objectClassName?: string
}

function MediaCard({
  src,
  alt,
  caption,
  video = false,
  poster,
  aspectClassName = 'aspect-[16/10]',
  objectClassName = 'object-cover',
}: MediaCardProps) {
  return (
    <div>
      <div
        className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] ${aspectClassName}`}
      >
        {video ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full ${objectClassName}`}
            aria-label={alt}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className={objectClassName}
            sizes="(max-width: 768px) 100vw, 768px"
          />
        )}
      </div>
      {caption ? <p className="mt-2.5 text-sm text-slate-500 italic">{caption}</p> : null}
    </div>
  )
}

export default function DashboardRedesignPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24 pt-20 md:pb-28 md:pt-24">
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background: `radial-gradient(ellipse 70% 60% at 15% 10%, ${ACCENT}14 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 85% 20%, ${ACCENT}10 0%, transparent 65%)`,
            }}
          />

          <div className="container relative z-10 mx-auto grid gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:py-18">
            <div>
              <AnimatedDiv delay={0.05}>
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: ACCENT }}
                >
                  Case Study · Product Design &amp; Dashboard UX
                </p>
              </AnimatedDiv>
              <AnimatedDiv delay={0.1}>
                <h1 className="mb-5 text-4xl font-serif font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Dashboard Redesign
                </h1>
              </AnimatedDiv>
              <AnimatedDiv delay={0.15}>
                <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                  A redesign of the ZERO dashboard focused on making progress legible, guiding users
                  towards the right next step and helping the product tell a clearer story as people
                  move from setup to simulations and finally to insights.
                </p>
              </AnimatedDiv>

              <AnimatedDiv delay={0.2}>
                <dl className="grid max-w-3xl grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-3">
                  {[
                    { label: 'Field', value: 'Dashboard redesign' },
                    { label: 'Sector', value: 'Fleet electrification software' },
                    { label: 'My Role', value: 'UX/UI Designer' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                      <dt
                        className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest"
                        style={{ color: ACCENT }}
                      >
                        {label}
                      </dt>
                      <dd className="text-sm font-semibold leading-snug text-slate-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </AnimatedDiv>
            </div>

            <AnimatedDiv delay={0.15} direction="left">
              <div className="space-y-4">
                <MediaCard
                  src={asset('/Dashboard/Dashboard1.png')}
                  alt="New ZERO dashboard redesign"
                  caption="The redesigned dashboard introduces a clearer narrative from setup to insights."
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-100 bg-white/95 p-4 shadow-sm">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-600">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Users were unsure where to begin and could not easily tell how far they had
                      progressed through the tool.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                      Direction
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Use visual hierarchy, staged navigation and linked colour cues to make the
                      workflow feel guided rather than hidden.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        <div className="mx-auto mt-12 flex w-full max-w-[1400px] gap-12 px-4 md:px-8 lg:mt-16 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />

          <div className="min-w-0 max-w-4xl flex-1 space-y-16 px-2 md:space-y-20 md:px-6">
            <section id={TOC_SECTIONS[0].id}>
              <SectionNum n="01" />
              <h2 className="mb-5 text-2xl font-serif font-bold tracking-tight text-slate-900 md:text-3xl">
                Original Dashboard
              </h2>
              <p className="mb-4 text-base leading-relaxed text-slate-600">
                The original dashboard gave users information, but it did not provide a strong sense
                of sequence. It was harder to understand what needed to happen first, what had
                already been completed and how each part of the workflow connected to the final
                insight.
              </p>
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                Feedback from users highlighted a simple but important issue: people did not know
                where to start. That made the experience feel more like a collection of screens than
                a guided journey through ZERO.
              </p>

              <AnimatedDiv delay={0.05}>
                <MediaCard
                  src={asset('/Dashboard/OldDashboard.png')}
                  alt="Old ZERO dashboard before the redesign"
                  caption="The previous dashboard lacked clear guidance on the first action and overall progress."
                  aspectClassName="aspect-[16/11]"
                  objectClassName="object-contain bg-slate-100"
                />
              </AnimatedDiv>
            </section>

            <section id={TOC_SECTIONS[1].id}>
              <SectionNum n="02" />
              <h2 className="mb-5 text-2xl font-serif font-bold tracking-tight text-slate-900 md:text-3xl">
                Design Principles
              </h2>
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                The redesign centred on three principles that would make the dashboard easier to
                read and easier to act on.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Make progress visible',
                    body: 'As users scroll from top to bottom, the dashboard should show how much progress has already been made in ZERO.',
                  },
                  {
                    title: 'Guide the first step',
                    body: 'The interface should remove hesitation by clearly signalling where users need to begin and what to complete next.',
                  },
                  {
                    title: 'Connect the whole story',
                    body: 'The cards, dots in the navigation and stage labels should work together so users can link each action to the wider workflow.',
                  },
                ].map(({ title, body }, index) => (
                  <AnimatedDiv key={title} delay={0.05 * index}>
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div
                        className="mb-4 h-1.5 w-12 rounded-full"
                        style={{ backgroundColor: index === 0 ? '#0F766E' : index === 1 ? ACCENT : '#4F46E5' }}
                      />
                      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{body}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            <section id={TOC_SECTIONS[2].id}>
              <SectionNum n="03" />
              <h2 className="mb-5 text-2xl font-serif font-bold tracking-tight text-slate-900 md:text-3xl">
                Progress Through ZERO
              </h2>
              <p className="mb-4 text-base leading-relaxed text-slate-600">
                One of the strongest ideas in the new dashboard is that the page should reveal the
                product journey as users move through it. Instead of treating setup, simulations and
                insights as disconnected destinations, the dashboard now helps users understand them
                as consecutive steps.
              </p>
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                This means users can see that insights are not immediate. They are reached by
                progressing through the earlier stages first, which makes the experience feel more
                logical and gives more meaning to the results at the end.
              </p>

              <div className="grid gap-5 lg:grid-cols-3">
                {[
                  {
                    title: 'Vehicles and locations',
                    body: 'The first stage sets up the fleet and operational context that the rest of the tool depends on.',
                    src: asset('/Dashboard/Fleet Data.mp4'),
                    poster: asset('/Dashboard/Dashboard1.png'),
                  },
                  {
                    title: 'Simulations',
                    body: 'Once the setup is in place, users can move into modelling and scenario testing.',
                    src: asset('/Dashboard/Simulation.mp4'),
                    poster: asset('/Dashboard/Dashboard3.png'),
                  },
                  {
                    title: 'Insights',
                    body: 'Insights become the reward at the end of the journey, rather than a disconnected destination.',
                    src: asset('/Dashboard/Results.mp4'),
                    poster: asset('/Dashboard/Dashboard4.png'),
                  },
                ].map(({ title, body, src, poster }, index) => (
                  <AnimatedDiv key={title} delay={0.05 * index}>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <MediaCard
                        src={src}
                        alt={title}
                        video
                        poster={poster}
                        caption={undefined}
                        aspectClassName="aspect-[16/10] rounded-none border-0 shadow-none"
                      />
                      <div className="p-5">
                        <p
                          className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]"
                          style={{ color: index === 0 ? ACCENT : index === 1 ? '#0F766E' : '#4F46E5' }}
                        >
                          Step {index + 1}
                        </p>
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{body}</p>
                      </div>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            <section id={TOC_SECTIONS[3].id}>
              <SectionNum n="04" />
              <h2 className="mb-5 text-2xl font-serif font-bold tracking-tight text-slate-900 md:text-3xl">
                Guided First Steps
              </h2>
              <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <AnimatedDiv delay={0.05}>
                  <MediaCard
                    src={asset('/Dashboard/EmptyState.png')}
                    alt="Empty state on the redesigned dashboard"
                    caption="The empty state helps users understand the first action instead of facing a blank or ambiguous dashboard."
                    aspectClassName="aspect-[16/11]"
                    objectClassName="object-contain bg-slate-50"
                  />
                </AnimatedDiv>

                <div>
                  <p className="mb-4 text-base leading-relaxed text-slate-600">
                    The empty state was designed to guide users into the tool rather than leave them
                    wondering what to do next. This directly responds to the feedback that people did
                    not know where to start.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-slate-600">
                    By explaining the first step and positioning it clearly within the dashboard, the
                    experience becomes more welcoming for new users and more efficient for returning
                    users.
                  </p>

                  <div className="space-y-3">
                    {[
                      'Clarifies the first action before any data has been entered.',
                      'Reduces uncertainty for new users entering ZERO for the first time.',
                      'Supports a more guided, story-led dashboard experience from the start.',
                    ].map((item, index) => (
                      <AnimatedDiv key={item} delay={0.08 + index * 0.05}>
                        <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                          <span
                            className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                            style={{ backgroundColor: ACCENT }}
                          >
                            {index + 1}
                          </span>
                          <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                        </div>
                      </AnimatedDiv>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id={TOC_SECTIONS[4].id}>
              <SectionNum n="05" />
              <h2 className="mb-5 text-2xl font-serif font-bold tracking-tight text-slate-900 md:text-3xl">
                Step-Based Navigation
              </h2>
              <p className="mb-4 text-base leading-relaxed text-slate-600">
                The sidebar makes the sequence of work more explicit. Step one, Vehicles and
                locations, is highlighted in red and has active and inactive states so users can tell
                what is currently available and what still depends on earlier work being completed.
              </p>
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                This structured progression helps the dashboard feel like a narrative. Users move
                from setup, to simulations, to insights. The cards on the dashboard are colour-coded
                with the dots in the navigation, making the relationships between sections easier to
                understand at a glance.
              </p>

              <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <AnimatedDiv delay={0.05}>
                  <MediaCard
                    src={asset('/Dashboard/activeInactive.png')}
                    alt="Sidebar active and inactive step states"
                    caption="Active and inactive states help users understand what is ready now and what comes next."
                    aspectClassName="aspect-[4/3]"
                    objectClassName="object-contain bg-slate-50"
                  />
                </AnimatedDiv>

                <div className="grid gap-5 sm:grid-cols-2">
                  <AnimatedDiv delay={0.1}>
                    <MediaCard
                      src={asset('/Dashboard/Dashboard 2.png')}
                      alt="Dashboard redesign with linked progress cues"
                      caption="Colour and layout reinforce the next action."
                      aspectClassName="aspect-[4/3]"
                    />
                  </AnimatedDiv>
                  <AnimatedDiv delay={0.15}>
                    <MediaCard
                      src={asset('/Dashboard/Dashboard4.png')}
                      alt="Dashboard redesign insights stage"
                      caption="Insights feel earned because earlier steps are clearly established."
                      aspectClassName="aspect-[4/3]"
                    />
                  </AnimatedDiv>
                </div>
              </div>
            </section>

            <section id={TOC_SECTIONS[5].id}>
              <SectionNum n="06" />
              <h2 className="mb-5 text-2xl font-serif font-bold tracking-tight text-slate-900 md:text-3xl">
                Outcome
              </h2>
              <AnimatedDiv delay={0.05}>
                <blockquote
                  className="relative mb-8 overflow-hidden rounded-2xl px-8 py-8 md:px-10 md:py-10"
                  style={{ background: `${ACCENT}0f`, borderLeft: `4px solid ${ACCENT}` }}
                >
                  <span
                    className="pointer-events-none absolute left-3 top-[-20px] select-none font-serif"
                    aria-hidden
                    style={{ fontSize: '160px', lineHeight: 1, color: `${ACCENT}20` }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="relative z-10 max-w-3xl text-xl font-serif font-bold italic leading-snug md:text-2xl"
                    style={{ color: ACCENT }}
                  >
                    The dashboard was redesigned to help the story build as users progress through
                    the tool.
                  </p>
                </blockquote>
              </AnimatedDiv>

              <p className="mb-4 text-base leading-relaxed text-slate-600">
                The redesign reframes the dashboard from a static overview into a guided workspace.
                It gives users clearer orientation, stronger feedback on progress and a better
                understanding of what the product expects from them at each stage.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Most importantly, it addresses the original usability problem: users no longer need
                to guess where to begin. The interface now sets up the first step, shows what comes
                next and makes the path to insights feel intentional.
              </p>
            </section>

            <section>
              <OtherWorks currentSlug="dashboard-redesign" />
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
