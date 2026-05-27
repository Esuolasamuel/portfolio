import Image from "next/image";
import { Mail, MapPin, Clock } from "lucide-react";
import MarqueeTicker from "./MarqueeTicker";
import ContactForm from "./ContactForm";

// ─── Static contact details ──────────────────────────────────────────────────

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "esuolasamuel7@gmail.com",
    href: "mailto:esuolasamuel7@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available worldwide — remote friendly",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Usually within 24 hours",
    href: null,
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dgtc1iood/image/upload/v1767512348/83e9c19591773e06b1fdad216a3f2daeba89a06e_jipcbg.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
        />
        {/* Deep overlay so white text pops */}
        <div className="absolute inset-0 bg-primary opacity-85" />
        {/* Subtle noise texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Marquee Band ── */}
      <div className="relative z-10 w-full pt-20 pb-10 border-b border-white/10">
        <MarqueeTicker
          items={["Let's Work Together"]}
          duration={40}
          separator="—"
          itemClassName="font-display font-bold text-[clamp(60px,8vw,100px)] text-white"
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left: Copy + details ── */}
          <div className="flex flex-col gap-10">
            {/* Eyebrow */}
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </span>

            {/* Heading */}
            <div className="flex flex-col gap-5">
              <h2
                id="cta-heading"
                className="font-display font-bold text-white text-[clamp(36px,5vw,62px)] leading-[1.05] tracking-tight"
              >
                Have a project
                <br />
                in mind?
              </h2>
              <p className="font-body text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-md">
                I collaborate with brands, businesses, and creatives to craft
                digital experiences that stand out. Drop me a line — I read
                every message.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-white/20" aria-hidden="true" />

            {/* Contact details */}
            <ul className="flex flex-col gap-5" aria-label="Contact details">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/40">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-body text-sm text-white/80">
                        {value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Form panel ── */}
          <div
            className={[
              "relative rounded-3xl p-8 md:p-10",
              "bg-white/5 backdrop-blur-sm",
              "border border-white/10",
              // Subtle inner glow
              "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
            ].join(" ")}
          >
            {/* Panel heading */}
            <div className="flex flex-col gap-2 mb-8">
              <h3 className="font-display font-semibold text-white text-xl md:text-2xl">
                Send a message
              </h3>
              <p className="font-body text-sm text-white/40">
                Fill in the form and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Form is a Client Component */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}