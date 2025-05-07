"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const showNavbar = pathname !== "/bio";

  if (!showNavbar) return null;
  
  return <Navbar />;
} 