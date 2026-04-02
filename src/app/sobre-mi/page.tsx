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
            <div className="space-y-8 font-bold text-xl lg:text-2xl uppercase leading-tight text-muted">
              <p>
                Aje Martínez es un narrador visual y coleccionista de sonidos con base en la periferia de la cultura urbana. Mi viaje comenzó de forma casi accidental, heredando una cámara vieja que despertó una curiosidad latente.
              </p>
              <p>
                No fue hasta dar el salto a una cámara réflex cuando esa curiosidad se transformó en una búsqueda consciente y profesional. Pulí mi técnica entre bodas, videoclips y conciertos, definiendo un estilo que hoy fusiona la síntesis de texturas analógicas con el glitch digital.
              </p>
              <p className="text-foreground border-l-brutal border-accent pl-6 bg-accent/5 py-4">
                Entiendo la fotografía como una forma de observar sin contar demasiado: aprendiendo de cada disparo, capturando la energía del movimiento congelada en un solo bit de tiempo.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-brutal border-foreground p-8 bg-foreground text-background">
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">ORIGIN</span>
                    <span>ANALOG_HERITAGE</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">EVOLUTION</span>
                    <span>REFLEX_SHIFT</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">GEAR</span>
                    <span>MODULAR_SYNTH</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="opacity-60 text-sm">FOCUS</span>
                    <span>PURE_OBSERVATION</span>
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
                src="/images/sobre-mi/sobre-mi.jpg"
                alt="Retrato Aje Martínez"
                fill
                className="object-cover"
              />
           </div>
           
           {/* Artist Tag - Moved outside overflow-hidden but anchored to the image */}
           <div className="absolute bottom-12 -right-6 lg:-right-10 z-20 bg-accent-red text-background px-6 py-3 font-display text-4xl lg:text-6xl uppercase -rotate-90 origin-center shadow-brutal border-brutal border-foreground whitespace-nowrap">
             AJ_MRT 2026
           </div>
        </motion.div>
      </div>
    </div>
  );
}
