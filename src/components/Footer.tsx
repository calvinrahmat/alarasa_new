import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1C2C1C] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/logo.png" alt="alarasa" width={50} height={50} />
              <h2 className="text-2xl font-bold">alarasa</h2>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>123 Gourmet Street, Foodville, FC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@deliciousdelights.com</p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alarasa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
