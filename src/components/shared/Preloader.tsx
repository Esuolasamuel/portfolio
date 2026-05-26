"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Phase 1: Logo fade-in
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 100);

    // Phase 2: Counter 0% -> 100%
    const duration = 1700; // ms
    const interval = 20; // update every 20ms
    const steps = duration / interval;
    let currentStep = 0;

    const counterTimer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(counterTimer);
        
        // Phase 3: Wait a moment at 100%, then trigger exit
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }, interval);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(counterTimer);
    };
  }, []);

  const preloaderVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          variants={preloaderVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-1000 flex items-center justify-between p-10 lg:p-16 bg-primary"
        >
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showLogo ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white font-display font-bold text-xl md:text-2xl tracking-tight"
          >
            SamuelDev
          </motion.div>

          {/* Counter - Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white font-display font-black text-[clamp(60px,8vw,100px)] leading-none tracking-tight"
          >
            {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}