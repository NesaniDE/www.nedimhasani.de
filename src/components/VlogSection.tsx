import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "DACH", label: "Markt" },
  { value: "Schwäbisch Gmünd", label: "Standort" },
  { value: "Wochen", label: "statt Monaten" },
];

export function VlogSection() {
  return (
    <section
      id="work"
      className="relative px-5 sm:px-6 md:px-10 py-20 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <div className="mb-10 md:mb-14 max-w-[680px]">
            <p className="mb-3 text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
              Aktuell · Building in Public
            </p>
            <h2 className="heading-gradient text-[36px] sm:text-[44px] md:text-[60px] font-medium leading-[1.05] tracking-[-0.06em]">
              Woran ich gerade arbeite.
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] md:leading-[1.55] tracking-[-0.025em] text-[#878787]">
              Mein Fokus liegt aktuell auf Social Media für Unternehmen und
              Unternehmer — Aufbau, Produktion und laufende Betreuung. Alles
              unter dem Dach von Nesani.
            </p>
          </div>
        </Reveal>

        {/* Nesani — Hauptprojekt */}
        <Reveal delay={80}>
          <a
            href="https://www.nesani.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.02] ring-1 ring-white/15 p-6 sm:p-8 md:p-12 lg:p-14 mb-10 md:mb-16 transition-all duration-300 hover:ring-white/30 hover:from-white/[0.09] hover:via-white/[0.05]"
          >
            {/* Subtle radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl transition-opacity duration-300 group-hover:bg-white/15"
            />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-end">
              <div className="flex-1 max-w-[640px]">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 md:mb-6">
                  <span className="inline-flex items-center rounded-full bg-white text-[#010101] px-3 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em]">
                    Hauptprojekt
                  </span>
                  <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0]">
                    Studio · Aktiv
                  </span>
                </div>

                <h3 className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[0.95] tracking-[-0.06em] text-white mb-5 md:mb-6">
                  Nesani
                </h3>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.025em] text-white/85 mb-3 md:mb-4">
                  Das Studio hinter allem hier.
                </p>

                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] tracking-[-0.02em] text-[#a0a0a0]">
                  Nesani arbeitet in drei Bereichen: Social Media, Websites
                  sowie KI und Automatisierung. Mein persönlicher Schwerpunkt
                  liegt dabei auf Social Media — Personal Branding für
                  Unternehmer und Content für Unternehmensmarken, von der
                  Strategie bis zur laufenden Betreuung.
                </p>

                <span className="mt-7 md:mt-8 inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-white/85 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-[0.2em]">
                    Zur Website
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 lg:min-w-[280px] pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 mt-2 lg:mt-0 -mx-1 sm:mx-0">
                {stats.map((s) => (
                  <div key={s.label} className="px-1 pt-4 lg:pt-0">
                    <div className="text-[14px] sm:text-[18px] md:text-[20px] font-medium tracking-[-0.025em] text-white leading-tight">
                      {s.value}
                    </div>
                    <div className="mt-1 sm:mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#878787]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </Reveal>

      </div>
    </section>
  );
}
