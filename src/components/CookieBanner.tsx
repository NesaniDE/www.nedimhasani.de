"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nh-cookie-consent";

type Choice = "all" | "necessary";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
    } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[420px] z-[80] animate-cookie-in"
    >
      <div className="rounded-2xl bg-[#0d0d0d]/90 backdrop-blur-xl ring-1 ring-white/10 p-6 shadow-2xl">
        <p className="text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
          Cookies
        </p>
        <p className="mt-3 text-[15px] leading-[1.55] tracking-[-0.02em] text-white">
          Diese Seite nutzt nur das Nötigste.
        </p>
        <p className="mt-2 text-[13px] leading-[1.55] tracking-[-0.02em] text-[#878787]">
          Technisch notwendige Cookies sind immer aktiv. Optionale Cookies
          helfen mir, die Seite zu verbessern. Mehr im{" "}
          <Link
            href="/imprint"
            className="text-white hover:underline underline-offset-4"
          >
            Impressum
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => decide("all")}
            className="pill-button flex-1 text-center"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => decide("necessary")}
            className="flex-1 rounded-full border border-white/20 px-5 py-3 text-[14px] text-white hover:bg-white/5 transition-colors"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
