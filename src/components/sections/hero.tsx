'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Tv, Download } from 'lucide-react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/3d/hero-scene'), { ssr: false });

const roles = [
  "Software Engineer",
  "Cybersecurity Professional",
  "Tech Entrepreneur"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden bg-background pt-32 pb-20 lg:pt-40">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      {/* Overlay gradient to blend the bottom edge if needed */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-background/50" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-4 md:mt-12 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-xs md:text-sm font-mono tracking-[0.3em] text-muted-foreground uppercase mb-6">
            Abubakar Jamilu Bashir
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/60">
            HABUKHAN
          </h1>
          
          <div className="h-12 overflow-hidden mb-8 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg md:text-2xl font-bold text-primary absolute"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-4 font-light">
            Building Digital Products, Securing Systems & Empowering Communities Through Technology.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex items-center justify-center pointer-events-auto"
          >
            <a 
              href="/Abubakar Jamilu Bashir CV.pdf" 
              download
              target="_blank"
              className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all font-semibold shadow-lg shadow-primary/20 flex items-center gap-2 hover:-translate-y-1"
            >
              <Download size={20} /> Download My CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-primary bg-primary/10 px-6 py-2.5 rounded-full border border-primary/20 mx-auto w-fit shadow-lg shadow-primary/5"
          >
            <Tv size={20} /> Featured Programs with Tambari TV
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full max-w-4xl mx-auto pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-secondary/20 group relative"
            >
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/KtT4ttCKRoI" 
                title="TV Interview 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="relative z-0"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-secondary/20 group relative"
            >
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3nmyFVy9VBw" 
                title="TV Interview 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="relative z-0"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </div>
    </section>
  );
}
