import React from "react";
import { ArrowUpRight } from "lucide-react";

// Sample images (replace with actual assets)
import webDev from "../assets/vite.svg";
import appDev from "../assets/vite.svg";
import digitalMarketing from "../assets/vite.svg";
import maintenance from "../assets/vite.svg";

export function Services() {
  const services = [
    {
      title: "Income Tax Filing",
      description: "We file accurate income tax returns for individuals, firms, and companies.Ensures compliance with current tax laws and timely submissions.Includes revised returns, refunds, and rectification handling.",
      iconColor: "bg-[#00ffa0]/90",
      bg: "bg-[#00ffa0]/10",
    },
    {
      title: "GST Services",
      description: "We offer GST registration, return filing, and advisory. Ensure proper ITC claims, compliance, and error-free filings. Also handle annual returns, audits, and GST notices.",
      iconColor: "bg-[#00ffa0]/20",
      bg: "bg-[#1f1f1f]",
    },
    {
      title: "Tax Planning & Advisory",
      description: "Strategic planning to reduce tax liability legally.Covers income structuring, investments, and exemptions.Tailored for both individuals and businesses.",
      iconColor: "bg-[#00ffa0]/20",
      bg: "bg-[#1f1f1f]",
    },
    {
      title: "Tax Audit",
      description: "We conduct tax audits under Section 44AB of the Income Tax Act. Identify discrepancies and ensure proper disclosures. Mandatory for businesses above threshold limits.",
      iconColor: "bg-[#00ffa0]/20",
      bg: "bg-[#1f1f1f]",
    },
  ];

  return (
    <section className="bg-[#0f1113] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#00ffa0] font-medium mb-2 uppercase tracking-wide">All Services</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:text-5xl">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm lg:py-4 sm:text-base lg:text-[20px]">
          Comprehensive Website Services to Ignite Your Online Success. Empower
          Your Business with Powerful Online Services from our Website.
        </p>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform ${service.bg}`}
            >
              {/* Top section */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-full ${service.iconColor}`}>
                    <ArrowUpRight className="text-black w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-start tracking-normal">{service.title}</h3>
              </div>

              {/* Bottom Description */}
              <div className="p-2 px-4 text-start">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
