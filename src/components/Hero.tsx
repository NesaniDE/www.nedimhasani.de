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

export function Hero() {
  return (
    <section
      id="start"
      className="relative h-screen min-h-[680px] overflow-hidden"
    >
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />

      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <h1 className="bg-name absolute bottom-0 text-[15vw] md:text-[18vw] lg:text-[230px] leading-[0.9] z-0 select-none">
          Nedim Hasani
        </h1>
        <Image
          src="/images/nedim.png"
          alt="Nedim Hasani portrait"
          width={1402}
          height={1122}
          priority
          className="portrait-soft relative z-10 h-[100vh] w-auto max-h-[1040px] object-contain object-bottom"
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#010101] via-[#010101]/80 to-transparent z-20" />
      </div>

      <div className="relative z-30 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 md:px-10 pt-32 md:pt-36">
        <p className="max-w-xs md:max-w-[420px] text-[20px] md:text-[26px] lg:text-[30px] leading-[1.13] tracking-[-0.03em] text-[#878787]">
          Founder of Nesani. Building software, web and app products — for
          ambitious brands and the people behind them.
        </p>

        <div className="mt-auto mb-10 flex items-center gap-7">
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
    </section>
  );
}
