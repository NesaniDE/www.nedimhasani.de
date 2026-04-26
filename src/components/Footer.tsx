"use client";

import Link from "next/link";
import { ArrowUpIcon, NesaniLogoMark } from "@/components/icons";

const cols = [
  {
    title: "Leistungen",
    links: [
      { label: "Websites", href: "#leistungen" },
      { label: "KI Workflows", href: "#leistungen" },
      { label: "Autonome Agenten", href: "#leistungen" },
      { label: "Social Media & Online Präsenz", href: "#leistungen" },
      { label: "KI Assistenten", href: "#leistungen" },
      { label: "Individuelle Systeme", href: "#leistungen" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#about" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Projekte", href: "#projekte" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Projekt anfragen", href: "#contact" },
      { label: "hello@nesani.de", href: "mailto:hello@nesani.de" },
      { label: "Impressum", href: "#impressum" },
      { label: "Datenschutz", href: "#datenschutz" },
    ],
  },
];

export function Footer() {
  const scrollTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 px-6 md:px-10 pt-16 pb-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <NesaniLogoMark className="h-9 w-9" />
              <span className="text-[16px] font-medium tracking-[0.18em] text-white">
                NESANI
              </span>
            </Link>
            <p className="mt-5 text-[14px] leading-[1.55] tracking-[-0.02em] text-[#878787] max-w-[260px]">
              Digitale Strukturen für moderne Unternehmen — aus Schwäbisch
              Gmünd, für den DACH-Raum.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] uppercase tracking-[0.24em] text-[#a0a0a0] mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[15px] tracking-[-0.02em] text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-[13px] tracking-[-0.02em] text-[#878787]">
            © 2026 Nesani. Alle Rechte vorbehalten.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Nach oben"
            className="inline-flex items-center gap-2 text-[13px] text-[#a0a0a0] hover:text-white transition-colors"
            type="button"
          >
            Nach oben
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
