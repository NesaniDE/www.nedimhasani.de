"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
          {submitted ? (
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
                className="ag-input mb-[18px]"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail*"
                required
                className="ag-input mb-[18px]"
              />
              <textarea
                name="message"
                placeholder="Worum geht's? Kurz beschreiben.*"
                required
                rows={5}
                className="ag-input mb-6 resize-none"
              />

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
                    einverstanden, dass meine Angaben elektronisch gespeichert
                    werden, um meine Anfrage zu bearbeiten.
                  </span>
                </label>

                <button type="submit" className="pill-button shrink-0">
                  Senden
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
