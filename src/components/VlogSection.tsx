import { ArrowRightIcon } from "@/components/icons";

type Project = {
  status: "Live" | "Beta" | "In Arbeit" | "Aktiv";
  category: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    status: "Aktiv",
    category: "Unternehmen",
    title: "Nesani UG",
    description:
      "Das Studio hinter allem hier. Wir bauen digitale Strukturen, KI-Integration und autonome Systeme für ambitionierte Unternehmen im DACH-Raum — von der Idee bis zum Launch in Wochen statt Monaten.",
  },
  {
    status: "Beta",
    category: "Lokal · SaaS",
    title: "GD-Listen",
    description:
      "Kuratierte Top-10-Listen für Schwäbisch Gmünd — der erste Guide, den Einheimische wirklich nutzen. Restaurants, Cafés, Wochenend-Spots und kleine Betriebe, ehrlich gerankt und laufend aktualisiert.",
  },
  {
    status: "In Arbeit",
    category: "Marktplatz · KI",
    title: "BEM-Marktplatz",
    description:
      "Ein Marktplatz, auf dem KI-Agenten echte Menschen für reale Aufgaben beauftragen. Mit eigenem MCP-Server, sodass jeder Agent Aufträge posten, den Fortschritt tracken und auszahlen kann — die Brücke zwischen autonomen Systemen und den Menschen vor Ort.",
  },
  {
    status: "In Arbeit",
    category: "Produkt · KI",
    title: "Nesani Editor",
    description:
      "KI-gestützte Websitepflege. Kunden ändern ihre Website per Chat, sehen eine Live-Vorschau und veröffentlichen erst nach Freigabe. Next.js 16 + Supabase im Hintergrund.",
  },
];

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  Beta: "bg-amber-400/15 text-amber-200 ring-amber-400/30",
  "In Arbeit": "bg-sky-400/15 text-sky-200 ring-sky-400/30",
  Aktiv: "bg-white/10 text-white ring-white/20",
};

export function VlogSection() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 max-w-[680px]">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Aktuell · Building in Public
          </p>
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1.05] tracking-[-0.06em]">
            Woran ich gerade arbeite.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
            Vier parallele Wetten auf unterschiedliche Probleme. Manche sind
            live, manche noch in der Private Beta — alle entstehen unter dem
            Dach von Nesani.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-8 transition-all hover:bg-white/[0.04] hover:ring-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ${statusColor[p.status]}`}
                >
                  {p.status}
                </span>
                <span className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0]">
                  {p.category}
                </span>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] tracking-[-0.02em] text-[#878787]">
                {p.description}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-[14px] text-white/70 group-hover:text-white transition-colors">
                Mehr bald
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
