"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ChevronRight, X, ExternalLink, Sparkles } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  isCurrent?: boolean
  description: string
  bullets: {
    title: string
    content: string
  }[]
  tags: string[]
  certificateImage?: string
  certificateLabel?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "AdGrid",
    role: "ML Intern — Generative AI & Systems",
    period: "August 2026 – Present",
    location: "Gurugram, India",
    isCurrent: true,
    description:
      "Engineered production-grade GenAI microservices, resilient RAG pipelines, and conversational agent architectures for merchant automation.",
    bullets: [
      {
        title: "Asynchronous GenAI Image Pipeline",
        content:
          "Architected an asynchronous, dual-stage promotional asset generation microservice using FastAPI and Docker, featuring multi-provider failover, concurrency throttling, and automated fallback rendering.",
      },
      {
        title: "Enterprise RAG & Knowledge Engine",
        content:
          "Built a dynamic multi-tenant RAG service with pgvector and Gemini embeddings, implementing structure-aware chunking, real-time vector lifecycle synchronization, and client-side rate regulation.",
      },
      {
        title: "Conversational Agent & Intent Orchestrator",
        content:
          "Developed a low-latency conversational assistant using Gemini 2.5 Flash and Redis, utilizing a deterministic state machine for multi-turn context retention, transactional intent routing, and real-time SSE streaming.",
      },
    ],
    tags: [
      "FastAPI",
      "pgvector",
      "Gemini 2.5 Flash",
      "RAG Architecture",
      "Redis",
      "Docker",
      "AsyncIO",
      "State Machines",
      "SSE",
    ],
    certificateImage: "/offer_letter.png",
    certificateLabel: "View Offer Letter",
  },
  {
    company: "CodeSquadz",
    role: "Cloud & DevOps Intern",
    period: "June 2025 – July 2025",
    location: "Noida, India",
    isCurrent: false,
    description:
      "Hands-on cloud infrastructure automation, container orchestration, and continuous integration workflows.",
    bullets: [
      {
        title: "CI/CD & Pipeline Automation",
        content:
          "Designed and automated end-to-end CI/CD delivery pipelines on AWS using Docker, streamlining release cycles and reducing manual deployment overhead.",
      },
      {
        title: "Containerization & Cloud Infrastructure",
        content:
          "Deployed and maintained containerized environments with standardized configurations, ensuring consistency between staging and production workloads.",
      },
    ],
    tags: ["AWS", "Docker", "CI/CD", "DevOps Automation", "Linux"],
    certificateImage: "/codesquadzCert.jpeg",
    certificateLabel: "View Certificate",
  },
]

export function Experience() {
  const [activeCert, setActiveCert] = useState<string | null>(null)

  return (
    <section id="experience" className="relative pt-16 pb-4 px-4 sm:px-6 md:px-12 bg-[#070707]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 sm:mb-14"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">2 — EXPERIENCE</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">Industry Experience</h2>
          <p className="font-mono text-xs tracking-wider text-muted-foreground max-w-md">
            Production engineering across Machine Learning, GenAI microservices, and Cloud Infrastructure.
          </p>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="group relative border border-white/10 rounded-xl p-5 sm:p-6 md:p-10 bg-white/[0.015] backdrop-blur-sm hover:border-white/20 transition-all duration-300"
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white group-hover:text-white/90 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-white/20 text-muted-foreground bg-white/5">
                    @ {exp.company}
                  </span>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      PRESENT
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 text-xs font-mono text-muted-foreground shrink-0">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Bullets & Concepts */}
            <div className="py-6 space-y-4">
              {exp.bullets.map((b, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5 sm:gap-3">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
                  <p className="text-xs sm:text-sm md:text-[15px] text-white/80 leading-relaxed font-light">
                    <strong className="font-mono text-xs sm:text-sm font-medium text-white mr-1.5 block sm:inline">
                      {b.title}:
                    </strong>
                    <span>{b.content}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Tags and Certificate Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] sm:text-[11px] tracking-wider px-2.5 py-1 sm:px-3 sm:py-1 border border-white/10 rounded-full text-muted-foreground hover:border-white/30 hover:text-white transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {exp.certificateImage && (
                <button
                  type="button"
                  onClick={() => setActiveCert(exp.certificateImage!)}
                  className="inline-flex items-center gap-2 font-mono text-xs text-white/80 hover:text-white underline underline-offset-4 tracking-wider transition-colors shrink-0 cursor-pointer"
                >
                  <span>{exp.certificateLabel || "View Document"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#121212] border border-white/20 rounded-xl overflow-hidden shadow-2xl p-2"
            >
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeCert}
                alt="Certificate preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border */}
      <div className="border-t border-white/10 mt-8" />
    </section>
  )
}
