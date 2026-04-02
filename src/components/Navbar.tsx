"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Fotografía", href: "/fotografia" },
    { name: "Música", href: "/musica" },
    { name: "Sobre mí", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl">
      <div className="bg-background border-brutal border-foreground px-4 md:px-8 py-4 flex items-center justify-between shadow-brutal-accent">
        <Link href="/" className="font-display text-2xl lg:text-3xl tracking-tighter uppercase font-black hover:text-accent transition-colors">
          AJE <span className="text-accent underline decoration-4">MARTINEZ</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 font-display text-lg tracking-tight uppercase">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`hover:text-accent transition-all duration-200 relative group ${pathname === item.href ? 'text-accent' : ''}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-1 bg-accent transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-1 border-brutal border-foreground hover:bg-accent transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-24 left-0 w-full bg-background border-brutal border-foreground p-8 flex flex-col gap-6 font-display text-4xl shadow-brutal-accent uppercase tracking-tighter"
        >
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`hover:text-accent border-b border-muted/20 pb-2 ${pathname === item.href ? 'text-accent' : ''}`}>
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
