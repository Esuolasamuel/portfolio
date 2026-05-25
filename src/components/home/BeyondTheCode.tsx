import StaggeredTitle from "../shared/StaggeredTitle";
import TextRotator from "../shared/TextRotator";
import Image from "next/image";

const viralVideos = [
  { id: 1, title: "2025 Tech wrapped", platform: "Instagram", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
  { id: 2, title: "ChatGPT is no longer safe!...", platform: "TikTok", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
  { id: 3, title: "Building my portfolio", platform: "Instagram", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
  { id: 4, title: "5 lessons i've learned from 5 years in tech", platform: "TikTok", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
  { id: 5, title: "Framer motion", platform: "TikTok", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
  { id: 6, title: "Learn Javascript for 30 days", platform: "TikTok", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
  { id: 7, title: "CSS Tool", platform: "TikTok", img: "https://res.cloudinary.com/dgtc1iood/image/upload/v1766907340/8c288a67b8bfb8d9a629ea07fe3663383bb89b66_buoski.jpg" },
];

export default function BeyondTheCode() {
  return (
    <section className="w-full py-32 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start mb-20">
          
          {/* Header Content */}
          <div className="flex flex-col max-w-[600px]">
            <TextRotator
              items={["Frontend Developer", "Content Creator", "Technical Writer"]}
              className="text-[14px] md:text-[16px] uppercase tracking-wider text-accent mb-4"
            />
            <StaggeredTitle text="Beyond the Code" as="h2" className="text-[clamp(40px,5vw,72px)] mb-6" />
            <p className="font-body text-[16px] md:text-[18px] leading-relaxed text-white/60">
              I create content that bridges the gap between complex tech concepts and everyday developers. Through tutorials, articles, and community engagement, I aim to simplify the learning curve for others.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-6 lg:mt-10">
            <div className="flex flex-col gap-2">
              <span className="font-display font-bold text-[clamp(28px,3vw,40px)] text-white leading-none">50k+</span>
              <span className="font-body text-[14px] text-white/40 uppercase tracking-wider">Followers</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-display font-bold text-[clamp(28px,3vw,40px)] text-white leading-none">2M+</span>
              <span className="font-body text-[14px] text-white/40 uppercase tracking-wider">Views</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-display font-bold text-[clamp(28px,3vw,40px)] text-white leading-none">500+</span>
              <span className="font-body text-[14px] text-white/40 uppercase tracking-wider">Posts</span>
            </div>
          </div>

        </div>

        {/* Video Cards Grid (Scrolling horizontally on mobile/tablet) */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:-mx-10 md:px-10 lg:grid lg:grid-cols-4 gap-6 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0 scrollbar-hide snap-x">
          {viralVideos.map((video) => (
            <div key={video.id} className="relative flex-none w-[280px] lg:w-full aspect-[9/16] rounded-2xl overflow-hidden bg-card group border border-white/10 snap-center">
              <Image
                src={video.img}
                alt={video.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2">
                <span className="font-body text-[12px] text-accent uppercase tracking-wider">
                  {video.platform}
                </span>
                <h4 className="font-body font-medium text-[16px] text-white leading-tight">
                  {video.title}
                </h4>
                <div className="mt-2">
                  <span className="inline-flex items-center font-body text-[12px] text-primary bg-white px-3 py-1 rounded-full">
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
