"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreMiPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
        >
           <span className="font-display text-accent-red text-3xl uppercase tracking-widest block mb-4">// IDENTIFICACIÓN DEL ARTISTA</span>
           <h1 className="font-display text-[12vw] lg:text-9xl leading-[0.8] uppercase mb-12 tracking-tighter">
             BIO <br /> <span className="text-accent underline decoration-[20px]">TECHNICAL</span>
           </h1>
           <div className="space-y-8 font-bold text-2xl uppercase leading-tight text-muted">
              <p>
                Aje Martínez es un narrador visual y coleccionista de sonidos con base en la periferia de la cultura urbana. Con más de una década experimentando con la síntesis de texturas analógicas y el glitch digital.
              </p>
              <p>
                Su trabajo ha sido descrito como "una bofetada de realidad de alta definición", enfocándose en la intersección entre la música electrónica experimental y la fotografía documental de calle.
              </p>
              <div className="grid grid-cols-2 gap-8 border-brutal border-foreground p-8 bg-foreground text-background">
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">LOCATION</span>
                    <span>MADRID_URBANA</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">BORN</span>
                    <span>1995_DIGITAL</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">GEAR</span>
                    <span>MODULAR_SYNTH</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">LENS</span>
                    <span>35MM_PRIME</span>
                 </div>
              </div>
           </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
           <div className="absolute -top-10 -left-10 w-full h-full border-brutal border-accent mix-blend-multiply pointer-events-none z-0" />
           <div className="relative z-10 border-brutal border-foreground aspect-[4/5] bg-muted grayscale overflow-hidden shadow-brutal-accent">
              <Image 
                src="https://images.unsplash.com/photo-1549416801-6fcc78e3678b?q=80&w=1200&auto=format&fit=crop"
                alt="Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-10 right-0 bg-accent-red text-background px-8 py-4 font-display text-5xl lg:text-7xl uppercase -rotate-90 origin-bottom-right shadow-brutal border-brutal border-foreground">
                AJ_MRT 2026
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
