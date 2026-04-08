"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/lib/data";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiPython, SiPostgresql, SiMysql, SiFirebase,
  SiGit, SiGithub, SiFigma, SiSpringboot,
  SiPhp, SiFlutter, SiJavascript,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const iconMap: Record<string, React.ElementType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3: FaCss3Alt,
  SiNodedotjs,
  SiJava: FaJava,
  SiSpringboot,
  SiPython,
  SiPostgresql,
  SiMysql,
  FaDatabase,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiPhp,
  SiFlutter,
  SiJavascript,
  SiVisualstudiocode: VscVscode,
};

interface SkillBadgeProps {
  skill: { name: string; icon: string };
  index: number;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  const Icon = iconMap[skill.icon];
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50 border border-border/50 text-sm font-medium text-foreground hover:border-accent-teal/40 hover:bg-accent-teal/5 transition-all duration-200 group cursor-default">
      {Icon && (
        <Icon
          size={15}
          className="text-muted-foreground group-hover:text-accent-teal transition-colors duration-200 shrink-0"
        />
      )}
      {skill.name}
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend", label: t.about.categories.frontend, data: skills.frontend },
    { key: "backend", label: t.about.categories.backend, data: skills.backend },
    { key: "database", label: t.about.categories.database, data: skills.database },
    { key: "tools", label: t.about.categories.tools, data: skills.tools },
    { key: "mobile", label: t.about.categories.mobile, data: skills.mobile },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
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
            {t.about.sectionLabel}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title + Description */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight whitespace-pre-line"
            >
              {t.about.title}
            </motion.h2>

            {t.about.description.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-muted-foreground leading-relaxed text-base mb-4"
              >
                {para}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mt-10"
            >
              {[
                { value: "1+", label: "Anos de\nexperiência" },
                { value: "300+", label: "Tasks\nresolvidas" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="text-center p-4 rounded-2xl bg-muted/30 border border-border/40"
                >
                  <div className="text-2xl font-bold text-accent-teal mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground leading-snug whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6"
            >
              {t.about.skillsTitle}
            </motion.h3>

            <div className="flex flex-col gap-6">
              {categories.map((cat, catIndex) => (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <div className="text-xs font-semibold text-accent-teal/70 uppercase tracking-wider mb-3">
                    {cat.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.data.map((skill, i) => (
                      <SkillBadge key={skill.name} skill={skill} index={i} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
