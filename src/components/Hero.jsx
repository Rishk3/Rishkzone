"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { personalInfo, getExperience } from "@/data/portfolioData";
import { useTheme } from "./Providers";


const FloatingParticle = ({ delay, x, y, size, duration }) => (
  <motion.div
    className="absolute rounded-full bg-emerald"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
    }}
    animate={{
      y: [0, -40, 0],
      x: [0, Math.random() * 20 - 10, 0],
      opacity: [0.1, 0.5, 0.1],
      scale: [1, 1.5, 1],
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
}));

const Hero = () => {
  const [tagIndex, setTagIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [nameRevealed, setNameRevealed] = useState(false);
  const [hoverFlipHint, setHoverFlipHint] = useState(false);
  const exp = useMemo(() => getExperience(), []);
  const { toggleTheme } = useTheme();
  const hoverTimer = useRef(null);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Typewriter effect for name
  useEffect(() => {
    const name = "Rishikesh Kumar";
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(name.slice(0, i + 1));
      i++;
      if (i >= name.length) {
        clearInterval(interval);
        setNameRevealed(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(interval);
  }, []);

  // Rotate taglines
  useEffect(() => {
    const id = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Theme flip on hover (hold cursor over name for 1.5s)
  const handleNameEnter = useCallback(() => {
    hoverTimer.current = setTimeout(() => {
      toggleTheme();
      setHoverFlipHint(true);
      setTimeout(() => setHoverFlipHint(false), 2000);
    }, 1500);
  }, [toggleTheme]);

  const handleNameLeave = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 theme-bg" style={{ y: backgroundY }} />
      <motion.div className="absolute inset-0 bg-grid" style={{ y: backgroundY }} />
      <div className="absolute inset-0 bg-radial-emerald" />

      {/* Gradient Orbs — static to preserve GPU for splash cursor */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          left: "-10%",
          top: "-20%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%)",
          right: "-5%",
          bottom: "-10%",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 section-container flex flex-col items-center text-center pt-32 md:pt-20"
        style={{ opacity, scale }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span className="text-emerald-light text-sm font-medium">
            Currently engineering at Mercedes-Benz
          </span>
        </motion.div>

        {/* Name with typewriter effect + hover theme flip */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative"
          onMouseEnter={handleNameEnter}
          onMouseLeave={handleNameLeave}
        >
          <motion.span
            className="text-gradient-emerald inline-block"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {displayText}
          </motion.span>
          <span
            className={`text-emerald ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 0.1s" }}
          >
            |
          </span>
          {/* Theme flip hint */}
          <AnimatePresence>
            {hoverFlipHint && (
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-emerald-light font-mono whitespace-nowrap"
              >
                Theme flipped! ✦
              </motion.span>
            )}
          </AnimatePresence>
        </motion.h1>

        {/* Rotating taglines */}
        <div className="h-10 md:h-12 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={tagIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-gradient-emerald"
            >
              {personalInfo.taglines[tagIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Experience counter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: nameRevealed ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-400 text-lg md:text-xl mb-4 max-w-2xl text-balance"
        >
          <span className="text-white font-semibold">{exp.years}+ years</span>{" "}
          shipping production systems — Spring Boot, React, Kafka, LLMs
        </motion.p>

        {/* Creative stats bar — XP-inspired without saying "gamer" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: nameRevealed ? 1 : 0, scale: nameRevealed ? 1 : 0.9 }}
          transition={{ delay: 0.45, type: "spring", bounce: 0.3 }}
          className="flex items-center gap-4 mb-4 flex-wrap justify-center"
        >
          {[
            { label: "Projects Shipped", value: "15+", icon: "fa-solid fa-rocket" },
            { label: "Commits", value: "2K+", icon: "fa-solid fa-code-commit" },
            { label: "Uptime", value: "99.9%", icon: "fa-solid fa-signal" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05]"
            >
              <i className={`${stat.icon} text-emerald text-[10px]`} />
              <span className="text-white font-bold text-xs">{stat.value}</span>
              <span className="text-zinc-600 text-[10px] font-mono">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: nameRevealed ? 1 : 0 }}
          transition={{ delay: 0.55 }}
          className="text-zinc-500 text-base mb-10 flex items-center gap-2"
        >
          <i className="fa-solid fa-location-dot text-emerald text-sm" />
          {personalInfo.location}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: nameRevealed ? 1 : 0, y: nameRevealed ? 0 : 20 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("projects")}
            className="btn-primary cursor-pointer"
          >
            <i className="fa-solid fa-code" />
            View My Work
          </motion.button>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: nameRevealed ? 1 : 0 }}
          transition={{ delay: 1 }}
          className="mt-16 w-full max-w-xl overflow-hidden"
        >
          <div className="marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 px-3 shrink-0">
                {["Spring Boot", "React", "Kafka", "Java", "Docker", "TypeScript", "Next.js", "PostgreSQL", "Redis", "D3.js"].map(
                  (tech) => (
                    <span
                      key={`${setIdx}-${tech}`}
                      className="text-zinc-600 text-xs font-mono whitespace-nowrap flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald/40" />
                      {tech}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1.5 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
