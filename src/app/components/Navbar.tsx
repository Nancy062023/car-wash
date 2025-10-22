"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-gradient-to-r from-gray-800 via-sky-700 to-gray-800 text-white flex justify-between items-center">
      {/* Logo */}
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
        Sparkle
      </span>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-7">
        <Link href="/" className="text-white transition transform hover:scale-110">
          Home
        </Link>
        <Link href="/Vehicle" className="text-white transition transform hover:scale-110">
          Vehicles
        </Link>
        <Link href="/Service" className="text-white transition transform hover:scale-110">
          Services
        </Link>

        <Link href="/Contact">
          <button className="bg-gradient-to-r from-sky-600 to-gray-700 text-white px-4 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105 animate-bounce">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
