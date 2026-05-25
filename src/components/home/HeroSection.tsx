"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import StaggeredTitle from "../shared/StaggeredTitle";
import TextRotator from "../shared/TextRotator";

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-9 pb-9 flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-360 mx-auto px-6 md:px-10 lg:px-16">
        <div>
          <StaggeredTitle
            text="ESUOLA SAMUEL"
            as="h1"
            className="text-[clamp(80px,10vw,140px)] w-full tracking-[-0.04em]"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column - Content (55%) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="flex flex-col">
              <TextRotator
                items={["Frontend Developer", "AI Enthusiast", "Tech Blogger", "Community Builder"]}
                className="text-[clamp(18px,2vw,24px)] font-body font-medium text-white/60 mt-2"
              />
            </div>

            <p className="font-body text-[16px] md:text-[18px] leading-relaxed text-white/60 max-w-[600px]">
              I build beautiful, user-friendly web experiences and love sharing the journey through tutorials, blogs, and community vibes.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="https://docs.google.com/document/d/1qDpI60HjnIjzKGHwA8j_HxEMjqXbODGCqTg9_-fWcEM/edit?tab=t.0"
                className="font-body font-medium text-primary bg-accent px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                View resume
              </a>
              <a
                href="mailto:esuolasamuel7@gmail.com"
                className="font-body font-medium text-white px-8 py-3 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4 mt-10 pt-4 border-t border-white/10 w-full sm:w-auto">
              <span className="font-body text-[12px] uppercase tracking-wider text-white/40">
                {time ? `${time} WAT` : "WAT"}
              </span>
              <span className="font-body text-[14px] text-white/60">
                Based in Lagos, Nigeria
              </span>
            </div>
          </div>

           {/* Right Column - Illustration (45%) */}
           <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0 relative">
             <div className="relative w-full aspect-[4/3] bg-card rounded-2xl overflow-hidden border border-white/10">
               <Image 
                 src="/Hero.png" 
                 alt="Profile Illustration" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="object-contain w-full h-full"
                 priority
               />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
