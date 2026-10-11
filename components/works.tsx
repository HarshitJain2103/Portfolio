"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const projects = [
  {
    title: "KarigarMart",
    subtitle: "Multi-vendor AI E-commerce Platform (Sprint4Good Finalist – Top 6)",
    tags: ["React.js", "MongoDB", "Node.js", "Express.js", "Veo", "ElevenLabs"],
    image: "/karigarMartImage.jpeg",
    year: "2025",
    description: "Full-stack multi-vendor e-commerce platform with Cloudinary media pipelines and an automated AI marketing video system (Veo, ElevenLabs) delivering videos in < 60s with real-time SSE updates.",
    link: "https://github.com/HarshitJain2103/Karigar-Mart",
  },
  {
    title: "VisoRead",
    subtitle: "AI Assistive Vision System (Winner ×2 – IIITD Product-a-Thon)",
    tags: ["React Native", "ESP32", "Gemini Vision", "ElevenLabs", "NLP Engine"],
    image: "/visoImage.jpeg",
    year: "2025",
    description: "Hybrid online/offline AI assistive vision system achieving 80%+ offline OCR accuracy and ~60% latency reduction via parallel Gemini Vision + ElevenLabs pipelines with 300+ rule NLP engine.",
    isPatentPending: true,
  },
  {
    title: "Forensiq-Engine",
    subtitle: "Graph-Based Financial Fraud Detection (Physics Wallah Hackathon Winner)",
    tags: ["React.js", "Express.js", "Graph Theory", "D3.js", "DFS"],
    image: "/forensiqEngineImage.jpeg",
    year: "2026",
    description: "Graph-based financial forensics engine using DFS and temporal sliding windows to detect money laundering patterns across 100K+ transactions in under 30 seconds with interactive D3.js exploration.",
    link: "https://forensiq-eta.vercel.app",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative pt-8 pb-16 px-4 sm:px-6 md:px-12 md:pt-10 md:pb-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 sm:mb-12 md:mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">3 — PROJECTS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Featured Work</h2>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-6 sm:py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (project.isPatentPending) {
                  e.preventDefault()
                  alert("The source code for VisoRead is currently kept private as it is in the patenting process.")
                }
              }}
              data-cursor-hover={!project.isPatentPending}
              className={`group flex flex-col md:flex-row md:items-start justify-between gap-4 ${project.isPatentPending ? 'cursor-help' : ''}`}
            >
              {/* Year & Title */}
              <div className="flex-1">
                <span className="font-mono text-xs text-muted-foreground tracking-widest mb-1.5 block">
                  {project.year}
                </span>
                <motion.h3
                  className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 mb-2"
                  animate={{
                    x: hoveredIndex === index ? 20 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-light italic">{project.subtitle}</p>
                <p className="text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed mb-4">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] sm:text-[10px] tracking-wider px-2.5 py-1 sm:px-3 sm:py-1 border border-white/20 rounded-full text-muted-foreground whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}

        {/* Floating Image (Desktop only) */}
        <motion.div
          className="hidden md:block absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
