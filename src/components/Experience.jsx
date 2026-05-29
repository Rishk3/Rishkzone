"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import { useRef } from "react";

const TimelineCard = ({ exp, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const cardX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? -80 : 80, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: cardOpacity }}
      className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
        <motion.div
          className="timeline-dot"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
        />
      </div>

      {/* Content card */}
      <motion.div
        style={{ x: cardX }}
        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:pr-8" : "md:pl-8"
        }`}
      >
        <motion.div
          whileHover={{ y: -5, borderColor: "rgba(16,185,129,0.3)" }}
          className="glass-card p-6 md:p-8 hover:border-emerald/20 transition-all duration-500"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg md:text-xl font-heading font-bold text-white">
                {exp.role}
              </h3>
              <p className="text-emerald-light font-medium text-sm mt-1">
                {exp.company}
              </p>
              <p className="text-zinc-500 text-xs mt-0.5">
                <i className="fa-solid fa-location-dot mr-1" />
                {exp.location}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald-light text-xs font-mono whitespace-nowrap">
              <i className="fa-regular fa-calendar text-[10px]" />
              {exp.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {exp.description}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-2.5 py-1 rounded-md bg-dark text-emerald-light text-xs font-mono border border-dark-border"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={sectionRef} className="relative theme-bg-card">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald text-sm font-mono font-medium tracking-wider uppercase mb-2"
          >
            {"// Career Journey"}
          </motion.p>
          <h2 className="section-title">
            Where I&apos;ve <span className="text-gradient-emerald">shipped</span>
          </h2>
          <p className="section-subtitle mt-2">
            The teams, the systems, the late-night deploys.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-border md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-emerald via-emerald/50 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {experiences.map((exp, index) => (
            <TimelineCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
