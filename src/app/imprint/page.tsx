import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpIcon } from "@/components/icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben gemäß § 5 TMG für Nedim Hasani / Nesani UG (haftungsbeschränkt) i.G., Schwäbisch Gmünd.",
  alternates: { canonical: "https://www.nedimhasani.de/imprint" },
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <main className="relative pt-28 md:pt-40 pb-20 md:pb-24 px-5 sm:px-6 md:px-10">
        <div className="mx-auto w-full max-w-[820px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] text-[#a0a0a0] hover:text-white transition-colors mb-10 md:mb-12"
          >
            <ArrowUpIcon className="h-4 w-4 -rotate-90" />
            Zurück zur Startseite
          </Link>

          <p className="mb-3 text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Rechtliches
          </p>
          <h1 className="heading-gradient text-[36px] sm:text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-3">
            Impressum
          </h1>
          <p className="text-[13px] sm:text-[14px] text-[#a0a0a0] mb-10 md:mb-14">
            Stand: April 2026
          </p>

          <div className="space-y-10 md:space-y-12 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] tracking-[-0.02em] text-[#878787]">
            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-white">
                Nesani UG (haftungsbeschränkt) i.G.
                <br />
                Nedim Hasani
                <br />
                Basilikumweg 8
                <br />
                73527 Schwäbisch Gmünd
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Vertreten durch
              </h2>
              <p>Nedim Hasani</p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@nedimhasani.de"
                  className="text-white hover:underline underline-offset-4"
                >
                  info@nedimhasani.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Nedim Hasani
                <br />
                Schwäbisch Gmünd
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Haftung für Inhalte
              </h2>
              <p>
                Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen,
                die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht.
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                Streitbeilegung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline underline-offset-4"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungs­stelle
                teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
