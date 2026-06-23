'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: "2018",
    title: "Student",
    description: "Started the journey into technology, focusing on core programming concepts and problem-solving.",
  },
  {
    year: "2020",
    title: "Trainer",
    description: "Began empowering communities with digital skills. Impacting students at STEMLab Kano and British Council.",
  },
  {
    year: "2021",
    title: "Cybersecurity Specialist",
    description: "Deep-dived into securing systems, ethical hacking, and network security for various clients.",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    description: "Transitioned to building scalable digital products using Laravel, React, Next.js, and Flutter.",
  },
  {
    year: "Present",
    title: "Technology Entrepreneur & Founder",
    description: "Founded Fintech startups like Kobopoint. Creating content as Muleka Arewa to inspire the next generation.",
  }
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-32 relative w-full px-6 md:px-12 bg-background" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">My Story</h2>
          <div className="text-muted-foreground text-lg max-w-3xl space-y-6">
            <p>
              Born and raised in the bustling heart of Kano State, Nigeria, my journey hasn't been a straight line. At 26 years old, I look back at a path paved with late nights, unstable power supplies, and the relentless drive to build something meaningful out of nothing.
            </p>
            <p>
              Growing up, resources were scarce, and breaking into tech felt like an impossible dream. But every challenge became fuel. From typing out code on borrowed laptops to teaching myself how to secure networks, I fought through the noise to forge my own path.
            </p>
            <p>
              Today, I don't just build software—I build platforms that empower others who share that same struggle. My story is a testament to resilience: from a young dreamer in Kano to a founder, engineer, and creator shaping the digital future.
            </p>
          </div>
        </motion.div>

        <div className="relative border-l border-border/50 pl-8 md:pl-12 ml-4 md:ml-6 space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline node */}
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[39px] md:-left-[55px] top-1.5 ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                <span className="text-sm font-mono text-muted-foreground">{milestone.year}</span>
                <h3 className="text-xl md:text-2xl font-semibold">{milestone.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
