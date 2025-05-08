import type React from "react"

interface DaVinciSpiralProps {
  className?: string
}

const DaVinciSpiral: React.FC<DaVinciSpiralProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {/* Golden rectangle grid */}
      <path d="M40,40 L200,40 L200,200 L40,200 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M40,40 L200,40 L200,200 L40,200 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <path d="M40,40 L120,40 L120,120 L40,120 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <path d="M120,40 L200,40 L200,120 L120,120 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <path
        d="M120,120 L200,120 L200,200 L120,200 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
      />
      <path d="M40,120 L120,120 L120,200 L40,200 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />

      {/* Smaller subdivisions */}
      <path d="M40,120 L80,120 L80,160 L40,160 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <path d="M80,120 L120,120 L120,160 L80,160 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <path d="M80,160 L120,160 L120,200 L80,200 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />
      <path d="M40,160 L80,160 L80,200 L40,200 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3" fill="none" />

      {/* Golden spiral */}
      <path
        d="M120,120 
           A80,80 0 0,1 200,40 
           A80,80 0 0,1 120,120 
           A40,40 0 0,0 80,160 
           A40,40 0 0,0 120,120"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Fibonacci spiral continuation */}
      <path
        d="M80,160 
           A25,25 0 0,1 55,185 
           A15,15 0 0,1 70,170 
           A10,10 0 0,1 60,180 
           A6,6 0 0,1 66,174"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Geometric construction lines */}
      <line x1="120" y1="40" x2="120" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      <line x1="40" y1="120" x2="200" y2="120" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      <line x1="40" y1="40" x2="200" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      <line x1="200" y1="40" x2="40" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />

      {/* Circle at center */}
      <circle cx="120" cy="120" r="2" fill="currentColor" />
    </svg>
  )
}

export default DaVinciSpiral
