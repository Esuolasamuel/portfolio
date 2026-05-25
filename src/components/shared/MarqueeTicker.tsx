import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MarqueeTickerProps {
  items: string[];
  duration?: number;
  direction?: "left" | "right";
  separator?: string;
  className?: string;
  itemClassName?: string;
}

export default function MarqueeTicker({
  items,
  duration = 30,
  direction = "left",
  separator = "·",
  className,
  itemClassName,
}: MarqueeTickerProps) {
  // To handle 'right' direction, we could flip the animation direction
  const animationStyle = {
    animation: `marquee ${duration}s linear infinite ${direction === "right" ? "reverse" : "normal"}`,
  };

  return (
    <div className={cn("overflow-hidden w-full flex items-center", className)}>
      <div className="flex" style={animationStyle}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex shrink-0 items-center pr-8">
            {items.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center">
                <span
                  className={cn(
                    "uppercase tracking-widest whitespace-nowrap font-body font-medium",
                    itemClassName || "text-sm text-white/60"
                  )}
                >
                  {item}
                </span>
                {/* Separator */}
                <span className="mx-4 text-white/40 font-display">
                  {separator}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
