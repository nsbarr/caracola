"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DiscoverySprint() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full py-8 border-b border-gray-100 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-light tracking-wider text-xl flex items-center gap-2">
            <img src="/nautilus.jpg" alt="Caracola Studios Logo" className="h-8 w-8 object-cover" />
            <span>CARACOLA STUDIOS</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl w-full text-center"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Your First Month: <span className="font-normal">Discovery Sprint</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 font-light">
            Our Discovery Sprint is a focused, high-impact month designed to help mission-driven organizations rapidly clarify their AI opportunities, align stakeholders, and chart a clear, actionable path forward. Here's what you can expect:
          </p>
          <div className="grid gap-8 text-left mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-2">Week 1: Deep Dive & Alignment</h2>
              <p className="text-gray-600 font-light">We immerse ourselves in your mission, challenges, and aspirations. Through interviews and workshops, we align on goals and success metrics.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Week 2: Opportunity Mapping</h2>
              <p className="text-gray-600 font-light">We identify and prioritize the most promising AI opportunities for your organization, balancing ambition with feasibility and impact.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Week 3: Prototyping & Validation</h2>
              <p className="text-gray-600 font-light">We rapidly prototype or simulate key solutions, gathering feedback from your team and stakeholders to validate direction.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Week 4: Roadmap & Next Steps</h2>
              <p className="text-gray-600 font-light">We deliver a clear, actionable roadmap and recommendations, setting you up for long-term success—whether you continue with us or take the reins yourself.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-light mb-4 text-center">Ready to unlock your AI potential?</h3>
            <p className="text-gray-700 mb-6 text-center font-light">Book a free consultation to see if a Discovery Sprint is right for your organization.</p>
            <Button asChild className="rounded-none px-8 py-4 text-sm tracking-wide bg-black text-white hover:bg-gray-900 transition-colors duration-300 h-auto w-full">
              <Link href="/#contact">Book a Consultation</Link>
            </Button>
          </div>
          <Link href="/" className="text-gray-400 text-sm hover:text-black transition-colors">← Back to Home</Link>
        </motion.div>
      </main>
    </div>
  )
} 