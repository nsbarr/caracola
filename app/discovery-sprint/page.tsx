"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import nautilusImage from '../../public/nautilus.jpg'

export default function DiscoverySprint() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full py-8 border-b border-gray-100 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-light tracking-wider text-xl flex items-center gap-2">
            <Image
              src={nautilusImage}
              alt="Caracola Studios Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-cover"
            />
            <span>CARACOLA STUDIOS</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Value Proposition */}
        <div className="max-w-2xl w-full text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
            Your First Month: <span className="font-normal">Discovery Sprint</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-light">
            Accelerate your AI journey in 30 days with a proven, expert-led process designed for mission-driven organizations.
          </p>
          <ul className="flex flex-col md:flex-row gap-4 justify-center mb-4 text-left text-base text-gray-700 font-light">
            <li>• Clarify your AI opportunities and align your team</li>
            <li>• Validate ideas with rapid prototyping</li>
            <li>• Walk away with a clear, actionable roadmap</li>
          </ul>
        </div>

        {/* Timeline/Stepper */}
        <div className="w-full max-w-3xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-2 font-semibold">1</div>
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-1">Deep Dive & Alignment</h2>
                <p className="text-gray-600 font-light text-sm">We immerse ourselves in your mission, challenges, and aspirations. Through interviews and workshops, we align on goals and success metrics.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-2 font-semibold">2</div>
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-1">Opportunity Mapping</h2>
                <p className="text-gray-600 font-light text-sm">We identify and prioritize the most promising AI opportunities for your organization, balancing ambition with feasibility and impact.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-2 font-semibold">3</div>
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-1">Prototyping & Validation</h2>
                <p className="text-gray-600 font-light text-sm">We rapidly prototype or simulate key solutions, gathering feedback from your team and stakeholders to validate direction.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-2 font-semibold">4</div>
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-1">Roadmap & Next Steps</h2>
                <p className="text-gray-600 font-light text-sm">We deliver a clear, actionable roadmap and recommendations, setting you up for long-term success—whether you continue with us or take the reins yourself.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="max-w-2xl w-full text-center mb-16">
          <h3 className="text-2xl font-light mb-4">What You'll Walk Away With</h3>
          <ul className="text-left text-base text-gray-700 font-light space-y-2 mx-auto max-w-md">
            <li>• A prioritized list of AI opportunities tailored to your mission</li>
            <li>• A validated prototype or concept</li>
            <li>• A clear, actionable roadmap for next steps</li>
            <li>• Stakeholder alignment and buy-in</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl w-full text-center"
        >
          <p className="text-lg text-gray-600 mb-10 font-light">
            Our Discovery Sprint is a focused, high-impact month designed to help mission-driven organizations rapidly clarify their AI opportunities, align stakeholders, and chart a clear, actionable path forward. Here's what you can expect:
          </p>
          <div className="grid gap-8 text-left mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-2">Week 1: Deep Dive & Alignment</h2>
              <p className="text-gray-600 font-light">We immerse ourselves in your mission, challenges, and aspirations. Through interviews, journey maps, and workshops, we align on goals and success metrics.</p>
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