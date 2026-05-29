"use client";

import React, { useMemo, useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, getExperience, existingProjects, featuredProjects, certifications } from "@/data/portfolioData";
import Image from "next/image";
import avatarImg from "@/images/Rishikesh_image.jpeg";

const AnimatedCounter = ({ value, label, icon, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  const numericValue = parseFloat(value);
  const suffix = value.toString().replace(/[\d.]/g, "");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end * 10) / 10);
      if (progress < 1) requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => requestAnimationFrame(animate), delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, numericValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -5, boxShadow: "0 0 30px rgba(16,185,129,0.15)" }}
      className="stat-card group"
    >
      <motion.i
        className={`${icon} text-emerald text-xl mb-3`}
        animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      />
      <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
        {Number.isInteger(numericValue) ? Math.round(count) : count.toFixed(1)}
        {suffix}
      </p>
      <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
};

const About = () => {
  const exp = useMemo(() => getExperience(), []);
  const totalProjects = existingProjects.length + featuredProjects.length;

  const stats = [
    {
      value: `${exp.years}.${exp.months}+`,
      label: "Years Deep",
      icon: "fa-solid fa-briefcase",
    },
    {
      value: `${totalProjects}+`,
      label: "Things Built",
      icon: "fa-solid fa-code",
    },
    {
      value: "2",
      label: "Teams Shipped With",
      icon: "fa-solid fa-building",
    },
    {
      value: `${certifications.length}`,
      label: "Certs Earned",
      icon: "fa-solid fa-certificate",
    },
  ];

  const summary = personalInfo.summary.replace("{exp}", String(exp.years));

  return (
    <section id="about" className="relative theme-bg">
      <div className="absolute inset-0 bg-radial-top-right" />
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
            {"// About Me"}
          </motion.p>
          <h2 className="section-title">
            The <span className="text-gradient-emerald">short version</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Photo + Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
          >
            {/* Profile image with rotating border */}
            <div className="relative mb-8 group">
              <motion.div
                className="absolute -inset-2 rounded-2xl opacity-50"
                style={{
                  background: "conic-gradient(from 0deg, #10b981, transparent, #10b981)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-emerald/20 emerald-glow">
                <Image
                  src={avatarImg}
                  alt="Rishikesh Kumar"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-emerald/40 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-emerald/40 rounded-tl-2xl" />
            </div>

            {/* Quick info */}
            <div className="space-y-3 text-sm">
              {[
                { icon: "fa-solid fa-location-dot", text: personalInfo.location },
                {
                  icon: "fa-solid fa-envelope",
                  text: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: "fa-solid fa-phone",
                  text: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.icon}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-zinc-400"
                >
                  <i className={`${item.icon} text-emerald w-4`} />
                  {item.href ? (
                    <a href={item.href} className="hover:text-emerald-light transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Summary + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10">
              {summary}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <AnimatedCounter key={stat.label} {...stat} delay={0.4 + i * 0.15} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
