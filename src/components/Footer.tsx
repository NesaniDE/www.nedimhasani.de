"use client";

import Link from "next/link";
import {
  ArrowUpIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

const socials = [
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/alvaro-gellings/", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/alvarogellings/", label: "Instagram" },
  { Icon: XIcon, href: "https://x.com/alvarogellings", label: "X" },
  { Icon: YouTubeIcon, href: "https://www.youtube.com/@alvarogellings", label: "YouTube" },
];

export function Footer() {
  const scrollTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative px-6 md:px-10 pb-10 pt-6">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-7">
          {socials.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#imprint"
            className="text-[15px] tracking-[-0.025em] text-[#a0a0a0] hover:text-white transition-colors"
          >
            Imprint
          </Link>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="text-[#a0a0a0] hover:text-white transition-colors"
            type="button"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
