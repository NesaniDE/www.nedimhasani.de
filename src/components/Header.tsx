import Link from "next/link";

const navItems = [
  { label: "Über mich", href: "#about" },
  { label: "Projekte", href: "#work" },
  { label: "Kontakt", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 backdrop-blur-md bg-background/60 border-b border-white/5">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link
          href="/"
          className="text-[18px] font-medium tracking-[-0.03em] text-white"
        >
          NedimHasani<span className="text-white">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[18px] tracking-[-0.03em] text-[#a0a0a0] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block w-[150px]" />
      </div>
    </header>
  );
}
