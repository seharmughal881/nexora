"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCheckCircle, FaProjectDiagram, FaGraduationCap, FaUsers } from "react-icons/fa";

const stats = [
  { icon: <FaCheckCircle />, count: 120, title: "Trusted by Companies", fromLeft: true },
  { icon: <FaProjectDiagram />, count: 500, title: "Delivered Projects", fromLeft: false },
  { icon: <FaGraduationCap />, count: 7000, title: "Students Trained", fromLeft: true },
  { icon: <FaUsers />, count: 350, title: "Hands-On Projects", fromLeft: false },
];

const FeaturedSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-2xl md:text-4xl font-bold text-white leading-snug"
  >
    A Community You Can Trust, <br className="hidden md:block" /> A Journey You’ll Love <span className="text-yellow-400">❤️</span>
  </motion.h2>
</div>


      <div className="flex flex-col sm:flex-row justify-around items-center gap-16 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: item.fromLeft ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="text-6xl mb-4 text-purple-500"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item.icon}
            </motion.div>

            {/* CountUp now properly counts on scroll */}
<CountUp
  start={0}
  end={item.count}
  duration={2}
  separator=","
  enableScrollSpy
  scrollSpyOnce={true}
>
  {({ countUpRef }) => (
    <motion.span
  ref={countUpRef as React.RefObject<HTMLSpanElement>}
  className="text-4xl md:text-5xl font-extrabold inline-block"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
/>

  )}
</CountUp>

            <p className="text-gray-300 font-medium mt-2">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
