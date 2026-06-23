'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-background/80 border-b border-border/30">
      <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-1 z-50">
        HABUKHAN<span className="text-primary">.</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
        <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
        <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
        <Link href="#contact" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold shadow-lg shadow-primary/20">
          Let's Talk
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden z-50 text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border/30 p-8 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#experience" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Experience</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Projects</Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center mt-4 px-5 py-3.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity font-semibold">
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
