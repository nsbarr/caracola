import type React from "react"

interface SpiralLogoProps {
  className?: string
}

const SpiralLogo: React.FC<SpiralLogoProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M50,90 
        C30,90 15,75 15,50 
        C15,30 30,15 50,15 
        C65,15 75,25 75,40 
        C75,55 65,65 50,65 
        C40,65 35,60 35,50 
        C35,40 40,35 50,35 
        C55,35 58,38 58,43 
        C58,48 55,50 50,50 
        C48,50 47,49 47,47 
        C47,45 48,44 50,44"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default SpiralLogo
