"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const skills = {
  "Languages": ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  "AI & Machine Learning": ["RAG", "LLMs", "LangChain", "LangGraph", "Vector Embeddings", "TensorFlow", "Gemini 2.5 Flash"],
  "Backend & Systems": ["FastAPI", "Node.js", "Express.js", "REST APIs", "Redis", "PostgreSQL", "MongoDB", "Distributed Systems"],
  "Frontend": ["React.js", "Next.js", "D3.js", "HTML/CSS", "Tailwind CSS"],
  "Cloud & Infrastructure": ["AWS", "Docker", "Kubernetes", "CI/CD", "Git & GitHub"],
  "CS Fundamentals": ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS", "Complexity Analysis"],
}

const education = {
  school: "Guru Gobind Singh Indraprastha University",
  degree: "Bachelor of Technology in Computer Science Engineering",
  cgpa: "9.03 / 10",
  period: "2023 – 2027",
  location: "New Delhi, India",
  coursework: ["Data Structures & Algorithms", "Computer Networks", "AI & Machine Learning", "Database Management Systems", "Operating Systems"],
  image: "/cgpaSS.jpeg",
}

const certification = {
  title: "Oracle Cloud Infrastructure Certified Generative AI Professional",
  issuer: "Oracle Cloud Infrastructure",
  issued: "Oct 2025",
  expires: "Oct 2027",
  image: "/oracleCert.jpeg",
}

export function EducationSkills() {
  return (
    <section id="education" className="relative pt-8 pb-16 px-4 sm:px-6 md:px-12 md:pt-10 md:pb-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">5 — EDUCATION</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Learning & Expertise</h2>
      </motion.div>

      {/* Education & Certification Side-by-Side */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-14 md:mb-16">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm bg-white/[0.015] hover:border-white/25 flex flex-col justify-between transition-colors duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-accent" />
              <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Academic Degree</h3>
            </div>
            <h4 className="font-sans text-2xl md:text-3xl font-light mb-2 text-white">{education.degree}</h4>
            <p className="text-muted-foreground mb-4 font-light">{education.school}</p>

            <div className="space-y-2 text-sm mb-6">
              <p><span className="text-muted-foreground">Location:</span> {education.location}</p>
              <p><span className="text-muted-foreground">Duration:</span> {education.period}</p>
              <p><span className="font-mono font-semibold text-white">CGPA:</span> {education.cgpa} <span className="text-muted-foreground text-xs">(Cumulative)</span></p>
            </div>

            <div className="pt-4 border-t border-white/10 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span key={course} className="font-mono text-[10px] px-2.5 py-1 border border-white/10 rounded-full text-white/70">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {education.image && (
            <div className="mt-4 aspect-video overflow-hidden rounded-lg border border-white/10">
              <img
                src={education.image}
                alt="Academic record preview"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          )}
        </motion.div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="border border-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm bg-white/[0.015] hover:border-white/25 flex flex-col justify-between transition-colors duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-accent" />
              <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">Professional Certification</h3>
            </div>
            <h4 className="font-sans text-2xl md:text-3xl font-light mb-3 text-white">{certification.title}</h4>
            <p className="text-muted-foreground mb-4 font-light">{certification.issuer}</p>

            <div className="space-y-2 text-sm mb-6">
              <p><span className="text-muted-foreground">Issued:</span> {certification.issued}</p>
              <p><span className="text-muted-foreground">Validity:</span> {certification.expires}</p>
            </div>
          </div>

          {certification.image && (
            <div className="mt-4 aspect-video overflow-hidden rounded-lg border border-white/10">
              <img
                src={certification.image}
                alt="Oracle Generative AI Certification"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* Technical Skills Grid */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-2xl md:text-3xl font-light mb-12 italic"
        >
          Technical Skills & Technologies
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="p-4 sm:p-5 border border-white/10 rounded-lg bg-white/[0.01] hover:border-white/20 transition-all duration-300"
            >
              <h4 className="font-mono text-xs tracking-widest text-muted-foreground mb-3 uppercase">
                {category}
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] sm:text-[11px] tracking-wider px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/10 rounded-full text-muted-foreground hover:border-white/30 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10 mt-10" />
    </section>
  )
}
