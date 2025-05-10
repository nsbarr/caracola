"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import LogoSlider from "@/components/logo-slider"
import * as Accordion from "@radix-ui/react-accordion"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-light tracking-wider text-xl flex items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/nautilus.jpg`}
              alt="Caracola Studios Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-cover"
            />
            <span>CARACOLA STUDIOS</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#about"
              className="text-gray-700 hover:text-black transition-colors duration-300 text-sm tracking-wide"
            >
              ABOUT
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-black transition-colors duration-300 text-sm tracking-wide"
            >
              SERVICES
            </Link>
            <Link
              href="#approach"
              className="text-gray-700 hover:text-black transition-colors duration-300 text-sm tracking-wide"
            >
              APPROACH
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-black transition-colors duration-300 text-sm tracking-wide"
            >
              TEAM
            </Link>
            <Link
              href="#journal"
              className="text-gray-700 hover:text-black transition-colors duration-300 text-sm tracking-wide"
            >
              JOURNAL
            </Link>
          </nav>
          <Button
            variant="ghost"
            className="rounded-none px-6 py-2 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
          >
            CONTACT
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-32 md:pt-52 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            <motion.div 
              className="max-w-2xl" 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"} 
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-10 leading-tight tracking-tight">
                AI Transformation for <span className="font-normal">Mission-Driven</span> Organizations
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-light">
                We help mission-driven organizations build their internal capacity to effectively wield AI technology
                through a mix of thought partnership, hands-on execution, and applied research.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="rounded-none px-8 py-6 text-sm tracking-wide bg-black text-white hover:bg-gray-900 transition-colors duration-300 h-auto">
                  START YOUR JOURNEY
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-none px-8 py-6 text-sm tracking-wide border-black text-black hover:bg-black hover:text-white transition-colors duration-300 h-auto"
                >
                  LEARN OUR PROCESS
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 flex flex-col items-center md:items-end justify-center md:justify-end"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <figure>
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/nautilus.jpg`}
                  alt="Nautilus"
                  width={224}
                  height={224}
                  className="w-56 h-56 md:w-[90%] md:h-auto max-w-[90%] object-cover opacity-90"
                />
                <figcaption className="text-xs italic text-gray-400 mt-2 text-center">Nautilus, by Rafael Araujo.</figcaption>
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-gray-500 font-light">Trusted By</p>
          </motion.div>
          <LogoSlider />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[url('/spiral-large.png')] bg-no-repeat bg-right-top bg-contain"></div>
        </div>
        <motion.div
          className="container mx-auto px-6 relative"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-16 text-center tracking-tight">Our Purpose</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              The social sector faces a critical moment. AI tools are transforming how organizations achieve their
              mission, but few social impact organizations have the in-house expertise to navigate this transition
              effectively.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Our purpose is to help mission-driven organizations build their internal capacity to effectively wield AI
              technology. We do this through a blend of thought partnership, hands-on execution, and applied research.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[url('/spiral-large.png')] bg-no-repeat bg-left-bottom bg-contain"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-light mb-16 text-center tracking-tight">How We Work</h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto text-center font-light">
              While every engagement is unique, we have a process for efficiently defining even the most ambiguous
              projects. You can expect us to partner in three ways:
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="group">
              <div className="border border-gray-100 p-10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none">
                  <div className="w-full h-full bg-[url('/spiral-small.png')] bg-no-repeat bg-right-top bg-contain"></div>
                </div>
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mb-8 relative">
                  <span className="text-2xl font-light">01</span>
                </div>
                <h3 className="text-xl font-light mb-6 tracking-tight">Removing Obstacles</h3>
                <p className="text-gray-600 font-light">
                  We identify and eliminate barriers to operational efficiency, allowing your organization to focus on
                  its mission.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="border border-gray-100 p-10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none">
                  <div className="w-full h-full bg-[url('/spiral-small.png')] bg-no-repeat bg-right-top bg-contain"></div>
                </div>
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mb-8">
                  <span className="text-2xl font-light">02</span>
                </div>
                <h3 className="text-xl font-light mb-6 tracking-tight">Discovering Possibilities</h3>
                <p className="text-gray-600 font-light">
                  We explore new opportunities and innovative approaches that AI can bring to your organization's work.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="border border-gray-100 p-10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none">
                  <div className="w-full h-full bg-[url('/spiral-small.png')] bg-no-repeat bg-right-top bg-contain"></div>
                </div>
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mb-8">
                  <span className="text-2xl font-light">03</span>
                </div>
                <h3 className="text-xl font-light mb-6 tracking-tight">Building Team Capacity</h3>
                <p className="text-gray-600 font-light">
                  We empower your team with the knowledge and skills needed to become AI-native in their operations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-20 text-center"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-lg font-light mb-8">It all starts with a focused one-month Discovery Sprint</p>
            <Button className="rounded-none px-8 py-6 text-sm tracking-wide bg-black text-white hover:bg-gray-900 transition-colors duration-300 h-auto">
              <Link href="/discovery-sprint" className="flex items-center">
                LEARN ABOUT OUR DISCOVERY SPRINT
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section id="approach" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
          <div className="w-full h-full bg-[url('/spiral-pattern.png')] bg-no-repeat bg-center bg-contain"></div>
        </div>
        <motion.div
          className="container mx-auto px-6 relative"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-16 text-center tracking-tight">Transformative Partnership</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              We bridge the gap between vision and execution, helping social sector organizations navigate AI
              transformation and scale their impact without compromising on integrity.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              As your technology thought partner, we help you clarify your vision with impactful deliverables:
            </p>

            <Accordion.Root type="single" collapsible className="mb-12 w-full columns-1 md:columns-2 gap-6">
              <Accordion.Item value="item-1" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      0-1 Vision Generation
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  We help you move from idea to actionable vision.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      Strategic roadmapping and vision alignment
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  Align your team and set a clear path forward.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      Research and development
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  Explore, prototype, and validate new solutions.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-4" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      Product requirements and design
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  Define what to build and how it should work.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-5" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      Implementation partner vetting
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  Find and evaluate the right technical partners.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-6" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      Safety, ethics, and risk mitigation
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  Ensure your AI work is responsible and safe.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-7" className="border-b block mb-4 break-inside-avoid">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center space-x-4 py-4 group text-left">
                    <div className="w-px h-8 bg-gray-300 group-hover:bg-black transition-colors duration-300"></div>
                    <span className="text-gray-600 font-light group-hover:text-black transition-colors duration-300">
                      Training and capacity building
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pl-8 pb-4 text-gray-500 text-sm italic transition-all duration-300 ease-in-out overflow-hidden data-[state=open]:max-h-40 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  Empower your team with the skills they need.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              The result is a high-quality, mission-aligned, significantly de-risked path to using AI to accelerate your
              organization's impact.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[url('/spiral-large.png')] bg-no-repeat bg-right-bottom bg-contain"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-light mb-16 text-center tracking-tight">About Us</h2>
            <p className="text-lg text-gray-600 mb-20 max-w-3xl mx-auto text-center font-light">
              We are technologists and social impact veterans with 50+ years of combined experience supporting
              organizations like Apple, IBM, Google, Khan Academy, Schmidt Futures, Cambiar Education, and One Project.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img
                  src="/placeholder.svg?height=600&width=450"
                  alt="Raphael Arar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-light mb-2 tracking-tight">Raphael Arar</h3>
              <p className="text-gray-500 text-sm tracking-wide mb-4">Founding Partner, Design</p>
              <p className="text-gray-600 font-light">(Bio details to be added)</p>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img
                  src="/placeholder.svg?height=600&width=450"
                  alt="Nick Barr"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-light mb-2 tracking-tight">Nick Barr</h3>
              <p className="text-gray-500 text-sm tracking-wide mb-4">Founding Partner, Strategy</p>
              <p className="text-gray-600 font-light">(Bio details to be added)</p>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img
                  src="/placeholder.svg?height=600&width=450"
                  alt="Kwaku Aning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-light mb-2 tracking-tight">Kwaku Aning</h3>
              <p className="text-gray-500 text-sm tracking-wide mb-4">Founding Partner, Development</p>
              <p className="text-gray-600 font-light">(Bio details to be added)</p>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img
                  src="/placeholder.svg?height=600&width=450"
                  alt="Zach Landes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-light mb-2 tracking-tight">Zach Landes</h3>
              <p className="text-gray-500 text-sm tracking-wide mb-4">Founding Partner, Technology</p>
              <p className="text-gray-600 font-light">(Bio details to be added)</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[url('/spiral-large.png')] bg-no-repeat bg-left-top bg-contain"></div>
        </div>
        <motion.div
          className="container mx-auto px-6 relative"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-6 tracking-tight">The Caracola Journal</h2>
              <p className="text-lg text-gray-600 font-light">
                A quarterly publication exploring the frontiers of AI technology for social impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  className="relative aspect-[3/4] bg-white p-8 shadow-lg"
                  variants={fadeInRight}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_60%)]"></div>
                  <div className="relative h-full flex flex-col">
                    <div className="mb-8">
                      <p className="text-sm tracking-wider text-gray-400 mb-4">LATEST ISSUE • Q2 2024</p>
                      <h3 className="text-2xl font-light mb-4 tracking-tight">The Rise of Foundation Models in Social Impact</h3>
                      <p className="text-gray-600 font-light">An in-depth exploration of how foundation models are transforming social sector organizations and what leaders need to know.</p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="text-sm text-gray-400">04.2024</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6 tracking-tight">Subscribe to Our Private Journal</h3>
                <p className="text-gray-600 mb-8 font-light">
                  Join mission-driven leaders receiving our quarterly deep dives into critical AI developments. Each issue provides actionable insights on emerging technologies and their implications for social impact organizations.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black transition-colors duration-300 outline-none font-light"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization name"
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black transition-colors duration-300 outline-none font-light"
                    />
                  </div>
                  <div>
                    <Button className="w-full rounded-none px-8 py-6 text-sm tracking-wide bg-black text-white hover:bg-gray-900 transition-colors duration-300 h-auto">
                      SUBSCRIBE TO THE JOURNAL
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 font-light">
                    Published quarterly. Free for qualifying organizations.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="w-full h-full bg-[url('/spiral-pattern-white.png')] bg-repeat bg-center"></div>
        </div>
        <motion.div
          className="container mx-auto px-6 text-center relative"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-light mb-10 tracking-tight">Ready to Transform Your Organization?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto font-light">
            Start your AI transformation journey with a team that understands both technology and social impact.
          </p>
          <Button
            variant="outline"
            className="rounded-none px-8 py-6 text-sm tracking-wide border-white text-white hover:bg-white hover:text-black transition-colors duration-300 h-auto"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-10 md:mb-0 flex items-center gap-3">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/nautilus.jpg`}
                alt="Caracola Studios Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-cover"
              />
              <div className="font-light tracking-wider text-xl">CARACOLA STUDIOS</div>
              <p className="text-sm text-gray-500 font-light ml-2">
                AI Transformation for Mission-Driven Organizations
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              <Link
                href="#about"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm tracking-wide"
              >
                ABOUT
              </Link>
              <Link
                href="#services"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm tracking-wide"
              >
                SERVICES
              </Link>
              <Link
                href="#approach"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm tracking-wide"
              >
                APPROACH
              </Link>
              <Link
                href="#team"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm tracking-wide"
              >
                TEAM
              </Link>
              <Link
                href="#journal"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm tracking-wide"
              >
                JOURNAL
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm tracking-wide"
              >
                CONTACT
              </Link>
            </nav>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-500 font-light">
            <p>© {new Date().getFullYear()} Caracola Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
