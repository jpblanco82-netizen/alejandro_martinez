"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
  "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38",
  "https://images.unsplash.com/photo-1519681393784-d120267923ad",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1493246507139-91e8bef99c02",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
];

export default function FotografiaPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-8 mb-20"
        >
          <Camera size={60} className="text-accent" />
          <h1 className="font-display text-[12vw] lg:text-9xl leading-none uppercase tracking-tighter">
            FOTOGRAFÍA
          </h1>
        </motion.div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative border-brutal border-foreground overflow-hidden group bg-foreground"
            >
              <Image 
                src={`${img}?q=80&w=1200&auto=format&fit=crop`}
                alt={`Photo ${i}`}
                width={1200}
                height={1600}
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 font-display text-xl uppercase bg-background text-foreground px-2 py-1 opacity-0 group-hover:opacity-100 transition-all">
                ARCH_002{i}
              </div>
            </motion.div>
          ))}
          
          <div className="relative border-brutal border-background p-12 bg-accent text-background flex flex-col justify-center gap-6">
             <h4 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter italic">"CAPTURANDO LA SOMBRA DEL SONIDO"</h4>
             <p className="text-xl font-bold uppercase leading-tight text-background/80">
               Documentando la intersección entre la música electrónica y el espacio urbano.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
