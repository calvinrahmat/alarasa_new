"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

export default function AnimatedButton({
  href,
  className,
  children,
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        rotate: [0, 2, -2, 0],
        transition: { repeat: Infinity, duration: 0.5 },
      }}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
