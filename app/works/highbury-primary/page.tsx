import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HighburyImageGrid from '@/components/HighburyImageGrid'
import OtherWorks from '@/components/OtherWorks'
import { ProjectToc } from '@/components/ProjectToc'
import { AnimatedDiv } from '@/components/AnimatedSection'
import { AnimatedPersonImage } from '@/components/AnimatedPersonImage'
import { asset } from '@/lib/asset'
import { slugify } from '@/lib/slug'

// Accent colour extracted from the Highbury school wireframe images — dusty mauve-rose
const ACCENT = '#8B3F50'

const TOC_SECTIONS = [
  'Original School Website',
  'Research',
  'Competitive Analysis',
  'User Interviews',
  'Problem Statement',
  'Usability Testing',
  'Participant Recruitment',
  'Task Design',
  'Findings',
  'Wireframes',
  'Conclusion',
].map((label) => ({ id: slugify(label), label }))

export const metadata: Metadata = {
  title: 'Highbury Primary School | Anupa Shefley',
  description:
    'A UX research and usability study redesigning a primary school website from initial research and usability testing to final prototype.',
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

export default function HighburyPrimaryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="pb-24">

        {/* ─── Image grid hero ─────────────────────────────── */}
        <div className="pt-20 md:pt-24">
          <HighburyImageGrid />
        </div>

        {/* ─── Title hero ──────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-50">
          {/* Radial gradient orbs in the mauve accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${ACCENT}1a 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 60%, ${ACCENT}12 0%, transparent 65%)`,
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

          <div className="container relative z-10 mx-auto px-6 pt-14 pb-16 lg:pt-18 lg:pb-20">
            <AnimatedDiv delay={0.05}>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: ACCENT }}
              >
                Case Study · UX Research &amp; Usability Testing
              </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 tracking-tight leading-[1.08]">
                Highbury Primary School
              </h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.15}>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mb-10">
                An approach to redesigning an entire school website from initial research, usability
                testing to final prototype.
              </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2}>
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm max-w-2xl">
                {[
                  { label: 'Field', value: 'Research / Usability Study' },
                  { label: 'Sector', value: 'Education' },
                  { label: 'My Role', value: 'UX Researcher, Product Designer' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col p-3 rounded-xl bg-slate-50 ring-1 ring-slate-200">
                    <dt
                      className="text-[10px] uppercase tracking-widest font-semibold mb-1.5 leading-tight"
                      style={{ color: ACCENT }}
                    >
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900 leading-snug">{value}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedDiv>
          </div>
        </section>

        {/* ─── TOC + content ───────────────────────────────── */}
        <div className="w-full max-w-[1400px] mx-auto pl-2 md:pl-4 pr-4 md:pr-8 flex gap-2 lg:gap-4 mt-12">
          <ProjectToc sections={TOC_SECTIONS} />

          <div className="min-w-0 flex-1 max-w-3xl px-6 space-y-16">

            {/* 01 Original school website */}
            <section id={TOC_SECTIONS[0].id}>
              <SectionNum n="01" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                Original School Website
              </h2>
              <AnimatedDiv delay={0.1}>
                <div className="relative w-full min-h-[420px] md:min-h-[540px] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                  {/* Browser chrome strip */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100/95 border-b border-slate-200/70 flex items-center px-3 gap-1.5 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    <div className="ml-3 flex-1 max-w-xs h-4 rounded-full bg-slate-200/80" />
                  </div>
                  <Image
                    src={asset('/Original School Website.png')}
                    alt="Original Highbury Primary School website"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1280px) 100vw, 1152px"
                  />
                </div>
              </AnimatedDiv>
            </section>

            {/* 02 Research */}
            <section id={TOC_SECTIONS[1].id}>
              <SectionNum n="02" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">Research</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In order to redesign the existing website, first I needed to find insight on users&apos;
                behaviours, attitudes and expectations. I started my research by focusing on Highbury
                school&apos;s key demographic — parents.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Based on initial analysis, the two primary goals of a school site can be outlined as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    num: '01',
                    goal: 'Engagement and communication between school and existing parents.',
                  },
                  {
                    num: '02',
                    goal: 'Highlight strengths and success stories of school to potential staff and new students.',
                  },
                ].map(({ num, goal }, i) => (
                  <AnimatedDiv key={num} delay={0.1 + i * 0.1}>
                    <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm h-full">
                      <span
                        className="text-3xl font-serif font-bold select-none shrink-0 leading-none tabular-nums"
                        style={{ color: `${ACCENT}40` }}
                      >
                        {num}
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed font-medium pt-1">{goal}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            {/* 03 Competitive analysis */}
            <section id={TOC_SECTIONS[2].id}>
              <SectionNum n="03" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">
                Competitive Analysis
              </h2>
              <AnimatedDiv delay={0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8">
                  <p className="text-slate-600 leading-relaxed">
                    Primary school websites in local areas were compared to check how they compared with
                    Highbury&apos;s site. It was found that many school sites provided information in an
                    organised and functional layout. Compared to other sites, Highbury site provided
                    information in a random manner and under unexpected tabs. Navigation through the
                    school site was a horrible experience and there was no structure to the way data was
                    presented to the user.
                  </p>
                  <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
                    {[
                      { label: 'Other sites', sentiment: 'positive', text: 'Organised, functional layout' },
                      { label: 'Highbury site', sentiment: 'negative', text: 'Random, unexpected navigation' },
                    ].map(({ label, sentiment, text }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ring-1 text-sm font-medium ${
                          sentiment === 'positive'
                            ? 'bg-emerald-50 ring-emerald-200 text-emerald-800'
                            : 'bg-red-50 ring-red-200 text-red-800'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            sentiment === 'positive' ? 'bg-emerald-500' : 'bg-red-400'
                          }`}
                        />
                        <span className="font-semibold">{label}:</span>
                        <span className="font-normal opacity-80">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            </section>

            {/* 04 User interviews */}
            <section id={TOC_SECTIONS[3].id}>
              <SectionNum n="04" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">User Interviews</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                After completing the competitor analysis, I conducted a few interviews to evaluate the
                current website. The purpose of conducting this interview was to know if my analysis
                was biased, or if these issues have also been faced by other prospective parents.
                Interviews were conducted with participants, ranging from 21–35, across different
                backgrounds and levels of experience, who are current users of school website.
              </p>
              <AnimatedDiv delay={0.1}>
                <blockquote
                  className="relative my-8 rounded-2xl overflow-hidden px-8 py-8 md:px-10 md:py-10"
                  style={{ background: `${ACCENT}0f`, borderLeft: `4px solid ${ACCENT}` }}
                >
                  <span
                    className="absolute font-serif select-none pointer-events-none"
                    aria-hidden
                    style={{
                      fontSize: '160px',
                      lineHeight: 1,
                      top: '-20px',
                      left: '12px',
                      color: `${ACCENT}20`,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="relative text-xl md:text-2xl font-serif font-bold leading-snug z-10 italic"
                    style={{ color: ACCENT }}
                  >
                    The information is so hard to find!
                  </p>
                </blockquote>
              </AnimatedDiv>
              <AnimatedDiv delay={0.15}>
                <div className="relative mt-2 w-full max-w-lg mx-auto aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-md">
                  <Image
                    src={asset('/feedback.png')}
                    alt="Social media feedback from users about the school website"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 512px"
                  />
                </div>
              </AnimatedDiv>
              <p className="text-sm text-slate-400 text-center mt-2.5 italic">
                Social media feedback
              </p>
              <p className="text-slate-600 leading-relaxed mt-6">
                Some of the participants mentioned that if they were not able to get enough
                information, they would call the school to get more information. However, if the
                questions were ones that should be easily found on the website, it would be a waste
                of resources for staff to be attending to these inquiries. This information should
                be placed strategically so that the users are able to navigate easily. This would
                result in fewer inquiries, and the school&apos;s administration can focus better on
                other tasks.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Overall feedback on the school website and initial research points to confusion
                amongst users to navigate around the site. Ease of finding information on the site
                can be improved.
              </p>
            </section>

            {/* 05 Problem statement */}
            <section id={TOC_SECTIONS[4].id}>
              <SectionNum n="05" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Problem Statement</h2>
              <AnimatedDiv delay={0.1}>
                <div
                  className="relative rounded-2xl overflow-hidden p-10 md:p-14 text-center"
                  style={{ background: `${ACCENT}0d`, border: `1px solid ${ACCENT}25` }}
                >
                  {/* Radial glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden
                    style={{
                      background: `radial-gradient(ellipse 70% 80% at 50% 50%, ${ACCENT}0a, transparent)`,
                    }}
                  />
                  {/* Decorative quotation mark */}
                  <span
                    className="absolute font-serif select-none pointer-events-none"
                    aria-hidden
                    style={{ fontSize: '180px', lineHeight: 1, top: '-24px', left: '16px', color: `${ACCENT}18` }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold leading-snug z-10 max-w-2xl mx-auto"
                    style={{ color: ACCENT }}
                  >
                    Redesign the website so that information is easily accessible to the target audience.
                  </p>
                </div>
              </AnimatedDiv>
            </section>

            {/* 06 Usability testing */}
            <section id={TOC_SECTIONS[5].id}>
              <SectionNum n="06" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">
                Usability Testing
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Usability tests can be designed once an understanding has been achieved about user
                behaviours and website usage. This has been achieved through the persona creation,
                user journey and empathy mapping. Once the user research has been done, reasoning can
                be carried out to reach a logical understanding of the requirements of the system.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Through website analysis and checking feedback from parents who use the website, it
                can be seen that there is an issue with the content structure and website information
                architecture. Based on this analysis, the hypothesis has been formulated as below:
              </p>
              <AnimatedDiv delay={0.1}>
                <div
                  className="rounded-xl px-6 py-5 mb-8"
                  style={{ background: `${ACCENT}0d`, borderLeft: `4px solid ${ACCENT}` }}
                >
                  <p
                    className="text-[10px] font-mono uppercase tracking-widest mb-2"
                    style={{ color: `${ACCENT}80` }}
                  >
                    Hypothesis
                  </p>
                  <p className="font-semibold text-slate-900 text-base md:text-lg leading-snug">
                    Users on Highbury Primary School&apos;s website find it difficult to find the
                    information that they need.
                  </p>
                </div>
              </AnimatedDiv>
              <p className="text-slate-600 leading-relaxed mb-4">
                The usability test was designed with objectives:
              </p>
              <div className="space-y-2">
                {[
                  'To check the ease with which information can be accessed on the site',
                  'To analyse how site structure influences information retrieval',
                  'To determine how content organisation can impact finding information',
                  'To collect feedback from users on their user experience',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center mt-0.5 tabular-nums ring-1"
                      style={{
                        background: `${ACCENT}12`,
                        color: ACCENT,
                        borderColor: `${ACCENT}30`,
                      }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 07 Participant recruitment */}
            <section id={TOC_SECTIONS[6].id}>
              <SectionNum n="07" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">
                Participant Recruitment
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                The school website is primarily used by parents of kids in the age group of 4- to
                12-year-old. It can also be used by prospective parents looking to find more
                information about the school. Keeping this in mind, participants were recruited from
                friends and family who fulfilled the below shortlist criteria:
              </p>
              <div className="space-y-2.5">
                {[
                  'Aged between 25 and 50 (as per statistics of average age of first-time parents in UK — Office for National Statistics)',
                  'Have kids in school aged between 4 and 12 years old, or',
                  'Planning to send kids to school in next academic year',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: ACCENT }}
                    />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 08 Task design */}
            <section id={TOC_SECTIONS[7].id}>
              <SectionNum n="08" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">Task Design</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The usability metric selected from inductive analysis was Navigation. Tasks were
                created to test how easy it was for the users to navigate from one page to another.
                Four tasks were finalised as below:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Find Inset dates for next academic year',
                  'Find out how to access Numbots which is an educational website for kids',
                  'Find out uniform/kit for Forest School days',
                  'Find out who is the school Headteacher',
                ].map((task, i) => (
                  <AnimatedDiv key={i} delay={0.05 * i}>
                    <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm h-full">
                      <span
                        className="text-2xl font-serif font-bold select-none shrink-0 leading-none tabular-nums"
                        style={{ color: `${ACCENT}35` }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed pt-1">{task}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            {/* 09 Findings */}
            <section id={TOC_SECTIONS[8].id}>
              <SectionNum n="09" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">Findings</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Thematic analysis of user comments both during task completion and feedback through
                post-task questionnaire emphasises the confusing layout of information on the site.
                Some of the prominent comments were:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Quote 1 — person left */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-slate-200 min-h-[85px] sm:min-h-[95px] py-3 pl-20 sm:pl-24 pr-4">
                    <p className="text-slate-700 font-medium italic text-sm sm:text-base">&ldquo;That is not straightforward.&rdquo;</p>
                  </div>
                  <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person1.webp')} sizes="80px" delay={0} />
                  </div>
                </div>

                {/* Quote 2 — person right */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-slate-200 min-h-[85px] sm:min-h-[95px] py-3 pr-20 sm:pr-24 pl-4">
                    <p className="text-slate-700 font-medium italic text-sm sm:text-base text-right">&ldquo;I am not sure whether I am on the right page.&rdquo;</p>
                  </div>
                  <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person2.webp')} sizes="80px" delay={0.6} />
                  </div>
                </div>

                {/* Quote 3 — person left */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-slate-200 min-h-[85px] sm:min-h-[95px] py-3 pl-20 sm:pl-24 pr-4">
                    <p className="text-slate-700 font-medium italic text-sm sm:text-base">&ldquo;I struggled with that task as it was not under Uniforms.&rdquo;</p>
                  </div>
                  <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person3.webp')} sizes="80px" />
                  </div>
                </div>

                {/* Quote 4 — person right */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-slate-200 min-h-[85px] sm:min-h-[95px] py-3 pr-20 sm:pr-24 pl-4">
                    <p className="text-slate-700 font-medium italic text-sm sm:text-base text-right">&ldquo;The tab under which it was present was not easily identifiable.&rdquo;</p>
                  </div>
                  <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person4.webp')} sizes="80px" delay={1.8} />
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mt-8">
                The usability testing confirmed the hypothesis that was formulated through initial
                analysis of the website. The website content needs to be reorganised. The tests
                confirmed that there are multiple scenarios where the content is not located under an
                intuitive category. This was the main outcome of the tests. A school website&apos;s
                main goal is to provide information in an easy-to-access manner. Current users of
                the system have issues in navigating the website and finding the information that
                they require.
              </p>
            </section>

            {/* 10 Wireframes */}
            <section id={TOC_SECTIONS[9].id}>
              <SectionNum n="10" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">Wireframes</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                After several rounds of usability tests on the wireframes, the following Landing
                Page was developed using Figma.
              </p>
              <p className="text-slate-600 leading-relaxed mb-2 font-semibold text-slate-800">
                Page features:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'The categories on the top of the page were reduced to the most important ones — About Us and Parent Information. This would stop the initial confusion on which route needs to be taken to view relevant information.',
                  'An upcoming events section was also added so that parents can check the site at a quick glance to know what events are occurring each week in school.',
                  'Term Dates and Lunch Menu were also added as quick links as these were found to be the two most searched pieces of information on the website.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: ACCENT }}
                    />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <AnimatedDiv delay={0.1}>
                <div className="relative w-full min-h-[700px] md:min-h-[920px] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                  <Image
                    src={asset('/Wireframe Highbury.png')}
                    alt="Highbury Primary School wireframe and landing page"
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1280px) 100vw, 1152px"
                  />
                </div>
              </AnimatedDiv>
            </section>

            {/* 11 Conclusion */}
            <section id={TOC_SECTIONS[10].id}>
              <SectionNum n="11" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 tracking-tight">Conclusion</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The school website has lots of good content that is helpful to parents. However, due
                to the way in which the information is arranged on the website, it makes it
                confusing for parents. The website can be improved through the below recommendations:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'Redesign Category Labels',
                    body: "The categories on the site need to be redesigned and labelled in a different way. Currently the most confusing tabs are Parents, Children and Curriculum. This needs to be redesigned as About Us and Student Information. This helps parents to distinguish between information that is related to finding out about the school and other key information like Uniform, Inset days, Term dates etc.",
                  },
                  {
                    title: 'Surface Key Information on the Home Page',
                    body: 'Home page needs to include key information that can be seen at a quick glance. This can be designed for the most frequently requested information on the site like upcoming events.',
                  },
                  {
                    title: 'Promote the Search Bar',
                    body: 'The search bar can have a more prominent position on the Home Page. As demonstrated by one participant, the search bar reduces the time required to retrieve information if the user is stumped on how to navigate the site.',
                  },
                ].map(({ title, body }, i) => (
                  <AnimatedDiv key={i} delay={0.05 * i}>
                    <div className="flex gap-4 p-5 md:p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                      <div className="flex-shrink-0 mt-0.5">
                        <span
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ring-1 tabular-nums"
                          style={{
                            background: `${ACCENT}12`,
                            color: ACCENT,
                            borderColor: `${ACCENT}30`,
                          }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-1.5">{title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            {/* Other Works */}
            <section>
              <OtherWorks currentSlug="highbury-primary" />
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
