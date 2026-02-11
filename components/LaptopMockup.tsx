import type { ReactNode } from 'react'

interface LaptopMockupProps {
  children: ReactNode
  /** Optional class for the outer wrapper (e.g. max-width, margin) */
  className?: string
  /** Slight 3D angle: 'right' (default, screen angled toward viewer from right), 'left', or 'none' */
  angle?: 'right' | 'left' | 'none'
}

export function LaptopMockup({
  children,
  className = '',
  angle = 'right',
}: LaptopMockupProps) {
  const transform =
    angle === 'right'
      ? 'rotateY(-6deg)'
      : angle === 'left'
        ? 'rotateY(6deg)'
        : 'none'

  return (
    <div
      className={`flex justify-center ${className}`}
      style={{ perspective: '1400px' }}
    >
      <div
        className="relative mx-auto w-full max-w-[92%] md:max-w-[85%] origin-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: transform !== 'none' ? transform : undefined,
        }}
      >
        {/* Screen + thin bezel */}
        <div className="relative rounded-t-[14px] border-[3px] border-neutral-700 bg-neutral-800 px-[10px] pt-[10px] pb-[6px] shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-[6px] bg-neutral-900">
            {children}
          </div>
          {/* Optional camera notch */}
          <div
            className="absolute left-1/2 top-[14px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-neutral-600"
            aria-hidden
          />
        </div>
        {/* Base / keyboard area */}
        <div className="relative h-5 rounded-b-xl border-2 border-t-0 border-neutral-700 bg-neutral-700 shadow-xl md:h-6" />
        <div
          className="absolute bottom-0 left-[12%] right-[12%] h-2 rounded-b-md bg-neutral-600"
          aria-hidden
        />
      </div>
    </div>
  )
}
