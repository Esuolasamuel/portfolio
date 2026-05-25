import Image from "next/image";
import StaggeredTitle from "../shared/StaggeredTitle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const allProjects = [
  {
    id: "01",
    title: "PausePoint",
    description: "Leave Management system for WayStream staff to facillitate Approvals, Tracking, Application seamlessly",
    liveUrl: "https://gitlab.com/zyonel-interns/pause-point",
    codeUrl: null,
    stack: ["React", "Tailwind CSS", "Version Control"],
    image: "/PausePoint.PNG",
  },
  {
    id: "02",
    title: "x35Projects",
    description: "platform to showcase x35's projects and products to potential client's",
    liveUrl: "https://www.x35Project.com",
    codeUrl: null,
    stack: ["Next.JS", "Tailwind CSS", "Seo", "Nodemailer", "Route Handler"],
    image: "/x35Projects.PNG",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-32 bg-secondary">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-16">
          <StaggeredTitle text="Featured Projects" as="h2" className="text-[clamp(40px,5vw,72px)]" />
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {allProjects.map((project, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group",
                  isEven && "lg:[direction:rtl]"
                )}
              >
                {/* Image Column */}
                <div className={cn("relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-white/10", isEven && "[direction:ltr]")}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-slow group-hover:scale-105"
                  />
                </div>

                {/* Content Column */}
                <div className={cn("relative flex flex-col items-start", isEven && "[direction:ltr]")}>
                  {/* Ghost Number */}
                  <span className="absolute -top-10 -left-6 text-[clamp(80px,10vw,140px)] font-display font-bold leading-none text-accent opacity-15 select-none -z-10">
                    {project.id}
                  </span>

                  <h3 className="font-display font-bold text-[clamp(28px,3vw,40px)] text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="font-body text-[16px] text-white/60 mb-8 max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-2">
                      <span className="font-body font-medium text-[14px] text-white/40 w-24">Live website</span>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-body font-medium text-[14px] text-accent hover:underline">
                        {project.liveUrl}
                      </a>
                    </div>
                    {project.codeUrl && (
                      <div className="flex items-center gap-2">
                        <span className="font-body font-medium text-[14px] text-white/40 w-24">Code</span>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="font-body font-medium text-[14px] text-white hover:underline">
                          GitHub Repo
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-body text-[12px] text-white/60 px-4 py-1 border border-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/projects"
            className="font-body font-medium text-primary bg-white px-8 py-4 rounded-full hover:bg-white/60 transition-colors"
          >
            View all works
          </a>
        </div>
      </div>
    </section>
  );
}
