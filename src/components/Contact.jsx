"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const contactCards = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

const socialLinks = [
  { icon: "fa-brands fa-github", href: personalInfo.github, label: "GitHub" },
  { icon: "fa-brands fa-linkedin", href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: "fa-brands fa-facebook", href: personalInfo.facebook, label: "Facebook" },
  { icon: "fa-brands fa-instagram", href: personalInfo.instagram, label: "Instagram" },
  { icon: "fa-brands fa-whatsapp", href: personalInfo.whatsapp, label: "WhatsApp" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative theme-bg-card">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald text-sm font-mono font-medium tracking-wider uppercase mb-2"
          >
            {"// Get In Touch"}
          </motion.p>
          <h2 className="section-title mx-auto">
            Let&apos;s <span className="text-gradient-emerald">Connect</span>
          </h2>
          <p className="section-subtitle mt-2 mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 0 30px rgba(16,185,129,0.1)",
              }}
              className="glass-card p-6 text-center hover:border-emerald/20 transition-all duration-500 group"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`${card.icon} text-emerald text-lg`} />
              </motion.div>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">
                {card.label}
              </p>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-emerald-light transition-colors duration-300"
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-white text-sm">{card.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-sm mb-6">Find me on social media</p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: "spring", bounce: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 0 25px rgba(16,185,129,0.15)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-emerald-light hover:border-emerald/30 hover:bg-emerald/10 transition-all duration-300"
              >
                <i className={`${social.icon} text-lg`} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
