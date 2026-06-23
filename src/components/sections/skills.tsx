'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "Node.js", "Express", "MySQL", "PostgreSQL", "MongoDB"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    color: "from-sky-500/20 to-blue-600/20"
  },
  {
    title: "Cybersecurity",
    skills: ["Networking", "Security Awareness", "Ethical Hacking", "Penetration Testing"],
    color: "from-green-500/20 to-emerald-600/20"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-background relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Skill Ecosystem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse constellation of technologies I use to build, secure, and scale products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Decorative background grid lines */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
            <div className="w-[1px] h-full bg-border absolute left-1/2 -translate-x-1/2" />
            <div className="h-[1px] w-full bg-border absolute top-1/2 -translate-y-1/2" />
            <div className="w-[300px] h-[300px] border border-border rounded-full absolute" />
            <div className="w-[600px] h-[600px] border border-border rounded-full absolute" />
          </div>

          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm z-10 hover:border-primary/50 transition-colors"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-30 z-0 pointer-events-none`} />
              
              <h3 className="text-2xl font-semibold mb-6 relative z-10">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full bg-background border border-border/60 text-sm font-medium shadow-sm cursor-default hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
