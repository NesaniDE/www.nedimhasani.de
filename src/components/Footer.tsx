"use client";

import Link from "next/link";
import {
  ArrowUpIcon,
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

export function Footer() {
  const scrollTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 px-6 md:px-10 pt-12 pb-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
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

        <p className="text-[13px] tracking-[-0.02em] text-[#878787]">
          © {new Date().getFullYear()} Nedim Hasani.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="#imprint"
            className="text-[14px] tracking-[-0.025em] text-[#a0a0a0] hover:text-white transition-colors"
          >
            Imprint
          </Link>
          <Link
            href="#privacy"
            className="text-[14px] tracking-[-0.025em] text-[#a0a0a0] hover:text-white transition-colors"
          >
            Privacy
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
