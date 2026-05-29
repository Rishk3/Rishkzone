"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "./Providers";
import { personalInfo } from "@/data/portfolioData";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — offset-based: pick the section whose top is closest to (but above) the viewport top
  useEffect(() => {
    const NAV_HEIGHT = 80;

    const onScroll = () => {
      const scrollPos = window.scrollY + NAV_HEIGHT + 40;

      // If near the bottom, activate last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection(navLinks[navLinks.length - 1].to);
        return;
      }

      let current = navLinks[0].to;
      for (const link of navLinks) {
        const el = document.getElementById(link.to);
        if (el && el.offsetTop <= scrollPos) {
          current = link.to;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="group"
            >
              <span className="font-mono text-lg md:text-xl font-semibold text-white group-hover:text-emerald-light transition-colors duration-300">
                &lt;{" "}
                <span className="text-gradient-emerald">Rishky</span>
                {" "}/&gt;
              </span>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <button
                    className={`nav-link px-3 py-2 rounded-lg hover:bg-white/[0.04] relative ${
                      activeSection === link.to ? "active" : ""
                    }`}
                    onClick={() => scrollTo(link.to)}
                  >
                    {link.label}
                    {activeSection === link.to && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                </li>
              ))}
              <li className="ml-2">
                <a
                  href={personalInfo.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-link text-lg hover:text-emerald-light"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="ml-1">
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/[0.04] transition-all duration-300 group"
                  title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  <AnimatePresence mode="wait">
                    <motion.i
                      key={isDark ? "moon" : "sun"}
                      className={`${
                        isDark
                          ? "fa-solid fa-moon text-yellow-400"
                          : "fa-solid fa-sun text-amber-500"
                      } text-sm group-hover:scale-110 transition-transform`}
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-xl p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <i className={mobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-16 bg-dark/95 backdrop-blur-xl z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col items-center gap-2 pt-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      className={`nav-link text-lg py-3 px-6 block ${
                        activeSection === link.to ? "active" : ""
                      }`}
                      onClick={() => scrollTo(link.to)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <li className="mt-4 flex items-center gap-3">
                  <button onClick={toggleTheme} className="btn-outline">
                    <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"} />
                    {isDark ? "Light" : "Dark"}
                  </button>
                  <a
                    href={personalInfo.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn-outline"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Nav;
