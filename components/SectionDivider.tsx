'use client'

interface SectionDividerProps {
  topColor: string
  bottomColor: string
}

export default function SectionDivider({ topColor, bottomColor }: SectionDividerProps) {
  return (
    <div className="relative w-full overflow-hidden leading-[0] -mt-px" style={{ background: topColor }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,25 C240,50 480,5 720,30 C960,55 1200,10 1440,35 L1440,60 L0,60 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
