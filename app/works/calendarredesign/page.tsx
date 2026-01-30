import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'iOS Calendar Redesign for Conference Meetings | Anupa Shefley',
  description:
    'User research and design project improving the iOS Calendar for online meetings and remote work — from research and usability testing to high-fidelity prototypes.',
}

export default function CalendarRedesignPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Hero */}
        <header className="container mx-auto px-6 mb-16 md:mb-24">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-teal-medium hover:text-teal-content text-sm font-medium mb-8 transition-colors"
          >
            <span aria-hidden>←</span> Back to Work
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-teal-dark mb-4">
            iOS Calendar Redesign for Conference Meetings
          </h1>
          <p className="text-xl md:text-2xl text-teal-dark/90 max-w-2xl mb-8">
            User research and design to adapt the iOS Calendar for remote work and online meetings.
          </p>
          <dl className="flex flex-wrap gap-x-8 gap-y-2 text-teal-dark/80">
            <div>
              <dt className="text-xs uppercase tracking-wider text-teal-medium">Field</dt>
              <dd>User Research and Design</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-teal-medium">Sector</dt>
              <dd>Telecommunication</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-teal-medium">My Role</dt>
              <dd>UX Researcher, Product Designer</dd>
            </div>
          </dl>
        </header>

        <div className="container mx-auto px-6 max-w-3xl space-y-20">
          {/* Context / Introduction */}
          <section>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Planning and good time management are key steps to success. There is always a
              constant worry about missing a meeting. If you are physically in office or at a
              university attending classes, chances of missing a meeting or lecture are very low.
              This is because you get visual cues like your colleagues getting ready for a meeting
              or friends reminding you physically about the next lecture.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              This important aspect is missed once the platform has changed. The year 2020 changed
              the way the world functioned as a whole. Working from home, online learning and home
              schooling have become everyday terms and the norm all over the world. Keeping track
              of all these online appointments has become a challenge.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              As our daily lives have grown busy trying to juggle various hats, important meetings
              can&apos;t be overlooked. So, people from all walks of life have started using
              various services to keep track of their online meetings and schedules. A{' '}
              <strong>calendar</strong> is one of the most commonly used services where the user
              can organise their schedule on an hourly, daily, weekly or monthly basis. It has
              evolved from its physical form to a digital version available on phones and
              computers.
            </p>
            <p className="text-teal-dark/70 text-sm">
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
          </section>

          {/* Research */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Research</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              As time moves on, people go after something that improves and makes life easier. In
              this case, various people had their own choices on the calendar apps to be used.
              People said they installed new calendar apps just to get the additional features
              that were not supported on their current calendar.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Various pain points were uncovered as part of the user research. Some of them were:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90">
              <li>Difficulty in managing online meetings</li>
              <li>
                Various login screens and different audio/video settings required for different
                video conferencing apps
              </li>
              <li>Lack of a centralised place to save various meeting details</li>
              <li>Having to install more than one app to keep track of all meetings in a day</li>
              <li>Multiple steps required to join meetings</li>
            </ul>
          </section>

          {/* Competitive Analysis */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Competitive Analysis
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Google Calendar, Fantastical and Calendars 5 were the calendars that were analysed
              from the iOS App Store. Many similarities were found in the calendar design but they
              are yet to change the basic functionality to adapt to a remote work environment.
              Google Calendar has the feature to add video conferencing option but it is restricted
              to Google Meet as the default option.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              One of the major reasons behind choosing the iOS Calendar was to allow the solution
              to be accessible across various video conferencing platforms. It was initially
              thought to implement a calendar notification in the Zoom app but then soon realised
              that this needed to be implemented in a calendar that would be common to all video
              conference apps.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              In the current iOS Calendar, even though there is a provision to add a meeting
              location, there is no option to add video conferencing. This shows how the
              application has not kept up with the changing times where a large number of meetings
              now occur online.
            </p>
          </section>

          {/* User Interviews */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">User Interviews</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Research was conducted amongst individuals on the usability of various calendar
              applications available in the market. The research was carried out primarily amongst
              two categories of individuals — remote workers and parents/students.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              In the case of remote workers, feedback from colleagues and co-workers emphasised the
              need for current calendars or meeting apps to <strong>keep track of online
              meetings</strong>. Often when working from home, they can easily lose track of time
              and fail to log in to a meeting. When they do get notified of the meeting,{' '}
              <strong>multiple steps</strong> were needed to actually join the meeting — most of
              them being able to join the meeting but a handful being missed out.
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              Parents and students had a common concern where they thought that home schooling was
              difficult to manage where you had to log in to <strong>multiple sessions</strong> in
              a day for different subjects.
            </p>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Problem Statement</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Online workers and students need to keep track of their meeting and class schedules.
              They need to be able to save these details in a central place. Once saved, these
              details should be easily accessible and used to join online meetings. Meeting
              notifications need to be visually attractive to alert users to keep track of online
              schedule.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The following goals were proposed to allow users to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90">
              <li>Set up virtual meetings</li>
              <li>View the meetings for the day</li>
              <li>Be notified / alerted on upcoming meetings</li>
              <li>Be provided with a user-friendly interface to join meetings without having to
                log in every time</li>
              <li>Join meetings with pre-defined audio and video set up</li>
            </ul>
          </section>

          {/* Usability Testing */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Usability Testing
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6 italic">
              &ldquo;A person who never made a mistake, never tried anything new.&rdquo; — Albert
              Einstein
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              The mid-fidelity prototypes were tested to check whether they met the expected
              performance and functionality. The different aspects covered during the testing
              phase were visual design, functionality and ease of use. Some of the feedback
              received was:
            </p>
            <blockquote className="border-l-4 border-teal-content pl-6 py-2 my-6 italic text-teal-dark/90">
              I am not sure which meeting I need to join if I am late. If there is a variation to
              show an ongoing meeting, that would be helpful.
            </blockquote>
            <blockquote className="border-l-4 border-teal-content pl-6 py-2 my-6 italic text-teal-dark/90">
              I need to schedule meetings depending on how busy the day is. It would be a nice
              feature if I can quickly glance the calendar and know which days I am fully booked.
            </blockquote>
            <p className="text-teal-dark/90 leading-relaxed">
              Both of the above feedback was used to change the design to include the above
              features. Initial feedback from testers also confirmed that this was a change in the
              right direction.
            </p>
          </section>

          {/* Wireframes */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Wireframes</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-8">
              A prototype is the simulation or sample version of a final product which can be used
              to test and generate user feedback. Prototypes are usually categorised into three
              different categories — low, medium and hi fidelity prototypes.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                  Low Fidelity Prototype
                </h3>
                <p className="text-teal-dark/90 leading-relaxed mb-4">
                  This level of prototype generally consists of roughly drawn sketches and
                  diagrams. These sketches are ideal for brainstorming and team collaboration.
                </p>
                <div className="aspect-video rounded-lg bg-teal-content/20 border border-teal-medium/30 flex items-center justify-center">
                  <p className="text-teal-dark/60 text-sm">Initial sketches for low fidelity prototypes</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                  Mid Fidelity Prototypes
                </h3>
                <p className="text-teal-dark/90 leading-relaxed mb-4">
                  These prototypes are generally in black and white and are often called wireframes
                  as well. The black and white approach limits the design to user flows and
                  information architecture. The screens were designed in Balsamiq. This helped to
                  focus on the main elements that were needed for the screens.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-semibold text-teal-dark mb-3">
                  Hi Fidelity Prototypes
                </h3>
                <p className="text-teal-dark/90 leading-relaxed mb-4">
                  The final clickable prototypes were implemented in Figma.
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-teal-dark/90 text-sm">
                  <li className="rounded-lg bg-teal-content/10 border border-teal-medium/20 p-4 flex items-center justify-center min-h-[80px]">
                    Home Screen
                  </li>
                  <li className="rounded-lg bg-teal-content/10 border border-teal-medium/20 p-4 flex items-center justify-center min-h-[80px]">
                    Detailed View
                  </li>
                  <li className="rounded-lg bg-teal-content/10 border border-teal-medium/20 p-4 flex items-center justify-center min-h-[80px]">
                    Add new event
                  </li>
                  <li className="rounded-lg bg-teal-content/10 border border-teal-medium/20 p-4 flex items-center justify-center min-h-[80px]">
                    Video Conference
                  </li>
                  <li className="rounded-lg bg-teal-content/10 border border-teal-medium/20 p-4 flex items-center justify-center min-h-[80px]">
                    Event details
                  </li>
                  <li className="rounded-lg bg-teal-content/10 border border-teal-medium/20 p-4 flex items-center justify-center min-h-[80px]">
                    Lock screen notification
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Conclusion</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6 italic">
              &ldquo;Consistency is one of the most powerful usability principles: when things
              always behave the same, users don&apos;t have to worry about what will happen.&rdquo;
              — Jakob Nielsen
            </p>
            <p className="text-teal-dark/90 leading-relaxed">
              This case study allowed me to learn the design process and the fundamental principles
              behind them. It made me realise how important it was to follow a user-centred design
              process and keep to the design principles. Since this was a fundamental app included
              as part of the iOS package, I had to make sure that the overall look and feel stayed
              consistent throughout the redesign. This principle along with the 5-stage Design
              Process helped in the redesign of the iOS Calendar. It would be interesting to see
              whether some of these features would be included in future iOS updates.
            </p>
          </section>

          {/* Other works CTA */}
          <section className="pt-12 border-t border-teal-medium/30">
            <p className="text-teal-dark/80 mb-6">View more work</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/works/highbury-primary"
                className="inline-flex items-center gap-2 text-teal-content hover:text-teal-dark font-medium transition-colors"
              >
                Highbury Primary School <span aria-hidden>→</span>
              </Link>
              <span className="text-teal-medium/50">|</span>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 bg-teal-content text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-dark transition-colors"
              >
                Back to My Work <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
