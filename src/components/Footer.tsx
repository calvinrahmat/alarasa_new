import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const berenikaBold = localFont({
  src: [
    {
      path: "../../public/fonts/Berenika-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-berenika",
});

export default function Footer() {
  return (
    <footer className="bg-[#1C2C1C] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/logo.png" alt="alarasa" width={50} height={50} />
              <h2 className={`${berenikaBold.className} text-2xl ml-2`}>
                alarasa
              </h2>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <p>
              Jl. Komp. Perumahan DPR - RI Blok C No. 25, RT10/RW01, Kel. Joglo,
              Kec. Kembangan, Jakarta Barat - 16640
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61550236231984"
                className="hover:text-blue-400"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/alarasa.catering"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
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
