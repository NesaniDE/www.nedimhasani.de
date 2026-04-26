import Image from "next/image";
import Link from "next/link";
import {
  InstagramIcon,
  LinkedInIcon,
  PlayIcon,
  XIcon,
  YouTubeBadgeIcon,
  YouTubeIcon,
} from "@/components/icons";

const socials = [
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/alvaro-gellings/", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/alvarogellings/", label: "Instagram" },
  { Icon: XIcon, href: "https://x.com/alvarogellings", label: "X" },
  { Icon: YouTubeIcon, href: "https://www.youtube.com/@alvarogellings", label: "YouTube" },
];

export function Hero() {
  return (
    <section
      id="start"
      className="relative h-screen min-h-[680px] overflow-hidden"
    >
      {/* Subtle radial backdrop */}
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />

      {/* Sticky portrait + huge bg name */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <h1 className="bg-name absolute bottom-0 text-[15vw] md:text-[18vw] lg:text-[234px] leading-[0.9] z-0 select-none">
          Alvaro Gellings
        </h1>
        <Image
          src="/images/alvaro.png"
          alt="Alvaro Gellings portrait"
          width={1192}
          height={1364}
          priority
          className="relative z-10 h-[88vh] w-auto max-h-[820px] object-contain object-bottom"
        />
        {/* Gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#010101] to-transparent z-20" />
      </div>

      {/* Mission text — top-left */}
      <div className="relative z-30 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 md:px-10 pt-32 md:pt-36">
        <p className="max-w-xs md:max-w-[330px] text-[20px] md:text-[26px] lg:text-[30px] leading-[1.13] tracking-[-0.03em] text-[#878787]">
          My mission is to build, scale, and fund entrepreneurs, talents, and
          creator brands to empower future generations.
        </p>

        {/* Social icons */}
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

      {/* Video card top-right */}
      <Link
        href="https://www.youtube.com/watch?v=nLnOZiAIKDs"
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute top-32 right-6 md:right-10 z-30 w-[300px] md:w-[340px] rounded-2xl bg-white/[0.03] p-3 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/[0.06]"
      >
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/video-thumb.jpg"
            alt="Building Europes fastest growing performance Brand"
            width={574}
            height={316}
            className="h-auto w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayIcon className="h-14 w-14 text-white/90 transition-transform group-hover:scale-110" />
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between gap-3 px-1 pb-1">
          <div>
            <p className="text-[15px] font-medium leading-snug text-white">
              Building Europes fastest growing performance Brand.
            </p>
            <p className="mt-1 text-[13px] text-[#a0a0a0]">Watch on YouTube</p>
          </div>
          <YouTubeBadgeIcon className="h-4 w-6 text-[#a0a0a0]" />
        </div>
      </Link>
    </section>
  );
}
