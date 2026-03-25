'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { projects } from '@/lib/projects'
import { asset } from '@/lib/asset'
import { hashLink } from '@/lib/link'
import TiltCard from './TiltCard'

const WORK_HEADER_IMAGE = asset('/works.jpg')

const headerTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.28, delayChildren: 0.4 },
  },
}

const headerTextItem = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Shared media element ─────────────────────────────────────────────────────

function CardMedia({ project, className = '' }: { project: Project; className?: string }) {
  if (project.video) {
    return (
      <video
        src={project.video}
        poster={project.image}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        aria-label={project.title}
      />
    )
  }
  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  )
}

// ─── Variant A – Cinematic full-bleed ────────────────────────────────────────
// Media fills the entire card. Text sits on a richer, layered panel below.

function CardCinematic({ project, n }: { project: Project; n: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl group flex flex-col bg-gradient-to-b from-teal-50 via-white to-sky-50 ring-1 ring-teal-100 shadow-[0_18px_40px_rgba(15,23,42,0.18)] h-full">
      {/* ── Media — takes up top portion, zooms on hover ── */}
      <div className="relative aspect-[16/6] overflow-hidden shrink-0">
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <CardMedia project={project} />
        </div>
        {/* Category pill — top left */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-sm ring-1 ring-white/15 text-white text-[10px] font-mono uppercase tracking-[0.18em]">
          {project.category}
        </span>
        {/* Number badge — top right */}
        <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm ring-1 ring-white/15 text-white/60 text-[10px] font-mono">
          {n}
        </span>
      </div>

      {/* ── Text section — light, with soft accent line ── */}
      <div className="relative flex flex-col gap-1.5 px-5 py-3 md:px-5.5 md:py-3 bg-white/90 backdrop-blur-sm border-t border-teal-100 min-h-[110px]">
        <div className="pointer-events-none absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
        <h3 className="relative text-xl md:text-2xl font-serif font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="relative text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2">
          {project.description}
        </p>
        {project.aiAssisted && (
          <span className="relative inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 text-[10px] font-mono uppercase tracking-[0.18em] ring-1 ring-violet-400/20 w-fit">
            <span className="text-[9px] leading-none">✦</span>
            AI-assisted
          </span>
        )}
      </div>
    </div>
  )
}

// ─── Variant B – Horizontal split ────────────────────────────────────────────
// Dark text panel on the left; landscape media fills the right.

function CardSplit({ project, n }: { project: Project; n: string }) {
  return (
    <div className="overflow-hidden rounded-2xl group grid sm:grid-cols-[5fr_7fr] min-h-[260px] md:min-h-[300px]">
      {/* Left: dark text panel */}
      <div className="bg-slate-900 p-6 md:p-8 flex flex-col justify-between order-2 sm:order-1">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-teal-400 mb-3">
            {project.category}
          </p>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-semibold mt-5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View case study <span aria-hidden>→</span>
        </span>
      </div>
      {/* Right: landscape media */}
      <div className="relative overflow-hidden order-1 sm:order-2 aspect-video sm:aspect-auto">
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <CardMedia project={project} />
        </div>
        <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/55 text-[10px] font-mono">
          {n}
        </span>
      </div>
    </div>
  )
}

// ─── Variant C – Editorial stack ─────────────────────────────────────────────
// Landscape media top (16/9). Clean white text block below with a teal top border.

function CardEditorial({ project, n }: { project: Project; n: string }) {
  return (
    <div className="overflow-hidden rounded-2xl group bg-white">
      {/* Landscape media */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <CardMedia project={project} />
        </div>
        <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white/65 text-[10px] font-mono">
          {n}
        </span>
      </div>
      {/* Text block */}
      <div className="px-6 py-5 border-t-2 border-teal-500">
        <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-teal-600 mb-1.5">
          {project.category}
        </p>
        <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 mb-2 leading-snug group-hover:text-teal-700 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-teal-600 text-xs font-semibold group-hover:gap-3 transition-all duration-300">
          View case study <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  )
}

// ─── Variant D – Frosted glass overlay ───────────────────────────────────────
// Media fills the card. A frosted-glass panel floats at the bottom with the text.

function CardFrosted({ project, n }: { project: Project; n: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
      {/* Zooming media */}
      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
        <CardMedia project={project} />
      </div>
      {/* Subtle base vignette */}
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-500" />
      {/* Frosted glass card */}
      <div className="absolute inset-x-4 bottom-4 rounded-xl overflow-hidden backdrop-blur-md bg-white/15 ring-1 ring-white/20 p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-teal-200 mb-1">
          {project.category}
        </p>
        <h3 className="text-base md:text-lg font-serif font-bold text-white leading-snug mb-1.5">
          {project.title}
        </h3>
        <p className="text-white/65 text-xs leading-relaxed line-clamp-2 mb-3 hidden sm:block">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-teal-200 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          View case study <span aria-hidden>→</span>
        </span>
      </div>
      {/* Number badge */}
      <span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/15 text-white/55 text-[10px] font-mono">
        {n}
      </span>
    </div>
  )
}

// ─── Entry animation per column position ─────────────────────────────────────

function entryProps(index: number, isInView: boolean) {
  const fromLeft = index % 2 === 0
  return {
    initial: { opacity: 0, x: fromLeft ? -50 : 50, y: 10 },
    animate: isInView
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0, x: fromLeft ? -50 : 50, y: 10 },
    transition: {
      duration: 1.1,
      delay: 0.2 + (index % 2) * 0.14 + Math.floor(index / 2) * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [visitCursor, setVisitCursor] = useState({ x: 0, y: 0, visible: false })

  const handleCaseStudyMouseMove = useCallback((e: React.MouseEvent) => {
    setVisitCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
  }, [])
  const handleCaseStudyMouseEnter = useCallback((e: React.MouseEvent) => {
    setVisitCursor({ x: e.clientX, y: e.clientY, visible: true })
  }, [])
  const handleCaseStudyMouseLeave = useCallback(() => {
    setVisitCursor((prev) => ({ ...prev, visible: false }))
  }, [])

  const activeProjects = projects
    .filter((project) => project.active !== false)
    .sort((a, b) => {
      const numA = parseInt(a.id, 10)
      const numB = parseInt(b.id, 10)
      if (!Number.isNaN(numA) && !Number.isNaN(numB)) return numA - numB
      return String(a.id).localeCompare(String(b.id))
    })

  return (
    <section id="work" ref={ref} className="relative bg-teal-content pt-8 md:pt-10 overflow-x-hidden">
      {/* ─── My Work header ─── */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] md:min-h-[480px]">
          {/* Left: large image */}
          <motion.div
            className="relative overflow-visible min-h-[280px] md:min-h-0 order-2 md:order-1 overflow-hidden md:overflow-visible"
            initial={{ opacity: 0, x: '-35%' }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-35%' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 md:inset-y-0 md:left-0 md:right-0 md:-right-[12%] md:-top-6 md:-bottom-6 z-10">
              <Image
                src={WORK_HEADER_IMAGE}
                alt="Workspace and design process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Right: teal text block */}
          <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 bg-teal-content md:bg-[#3d6b6d] order-1 md:order-2 z-20">
            <motion.div
              className="max-w-sm"
              variants={headerTextVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.p
                variants={headerTextItem}
                className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-4"
              >
                No Blood, But Sweat and Tears
              </motion.p>
              <motion.h2
                variants={headerTextItem}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3"
              >
                My Work
              </motion.h2>
              <motion.p
                variants={headerTextItem}
                className="text-sm text-white/60 mb-4"
              >
                Designed, prototyped, and shipped — with AI at every stage.
              </motion.p>
              <motion.div variants={headerTextItem}>
                <a
                  href={hashLink('/#work')}
                  onClick={(e) => {
                    e.preventDefault()
                    const projectsSection = document.querySelector('#projects-list')
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="inline-block text-sm uppercase tracking-wider text-white underline underline-offset-4 hover:no-underline transition-all cursor-pointer"
                >
                  Check it out
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom "Visit" cursor */}
      {visitCursor.visible && (
        <div
          className="pointer-events-none fixed z-[9999] hidden md:flex items-center justify-center w-[56px] h-[56px] rounded-full border-2 border-teal-dark bg-white/90 text-teal-dark text-[10px] font-semibold uppercase tracking-wider"
          style={{
            left: visitCursor.x,
            top: visitCursor.y,
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden
        >
          VISIT
        </div>
      )}

      {/* ─── Projects grid ─── */}
      <div
        id="projects-list"
        className="container mx-auto px-8 py-16 md:py-20"
        onMouseMove={visitCursor.visible ? handleCaseStudyMouseMove : undefined}
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch ${visitCursor.visible ? 'cursor-none' : ''}`}>
          {activeProjects.map((project, index) => {
            const n = String(index + 1).padStart(2, '0')
            const card = <CardCinematic project={project} n={n} />

            return (
              <motion.div
                key={project.id}
                {...entryProps(index, isInView)}
                whileHover={{ y: -6 }}
                className="transition-shadow duration-300 hover:shadow-2xl h-full"
              >
                {project.slug ? (
                  <Link
                    href={`/works/${project.slug}`}
                    className={`block h-full ${visitCursor.visible ? 'cursor-none' : ''}`}
                    onMouseEnter={handleCaseStudyMouseEnter}
                    onMouseLeave={handleCaseStudyMouseLeave}
                    onMouseMove={handleCaseStudyMouseMove}
                  >
                    <TiltCard className="h-full">{card}</TiltCard>
                  </Link>
                ) : (
                  <TiltCard className="h-full">{card}</TiltCard>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
