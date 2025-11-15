// app/components/LostGuidance.tsx
import React from "react";
import Image from "next/image";

const LostGuidance: React.FC = () => {
  return (
    <section className="bg-[#060C19] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
           <h2 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
  Feeling <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
    LOST
  </span>{" "}
  after learning the basics of web development?
</h2>

          <p className="text-gray-300 mb-8 text-lg">
            Many beginners feel overwhelmed after learning the basics. Don't worry! 
            With the right guidance and roadmap, you can turn your skills into a 
            successful web development career.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
              Get Free Consultation
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition">
              Get a Proper Roadmap
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition">
              Buy an Advanced Course
            </button>
          </div>
        </div>

        {/* Right image */}
         <div className="relative w-full h-80 md:h-[400px]">
  <Image
    src="/images/boy.jpg"
    alt="Lost Guidance Illustration"
    fill
    className="object-cover rounded-lg shadow-lg"
  />
</div>
      </div>
    </section>
  );
};

export default LostGuidance;
