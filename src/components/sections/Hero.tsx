"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCardStack from "@/components/ProjectCardStack";

const LETTERS = "FLAVIM".split("");

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { t } = useLanguage();
  const [splashDone, setSplashDone] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Splash animation: 2.8s total then fade out
    const timer = setTimeout(() => setSplashDone(true), 2600);
    const timer2 = setTimeout(() => setShowSplash(false), 3200);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          >
            {/* Background accent blob */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.07 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-[600px] h-[600px] rounded-full bg-accent-teal pointer-events-none"
            />

            <div className="flex items-end gap-0 md:gap-1 overflow-hidden px-4">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={
                    splashDone
                      ? { y: "-10%", opacity: 0, scale: 1.05 }
                      : { y: "0%", opacity: 1 }
                  }
                  transition={
                    splashDone
                      ? { duration: 0.4, ease: "easeIn", delay: i * 0.04 }
                      : {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.1 + i * 0.08,
                        }
                  }
                  className="font-bold text-foreground select-none block"
                  style={{
                    fontSize: "clamp(4rem, 16vw, 14rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Thin line below name */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: splashDone ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[calc(50%-7rem)] md:bottom-[calc(50%-11rem)] left-[10%] right-[10%] h-[2px] bg-accent-teal origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-96 h-96 rounded-full bg-accent-teal/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-[-10%] w-80 h-80 rounded-full bg-accent-teal/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main Content */}
            <div>
              {/* Role badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.3, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
                <span className="text-accent-teal text-sm font-medium">{t.hero.role}</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 3.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
              >
                Flavio
                <br />
                <span className="text-accent-teal">Rodrigo</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.6, ease: "easeOut" }}
                className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md"
              >
                {t.hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.75, ease: "easeOut" }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-6 py-3 rounded-full bg-accent-teal text-white font-semibold text-sm hover:bg-accent-teal/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent-teal/20 hover:-translate-y-0.5"
                >
                  {t.hero.ctaProjects}
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-6 py-3 rounded-full border border-border bg-background/50 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {t.hero.ctaContact}
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-accent-teal/40 text-accent-teal font-semibold text-sm hover:bg-accent-teal/8 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download size={14} />
                  {t.hero.ctaDownload}
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3.9 }}
                className="flex flex-wrap items-center gap-4"
              >
                {[
                  { icon: SiGithub, href: "https://github.com/Flavim-rsr", label: "GitHub" },
                  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/flavio-rodrigo-462854270/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:flaviorsr.22@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="p-2 rounded-full text-muted-foreground hover:text-accent-teal hover:bg-accent-teal/10 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
                <div className="h-px w-12 bg-border" />
                <span className="text-xs text-muted-foreground tracking-wider font-medium">
                  @Flavim-rsr
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.1, duration: 0.6 }}
                onClick={() => scrollTo("about")}
                className="md:hidden mt-10 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-accent-teal transition-colors duration-200"
              >
                <span className="text-xs tracking-widest uppercase font-medium">
                  {t.hero.scrollDown}
                </span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Card Stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center items-center"
            >
              <ProjectCardStack />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.1, duration: 0.6 }}
          onClick={() => scrollTo("about")}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-accent-teal transition-colors duration-200"
        >
          <span className="text-xs tracking-widest uppercase font-medium">{t.hero.scrollDown}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
