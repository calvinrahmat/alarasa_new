"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1C2C1C] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex items-center space-x-7">
            <div>
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-1 text-xl text-white">
              <Link
                href="/"
                className="py-4 px-2  font-semibold hover:text-green-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-4 px-2  font-semibold hover:text-green-500 transition duration-300"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-500" />
              ) : (
                <Menu className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link
          href="/"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
