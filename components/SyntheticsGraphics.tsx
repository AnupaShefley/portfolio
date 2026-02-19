'use client'

import { memo } from 'react'

type SvgProps = React.SVGProps<SVGSVGElement>

/** Hero: calendar-based scheduling interface concept */
export const SyntheticsHeroCalendar = memo(function SyntheticsHeroCalendar(props: SvgProps) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const vehicles = ['Vehicle 1', 'Vehicle 2', 'Vehicle 3']
  const cardColours = ['#0F766E', '#0D9488', '#14B8A6', '#2DD4BF']

  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-labelledby="synthetics-hero-title"
      {...props}
    >
      <title id="synthetics-hero-title">Calendar-based fleet scheduling interface</title>
      <defs>
        <linearGradient id="syn-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0F7F6" />
          <stop offset="1" stopColor="#F0FDFA" />
        </linearGradient>
        <filter id="syn-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="960" height="520" fill="url(#syn-bg)" />
      <rect x="40" y="32" width="880" height="456" rx="16" fill="white" stroke="#CCFBF1" strokeWidth="1" />

      {/* Header */}
      <rect x="40" y="32" width="880" height="48" rx="16" fill="#F0FDFA" />
      <rect x="40" y="64" width="880" height="1" fill="#99F6E4" />
      <text x="64" y="64" fontSize="14" fontWeight="700" fill="#0F766E">
        Weekly schedule
      </text>

      {/* Day headers */}
      <g transform="translate(200, 32)">
        {days.map((d, i) => (
          <g key={d} transform={`translate(${i * 108}, 0)`}>
            <rect width="100" height="48" fill="transparent" />
            <text x="50" y="30" fontSize="12" fontWeight="600" fill="#134E4A" textAnchor="middle">
              {d}
            </text>
          </g>
        ))}
      </g>

      {/* Vehicle rows and schedule cards */}
      {vehicles.map((v, vi) => (
        <g key={v}>
          <rect
            x="40"
            y={96 + vi * 140}
            width="160"
            height="140"
            fill={vi % 2 === 0 ? '#F0FDFA' : 'white'}
          />
          <text
            x="120"
            y={96 + vi * 140 + 75}
            fontSize="12"
            fontWeight="600"
            fill="#134E4A"
            textAnchor="middle"
          >
            {v}
          </text>
          {/* Route cards in grid */}
          {[0, 1, 2].map((di) => (
            <rect
              key={di}
              x={200 + di * 108 + 8}
              y={96 + vi * 140 + 24}
              width="84"
              height="44"
              rx="8"
              fill={cardColours[vi % cardColours.length]}
              fillOpacity="0.85"
              filter="url(#syn-shadow)"
            />
          ))}
          {vi === 0 && (
            <>
              <rect
                x={200 + 3 * 108 + 8}
                y={96 + 24}
                width="84"
                height="44"
                rx="8"
                fill={cardColours[1]}
                fillOpacity="0.7"
                filter="url(#syn-shadow)"
              />
              <rect
                x={200 + 5 * 108 + 8}
                y={96 + 80}
                width="84"
                height="44"
                rx="8"
                fill={cardColours[2]}
                fillOpacity="0.7"
                filter="url(#syn-shadow)"
              />
            </>
          )}
        </g>
      ))}

      {/* Grid lines */}
      {[1, 2].map((i) => (
        <line
          key={i}
          x1="40"
          y1={96 + i * 140}
          x2="920"
          y2={96 + i * 140}
          stroke="#99F6E4"
          strokeWidth="1"
        />
      ))}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={i}
          x1={200 + i * 108}
          y1="96"
          x2={200 + i * 108}
          y2="488"
          stroke="#99F6E4"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
})

/** Flow: Vehicles → Routes → Schedule → Telematics Data → Analysis */
export const SyntheticsFlowDiagram = memo(function SyntheticsFlowDiagram(props: SvgProps) {
  const steps = [
    { label: 'Vehicles', id: 'vehicles' },
    { label: 'Routes', id: 'routes' },
    { label: 'Schedule', id: 'schedule', highlight: true },
    { label: 'Telematics Data', id: 'telematics' },
    { label: 'Analysis', id: 'analysis' },
  ]

  return (
    <svg
      viewBox="0 0 800 160"
      role="img"
      aria-labelledby="synthetics-flow-title"
      {...props}
    >
      <title id="synthetics-flow-title">Synthetic telematics workflow: from vehicles to analysis</title>
      <defs>
        <linearGradient id="syn-step" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F0FDFA" />
          <stop offset="1" stopColor="#CCFBF1" />
        </linearGradient>
        <linearGradient id="syn-step-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0F766E" />
        </linearGradient>
      </defs>

      {steps.map((step, i) => (
        <g key={step.id}>
          <rect
            x={40 + i * 152}
            y="40"
            width="136"
            height="80"
            rx="12"
            fill={step.highlight ? 'url(#syn-step-highlight)' : 'url(#syn-step)'}
            stroke={step.highlight ? '#0D9488' : '#99F6E4'}
            strokeWidth={step.highlight ? 2 : 1}
          />
          <text
            x={108 + i * 152}
            y="82"
            fontSize="13"
            fontWeight={step.highlight ? 700 : 600}
            fill={step.highlight ? 'white' : '#134E4A'}
            textAnchor="middle"
          >
            {step.label}
          </text>
          {i < steps.length - 1 && (
            <path
              d={`M ${176 + i * 152} 80 L ${192 + i * 152} 80`}
              stroke="#5EEAD4"
              strokeWidth="2"
              markerEnd="url(#syn-arrow)"
            />
          )}
        </g>
      ))}
      <defs>
        <marker
          id="syn-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="#5EEAD4" />
        </marker>
      </defs>
    </svg>
  )
})
