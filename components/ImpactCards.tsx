'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const DURATION_MS = 2500
const EASE_OUT_CUBIC = (t: number) => 1 - Math.pow(1 - t, 3)

function useAnimatedNumber(
  target: number,
  isInView: boolean,
  prefix = '',
  suffix = ''
) {
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
      setDisplay(Math.round(0 + (target - 0) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return `${prefix}${display}${suffix}`
}

function useAnimatedRange(
  low: number,
  high: number,
  isInView: boolean,
  suffix = ''
) {
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
      setLowVal(Math.round(0 + (low - 0) * eased))
      setHighVal(Math.round(0 + (high - 0) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, low, high])

  return `${lowVal}–${highVal}${suffix}`
}

interface ImpactCardsProps {
  id?: string
}

export function ImpactCards({ id }: ImpactCardsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px', amount: 0.2 })

  const rangeVal = useAnimatedRange(60, 80, isInView, '%')
  const vehiclesVal = useAnimatedNumber(50, isInView, '', '+')
  const interactionsNum = useAnimatedNumber(5, isInView)

  return (
    <section id={id}>
      <h2 className="text-2xl font-serif font-bold text-teal-dark mb-10">
        Impact
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        <div className="group rounded-2xl bg-gradient-to-br from-teal-50 to-white p-8 lg:p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-teal-200/40 transition-shadow hover:shadow-lg hover:ring-teal-300/50">
          <p className="text-4xl lg:text-5xl font-serif font-bold text-teal-800 tabular-nums">
            {rangeVal}
          </p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
            reduction
          </p>
          <p className="mt-2 text-teal-700/90">
            Schedule creation time
          </p>
        </div>

        <div className="group rounded-2xl bg-gradient-to-br from-teal-50 to-white p-8 lg:p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-teal-200/40 transition-shadow hover:shadow-lg hover:ring-teal-300/50">
          <p className="text-4xl lg:text-5xl font-serif font-bold text-teal-800 tabular-nums">
            {vehiclesVal}
          </p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
            vehicles
          </p>
          <p className="mt-2 text-teal-700/90">
            Supported efficiently
          </p>
        </div>

        <div className="group rounded-2xl bg-gradient-to-br from-teal-50 to-white p-8 lg:p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-teal-200/40 transition-shadow hover:shadow-lg hover:ring-teal-300/50">
          <p className="text-4xl lg:text-5xl font-serif font-bold text-teal-800 tabular-nums">
            {interactionsNum}× fewer
          </p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
            interactions
          </p>
          <p className="mt-2 text-teal-700/90">
            Using copy workflows
          </p>
        </div>
      </div>
    </section>
  )
}
