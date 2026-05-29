"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";

const categoryIcons = {
  code: "fa-solid fa-code",
  layout: "fa-solid fa-layer-group",
  server: "fa-solid fa-server",
  zap: "fa-solid fa-bolt",
  "git-branch": "fa-solid fa-code-branch",
  database: "fa-solid fa-database",
  cpu: "fa-solid fa-microchip",
  cloud: "fa-solid fa-cloud",
};

// Spotlight hover effect: mouse-tracking radial gradient on card
const SpotlightCard = ({ children, className }) => {
  const ref = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((p) => ({ ...p, active: false }))}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(circle 180px at ${spotlight.x}% ${spotlight.y}%, rgba(16,185,129,0.12), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const SkillCard = ({ cat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        type: "spring",
        bounce: 0.3,
      }}
    >
      <SpotlightCard className="glass-card hover:border-emerald/30 transition-all duration-500 group perspective-1000">
        <motion.div
          className="p-6"
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 0 50px rgba(16,185,129,0.15), 0 20px 40px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Category header */}
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center group-hover:bg-emerald/20 group-hover:border-emerald/40 transition-all duration-500"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <i
                className={`${categoryIcons[cat.icon] || "fa-solid fa-code"} text-emerald text-base group-hover:text-emerald-light transition-colors duration-300`}
              />
            </motion.div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm group-hover:text-emerald-light transition-colors duration-300">
                {cat.category}
              </h3>
              <p className="text-zinc-600 text-[10px] font-mono">
                {cat.skills.length} technologies
              </p>
            </div>
          </div>

          {/* Skill pills with stagger */}
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : {}
                }
                transition={{
                  delay: index * 0.12 + i * 0.06 + 0.3,
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 0 25px rgba(16,185,129,0.25)",
                  backgroundColor: "rgba(16,185,129,0.25)",
                }}
                whileTap={{ scale: 0.9 }}
                className="skill-pill text-xs cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </SpotlightCard>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Total skill count
  const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section id="skills" ref={sectionRef} className="relative theme-bg overflow-hidden">
      <div className="absolute inset-0 bg-radial-emerald opacity-50" />

      {/* Static background shapes — GPU-friendly */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #10b981, transparent)",
          right: "-5%",
          top: "10%",
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #34d399, transparent)",
          left: "-3%",
          bottom: "15%",
        }}
      />

      <div className="relative section-container">
        {/* Section Header with parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-emerald text-sm font-mono font-medium tracking-wider uppercase mb-2"
          >
            {"// Tech Stack"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Skills & <span className="text-gradient-emerald">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mt-2"
          >
            <span className="text-emerald-light font-semibold">{totalSkills}+</span> tools
            and technologies I use to bring ideas to production.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>

        {/* Tech marquee banner with dual-direction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 space-y-3"
        >
          {/* Forward marquee */}
          <div className="overflow-hidden rounded-xl bg-emerald/5 border border-emerald/10 py-3">
            <div className="marquee-track">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-8 px-4 shrink-0">
                  {skillCategories.flatMap((c) => c.skills).map((skill, i) => (
                    <span
                      key={`${setIdx}-${skill}-${i}`}
                      className="text-emerald-light/80 text-base font-mono whitespace-nowrap hover:text-white transition-colors duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Reverse marquee */}
          <div className="overflow-hidden rounded-xl bg-emerald/5 border border-emerald/10 py-3">
            <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-8 px-4 shrink-0">
                  {skillCategories.flatMap((c) => c.skills).reverse().map((skill, i) => (
                    <span
                      key={`r-${setIdx}-${skill}-${i}`}
                      className="text-emerald/70 text-sm font-mono whitespace-nowrap hover:text-emerald-light transition-colors duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
