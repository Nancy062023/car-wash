"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-5 py-3 bg-gradient-to-r from-gray-800 via-sky-700 to-gray-800 text-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
           <Link href="/">
          <Image
            src="/logo-2.png"
            alt="Sparkle Logo"
            width={65}
            height={55}
            className="object-contain"
          />
        </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-sky-300 transition-colors">
            Home
          </Link>
          <Link href="/Vehicle" className="hover:text-sky-300 transition-colors">
            Vehicles
          </Link>
          <Link href="/Service" className="hover:text-sky-300 transition-colors">
            Services
          </Link>
          <Link href="/Contact">
            <button className="bg-gradient-to-r from-sky-600 to-gray-700 px-4 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center space-y-4 md:hidden">
          <Link
            href="/"
            className="hover:text-sky-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/Vehicle"
            className="hover:text-sky-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Vehicles
          </Link>
          <Link
            href="/Service"
            className="hover:text-sky-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link href="/Contact" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-gradient-to-r from-sky-600 to-gray-700 px-4 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
