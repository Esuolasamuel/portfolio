import Navbar from "@/components/shared/Navbar";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects | SamuelDev",
  description: "Explore the web development projects built by Samuel Esuola — spanning e-commerce, fintech, healthcare, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-primary">
      <ProjectsHero />
      <ProjectsGrid />
      <CTASection />
    </main>
  );
}
