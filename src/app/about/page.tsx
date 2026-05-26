import Navbar from "@/components/shared/Navbar";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutProfile from "@/components/about/AboutProfile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SamuelDev",
  description: "Learn more about Samuel Okonkwo — Frontend Developer, Content Creator, and Technical Writer based in Lagos, Nigeria.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      <AboutHero />
      <AboutProfile />
      <CTASection />
    </main>
  );
}
