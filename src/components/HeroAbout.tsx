"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const socials = [
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/nedimhasani", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/nedimhasani", label: "Instagram" },
  { Icon: TikTokIcon, href: "https://www.tiktok.com/@nedimhasani", label: "TikTok" },
  { Icon: YouTubeIcon, href: "https://www.youtube.com/@nedimhasani", label: "YouTube" },
];

const NAV_HEIGHT = 80;

/**
 * Combined Hero + About section.
 *
 * Desktop: the left 7/12 column is sticky. Inside it, the portrait + big
 * background name (`.hero-dock`) start page-centered (translateX 22vw)
 * and slide back to col-centered (translateX 0) as the user scrolls
 * through the first ~70vh. Mission text + socials (`.hero-mission`)
 * fade out simultaneously. The right 5/12 column has lg:pt-[100vh] so
 * the about copy starts below the fold and rolls up next to the docked
 * portrait.
 *
 * Animation is driven by a CSS variable `--p` written via rAF so SSR
 * markup matches the unscrolled state — no hydration jump.
 */
export function HeroAbout() {
  const dockRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = window.innerHeight * 0.7;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      const v = p.toFixed(4);
      dockRef.current?.style.setProperty("--p", v);
      missionRef.current?.style.setProperty("--p", v);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="hero-about" className="relative">
      {/* Inline because Tailwind v4 was eating the rules from globals.css. */}
      <style>{`
        .hero-dock { --p: 0; transform: translateX(0); will-change: transform; }
        .hero-mission { --p: 0; opacity: 1; will-change: opacity; }
        @media (min-width: 1024px) {
          .hero-dock { transform: translateX(calc((1 - var(--p, 0)) * 22vw)); }
          .hero-mission { opacity: calc(1 - var(--p, 0) * 0.85); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-dock, .hero-mission { transform: none !important; opacity: 1 !important; }
        }
      `}</style>
      <div className="lg:grid lg:grid-cols-12">
        {/* Left column — sticky photo + name + mission */}
        <div className="relative h-screen min-h-[760px] overflow-hidden lg:col-span-7 lg:sticky lg:top-0 lg:h-screen">
          <div className="bg-radial-glow pointer-events-none absolute inset-0" />

          {/* Photo + big bg-name. Slide from page-center to col-center. */}
          <div ref={dockRef} className="hero-dock absolute inset-0 pointer-events-none">
            <h1 className="bg-name absolute bottom-0 left-0 right-0 text-center text-[15vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw] leading-[0.9] z-0 select-none animate-hero-name">
              Nedim Hasani
            </h1>

            <div
              className="absolute inset-x-0 bottom-0 flex items-end justify-center"
              style={{ top: NAV_HEIGHT }}
            >
              <Image
                src="/images/nedim.png"
                alt="Nedim Hasani Portrait"
                width={658}
                height={1057}
                priority
                className="portrait-soft relative z-10 h-full w-auto object-contain object-bottom animate-hero-portrait"
              />
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute -bottom-12 left-0 right-0 h-40 bg-gradient-to-t from-[#010101] via-[#010101]/85 to-transparent z-20 pointer-events-none" />

          {/* Mission text + socials — fade out as photo docks left */}
          <div
            ref={missionRef}
            className="hero-mission relative z-30 flex h-full w-full flex-col px-6 md:px-10 pt-32 md:pt-36 pointer-events-auto"
          >
            <p className="max-w-xs md:max-w-[420px] text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.13] tracking-[-0.03em] text-[#878787] animate-hero-copy">
              Gründer von Nesani. Ich baue Software-, Web- und App-Produkte —
              für ambitionierte Marken und die Menschen dahinter.
            </p>

            <div className="mt-auto mb-10 flex items-center gap-7 animate-hero-socials">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — about copy. lg:pt-[100vh] holds it below the
            fold initially so the user has to scroll past the centered hero
            before the bio appears. */}
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
                Gründer von Nesani und seit Jahren als Software-Entwickler in
                Web, Mobile und Produkt-Engineering unterwegs.
              </h4>
            </Reveal>

            <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
              <Reveal delay={160}>
                <p>
                  Mein Studium der Informatik habe ich an der Universität
                  Stuttgart abgeschlossen und seitdem digitale Produkte gebaut
                  — von Custom Web-Plattformen und Mobile-Apps bis hin zu
                  internen Tools und Full-Stack-Software für wachsende
                  Unternehmen.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  Früher in meiner Laufbahn durfte ich an Projekten unter{" "}
                  <span className="text-white">
                    Christian Jungwirth Management
                  </span>{" "}
                  mitwirken, wodurch ich auch mit Marken wie{" "}
                  <span className="text-white">ESN</span>,{" "}
                  <span className="text-white">Jako</span> und{" "}
                  <span className="text-white">Oktagon&nbsp;MMA</span> in
                  Berührung kam — eine prägende Phase, die meinen Blick auf
                  Kundenarbeit bis heute formt.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p>
                  Heute liegt mein Fokus auf{" "}
                  <span className="text-white">Nesani</span>, wo ich digitale
                  Strukturen, KI-Integration und autonome Systeme für moderne
                  Unternehmen baue. Die persönlichen Projekte, die du hier
                  siehst, sind die Seite meiner Arbeit, die in keinen
                  Kunden-Brief passt.
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
      </div>
    </section>
  );
}
