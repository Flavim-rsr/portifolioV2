"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function FloatingControls() {
  const { setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isDark = resolvedTheme === "dark";

  const btnClass = cn(
    "group flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200",
    "bg-background/80 border-border/60 text-muted-foreground",
    "hover:text-accent-teal hover:border-accent-teal/40 hover:bg-accent-teal/5",
    "backdrop-blur-sm"
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? 0 : 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 pointer-events-none"
      style={{ pointerEvents: scrolled ? "auto" : "none" }}
    >
      {/* Theme toggle */}
      {mounted && (
        <motion.button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className={btnClass}
          aria-label="Toggle theme"
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </motion.button>
      )}

      {/* Language toggle */}
      <motion.button
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={cn(btnClass, "flex-col gap-0 text-[10px] font-bold tracking-wider")}
        aria-label="Toggle language"
        title={language === "pt" ? "Switch to English" : "Mudar para Português"}
      >
        <Globe size={11} className="mb-0.5" />
        {language.toUpperCase()}
      </motion.button>

      {/* Thin vertical line below */}
      <div className="mx-auto w-[1px] h-10 bg-gradient-to-b from-border to-transparent" />
    </motion.div>
  );
}
