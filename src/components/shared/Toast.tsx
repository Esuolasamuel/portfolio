"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import { cn } from "@/lib/cn";

export type ToastVariant = "success" | "error";

export interface ToastProps {
  variant: ToastVariant;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  /** Auto-dismiss delay in ms. Defaults to 5000. */
  duration?: number;
}

export function Toast({
  variant,
  message,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isVisible) {
      timerRef.current = setTimeout(onClose, duration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, duration, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        // Base
        "fixed bottom-6 right-6 z-[9999] flex items-start gap-3",
        "max-w-sm w-full rounded-2xl px-4 py-4 shadow-2xl",
        "border backdrop-blur-sm",
        // Transition
        "transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none",
        // Variants
        variant === "success" &&
          "bg-white/10 border-white/20 text-white",
        variant === "error" &&
          "bg-red-950/80 border-red-500/30 text-red-100"
      )}
    >
      {/* Icon */}
      <span className="mt-0.5 shrink-0">
        {variant === "success" ? (
          <CheckCircle
            className="w-5 h-5 text-emerald-400"
            aria-hidden="true"
          />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
        )}
      </span>

      {/* Message */}
      <p className="flex-1 text-sm font-body leading-snug">{message}</p>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="mt-0.5 shrink-0 rounded-full p-0.5 opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}