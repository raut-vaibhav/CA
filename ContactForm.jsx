import React, { useState } from "react";

export function ContactForm() {
  const [formType, setFormType] = useState("customer");

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#0f1113] p-4 pt-[100px]">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-lg shadow-lg border border-green-400 text-white">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setFormType("customer")}
            className={`px-4 py-2 rounded-l-md ${formType === "customer" ? "bg-green-400 text-black" : "bg-gray-200 text-black"}`}
          >
            Hire CA
          </button>
          <button
            onClick={() => setFormType("candidate")}
            className={`px-4 py-2 rounded-r-md ${formType === "candidate" ? "bg-green-400 text-black" : "bg-gray-200 text-black"}`}
          >
            Apply as CA
          </button>
        </div>
        <form className="space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {formType === "customer" ? "Contact Our CA Firm" : "Apply as CA"}
          </h2>
          <input type="text" placeholder="Enter your full name" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
          <div className="flex gap-2">
            <select className="p-2 rounded bg-transparent border-b border-green-400 focus:outline-none">
              <option value="+91">+91</option>
            </select>
            <input type="tel" placeholder="Enter your phone number" className="flex-1 p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
          </div>
          <input type="email" placeholder="Enter your email address" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
          <input type="text" placeholder="Enter your city/location" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
          {formType === "customer" ? (
            <>
              <select className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none">
                <option className="text-black">Select CA Service</option>
                <option className="text-black">Income Tax Filing</option>
                <option className="text-black">GST Registration</option>
                <option className="text-black">Company Incorporation</option>
                <option className="text-black">Other</option>
              </select>
              <input type="date" placeholder="Select expected start date" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
            </>
          ) : (
            <>
              <select className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none">
                <option>Select your qualification</option>
                <option>CA Inter</option>
                <option>CA Final</option>
                <option>Other</option>
              </select>
              <input type="number" placeholder="Enter your years of experience" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
              <input type="text" placeholder="Enter your preferred location" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
              <input type="file" placeholder="Upload your resume" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
              <input type="file" placeholder="Upload certificates (optional)" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
              <input type="url" placeholder="LinkedIn Profile URL (optional)" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none" />
            </>
          )}
          <textarea placeholder="Write your message here..." rows="3" className="w-full p-2 rounded bg-transparent border-b border-green-400 focus:outline-none"></textarea>
          <button type="submit" className="w-full bg-green-400 text-black py-3 rounded hover:bg-green-500 font-semibold transition-all">
            {formType === "customer" ? "Connect With Our CA Team ↑" : "Apply Now"}
          </button>
        </form>
      </div>
    </section>
  );
}
