import { Reveal } from "@/components/Reveal";

/**
 * Right column of the combined hero+about section. The big top-padding on
 * desktop pushes the first heading "below the fold", so the user has to
 * scroll past the initial hero before the copy starts coming up — while
 * the sibling Hero on the left (lg:sticky) stays pinned.
 */
export function AboutSection() {
  return (
    <div
      id="about"
      className="relative px-6 lg:col-span-5 lg:pl-4 lg:pr-12 xl:pr-16 pt-24 pb-24 lg:pt-[100vh] lg:pb-[20vh]"
    >
      <div className="max-w-[560px]">
        <Reveal>
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Über mich
          </p>
        </Reveal>
        <Reveal>
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-10">
            Hi, ich bin Nedim.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <h4 className="text-[20px] md:text-[22px] leading-[1.32] tracking-[-0.025em] text-white mb-8">
            Gründer von Nesani und seit Jahren als Software-Entwickler in Web,
            Mobile und Produkt-Engineering unterwegs.
          </h4>
        </Reveal>

        <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
          <Reveal delay={160}>
            <p>
              Mein Studium der Informatik habe ich an der Universität Stuttgart
              abgeschlossen und seitdem digitale Produkte gebaut — von Custom
              Web-Plattformen und Mobile-Apps bis hin zu internen Tools und
              Full-Stack-Software für wachsende Unternehmen.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p>
              Früher in meiner Laufbahn durfte ich an Projekten unter{" "}
              <span className="text-white">Christian Jungwirth Management</span>{" "}
              mitwirken, wodurch ich auch mit Marken wie{" "}
              <span className="text-white">ESN</span>,{" "}
              <span className="text-white">Jako</span> und{" "}
              <span className="text-white">Oktagon&nbsp;MMA</span> in Berührung
              kam — eine prägende Phase, die meinen Blick auf Kundenarbeit bis
              heute formt.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p>
              Heute liegt mein Fokus auf{" "}
              <span className="text-white">Nesani</span>, wo ich digitale
              Strukturen, KI-Integration und autonome Systeme für moderne
              Unternehmen baue. Die persönlichen Projekte, die du hier siehst,
              sind die Seite meiner Arbeit, die in keinen Kunden-Brief passt.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p>
              Wenn du über ein Projekt sprechen willst, eine Idee hast oder
              einfach nur Hallo sagen möchtest — schreib mir unten eine
              Nachricht.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
