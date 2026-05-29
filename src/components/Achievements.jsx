"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import Image from "next/image";
import cutshortImg from "@/images/CutShortCertificate.jpg";

const certImages = {
  problem_solving: "/images/certificates/problem_solving.png",
  python: "/images/certificates/python.png",
  java_cert: "/images/certificates/java.png",
};

const IssuerLogo = ({ issuer }) => {
  if (issuer === "DoSelect") {
    return (
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center">
          <span className="text-emerald font-heading font-bold text-lg">DS</span>
        </div>
        <p className="text-zinc-600 text-xs font-mono">{issuer}</p>
      </div>
    );
  }
  if (issuer === "Microsoft") {
    return (
      <div className="text-center">
        <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 23 23">
          <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
          <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
          <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
          <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
        </svg>
        <p className="text-zinc-600 text-xs font-mono">{issuer}</p>
      </div>
    );
  }
  return (
    <div className="text-center">
      <i className="fa-solid fa-certificate text-emerald/30 text-4xl mb-2" />
      <p className="text-zinc-600 text-xs font-mono">{issuer}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="certifications" className="relative theme-bg">
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
            {"// Achievements"}
          </motion.p>
          <h2 className="section-title">
            Certifications & <span className="text-gradient-emerald">Awards</span>
          </h2>
          <p className="section-subtitle mt-2">
            Recognized skills validated through industry certifications.
          </p>
        </motion.div>

        {/* Certs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 0 40px rgba(16,185,129,0.12)",
              }}
              className="glass-card overflow-hidden group hover:border-emerald/30 transition-all duration-500"
            >
              {/* Certificate image */}
              <div className="h-48 w-full bg-dark-elevated overflow-hidden">
                {cert.image === "js_specialist" ? (
                  <Image
                    src={cutshortImg}
                    alt={cert.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : certImages[cert.image] ? (
                  <img
                    src={certImages[cert.image]}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <IssuerLogo issuer={cert.issuer} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-white text-base group-hover:text-emerald-light transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-1">
                      <i className="fa-solid fa-award text-emerald/60 mr-1.5" />
                      {cert.issuer}
                    </p>
                  </div>
                  <motion.div
                    className="w-9 h-9 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center group-hover:bg-emerald/20 transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-emerald text-xs" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
