import Image from "next/image";

const stats = [
  { label: "Project Completed", value: "4" },
  { label: "Total Client", value: "2+" },
];

const skills = [
  "React Js",
  "Next Js",
  "Javascript",
  "Git",
  "Tailwind",
  "Typescript",
  "HTML",
  "CSS",
];

export default function AboutProfile() {
  return (
    <section className="w-full py-32 bg-primary">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* Profile + About Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">

          {/* Photo */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-white/10">
            <Image
              src="/Hero.png"
              alt="Esuola Samuel"
              fill
              className="object-contain w-full h-full"
            />
            {/* Fallback overlay if no image */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 font-body text-sm">Profile Photo</span>
            </div> */}
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-bold text-[clamp(28px,3vw,40px)] text-white leading-tight">
              About Esuola Samuel
            </h2>

            <p className="font-body text-[16px] md:text-[18px] leading-relaxed text-white/60">
              I'm a frontend engineer who builds clean, fast, and accessible web interfaces. 
              My focus is turning product ideas into polished React and Next.js applications 
              that users actually enjoy using — no bloat, no friction, just experiences that work.
            </p>

            <p className="font-body text-[16px] md:text-[18px] leading-relaxed text-white/60">
              I thrive on solving real problems with thoughtful code and pixel-perfect design. 
              Whether it's architecting component systems, optimizing for Core Web Vitals, or 
              collaborating with teams to ship features users love, I'm driven by work that makes 
              an impact. Currently open to opportunities where I can build, learn, and deliver real value.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-t border-b border-white/10 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 text-center sm:text-left">
              <span className="font-display font-black text-[clamp(40px,5vw,64px)] text-white leading-none">
                {stat.value}
              </span>
              <span className="font-body text-[14px] text-white/40 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* My Top Skills */}
        <div className="flex flex-col gap-6">
          <h3 className="font-body text-[12px] uppercase tracking-wider text-white/40">
            My Top Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-body text-[14px] text-white/60 px-5 py-2 border border-white/10 rounded-full hover:border-accent hover:text-accent transition-colors duration-fast"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
