"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          APA<span className="text-blue-500">Solutions</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-400 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full transition-all font-semibold shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-md px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white text-lg hover:text-blue-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-5 rounded-full transition-all font-semibold shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;