"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-sky-700 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo Placeholder (optional icon or image) */}
              {/* <Car className="w-8 h-8 text-blue-400 animate-pulse" /> */}
              <span className="text-xl font-bold">Sparkle</span>
            </div>
            <p className="text-gray-400">Premium car cleaning since 2021</p>
          </div>

          {/* Vehicles Section */}
          <div>
            <h4 className="font-bold mb-4">Vehicles We Serve</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="/Vehicle" className="hover:text-white transition">
                Vehicles Service
              </Link>
              
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="/Service" className="hover:text-white transition">
              Service Packages
              </Link>
             
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="tel:+917779829030" className="hover:text-white transition">
                +91 7779829030
              </Link>
              <br />
              <Link href="mailto:info@cleanshine.com" className="hover:text-white transition">
                info@cleanshine.com
              </Link>
              <br />
              <Link href="/contact" className="hover:text-white transition">
                Delhi NCR, India
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Clean & Shine Auto Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
