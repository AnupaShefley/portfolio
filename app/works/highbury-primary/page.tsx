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
    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-content/50 mb-2 select-none">
      {n}
    </p>
  )
}

export default function HighburyPrimaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pb-16 md:pb-24">

        {/* ─── Image grid hero ─────────────────────────────── */}
        <div className="pt-20 md:pt-24">
          <HighburyImageGrid />
        </div>

        {/* ─── Title + meta ────────────────────────────────── */}
        <header className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-10 mb-14 md:mb-18">
          <AnimatedDiv delay={0.05}>
            <p className="text-[11px] font-mono font-semibold tracking-[0.28em] uppercase text-teal-content mb-4">
              Case Study · UX Research &amp; Usability Testing
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-dark mb-5 tracking-tight leading-[1.08]">
              Highbury Primary School
            </h1>
          </AnimatedDiv>
          <AnimatedDiv delay={0.15}>
            <p className="text-base md:text-lg text-teal-dark/65 max-w-2xl mb-8 leading-relaxed">
              An approach to redesigning an entire school website from initial research, usability
              testing to final prototype.
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white ring-1 ring-teal-medium/25 shadow-sm">
              {[
                { label: 'Field', value: 'Research / Usability Study' },
                { label: 'Sector', value: 'Education' },
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

            {/* 01 Original school website */}
            <section id={TOC_SECTIONS[0].id}>
              <SectionNum n="01" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
                Original School Website
              </h2>
              <AnimatedDiv delay={0.1}>
                <div className="relative w-full min-h-[420px] md:min-h-[540px] overflow-hidden rounded-2xl ring-1 ring-teal-medium/20 shadow-[0_20px_60px_rgba(46,71,60,0.15)]">
                  <Image
                    src={asset('/Original School Website.png')}
                    alt="Original Highbury Primary School website"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1280px) 100vw, 1152px"
                  />
                  {/* Subtle browser-chrome strip at top */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100/90 backdrop-blur-sm border-b border-slate-200/60 flex items-center px-3 gap-1.5 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    <div className="ml-3 flex-1 max-w-xs h-4 rounded-full bg-slate-200/80" />
                  </div>
                </div>
              </AnimatedDiv>
            </section>

            {/* 02 Research */}
            <section id={TOC_SECTIONS[1].id}>
              <SectionNum n="02" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">Research</h2>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                In order to redesign the existing website, first I needed to find insight on users&apos;
                behaviours, attitudes and expectations. I started my research by focusing on Highbury
                school&apos;s key demographic — parents.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
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
                    <div className="flex gap-4 p-5 rounded-xl bg-white ring-1 ring-teal-medium/25 shadow-sm h-full">
                      <span className="text-3xl font-serif font-bold text-teal-content/25 select-none shrink-0 leading-none tabular-nums">{num}</span>
                      <p className="text-teal-dark text-sm leading-relaxed font-medium pt-1">{goal}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            {/* 03 Competitive analysis */}
            <section id={TOC_SECTIONS[2].id}>
              <SectionNum n="03" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Competitive Analysis
              </h2>
              <AnimatedDiv delay={0.1}>
                <div className="rounded-2xl bg-white ring-1 ring-teal-medium/20 shadow-sm p-6 md:p-8">
                  <p className="text-teal-dark/75 leading-relaxed text-base">
                    Primary school websites in local areas were compared to check how they compared with
                    Highbury&apos;s site. It was found that many school sites provided information in an
                    organised and functional layout. Compared to other sites, Highbury site provided
                    information in a random manner and under unexpected tabs. Navigation through the
                    school site was a horrible experience and there was no structure to the way data was
                    presented to the user.
                  </p>
                  <div className="mt-5 pt-5 border-t border-teal-medium/15 flex flex-wrap gap-3">
                    {[
                      { label: 'Other sites', sentiment: 'positive', text: 'Organised, functional layout' },
                      { label: 'Highbury site', sentiment: 'negative', text: 'Random, unexpected navigation' },
                    ].map(({ label, sentiment, text }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ring-1 text-sm font-medium ${
                          sentiment === 'positive'
                            ? 'bg-teal-content/[0.08] ring-teal-content/20 text-teal-dark'
                            : 'bg-red-50 ring-red-200/60 text-red-800'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            sentiment === 'positive' ? 'bg-teal-content' : 'bg-red-400'
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">User Interviews</h2>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                After completing the competitor analysis, I conducted a few interviews to evaluate the
                current website. The purpose of conducting this interview was to know if my analysis
                was biased, or if these issues have also been faced by other prospective parents.
                Interviews were conducted with participants, ranging from 21–35, across different
                backgrounds and levels of experience, who are current users of school website.
              </p>
              <AnimatedDiv delay={0.1}>
                <blockquote className="relative my-8 rounded-2xl bg-teal-dark overflow-hidden px-8 py-8 md:px-10 md:py-10">
                  <span
                    className="absolute font-serif text-white/10 select-none pointer-events-none"
                    aria-hidden
                    style={{ fontSize: '160px', lineHeight: 1, top: '-20px', left: '12px' }}
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-xl md:text-2xl font-serif font-bold text-white leading-snug z-10 italic">
                    The information is so hard to find!
                  </p>
                </blockquote>
              </AnimatedDiv>
              <AnimatedDiv delay={0.15}>
                <div className="relative mt-2 w-full max-w-lg mx-auto aspect-video rounded-xl overflow-hidden ring-1 ring-teal-medium/20 shadow-md">
                  <Image
                    src={asset('/feedback.png')}
                    alt="Social media feedback from users about the school website"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 512px"
                  />
                </div>
              </AnimatedDiv>
              <p className="text-sm text-teal-dark/45 text-center mt-2.5 italic">
                Social media feedback
              </p>
              <p className="text-teal-dark/75 leading-relaxed mt-6 text-base">
                Some of the participants mentioned that if they were not able to get enough
                information, they would call the school to get more information. However, if the
                questions were ones that should be easily found on the website, it would be a waste
                of resources for staff to be attending to these inquiries. This information should
                be placed strategically so that the users are able to navigate easily. This would
                result in fewer inquiries, and the school&apos;s administration can focus better on
                other tasks.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mt-4 text-base">
                Overall feedback on the school website and initial research points to confusion
                amongst users to navigate around the site. Ease of finding information on the site
                can be improved.
              </p>
            </section>

            {/* 05 Problem statement */}
            <section id={TOC_SECTIONS[4].id}>
              <SectionNum n="05" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">Problem Statement</h2>
              <AnimatedDiv delay={0.1}>
                <div className="relative rounded-2xl bg-teal-content overflow-hidden p-10 md:p-14 text-center">
                  {/* Radial glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden
                    style={{
                      background:
                        'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.08), transparent)',
                    }}
                  />
                  {/* Decorative quotation mark */}
                  <span
                    className="absolute font-serif text-white/10 select-none pointer-events-none"
                    aria-hidden
                    style={{ fontSize: '180px', lineHeight: 1, top: '-24px', left: '16px' }}
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white leading-snug z-10 max-w-2xl mx-auto">
                    Redesign the website so that information is easily accessible to the target audience.
                  </p>
                </div>
              </AnimatedDiv>
            </section>

            {/* 06 Usability testing */}
            <section id={TOC_SECTIONS[5].id}>
              <SectionNum n="06" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Usability Testing
              </h2>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
                Usability tests can be designed once an understanding has been achieved about user
                behaviours and website usage. This has been achieved through the persona creation,
                user journey and empathy mapping. Once the user research has been done, reasoning can
                be carried out to reach a logical understanding of the requirements of the system.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                Through website analysis and checking feedback from parents who use the website, it
                can be seen that there is an issue with the content structure and website information
                architecture. Based on this analysis, the hypothesis has been formulated as below:
              </p>
              <AnimatedDiv delay={0.1}>
                <div className="rounded-xl bg-teal-dark px-6 py-5 mb-8">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-teal-light/60 mb-2">
                    Hypothesis
                  </p>
                  <p className="text-white font-semibold text-base md:text-lg leading-snug">
                    Users on Highbury Primary School&apos;s website find it difficult to find the
                    information that they need.
                  </p>
                </div>
              </AnimatedDiv>
              <p className="text-teal-dark/75 leading-relaxed mb-4 text-base">
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
                    className="flex items-start gap-3 p-4 rounded-xl bg-white ring-1 ring-teal-medium/20 shadow-sm"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-content/10 text-teal-content text-[11px] font-bold flex items-center justify-center mt-0.5 tabular-nums ring-1 ring-teal-content/20">
                      {i + 1}
                    </span>
                    <p className="text-teal-dark/80 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 07 Participant recruitment */}
            <section id={TOC_SECTIONS[6].id}>
              <SectionNum n="07" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">
                Participant Recruitment
              </h2>
              <p className="text-teal-dark/75 leading-relaxed mb-5 text-base">
                The school website is primarily used by parents of kids in the age group of 4- to
                12-year-old. It can also be used by prospective parents looking to find more
                information about the school. Keeping this in mind, participants were recruited from
                friends and family who fulfilled the below shortlist criteria:
              </p>
              <div className="space-y-2.5">
                {[
                  'Aged between 25 and 50 (as per statistics of average age of first-time parents in UK — Office for National Statistics)',
                  'Have kids in school aged between 4 and 12 years old, or',
                  'Planning to send kids to school in next academic year 2021/2022',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-content shrink-0" />
                    <p className="text-teal-dark/80 text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 08 Task design */}
            <section id={TOC_SECTIONS[7].id}>
              <SectionNum n="08" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">Task Design</h2>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
                The usability metric selected from inductive analysis was Navigation. Tasks were
                created to test how easy it was for the users to navigate from one page to another.
                Four tasks were finalised as below:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Find Inset dates for 2020–2021',
                  'Find out how to access Numbots which is an educational website for kids',
                  'Find out uniform/kit for Forest School days',
                  'Find out who is the school Headteacher',
                ].map((task, i) => (
                  <AnimatedDiv key={i} delay={0.05 * i}>
                    <div className="flex gap-4 p-5 rounded-xl bg-white ring-1 ring-teal-medium/20 shadow-sm h-full">
                      <span className="text-2xl font-serif font-bold text-teal-content/25 select-none shrink-0 leading-none tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-teal-dark text-sm leading-relaxed pt-1">{task}</p>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </section>

            {/* 09 Findings */}
            <section id={TOC_SECTIONS[8].id}>
              <SectionNum n="09" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">Findings</h2>
              <p className="text-teal-dark/75 leading-relaxed mb-8 text-base">
                Thematic analysis of user comments both during task completion and feedback through
                post-task questionnaire emphasises the confusing layout of information on the site.
                Some of the prominent comments were:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Quote 1 — person left */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-3 pl-20 sm:pl-24 pr-4">
                    <p className="text-teal-dark font-medium italic text-sm sm:text-base">&ldquo;That is not straightforward.&rdquo;</p>
                  </div>
                  <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person1.webp')} sizes="80px" delay={0} />
                  </div>
                </div>

                {/* Quote 2 — person right */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-3 pr-20 sm:pr-24 pl-4">
                    <p className="text-teal-dark font-medium italic text-sm sm:text-base text-right">&ldquo;I am not sure whether I am on the right page.&rdquo;</p>
                  </div>
                  <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person2.webp')} sizes="80px" delay={0.6} />
                  </div>
                </div>

                {/* Quote 3 — person left */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-3 pl-20 sm:pl-24 pr-4">
                    <p className="text-teal-dark font-medium italic text-sm sm:text-base">&ldquo;I struggled with that task as it was not under Uniforms.&rdquo;</p>
                  </div>
                  <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person3.webp')} sizes="80px" />
                  </div>
                </div>

                {/* Quote 4 — person right */}
                <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                  <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white shadow-md ring-1 ring-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-3 pr-20 sm:pr-24 pl-4">
                    <p className="text-teal-dark font-medium italic text-sm sm:text-base text-right">&ldquo;The tab under which it was present was not easily identifiable.&rdquo;</p>
                  </div>
                  <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                    <AnimatedPersonImage src={asset('/person4.webp')} sizes="80px" delay={1.8} />
                  </div>
                </div>
              </div>

              <p className="text-teal-dark/75 leading-relaxed mt-8 text-base">
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">Wireframes</h2>
              <p className="text-teal-dark/75 leading-relaxed mb-3 text-base">
                After several rounds of usability tests on the wireframes, the following Landing
                Page was developed using Figma.
              </p>
              <p className="text-teal-dark/75 leading-relaxed mb-2 text-base font-semibold">
                Page features:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'The categories on the top of the page were reduced to the most important ones — About Us and Parent Information. This would stop the initial confusion on which route needs to be taken to view relevant information.',
                  'An upcoming events section was also added so that parents can check the site at a quick glance to know what events are occurring each week in school.',
                  'Term Dates and Lunch Menu were also added as quick links as these were found to be the two most searched pieces of information on the website.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-content shrink-0" />
                    <p className="text-teal-dark/80 text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <AnimatedDiv delay={0.1}>
                <div className="relative w-full min-h-[700px] md:min-h-[920px] overflow-hidden rounded-2xl ring-1 ring-teal-medium/20 shadow-[0_20px_60px_rgba(46,71,60,0.15)]">
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-5 tracking-tight">Conclusion</h2>
              <p className="text-teal-dark/75 leading-relaxed mb-6 text-base">
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
                    <div className="flex gap-4 p-5 md:p-6 rounded-xl bg-white ring-1 ring-teal-medium/20 shadow-sm">
                      <div className="flex-shrink-0 mt-0.5">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-content/10 text-teal-content text-xs font-bold ring-1 ring-teal-content/20 tabular-nums">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-teal-dark mb-1.5">{title}</h3>
                        <p className="text-teal-dark/70 text-sm leading-relaxed">{body}</p>
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
