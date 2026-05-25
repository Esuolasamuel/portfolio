import StaggeredTitle from "../shared/StaggeredTitle";
import TextRotator from "../shared/TextRotator";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-end pb-24 pt-[168px] overflow-hidden bg-primary">
      {/* Subtle background line grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(to right, var(--color-text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-4">
          <TextRotator
            items={["Frontend Developer", "AI Enthusiast", "Tech Blogger", "Community Builder"]}
            className="text-[14px] uppercase tracking-widest text-accent"
          />
          <StaggeredTitle
            text="Beyond the Code"
            as="h1"
            className="text-[clamp(60px,8vw,100px)] tracking-[-0.04em]"
          />
        </div>
      </div>
    </section>
  );
}
