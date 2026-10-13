import { Reveal } from "@/components/Reveal";

/**
 * Kurze FAQ zu Nedim Hasani. Beantwortet genau die Fragen, die Google und
 * KI-Assistenten bei Namenssuchen beantworten wollen ("Wer ist Nedim
 * Hasani?"). Sichtbarer Text und FAQPage-Schema kommen aus derselben Liste,
 * damit beides immer übereinstimmt.
 *
 * <details>/<summary> statt Client-State: Die Antworten stehen auch
 * zugeklappt im HTML und bleiben für Crawler lesbar.
 */
export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Wer ist Nedim Hasani?",
    answer:
      "Nedim Hasani ist Gründer und Geschäftsführer der Nesani UG (haftungsbeschränkt) aus Schwäbisch Gmünd. Er hat Informatik an der Universität Stuttgart studiert und positioniert heute Geschäftsführer, Gründer und Unternehmen auf Social Media.",
  },
  {
    question: "Was macht Nesani?",
    answer:
      "Nesani ist eine Digitalagentur aus Schwäbisch Gmünd für Social Media und Personal Branding, Websites sowie KI-Automatisierung. Kunden sind kleine und mittlere Unternehmen sowie Gründer und Geschäftsführer im deutschsprachigen Raum.",
  },
  {
    question: "Wofür ist Nedim Hasani bei Nesani zuständig?",
    answer:
      "Sein Schwerpunkt ist Social Media: Personal Branding für Geschäftsführer und Gründer sowie Content für Unternehmensmarken, von der Positionierung über die Produktion bis zur laufenden Betreuung.",
  },
  {
    question: "Wie erreiche ich Nedim Hasani?",
    answer:
      "Über das Kontaktformular auf dieser Seite, per E-Mail an info@nedimhasani.de oder über ein unverbindliches Erstgespräch auf nesani.de.",
  },
];

export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.nedimhasani.de/#faq",
    inLanguage: "de-DE",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative px-5 sm:px-6 md:px-10 py-20 md:py-32 border-t border-white/5 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <div className="mb-10 md:mb-14 max-w-[680px]">
            <p className="mb-3 text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
              Kurz gefragt
            </p>
            <h2 className="heading-gradient text-[36px] sm:text-[44px] md:text-[60px] font-medium leading-[1.05] tracking-[-0.06em]">
              Häufige Fragen.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="max-w-[860px] border-t border-white/10">
            {FAQS.map((f) => (
              <li key={f.question} className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-[17px] sm:text-[19px] md:text-[22px] leading-[1.3] tracking-[-0.025em] text-white">
                      {f.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-white/20 text-white/80 text-[18px] leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 md:pb-7 -mt-1 max-w-[720px] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] md:leading-[1.55] tracking-[-0.025em] text-[#878787]">
                    {f.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
