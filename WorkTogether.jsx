import React from "react";

export function WorkTogether() {
  return (
    <section className="bg-[#0f1113] text-white flex flex-col items-center justify-center py-16 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      <h2 className="absolute text-[10vw] font-extrabold opacity-10 leading-none select-none">
        Let's Work Together
      </h2>
      <div className="relative z-10 text-center">
        <p className="text-green-400 flex items-center justify-center gap-2">
          <span className="border-t border-green-400 w-8"></span> Work With Us
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl lin font-bold mt-4">
          Have Any Projects On Minds!
          <br />
          Feel Free to Contact Us.
        </h1>
        <div className="mt-8 flex justify-center">
          <button className="bg-green-400 hover:bg-green-500 text-black rounded-full w-40 h-40 flex flex-col items-center justify-center text-center font-medium transition-all duration-300 cursor-pointer">
            <span className="text-xl">↑</span>
            <span>Let's Talk</span>
            <span>With Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}

