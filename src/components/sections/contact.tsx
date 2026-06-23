'use client';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, ArrowRight, Code, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background relative z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's build something remarkable.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Whether you're looking to build a new product, secure your infrastructure, or collaborate on tech education, my inbox is open.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ajamilubashir@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors p-4 rounded-2xl bg-secondary/20 border border-border/40 hover:border-primary/40 group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Email</div>
                  <div className="font-semibold">ajamilubashir@gmail.com</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors p-4 rounded-2xl bg-secondary/20 border border-border/40 hover:border-primary/40 group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">Send a message</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors p-4 rounded-2xl bg-secondary/20 border border-border/40 hover:border-primary/40 group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Calendly</div>
                  <div className="font-semibold">Schedule a meeting</div>
                </div>
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Code size={24} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Send size={24} /></Link>
              <Link href="https://www.linkedin.com/in/abubakar-jamilu-428960226?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedinIcon size={24} /></Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-8 md:p-10 rounded-[2rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
