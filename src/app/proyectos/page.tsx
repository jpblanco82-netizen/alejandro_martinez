"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  { id: 1, title: "SERIE_URBANA_01", type: "CASE_001", img: "/images/proyectos/proyecto-1.jpg" },
  { id: 2, title: "EXPERIMENTO_SONORO_A", type: "CASE_002", img: "/images/proyectos/proyecto-2.jpg" },
  { id: 3, title: "ARQUITECTURA_BRUTAL", type: "CASE_003", img: "/images/proyectos/proyecto-3.jpg" },
  { id: 4, title: "TEXTURAS_DE_CALLE", type: "CASE_004", img: "/images/proyectos/proyecto-4.jpg" },
  { id: 5, title: "GLITCH_VISUAL_SERIES", type: "CASE_005", img: "/images/proyectos/proyecto-5.jpg" },
  { id: 6, title: "FRECUENCIAS_BAJAS", type: "CASE_006", img: "/images/proyectos/proyecto-6.jpg" },
];

export default function ProyectosPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextProject = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % projects.length);
  };

  const prevProject = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIdx]);

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
              layoutId={`proj-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedIdx(i)}
              className="group border-brutal border-foreground bg-foreground p-2 shadow-brutal hover:shadow-brutal-accent transition-all cursor-zoom-in"
            >
              <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                 <Image 
                   src={project.img}
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

      {/* Projects Lightbox Overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
             <motion.button 
               onClick={() => setSelectedIdx(null)} 
               className="absolute top-8 right-8 text-foreground hover:text-accent-red transition-colors z-[210] border-brutal border-foreground p-2 bg-background shadow-brutal"
             >
               <X size={48} />
             </motion.button>
             
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Navigation Buttons */}
                <button onClick={prevProject} className="absolute left-0 lg:-left-20 z-[210] p-4 bg-background border-brutal border-foreground hover:bg-accent transition-all hidden md:block">
                   <ChevronLeft size={48} />
                </button>
                <button onClick={nextProject} className="absolute right-0 lg:-right-20 z-[210] p-4 bg-background border-brutal border-foreground hover:bg-accent transition-all hidden md:block">
                   <ChevronRight size={48} />
                </button>

                {/* Main Case Study Image */}
                <motion.div 
                  layoutId={`proj-${projects[selectedIdx].id}`}
                  className="relative w-full max-w-6xl aspect-[16/9] md:h-[80vh] border-brutal border-foreground shadow-[24px_24px_0px_0px_var(--color-accent-red)] bg-foreground"
                >
                   <Image 
                     src={projects[selectedIdx].img}
                     alt={projects[selectedIdx].title}
                     fill
                     className="object-contain"
                     priority
                   />
                   <div className="absolute top-0 left-0 bg-accent text-background px-8 py-4 font-display text-3xl lg:text-5xl uppercase border-b-brutal border-r-brutal border-foreground">
                      {projects[selectedIdx].title}
                   </div>
                   <div className="absolute bottom-6 right-6 bg-background border-brutal border-foreground p-6 shadow-brutal max-w-md hidden lg:block">
                      <span className="font-display text-accent-red text-2xl uppercase underline decoration-2">{projects[selectedIdx].type}</span>
                      <p className="mt-4 font-bold text-lg uppercase leading-tight font-body">ESTUDIO DE CASO // EXPLORACIÓN DE TEXTURAS Y GEOMETRÍAS BRUTALISTAS EN ENTORNO URBANO.</p>
                   </div>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
