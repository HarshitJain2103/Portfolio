"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const statements = [
  "Production-grade AI systems at scale.",
  "Building scalable architectures with reliability.",
  "ML Intern at AdGrid & Full-Stack Engineer.",
  "5× Hackathon winner, Knight @ LeetCode (1918).",
  "Cloud & DevOps infrastructure with AWS & Docker.",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section id="about" ref={containerRef} className="relative py-16 md:py-0 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 sm:px-8 md:px-12 mb-0 py-12 md:py-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">1 — EXPERTISE</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Technical Arsenal</h2>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative flex items-center overflow-hidden py-0 gap-0 h-16 sm:h-20">
        <motion.div style={{ x: smoothX }} className="flex gap-10 sm:gap-16 md:gap-24 px-4 sm:px-8 md:px-12 whitespace-nowrap">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight text-white/90"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {statement}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-12 md:mt-16 mx-4 sm:mx-8 md:mx-12 h-px bg-linear-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
