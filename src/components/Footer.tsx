"use client";

import { Disc, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-32 bg-foreground text-background border-t-brutal border-foreground">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
        <div>
          <h2 className="font-display text-9xl uppercase mb-8 tracking-tighter">
            HABLE<span className="text-accent underline decoration-[15px]">MOS.</span>
          </h2>
          <p className="text-3xl font-bold uppercase leading-[1.1] text-muted-foreground italic">
            ¿TIENES UN PROYECTO QUE NECESITA UN <span className="text-accent">GIRO BRUTALISTA</span>?
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
           <a href="mailto:hello@ajemartinez.art" className="font-display text-4xl lg:text-6xl border-brutal border-background p-8 hover:bg-accent hover:text-foreground transition-all flex items-center justify-between group">
             ENVÍA UN MAIL <Send className="group-hover:translate-x-4 transition-transform" size={48} />
           </a>
           <div className="flex gap-4">
              <Link href="/instagram" className="flex-1 border-brutal border-background p-8 font-display text-4xl text-center hover:bg-accent-red transition-all cursor-pointer">INSTAGRAM</Link>
              <Link href="/twitter" className="flex-1 border-brutal border-background p-8 font-display text-4xl text-center hover:bg-accent-red transition-all cursor-pointer">TWITTER</Link>
           </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-muted/20 pt-12">
        <div className="flex flex-col gap-2">
          <div className="font-display text-2xl lg:text-3xl uppercase tracking-tighter">AJE MARTINEZ © 2026</div>
          <div className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] opacity-40">TODOS LOS DERECHOS RESERVADOS.</div>
        </div>

        <div className="flex items-center gap-4 text-accent animate-pulse font-display text-xl uppercase tracking-widest leading-none">
          <Disc size={20} /> SISTEMA_OPERATIVO_ACTIVO
        </div>

        <Link 
          href="https://www.nodalio.es/" 
          target="_blank" 
          className="flex flex-col items-center md:items-end group"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-2 group-hover:text-foreground transition-colors">DESIGNED & DEVELOPED BY</span>
          <span className="font-display text-4xl lg:text-5xl uppercase tracking-tighter group-hover:text-accent-red transition-all flex items-center gap-2">
            NODAL.IO <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground mt-2">© 2026 NODAL.IO • SYSTEMS & PEOPLE</span>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
