import { FC } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-[#111929] text-white pt-10 pb-6 font-sans tracking-[0.2px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">

        {/* LOGO */}
        <div className="flex flex-col">
          <div className="mb-4">
            <Image
              src="/images/logo.png"
              alt="Nexora Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-[15px] md:text-[16px] mb-4 leading-tight relative inline-block">
            Quick Links
            <span className="block w-10 h-[2px] bg-sky-400 mt-2"></span>
          </h3>

          <ul className="space-y-2 text-[13px] md:text-[14px] text-gray-300 leading-tight">
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Services
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> How It Works
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Order Now
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Contact Us
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-[15px] md:text-[16px] mb-4 leading-tight relative inline-block">
            Services
            <span className="block w-10 h-[2px] bg-sky-400 mt-2"></span>
          </h3>

          <ul className="space-y-2 text-[13px] md:text-[14px] text-gray-300 leading-tight">
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Web Development
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> App Development
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Web3 Blockchain
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Graphic Designing
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> SEO & Digital Marketing
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-[15px] md:text-[16px] mb-4 leading-tight relative inline-block">
            Contact Us
            <span className="block w-10 h-[2px] bg-sky-400 mt-2"></span>
          </h3>

          <div className="space-y-2.5 text-[13px] md:text-[14px] text-gray-300 leading-tight">
            <p className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 md:w-4 md:h-4 text-[#24D467]" aria-hidden="true" />
              <span className="truncate">WhatsApp: +92 329 8154994</span>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 md:w-4 md:h-4 text-[#1067F4]" aria-hidden="true" />
              <span className="truncate">Phone: +92 329 8154994</span>
            </p>

            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 md:w-4 md:h-4 text-[#24D467]" aria-hidden="true" />
              <span className="truncate">nexorafs369@gmail.com</span>
            </p>
          </div>

          <div className="mt-5">
            <button
              className="w-full md:w-auto px-8 sm:px-10 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
              aria-label="Chat on WhatsApp"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
            </button>
          </div>
        </div>

        {/* BLOG CATEGORIES */}
        <div>
          <h3 className="font-semibold text-[15px] md:text-[16px] mb-4 leading-tight relative inline-block">
            Blog Categories
            <span className="block w-10 h-[2px] bg-sky-400 mt-2"></span>
          </h3>

          <ul className="space-y-2 text-[13px] md:text-[14px] text-gray-300 leading-tight">
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Web Development
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Mobile Development
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Desktop Development
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Game Development
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Embedded Systems
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
              <span className="text-sky-400 text-[15px]">›</span> Data Science & Machine Learning
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="w-[90%] mx-auto border-t border-gray-700 mt-8 md:mt-10 pt-5 text-center text-gray-400 text-[13px] md:text-[14.5px] leading-tight">
        © 2026 Nexora.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
