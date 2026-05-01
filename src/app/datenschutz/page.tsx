import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpIcon } from "@/components/icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung gemäß DSGVO. Welche Daten werden verarbeitet, auf welcher Grundlage und welche Rechte haben Besucher dieser Website.",
  alternates: { canonical: "https://www.nedimhasani.de/datenschutz" },
};

export default function DatenschutzPage() {
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
          <h1 className="heading-gradient text-[32px] sm:text-[44px] md:text-[60px] font-medium leading-[1.05] sm:leading-[1] tracking-[-0.06em] mb-3">
            Datenschutzerklärung
          </h1>
          <p className="text-[13px] sm:text-[14px] text-[#a0a0a0] mb-10 md:mb-14">
            Stand: April 2026
          </p>

          <div className="space-y-10 md:space-y-12 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] tracking-[-0.02em] text-[#878787]">
            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-3 text-white">
                Nesani UG (haftungsbeschränkt)
                <br />
                Nedim Hasani
                <br />
                Basilikumweg 8
                <br />
                73527 Schwäbisch Gmünd
                <br />
                Deutschland
              </p>
              <p className="mt-3">
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
                2. Allgemeine Hinweise
              </h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges
                Anliegen. Diese Datenschutzerklärung erläutert, welche Daten
                beim Besuch dieser Website erhoben, wie sie verarbeitet und zu
                welchen Zwecken sie genutzt werden. Grundlage ist die
                Datenschutz-Grundverordnung (DSGVO) sowie das
                Bundesdatenschutzgesetz (BDSG).
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                3. SSL-/TLS-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie an „https://" in der Adresszeile Ihres Browsers sowie am
                Schloss-Symbol.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                4. Hosting bei Vercel
              </h2>
              <p>
                Diese Website wird bei der Vercel Inc. (440 N Barranca Ave
                #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf der Seite
                werden technische Verbindungsdaten (insbesondere IP-Adresse,
                Datum/Uhrzeit, Browser-Typ, aufgerufene Ressource, Referrer)
                durch Vercel verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. f DSGVO; das berechtigte Interesse liegt in der stabilen
                und sicheren Bereitstellung der Website.
              </p>
              <p className="mt-3">
                Die Übermittlung in die USA erfolgt auf Grundlage der EU-US
                Data Privacy Framework-Zertifizierung von Vercel sowie
                ergänzender Standardvertragsklauseln. Weitere Informationen
                finden Sie in der Datenschutzerklärung von Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline underline-offset-4"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                5. Server-Log-Dateien
              </h2>
              <p>
                Der Hoster erhebt automatisch Informationen, die Ihr Browser
                übermittelt, in sogenannten Server-Log-Dateien. Diese sind:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-1">
                <li>Browser-Typ und Version</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Server-Anfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen
                wird nicht vorgenommen. Die Erfassung erfolgt auf Basis von
                Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website — hierzu
                müssen die Server-Log-Files erfasst werden.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                6. Kontaktformular
              </h2>
              <p>
                Wenn Sie mir per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen gespeichert. Diese
                Daten gebe ich nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf meinem berechtigten
                Interesse an der effektiven Bearbeitung der an mich
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="mt-3">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei mir, bis Sie mich zur Löschung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                — insbesondere Aufbewahrungsfristen — bleiben unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                7. Cookies und lokaler Speicher
              </h2>
              <p>
                Diese Website setzt aktuell keine Cookies, die für die
                Funktion der Seite nicht zwingend erforderlich sind. Es findet
                kein Tracking, keine Profilbildung und keine Auswertung Ihres
                Verhaltens statt.
              </p>
              <p className="mt-3">
                Ihre Auswahl im Cookie-Banner („Alle akzeptieren" /
                „Nur notwendige") wird ausschließlich im{" "}
                <em className="not-italic text-white">localStorage</em> Ihres
                Browsers unter dem Schlüssel{" "}
                <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[14px] text-white">
                  nh-cookie-consent
                </code>{" "}
                gespeichert, damit der Banner nicht erneut erscheint. Diese
                Information verlässt Ihr Gerät nicht. Sie können den Eintrag
                jederzeit über die Browser-Einstellungen löschen.
              </p>
              <p className="mt-3">
                Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG (technisch
                erforderlich) bzw. Ihre Einwilligung nach § 25 Abs. 1 TTDSG
                und Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                8. Schriftarten (Google Fonts, lokal eingebunden)
              </h2>
              <p>
                Diese Seite verwendet die Schriftart „Onest" von Google Fonts.
                Die Schriftdateien werden über das Next.js-Framework{" "}
                <em className="not-italic text-white">zur Build-Zeit</em>{" "}
                heruntergeladen und anschließend lokal von meinem Server
                ausgeliefert. Beim Aufruf der Website findet daher{" "}
                <span className="text-white">
                  keine Verbindung zu Google-Servern
                </span>{" "}
                statt; es werden keine Daten an Google übertragen.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                9. Verlinkungen zu Social-Media-Profilen
              </h2>
              <p>
                Auf dieser Website finden sich Verlinkungen zu meinen Profilen
                bei LinkedIn, Instagram, TikTok und YouTube. Es werden{" "}
                <span className="text-white">keine Inhalte eingebettet</span>{" "}
                und keine Skripte dieser Plattformen geladen. Erst beim Klick
                auf einen entsprechenden Link verlassen Sie diese Seite und
                werden zur jeweiligen Plattform weitergeleitet — dort gelten
                ausschließlich die Datenschutzbestimmungen des jeweiligen
                Anbieters.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                10. Ihre Rechte als betroffene Person
              </h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="mt-3 ml-5 list-disc space-y-1">
                <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>
                  Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)
                </li>
                <li>
                  Widerruf einer einmal erteilten Einwilligung mit Wirkung für
                  die Zukunft (Art. 7 Abs. 3 DSGVO)
                </li>
              </ul>
              <p className="mt-3">
                Zur Wahrnehmung dieser Rechte genügt eine formlose Nachricht
                an{" "}
                <a
                  href="mailto:info@nedimhasani.de"
                  className="text-white hover:underline underline-offset-4"
                >
                  info@nedimhasani.de
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                11. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                über die Verarbeitung Ihrer personenbezogenen Daten zu
                beschweren. Zuständig ist die Aufsichtsbehörde des
                Bundeslandes, in dem ich meinen Sitz habe — der Landesbeauftragte
                für den Datenschutz und die Informationsfreiheit
                Baden-Württemberg.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-medium tracking-[-0.025em] text-white mb-4">
                12. Aktualität dieser Datenschutzerklärung
              </h2>
              <p>
                Durch die Weiterentwicklung der Website oder geänderte
                gesetzliche Vorgaben kann es notwendig werden, diese
                Datenschutzerklärung anzupassen. Die jeweils aktuelle Fassung
                ist auf dieser Seite abrufbar.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
