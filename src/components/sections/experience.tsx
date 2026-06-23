'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Founder & Lead Instructor",
    company: "CyTech Injectors",
    period: "2023 - Present",
    description: "Spearheading a technology education platform. Empowering students with Cybersecurity and Digital Literacy training, fostering community impact.",
    skills: ["Leadership", "Cybersecurity", "EdTech", "Curriculum Design"]
  },
  {
    role: "Full Stack Developer",
    company: "Aisha Kwaku & Associates",
    period: "2022 - 2023",
    description: "Developed and maintained robust web applications, optimizing internal processes and delivering high-quality client solutions.",
    skills: ["Laravel", "React", "MySQL", "API Design"]
  },
  {
    role: "Digital Skills Trainer",
    company: "British Council",
    period: "2021 - 2022",
    description: "Delivered comprehensive digital skills workshops to youths, bridging the digital divide and enhancing tech literacy.",
    skills: ["Training", "Mentorship", "Public Speaking"]
  },
  {
    role: "Technical Instructor",
    company: "STEMLab Kano",
    period: "2020 - 2021",
    description: "Taught foundational programming and robotics, inspiring the next generation of engineers and problem solvers.",
    skills: ["Robotics", "Programming", "STEM Education"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A track record of delivering value through engineering, security, and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors group cursor-default"
            >
              <div className="flex justify-between items-start mb-6 flex-col sm:flex-row sm:items-center gap-2">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="text-muted-foreground font-medium">{exp.company}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-background border border-border text-xs font-mono text-muted-foreground">
                  {exp.period}
                </div>
              </div>
              <p className="text-muted-foreground/80 mb-8 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-md bg-background/50 border border-border/50 text-foreground/70">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
