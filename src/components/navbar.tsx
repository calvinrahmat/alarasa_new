"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const productsMenuRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileProductsOpen] = useState(false);
  const [showLogoText, setShowLogoText] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowLogoText(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
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

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isProductsMenuOpen, isMobile, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        productsMenuRef.current &&
        !productsMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsProductsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === 'undefined') return;
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for md in Tailwind
    };

    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", checkMobile);
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsProductsMenuOpen(false);
  }, [pathname]);

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  const isHomePage = pathname === "/";

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
          isHomePage
            ? isAtTop && !isHovered && !isOpen
              ? "bg-transparent"
              : "bg-[#223324]/80"
            : "bg-[#223324]/95"
        } ${
          isMobile
            ? isOpen || isMobileProductsOpen
              ? "bg-[#223324]/95"
              : isHomePage
                ? "bg-transparent"
                : "bg-[#223324]/95"
            : ""
        }`}
      ></div>
      <div className="xl:px-16 mx-auto px-4 py-2 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo showText={!isMobile || showLogoText || isOpen} />
          </div>
          <div className="hidden md:flex items-center space-x-7">
            <Link
              href="/"
              className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 text-lg font-['Sweet_Sans_Pro_Heavy'] text-[#E5DFCC]`}
            >
              Home
            </Link>
            <div className="relative" ref={productsMenuRef}>
              <button
                className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 flex items-center text-lg font-['Sweet_Sans_Pro_Heavy'] text-[#E5DFCC]`}
                onClick={toggleProductsMenu}
              >
                Products <ChevronDown className="ml-1 h-5 w-5" />
              </button>
              {isProductsMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <Link
                      href="/nasi-box"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 font-['Sweet_Sans_Pro_Heavy']"
                    >
                      Nasi Box
                    </Link>
                    <Link
                      href="/prasmanan"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 font-['Sweet_Sans_Pro_Heavy']"
                    >
                      Prasmanan
                    </Link>
                    <Link
                      href="/snack-box"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 font-['Sweet_Sans_Pro_Heavy']"
                    >
                      Snack Box & Coffee Break
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 text-lg font-['Sweet_Sans_Pro_Heavy'] text-[#E5DFCC]`}
            >
              About Us
            </Link>
            <Link
              href="/article"
              className={`py-4 px-2 font-semibold hover:text-green-500 transition duration-300 text-lg font-['Sweet_Sans_Pro_Heavy'] text-[#E5DFCC]`}
            >
              Blog
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button text-[#E5DFCC]"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} relative z-10`}>
        <Link
          href="/"
          className="block py-2 px-6 text-sm text-[#E5DFCC] hover:bg-green-500 hover:text-white transition duration-300 font-['Sweet_Sans_Pro_Heavy']"
        >
          Home
        </Link>

        <div className="block py-2 px-6 text-sm text-[#E5DFCC] bg-green-900/30 font-['Sweet_Sans_Pro_Heavy']">
          Products
        </div>
        <Link
          href="/nasi-box"
          className="block py-2 px-10 text-sm text-[#E5DFCC] hover:bg-green-500 hover:text-white transition duration-300 font-['Sweet_Sans_Pro_Heavy']"
        >
          Nasi Box
        </Link>
        <Link
          href="/prasmanan"
          className="block py-2 px-10 text-sm text-[#E5DFCC] hover:bg-green-500 hover:text-white transition duration-300 font-['Sweet_Sans_Pro_Heavy']"
        >
          Prasmanan
        </Link>
        <Link
          href="/snack-box"
          className="block py-2 px-10 text-sm text-[#E5DFCC] hover:bg-green-500 hover:text-white transition duration-300 font-['Sweet_Sans_Pro_Heavy']"
        >
          Snack Box & Coffee Break
        </Link>

        <Link
          href="/about"
          className={`block py-2 px-6 text-sm text-[#E5DFCC] hover:bg-green-500 hover:text-white transition duration-300 font-['Sweet_Sans_Pro_Heavy']`}
        >
          About Us
        </Link>
        <Link
          href="/article"
          className={`block py-2 px-6 text-sm text-[#E5DFCC] hover:bg-green-500 hover:text-white transition duration-300 font-['Sweet_Sans_Pro_Heavy']`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
