"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";

export function CtaModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 pointer-events-none">
      <div
        className="pointer-events-auto relative w-full max-w-[640px] rounded-3xl bg-[#0d0d0d]/85 backdrop-blur-xl ring-1 ring-white/10 px-8 py-12 md:px-12 md:py-14 shadow-2xl"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          type="button"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="text-center">
          <p className="text-[18px] md:text-[22px] leading-[1.32] tracking-[-0.025em] text-white">
            Hi, I&rsquo;m Alvaro Gellings, and together with Germany&rsquo;s
            largest Influencers, we are building a school in Guatemala.
          </p>
          <p className="mt-5 max-w-md mx-auto text-[14px] md:text-[15px] leading-[1.5] tracking-[-0.025em] text-[#a0a0a0]">
            If you want to join our venture to ensure that all students have
            access to a safe and healthy place to learn, get in touch with me.
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
            Join the venture
          </button>
        </div>
      </div>
    </div>
  );
}
