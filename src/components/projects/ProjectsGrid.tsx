"use client";

import { useState } from "react";
import Image from "next/image";
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
  {
    id: "03",
    title: "Sam's Store",
    description: "E-Commerce Fashion and Lifestyle Store",
    liveUrl: "https://mini-e-commerce-app-omega.vercel.app/",
    codeUrl: null,
    stack: ["Next.JS", "Tailwind CSS", "Paystack", "Nodemailer"],
    image: "/Sam'sStore.PNG",
  },
];

const ITEMS_PER_PAGE = 4;

export default function ProjectsGrid() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
  const currentProjects = allProjects.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="w-full py-32 bg-primary">
      <div className="mx-auto max-w-360 px-6 md:px-10 lg:px-16">

        {/* Project Cards */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {currentProjects.map((project, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group",
                  isEven && "lg:[direction:rtl]"
                )}
              >
                {/* Image */}
                <div className={cn(
                  "relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-card border border-white/10",
                  isEven && "[direction:ltr]"
                )}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-slow group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={cn("relative flex flex-col items-start", isEven && "[direction:ltr]")}>
                  {/* Ghost Number */}
                  <span className="absolute -top-10 -left-4 font-display font-bold leading-none text-accent opacity-10 select-none -z-10"
                    style={{ fontSize: "clamp(80px,10vw,140px)" }}>
                    {project.id}
                  </span>

                  <h3 className="font-display font-bold text-[clamp(28px,3vw,40px)] text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="font-body text-[16px] text-white/60 mb-8 max-w-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="font-body font-medium text-[13px] text-white/40 uppercase tracking-wider w-28">
                        Live website
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-[14px] text-accent hover:underline"
                      >
                        {project.liveUrl}
                      </a>
                    </div>
                    {project.codeUrl && (
                      <div className="flex items-center gap-3">
                        <span className="font-body font-medium text-[13px] text-white/40 uppercase tracking-wider w-28">
                          Code
                        </span>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-[14px] text-white hover:underline"
                        >
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-20">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="font-body font-medium text-[14px] text-white px-6 py-3 border border-white/10 rounded-full disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              Previous
            </button>
            <span className="font-body text-[14px] text-white/40">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="font-body font-medium text-[14px] text-white px-6 py-3 border border-white/10 rounded-full disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
