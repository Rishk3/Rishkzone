"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { existingProjects, featuredProjects, personalInfo } from "@/data/portfolioData";

// ── All projects combined in one list ──
const allProjects = [
  ...featuredProjects.map((p) => ({ ...p, type: "featured" })),
  ...existingProjects.map((p) => ({
    ...p,
    type: "legacy",
    image: `/images/${
      p.id === "rishkFlix" ? "rishk_flix" :
      p.id === "whatsappLyser" ? "whatsdata" :
      p.id === "bdayWisher" ? "bday" :
      p.id
    }.png`,
  })),
];

// ── Flip Card: front shows image + title, back shows full details ──
const FlipProjectCard = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }, []);

  const isFeatured = project.type === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, type: "spring", bounce: 0.2 }}
      className="group"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={cardRef}
        className="relative w-full h-[420px] cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpot((p) => ({ ...p, active: false }))}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 25 }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full h-full"
        >
          {/* ═══ FRONT ═══ */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative w-full h-full project-card rounded-2xl overflow-hidden">
              {/* Spotlight overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: spot.active && !flipped ? 1 : 0,
                  background: `radial-gradient(circle 200px at ${spot.x}% ${spot.y}%, rgba(16,185,129,0.18), transparent 70%)`,
                }}
              />

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

                {/* Badge */}
                {isFeatured && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald/90 text-dark text-[10px] font-mono font-bold uppercase tracking-wider">
                    Full-Stack
                  </div>
                )}

                {/* Flip hint */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-dark/60 backdrop-blur-sm text-zinc-400 text-[10px] font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fa-solid fa-microscope text-emerald text-[9px]" />
                  Deep Dive
                </div>
              </div>

              {/* Brief info */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-emerald-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech preview */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-light/70 bg-emerald/5 border border-emerald/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-light/50">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ BACK (full details) ═══ */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="relative w-full h-full project-card rounded-2xl overflow-hidden flex flex-col">
              {/* Spotlight on back too */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: spot.active && flipped ? 1 : 0,
                  background: `radial-gradient(circle 200px at ${spot.x}% ${spot.y}%, rgba(16,185,129,0.12), transparent 70%)`,
                }}
              />

              {/* Header */}
              <div className="p-5 pb-3 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-bold text-emerald-light text-lg">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-600 flex items-center gap-1">
                    <i className="fa-solid fa-layer-group text-emerald/60 text-[9px]" />
                    Overview
                  </span>
                </div>
                {isFeatured && (
                  <span className="text-[10px] font-mono text-emerald/70 uppercase tracking-wider">
                    <i className="fa-solid fa-star text-[8px] mr-1" />
                    Spring Boot + React
                  </span>
                )}
              </div>

              {/* Full description */}
              <div className="p-5 pt-3 flex-1 overflow-y-auto custom-scrollbar">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Full tech stack */}
                <div className="mb-4">
                  <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-[11px] font-mono text-emerald-light/80 bg-emerald/8 border border-emerald/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="mb-4">
                  <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider mb-1">
                    Status
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                    {isFeatured ? "Completed" : "Live"}
                  </span>
                </div>
              </div>

              {/* Action links */}
              <div className="p-5 pt-0 flex items-center gap-3">
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-300 hover:text-emerald-light hover:border-emerald/30 hover:bg-emerald/10 transition-all duration-300 text-xs font-medium"
                >
                  <i className="fa-brands fa-github text-sm" />
                  Source Code
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald/15 border border-emerald/25 text-emerald-light hover:bg-emerald/25 transition-all duration-300 text-xs font-medium"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative theme-bg-card">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald text-sm font-mono font-medium tracking-wider uppercase mb-2"
          >
            {"// Portfolio"}
          </motion.p>
          <h2 className="section-title">
            Featured <span className="text-gradient-emerald">Projects</span>
          </h2>
          <p className="section-subtitle mt-2">
            <span className="text-emerald-light font-semibold">{allProjects.length}+</span> applications
            built from idea to deployment.
          </p>
        </motion.div>

        {/* Unified Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProjects.map((project, i) => (
            <FlipProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <i className="fa-brands fa-github" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
