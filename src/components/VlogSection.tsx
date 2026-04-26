import { ArrowUpRightIcon } from "@/components/icons";

const posts = [
  {
    category: "Websites",
    date: "26. April 2026",
    title:
      "Wie Unternehmen mit einer starken Leistungsseite bessere Leads statt nur mehr Klicks bekommen",
    excerpt:
      "Mehr Traffic allein löst selten ein Vertriebsproblem. Entscheidender ist, ob eine Leistungsseite echte Relevanz aufbaut, Einwände beantwortet und den nächsten Schritt vorbereitet.",
  },
  {
    category: "KI & Automatisierung",
    date: "25. April 2026",
    title:
      "KI im Vertrieb: Welche Aufgaben sinnvoll unterstützt werden können",
    excerpt:
      "KI ist im Vertrieb vor allem dort sinnvoll, wo Vorbereitung, Struktur und Geschwindigkeit zählen. Gute Systeme entlasten, ohne den Beziehungsaufbau zu mechanisieren.",
  },
  {
    category: "Prozesse",
    date: "24. April 2026",
    title:
      "Warum langsame Reaktionszeiten online mehr Umsatz kosten als viele denken",
    excerpt:
      "Viele Unternehmen unterschätzen nicht die Zahl ihrer Anfragen, sondern die verlorene Wirkung zwischen Eingang und Antwort.",
  },
];

export function VlogSection() {
  return (
    <section
      id="blog"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-[640px]">
            <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
              Aus dem Blog
            </p>
            <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em]">
              Praxis statt Hype.
            </h2>
          </div>
          <a
            href="#blog"
            className="self-start sm:self-auto inline-flex items-center gap-2 text-[15px] text-[#a0a0a0] hover:text-white transition-colors"
          >
            Alle Beiträge
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-7 transition-all hover:bg-white/[0.04] hover:ring-white/20"
            >
              <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0]">
                <span>{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#555]" />
                <span>{p.date}</span>
              </div>
              <h3 className="mt-5 text-[19px] md:text-[20px] font-medium leading-[1.25] tracking-[-0.025em] text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.55] tracking-[-0.02em] text-[#878787]">
                {p.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[14px] text-white/80 group-hover:text-white transition-colors">
                Beitrag lesen
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
