import React from 'react';
import flowerImg from '../assets/CA.jpg'; // Your right-side image
import aboutBgImg from '../assets/aboutBgImg.jpg'; // Background image

export function About() {
  return (
    <section className="relative bg-[#0f1113] text-white py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={aboutBgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-10 z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-left max-w-xl">
          <p className="text-[#00ffa0] text-md tracking-widest font-medium mb-2 uppercase">About Us</p>
          <h2 className="text-3xl lg:text-5xl md:text-4xl font-semibold mb-4">About HireCA<sup>®</sup></h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed lg:text-[20px]">
            Providing all tax & compliance services in India whether online or offline using the most secure technology with upfront transparent pricing approach and helping businesses to grow.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              "Personalized attention",
              "Proven track record of success",
              "Transparent and honest communication"
            ].map((text, idx) => (
              <span
                key={idx}
                className="border border-[#00ffa0] text-[#00ffa0] text-[18px] px-3 py-2 rounded-full hover:bg-[#00ffa01a] transition"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image 
        <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
          <img
            src={flowerImg}
            alt="CA Team"
            className="w-full object-contain drop-shadow-lg"
          />
        </div>
        */}
      </div>
    </section>
  );
}
