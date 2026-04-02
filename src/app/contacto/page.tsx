"use client";

import { motion } from "framer-motion";
import { Send, Instagram, Twitter, Mail } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="font-display text-[14vw] lg:text-[12vw] leading-none uppercase mb-8 tracking-tighter">
            HABLE<span className="text-accent underline decoration-[20px]">MOS.</span>
          </h1>
          <p className="text-4xl font-bold uppercase leading-[1.1] text-muted italic lg:max-w-3xl">
            ¿TIENES UN PROYECTO QUE NECESITA UN <span className="text-accent">GIRO BRUTALISTA</span>? ESTOY DISPONIBLE PARA COLABORACIONES.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-col gap-8"
           >
              <a href="mailto:hello@ajemartinez.art" className="font-display text-4xl lg:text-7xl border-brutal border-foreground p-12 hover:bg-accent hover:text-background transition-all flex items-center justify-between group bg-foreground text-background">
                EMAIL <Send size={60} className="group-hover:translate-x-4 transition-transform" />
              </a>
              <div className="grid grid-cols-2 gap-6">
                 <a href="#" className="border-brutal border-foreground p-10 font-display text-4xl text-center hover:bg-accent-red hover:text-background transition-all">INSTAGRAM</a>
                 <a href="#" className="border-brutal border-foreground p-10 font-display text-4xl text-center hover:bg-accent-red hover:text-background transition-all">TWITTER</a>
              </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             className="border-brutal border-foreground p-12 bg-background flex flex-col gap-10"
           >
              <div className="space-y-4">
                 <span className="font-display text-accent-red text-2xl uppercase tracking-widest">// CONTACT_DETAILS</span>
                 <div className="flex items-center gap-4 text-3xl font-bold uppercase">
                    <Mail className="text-accent" /> HELLO@AJEMARTINEZ.ART
                 </div>
              </div>
              <div className="space-y-4">
                 <span className="font-display text-accent-red text-2xl uppercase tracking-widest">// CURRENT_STATUS</span>
                 <div className="flex items-center gap-4 text-3xl font-bold uppercase text-accent animate-pulse">
                    AVAILABLE_FOR_BOOKING_2026
                 </div>
              </div>
              <div className="mt-auto pt-10 border-t border-muted/20">
                 <p className="text-xl font-bold uppercase text-muted">AJE MARTINEZ - MULTIDISCIPLINARY VISIONARY</p>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
