"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

interface LogoSliderProps {
  className?: string
}

const LogoSlider: React.FC<LogoSliderProps> = ({ className = "" }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (inView && isLoaded) {
      controls.start("visible")
    }
  }, [controls, inView, isLoaded])

  const logos = [
    {
      name: "IBM",
      src: "/placeholder.svg",
      width: 120,
    },
    {
      name: "Microsoft",
      src: "/placeholder.svg",
      width: 160,
    },
    {
      name: "Khan Academy",
      src: "/placeholder.svg",
      width: 140,
    },
    {
      name: "OpenTable",
      src: "/placeholder.svg",
      width: 150,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className={`w-full overflow-hidden ${className}`} ref={ref}>
      <motion.div
        className="flex items-center justify-center gap-16 md:gap-24 flex-wrap md:flex-nowrap"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {logos.map((logo, index) => (
          <motion.div key={index} className="py-4 px-6 flex items-center justify-center" variants={itemVariants}>
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={60}
              className="h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ maxWidth: logo.width }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default LogoSlider
