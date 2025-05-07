'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  isPrimary?: boolean;
  icon?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ 
  href, 
  children, 
  isPrimary = false,
  icon
}) => {
  return (
    <motion.a 
      href={href}
      className={cn(
        "flex items-center justify-between w-full px-6 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg",
        "font-medium text-lg border border-transparent text-white",
        "hover:translate-y-[-2px] active:translate-y-[1px]",
        isPrimary 
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : "bg-white/10 hover:bg-white/20 text-white hover:border-white/50"
      )}
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={isPrimary ? {
        scale: [1, 1.05, 1]
      } : {}}
      transition={isPrimary ? {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      } : {
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      <div className="flex items-center space-x-3">
        {icon && <div>{icon}</div>}
        <span>{children}</span>
      </div>
      <ExternalLink className="h-5 w-5" />
    </motion.a>
  );
};

export default LinkButton;
