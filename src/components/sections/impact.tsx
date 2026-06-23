'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export function Impact() {
  return (
    <section className="py-20 px-6 md:px-12 bg-primary text-primary-foreground relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2 flex items-center">
              <Counter from={0} to={500} /><span className="text-primary-foreground/70">+</span>
            </div>
            <div className="text-sm md:text-base font-medium text-primary-foreground/80">People Trained</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2 flex items-center">
              <Counter from={0} to={50} /><span className="text-primary-foreground/70">+</span>
            </div>
            <div className="text-sm md:text-base font-medium text-primary-foreground/80">Projects Delivered</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2 flex items-center">
              <Counter from={0} to={6} /><span className="text-primary-foreground/70">+</span>
            </div>
            <div className="text-sm md:text-base font-medium text-primary-foreground/80">Years Experience</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2 flex items-center">
              <Counter from={0} to={340} /><span className="text-primary-foreground/70">k</span>
            </div>
            <div className="text-sm md:text-base font-medium text-primary-foreground/80">TikTok Followers</div>
          </div>

        </div>
      </div>
    </section>
  );
}
