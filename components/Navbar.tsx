"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [coursesHover, setCoursesHover] = useState(false);

  const menuClasses =
    "absolute top-full left-0 bg-black border border-purple-800/40 rounded-lg shadow-lg py-3 w-60 backdrop-blur-xl";

  return (
  <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#000000] via-[#0b0012] to-[#2b0066] text-white shadow-xl border-b border-purple-800/30">


      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/images/logo.png"
            alt="Nexora Logo"
            width={350}
            height={70}
            className="h-auto w-[150]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <Link href="/about" className="hover:text-purple-400 transition">About</Link>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
          >
            <Link href="/services" className="hover:text-purple-400 transition inline-block">Services ▾</Link>
            {(servicesHover || servicesOpen) && (
              <div className={menuClasses}>
                {["Web Development", "App Development", "Web3 Blockchain", "Graphic Designing", "SEO & Digital Marketing"].map((item) => (
                  <Link key={item} href="#" className="block px-4 py-2 hover:bg-purple-900/40 transition">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blogs" className="hover:text-purple-400 transition">Blogs</Link>

          {/* Courses */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesHover(true)}
            onMouseLeave={() => setCoursesHover(false)}
          >
            <Link href="/courses" className="hover:text-purple-400 transition inline-block">Courses ▾</Link>
            {(coursesHover || coursesOpen) && (
              <div className={menuClasses}>
                {["MERN Stack Development", "Frontend Development", "Backend Development", "Graphic Designing", "SEO & Digital Marketing"].map((item) => (
                  <Link key={item} href="#" className="block px-4 py-2 hover:bg-purple-900/40 transition">
                    {item}
                  </Link>
                ))}

                <div className="mt-2 border-t border-purple-700/40" />
                <Link href="#" className="block px-4 py-2 bg-red-600/30 hover:bg-red-700/50 text-white font-semibold mt-2 transition">Web3 Blockchain</Link>
                <Link href="#" className="block px-4 py-2 bg-red-600/30 hover:bg-red-700/50 text-white font-semibold mt-2 transition">.Net Framework</Link>
              </div>
            )}
          </div>

          <Link href="/notes" className="hover:text-purple-400 transition">Notes</Link>
          <Link href="/contact" className="hover:text-purple-400 transition mr-[20px]">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 pb-6 space-y-3">
          <Link href="/" className="block py-2 border-b border-purple-800/40">Home</Link>
          <Link href="/about" className="block py-2 border-b border-purple-800/40">About</Link>

          {/* Services Mobile Accordion */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full text-left py-2 border-b border-purple-800/40"
          >
            Services {servicesOpen ? "▴" : "▾"}
          </button>
          {servicesOpen && (
            <div className="ml-3">
              {["Web Development", "App Development", "Web3 Blockchain", "Graphic Designing", "SEO & Digital Marketing"].map((item) => (
                <Link key={item} href="#" className="block py-2 text-sm border-b border-purple-800/30">
                  {item}
                </Link>
              ))}
            </div>
          )}

          <Link href="/blogs" className="block py-2 border-b border-purple-800/40">Blogs</Link>

          {/* Courses Mobile Accordion */}
          <button
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="w-full text-left py-2 border-b border-purple-800/40 "
          >
            Courses {coursesOpen ? "▴" : "▾"}
          </button>
          {coursesOpen && (
            <div className="ml-3">
              {["MERN Stack Development", "Frontend Development", "Backend Development", "Graphic Designing", "SEO & Digital Marketing" ].map((item) => (
                <Link key={item} href="#" className="block pl-[10px] py-2 text-sm border-b border-purple-800/30">
                  {item}
                </Link>
              ))}

              <Link href="#" className="block  pl-[10px]  py-2 text-sm  bg-red-600/30 hover:bg-red-700/50 text-white font-semibold  mt-2">
                Web3 Blockchain
              </Link>
              <Link href="#" className="block  pl-[10px]  py-2 text-sm bg-red-600/30 hover:bg-red-700/50 text-white font-semibold mt-2">
                .Net Framework
              </Link>
            </div>
          )}

          <Link href="/notes" className="block py-2 border-b border-purple-800/40">Notes</Link>
          <Link href="/contact" className="block py-2 border-b border-purple-800/40">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
