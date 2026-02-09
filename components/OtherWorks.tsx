import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'
import { hashLink } from '@/lib/link'

interface OtherWorksProps {
  currentSlug: string
}

export default function OtherWorks({ currentSlug }: OtherWorksProps) {
  // Filter out current project and only show projects with slugs
  const otherProjects = projects.filter(
    (project) => project.slug && project.slug !== currentSlug
  )

  if (otherProjects.length === 0) {
    return null
  }

  return (
    <section className="pt-12 border-t border-teal-medium/30">
      <h2 className="text-2xl font-serif font-bold text-teal-dark mb-8">
        Other Works
      </h2>
      <div className="space-y-6">
        {otherProjects.map((project) => (
          <Link
            key={project.id}
            href={`/works/${project.slug}`}
            className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch sm:items-center p-4 rounded-lg border border-teal-medium/20 hover:border-teal-content/40 hover:bg-teal-content/5 transition-all"
          >
            <div className="relative w-full sm:w-72 sm:min-w-[18rem] aspect-[4/3] rounded-lg overflow-hidden bg-teal-content/10 shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 288px"
              />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold text-teal-dark group-hover:text-teal-content transition-colors flex items-center">
              {project.title}
              <span aria-hidden className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href={hashLink('/#work')}
          className="inline-flex items-center gap-2 text-teal-medium hover:text-teal-dark text-sm font-medium transition-colors"
        >
          <span aria-hidden>←</span> Back to My Work
        </Link>
      </div>
    </section>
  )
}
