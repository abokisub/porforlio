'use client';
import { motion } from 'framer-motion';
import { PlaySquare, TrendingUp, Users, Video } from 'lucide-react';

const stats = [
  { label: "Total Followers", value: "340K+", icon: Users },
  { label: "Likes", value: "3.2M+", icon: TrendingUp },
  { label: "Total Videos", value: "200+", icon: Video },
  { label: "Projects Delivered", value: "15+", icon: PlaySquare },
];

export function Creator() {
  return (
    <section id="creator" className="py-32 px-6 md:px-12 bg-secondary/5 relative z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm mb-6 border border-primary/20">
              Content Creator
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Muleka Arewa</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
              Beyond engineering, I am the creative force behind Muleka Arewa, sharing engaging entertainment content, comedy, and viral videos with a massive online community.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@mulekaarewa?_r=1&_t=ZS-97RsEice7ec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Watch Content
              </a>
              <button className="px-6 py-3 bg-transparent border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors">
                Sponsor / Partner
              </button>
            </div>
          </motion.div>

          {/* Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-6 md:p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-colors group">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-4 transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
