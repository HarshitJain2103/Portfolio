"use client"

import { motion } from "framer-motion"

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS", "SQL"],
  "Frontend": ["React", "Next.js", "React Native", "shadcn/ui", "Tailwind CSS", "D3.js"],
  "Backend": ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Nginx", "CI/CD"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Mongoose"],
  "Specializations": ["DSA", "OOP", "Generative AI", "Prompt Engineering", "Agile Scrum"],
}

const education = {
  school: "Guru Gobind Singh Indraprastha University",
  degree: "Bachelor of Technology in Computer Science",
  cgpa: "8.93",
  period: "Aug 2023 – Aug 2027",
  location: "New Delhi, India",
  image: "/cgpaSS.jpeg",
}

const certification = {
  title: "Oracle Cloud Infrastructure Certified Generative AI Professional",
  issued: "Oct 2025",
  expires: "Oct 2027",
  image: "/oracleCert.jpeg",
}

const internship = {
  title: "Cloud & DevOps Intern",
  company: "CodeSquadz",
  location: "Noida, UP, India",
  period: "Jun 2025 – Jul 2025",
  description: "Completed 2-month on-site internship working with AWS (EC2, S3, Lambda, DynamoDB, RDS, VPC, IAM) and Docker. Built CI/CD pipelines reducing deployment steps by ~40%.",
  image: "/codesquadzCert.jpeg",
}

export function EducationSkills() {
  return (
    <section id="education" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — EDUCATION & SKILLS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Learning & Expertise</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 mb-24">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 p-8 rounded-lg backdrop-blur-sm flex flex-col h-full"
        >
          <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">Education</h3>
          <h4 className="font-sans text-2xl font-light mb-2">{education.degree}</h4>
          <p className="text-muted-foreground mb-4">{education.school}</p>
          <div className="space-y-2 text-sm">
            <p><span className="text-muted-foreground">Location:</span> {education.location}</p>
            <p><span className="text-muted-foreground">Period:</span> {education.period}</p>
            <p><span className="font-mono font-semibold">CGPA:</span> {education.cgpa}</p>
          </div>
          {education.image && (
             <div className="mt-auto pt-6 aspect-video overflow-hidden rounded-lg border border-white/10">
                <img src={education.image} alt="CGPA Screenshot" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
          )}
        </motion.div>

        {/* Internship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="border border-white/10 p-8 rounded-lg backdrop-blur-sm flex flex-col h-full"
        >
          <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">Internship</h3>
          <h4 className="font-sans text-2xl font-light mb-2">{internship.title}</h4>
          <p className="text-muted-foreground mb-4">{internship.company}</p>
          <div className="space-y-2 text-sm">
            <p><span className="text-muted-foreground">Location:</span> {internship.location}</p>
            <p><span className="text-muted-foreground">Period:</span> {internship.period}</p>
            <p className="text-white/70 leading-relaxed mt-3">{internship.description}</p>
          </div>
          {internship.image && (
             <div className="mt-auto pt-6 aspect-video overflow-hidden rounded-lg border border-white/10">
                <img src={internship.image} alt="Internship Certificate" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
          )}
        </motion.div>
      </div>

      {/* Certification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border border-white/10 p-8 rounded-lg backdrop-blur-sm mb-24"
      >
        <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">Certification</h3>
        <h4 className="font-sans text-2xl font-light mb-4">{certification.title}</h4>
        <div className="space-y-2 text-sm mb-6">
          <p><span className="text-muted-foreground">Issued:</span> {certification.issued}</p>
          <p><span className="text-muted-foreground">Expires:</span> {certification.expires}</p>
        </div>
        {certification.image && (
             <div className="w-full md:w-96 aspect-video overflow-hidden rounded-lg border border-white/10">
                <img src={certification.image} alt="Oracle Certificate" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
        )}
      </motion.div>

      {/* Technical Skills Grid */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-2xl md:text-3xl font-light mb-12 italic"
        >
          Technical Skills
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([ category, skillList ], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h4 className="font-mono text-xs tracking-widest text-muted-foreground mb-3 uppercase">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] tracking-wider px-3 py-1.5 border border-white/10 rounded-full text-muted-foreground hover:border-white/30 hover:text-white/70 transition-colors duration-300"
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
      <div className="border-t border-white/10 mt-16" />
    </section>
  )
}
