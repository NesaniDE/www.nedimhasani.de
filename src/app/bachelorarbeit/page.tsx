import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpIcon } from "@/components/icons";
import { Footer } from "@/components/Footer";
import {
  thesisMeta,
  workPackages,
  sourceBlocks,
  sourceStatusSummary,
  formattedLastUpdate,
} from "@/lib/bachelorarbeit";

export const metadata: Metadata = {
  title: "Bachelorarbeit — Stand & Quellen",
  description:
    "Interner Statusbericht zur Bachelorarbeit von Nedim Hasani an der Universität Stuttgart / VISUS. Nur für den Erst- und Zweitprüfer einsehbar.",
  alternates: { canonical: "https://www.nedimhasani.de/bachelorarbeit" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const overallProgress = Math.round(
  workPackages.reduce((sum, wp) => sum + wp.progress * wp.weight, 0) /
    workPackages.reduce((sum, wp) => sum + wp.weight, 0),
);

const startDate = new Date(thesisMeta.startISO);
const submissionDate = new Date(thesisMeta.submissionISO);
const today = new Date(thesisMeta.snapshotISO);
const daysElapsed = Math.max(
  0,
  Math.round((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)),
);
const daysRemaining = Math.max(
  0,
  Math.round(
    (submissionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  ),
);
const totalDays = Math.round(
  (submissionDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
);
const timeProgress = Math.min(
  100,
  Math.max(0, Math.round((daysElapsed / totalDays) * 100)),
);

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const statusLabel: Record<"done" | "active" | "todo", string> = {
  done: "Abgeschlossen",
  active: "Laufend",
  todo: "Ausstehend",
};

const statusDot: Record<"done" | "active" | "todo", string> = {
  done: "bg-emerald-400",
  active: "bg-amber-300",
  todo: "bg-white/25",
};

export default function BachelorarbeitPage() {
  return (
    <>
      <main className="relative min-h-screen pt-16 md:pt-20 pb-20 md:pb-24 px-5 sm:px-6 md:px-10">
        <div className="bg-radial-glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]" />

        <div className="relative mx-auto w-full max-w-[980px]">
          <div className="mb-10 md:mb-14 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] text-[#a0a0a0] hover:text-white transition-colors"
            >
              <ArrowUpIcon className="h-4 w-4 -rotate-90" />
              nedimhasani.de
            </Link>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#a0a0a0]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Vertraulich · Nur per Direktlink
            </span>
          </div>

          <header className="mb-16 md:mb-24">
            <p className="mb-4 text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
              Universität Stuttgart · Visualization Research Center (VISUS)
            </p>
            <h1 className="heading-gradient text-[36px] sm:text-[48px] md:text-[64px] font-medium leading-[1.02] tracking-[-0.05em] mb-6">
              {thesisMeta.titleDe}
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.02em] text-[#878787] max-w-[720px] mb-10">
              {thesisMeta.titleEn}
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
              <MetaItem label="Erstprüfer" value={thesisMeta.examiner} />
              <MetaItem label="Betreuer" value={thesisMeta.supervisor} />
              <MetaItem label="Bearbeiter" value={thesisMeta.examinee} />
              <MetaItem label="Letzte Aktualisierung" value={formattedLastUpdate} />
            </dl>
          </header>

          <section className="mb-16 md:mb-24">
            <SectionHeading
              kicker="01 · Überblick"
              title="Stand der Arbeit"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
              <ProgressCard
                label="Gesamtfortschritt"
                value={overallProgress}
                hint="Gewichtet über alle Work Packages"
              />
              <ProgressCard
                label="Bearbeitungszeit"
                value={timeProgress}
                hint={`${daysElapsed} von ${totalDays} Tagen · noch ${daysRemaining} Tage`}
              />
              <ProgressCard
                label="Literatur"
                value={Math.round(
                  (sourceStatusSummary.available /
                    sourceStatusSummary.total) *
                    100,
                )}
                hint={`${sourceStatusSummary.available} von ${sourceStatusSummary.total} Quellen gesichtet`}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 text-[14px] tracking-[-0.02em] text-[#878787]">
              <Pill label="Beginn" value={dateFormatter.format(startDate)} />
              <Pill label="Heute" value={dateFormatter.format(today)} />
              <Pill
                label="Abgabe (geplant)"
                value={dateFormatter.format(submissionDate)}
              />
            </div>
          </section>

          <section className="mb-16 md:mb-24">
            <SectionHeading
              kicker="02 · Manuskript"
              title="Aktuelle Vorschau"
              meta={`Stand · ${formattedLastUpdate}`}
            />
            <p className="mb-6 max-w-[760px] text-[15px] sm:text-[16px] leading-[1.65] tracking-[-0.02em] text-[#878787]">
              Aktueller Auszug aus dem LaTeX-Manuskript (Deckblatt, Kurzfassung,
              geplante Gliederung). Die Datei wird manuell aktualisiert, sobald
              neue Kapitel reinkommen.
            </p>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <a
                href="/bachelorarbeit/thesis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#010101] px-5 py-2.5 text-[14px] font-medium tracking-[-0.02em] hover:bg-white/90 transition-colors"
              >
                In neuem Tab öffnen
              </a>
              <a
                href="/bachelorarbeit/thesis.pdf"
                download="Bachelorarbeit_Hasani_SemanticVR.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] text-white px-5 py-2.5 text-[14px] tracking-[-0.02em] hover:bg-white/[0.06] transition-colors"
              >
                PDF herunterladen
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <iframe
                src="/bachelorarbeit/thesis.pdf#view=FitH&toolbar=1"
                title="Bachelorarbeit – aktueller Manuskript-Stand"
                className="block w-full bg-[#1a1a1a]"
                style={{ height: "min(90vh, 1100px)" }}
              />
            </div>
            <p className="mt-3 text-[12px] tracking-[-0.015em] text-[#666]">
              Hinweis: Manche Browser zeigen PDFs nicht inline an — in dem Fall
              bitte auf „In neuem Tab öffnen“ klicken.
            </p>
          </section>

          <section className="mb-16 md:mb-24">
            <SectionHeading
              kicker="03 · Kontext"
              title="Zielsetzung"
            />
            <div className="space-y-5 md:space-y-6 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.65] tracking-[-0.02em] text-[#878787] max-w-[760px]">
              <p>
                Die Analyse menschlicher Interaktion in XR-Systemen — Bewegungen,
                Touch-Eingaben, Gesten, Sprachbefehle — ist zentral für HCI-Studien
                und situierte Analyse. Die Datensätze sind groß, der relevante
                Kontext riesig (Umgebung, andere Personen, digitale Artefakte).
              </p>
              <p>
                Diese Arbeit untersucht, wie sich situierte Analyse durch
                Modellierung der räumlichen und semantischen Relationen virtueller
                Szenen unterstützen lässt. Dazu entstehen Unity-Komponenten, die
                den Szenengraphen (halb-)automatisch semantisch annotieren, sowie
                eine Server-Anwendung, die diesen{" "}
                <span className="text-white">Semantic Scene Graph</span> verwaltet
                und über einen LLM (z. B. GPT&nbsp;5.2) interpretierbar macht —
                integriert in das bestehende{" "}
                <span className="text-white">MIRIA</span>-Toolkit.
              </p>
            </div>
          </section>

          <section className="mb-16 md:mb-24">
            <SectionHeading
              kicker="04 · Arbeitspakete"
              title="Work Packages"
            />
            <ul className="space-y-3 md:space-y-4">
              {workPackages.map((wp) => (
                <li
                  key={wp.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.035] transition-colors px-5 sm:px-6 md:px-7 py-5 md:py-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[12px] tabular-nums text-[#666] tracking-[0.04em]">
                        WP{wp.id.toString().padStart(2, "0")}
                      </span>
                      <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-medium tracking-[-0.025em] text-white">
                        {wp.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-[#a0a0a0]`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${statusDot[wp.status]}`}
                        />
                        {statusLabel[wp.status]}
                      </span>
                      <span className="text-[14px] sm:text-[15px] tabular-nums text-white">
                        {wp.progress}%
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-white/80"
                      style={{ width: `${wp.progress}%` }}
                    />
                  </div>

                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] tracking-[-0.02em] text-[#878787]">
                    {wp.description}
                  </p>
                  {wp.note && (
                    <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.55] tracking-[-0.015em] text-[#a0a0a0]">
                      <span className="text-white/80">Aktuell:</span> {wp.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16 md:mb-24">
            <SectionHeading
              kicker="05 · Literatur"
              title="Quellenpaket"
              meta={`${sourceStatusSummary.available} / ${sourceStatusSummary.total} verfügbar`}
            />
            <p className="mb-10 max-w-[760px] text-[15px] sm:text-[16px] leading-[1.65] tracking-[-0.02em] text-[#878787]">
              {sourceStatusSummary.total} Quellen, gegliedert in sechs Blöcke
              entlang der inhaltlichen Achsen der Arbeit. „Vorhanden“ bedeutet
              PDF/JSON gesichert; „Zu besorgen“ steht noch aus. Die Cite-Keys
              entsprechen 1:1 den Einträgen in{" "}
              <code className="text-[13px] text-white/80 bg-white/[0.06] rounded px-1.5 py-0.5">
                thesis/bibliography.bib
              </code>
              .
            </p>

            <div className="space-y-10 md:space-y-12">
              {sourceBlocks.map((block) => (
                <div key={block.id}>
                  <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                    <h3 className="text-[18px] sm:text-[20px] font-medium tracking-[-0.025em] text-white">
                      <span className="text-[#666] mr-3 tabular-nums">
                        {block.id}
                      </span>
                      {block.title}
                    </h3>
                    <span className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0] tabular-nums">
                      {block.sources.filter((s) => s.available).length} /{" "}
                      {block.sources.length}
                    </span>
                  </div>

                  <ol className="space-y-3 md:space-y-4">
                    {block.sources.map((source) => (
                      <li
                        key={source.ref}
                        className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.03] transition-colors px-4 sm:px-5 py-4"
                      >
                        <span className="text-[12px] tabular-nums text-[#666] pt-0.5">
                          [{source.ref}]
                        </span>
                        <div className="min-w-0">
                          <p className="text-[14px] sm:text-[15px] leading-[1.5] tracking-[-0.02em] text-white">
                            {source.title}
                          </p>
                          <p className="mt-1 text-[12px] sm:text-[13px] leading-[1.5] tracking-[-0.015em] text-[#878787]">
                            {source.authors} · {source.venue} ({source.year})
                          </p>
                          <p className="mt-1.5 font-mono text-[11.5px] sm:text-[12px] tracking-[-0.01em] text-emerald-300/80">
                            \cite{`{${source.citeKey}}`}
                          </p>
                          {(source.doi || source.url) && (
                            <a
                              href={
                                source.doi
                                  ? `https://doi.org/${source.doi}`
                                  : source.url
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1.5 inline-block text-[12px] tracking-[-0.01em] text-[#a0a0a0] hover:text-white transition-colors break-all"
                            >
                              {source.doi
                                ? `doi.org/${source.doi}`
                                : source.url}
                            </a>
                          )}
                        </div>
                        <span
                          className={`inline-flex h-fit items-center gap-1.5 self-start whitespace-nowrap rounded-full border px-2.5 py-1 text-[10.5px] uppercase tracking-[0.18em] ${
                            source.available
                              ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300/90"
                              : "border-white/10 bg-white/[0.02] text-[#878787]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              source.available
                                ? "bg-emerald-400"
                                : "bg-white/30"
                            }`}
                          />
                          {source.available ? "Vorhanden" : "Zu besorgen"}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <SectionHeading
              kicker="06 · Kontakt"
              title="Bei Rückfragen"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <ContactCard
                label="Bearbeiter"
                name="Nedim Hasani"
                lines={[
                  {
                    text: "mail@nedimhasani.de",
                    href: "mailto:mail@nedimhasani.de",
                  },
                  { text: "nedimhasani.de" },
                ]}
              />
              <ContactCard
                label="Betreuer"
                name="Dr. Wolfgang Büschel"
                lines={[
                  {
                    text: "wolfgang.bueschel@visus.uni-stuttgart.de",
                    href: "mailto:wolfgang.bueschel@visus.uni-stuttgart.de",
                  },
                  { text: "VISUS, Universität Stuttgart" },
                ]}
              />
            </div>
            <p className="mt-8 text-[12px] uppercase tracking-[0.22em] text-[#666]">
              Diese Seite ist nicht im Index. Stand vom{" "}
              {dateFormatter.format(today)}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({
  kicker,
  title,
  meta,
}: {
  kicker: string;
  title: string;
  meta?: string;
}) {
  return (
    <div className="mb-8 md:mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <div>
        <p className="mb-2 text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
          {kicker}
        </p>
        <h2 className="heading-gradient text-[28px] sm:text-[34px] md:text-[40px] font-medium leading-[1.05] tracking-[-0.04em]">
          {title}
        </h2>
      </div>
      {meta && (
        <span className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0] tabular-nums">
          {meta}
        </span>
      )}
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-[#a0a0a0]">
        {label}
      </dt>
      <dd className="text-[15px] sm:text-[16px] tracking-[-0.02em] text-white">
        {value}
      </dd>
    </div>
  );
}

function ProgressCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: number;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 sm:px-6 py-6">
      <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#a0a0a0]">
        {label}
      </p>
      <p className="mb-4 text-[40px] sm:text-[44px] font-medium leading-none tracking-[-0.04em] text-white tabular-nums">
        {value}
        <span className="ml-1 text-[20px] sm:text-[22px] text-[#878787] font-normal">
          %
        </span>
      </p>
      <div className="mb-3 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-white"
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="text-[13px] tracking-[-0.015em] text-[#878787]">{hint}</p>
    </div>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[#a0a0a0] mb-1">
        {label}
      </p>
      <p className="text-[15px] tracking-[-0.02em] text-white">{value}</p>
    </div>
  );
}

function ContactCard({
  label,
  name,
  lines,
}: {
  label: string;
  name: string;
  lines: { text: string; href?: string }[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 sm:px-6 py-6">
      <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#a0a0a0]">
        {label}
      </p>
      <p className="mb-3 text-[18px] tracking-[-0.025em] text-white">{name}</p>
      <ul className="space-y-1.5 text-[14px] tracking-[-0.02em] text-[#878787]">
        {lines.map((line) =>
          line.href ? (
            <li key={line.text}>
              <a
                href={line.href}
                className="hover:text-white transition-colors break-all"
              >
                {line.text}
              </a>
            </li>
          ) : (
            <li key={line.text}>{line.text}</li>
          ),
        )}
      </ul>
    </div>
  );
}
