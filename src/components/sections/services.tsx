'use client';
import { motion } from 'framer-motion';

const services = [
  { title: "Software Development", desc: "End-to-end web and mobile applications engineered for scale and performance." },
  { title: "Cybersecurity Consulting", desc: "Auditing, penetration testing, and securing corporate infrastructure." },
  { title: "Fintech Solutions", desc: "Building resilient financial technology platforms, wallets, and payment gateways." },
  { title: "Digital Skills Training", desc: "Comprehensive tech education and curriculum design for emerging talents." },
  { title: "API Development & Integration", desc: "Designing robust REST and GraphQL APIs for seamless system interoperability." },
  { title: "AI Integration & Automation", desc: "Leveraging artificial intelligence to automate business processes and enhance user experience." }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Delivering premium solutions across engineering, security, and consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-8 rounded-3xl bg-secondary/20 border border-border/40 hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
