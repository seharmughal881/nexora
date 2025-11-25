 "use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const blogs: Blog[] = [
  { id: 1, title: "What Makes a Modern Website High-Converting in 2025?", imageUrl: "/images/blog1.jpg", link: "#" },
  { id: 2, title: "How Much Does It Really Cost to Build a Mobile App in 2025?", imageUrl: "/images/blog2.jpg", link: "#" },
  { id: 3, title: "Why Custom Software Is Replacing Off-The-Shelf Solutions", imageUrl: "/images/blog3.jpg", link: "#" },
  { id: 4, title: "Why Scalable Backend Architecture Matters", imageUrl: "/images/blog4.webp", link: "#" },
];

const TopBlogs: React.FC = () => {
  const router = useRouter();
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(blogs.length).fill(false));
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    // Observe heading
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeadingVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);

    // Observe cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute("data-index");
          if (!indexAttr) return;
          const index = Number(indexAttr);

          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      headingObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-12 px-6 md:px-16 bg-[#060C18]">
      {/* HEADING */}
      <div className="max-w-5xl mx-auto text-center mb-20" ref={headingRef}>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={headingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight 
           text-transparent bg-clip-text mt-[60px]
           bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#9333EA] to-[#EC4899]
           bg-[length:200%_200%] animate-[gradientShift_6s_ease_infinite]"
        >
          Top Blogs <span className="text-gray-100">You Must Read</span>
        </motion.h2>
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, idx) => (
          <div
            key={blog.id}
            ref={(el) => { cardRefs.current[idx] = el }} // ✅ TypeScript-safe
            data-index={idx}
            className={`relative rounded-2xl bg-[#060C18] 
              shadow-[0_3px_1px_0_#38BDF8] 
              hover:shadow-[0_5px_6px_1.5px_#38BDF8]
              overflow-hidden transform transition duration-500
              ${visibleCards[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            {/* IMAGE */}
            <div className="relative w-full h-40 md:h-44 lg:h-40">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3 md:p-4 flex flex-col justify-between text-white">
              <h3 className="text-base md:text-lg font-semibold mb-1">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-[10px] md:text-xs mb-3 flex items-center gap-2">
                👤 By Nexora_FS | 📅 08 October 2024
              </p>
              <button
                onClick={() => router.push(blog.link)}
                className="w-max px-3 md:px-4 py-1.5 md:py-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-md transition-transform duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* READ MORE BUTTON */}
      <div className="text-center mt-10 md:mt-12">
        <button className="px-6 md:px-10 py-2 md:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden">
          <span className="relative z-10">Read more articles</span>
          <span className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
        </button>
      </div>

      {/* GRADIENT ANIMATION */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default TopBlogs;
