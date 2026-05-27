"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[200] transition-all duration-300 ease-out flex items-center justify-between px-6 md:px-10 lg:px-16 py-6 md:py-8",
          isScrolled
            ? "bg-[#000000]/10 backdrop-blur-md border-b border-white/5 py-4 md:py-6"
            : "bg-transparent border-b border-transparent"
        )}
      >
          {/* Logo (Left) */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="font-display font-bold text-lg md:text-[20px] text-white tracking-tight"
            >
              SamuelDev
            </Link>
          </div>

          {/* Nav Links (Center) */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative font-body font-medium text-[15px] transition-colors duration-200",
                    isActive
                      ? "text-white font-bold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact (Right) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Desktop Contact CTA */}
            <div className="hidden md:flex">
              <a
                href="mailto:esuolasamuel7@gmail.com"
                className="font-body font-medium text-[15px] text-white transition-colors duration-200 hover:text-white/80"
              >
                esuolasamuel7@gmail.com
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-[150] bg-[#0a0a0a] pt-28 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-display font-semibold text-[32px] tracking-tight",
                    pathname === link.href
                      ? "text-white"
                      : "text-white/60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:esuolasamuel7@gmail.com"
                className="mt-8 inline-flex self-center font-body font-medium text-[16px] text-[#0a0a0a] bg-white px-6 py-3 rounded-full"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}