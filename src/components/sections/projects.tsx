'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: "Kobopoint",
    category: "Fintech Platform",
    description: "A comprehensive financial technology platform providing airtime, data, bill payments, merchant services, and a robust wallet system.",
    tech: ["Laravel", "Next.js", "MySQL", "API Integrations"],
    impact: "Processed over 10k+ daily transactions, providing seamless utility payments for thousands of users.",
    architecture: "Microservices architecture utilizing Laravel for the core banking/wallet logic and Next.js for a lightning-fast client interface.",
    challenges: "Handling real-time transaction consistency and integrating with multiple third-party telecom providers securely.",
    links: { live: "https://www.kobopoint.com/", github: "#" },
    featured: true,
    image: "/kobopoint.png"
  },
  {
    title: "CyTech Injectors",
    category: "Technology Education Platform",
    description: "An interactive learning management system designed to teach Cybersecurity and Digital Literacy to a growing community.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    impact: "Trained 500+ students globally, establishing a strong community of tech enthusiasts.",
    architecture: "Monolithic Node.js backend with a decoupled React frontend, featuring real-time chat and progress tracking.",
    challenges: "Building a scalable interactive lab environment for cybersecurity training safely.",
    links: { live: "#", github: "#" },
    featured: true,
    image: "/cytech-injector.jpeg"
  },
  {
    title: "VTU Platform Ecosystem",
    category: "Telecom & Fintech Services",
    description: "A B2B Virtual Top-Up platform enabling small businesses to vend telecom services with automated APIs.",
    tech: ["PHP", "Vue.js", "PostgreSQL"],
    impact: "Empowered 200+ local merchants to start their own VTU businesses.",
    architecture: "Event-driven architecture to ensure webhook deliveries from telecom operators are never missed.",
    challenges: "Optimizing API response times under high concurrent load during peak hours.",
    links: { live: "https://amtpay.com.ng/", github: "#" },
    featured: false,
    image: "/amtpay.png"
  },
  {
    title: "Mobile App Suite",
    category: "Flutter Applications",
    description: "A collection of cross-platform mobile applications for e-commerce, fintech, and productivity.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    impact: "Combined 50k+ downloads across App Store and Google Play.",
    architecture: "Clean Architecture in Flutter using Riverpod for state management and Dio for networking.",
    challenges: "Ensuring 60fps performance on low-end Android devices while maintaining complex animations.",
    links: { live: "https://play.google.com/store/apps/details?id=com.vendlike.mobile", github: "#" },
    featured: false,
    image: "/vendlike.jpeg"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-secondary/10 relative z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A showcase of products engineered for scale, performance, and real-world impact.
            </p>
          </div>
          <Link href="https://github.com/HABUKHAN" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            View All on GitHub <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image / Visual Placeholder */}
              <div className={`lg:col-span-7 h-[300px] md:h-[500px] rounded-3xl bg-card border border-border/50 overflow-hidden relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover object-center z-10 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-mono text-xl z-10 group-hover:scale-105 transition-transform duration-700">
                    [ Project Visual / Screenshot ]
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">{project.category}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Architecture</h4>
                    <p className="text-sm text-muted-foreground">{project.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Business Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Challenges Solved</h4>
                    <p className="text-sm text-muted-foreground">{project.challenges}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <Link href={project.links.live} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={18} /> Live Preview
                  </Link>
                  <Link href={project.links.github} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Code size={18} /> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
