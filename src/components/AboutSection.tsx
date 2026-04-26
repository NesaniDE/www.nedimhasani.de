export function AboutSection() {
  return (
    <section id="about" className="relative px-6 md:px-10 pt-24 md:pt-40 pb-32 border-t border-white/5">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="hidden lg:block" />
        <div className="max-w-[560px]">
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-10">
            Über mich
          </h2>

          <h4 className="text-[20px] md:text-[22px] leading-[1.32] tracking-[-0.025em] text-white mb-8">
            Hi, ich bin Nedim — Gründer von Nesani und seit Jahren als
            Software-Entwickler in Web, Mobile und Produkt-Engineering
            unterwegs.
          </h4>

          <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
            <p>
              Mein Studium der Informatik habe ich an der Universität Stuttgart
              abgeschlossen und seitdem digitale Produkte gebaut — von Custom
              Web-Plattformen und Mobile-Apps bis hin zu internen Tools und
              Full-Stack-Software für wachsende Unternehmen.
            </p>
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
            <p>
              Heute liegt mein Fokus auf{" "}
              <span className="text-white">Nesani</span>, wo ich digitale
              Strukturen, KI-Integration und autonome Systeme für moderne
              Unternehmen baue. Die persönlichen Projekte, die du hier siehst,
              sind die Seite meiner Arbeit, die in keinen Kunden-Brief passt.
            </p>
            <p>
              Wenn du über ein Projekt sprechen willst, eine Idee hast oder
              einfach nur Hallo sagen möchtest — schreib mir unten eine
              Nachricht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
