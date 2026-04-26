import Image from "next/image";
import Link from "next/link";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons";

const socials = [
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/nedimhasani", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/nedimhasani", label: "Instagram" },
  { Icon: TikTokIcon, href: "https://www.tiktok.com/@nedimhasani", label: "TikTok" },
  { Icon: YouTubeIcon, href: "https://www.youtube.com/@nedimhasani", label: "YouTube" },
];

const NAV_HEIGHT = 80;

/**
 * Sticky hero column. Renders the portrait, big name, mission text and
 * social icons. Used as the LEFT column of the combined hero+about section
 * (see app/page.tsx) so it stays pinned while the about copy scrolls on
 * the right.
 */
export function Hero() {
  return (
    <div
      id="start"
      className="relative h-screen min-h-[760px] overflow-hidden lg:col-span-7 lg:sticky lg:top-0"
    >
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />

      <h1 className="bg-name absolute bottom-0 left-0 right-0 text-center text-[15vw] md:text-[18vw] lg:text-[14vw] xl:text-[16vw] leading-[0.9] z-0 select-none animate-hero-name">
        Nedim Hasani
      </h1>

      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none"
        style={{ top: NAV_HEIGHT }}
      >
        <Image
          src="/images/nedim.png"
          alt="Nedim Hasani Portrait"
          width={1402}
          height={1122}
          priority
          className="portrait-soft relative z-10 h-full w-auto object-contain object-bottom animate-hero-portrait"
        />
      </div>

      <div className="absolute -bottom-12 left-0 right-0 h-40 bg-gradient-to-t from-[#010101] via-[#010101]/85 to-transparent z-20 pointer-events-none" />

      <div className="relative z-30 flex h-full w-full flex-col px-6 md:px-10 pt-32 md:pt-36">
        <p className="max-w-xs md:max-w-[420px] text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.13] tracking-[-0.03em] text-[#878787] animate-hero-copy">
          Gründer von Nesani. Ich baue Software-, Web- und App-Produkte — für
          ambitionierte Marken und die Menschen dahinter.
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
  );
}
