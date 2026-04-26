"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Versand fehlgeschlagen. Bitte später erneut probieren.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Versand fehlgeschlagen. Bitte später erneut probieren.");
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="max-w-[520px]">
          <Reveal>
            <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-8">
              Lass uns reden!
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <h4 className="text-[20px] md:text-[22px] leading-[1.22] tracking-[-0.025em] text-white mb-8">
              Egal ob Projekt, Frage oder einfach nur Hallo — das Postfach ist
              offen.
            </h4>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-[15px] text-[#a0a0a0]">
              Oder direkt per E-Mail:{" "}
              <a
                href="mailto:info@nedimhasani.de"
                className="text-white hover:underline"
              >
                info@nedimhasani.de
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="w-full max-w-[600px]">
          <form onSubmit={handleSubmit} className="w-full">
            {status === "sent" ? (
              <div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-8">
                <p className="text-white text-lg">
                  Danke für deine Nachricht — ich melde mich zeitnah bei dir.
                </p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  maxLength={200}
                  autoComplete="name"
                  className="ag-input mb-[18px]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail*"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="ag-input mb-[18px]"
                />
                <textarea
                  name="message"
                  placeholder="Worum geht's? Kurz beschreiben.*"
                  required
                  rows={5}
                  maxLength={5000}
                  className="ag-input mb-6 resize-none"
                />
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {error && (
                  <p className="mb-4 text-[13px] text-red-300/90">{error}</p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <label className="flex items-start gap-3 max-w-[440px] cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded-full border border-white/40 bg-transparent appearance-none checked:bg-white checked:border-white cursor-pointer"
                    />
                    <span className="text-[11px] leading-snug tracking-[-0.02em] text-[#878787]">
                      Ich habe die Datenschutzerklärung gelesen und bin
                      einverstanden, dass meine Angaben elektronisch
                      gespeichert werden, um meine Anfrage zu bearbeiten.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="pill-button shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Senden …" : "Senden"}
                  </button>
                </div>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
