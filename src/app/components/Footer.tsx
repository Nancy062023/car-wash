"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-sky-700 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-2">
              <Image
                src="/logo-2.png"
                alt="Sparkle Logo"
                width={90}
                height={60}
                className="object-contain"
              />
              <span className="text-2xl font-bold">Sparkle</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium car cleaning since <span className="text-white font-medium">2018</span>.  
             
            </p>
          </div>

          {/* Vehicles Section */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Vehicles We Serve</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="/Vehicle" className="hover:text-white transition">
                Vehicle Services
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="/Service" className="hover:text-white transition">
                Service Packages
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="tel:+917779829030" className="hover:text-white transition">
                +91 7779829030
              </Link>
          
             
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Sparkle Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
