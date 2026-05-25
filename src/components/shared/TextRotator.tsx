"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextRotatorProps {
  items?: string[];
  interval?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  "Frontend Developer",
  "Content Creator",
  "Technical Writer",
];

export default function TextRotator({
  items = DEFAULT_ITEMS,
  interval = 2500,
  className,
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const textVariants: Variants = {
    enter: { y: "100%", opacity: 0 },
    center: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] as const },
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-start",
        className
      )}
      // We need a fixed height or a trick to keep the height from collapsing.
      // Usually, rendering an invisible dummy text is the safest approach for responsive height.
    >
      <span className="invisible pointer-events-none">{items[0]}</span>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute left-0 whitespace-nowrap text-white/60 font-body"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
