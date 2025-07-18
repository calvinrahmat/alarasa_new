"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

interface OrderButtonProps {
  value?: string;
  whatsappText?: string;
  phoneNumber?: string;
  children?: React.ReactNode;
}

export default function OrderButton({
  value = "PESAN CATERING ALARASA",
  whatsappText = "Halo Minrasa! Mau tanya-tanya tentang Paket Catering Alarasa",
  phoneNumber = "6285280730787",
  children = "PESAN CATERING ALARASA",
}: OrderButtonProps) {
  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`}
      className="inline-block bg-[#223324] font-bold text-white py-3 px-6 rounded-full hover:bg-green-800 transition duration-300 w-full text-center animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        sendGTMEvent({
          event: "button_click",
          value: value,
        })
      }
    >
      {children}
    </Link>
  );
}
