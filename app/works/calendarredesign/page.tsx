import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IosImageGrid from '@/components/IosImageGrid'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { AnimatedDiv } from '@/components/AnimatedSection'
import { asset } from '@/lib/asset'
import { slugify } from '@/lib/slug'

const TOC_SECTIONS = [
  'Research',
  'Competitive Analysis',
  'User Interviews',
  'Problem Statement',
  'Usability Testing',
  'Wireframes',
  'Conclusion',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'iOS Calendar Redesign | Anupa Shefley',
  description:
    'User research and design to adapt the iOS Calendar for remote work and online meetings.',
}

function SectionNum({ n }: { n: string }) {
  return (
    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-content/50 mb-2 select-none">
      {n}
    </p>
  )
}

export default function CalendarRedesignPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pb-16 md:pb-24">

        {/* ─── Image grid hero ─────────────────────────────── */}
        <div className="pt-20 md:pt-24">
          <IosImageGrid />
        </div>

        {/* ─── Title + meta ────────────────────────────────── */}
        <header className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-10 mb-14 md:mb-18">
          <AnimatedDiv delay={0.05}>
            <p className="text-[11px] font-mono font-semibold tracking-[0.28em] uppercase text-teal-content mb-4">
              Case Study · UX Research &amp; Product Design
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-dark mb-5 tracking-tight leading-[1.08]">
              iOS Calendar Redesign for Conference Meetings
            </h1>
          </AnimatedDiv>
          <AnimatedDiv delay={0.15}>
            <p className="text-base md:text-lg text-teal-dark/65 max-w-2xl mb-8 leading-relaxed">
              User research and design to adapt the iOS Calendar for remote work and online meetings.
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white ring-1 ring-teal-medium/25 shadow-sm">
              {[
                { label: 'Field', value: 'User Research and Design' },
                { label: 'Sector', value: 'Telecommunication' },
                { label: 'My Role', value: 'UX Researcher, Product Designer' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col p-3 rounded-xl bg-teal-content/[0.06] ring-1 ring-teal-medium/15">
                  <dt className="text-[10px] uppercase tracking-widest font-semibold text-teal-content mb-1.5">{label}</dt>
                  <dd className="text-sm text-teal-dark font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedDiv>
        </header>

        {/* ─── TOC + content ───────────────────────────────── */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12 lg:gap-16">
          <ProjectToc sections={TOC_SECTIONS} />

          <div className="min-w-0 flex-1 max-w-6xl space-y-16 md:space-y-20">

            {/* Context / Introduction */}
            <section>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                Planning and good time management are key steps to success. There is always a
                constant worry about missing a meeting. If you are physically in office or at a
                university attending classes, chances of missing a meeting or lecture are very low.
                This is because you get visual cues like your colleagues getting ready for a meeting
                or friends reminding you physically about the next lecture.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                This important aspect is missed once the platform has changed. The year 2020 changed
                the way the world functioned as a whole. Working from home, online learning and home
                schooling have become everyday terms and the norm all over the world. Keeping track
                of all these online appointments has become a challenge.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                As our daily lives have grown busy trying to juggle various hats, important meetings
                can&apos;t be overlooked. So, people from all walks of life have started using
                various services to keep track of their online meetings and schedules. A{' '}
                <strong>calendar</strong> is one of the most commonly used services where the user
                can organise their schedule on an hourly, daily, weekly or monthly basis. It has
                evolved from its physical form to a digital version available on phones and
                computers.
              </p>
              <AnimatedDiv delay={0.1}>
                <div className="max-w-2xl mx-auto">
                  <Image
                    src={asset('/homestatistics.png')}
                    alt="Work from home statistics"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 576px"
                  />
                </div>
                <p className="text-sm text-teal-dark/45 text-center mt-2.5 italic">
                  Source:{' '}
                  <a
                    href="https://blog.otter.ai/work-from-home-statistics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-content hover:underline"
                  >
                    blog.otter.ai/work-from-home-statistics
                  </a>
                </p>
              </AnimatedDiv>
            </section>

            {/* 01 Research */}
            <section id={TOC_SECTIONS[0].id}>
              <SectionNum n="01" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Research
              </h2>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                As time moves on, people go after something that improves and makes life easier. In
                this case, various people had their own choices on the calendar apps to be used.
                People said they installed new calendar apps just to get the additional features
                that were not supported on their current calendar.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                Various pain points were uncovered as part of the user research. Some of them were:
              </p>
              <div className="space-y-2">
                {[
                  'Difficulty in managing online meetings',
                  'Various login screens and different audio/video settings required for different video conferencing apps',
                  'Lack of a centralised place to save various meeting details',
                  'Having to install more than one app to keep track of all meetings in a day',
                  'Multiple steps required to join meetings',
                ].map((item, i) => (
                  <AnimatedDiv key={i} delay={0.05 * i}>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white ring-1 ring-teal-medium/20 shadow-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-content/10 text-teal-content text-[11px] font-bold flex items-center justify-center mt-0.5 tabular-nums ring-1 ring-teal-content/20">
                        {i + 1}
                      </span>
                      <p className="text-teal-dark/80 text-sm leading-relaxed">{item}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            {/* 02 Competitive Analysis */}
            <section id={TOC_SECTIONS[1].id}>
              <SectionNum n="02" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Competitive Analysis
              </h2>
              <AnimatedDiv delay={0.1}>
                <div className="rounded-2xl bg-white ring-1 ring-teal-medium/20 shadow-sm p-6 md:p-8">
                  <p className="text-teal-dark/75 leading-relaxed text-base mb-4">
                    Google Calendar, Fantastical and Calendars 5 were the calendars that were analysed
                    from the iOS App Store. Many similarities were found in the calendar design but they
                    are yet to change the basic functionality to adapt to a remote work environment.
                    Google Calendar has the feature to add video conferencing option but it is restricted
                    to Google Meet as the default option.
                  </p>
                  <p className="text-teal-dark/75 leading-relaxed text-base mb-4">
                    One of the major reasons behind choosing the iOS Calendar was to allow the solution
                    to be accessible across various video conferencing platforms. It was initially
                    thought to implement a calendar notification in the Zoom app but then soon realised
                    that this needed to be implemented in a calendar that would be common to all video
                    conference apps.
                  </p>
                  <p className="text-teal-dark/75 leading-relaxed text-base">
                    In the current iOS Calendar, even though there is a provision to add a meeting
                    location, there is no option to add video conferencing. This shows how the
                    application has not kept up with the changing times where a large number of meetings
                    now occur online.
                  </p>
                  <div className="mt-5 pt-5 border-t border-teal-medium/15 flex flex-wrap gap-3">
                    {[
                      { label: 'Key insight', text: 'No video conferencing support in iOS Calendar' },
                      { label: 'Opportunity', text: 'Platform-agnostic meeting integration' },
                    ].map(({ label, text }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl ring-1 text-sm font-medium bg-teal-content/[0.08] ring-teal-content/20 text-teal-dark"
                      >
                        <span className="w-2 h-2 rounded-full shrink-0 bg-teal-content" />
                        <span className="font-semibold">{label}:</span>
                        <span className="font-normal opacity-80">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            </section>

            {/* 03 User Interviews */}
            <section id={TOC_SECTIONS[2].id}>
              <SectionNum n="03" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                User Interviews
              </h2>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                Research was conducted amongst individuals on the usability of various calendar
                applications available in the market. The research was carried out primarily amongst
                two categories of individuals — remote workers and parents/students.
              </p>
              <AnimatedDiv delay={0.1}>
                <div className="max-w-3xl mx-auto mb-6">
                  <Image
                    src={asset('/comicg.png')}
                    alt="User research comic"
                    width={700}
                    height={500}
                    className="w-full h-auto rounded-3xl"
                    sizes="(max-width: 768px) 80vw, 400px"
                  />
                </div>
              </AnimatedDiv>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                In the case of remote workers, feedback from colleagues and co-workers emphasised the
                need for current calendars or meeting apps to <strong>keep track of online
                meetings</strong>. Often when working from home, they can easily lose track of time
                and fail to log in to a meeting. When they do get notified of the meeting,{' '}
                <strong>multiple steps</strong> were needed to actually join the meeting — most of
                them being able to join the meeting but a handful being missed out.
              </p>
              <p className="text-teal-dark/75 leading-relaxed text-base">
                Parents and students had a common concern where they thought that home schooling was
                difficult to manage where you had to log in to <strong>multiple sessions</strong> in
                a day for different subjects.
              </p>
            </section>

            {/* 04 Problem Statement */}
            <section id={TOC_SECTIONS[3].id}>
              <SectionNum n="04" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
                Problem Statement
              </h2>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                Online workers and students need to keep track of their meeting and class schedules.
                They need to be able to save these details in a central place. Once saved, these
                details should be easily accessible and used to join online meetings. Meeting
                notifications need to be visually attractive to alert users to keep track of online
                schedule.
              </p>
              <AnimatedDiv delay={0.1}>
                <div className="relative rounded-2xl bg-teal-content overflow-hidden p-10 md:p-14">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden
                    style={{
                      background:
                        'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.08), transparent)',
                    }}
                  />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4 relative z-10">
                    Proposed Goals
                  </p>
                  <div className="relative z-10 space-y-3">
                    {[
                      'Set up virtual meetings',
                      'View the meetings for the day',
                      'Be notified / alerted on upcoming meetings',
                      'Be provided with a user-friendly interface to join meetings without having to log in every time',
                      'Join meetings with pre-defined audio and video set up',
                    ].map((goal, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white/80 text-[11px] font-bold flex items-center justify-center mt-0.5 tabular-nums">
                          {i + 1}
                        </span>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed">{goal}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            </section>

            {/* 05 Usability Testing */}
            <section id={TOC_SECTIONS[4].id}>
              <SectionNum n="05" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Usability Testing
              </h2>
              <AnimatedDiv delay={0.05}>
                <blockquote className="relative my-6 rounded-2xl bg-teal-dark overflow-hidden px-8 py-8 md:px-10 md:py-10">
                  <span
                    className="absolute font-serif text-white/10 select-none pointer-events-none"
                    aria-hidden
                    style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-xl md:text-2xl font-serif font-bold text-white leading-snug z-10 italic">
                    A person who never made a mistake, never tried anything new.
                  </p>
                  <p className="relative text-white/50 text-sm mt-3 z-10">— Albert Einstein</p>
                </blockquote>
              </AnimatedDiv>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                The mid-fidelity prototypes were tested to check whether they met the expected
                performance and functionality. The different aspects covered during the testing
                phase were visual design, functionality and ease of use. Some of the feedback
                received was:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'I am not sure which meeting I need to join if I am late. If there is a variation to show an ongoing meeting, that would be helpful.',
                  'I need to schedule meetings depending on how busy the day is. It would be a nice feature if I can quickly glance the calendar and know which days I am fully booked.',
                ].map((quote, i) => (
                  <AnimatedDiv key={i} delay={0.1 + i * 0.1}>
                    <div className="relative rounded-xl bg-white shadow-md ring-1 ring-teal-medium/20 p-5 h-full">
                      <span
                        className="absolute font-serif text-teal-content/10 select-none pointer-events-none"
                        aria-hidden
                        style={{ fontSize: '80px', lineHeight: 1, top: '-8px', left: '8px' }}
                      >
                        &ldquo;
                      </span>
                      <p className="relative text-teal-dark font-medium italic text-sm leading-relaxed z-10">
                        &ldquo;{quote}&rdquo;
                      </p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
              <p className="text-teal-dark/75 leading-relaxed mt-6 text-base">
                Both of the above feedback was used to change the design to include the above
                features. Initial feedback from testers also confirmed that this was a change in the
                right direction.
              </p>
            </section>

            {/* 06 Wireframes */}
            <section id={TOC_SECTIONS[5].id}>
              <SectionNum n="06" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Wireframes
              </h2>
              <p className="text-teal-dark/75 leading-relaxed mb-8 text-base">
                A prototype is the simulation or sample version of a final product which can be used
                to test and generate user feedback. Prototypes are usually categorised into three
                different categories — low, medium and hi fidelity prototypes.
              </p>

              <div className="space-y-14">
                {/* Low fidelity */}
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Low Fidelity Prototype
                  </h3>
                  <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                    This level of prototype generally consists of roughly drawn sketches and
                    diagrams. These sketches are ideal for brainstorming and team collaboration.
                  </p>
                  <AnimatedDiv delay={0.1}>
                    <Image
                      src={asset('/bookdrawing.png')}
                      alt="Initial sketches for low fidelity prototypes"
                      width={1200}
                      height={675}
                      className="w-full h-auto rounded-2xl"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                    <p className="text-sm text-teal-dark/45 text-center mt-2.5 italic">
                      Initial sketches for low fidelity prototypes
                    </p>
                  </AnimatedDiv>
                </div>

                {/* Mid fidelity */}
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Mid Fidelity Prototypes
                  </h3>
                  <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                    These prototypes are generally in black and white and are often called wireframes
                    as well. The black and white approach limits the design to user flows and
                    information architecture. The screens were designed in Balsamiq. This helped to
                    focus on the main elements that were needed for the screens.
                  </p>
                  <div className="space-y-6 max-w-xl mx-auto">
                    <AnimatedDiv delay={0.1}>
                      <Image
                        src={asset('/lofi.png')}
                        alt="Mid fidelity prototype wireframe"
                        width={800}
                        height={450}
                        className="w-full h-auto rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 576px"
                      />
                    </AnimatedDiv>
                    <AnimatedDiv delay={0.15}>
                      <Image
                        src={asset('/lofi2.png')}
                        alt="Mid fidelity prototype wireframe"
                        width={800}
                        height={450}
                        className="w-full h-auto rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 576px"
                      />
                    </AnimatedDiv>
                  </div>
                </div>

                {/* Hi fidelity */}
                <div>
                  <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                    Hi Fidelity Prototypes
                  </h3>
                  <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                    The final clickable prototypes were implemented in Figma.
                  </p>
                  <AnimatedDiv delay={0.1}>
                    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-12 lg:px-24">
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-[1400px] mx-auto">
                        {[
                          { src: asset('/Home Screen.png'), label: 'Home Screen' },
                          { src: asset('/Detailed Day.png'), label: 'Detailed View' },
                          { src: asset('/ios2-Add new event.png'), label: 'Add new event' },
                          { src: asset('/ios3-Video conference details.png'), label: 'Video Conference' },
                          { src: asset('/ios1-Event Details added.png'), label: 'Event Details' },
                          { src: asset('/Lockscreen.png'), label: 'Lock Screen notification' },
                        ].map(({ src, label }) => (
                          <div key={label} className="group flex flex-col items-center">
                            <div className="relative w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] aspect-[9/16] rounded-2xl overflow-hidden mb-2 transition-transform duration-500 group-hover:scale-[1.03]">
                              <Image
                                src={src}
                                alt={label}
                                fill
                                className="object-contain"
                                sizes="200px"
                              />
                            </div>
                            <p className="text-teal-dark/50 text-xs md:text-sm italic text-center">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
            </section>

            {/* 07 Conclusion */}
            <section id={TOC_SECTIONS[6].id}>
              <SectionNum n="07" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Conclusion
              </h2>
              <AnimatedDiv delay={0.05}>
                <blockquote className="relative rounded-2xl bg-teal-dark overflow-hidden px-8 py-8 md:px-10 md:py-10 mb-8">
                  <span
                    className="absolute font-serif text-white/10 select-none pointer-events-none"
                    aria-hidden
                    style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-xl md:text-2xl font-serif font-bold text-white leading-snug z-10 italic">
                    Consistency is one of the most powerful usability principles: when things
                    always behave the same, users don&apos;t have to worry about what will happen.
                  </p>
                  <p className="relative text-white/50 text-sm mt-3 z-10">— Jakob Nielsen</p>
                </blockquote>
              </AnimatedDiv>
              <p className="text-teal-dark/75 leading-relaxed text-base">
                This case study allowed me to learn the design process and the fundamental principles
                behind them. It made me realise how important it was to follow a user-centred design
                process and keep to the design principles. Since this was a fundamental app included
                as part of the iOS package, I had to make sure that the overall look and feel stayed
                consistent throughout the redesign. This principle along with the 5-stage Design
                Process helped in the redesign of the iOS Calendar. It would be interesting to see
                whether some of these features would be included in future iOS updates.
              </p>
            </section>

            {/* Other Works */}
            <section>
              <OtherWorks currentSlug="calendarredesign" />
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
