import Preloader from "@/components/shared/Preloader";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesSection from "@/components/home/ServicesSection";
import BeyondTheCode from "@/components/home/BeyondTheCode";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      {/* <BeyondTheCode /> */}
      <CTASection />
    </main>
  );
}
