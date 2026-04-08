"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navKeys = ["home", "about", "experience", "projects", "contact"] as const;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { t } = useLanguage();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLabels: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <>
      {/* Desktop Navbar — pill centralizado, só visível em md+ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <nav
          className={cn(
            "flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300",
            scrolled
              ? "bg-background/80 backdrop-blur-md border-border/60 shadow-lg shadow-black/5"
              : "bg-background/60 backdrop-blur-sm border-border/40 shadow-md shadow-black/5"
          )}
        >
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                activeSection === key
                  ? "bg-accent-teal/10 text-accent-teal"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {navLabels[key]}
            </button>
          ))}
        </nav>
      </motion.header>

      {/* Mobile — só o botão hamburger, canto superior direito */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        onClick={() => setMobileOpen(!mobileOpen)}
        className={cn(
          "md:hidden fixed top-4 right-4 z-50 p-2.5 rounded-full border transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border/60 shadow-lg shadow-black/5"
            : "bg-background/60 backdrop-blur-sm border-border/40 shadow-md shadow-black/5",
          "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Menu"
      >
        <AnimatePresence mode="wait" initial={false}>
          {mobileOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              <X size={16} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              <Menu size={16} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed top-16 right-4 z-40 w-44"
          >
            <div className="bg-background/95 backdrop-blur-md border border-border/60 rounded-2xl shadow-xl shadow-black/10 p-2">
              <ul className="flex flex-col gap-0.5">
                {navKeys.map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => {
                        scrollTo(key);
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                        activeSection === key
                          ? "bg-accent-teal/10 text-accent-teal"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {navLabels[key]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
