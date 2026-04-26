import {
  BoltIcon,
  ChatBubbleIcon,
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  ShareIcon,
} from "@/components/icons";

const services = [
  {
    Icon: GlobeIcon,
    title: "Websites",
    desc: "Moderne, schnell ladende Websites — technisch sauber, auf Conversion ausgerichtet und bereit für SEO.",
  },
  {
    Icon: BoltIcon,
    title: "KI Workflows",
    desc: "Wiederkehrende Prozesse in automatisierte Abläufe überführen. Weniger Fleißarbeit, mehr Kapazität fürs Kerngeschäft.",
  },
  {
    Icon: CpuIcon,
    title: "Autonome Agenten",
    desc: "Systeme, die selbstständig handeln: beobachten, entscheiden, ausführen. Aus klaren Zielen werden messbare Resultate.",
  },
  {
    Icon: ShareIcon,
    title: "Social Media & Online-Präsenz",
    desc: "Konsistente Markenpräsenz über Kanäle hinweg — mit Inhalten, die ziehen, statt nur sichtbar zu sein.",
  },
  {
    Icon: ChatBubbleIcon,
    title: "KI-Assistenten & Chatbots",
    desc: "Eigene Assistenten und Chatbots, die Routineanfragen übernehmen, 24/7 antworten und Ihr Team entlasten.",
  },
  {
    Icon: LayersIcon,
    title: "Individuelle Systemarchitektur",
    desc: "Maßgeschneiderte Softwarelösungen mit klarer Architektur — dokumentiert, wartbar und gebaut, um zu skalieren.",
  },
];

const steps = [
  { n: "01", title: "Analyse & Audit", desc: "Wir analysieren bestehende Prozesse und identifizieren die größten Potenziale für Automatisierung und Sichtbarkeit." },
  { n: "02", title: "Strategie", desc: "Klare Roadmap mit messbaren Zielen — priorisiert nach Wirkung und Umsetzbarkeit." },
  { n: "03", title: "Prototyping", desc: "In einem kurzen Sprint entsteht ein funktionsfähiger Prototyp, den Sie direkt testen können." },
  { n: "04", title: "Umsetzung", desc: "Wir bauen die finale Lösung — sauber integriert, skalierbar und auf Ihre Systeme abgestimmt." },
  { n: "05", title: "Wachstum", desc: "Nach dem Launch optimieren wir kontinuierlich auf Basis echter Daten und skalieren, wo es wirkt." },
];

export function AboutSection() {
  return (
    <>
      <section id="leistungen" className="relative px-6 md:px-10 pt-28 md:pt-36 pb-20 border-t border-white/5">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex items-end justify-between gap-6 mb-14">
            <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em]">
              Leistungen
            </h2>
            <a href="#contact" className="hidden sm:inline-block text-[15px] text-[#a0a0a0] hover:text-white transition-colors underline-offset-4 hover:underline">
              Leistungen ansehen
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-7 transition-all hover:bg-white/[0.04] hover:ring-white/20"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-medium leading-tight tracking-[-0.025em] text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] tracking-[-0.02em] text-[#878787]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projekte" className="relative px-6 md:px-10 py-24 md:py-28 border-t border-white/5">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Vorgehen
          </p>
          <h2 className="heading-gradient text-[40px] md:text-[56px] font-medium leading-[1.05] tracking-[-0.05em] mb-14 max-w-[680px]">
            In 5 Schritten zur Lösung
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-6"
              >
                <div className="text-[12px] uppercase tracking-[0.24em] text-[#878787]">
                  Schritt {s.n}
                </div>
                <div className="mt-4 text-[18px] font-medium tracking-[-0.025em] text-white">
                  {s.title}
                </div>
                <p className="mt-3 text-[14px] leading-[1.55] tracking-[-0.02em] text-[#878787]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="max-w-[520px]">
            <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-8">
              Ihr Business auf die nächste Stufe bringen
            </h2>
            <p className="text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
              Wir sind Nesani — ein kleines, fokussiertes Team aus Schwäbisch
              Gmünd, das digitale Strukturen für moderne Unternehmen baut. Aus
              Strategie, Engineering und KI machen wir Lösungen, die online
              wirken und im Hintergrund mitarbeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5 self-end">
            {[
              { title: "Digital skalierbar", desc: "Lösungen, die online sichtbar sind und mit Ihrem Business mitwachsen — ohne technisches Ballast." },
              { title: "Persönliche Begleitung", desc: "Sie bekommen einen festen Ansprechpartner, der Ihre Ziele versteht und Sie durch jeden Schritt begleitet." },
              { title: "Schnell umgesetzt", desc: "Vom ersten Gespräch bis zur Livestellung in Wochen statt Monaten — fokussiert auf das, was wirklich wirkt." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-6">
                <h3 className="text-[18px] font-medium tracking-[-0.025em] text-white">{b.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.55] tracking-[-0.02em] text-[#878787]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
