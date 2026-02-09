import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HighburyImageGrid from '@/components/HighburyImageGrid'
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
        <header className="container mx-auto px-6 mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-teal-dark mb-4">
            Highbury Primary School
          </h1>
          <p className="text-xl md:text-2xl text-teal-dark/90 max-w-2xl mb-8">
            An approach to redesigning an entire school website from initial research, usability
            testing to final prototype.
          </p>
          <dl className="flex flex-wrap gap-4 md:gap-6 mt-8 p-6 md:p-8 bg-teal-content/10 border border-teal-medium/30 rounded-lg backdrop-blur-sm">
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">Field</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">Research / Usability Study</dd>
            </div>
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">Sector</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">Education</dd>
            </div>
            <div className="flex-1 min-w-[200px]">
              <dt className="text-sm md:text-base uppercase tracking-wider font-semibold text-teal-content mb-2">My Role</dt>
              <dd className="text-base md:text-lg text-teal-dark font-medium">UX Researcher, Product Designer</dd>
            </div>
          </dl>
        </header>

        <div className="container mx-auto px-6 max-w-3xl space-y-20">
          {/* Original school website */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Original School Website
            </h2>
            <div className="relative w-full min-h-[420px] md:min-h-[520px] overflow-hidden">
              <Image
                src={asset('/Original School Website.png')}
                alt="Original Highbury Primary School website"
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </section>

          {/* Research */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Research</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              In order to redesign the existing website, first I needed to find insight on users&apos;
              behaviours, attitudes and expectations. I started my research by focusing on Highbury
              school&apos;s key demographic — parents.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              Based on initial analysis, the two primary goals of a school site can be outlined as:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-teal-dark/90">
              <li>Engagement and communication between school and existing parents.</li>
              <li>Highlight strengths and success stories of school to potential staff and new students.</li>
            </ol>
          </section>

          {/* Competitive analysis */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Competitive Analysis
            </h2>
            <p className="text-teal-dark/90 leading-relaxed">
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
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">User Interviews</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              After completing the competitor analysis, I conducted a few interviews to evaluate the
              current website. The purpose of conducting this interview was to know if my analysis
              was biased, or if these issues have also been faced by other prospective parents.
              Interviews were conducted with participants, ranging from 21–35, across different
              backgrounds and levels of experience, who are current users of school website.
            </p>
            <blockquote className="border-l-4 border-teal-content pl-6 py-2 my-6 italic text-teal-dark/90">
              The information is so hard to find!
            </blockquote>
            <p className="text-teal-dark/90 leading-relaxed">
              Some of the participants mentioned that if they were not able to get enough
              information, they would call the school to get more information. However, if the
              questions were ones that should be easily found on the website, it would be a waste
              of resources for staff to be attending to these inquiries. This information should
              be placed strategically so that the users are able to navigate easily. This would
              result in fewer inquiries, and the school&apos;s administration can focus better on
              other tasks.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mt-6">
              Overall feedback on the school website and initial research points to confusion
              amongst users to navigate around the site. Ease of finding information on the site
              can be improved.
            </p>
          </section>

          {/* Problem statement */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Problem Statement</h2>
            <p className="text-teal-dark/90 leading-relaxed text-lg font-medium">
              Redesign the website so that information is easily accessible to the target audience.
            </p>
          </section>

          {/* Usability testing */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Usability Testing
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Usability tests can be designed once an understanding has been achieved about user
              behaviours and website usage. This has been achieved through the persona creation,
              user journey and empathy mapping. Once the user research has been done, reasoning can
              be carried out to reach a logical understanding of the requirements of the system.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Through website analysis and checking feedback from parents who use the website, it
              can be seen that there is an issue with the content structure and website information
              architecture. Based on this analysis, the hypothesis has been formulated as below:
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-8 font-medium">
              Users on Highbury Primary School&apos;s website find it difficult to find the
              information that they need.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4">
              The usability test was designed with objectives:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-teal-dark/90 mb-6">
              <li>To check the ease with which information can be accessed on the site</li>
              <li>To analyse how site structure influences information retrieval</li>
              <li>To determine how content organisation can impact finding information</li>
              <li>To collect feedback from users on their user experience</li>
            </ol>
          </section>

          {/* Participant recruitment */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">
              Participant Recruitment
            </h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              The school website is primarily used by parents of kids in the age group of 4- to
              12-year-old. It can also be used by prospective parents looking to find more
              information about the school. Keeping this in mind, participants were recruited from
              friends and family who fulfilled the below shortlist criteria:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90">
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
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Task Design</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              The usability metric selected from inductive analysis was Navigation. Tasks were
              created to test how easy it was for the users to navigate from one page to another.
              Four tasks were finalised as below:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-teal-dark/90">
              <li>Find Inset dates for 2020–2021</li>
              <li>Find out how to access Numbots which is an educational website for kids</li>
              <li>Find out uniform/kit for Forest School days</li>
              <li>Find out who is the school Headteacher</li>
            </ol>
          </section>

          {/* Findings */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Findings</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              Thematic analysis of user comments both during task completion and feedback through
              post-task questionnaire emphasises the confusing layout of information on the site.
              Some of the prominent comments were:
            </p>
            <ul className="space-y-3 text-teal-dark/90">
              <li className="pl-4 border-l-2 border-teal-light">&ldquo;That is not straightforward.&rdquo;</li>
              <li className="pl-4 border-l-2 border-teal-light">
                &ldquo;I am not sure whether I am on the right page.&rdquo;
              </li>
              <li className="pl-4 border-l-2 border-teal-light">
                &ldquo;I struggled with that task as it was not under Uniforms.&rdquo;
              </li>
              <li className="pl-4 border-l-2 border-teal-light">
                &ldquo;The tab under which it was present was not easily identifiable.&rdquo;
              </li>
            </ul>
            <p className="text-teal-dark/90 leading-relaxed mt-8">
              The usability testing confirmed the hypothesis that was formulated through initial
              analysis of the website. The website content needs to be reorganised. The tests
              confirmed that there are multiple scenarios where the content is not located under an
              intuitive category. This was the main outcome of the tests. A school website&apos;s
              main goal is to provide information in an easy-to-access manner. Current users of
              the system have issues in navigating the website and finding the information that
              they require.
            </p>
            <div className="relative mt-8 w-full max-w-md mx-auto aspect-video">
              <Image
                src={asset('/feedback.png')}
                alt="User feedback from usability testing"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </section>

          {/* Wireframes */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Wireframes</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              After several rounds of usability tests on the wireframes, the following Landing
              Page was developed using Figma.
            </p>
            <p className="text-teal-dark/90 leading-relaxed mb-4 font-medium">
              Page features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-teal-dark/90 mb-6">
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
            <div className="relative w-full min-h-[700px] md:min-h-[900px] overflow-hidden">
              <Image
                src={asset('/Wireframe Highbury.png')}
                alt="Highbury Primary School wireframe and landing page"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-6">Conclusion</h2>
            <p className="text-teal-dark/90 leading-relaxed mb-6">
              The school website has lots of good content that is helpful to parents. However, due
              to the way in which the information is arranged on the website, it makes it
              confusing for parents. The website can be improved through the below recommendations:
            </p>
            <ul className="list-disc list-inside space-y-3 text-teal-dark/90">
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
          <section className="pt-12 border-t border-teal-medium/30">
            <h2 className="text-2xl font-serif font-bold text-teal-dark mb-8">
              Other Works
            </h2>
            <Link
              href="/works/calendarredesign"
              className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch sm:items-center p-4 rounded-lg border border-teal-medium/20 hover:border-teal-content/40 hover:bg-teal-content/5 transition-all"
            >
              <div className="relative w-full sm:w-72 sm:min-w-[18rem] aspect-[4/3] rounded-lg overflow-hidden bg-teal-content/10 shrink-0">
                <Image
                  src={asset('/ios.jpg')}
                  alt="iOS Calendar redesign"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
              <span className="text-xl md:text-2xl font-serif font-bold text-teal-dark group-hover:text-teal-content transition-colors flex items-center">
                iOS Calendar Redesign for Conference Meetings
                <span aria-hidden className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </span>
            </Link>
            <div className="mt-6">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-teal-medium hover:text-teal-dark text-sm font-medium transition-colors"
              >
                <span aria-hidden>←</span> Back to My Work
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
