import Link from "next/link";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

const socials = [
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: GithubIcon, href: "#", label: "GitHub" },
];

export function Hero() {
  return (
    <section
      id="start"
      className="relative h-screen min-h-[680px] overflow-hidden flex items-center"
    >
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />

      {/* Massive background name */}
      <h1 className="bg-name absolute -bottom-2 left-0 right-0 text-[15vw] md:text-[18vw] lg:text-[230px] leading-[0.85] text-center select-none pointer-events-none z-0 px-4">
        Nedim Hasani
      </h1>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 md:px-10 pt-32 md:pt-36">
        <p className="max-w-xs md:max-w-[400px] text-[20px] md:text-[26px] lg:text-[30px] leading-[1.13] tracking-[-0.03em] text-[#878787]">
          Personal page of Nedim Hasani — building digital products,
          experimenting with AI, and shipping ideas worth keeping.
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010101] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
