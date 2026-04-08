"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { experiences } from "@/lib/data";

export default function Experience() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/20">
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
            {t.experience.sectionLabel}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-16 leading-tight whitespace-pre-line"
        >
          {t.experience.title}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent-teal/30 to-transparent" />

          <div className="flex flex-col gap-8 md:gap-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex md:items-center gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    } md:pb-16`}
                  >
                    <div className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-accent-teal/30 hover:shadow-lg hover:shadow-accent-teal/5 transition-all duration-300">
                      {/* Period */}
                      <div className="text-xs font-semibold text-accent-teal uppercase tracking-wider mb-3">
                        {language === "pt" ? exp.period : exp.periodEn}
                      </div>

                      {/* Role */}
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {language === "pt" ? exp.role.pt : exp.role.en}
                      </h3>

                      {/* Company */}
                      <div className="text-sm font-semibold text-muted-foreground mb-4">
                        {exp.company}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {language === "pt" ? exp.description.pt : exp.description.en}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-teal/8 text-accent-teal border border-accent-teal/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - centered */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-4 h-4 rounded-full bg-background border-2 border-accent-teal shadow-sm shadow-accent-teal/30 z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
