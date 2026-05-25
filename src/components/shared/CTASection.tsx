import Image from "next/image";
import MarqueeTicker from "./MarqueeTicker";

export default function CTASection() {
  return (
    <section className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      {/* Background with Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dgtc1iood/image/upload/v1767512348/83e9c19591773e06b1fdad216a3f2daeba89a06e_jipcbg.jpg"
          alt="CTA Background Texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-80" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Marquee Band */}
        <div className="w-full mb-10">
          <MarqueeTicker
            items={["Let's Work Together"]}
            duration={40}
            separator="—"
            itemClassName="font-display font-bold text-[clamp(60px,8vw,100px)] text-white"
          />
        </div>

        {/* Content Block */}
        <div className="flex flex-col items-center text-center px-6 max-w-[600px] gap-8">
          <p className="font-body text-[16px] md:text-[18px] text-white/60 leading-relaxed">
            I collaborate with brands, businesses, and creatives to craft digital
            experiences that stand out. Ready when you are.
          </p>

          <a
            href="mailto:esuolasamuel7@gmail.com"
            className="inline-flex font-body font-medium text-primary bg-accent px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Leave a message
          </a>
        </div>
      </div>
    </section>
  );
}
