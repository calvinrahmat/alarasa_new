import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const berenikaBold = localFont({
  src: [
    {
      path: "../../public/fonts/Berenika-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-berenika",
});

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <div
            className={`${berenikaBold.variable} font-berenika text-2xl text-white`}
          >
            alarasa
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
