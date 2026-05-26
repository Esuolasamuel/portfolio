import Image from "next/image";
import StaggeredTitle from "../shared/StaggeredTitle";
import MarqueeTicker from "../shared/MarqueeTicker";

export default function ProjectsHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-start justify-end pb-24 pt-[232px] overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg"
          alt="Projects Background"
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 bg-primary opacity-80" />
      </div>

      <div className="relative z-10 w-full">
        {/* Title */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-10">
          <StaggeredTitle
            text="Featured Projects"
            as="h1"
            className="text-[clamp(60px,8vw,100px)] tracking-[-0.04em]"
          />
        </div>

        {/* Marquee Filter Band */}
        <div className="w-full border-t border-b border-white/10 py-4">
          <MarqueeTicker
            items={["E-commerce", "Fintech", "Healthcare", "Saas", "Social"]}
            duration={20}
            separator="·"
            itemClassName="text-[13px] md:text-[14px] text-white/60 tracking-widest"
          />
        </div>
      </div>
    </section>
  );
}
