'use client'

import { useEffect, useState } from 'react'

export type TocSection = {
  id: string
  label: string
}

type ProjectTocProps = {
  sections: TocSection[]
  title?: string
}

export function ProjectToc({ sections, title = 'On this page' }: ProjectTocProps) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null)

  useEffect(() => {
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  if (sections.length === 0) return null

  return (
    <div className="sticky top-28 self-start hidden lg:block w-44 flex-shrink-0">
      <nav
        aria-label="Page sections"
        className="w-full"
      >
        <p className="text-sm font-semibold text-teal-dark mb-3 pl-3 border-l-2 border-transparent">
          {title}
        </p>
        <ul className="space-y-1 text-sm">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`
                    block py-1.5 pl-3 border-l-2 -ml-px transition-colors
                    ${isActive
                      ? 'border-teal-content text-teal-dark font-medium'
                      : 'border-transparent text-teal-dark/70 hover:text-teal-dark hover:border-teal-medium/50'
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
