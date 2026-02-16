import { memo } from 'react'

type SvgProps = React.SVGProps<SVGSVGElement>

export const NavbarHeroVisualization = memo(function NavbarHeroVisualization(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-labelledby="navbar-hero-title navbar-hero-desc"
      {...props}
    >
      <title id="navbar-hero-title">Navigation bar redesign overview</title>
      <desc id="navbar-hero-desc">
        Conceptual view of the global navbar structure, key links and user entry points.
      </desc>

      <defs>
        <linearGradient id="navbar-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0F7F6" />
          <stop offset="1" stopColor="#F6FBFF" />
        </linearGradient>
        <linearGradient id="navbar-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0F766E" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="navbar-accent-soft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A5F3FC" />
          <stop offset="1" stopColor="#CCFBF1" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="960" height="520" fill="url(#navbar-bg)" />
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

      {/* Browser chrome */}
      <g transform="translate(72, 72)">
        <rect width="816" height="48" rx="12" ry="12" fill="#F1F5F9" stroke="#E2E8F0" />
        <circle cx="24" cy="24" r="6" fill="#EF4444" />
        <circle cx="48" cy="24" r="6" fill="#EAB308" />
        <circle cx="72" cy="24" r="6" fill="#22C55E" />
      </g>

      {/* Navbar bar */}
      <g transform="translate(72, 132)">
        <rect width="816" height="56" rx="14" ry="14" fill="url(#navbar-accent)" />
        <text x="32" y="36" fontSize="16" fontWeight="700" fill="white" letterSpacing="0.02em">
          Logo
        </text>
        {['Home', 'Products', 'Solutions', 'Resources', 'About'].map((label, i) => (
          <g key={label} transform={`translate(${180 + i * 100}, 18)`}>
            <rect
              width="76"
              height="28"
              rx="8"
              ry="8"
              fill={i === 1 ? 'rgba(255,255,255,0.25)' : 'transparent'}
            />
            <text
              x="38"
              y="20"
              fontSize="13"
              fontWeight={i === 1 ? 600 : 500}
              fill="white"
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        ))}
        <rect
          x="720"
          y="14"
          width="80"
          height="28"
          rx="999"
          ry="999"
          fill="white"
          fillOpacity="0.2"
        />
        <text x="760" y="33" fontSize="12" fontWeight="600" fill="white" textAnchor="middle">
          Sign in
        </text>
      </g>

      {/* Content area placeholder */}
      <g transform="translate(72, 208)">
        <rect width="816" height="248" rx="16" ry="16" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="408" y="130" fontSize="14" fill="#94A3B8" textAnchor="middle">
          Page content area
        </text>
        <g transform="translate(120, 80)">
          <rect width="160" height="100" rx="12" ry="12" fill="white" stroke="#E2E8F0" />
          <text x="80" y="52" fontSize="11" fill="#64748B" textAnchor="middle">
            Card 1
          </text>
        </g>
        <g transform="translate(320, 80)">
          <rect width="160" height="100" rx="12" ry="12" fill="white" stroke="#E2E8F0" />
          <text x="80" y="52" fontSize="11" fill="#64748B" textAnchor="middle">
            Card 2
          </text>
        </g>
        <g transform="translate(520, 80)">
          <rect width="160" height="100" rx="12" ry="12" fill="white" stroke="#E2E8F0" />
          <text x="80" y="52" fontSize="11" fill="#64748B" textAnchor="middle">
            Card 3
          </text>
        </g>
      </g>

      {/* KPI callouts */}
      <g transform="translate(72, 468)">
        <g transform="translate(0, 0)">
          <rect width="120" height="36" rx="8" ry="8" fill="#ECFDF5" />
          <text x="60" y="23" fontSize="11" fontWeight="600" fill="#166534" textAnchor="middle">
            Clear hierarchy
          </text>
        </g>
        <g transform="translate(140, 0)">
          <rect width="120" height="36" rx="8" ry="8" fill="#E0F2FE" />
          <text x="60" y="23" fontSize="11" fontWeight="600" fill="#1E40AF" textAnchor="middle">
            Consistent patterns
          </text>
        </g>
        <g transform="translate(280, 0)">
          <rect width="120" height="36" rx="8" ry="8" fill="#FEF3C7" />
          <text x="60" y="23" fontSize="11" fontWeight="600" fill="#92400E" textAnchor="middle">
            Improved findability
          </text>
        </g>
      </g>
    </svg>
  )
})

export const NavbarStructureDiagram = memo(function NavbarStructureDiagram(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 380"
      role="img"
      aria-labelledby="navbar-struct-title navbar-struct-desc"
      {...props}
    >
      <title id="navbar-struct-title">Navigation bar structure and information architecture</title>
      <desc id="navbar-struct-desc">
        Before and after structure showing primary nav items, secondary actions and responsive behaviour.
      </desc>

      <defs>
        <linearGradient id="navbar-struct-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F9FAFB" />
          <stop offset="1" stopColor="#ECFEFF" />
        </linearGradient>
        <linearGradient id="navbar-struct-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0F766E" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>

      <rect width="960" height="380" rx="32" ry="32" fill="url(#navbar-struct-bg)" />

      {/* Before */}
      <g transform="translate(40, 60)">
        <text x="0" y="-8" fontSize="14" fontWeight="700" fill="#0F172A">
          Before
        </text>
        <rect width="420" height="260" rx="20" ry="20" fill="white" stroke="#E5E7EB" />
        <g transform="translate(24, 24)">
          <rect width="372" height="44" rx="8" ry="8" fill="#F3F4F6" />
          <text x="24" y="28" fontSize="12" fill="#6B7280">
            Inconsistent grouping · Mixed priority · No clear CTA
          </text>
        </g>
        <g transform="translate(24, 88)">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={24 + i * 72}
              y={0}
              width="56"
              height="28"
              rx="6"
              ry="6"
              fill="#E5E7EB"
            />
          ))}
        </g>
        <text x="24" y="148" fontSize="11" fill="#9CA3AF">
          Many top-level items, unclear hierarchy
        </text>
      </g>

      {/* Arrow */}
      <g transform="translate(480, 180)">
        <path d="M0 0 L40 0" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
        <path d="M32 -8 L40 0 L32 8" fill="none" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="20" y="-16" fontSize="11" fontWeight="600" fill="#0F766E" textAnchor="middle">
          Redesign
        </text>
      </g>

      {/* After */}
      <g transform="translate(500, 60)">
        <text x="0" y="-8" fontSize="14" fontWeight="700" fill="#0F172A">
          After
        </text>
        <rect width="420" height="260" rx="20" ry="20" fill="white" stroke="#A7F3D0" />
        <g transform="translate(24, 24)">
          <rect width="372" height="44" rx="8" ry="8" fill="url(#navbar-struct-accent)" />
          <text x="24" y="28" fontSize="12" fontWeight="600" fill="white">
            Primary nav · Secondary actions · Clear CTA
          </text>
        </g>
        <g transform="translate(24, 88)">
          <rect x="0" y="0" width="72" height="32" rx="8" ry="8" fill="#0F766E" />
          <text x="36" y="21" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">
            Home
          </text>
          <rect x="88" y="0" width="72" height="32" rx="8" ry="8" fill="#CCFBF1" />
          <text x="124" y="21" fontSize="11" fontWeight="600" fill="#0F766E" textAnchor="middle">
            Products
          </text>
          <rect x="176" y="0" width="72" height="32" rx="8" ry="8" fill="#E0F2FE" />
          <text x="212" y="21" fontSize="11" fill="#1E40AF" textAnchor="middle">
            Solutions
          </text>
          <rect x="264" y="0" width="72" height="32" rx="8" ry="8" fill="#E0F2FE" />
          <text x="300" y="21" fontSize="11" fill="#1E40AF" textAnchor="middle">
            Resources
          </text>
          <rect x="352" y="0" width="44" height="32" rx="999" ry="999" fill="#FEF3C7" />
          <text x="374" y="21" fontSize="11" fontWeight="600" fill="#92400E" textAnchor="middle">
            Sign in
          </text>
        </g>
        <text x="24" y="148" fontSize="11" fill="#059669">
          Grouped by user need · Clear primary vs secondary · One prominent CTA
        </text>
      </g>

      {/* Legend */}
      <g transform="translate(40, 340)">
        <circle cx="8" cy="6" r="4" fill="#0F766E" />
        <text x="20" y="10" fontSize="11" fill="#64748B">
          Primary
        </text>
        <circle cx="100" cy="6" r="4" fill="#BAE6FD" />
        <text x="112" y="10" fontSize="11" fill="#64748B">
          Secondary
        </text>
        <circle cx="200" cy="6" r="4" fill="#FDE68A" />
        <text x="212" y="10" fontSize="11" fill="#64748B">
          CTA
        </text>
      </g>
    </svg>
  )
})

export const NavbarUserFlowDiagram = memo(function NavbarUserFlowDiagram(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 320"
      role="img"
      aria-labelledby="navbar-flow-title navbar-flow-desc"
      {...props}
    >
      <title id="navbar-flow-title">Key user flows through the navigation bar</title>
      <desc id="navbar-flow-desc">
        Entry points and decision paths users take when interacting with the global nav.
      </desc>

      <defs>
        <linearGradient id="navbar-flow-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F9FAFB" />
          <stop offset="1" stopColor="#F0FDFA" />
        </linearGradient>
      </defs>

      <rect width="960" height="320" rx="32" ry="32" fill="url(#navbar-flow-bg)" />

      {/* User entry */}
      <g transform="translate(80, 120)">
        <rect width="100" height="80" rx="16" ry="16" fill="#E0F2FE" stroke="#7DD3FC" />
        <text x="50" y="38" fontSize="12" fontWeight="600" fill="#0C4A6E" textAnchor="middle">
          User
        </text>
        <text x="50" y="58" fontSize="10" fill="#0369A1" textAnchor="middle">
          arrives
        </text>
      </g>

      {/* Navbar */}
      <g transform="translate(240, 100)">
        <rect width="200" height="120" rx="20" ry="20" fill="white" stroke="#14B8A6" strokeWidth="2" />
        <text x="100" y="50" fontSize="13" fontWeight="700" fill="#0F766E" textAnchor="middle">
          Global navbar
        </text>
        <text x="100" y="72" fontSize="10" fill="#64748B" textAnchor="middle">
          Primary · Secondary · CTA
        </text>
      </g>

      {/* Paths */}
      <g transform="translate(480, 120)">
        <rect width="100" height="80" rx="16" ry="16" fill="#CCFBF1" stroke="#5EEAD4" />
        <text x="50" y="45" fontSize="11" fontWeight="600" fill="#0F766E" textAnchor="middle">
          Browse
        </text>
        <text x="50" y="62" fontSize="10" fill="#0D9488" textAnchor="middle">
          Products / Solutions
        </text>
      </g>

      <g transform="translate(620, 120)">
        <rect width="100" height="80" rx="16" ry="16" fill="#FEF3C7" stroke="#FCD34D" />
        <text x="50" y="45" fontSize="11" fontWeight="600" fill="#92400E" textAnchor="middle">
          Sign in
        </text>
        <text x="50" y="62" fontSize="10" fill="#B45309" textAnchor="middle">
          Account
        </text>
      </g>

      <g transform="translate(760, 120)">
        <rect width="100" height="80" rx="16" ry="16" fill="#E0E7FF" stroke="#A5B4FC" />
        <text x="50" y="45" fontSize="11" fontWeight="600" fill="#3730A3" textAnchor="middle">
          Search
        </text>
        <text x="50" y="62" fontSize="10" fill="#4F46E5" textAnchor="middle">
          Find content
        </text>
      </g>

      {/* Arrows */}
      <g stroke="#94A3B8" strokeWidth="2" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead)">
        <path d="M180 160 L240 160" />
        <path d="M440 160 L480 160" />
        <path d="M580 160 L620 160" />
        <path d="M720 160 L760 160" />
      </g>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8" />
        </marker>
      </defs>
    </svg>
  )
})
