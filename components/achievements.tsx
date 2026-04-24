"use client"

import { motion } from "framer-motion"

const achievements = [
  {
    label: "LeetCode Rating",
    value: "1789",
    subtitle: "1700+ Contest Rating",
  },
  {
    label: "Problems Solved",
    value: "800+",
    subtitle: "DSA Mastery",
  },
  {
    label: "CodeChef Rating",
    value: "1547",
    subtitle: "Competitive Programming",
  },
  {
    label: "Hackathon Wins",
    value: "4×",
    subtitle: "Including 2× First Place",
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
    description: "24-hour hackathon organized by Shiv Nagar University. Second position.",
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
    title: "Sprint4Good AI Hackathon Finalist",
    description: "Top 6 finalist among nationwide teams at IIT Delhi.",
    year: "2026",
    award: "Selected",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-8 md:px-12 md:py-24 bg-[#0a0a0a]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — ACHIEVEMENTS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Recognition & Stats</h2>
      </motion.div>

      {/* DSA & Competition Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:border-white/30 transition-colors duration-300"
          >
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-2 uppercase">
              {achievement.label}
            </p>
            <h3 className="font-sans text-3xl md:text-4xl font-light mb-1 text-white">
              {achievement.value}
            </h3>
            <p className="text-xs text-muted-foreground">{achievement.subtitle}</p>
          </motion.div>
        ))}
      </div>

      {/* Awards & Recognitions */}
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
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h4 className="font-sans text-xl md:text-2xl font-light mb-2 group-hover:text-white/70 transition-colors duration-300">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{award.description}</p>
                  <p className="text-xs font-mono tracking-widest text-muted-foreground">{award.year}</p>
                </div>

                {award.image && (
                  <div className="w-full md:w-48 aspect-video rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                )}

                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
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
      <div className="border-t border-white/10 mt-16" />
    </section>
  )
}
