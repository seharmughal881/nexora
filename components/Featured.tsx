"use client";

import React from "react";
import { FaHandshake, FaLaptopCode, FaProjectDiagram, FaClipboardCheck } from "react-icons/fa";

const stats = [
  {
    icon: <FaHandshake size={40} />,
    title: "Trusted by 500+ Companies",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "100+ certified delivered projects",
  },
  {
    icon: <FaProjectDiagram size={40} />,
    title: "End-to-End software solutions",
  },
  {
    icon: <FaClipboardCheck size={40} />,
    title: "Up to 98% First Pass software delivery",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#0047AB] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Icon circle */}
            <div className="bg-white text-[#0047AB] p-6 rounded-full shadow-lg flex items-center justify-center">
              {item.icon}
            </div>

            {/* Text */}
            <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
