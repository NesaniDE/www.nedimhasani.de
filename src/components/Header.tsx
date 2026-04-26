"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

const navItems = [
  { label: "Über mich", href: "#about" },
  { label: "Projekte", href: "#work" },
  { label: "Kontakt", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close drawer on escape and when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-6 md:px-10 py-4 md:py-5 backdrop-blur-md bg-background/60 border-b border-white/5">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
          <Link
            href="https://www.nedimhasani.de"
            className="text-[16px] sm:text-[18px] font-medium tracking-[-0.03em] text-white"
          >
            NedimHasani<span className="text-white">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] lg:text-[18px] tracking-[-0.03em] text-[#a0a0a0] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block w-[150px]" />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            className="md:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 transition-colors"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 bottom-0 w-[82%] max-w-[360px] bg-[#0a0a0a] border-l border-white/10 px-7 pt-6 pb-10 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Hauptmenü"
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-[16px] font-medium tracking-[-0.03em] text-white">
              NedimHasani<span className="text-white">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 transition-colors"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-[22px] font-medium tracking-[-0.03em] text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0] mb-3">
              Kontakt
            </p>
            <a
              href="mailto:info@nedimhasani.de"
              className="text-[16px] tracking-[-0.025em] text-white hover:underline"
            >
              info@nedimhasani.de
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
