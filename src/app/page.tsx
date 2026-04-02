"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Music, LayoutGrid, User, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Teaser Card Component: Directs users to subpages.
 */
const TeaserCard = ({ title, href, icon: Icon, delay = 0 }: { title: string, href: string, icon: any, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group border-brutal border-foreground bg-background p-12 hover:bg-accent transition-all duration-300 relative overflow-hidden"
  >
     <Icon size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity" />
     <Icon size={40} className="mb-6 group-hover:scale-125 transition-transform" />
     <h3 className="font-display text-6xl uppercase tracking-tighter mb-8">{title}</h3>
     <Link 
       href={href}
       className="inline-flex items-center gap-4 bg-foreground text-background font-display text-2xl uppercase px-8 py-4 border-brutal border-foreground hover:bg-accent-red transition-all"
     >
       EXPLORAR <ArrowRight />
     </Link>
  </motion.div>
);

export default function Home() {
  return (
    <div className="relative overflow-x-hidden pt-20">
      {/* Massive Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-48 md:pt-32 px-6 overflow-hidden border-b-brutal border-foreground">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl z-10"
        >
          <div className="bg-accent-red text-background inline-block px-4 py-2 font-display text-xl md:text-2xl uppercase border-brutal border-foreground mb-8 md:mb-12 rotate-[-2deg]">
            ARTISTA URBANO // MULTIDISCIPLINAR
          </div>
          <h1 className="font-display text-[12vw] md:text-[15vw] lg:text-[14vw] leading-[0.7] tracking-tighter uppercase font-black">
            <span className="block text-accent text-glow-neon">AJE</span>
            <span className="block italic">MARTINEZ</span>
          </h1>
          
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <p className="max-w-xl text-xl md:text-2xl font-bold uppercase tracking-tight text-muted leading-[1.1] bg-background/80 backdrop-blur-sm p-4 border-l-brutal border-accent">
              Fundiendo la fotografía callejera con el experimentalismo sonoro. Rompiendo marcos, capturando frecuencias.
            </p>
            
            <Link 
              href="/fotografia"
              className="bg-accent text-background px-8 md:px-12 py-6 md:py-8 border-brutal border-foreground font-display text-3xl md:text-5xl uppercase shadow-brutal hover:-translate-y-2 hover:shadow-brutal-accent transition-all duration-300 flex items-center gap-4 md:gap-6"
            >
              EL LAB <ArrowRight className="w-8 h-8 md:w-16 md:h-16" />
            </Link>
          </div>
        </motion.div>

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2560&auto=format&fit=crop"
            alt="Atmósfera Urbana"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </section>

      {/* Navigation Teasers */}
      <section className="py-24 bg-foreground relative">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
           <TeaserCard title="Fotografía" href="/fotografia" icon={Camera} delay={0.1} />
           <TeaserCard title="Música" href="/musica" icon={Music} delay={0.2} />
           <TeaserCard title="Sobre mí" href="/sobre-mi" icon={User} delay={0.3} />
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-40 bg-background text-center relative overflow-hidden border-t-brutal border-foreground">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="z-10 relative"
         >
           <h2 className="font-display text-[12vw] lg:text-9xl leading-none uppercase mb-16">¿LISTO PARA <br /> <span className="text-accent-red underline decoration-[20px]">COLABORAR?</span></h2>
           <Link 
             href="/contacto"
             className="bg-accent text-background px-12 py-8 border-brutal border-foreground font-display text-4xl uppercase shadow-brutal hover:scale-110 transition-all duration-500 inline-flex items-center gap-6"
           >
             HABLEMOS <Send size={48} />
           </Link>
         </motion.div>
         
         <div className="absolute top-1/2 left-0 w-full h-1 bg-accent/20 z-0 rotate-[15deg] pointer-events-none" />
         <div className="absolute top-1/2 left-0 w-full h-1 bg-accent-red/20 z-0 -rotate-[15deg] pointer-events-none" />
      </section>
    </div>
  );
}
