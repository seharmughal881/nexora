"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AboutItem {
  title: string;
  content: string;
  fromLeft: boolean;
}

const aboutData: AboutItem[] = [
  {
    title: "Who We Are",
    content:
      "NEXORA is a global coding and tech learning community where learners, creators, and professionals unite to grow, innovate, and succeed. We foster an environment of learning, collaboration, and progress.",
    fromLeft: true,
  },
  {
    title: "What We Do",
    content:
      "We offer hands-on learning through real-world projects, mentorship, and teamwork. Our members bridge the gap between theory and practice — learning by doing, not just reading.",
    fromLeft: false,
  },
  {
    title: "Why NEXORA",
    content:
      "Our focus is on community, collaboration, and visible growth. With supportive guidance, we ensure our learners stay inspired, confident, and ready to make an impact.",
    fromLeft: true,
  },
  {
    title: "Join Us",
    content:
      "Whether you’re a student, professional, or hobbyist — NEXORA welcomes you. Here, your curiosity is fuel, your growth is celebrated, and your ideas matter.",
    fromLeft: false,
  },
];

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight 
               text-transparent bg-clip-text 
               bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#9333EA] to-[#EC4899]
               bg-[length:200%_200%] animate-[gradientShift_6s_ease_infinite]"
        >
          About <span className="text-gray-100">NEXORA</span>
        </motion.h2>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Static line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-700 rounded-full"></div>

        {/* Neon fill line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_25px_8px_rgba(255,0,255,0.3)] rounded-full animate-pulse"
        ></motion.div>

        {/* Items */}
        <div className="relative flex flex-col gap-20">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.fromLeft ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative md:w-1/2 ${
                item.fromLeft
                  ? "self-start pr-10 text-left"
                  : "self-end pl-10 text-left" /* 👈 force text-left always */
              }`}
            >
              {/* Dot center */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 top-0 md:top-[50%] md:-translate-y-[50%] w-10 h-10 rounded-full border-[3px] border-purple-500 bg-gray-900 flex items-center justify-center shadow-lg shadow-purple-500/30"
                style={{ top: item.fromLeft ? "0" : "0" }}
              >
                <span className="text-purple-400 font-bold text-lg">
                  {index + 1}
                </span>
              </div>

              {/* Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-transform duration-300 ease-out">
                <h3 className="text-2xl font-semibold mb-3 text-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base mb-4">
                  {item.content}
                </p>

          
                {index === aboutData.length - 1 && (
                  <button className="px-8 sm:px-10 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Enroll Now</span>
                    <span className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
