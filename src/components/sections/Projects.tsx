"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";
import ProjectModal from "@/components/ProjectModal";

type Project = (typeof projects)[number];

interface MousePos {
  x: number;
  y: number;
}

export default function Projects() {
  const { t, language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-accent-teal" />
            <span className="text-accent-teal text-sm font-semibold tracking-wider uppercase">
              {t.projects.sectionLabel}
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight whitespace-pre-line"
            >
              {t.projects.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block text-sm text-muted-foreground"
            >
              {t.projects.hoverHint} · {t.projects.clickHint} →
            </motion.p>
          </div>

          {/* Desktop: Hover List */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="hidden md:block relative"
          >
            <div className="flex flex-col divide-y divide-border/50">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => openModal(project)}
                  className="group relative flex items-center justify-between py-6 cursor-pointer"
                >
                  {/* Hover bg */}
                  <div className="absolute inset-0 rounded-xl bg-accent-teal/0 group-hover:bg-accent-teal/4 transition-all duration-300" />

                  <div className="flex items-center gap-6 relative z-10">
                    {/* Index */}
                    <span className="text-xs text-muted-foreground/50 w-6 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      {/* Title */}
                      <h3
                        className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${
                          hoveredIndex === index
                            ? "text-accent-teal"
                            : hoveredIndex !== null
                            ? "text-muted-foreground/50"
                            : "text-foreground"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {/* Tags */}
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 relative z-10">
                    {/* Category + Year */}
                    <div className="text-right">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {project.category}
                      </div>
                      <div className="text-xs text-muted-foreground/50 mt-0.5">{project.year}</div>
                    </div>

                    {/* Quick links — stop propagation so clique nos ícones não abre modal */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-background border border-border hover:border-accent-teal/40 hover:text-accent-teal transition-all duration-200"
                      >
                        <SiGithub size={13} />
                      </a>
                      <a
                        href={project.demoUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-accent-teal text-white hover:bg-accent-teal/90 transition-all duration-200"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating image that follows cursor */}
            <AnimatePresence>
              {hoveredIndex !== null && !selectedProject && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed z-50 pointer-events-none"
                  style={{
                    left: mousePos.x + 24,
                    top: mousePos.y - 120,
                    width: 340,
                    height: 210,
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                    <Image
                      src={projects[hoveredIndex].image}
                      alt={projects[hoveredIndex].title}
                      width={340}
                      height={210}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile: Cards */}
          <div className="md:hidden grid gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => openModal(project)}
                className="rounded-2xl border border-border/50 bg-background overflow-hidden hover:border-accent-teal/30 active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <span className="text-xs text-muted-foreground shrink-0 mt-1">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {language === "pt" ? project.description.pt : project.description.en}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-medium bg-accent-teal/8 text-accent-teal border border-accent-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium hover:border-accent-teal/40 hover:text-accent-teal transition-all duration-200"
                    >
                      <SiGithub size={12} />
                      {t.projects.viewCode}
                    </a>
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-teal text-white text-xs font-medium hover:bg-accent-teal/90 transition-all duration-200"
                    >
                      <ArrowUpRight size={12} />
                      {t.projects.viewDemo}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
