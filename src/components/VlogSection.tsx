import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

type SubProject = {
  status: "Live" | "Beta" | "In Arbeit";
  category: string;
  title: string;
  description: string;
  href: string;
};

const subProjects: SubProject[] = [
  {
    status: "Beta",
    category: "Lokal · SaaS",
    title: "GD-Listen",
    description:
      "Kuratierte Top-10-Listen für Schwäbisch Gmünd — der erste Guide, den Einheimische wirklich nutzen. Restaurants, Cafés, Wochenend-Spots, ehrlich gerankt und laufend aktualisiert.",
    href: "https://gd-listen-two.vercel.app",
  },
  {
    status: "In Arbeit",
    category: "Marktplatz · KI",
    title: "BEM-Marktplatz",
    description:
      "Ein Marktplatz, auf dem KI-Agenten echte Menschen für reale Aufgaben beauftragen. Mit eigenem MCP-Server, sodass Agenten Aufträge posten, tracken und auszahlen können.",
    href: "https://bem-marktplatz-theta.vercel.app",
  },
  {
    status: "In Arbeit",
    category: "Produkt · KI",
    title: "Nesani Editor",
    description:
      "KI-gestützte Websitepflege. Kunden ändern ihre Website per Chat, sehen eine Live-Vorschau und veröffentlichen erst nach Freigabe. Next.js 16 + Supabase im Hintergrund.",
    href: "https://nesani-editor.vercel.app",
  },
];

const statusColor: Record<SubProject["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  Beta: "bg-amber-400/15 text-amber-200 ring-amber-400/30",
  "In Arbeit": "bg-sky-400/15 text-sky-200 ring-sky-400/30",
};

const stats = [
  { value: "DACH", label: "Markt" },
  { value: "Schwäbisch Gmünd", label: "Standort" },
  { value: "Wochen", label: "statt Monaten" },
];

export function VlogSection() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <div className="mb-14 max-w-[680px]">
            <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
              Aktuell · Building in Public
            </p>
            <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1.05] tracking-[-0.06em]">
              Woran ich gerade arbeite.
            </h2>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
              Mein Fokus liegt aktuell voll auf Nesani — und den Produkten,
              die wir unter diesem Dach aufbauen.
            </p>
          </div>
        </Reveal>

        {/* Nesani — Hauptprojekt */}
        <Reveal delay={80}>
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.02] ring-1 ring-white/15 p-8 md:p-12 lg:p-14 mb-12 md:mb-16">
            {/* Subtle radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-end">
              <div className="flex-1 max-w-[640px]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center rounded-full bg-white text-[#010101] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]">
                    Hauptprojekt
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0]">
                    Studio · Aktiv
                  </span>
                </div>

                <h3 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[0.95] tracking-[-0.06em] text-white mb-6">
                  Nesani
                </h3>

                <p className="text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.025em] text-white/85 mb-4">
                  Das Studio hinter allem hier.
                </p>

                <p className="text-[15px] md:text-[16px] leading-[1.65] tracking-[-0.02em] text-[#a0a0a0]">
                  Mit Nesani baue ich digitale Strukturen, KI-Integration und
                  autonome Systeme für ambitionierte Unternehmen im DACH-Raum.
                  Vom ersten Workshop bis zum Launch in Wochen — fokussiert auf
                  das, was wirklich wirkt. Alle Produkte unten entstehen unter
                  diesem Dach.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-[14px] text-white/80">
                  <span className="h-px w-8 bg-white/30" />
                  <span className="uppercase tracking-[0.2em]">
                    Mehr in Kürze
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 lg:gap-10 lg:min-w-[280px]">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[18px] md:text-[20px] font-medium tracking-[-0.025em] text-white">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-[#878787]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* Subline */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-white/10" />
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
              Unter dem Dach von Nesani
            </p>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        {/* Sub-projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {subProjects.map((p, i) => (
            <Reveal key={p.title} delay={80 + i * 80}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-7 transition-all duration-300 hover:bg-white/[0.04] hover:ring-white/25 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ${statusColor[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0] mb-3">
                  {p.category}
                </p>
                <h4 className="text-[24px] md:text-[26px] font-medium leading-[1.05] tracking-[-0.04em] text-white">
                  {p.title}
                </h4>
                <p className="mt-4 text-[14.5px] leading-[1.6] tracking-[-0.02em] text-[#878787]">
                  {p.description}
                </p>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white/80 group-hover:text-white transition-colors">
                  Zur Seite
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
