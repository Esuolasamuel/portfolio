import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/esuola-samuel-73b380285/https://www.linkedin.com/in/esuola-samuel-73b380285/" },
  { name: "GitHub", href: "https://github.com/Esuolasamuel" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-16 px-6 md:px-10 lg:px-16 mx-auto max-w-[1440px]">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Navigation Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-body uppercase text-[12px] text-white/60 tracking-wider">
            Navigation
          </h3>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-body text-white/60 hover:text-white transition-colors duration-fast w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-body uppercase text-[12px] text-white/60 tracking-wider">
            Socials
          </h3>
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-white/60 hover:text-white transition-colors duration-fast w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-white/10 gap-4">
        <p className="font-body text-[12px] text-white/40">
          Copyright &copy; 2026.
        </p>
        <p className="font-body text-[12px] text-white/40">
          Made with love by samueldev.
        </p>
      </div>
    </footer>
  );
}
