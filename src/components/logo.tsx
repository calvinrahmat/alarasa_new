import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const berenikaBold = localFont({
  src: [
    {
      path: "../../public/fonts/Berenika-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-berenika",
});

interface LogoProps {
  showText: boolean;
}

const Logo: React.FC<LogoProps> = ({ showText }) => {
  const pathname = usePathname();
  const isArticlePage = pathname?.includes("article/");

  return (
    <Link href="/" aria-label="Go to homepage">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Alarasa logo"
          width={60}
          height={60}
          priority
          quality={90}
        />
        {showText && (
          <div
            className={`${berenikaBold.className} text-2xl ml-2 ${
              isArticlePage ? "text-slate-800" : "text-white"
            }`}
          >
            alarasa
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
