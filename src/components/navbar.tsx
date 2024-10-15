"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Logo from "./logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#1C2C1C] fixed top-0 left-0 right-0 z-50" ref={navRef}>
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex items-center space-x-7">
            <div>
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-1 text-xl text-white">
              <Link
                href="/"
                className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300"
              >
                Home
              </Link>
              <div className="relative group">
                <button
                  onClick={toggleProducts}
                  className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300 flex items-center"
                >
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${
                    isProductsOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="py-1">
                    <Link
                      href="/prasmanan"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Prasmanan
                    </Link>
                    <Link
                      href="/snack-box"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Snack Box & Coffee Break
                    </Link>
                    <Link
                      href="/rice-box"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Rice Box
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300"
              >
                About Us
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
          className="block py-2 px-4 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <div>
          <button
            onClick={toggleProducts}
            className="flex justify-between items-center w-full py-2 px-4 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
          >
            Products
            {isProductsOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          <div className={`bg-gray-700 ${isProductsOpen ? "block" : "hidden"}`}>
            <Link
              href="/prasmanan"
              className="block py-2 px-8 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
            >
              Prasmanan
            </Link>
            <Link
              href="/snack-box"
              className="block py-2 px-8 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
            >
              Snack Box & Coffee Break
            </Link>
            <Link
              href="/rice-box"
              className="block py-2 px-8 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
            >
              Rice Box
            </Link>
          </div>
        </div>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
