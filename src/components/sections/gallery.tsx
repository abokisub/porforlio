'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = Array.from({ length: 11 }, (_, i) => `/image${i + 1}.jpeg`);

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-background relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm mb-6 border border-primary/20">
            Visual Story
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Featured Gallery
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A visual journey through events, speaking engagements, and professional moments.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid shadow-lg border border-border/40 bg-secondary/10"
            >
              <div className="relative w-full overflow-hidden cursor-pointer">
                <Image
                  src={src}
                  alt={`Gallery Event ${idx + 1}`}
                  width={800}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none mix-blend-overlay" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
