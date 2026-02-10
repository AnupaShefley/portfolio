import { memo } from 'react'

type SvgProps = React.SVGProps<SVGSVGElement>

export const Zero2HeroGraphic = memo(function Zero2HeroGraphic(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 460"
      role="img"
      aria-labelledby="zero2-hero-title zero2-hero-desc"
      {...props}
    >
      <title id="zero2-hero-title">ZERO2 MDM overview</title>
      <desc id="zero2-hero-desc">
        Illustration of the ZERO2 master data management hub connecting source systems to
        downstream analytics and operations, inspired by the Murphy Oil MDM case study.
      </desc>

      <defs>
        <linearGradient id="zero2-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0F2FE" />
          <stop offset="1" stopColor="#ECFEFF" />
        </linearGradient>
        <linearGradient id="zero2-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0F766E" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>

      {/* Background panel */}
      <rect x="32" y="28" width="896" height="404" rx="32" ry="32" fill="url(#zero2-bg)" />
      <rect
        x="64"
        y="60"
        width="832"
        height="340"
        rx="26"
        ry="26"
        fill="white"
        stroke="#E2E8F0"
      />

      {/* Left column – source systems */}
      <g transform="translate(92,94)">
        <text x="0" y="-10" fontSize="13" fontWeight="600" fill="#0F172A" letterSpacing="0.12em">
          SOURCES
        </text>
        {['Production system', 'Commercial / contracts', 'Spreadsheet uploads'].map(
          (label, index) => (
            <g key={label} transform={`translate(0, ${index * 70})`}>
              <rect width="210" height="52" rx="16" ry="16" fill="#F9FAFB" stroke="#E2E8F0" />
              <circle cx="24" cy="26" r="8" fill="#38BDF8" />
              <rect x="42" y="18" width="140" height="6" rx="3" ry="3" fill="#CBD5F5" />
              <rect x="42" y="30" width="90" height="6" rx="3" ry="3" fill="#E5E7EB" />
              <text x="42" y="46" fontSize="11" fontWeight="500" fill="#0F172A">
                {label}
              </text>
            </g>
          ),
        )}
      </g>

      {/* Central hub – ZERO2 */}
      <g transform="translate(340,106)">
        <rect
          width="280"
          height="212"
          rx="26"
          ry="26"
          fill="#ECFEFF"
          stroke="#BAE6FD"
          strokeWidth="1.2"
        />
        <text x="24" y="40" fontSize="18" fontWeight="700" fill="#0F172A">
          ZERO2 MDM hub
        </text>
        <text x="24" y="62" fontSize="11" fill="#64748B">
          Golden records · lineage · approvals
        </text>

        {/* Inner tiles */}
        <g transform="translate(24,88)">
          <rect width="112" height="60" rx="14" ry="14" fill="#EEF2FF" />
          <text x="16" y="26" fontSize="12" fontWeight="600" fill="#1E293B">
            Match & merge
          </text>
          <text x="16" y="42" fontSize="10" fill="#6B7280">
            rules · thresholds
          </text>
        </g>

        <g transform="translate(148,88)">
          <rect width="112" height="60" rx="14" ry="14" fill="#ECFDF5" />
          <text x="16" y="26" fontSize="12" fontWeight="600" fill="#14532D">
            Steward review
          </text>
          <text x="16" y="42" fontSize="10" fill="#15803D">
            worklists
          </text>
        </g>

        <g transform="translate(24,158)">
          <rect width="236" height="36" rx="12" ry="12" fill="#0F766E" />
          <text x="20" y="24" fontSize="11" fontWeight="600" fill="white">
            Publish canonical view to analytics, planning and operations
          </text>
        </g>
      </g>

      {/* Right column – consumers */}
      <g transform="translate(680,104)">
        <text x="0" y="-10" fontSize="13" fontWeight="600" fill="#0F172A" letterSpacing="0.12em">
          CONSUMERS
        </text>

        {['Reporting & BI', 'Planning models', 'Operational dashboards'].map((label, index) => (
          <g key={label} transform={`translate(0, ${index * 76})`}>
            <rect width="190" height="60" rx="18" ry="18" fill="white" stroke="#E2E8F0" />
            <rect x="18" y="18" width="80" height="6" rx="3" ry="3" fill="#CBD5F5" />
            <rect x="18" y="30" width="120" height="6" rx="3" ry="3" fill="#E5E7EB" />
            <text x="18" y="50" fontSize="11" fontWeight="500" fill="#0F172A">
              {label}
            </text>
          </g>
        ))}
      </g>

      {/* Flow arrows */}
      <g stroke="#CBD5F5" strokeWidth="2" fill="none" strokeLinecap="round">
        {/* From sources to hub */}
        <path d="M 304 132 H 340" />
        <path d="M 304 202 H 340" />
        <path d="M 304 272 H 340" />

        {/* From hub to consumers */}
        <path d="M 620 152 H 680" />
        <path d="M 620 228 H 680" />
        <path d="M 620 304 H 680" />
      </g>

      {/* KPI strip at bottom */}
      <g transform="translate(96,332)">
        <rect width="768" height="66" rx="18" ry="18" fill="#0F172A" />

        <g transform="translate(24,16)">
          <text x="0" y="14" fontSize="11" fill="#E5E7EB">
            BEFORE ZERO2
          </text>
          <text x="0" y="32" fontSize="13" fontWeight="500" fill="#F9FAFB">
            Spreadsheet-based reconciliations, conflicting asset IDs and unclear lineage.
          </text>
        </g>

        <g transform="translate(360,16)">
          <text x="0" y="14" fontSize="11" fill="#A7F3D0">
            AFTER ZERO2
          </text>
          <text x="0" y="32" fontSize="13" fontWeight="600" fill="#ECFEFF">
            Single governed view, auditable changes and trusted KPIs.
          </text>
        </g>

        <g transform="translate(676,14)">
          <rect width="68" height="36" rx="12" ry="12" fill="url(#zero2-accent)" />
          <text x="18" y="24" fontSize="14" fontWeight="700" fill="white">
            96%
          </text>
        </g>
      </g>
    </svg>
  )
})

export const Zero2StripGraphic = memo(function Zero2StripGraphic(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 960 220"
      role="img"
      aria-labelledby="zero2-strip-title zero2-strip-desc"
      {...props}
    >
      <title id="zero2-strip-title">ZERO2 outcomes strip</title>
      <desc id="zero2-strip-desc">
        Summary of key outcomes from the ZERO2 master data management initiative.
      </desc>

      <defs>
        <linearGradient id="zero2-strip-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ECFDF5" />
          <stop offset="1" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>

      <rect x="24" y="24" width="912" height="172" rx="26" ry="26" fill="url(#zero2-strip-bg)" />

      <g transform="translate(56,60)">
        <text x="0" y="0" fontSize="13" fontWeight="600" fill="#0F172A" letterSpacing="0.16em">
          OUTCOMES
        </text>
        <text x="0" y="26" fontSize="18" fontWeight="700" fill="#0F172A">
          A cleaner, more explainable data foundation for Murphy-style operations.
        </text>
      </g>

      {/* Three metric cards */}
      <g transform="translate(360,48)">
        <rect width="148" height="132" rx="20" ry="20" fill="white" stroke="#DCFCE7" />
        <text x="24" y="38" fontSize="32" fontWeight="700" fill="#16A34A">
          96%
        </text>
        <text x="24" y="62" fontSize="11" fill="#166534">
          of golden records
        </text>
        <text x="24" y="82" fontSize="11" fill="#16A34A">
          met quality rules after rollout
        </text>
      </g>

      <g transform="translate(536,48)">
        <rect width="148" height="132" rx="20" ry="20" fill="white" stroke="#E0F2FE" />
        <text x="24" y="38" fontSize="32" fontWeight="700" fill="#0284C7">
          -60%
        </text>
        <text x="24" y="62" fontSize="11" fill="#075985">
          manual reconciliation time
        </text>
        <text x="24" y="82" fontSize="11" fill="#0EA5E9">
          at month-end close
        </text>
      </g>

      <g transform="translate(712,48)">
        <rect width="148" height="132" rx="20" ry="20" fill="white" stroke="#E5E7EB" />
        <text x="24" y="38" fontSize="32" fontWeight="700" fill="#0F172A">
          1
        </text>
        <text x="24" y="62" fontSize="11" fill="#111827">
          shared asset catalogue
        </text>
        <text x="24" y="82" fontSize="11" fill="#4B5563">
          replacing local lists and
        </text>
        <text x="24" y="98" fontSize="11" fill="#4B5563">
          conflicting spreadsheets
        </text>
      </g>
    </svg>
  )
})

