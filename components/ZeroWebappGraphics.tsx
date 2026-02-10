import { memo } from 'react'

type SvgProps = React.SVGProps<SVGSVGElement>

export const ZeroHeroVisualization = memo(function ZeroHeroVisualization(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-labelledby="zero-hero-title zero-hero-desc"
      {...props}
    >
      <title id="zero-hero-title">ZERO webapp data overview</title>
      <desc id="zero-hero-desc">
        Conceptual dashboard view of data pipelines, quality indicators and asset performance tiles.
      </desc>

      <defs>
        <linearGradient id="zero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0F7F6" />
          <stop offset="1" stopColor="#F6FBFF" />
        </linearGradient>
        <linearGradient id="zero-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0F766E" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="zero-accent-soft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A5F3FC" />
          <stop offset="1" stopColor="#CCFBF1" />
        </linearGradient>
        <clipPath id="zero-card">
          <rect x="0" y="0" width="280" height="160" rx="18" ry="18" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="960" height="520" fill="url(#zero-bg)" />
      <rect
        x="48"
        y="40"
        width="864"
        height="440"
        rx="32"
        ry="32"
        fill="white"
        stroke="#D1FAE5"
      />

      {/* Left sidebar – entities */}
      <g transform="translate(72,72)">
        <rect width="192" height="384" rx="24" ry="24" fill="#ECFEFF" stroke="#BAE6FD" />
        <text
          x="24"
          y="40"
          fontSize="18"
          fontWeight="600"
          fill="#0F766E"
          letterSpacing="0.04em"
        >
          ENTITIES
        </text>

        {/* Entity pills */}
        {['Wells', 'Pipelines', 'Terminals', 'Inventory'].map((label, index) => (
          <g key={label} transform={`translate(20, ${72 + index * 64})`}>
            <rect
              width="152"
              height="40"
              rx="999"
              ry="999"
              fill={index === 0 ? '#0F766E' : '#F1F5F9'}
            />
            <circle
              cx="20"
              cy="20"
              r="8"
              fill={index === 0 ? '#A5F3FC' : '#14B8A6'}
              opacity={index === 0 ? 1 : 0.8}
            />
            <text
              x="38"
              y="25"
              fontSize="13"
              fontWeight={index === 0 ? 600 : 500}
              fill={index === 0 ? 'white' : '#0F172A'}
            >
              {label}
            </text>
          </g>
        ))}

        {/* Data quality mini chart */}
        <g transform="translate(20, 332)">
          <text x="0" y="0" fontSize="11" fontWeight="500" fill="#0F172A">
            Data quality
          </text>
          <g transform="translate(0,10)">
            {[72, 80, 88, 92].map((height, i) => (
              <rect
                key={i}
                x={i * 14}
                y={32 - height / 4}
                width="10"
                height={height / 4}
                rx="2"
                ry="2"
                fill={i === 3 ? 'url(#zero-accent)' : '#A5F3FC'}
              />
            ))}
          </g>
        </g>
      </g>

      {/* Central pipeline */}
      <g transform="translate(296,120)">
        {/* Horizontal bus */}
        <rect x="0" y="72" width="420" height="10" rx="5" ry="5" fill="#E0F2FE" />
        <rect x="80" y="72" width="220" height="10" rx="5" ry="5" fill="url(#zero-accent)" />

        {/* Inbound connectors from entities */}
        {[40, 120, 200].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            <rect x="0" y="24" width="36" height="24" rx="8" ry="8" fill="#F9FAFB" />
            <circle cx="10" cy="36" r="3" fill="#22C55E" />
            <circle cx="18" cy="36" r="3" fill="#A855F7" />
            <circle cx="26" cy="36" r="3" fill="#EAB308" />
            <rect x="16" y="48" width="4" height="24" fill="#D1FAE5" />
          </g>
        ))}

        {/* Processing nodes */}
        <g transform="translate(40, 104)">
          <rect
            width="120"
            height="60"
            rx="16"
            ry="16"
            fill="url(#zero-accent-soft)"
            stroke="#BAE6FD"
          />
          <text x="20" y="26" fontSize="13" fontWeight="600" fill="#0F172A">
            Ingestion
          </text>
          <text x="20" y="42" fontSize="11" fill="#64748B">
            APIs · S3 · Files
          </text>
        </g>

        <g transform="translate(196, 104)">
          <rect
            width="120"
            height="60"
            rx="16"
            ry="16"
            fill="#EEF2FF"
            stroke="#C7D2FE"
          />
          <text x="20" y="26" fontSize="13" fontWeight="600" fill="#1E293B">
            Validation
          </text>
          <text x="20" y="42" fontSize="11" fill="#64748B">
            Rules · Matching
          </text>
        </g>

        <g transform="translate(352, 104)">
          <rect
            width="120"
            height="60"
            rx="16"
            ry="16"
            fill="#ECFEFF"
            stroke="#BAE6FD"
          />
          <text x="20" y="26" fontSize="13" fontWeight="600" fill="#0F172A">
            Publishing
          </text>
          <text x="20" y="42" fontSize="11" fill="#64748B">
            Downstream apps
          </text>
        </g>
      </g>

      {/* Right-hand KPI cards */}
      <g transform="translate(740,80)">
        <rect width="148" height="176" rx="22" ry="22" fill="white" stroke="#E5E7EB" />
        <text x="20" y="40" fontSize="12" fontWeight="600" fill="#64748B">
          MASTER RECORDS
        </text>
        <text x="20" y="78" fontSize="30" fontWeight="700" fill="#0F172A">
          2.3M
        </text>
        <text x="20" y="102" fontSize="11" fill="#10B981">
          +18% consolidated
        </text>

        <g transform="translate(20,124)">
          <rect width="108" height="32" rx="999" ry="999" fill="#ECFDF5" />
          <circle cx="16" cy="16" r="6" fill="#22C55E" />
          <text x="30" y="20" fontSize="11" fontWeight="500" fill="#166534">
            Golden records
          </text>
        </g>
      </g>

      <g transform="translate(740,280)">
        <rect width="148" height="176" rx="22" ry="22" fill="white" stroke="#E5E7EB" />
        <text x="20" y="40" fontSize="12" fontWeight="600" fill="#64748B">
          DATA QUALITY
        </text>
        <text x="20" y="78" fontSize="30" fontWeight="700" fill="#0F172A">
          96%
        </text>
        <text x="20" y="102" fontSize="11" fill="#0EA5E9">
          critical attributes
        </text>

        <g transform="translate(20,128)">
          {[0.86, 0.9, 0.96, 0.94, 0.97].map((value, i) => (
            <rect
              key={i}
              x={i * 18}
              y={40 - value * 32}
              width="10"
              height={value * 32}
              rx="3"
              ry="3"
              fill={i === 2 ? '#0EA5E9' : '#BAE6FD'}
            />
          ))}
        </g>
      </g>
    </svg>
  )
})

export const ZeroArchitectureDiagram = memo(function ZeroArchitectureDiagram(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 360"
      role="img"
      aria-labelledby="zero-arch-title zero-arch-desc"
      {...props}
    >
      <title id="zero-arch-title">ZERO webapp high-level architecture</title>
      <desc id="zero-arch-desc">
        Conceptual flow from source systems into the ZERO platform, then out to analytics and
        operational systems.
      </desc>

      <defs>
        <linearGradient id="zero-arch-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F9FAFB" />
          <stop offset="1" stopColor="#ECFEFF" />
        </linearGradient>
      </defs>

      <rect width="960" height="360" rx="32" ry="32" fill="url(#zero-arch-bg)" />

      {/* Source systems */}
      <g transform="translate(40,80)">
        <text x="0" y="-24" fontSize="13" fontWeight="600" fill="#0F172A">
          Source systems
        </text>
        {['SCADA', 'ERP', 'Field data', 'Spreadsheets'].map((label, i) => (
          <g key={label} transform={`translate(0, ${i * 52})`}>
            <rect width="140" height="40" rx="12" ry="12" fill="white" stroke="#E5E7EB" />
            <circle cx="20" cy="20" r="6" fill="#38BDF8" />
            <text x="36" y="25" fontSize="12" fontWeight="500" fill="#111827">
              {label}
            </text>
          </g>
        ))}
      </g>

      {/* ZERO core */}
      <g transform="translate(260,54)">
        <rect width="300" height="252" rx="26" ry="26" fill="white" stroke="#C7D2FE" />
        <text x="24" y="40" fontSize="14" fontWeight="700" fill="#1E293B">
          ZERO core platform
        </text>
        <text x="24" y="60" fontSize="11" fill="#6B7280">
          Master data · rules engine · approvals
        </text>

        {/* Inner modules */}
        <g transform="translate(24,88)">
          <rect width="252" height="48" rx="14" ry="14" fill="#EEF2FF" />
          <text x="20" y="28" fontSize="12" fontWeight="600" fill="#1E293B">
            Master data services
          </text>
          <text x="186" y="28" fontSize="11" fill="#4B5563">
            API
          </text>
        </g>

        <g transform="translate(24,148)">
          <rect width="252" height="48" rx="14" ry="14" fill="#ECFEFF" />
          <text x="20" y="28" fontSize="12" fontWeight="600" fill="#0F172A">
            Stewardship workspace
          </text>
          <text x="186" y="28" fontSize="11" fill="#4B5563">
            UI
          </text>
        </g>

        <g transform="translate(24,208)">
          <rect width="252" height="48" rx="14" ry="14" fill="#F9FAFB" />
          <text x="20" y="28" fontSize="12" fontWeight="600" fill="#111827">
            Audit & lineage
          </text>
        </g>
      </g>

      {/* Arrows from sources to ZERO */}
      <g stroke="#BFDBFE" strokeWidth="2" fill="none" strokeLinecap="round">
        {[0, 52, 104, 156].map((offsetY) => (
          <path key={offsetY} d={`M180 ${112 + offsetY} H252`} />
        ))}
      </g>

      {/* Consumers */}
      <g transform="translate(612,70)">
        <text x="0" y="0" fontSize="13" fontWeight="600" fill="#0F172A">
          Consumers
        </text>

        <g transform="translate(0,18)">
          <rect width="160" height="72" rx="18" ry="18" fill="white" stroke="#E5E7EB" />
          <text x="20" y="30" fontSize="12" fontWeight="600" fill="#111827">
            Analytics & BI
          </text>
          <text x="20" y="48" fontSize="11" fill="#6B7280">
            Dashboards · reporting
          </text>
        </g>

        <g transform="translate(0,112)">
          <rect width="160" height="72" rx="18" ry="18" fill="white" stroke="#E5E7EB" />
          <text x="20" y="30" fontSize="12" fontWeight="600" fill="#111827">
            Operational apps
          </text>
          <text x="20" y="48" fontSize="11" fill="#6B7280">
            Planning · trading
          </text>
        </g>

        <g transform="translate(0,206)">
          <rect width="160" height="72" rx="18" ry="18" fill="white" stroke="#E5E7EB" />
          <text x="20" y="30" fontSize="12" fontWeight="600" fill="#111827">
            Data lake
          </text>
          <text x="20" y="48" fontSize="11" fill="#6B7280">
            Historical store
          </text>
        </g>
      </g>

      {/* Arrows from ZERO to consumers */}
      <g stroke="#BFDBFE" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M560 132 H612" />
        <path d="M560 196 H612" />
        <path d="M560 260 H612" />
      </g>
    </svg>
  )
})

