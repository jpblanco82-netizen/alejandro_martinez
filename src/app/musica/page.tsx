"use client";

import { motion } from "framer-motion";
import { Music, Disc, Rewind, FastForward, Play } from "lucide-react";

export default function MusicaPage() {
  const tracks = [
    { name: "FRECUENCIA_01_URBANA.WAV", time: "05:12", progress: 80 },
    { name: "GLITCH_CORE_EXPERIMENT.AIF", time: "03:45", progress: 40 },
    { name: "LOW_FIDELITY_STREET_LOOPS.MP3", time: "12:00", progress: 10 },
  ];

  return (
    <div className="pt-40 pb-24 min-h-screen bg-accent text-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8 mb-20"
        >
          <Music size={80} />
          <h1 className="font-display text-[12vw] lg:text-9xl leading-none uppercase tracking-tighter">
            LAB <span className="underline decoration-black decoration-[12px]">SONORO</span>
          </h1>
        </motion.div>
        
        <div className="space-y-12">
           {tracks.map((track, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border-brutal border-foreground p-8 md:p-12 shadow-brutal text-foreground flex flex-col md:flex-row items-center gap-12"
              >
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="w-48 h-48 border-brutal border-foreground rounded-full flex items-center justify-center p-4 bg-foreground relative shrink-0"
                 >
                   <div className="w-full h-full border-[10px] border-dotted border-accent/40 rounded-full" />
                   <Disc size={60} className="absolute text-background" />
                 </motion.div>

                 <div className="flex-1 text-left w-full">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="font-display text-3xl lg:text-5xl uppercase tracking-tighter">{track.name}</h4>
                       <span className="font-mono text-xl opacity-60">{track.time}</span>
                    </div>
                    <div className="w-full h-4 bg-muted/20 mb-8 overflow-hidden border-brutal border-foreground">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${track.progress}%` }}
                         className="h-full bg-accent-red"
                       />
                    </div>
                    <div className="flex gap-4">
                       <button className="bg-foreground text-background p-4 hover:bg-accent-red transition-colors"><Rewind /></button>
                       <button className="bg-accent text-background p-6 border-brutal border-foreground hover:scale-105 active:scale-95 transition-all"><Play fill="currentColor" /></button>
                       <button className="bg-foreground text-background p-4 hover:bg-accent-red transition-colors"><FastForward /></button>
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
