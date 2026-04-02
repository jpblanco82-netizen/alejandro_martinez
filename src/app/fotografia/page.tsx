"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Users, Zap, TreePine, Map, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/**
 * Helper function: Assigns random-looking but deterministic 
 * brutalist spans for the "Puzzle Mode" layout.
 */
const getPuzzleClasses = (index: number) => {
  const patterns = [
    "col-span-1 row-span-1", // Normal
    "col-span-2 row-span-2", // Big square
    "col-span-1 row-span-2", // Vertical tall
    "col-span-2 row-span-1", // Horizontal wide
    "col-span-1 row-span-1", // Normal
    "col-span-2 row-span-2", // Big square
    "col-span-1 row-span-1", // Normal
  ];
  return patterns[index % patterns.length];
};

const GallerySection = ({ 
  id, 
  title, 
  subtitle, 
  count, 
  folder, 
  icon: Icon, 
  accentColor = "text-accent",
  onImageClick
}: { 
  id: string, 
  title: string, 
  subtitle: string, 
  count: number, 
  folder: string, 
  icon: any, 
  accentColor?: string,
  onImageClick: (folder: string, index: number, title: string, count: number) => void
}) => {
  return (
    <section id={id} className="py-32 border-b-brutal border-foreground">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className={`flex items-center gap-4 ${accentColor} mb-4 font-display text-2xl uppercase tracking-widest`}>
              <Icon size={32} /> // PROYECTO_{id.toUpperCase()}
            </div>
            <h2 className="font-display text-[14vw] lg:text-[10vw] leading-none uppercase tracking-tighter">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-2xl font-bold uppercase italic text-muted leading-tight">
            {subtitle}
          </p>
        </motion.div>

        {/* Puzzle Mode Grid (Dense Packing) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <motion.div 
              key={i}
              layoutId={`img-${folder}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i % 4) * 0.1 }}
              onClick={() => onImageClick(folder, i, title, count)}
              className={`relative border-brutal border-foreground group overflow-hidden bg-foreground shadow-brutal hover:shadow-brutal-accent transition-all cursor-zoom-in min-h-[200px] md:min-h-[300px] ${getPuzzleClasses(i)}`}
            >
              <Image 
                src={`/images/fotografia/${folder}/foto-${i + 1}.jpg`}
                alt={`${title} - Capture ${i + 1}`}
                fill
                className="grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 font-display text-sm uppercase bg-background text-foreground px-2 py-1 opacity-0 group-hover:opacity-100 transition-all border border-foreground/20">
                REF_{id.slice(0, 1).toUpperCase()}{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function FotografiaPage() {
  const [selected, setSelected] = useState<{ folder: string, index: number, title: string, count: number } | null>(null);

  const sections = [
    { id: "personas", title: "PERSONAS", subtitle: "Identidades capturadas en el margen de la cultura urbana.", count: 10, folder: "personas", icon: Users, accentColor: "text-accent-red" },
    { id: "accion", title: "EN ACCIÓN", subtitle: "La energía del movimiento congelada en un solo bit de tiempo.", count: 10, folder: "en-accion", icon: Zap, accentColor: "text-accent" },
    { id: "naturaleza", title: "NATURALEZA", subtitle: "Texturas orgánicas que rompen la homogeneidad del cemento.", count: 10, folder: "naturaleza", icon: TreePine, accentColor: "text-accent-red" },
    { id: "espacios", title: "ESPACIOS", subtitle: "Arquitectura brutalista y rincones que respiran sonido gélido.", count: 10, folder: "espacios", icon: Map, accentColor: "text-accent" },
  ];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selected) return;
    const nextIndex = (selected.index + 1) % selected.count;
    setSelected({ ...selected, index: nextIndex });
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selected) return;
    const prevIndex = (selected.index - 1 + selected.count) % selected.count;
    setSelected({ ...selected, index: prevIndex });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <div className="pt-40 pb-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-8">
          <Camera size={60} className="text-accent-red animate-pulse" />
          <h1 className="font-display text-[15vw] lg:text-[14vw] leading-none uppercase tracking-tighter">
            PROYECTOS <span className="text-muted italic">VISUALES</span>
          </h1>
        </motion.div>
      </div>

      <nav className="sticky top-28 z-[80] w-full bg-background/90 backdrop-blur-md border-y-brutal border-foreground py-4 mb-20 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 whitespace-nowrap">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="font-display text-2xl lg:text-3xl uppercase hover:text-accent transition-colors flex items-center gap-2 group">
              <section.icon size={20} className="group-hover:rotate-12 transition-transform" /> {section.title}
            </a>
          ))}
        </div>
      </nav>

      {sections.map((section) => (
        <GallerySection 
          key={section.id} 
          {...section} 
          onImageClick={(folder, index, title, count) => setSelected({ folder, index, title, count })} 
        />
      ))}

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
             <motion.button 
               onClick={() => setSelected(null)} 
               className="absolute top-8 right-8 text-foreground hover:text-accent transition-colors z-[210] border-brutal border-foreground p-2 bg-background"
             >
               <X size={48} />
             </motion.button>
             
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Navigation Buttons */}
                <button onClick={prevImage} className="absolute left-0 lg:-left-20 z-[210] p-4 bg-background border-brutal border-foreground hover:bg-accent-red transition-all hidden md:block">
                   <ChevronLeft size={48} />
                </button>
                <button onClick={nextImage} className="absolute right-0 lg:-right-20 z-[210] p-4 bg-background border-brutal border-foreground hover:bg-accent-red transition-all hidden md:block">
                   <ChevronRight size={48} />
                </button>

                {/* Main Image */}
                <motion.div 
                  layoutId={`img-${selected.folder}-${selected.index}`}
                  className="relative w-full max-w-5xl aspect-[4/5] md:aspect-auto md:h-full border-brutal border-foreground shadow-[20px_20px_0px_0px_var(--color-accent)] bg-foreground"
                >
                   <Image 
                     src={`/images/fotografia/${selected.folder}/foto-${selected.index + 1}.jpg`}
                     alt={selected.title}
                     fill
                     className="object-contain"
                     priority
                   />
                   <div className="absolute bottom-0 left-0 bg-accent-red text-background px-6 py-3 font-display text-2xl lg:text-4xl uppercase border-t-brutal border-r-brutal border-foreground">
                      {selected.title} // 0{selected.index + 1}
                   </div>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-40 bg-foreground text-background text-center overflow-hidden relative">
         <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="z-10 relative">
           <h2 className="font-display text-8xl lg:text-9xl uppercase mb-12">¿TIENES UNA <br /> <span className="text-accent underline decoration-[15px]">VISIÓN?</span></h2>
           <a href="/contacto" className="inline-flex items-center gap-6 bg-accent text-background px-12 py-8 border-brutal border-foreground font-display text-4xl uppercase hover:bg-background hover:text-foreground transition-all">
             HABLEMOS DE FOTO <ArrowRight size={48} />
           </a>
         </motion.div>
      </div>
    </div>
  );
}
