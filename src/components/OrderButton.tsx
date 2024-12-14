"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export default function OrderButton() {
  return (
    <Link
      href={`https://wa.me/6285280730787?text=${encodeURIComponent("Halo Minrasa! Mau tanya-tanya tentang Paket Catering Nasi Box Alarasa")}`}
      className="inline-block bg-yellow-500 font-bold text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 w-full text-center animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        sendGTMEvent({
          event: "button_click",
          value: "PESAN CATERING NASI BOX",
        })
      }
    >
      PESAN CATERING NASI BOX
    </Link>
  );
}
