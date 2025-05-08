import type React from "react"

interface SimpleSpiral {
  className?: string
}

const SimpleSpiral: React.FC<SimpleSpiral> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {/* Simple, clean spiral */}
      <path
        d="M50,85 
           A35,35 0 0,0 85,50 
           A35,35 0 0,0 50,15 
           A25,25 0 0,0 25,40 
           A25,25 0 0,0 50,65 
           A15,15 0 0,0 65,50 
           A15,15 0 0,0 50,35 
           A10,10 0 0,0 40,45 
           A10,10 0 0,0 50,55 
           A5,5 0 0,0 55,50 
           A5,5 0 0,0 50,45"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default SimpleSpiral
