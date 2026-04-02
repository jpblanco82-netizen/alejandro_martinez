"use client";

import { motion } from "framer-motion";
import { LayoutGrid, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  { id: 1, title: "SERIE_URBANA_01", type: "CASE_001", img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3" },
  { id: 2, title: "EXPERIMENTO_SONORO_A", type: "CASE_002", img: "https://images.unsplash.com/photo-1557683311-eac922347aa1" },
  { id: 3, title: "ARQUITECTURA_BRUTAL", type: "CASE_003", img: "https://images.unsplash.com/photo-1508700115892-45ecd0562c3e" },
  { id: 4, title: "TEXTURAS_DE_CALLE", type: "CASE_004", img: "https://images.unsplash.com/photo-1449156003053-c3ca860daecf" },
  { id: 5, title: "GLITCH_VISUAL_SERIES", type: "CASE_005", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
  { id: 6, title: "FRECUENCIAS_BAJAS", type: "CASE_006", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" },
];

export default function ProyectosPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <h1 className="font-display text-[12vw] lg:text-9xl leading-none uppercase tracking-tighter">
            PROYECTOS <span className="text-accent underline decoration-[20px]">DESTACADOS</span>
          </h1>
          <LayoutGrid size={80} className="text-accent-red hidden lg:block" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group border-brutal border-foreground bg-foreground p-2 shadow-brutal hover:shadow-brutal-accent transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                 <Image 
                   src={`${project.img}?q=80&w=800&auto=format&fit=crop`}
                   alt={project.title}
                   fill
                   className="object-cover"
                 />
                 <div className="absolute top-4 right-4 bg-accent p-2 border-brutal border-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="text-background" />
                 </div>
              </div>
              <div className="p-6 bg-background border-t-brutal border-foreground">
                <span className="font-display text-accent-red text-xl uppercase">{project.type}</span>
                <h3 className="font-display text-4xl uppercase mt-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
