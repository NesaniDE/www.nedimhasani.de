import Link from "next/link";
import { NesaniLogoMark } from "@/components/icons";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über uns", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 backdrop-blur-md bg-background/60 border-b border-white/5">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <NesaniLogoMark className="h-9 w-9" />
          <span className="text-[16px] md:text-[18px] font-medium tracking-[0.18em] text-white">
            NESANI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] tracking-[-0.02em] text-[#a0a0a0] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="pill-button text-[15px] py-3 px-5">
          Projekt anfragen
        </a>
      </div>
    </header>
  );
}
