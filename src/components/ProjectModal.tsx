"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();

  // Fechar com Escape
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    // Travar scroll do body
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-[90] px-0 md:px-6"
          >
            <div
              className="relative w-full md:max-w-3xl bg-background border border-border/60 rounded-t-3xl md:rounded-3xl shadow-2xl shadow-black/20 overflow-hidden flex flex-col max-h-[92vh] md:max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-muted-foreground hover:text-foreground hover:border-accent-teal/40 transition-all duration-200"
                aria-label={t.projects.modalClose}
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="relative w-full h-52 md:h-72 shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                {/* Category + year badge over image */}
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-semibold text-foreground">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-semibold text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 px-6 md:px-8 py-6 flex flex-col gap-6">
                {/* Title */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
                    {project.title}
                  </h2>
                  <div className="w-10 h-[2px] bg-accent-teal" />
                </div>

                {/* Overview */}
                <div>
                  <h3 className="text-xs font-semibold text-accent-teal uppercase tracking-wider mb-2">
                    {t.projects.modalOverview}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "pt" ? project.description.pt : project.description.en}
                  </p>
                </div>

                {/* Stack */}
                <div>
                  <h3 className="text-xs font-semibold text-accent-teal uppercase tracking-wider mb-3">
                    {t.projects.modalStack}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent-teal/8 text-accent-teal border border-accent-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-xs font-semibold text-accent-teal uppercase tracking-wider mb-3">
                    {t.projects.modalLinks}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-muted/30 text-sm font-semibold text-foreground hover:border-accent-teal/40 hover:text-accent-teal transition-all duration-200"
                    >
                      <SiGithub size={14} />
                      {t.projects.viewCode}
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent-teal text-white text-sm font-semibold hover:bg-accent-teal/90 transition-all duration-200 shadow-lg shadow-accent-teal/20"
                    >
                      <ArrowUpRight size={14} />
                      {t.projects.viewDemo}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
