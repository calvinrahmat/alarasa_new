"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./logo";

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const productsMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileProductsOpen] = useState(false);
  const [showLogoText, setShowLogoText] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowLogoText(true); // Always show logo text when toggling menu
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

      // Only hide logo text when scrolling on mobile if the mobile menu is closed
      if (isMobile && !isOpen) {
        setShowLogoText(currentScrollY === 0);
      }

      if (!isMobile) {
        if (currentScrollY > lastScrollY.current && !isProductsMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProductsMenuOpen, isMobile, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for md in Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleProductsMouseEnter = () => {
    if (productsMenuTimeout.current) {
      clearTimeout(productsMenuTimeout.current);
    }
    setIsProductsMenuOpen(true);
    setIsVisible(true); // Ensure navbar is visible when submenu is open
  };

  const handleProductsMouseLeave = () => {
    productsMenuTimeout.current = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 300); // 300ms delay before closing the menu
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile || isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      ref={navRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full h-full absolute top-0 left-0 transition-all duration-300 ${
          isAtTop && !isHovered && !isOpen ? "h-0" : "h-full"
        } ${
          isMobile
            ? isOpen || isMobileProductsOpen
              ? "bg-[#1C2C1C]"
              : "bg-transparent"
            : "bg-[#1C2C1C]"
        }`}
      ></div>
      <div className="max-w-6xl mx-auto px-4 py-2 relative z-10">
        <div className="flex justify-between">
          <div className="flex items-center space-x-7">
            <Logo showText={!isMobile || showLogoText || isOpen} />
            <div className="hidden md:flex items-center space-x-1 text-xl">
              <Link
                href="/"
                className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 ${
                  isAtTop && !isHovered ? "text-white" : "text-white"
                }`}
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 flex items-center ${
                    isAtTop && !isHovered ? "text-white" : "text-white"
                  }`}
                >
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
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
                )}
              </div>
              <Link
                href="/about"
                className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 ${
                  isAtTop && !isHovered ? "text-white" : "text-white"
                }`}
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className={`outline-none mobile-menu-button ${
                isAtTop && !isHovered ? "text-white" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} relative z-10`}>
        <Link
          href="/"
          className="block py-2 px-6 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <div className="py-2 px-6 text-sm text-white">Products</div>
        <Link
          href="/prasmanan"
          className="block py-2 px-10 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          Prasmanan
        </Link>
        <Link
          href="/snack-box"
          className="block py-2 px-10 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          Snack Box & Coffee Break
        </Link>
        <Link
          href="/rice-box"
          className="block py-2 px-10 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          Rice Box
        </Link>
        <Link
          href="/about"
          className="block py-2 px-6 text-sm text-white hover:bg-green-500 hover:text-white transition duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
