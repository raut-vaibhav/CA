import React from 'react';
import img from '../assets/bgImg.jpg'

export function Hero() {
  return (
    <section
      className="relative bg-[#0f1113] text-white py-[200px] px-4 md:px-10 lg:px-20 overflow-hidden lg:h-[100vh] h-[12`0vh]"
      style={{ position: 'relative' }}
    >
      {/* Background Image */}
      <img
        src={img} // Update this path based on your file structure
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-10 z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center align-middle">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Trusted Legal Solutions for <br className="hidden md:block" />
          <span className="text-[#00ffa0]">Your Peace of Mind</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-[20px] mt-4 mb-8">
          At <span className="font-semibold text-white leading-normal">HireCA</span>, We provide professional services in taxation, accounting, audits, company registration, and financial advisory. From GST and income tax filing to business setup and compliance, our firm ensures reliable and efficient solutions tailored to your needs.
        </p>
        <button className="bg-[#00ffa0] hover:bg-[#00d68f] text-black font-medium py-3 px-6 rounded shadow transition">
          Schedule Meet
        </button>
      </div> 
    </section>
  );
}
