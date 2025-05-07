"use client";

import { usePathname } from "next/navigation";
import Whatsapp from "./whatsapp";

export default function ClientWhatsapp() {
  const pathname = usePathname();
  const showWhatsapp = pathname !== "/bio";

  if (!showWhatsapp) return null;
  
  return <Whatsapp />;
} 