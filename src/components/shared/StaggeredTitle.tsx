"use client";

import { motion, Variants } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface StaggeredTitleProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}

export default function StaggeredTitle({
  text,
  as = "h2",
  className,
  delay = 0.1,
}: StaggeredTitleProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03, // var(--stagger-char)
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.6, // var(--duration-slow)
        ease: [0.16, 1, 0.3, 1] as const, // var(--ease-out-expo)
      },
    },
  };

  const MotionComponent = motion[as as keyof typeof motion] as any;

  return (
    <MotionComponent
      aria-label={text}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "font-display font-bold leading-none tracking-tighter text-white",
        className
      )}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "visible", verticalAlign: "top" }}
        >
          <motion.span
            variants={charVariants}
            style={{ display: "inline-block", willChange: "transform, opacity" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
}
