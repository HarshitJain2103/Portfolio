"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Flame, Target } from "lucide-react"

const achievements = [
  {
    label: "LeetCode Rating",
    value: "1918",
    subtitle: "Knight (Top ~3%)",
    link: "https://leetcode.com/u/_harshit_jain/",
  },
  {
    label: "Problems Solved",
    value: "1200+",
    subtitle: "LeetCode • CF • CC",
  },
  {
    label: "CodeChef Rating",
    value: "1569",
    subtitle: "2★ Rating",
    link: "https://www.codechef.com/users/myster_hj",
  },
  {
    label: "Codeforces Rating",
    value: "1313",
    subtitle: "Pupil",
    link: "https://codeforces.com/profile/_harshit_jain",
  },
  {
    label: "Hackathons",
    value: "5×",
    subtitle: "Winner & Finalist",
  },
]

const contestHighlights = [
  {
    title: "LeetCode Biweekly Contest 186",
    metric: "Global Rank 379 / 39k",
    context: "Achieved top 1% global contest finish among 39,000+ participants.",
    icon: Trophy,
  },
  {
    title: "CodeChef Starters 221",
    metric: "Global Rank 627",
    context: "Ranked 627 globally in competitive programming starters round.",
    icon: Target,
  },
  {
    title: "LeetCode Daily Consistency",
    metric: "500-Day Badge",
    context: "Earned prestigious 500-day continuous problem-solving milestone.",
    icon: Flame,
  },
  {
    title: "AlgoUniversity Selection",
    metric: "Shortlisted",
    context: "Selected for interview rounds among 20,000+ nationwide applicants.",
    icon: Award,
  },
]

const awards = [
  {
    title: "IIIT-Delhi IndustrySolve Winner",
    description: "2× 1st place (Idea-Thon & Product-a-Thon 2025) from 250+ teams. AI-powered assistive reading solution.",
    year: "2025",
    award: "₹40,000",
    image: "/IdeathonImage.jpeg",
  },
  {
    title: "HACKDATA '26 Runner-Up",
    description: "24-hour hackathon organized by Shiv Nadar University. Second position.",
    year: "2026",
    award: "₹60,000",
    image: "/HackdataImage.jpeg",
  },
  {
    title: "RIFT '26 3rd Place",
    description: "Multi-city National Hackathon by Physics Wallah. Third position.",
    year: "2026",
    award: "₹10,000",
    image: "/RiftImage.jpeg",
  },
  {
    title: "iQOO Monster Inside 8-Hour AI Hackathon",
    description: "4th place among 80 teams in a phone-first AI build.",
    year: "2026",
    award: "₹10,000",
    image: "/IQOO_Image.jpeg",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="relative pt-10 pb-8 px-4 sm:px-6 md:px-12 md:pt-12 md:pb-8 bg-[#0a0a0a]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 sm:mb-12 md:mb-14"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">4 — ACHIEVEMENTS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Recognition & Metrics</h2>
      </motion.div>

      {/* DSA & Platform Ratings */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
        {achievements.map((achievement, index) => (
          <motion.a
            key={achievement.label}
            href={achievement.link}
            target={achievement.link ? "_blank" : undefined}
            rel={achievement.link ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className={`block border border-white/10 p-4 sm:p-5 md:p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${
              achievement.link
                ? "hover:border-white/30 hover:bg-white/[0.02] cursor-pointer"
                : "hover:border-white/20"
            }`}
          >
            <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-1.5 sm:mb-2 uppercase truncate">
              {achievement.label}
            </p>
            <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-light mb-1 text-white">
              {achievement.value}
            </h3>
            <p className="text-[11px] sm:text-xs text-muted-foreground truncate">{achievement.subtitle}</p>
          </motion.a>
        ))}
      </div>

      {/* Contest & Global Ranking Highlights */}
      <div className="mb-16 md:mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xl md:text-2xl font-light mb-8 italic text-white/90"
        >
          Competitive Programming Highlights
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contestHighlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-white/10 rounded-lg p-5 bg-white/[0.015] hover:border-white/25 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconComponent className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[11px] font-semibold text-white px-2 py-0.5 rounded border border-white/15 bg-white/5">
                    {item.metric}
                  </span>
                </div>
                <h4 className="font-sans text-base font-light text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.context}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Awards & Hackathon Victories */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-2xl md:text-3xl font-light mb-12 italic"
        >
          Hackathon Victories
        </motion.h3>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-t border-white/10 py-6 group hover:border-white/20 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between sm:justify-start gap-2 mb-2">
                    <h4 className="font-sans text-lg sm:text-xl md:text-2xl font-light group-hover:text-white/70 transition-colors duration-300">
                      {award.title}
                    </h4>
                    <span className="sm:hidden font-mono text-xs font-semibold text-white px-2.5 py-0.5 border border-white/20 rounded-full bg-white/5 shrink-0">
                      {award.award}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{award.description}</p>
                  <p className="text-xs font-mono tracking-widest text-muted-foreground">{award.year}</p>
                </div>

                {award.image && (
                  <div className="w-full sm:w-40 md:w-48 aspect-video rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                )}

                <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                  <span className="font-mono text-sm font-semibold text-white px-3 py-1 border border-white/20 rounded-full bg-white/5">
                    {award.award}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10 mt-8" />
    </section>
  )
}
