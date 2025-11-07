"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Hero 1 roles
const roles = [
  "Front-end Developer",
  "Back-end Developer",
  "Fullstack Developer",
  "Graphic Designer",
  "Digital Marketing & SEO Expert",
  "Blockchain Developer",
  ".Net Developer",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const type = () => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };
    const timer = setTimeout(type, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Auto slide after 50 seconds
  useEffect(() => {
    const timer = setTimeout(() => handleSlide(), 50000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 1000);
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {/* HERO 1 */}
        <div
          className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            currentSlide === 0
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 -translate-x-[50px] z-10"
          }`}
        >
          <section
            className="relative w-full min-h-screen flex items-center justify-center text-center text-white"
            style={{
              backgroundImage: "url('/images/business.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400/50 via-sky-600/40 to-blue-900/50 z-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
                We are everything you need
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                to run your online business
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 md:mb-10 max-w-md sm:max-w-xl md:max-w-2xl px-3">
                From design to development, marketing to maintenance — we bring
                your digital presence to life with creativity, strategy, and
                precision.
              </p>

              <button className="mt-2 sm:mt-4 px-8 sm:px-10 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Book an Appointment</span>
                <span className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
              </button>
            </div>
          </section>
        </div>

        {/* HERO 2 */}
        <div
          className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            currentSlide === 1
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 translate-x-[50px] z-10"
          }`}
        >
          <section className="w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#0A0A0A] to-[#1a031a] overflow-hidden px-4 sm:px-10 md:px-20 pt-20 md:pt-[0px]">
            {/* Circles */}
            <div className="absolute w-64 h-64 bg-purple-700/40 rounded-full blur-3xl top-[0px] left-10 animate-pulse-slow z-0"></div>
            <div className="absolute w-48 h-48 bg-blue-500/30 rounded-full blur-3xl bottom-[200px] right-10 animate-pulse-slow z-0"></div>

            {/* TEXT AREA */}
            <div className="relative z-20 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left w-full md:w-[550px]">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                <span className="text-2xl sm:text-3xl md:text-5xl">Become a&nbsp;</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl text-blue-400 min-h-[50px]">
                {text}
                <span className="animate-blink">|</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-1 max-w-sm sm:max-w-md md:max-w-none">
                Start your journey with us and explore amazing career
                opportunities. Learn, grow, and shine with the best in the
                industry.
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-4 space-y-3 sm:space-y-0">
                <button className="px-8 sm:px-10 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Enroll Now</span>
                  <span className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
                </button>

                <button className="relative px-8 sm:px-10 py-2 sm:py-3 rounded-full border border-purple-500 text-purple-400 font-semibold overflow-hidden transition-all duration-500 group flex items-center justify-center">
                  <span className="relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-3">
                    Get Notes
                  </span>
                  <span className="absolute text-purple-400 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 text-lg sm:text-xl">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* IMAGE AREA */}
            <div className="relative z-20 flex justify-center items-center w-[250px] sm:w-[300px] md:w-[450px] h-[250px] sm:h-[300px] md:h-[450px] mt-8 md:mt-0">
              <Image
                src="/images/girl.png"
                alt="Hero Image"
                width={450}
                height={450}
                className="object-contain rounded-lg shadow-2xl"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Arrow */}
      <button
        onClick={handleSlide}
        className="group absolute right-3 sm:right-5 top-1/3 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl shadow-purple-800/30 hover:scale-110 transition-all duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transform group-hover:translate-x-1 transition-transform duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
