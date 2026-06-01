"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Logo */}
          <motion.span
            className="font-mono text-sm text-zinc-500"
            whileHover={{ scale: 1.05 }}
          >
            &lt; <span className="text-emerald">Rishky</span> /&gt;
          </motion.span>

          {/* Center: Copyright */}
          <p className="text-zinc-600 text-xs text-center">
            &copy; {year} Rishikesh Kumar
          </p>

          {/* Right: Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: "fa-brands fa-github", href: personalInfo.github },
              { icon: "fa-brands fa-linkedin", href: personalInfo.linkedin },
              { icon: "fa-brands fa-instagram", href: personalInfo.instagram },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-emerald-light transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <i className={social.icon} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
