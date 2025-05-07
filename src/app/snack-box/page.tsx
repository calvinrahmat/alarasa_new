"use client";

export const runtime = 'edge';

import { Suspense } from "react";
import SnackBoxContent from "@/components/SnackBoxContent";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SnackBoxContent />
    </Suspense>
  );
}
