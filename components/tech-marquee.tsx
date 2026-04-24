"use client"

import { motion } from "framer-motion"

const techItems = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "PYTHON",
  "PYTORCH",
  "LATENCY",
  "INTUITION",
  "OPENAI",
  "EMPATHY",
  "WEBGL",
  "NODE.JS",
  "PRECISION",
]

const concepts = [
  "ARCHITECTURE",
  "SYSTEMS",
  "INTERFACES",
  "ALGORITHMS",
  "EMERGENCE",
  "COGNITION",
  "SYNTHESIS",
  "VELOCITY",
  "ENTROPY",
  "FLUX",
  "AXIOM",
  "TENSOR",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  // Only duplicate once to prevent excessive DOM nodes which causes lag
  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-4 flex items-center w-full">
      <motion.div
        className={`flex items-center gap-8 will-change-transform ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default text-transparent transition-all duration-300 hover:text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]"
          >
            {item}
            <span className="mx-8 text-white/20 [-webkit-text-stroke:0px] inline-block">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 flex flex-col justify-center overflow-hidden md:py-32 min-h-[40vh]">
      {/* Marquee Rows */}
      <div className="space-y-8 w-full flex flex-col items-center">
        <MarqueeRow items={techItems} direction="left" />
        <MarqueeRow items={concepts} direction="right" />
      </div>
    </section>
  )
}
