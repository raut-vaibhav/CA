import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-white relative py-8 md:py-20 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center overflow-hidden\">
      <h2 className="absolute text-[12vw] font-extrabold opacity-5 leading-none select-none -z-10 left-1/2 transform -translate-x-1/2">
        HireCA®
      </h2>
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">HireCA<sup>®</sup></h1>
        <p className="text-sm max-w-xs mt-2">
          At HireLaw, we are committed to providing exceptional legal services tailored to your unique needs.
        </p>
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <a href="#" className="hover:text-green-400 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-green-400 transition"><FaLinkedinIn /></a>
        </div>
      </div>
      <ul className="flex flex-col md:flex-row gap-4 text-center md:text-right">
        <li>
          <a href="#" className="hover:text-green-400 transition">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">About Us</a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">Practice Areas</a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">Attorneys</a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">Testimonials</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
