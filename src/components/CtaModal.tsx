"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";

export function CtaModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto relative w-full max-w-[640px] rounded-3xl bg-[#0d0d0d]/85 backdrop-blur-xl ring-1 ring-white/10 px-8 py-12 md:px-12 md:py-14 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          aria-label="Schließen"
          className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          type="button"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="text-center">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Kostenloses Erstgespräch
          </p>
          <p className="mt-4 text-[20px] md:text-[24px] leading-[1.32] tracking-[-0.025em] text-white">
            Lassen Sie uns über Ihr Projekt sprechen — unverbindlich, ehrlich
            und in 30 Minuten.
          </p>
          <p className="mt-4 max-w-md mx-auto text-[14px] md:text-[15px] leading-[1.5] tracking-[-0.025em] text-[#a0a0a0]">
            Ob Website, KI-Workflow oder autonomer Agent: Wir hören zu, prüfen
            schnell die Machbarkeit und schicken Ihnen eine klare Einschätzung.
          </p>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="pill-button mt-8 inline-flex"
          >
            Projekt anfragen
          </button>
        </div>
      </div>
    </div>
  );
}
