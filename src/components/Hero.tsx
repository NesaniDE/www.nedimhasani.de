import { ArrowRightIcon, NesaniLogoMark } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="start"
      className="relative h-screen min-h-[680px] overflow-hidden flex items-center"
    >
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />

      {/* Massive bg word */}
      <h1 className="bg-name absolute -bottom-6 left-0 right-0 text-[15vw] md:text-[18vw] lg:text-[230px] leading-[0.85] text-center select-none pointer-events-none z-0 px-4">
        NESANI
      </h1>

      {/* Floating cube logo right */}
      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 hidden md:block z-0 opacity-90">
        <NesaniLogoMark className="h-[260px] w-[260px] lg:h-[340px] lg:w-[340px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="max-w-[820px]">
          <p className="mb-6 text-[13px] md:text-[14px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Aus Schwäbisch Gmünd · Für den DACH-Raum
          </p>
          <h2 className="text-[14vw] sm:text-[80px] md:text-[110px] lg:text-[130px] font-medium leading-[0.95] tracking-[-0.05em] text-white">
            <span className="block">Sichtbarer.</span>
            <span className="block text-[#878787]">Effizienter.</span>
            <span className="block">Autonomer.</span>
          </h2>
          <p className="mt-8 max-w-[560px] text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.025em] text-[#878787]">
            Nesani entwickelt digitale Präsenz, KI-Integration und autonome
            Systeme für Unternehmen mit Anspruch.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="pill-button inline-flex items-center gap-2"
            >
              Projekt anfragen
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] text-white hover:bg-white/5 transition-colors"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010101] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
