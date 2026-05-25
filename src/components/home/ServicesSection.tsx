import StaggeredTitle from "../shared/StaggeredTitle";
import MarqueeTicker from "../shared/MarqueeTicker";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Software Development",
    description: "Building scalable frontend and backend architectures with premium code quality.",
    imageSrc: "/Software Development.png",
    imageAlt: "3D software development illustration with holographic code interfaces"
  },
  {
    id: "02",
    title: "Quality Assurance",
    description: "Automated testing pipelines and rigorous security scanning for flawless deployment.",
    imageSrc: "/Quality Assurance.png",
    imageAlt: "3D quality assurance illustration with a security shield and test diagnostics"
  },
  {
    id: "03",
    title: "Search Engine Optimization",
    description: "Data-driven organic growth strategies to scale your global search visibility.",
    imageSrc: "/Seo.png",
    imageAlt: "3D SEO illustration with global traffic analytics and search bar"
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-32 bg-primary overflow-hidden">
      <div className="mx-auto max-w-360 px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-10">
          <StaggeredTitle text="My Core Services" as="h2" className="text-[clamp(40px,5vw,72px)]" />
        </div>

        {/* Marquee Band */}
        <div className="mb-16 -mx-6 md:-mx-10 lg:-mx-16 w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
          <MarqueeTicker
            items={["Development", "Content Collaboration", "SEO", "Quality Assurance"]}
            duration={30}
            separator="·"
            itemClassName="text-[14px] md:text-[16px] text-white/60"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
           {services.map((service) => (
             <div
               key={service.id}
               className="bg-card border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between group hover:border-[#222] transition-colors h-[100vh]"
             >
              <div className="flex flex-col items-start mb-10">
                <span className="font-body text-[12px] uppercase text-accent mb-4">
                  {service.id}
                </span>
                <h3 className="font-display font-bold text-[clamp(24px,2.5vw,32px)] text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-[14px] text-white/60 leading-relaxed max-w-[400px]">
                  {service.description}
                </p>
              </div>

              {/* Illustration Placeholder (Right/Bottom) */}
              {/* 3D Illustration Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-transparent">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
