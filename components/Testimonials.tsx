"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Ishfaq Ahmad",
    role: "Eshaal Shoes",
    image: "/images/avatar1.jpg",
    quote:
      "A huge thank you to Nexora and their team! They understood exactly what we needed and built something far better than we imagined.",
  },
  {
    name: "Li Wei",
    role: "WellCare",
    image: "/images/avatar2.jpg",
    quote:
      "Thank you to Nexora for bringing our vision to life! The site looks stunning and performs perfectly. The whole process felt easy and stress-free.",
  },
  {
    name: "Sara Khan",
    role: "Founder, HomeSpace",
    image: "/images/avatar3.jpg",
    quote:
      "We’re so grateful to Nexora — their creative approach and technical skills made our project a success. They really care about their clients.",
  },
  {
    name: "John",
    role: "Product Manager, TechEdge",
    image: "/images/avatar4.jpg",
    quote:
      "Working with Nexora was a great experience. They kept us informed, met every deadline, and delivered an amazing website.",
  },
  {
    name: "Amna Mehmood",
    role: "Director, VisionWave",
    image: "/images/avatar5.jpg",
    quote:
      "Nexora turned our messy ideas into something clean and beautiful. They’re talented, kind, and truly passionate about what they do.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#060C19] text-white flex flex-col items-center py-16 px-6">
      <section className="max-w-6xl w-full text-center mb-12 mt-[50px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ❤️ What Our Clients Say 
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-[40px]">
          Feedback from the amazing people and companies we’ve worked with
          across the world.
        </p>
      </section>

      {/* CONTINUOUS SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // mobile view
        breakpoints={{
          768: { slidesPerView: 2 }, // tablet/desktop view
        }}
        loop={true} // infinite loop
        freeMode={true} // smooth continuous movement
        autoplay={{
          delay: 0, // continuous without stopping
          disableOnInteraction: false, // never stops on interaction
          pauseOnMouseEnter: false, // never stops on hover
        }}
        speed={5000} // control speed (ms)
        className="w-full max-w-6xl pb-10 flex items-center"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="bg-gradient-to-b from-[#101726] to-[#060C19] border border-gray-800 rounded-2xl p-8 text-center shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] transition-all mx-auto w-[90%] md:w-[85%] flex flex-col justify-center">
              <div className="flex justify-center mb-5">
                <div className="relative w-20 h-20">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="rounded-full object-cover border-2 border-indigo-500"
                  />
                </div>
              </div>
              <p className="text-gray-300 italic text-base md:text-lg mb-6 leading-relaxed">
                “{t.quote}”
              </p>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <span className="text-sm text-indigo-400">{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </main>
  );
}
