"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CTAButtonProps {
  /** Renders as <a> when provided, <button> otherwise */
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function CTAButton({ href, onClick, children }: CTAButtonProps) {
  const sharedClass = `
    group relative inline-flex items-center gap-3
    font-body font-medium text-[15px] tracking-wide
    text-primary bg-accent
    px-9 py-4 rounded-full
    overflow-hidden cursor-pointer
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent
  `;

  const inner = (
    <>
      <motion.span
        className="absolute inset-0 bg-black/10 rounded-full"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 overflow-hidden w-4 h-4 flex items-center justify-center" aria-hidden="true">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute"
          variants={{ hover: { x: 0, opacity: 1 } }}
          initial={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </motion.svg>
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={sharedClass}
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={sharedClass}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {inner}
    </motion.button>
  );
}