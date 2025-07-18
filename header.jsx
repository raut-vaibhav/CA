import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? '' : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          setShowHeader(false); // Scrolling down
        } else {
          setShowHeader(true); // Scrolling up
        }
        setLastScrollY(window.scrollY);
      } else {
        setShowHeader(true); // At the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-[#0a0a0a] text-white shadow-md w-full fixed top-0 left-0 z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-white text-3xl font-semibold">
            Hire<span className="text-green-400">CA</span>
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 text-lg font-medium items-center relative z-50">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About</a>

          <div className="relative group">
            <button className="hover:text-green-400">Services</button>
            <div className="absolute left-0 mt-2 w-44 bg-[#1a1a1a] rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top z-20">
              <a href="#" className="block px-4 py-2 hover:bg-[#2a2a2a]">GST Services</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2a2a2a]">Income Tax Filing</a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-green-400">Experts in</button>
            <div className="absolute left-0 mt-2 w-44 bg-[#1a1a1a] rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top z-20">
              <a href="#" className="block px-4 py-2 hover:bg-[#2a2a2a]">Investment Advisory</a>
              <a href="#" className="block px-4 py-2 hover:bg-[#2a2a2a]">Foreign Taxation</a>
            </div>
          </div>

          <a href="#" className="hover:text-green-400">Contact Us</a>
        </nav>

        <div className="hidden md:block">
          <button className="bg-green-400 text-black px-4 py-2 hover:bg-green-500 flex items-center space-x-2 font-normal cursor-pointer text-lg transition-all duration-300">
            <span>Let’s Talk</span>
            <FaArrowUp className="mt-0.5" />
          </button>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] px-4 pb-4 transition-all duration-300">
          <a href="#" className="block py-2 border-b border-gray-700">Home</a>
          <a href="#" className="block py-2 border-b border-gray-700">About</a>

          <button
            className="w-full text-left py-2 border-b border-gray-700"
            onClick={() => toggleDropdown('services')}
          >
            Services
          </button>
          {openDropdown === 'services' && (
            <div className="ml-4 mb-2 transition-all duration-300 ease-in-out">
              <a href="#" className="block py-1 text-sm">GST Services</a>
              <a href="#" className="block py-1 text-sm">Income Tax Filing</a>
            </div>
          )}

          <button
            className="w-full text-left py-2 border-b border-gray-700"
            onClick={() => toggleDropdown('products')}
          >
            Products
          </button>
          {openDropdown === 'products' && (
            <div className="ml-4 mb-2 transition-all duration-300 ease-in-out">
              <a href="#" className="block py-1 text-sm">Investment Advisory</a>
              <a href="#" className="block py-1 text-sm">Foreign Taxation</a>
            </div>
          )}

          <a href="#" className="block py-2 border-b border-gray-700">Contact Us</a>

          <button className="mt-4 w-full cursor-pointer bg-green-400 text-black py-3 rounded hover:bg-green-500 font-normal text-sm flex justify-center items-center space-x-2 transition-all duration-300">
            <span>Let’s Talk</span>
            <FaArrowUp />
          </button>
        </div>
      )}
    </header>
  );
}
