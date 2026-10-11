"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <motion.a
        href="mailto:jainharshit2132005@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-[#2563eb]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">6 — CONTACT</p>
              <motion.h2
                className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-center md:text-left"
                animate={{
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                Let's <span className="italic">Build</span>
              </motion.h2>
            </div>

            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </motion.a>

      {/* Footer Info */}
      <div className="px-4 sm:px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LOCAL TIME</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/harshit-jain-9a6803316/" },
              { name: "GitHub", url: "https://github.com/HarshitJain2103" },
              { name: "LeetCode", url: "https://leetcode.com/u/_harshit_jain/" },
              { name: "CodeChef", url: "https://www.codechef.com/users/myster_hj" },
              { name: "Codeforces", url: "https://codeforces.com/profile/_harshit_jain" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
