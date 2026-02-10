import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HighburyImageGrid from '@/components/HighburyImageGrid'
import OtherWorks from '@/components/OtherWorks'
import { AnimatedDiv } from '@/components/AnimatedSection'
import { AnimatedPersonImage } from '@/components/AnimatedPersonImage'
import { asset } from '@/lib/asset'

export const metadata: Metadata = {
  title: 'Highbury Primary School | Anupa Shefley',
  description:
    'A UX research and usability study redesigning a primary school website from initial research and usability testing to final prototype.',
}

export default function HighburyPrimaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        <HighburyImageGrid />

        {/* Hero */}
        <header className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-8 mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-teal-dark mb-4 tracking-tight pt-4">
            Highbury Primary School
          </h1>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-teal-content to-teal-light mb-6" aria-hidden />
          <p className="text-base md:text-lg text-teal-dark/90 max-w-2xl mb-8 leading-snug">
            An approach to redesigning an entire school website from initial research, usability
            testing to final prototype.
          </p>
          <dl className="flex flex-wrap gap-4 md:gap-6 mt-6 p-5 md:p-6 rounded-xl bg-teal-content/10 border border-teal-medium/30">
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">Field</dt>
              <dd className="text-sm text-teal-dark font-medium">Research / Usability Study</dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">Sector</dt>
              <dd className="text-sm text-teal-dark font-medium">Education</dd>
            </div>
            <div className="flex-1 min-w-[160px]">
              <dt className="text-xs uppercase tracking-wider font-semibold text-teal-content mb-1">My Role</dt>
              <dd className="text-sm text-teal-dark font-medium">UX Researcher, Product Designer</dd>
            </div>
          </dl>
        </header>

        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 space-y-14 md:space-y-16">
          {/* Original school website */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Original School Website
            </h2>
            <AnimatedDiv delay={0.1}>
              <div className="relative w-full min-h-[420px] md:min-h-[520px] overflow-hidden rounded-xl border border-teal-medium/20 shadow-lg">
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

          {/* Research */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">Research</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              In order to redesign the existing website, first I needed to find insight on users&apos;
              behaviours, attitudes and expectations. I started my research by focusing on Highbury
              school&apos;s key demographic — parents.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-3 text-base">
              Based on initial analysis, the two primary goals of a school site can be outlined as:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-teal-dark/90 text-base">
              <li>Engagement and communication between school and existing parents.</li>
              <li>Highlight strengths and success stories of school to potential staff and new students.</li>
            </ol>
          </section>

          {/* Competitive analysis */}
          <section className="-mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Competitive Analysis
            </h2>
            <p className="text-teal-dark/90 leading-relaxed text-base">
              Primary school websites in local areas were compared to check how they compared with
              Highbury&apos;s site. It was found that many school sites provided information in an
              organised and functional layout. Compared to other sites, Highbury site provided
              information in a random manner and under unexpected tabs. Navigation through the
              school site was a horrible experience and there was no structure to the way data was
              presented to the user.
            </p>
          </section>

          {/* User interviews */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">User Interviews</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              After completing the competitor analysis, I conducted a few interviews to evaluate the
              current website. The purpose of conducting this interview was to know if my analysis
              was biased, or if these issues have also been faced by other prospective parents.
              Interviews were conducted with participants, ranging from 21–35, across different
              backgrounds and levels of experience, who are current users of school website.
            </p>
            <blockquote className="border-l-4 border-teal-content pl-4 py-2 my-6 italic text-teal-dark/90 text-base font-medium">
              The information is so hard to find!
            </blockquote>
            <AnimatedDiv delay={0.15}>
              <div className="relative mt-6 w-full max-w-lg mx-auto aspect-video rounded-lg overflow-hidden">
                <Image
                  src={asset('/feedback.png')}
                  alt="Social media feedback from users about the school website"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 512px"
                />
              </div>
            </AnimatedDiv>
            <p className="text-sm text-teal-dark/70 text-center mt-2 italic">
              Social media feedback
            </p>
            <p className="text-teal-dark/90 leading-relaxed mt-6 text-base">
              Some of the participants mentioned that if they were not able to get enough
              information, they would call the school to get more information. However, if the
              questions were ones that should be easily found on the website, it would be a waste
              of resources for staff to be attending to these inquiries. This information should
              be placed strategically so that the users are able to navigate easily. This would
              result in fewer inquiries, and the school&apos;s administration can focus better on
              other tasks.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mt-4 text-base mb-0">
              Overall feedback on the school website and initial research points to confusion
              amongst users to navigate around the site. Ease of finding information on the site
              can be improved.
            </p>
          </section>

          {/* Problem statement – special callout */}
          <section className="my-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-4 tracking-tight">Problem Statement</h2>
            <div className="rounded-xl bg-teal-content/15 border-l-4 border-teal-content py-4 px-5 md:px-6">
              <p className="text-teal-dark text-base md:text-lg font-bold leading-snug m-0">
                Redesign the website so that information is easily accessible to the target audience.
              </p>
            </div>
          </section>

          {/* Usability testing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Usability Testing
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Usability tests can be designed once an understanding has been achieved about user
              behaviours and website usage. This has been achieved through the persona creation,
              user journey and empathy mapping. Once the user research has been done, reasoning can
              be carried out to reach a logical understanding of the requirements of the system.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              Through website analysis and checking feedback from parents who use the website, it
              can be seen that there is an issue with the content structure and website information
              architecture. Based on this analysis, the hypothesis has been formulated as below:
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base font-bold">
              Users on Highbury Primary School&apos;s website find it difficult to find the
              information that they need.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-3 text-base">
              The usability test was designed with objectives:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-teal-dark/90 mb-4 text-base">
              <li>To check the ease with which information can be accessed on the site</li>
              <li>To analyse how site structure influences information retrieval</li>
              <li>To determine how content organisation can impact finding information</li>
              <li>To collect feedback from users on their user experience</li>
            </ol>
          </section>

          {/* Participant recruitment */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">
              Participant Recruitment
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The school website is primarily used by parents of kids in the age group of 4- to
              12-year-old. It can also be used by prospective parents looking to find more
              information about the school. Keeping this in mind, participants were recruited from
              friends and family who fulfilled the below shortlist criteria:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90 text-base">
              <li>
                Aged between 25 and 50 (as per statistics of average age of first-time parents in
                UK — Office for National Statistics)
              </li>
              <li>Have kids in school aged between 4 and 12 years old, or</li>
              <li>Planning to send kids to school in next academic year 2021/2022</li>
            </ul>
          </section>

          {/* Task design */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">Task Design</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The usability metric selected from inductive analysis was Navigation. Tasks were
              created to test how easy it was for the users to navigate from one page to another.
              Four tasks were finalised as below:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-teal-dark/90 text-base">
              <li>Find Inset dates for 2020–2021</li>
              <li>Find out how to access Numbots which is an educational website for kids</li>
              <li>Find out uniform/kit for Forest School days</li>
              <li>Find out who is the school Headteacher</li>
            </ol>
          </section>

          {/* Findings */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">Findings</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6 text-base">
              Thematic analysis of user comments both during task completion and feedback through
              post-task questionnaire emphasises the confusing layout of information on the site.
              Some of the prominent comments were:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Quote 1 - person left */}
              <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white/85 shadow-lg border border-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-2 pl-20 sm:pl-24 pr-3 sm:pr-4">
                  <p className="text-teal-dark font-medium italic text-sm sm:text-base">&ldquo;That is not straightforward.&rdquo;</p>
                </div>
                <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                  <AnimatedPersonImage src={asset('/person1.webp')} sizes="80px" delay={0} />
                </div>
              </div>

              <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white/85 shadow-lg border border-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-2 pr-20 sm:pr-24 pl-3 sm:pl-4">
                  <p className="text-teal-dark font-medium italic text-sm sm:text-base text-right">&ldquo;I am not sure whether I am on the right page.&rdquo;</p>
                </div>
                <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                  <AnimatedPersonImage src={asset('/person2.webp')} sizes="80px" delay={0.6} />
                </div>
              </div>

              <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white/85 shadow-lg border border-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-2 pl-20 sm:pl-24 pr-3 sm:pr-4">
                  <p className="text-teal-dark font-medium italic text-sm sm:text-base">&ldquo;I struggled with that task as it was not under Uniforms.&rdquo;</p>
                </div>
                <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                  <AnimatedPersonImage src={asset('/person3.webp')} sizes="80px" />
                </div>
              </div>

              <div className="relative flex items-center min-h-[100px] sm:min-h-[110px] overflow-visible">
                <div className="relative z-10 flex-1 flex items-center rounded-xl bg-white/85 shadow-lg border border-teal-medium/20 min-h-[85px] sm:min-h-[95px] py-2 pr-20 sm:pr-24 pl-3 sm:pl-4">
                  <p className="text-teal-dark font-medium italic text-sm sm:text-base text-right">&ldquo;The tab under which it was present was not easily identifiable.&rdquo;</p>
                </div>
                <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-16 h-24 sm:w-20 sm:h-32 flex-shrink-0">
                  <AnimatedPersonImage src={asset('/person4.webp')} sizes="80px" delay={1.8} />
                </div>
              </div>
            </div>

            <p className="text-teal-dark/90 leading-relaxed mt-6 text-base">
              The usability testing confirmed the hypothesis that was formulated through initial
              analysis of the website. The website content needs to be reorganised. The tests
              confirmed that there are multiple scenarios where the content is not located under an
              intuitive category. This was the main outcome of the tests. A school website&apos;s
              main goal is to provide information in an easy-to-access manner. Current users of
              the system have issues in navigating the website and finding the information that
              they require.
            </p>
          </section>

          {/* Wireframes */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">Wireframes</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              After several rounds of usability tests on the wireframes, the following Landing
              Page was developed using Figma.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-3 text-base font-semibold">
              Page features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90 mb-6 text-base">
              <li>
                The categories on the top of the page were reduced to the most important ones —
                About Us and Parent Information. This would stop the initial confusion on which
                route needs to be taken to view relevant information.
              </li>
              <li>
                An upcoming events section was also added so that parents can check the site at a
                quick glance to know what events are occurring each week in school.
              </li>
              <li>
                Term Dates and Lunch Menu were also added as quick links as these were found to be
                the two most searched pieces of information on the website.
              </li>
            </ul>
            <AnimatedDiv delay={0.1}>
              <div className="relative w-full min-h-[700px] md:min-h-[900px] overflow-hidden rounded-xl border border-teal-medium/20 shadow-lg">
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

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-dark mb-6 tracking-tight">Conclusion</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-4 text-base">
              The school website has lots of good content that is helpful to parents. However, due
              to the way in which the information is arranged on the website, it makes it
              confusing for parents. The website can be improved through the below recommendations:
            </p>
            <ul className="list-disc list-inside space-y-3 text-teal-dark/90 text-base">
              <li>
                The categories on the site need to be redesigned and labelled in a different way.
                Currently the most confusing tabs are Parents, Children and Curriculum. This needs
                to be redesigned as About Us and Student Information. This helps parents to
                distinguish between information that is related to finding out about the school and
                other key information like Uniform, Inset days, Term dates etc.
              </li>
              <li>
                Home page needs to include key information that can be seen at a quick glance.
                This can be designed for the most frequently requested information on the site like
                upcoming events.
              </li>
              <li>
                The search bar can have a more prominent position on the Home Page. As
                demonstrated by one participant, the search bar reduces the time required to
                retrieve information if the user is stumped on how to navigate the site.
              </li>
            </ul>
          </section>

          {/* Other Works */}
          <section>
            <OtherWorks currentSlug="highbury-primary" />
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
