"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import type { PanInfo } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const STACK = projects.slice(0, 6);

function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

function DraggableCard({
  project,
  onSwipe,
}: {
  project: Project;
  onSwipe: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-160, 0, 160], [-22, 0, 22]);
  const opacity = useTransform(x, [-160, -90, 0, 90, 160], [0, 1, 1, 1, 0]);
  const dragged = useRef(false);

  const handleDragStart = () => { dragged.current = true; };

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 80) {
      const dir = info.offset.x > 0 ? 700 : -700;
      animate(x, dir, {
        duration: 0.28,
        ease: "easeOut",
        onComplete: onSwipe,
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={() => { if (!dragged.current) scrollToProjects(); dragged.current = false; }}
      style={{ x, rotate, opacity }}
      whileDrag={{ scale: 1.03, cursor: "grabbing" }}
      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-white/10"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        unoptimized
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Card info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-base leading-tight">
          {project.title}
        </p>
        <p className="text-white/55 text-xs mt-0.5">
          {project.category} · {project.year}
        </p>
      </div>

      {/* Swipe hint arrows */}
      <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
        <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white/60 text-xs font-medium">
          ←
        </span>
        <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white/60 text-xs font-medium">
          →
        </span>
      </div>
    </motion.div>
  );
}

export default function ProjectCardStack() {
  const [index, setIndex] = useState(0);
  const total = STACK.length;

  const getCard = (offset: number) => STACK[(index + offset) % total];
  const next = () => setIndex((prev) => (prev + 1) % total);

  const topOrientation = "orientation" in getCard(0) ? (getCard(0) as { orientation?: string }).orientation : undefined;
  const size =
    topOrientation === "horizontal"
      ? { width: 380, height: 260 }
      : topOrientation === "vertical"
      ? { width: 240, height: 440 }
      : { width: 300, height: 380 };

  return (
    <div className="flex flex-col items-center gap-4 select-none">
      {/* Stack container */}
      <motion.div
        className="relative"
        animate={size}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        style={size}
      >
        {/* Card 3 — furthest back */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          animate={{ rotate: -7, scale: 0.88, y: 18 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <Image
            src={getCard(2).image}
            alt={getCard(2).title}
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* Card 2 — middle */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          animate={{ rotate: 5, scale: 0.94, y: 9 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <Image
            src={getCard(1).image}
            alt={getCard(1).title}
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* Top card — draggable, remounts on each swipe to reset motion values */}
        <DraggableCard key={index} project={getCard(0)} onSwipe={next} />
      </motion.div>

      {/* Indicator dots */}
      <div className="flex items-center gap-1.5">
        {STACK.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-5 h-1.5 bg-accent-teal"
                : "w-1.5 h-1.5 bg-border hover:bg-accent-teal/40"
            }`}
            aria-label={`Card ${i + 1}`}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground/50">Arraste para navegar</p>
    </div>
  );
}
