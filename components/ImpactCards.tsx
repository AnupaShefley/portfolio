'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, motion } from 'framer-motion'

const DURATION_MS = 2500
const EASE_OUT_CUBIC = (t: number) => 1 - Math.pow(1 - t, 3)

function useAnimatedNumber(target: number, isInView: boolean) {
  const [display, setDisplay] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const eased = EASE_OUT_CUBIC(progress)
      setDisplay(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return display
}

function useAnimatedRange(low: number, high: number, isInView: boolean) {
  const [lowVal, setLowVal] = useState(0)
  const [highVal, setHighVal] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const eased = EASE_OUT_CUBIC(progress)
      setLowVal(Math.round(low * eased))
      setHighVal(Math.round(high * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, low, high])

  return `${lowVal}–${highVal}`
}

interface ImpactCardsProps {
  id?: string
  sectionNum?: string
}

export function ImpactCards({ id, sectionNum }: ImpactCardsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px', amount: 0.2 })

  const rangeVal = useAnimatedRange(60, 80, isInView)
  const vehiclesVal = useAnimatedNumber(50, isInView)
  const interactionsNum = useAnimatedNumber(5, isInView)

  const cards = [
    { value: `${rangeVal}%`, label: 'reduction', desc: 'Schedule creation time' },
    { value: `${vehiclesVal}+`, label: 'vehicles', desc: 'Supported efficiently' },
    { value: `${interactionsNum}× fewer`, label: 'interactions', desc: 'Using copy workflows' },
  ]

  return (
    <section id={id}>
      {sectionNum && (
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-500/60 mb-2 select-none">
          {sectionNum}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-8">Impact</h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {cards.map(({ value, label, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-8 lg:p-10 text-center transition-all duration-300 hover:shadow-md hover:ring-indigo-200"
          >
            <p className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 tabular-nums">
              {value}
            </p>
            <p className="mt-3 text-xs font-semibold tracking-widest text-indigo-600 uppercase">
              {label}
            </p>
            <p className="mt-2 text-slate-500 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
