import Image from "next/image";
import Link from "next/link";
import { PlayIcon, YouTubeBadgeIcon } from "@/components/icons";

export function VlogSection() {
  return (
    <section
      id="vlog"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="max-w-[520px]">
          <h2 className="heading-gradient text-[36px] md:text-[50px] font-medium leading-[1.05] tracking-[-0.05em] mb-8">
            Building in Public &ndash; The Founder&rsquo;s Journey
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787] mb-8">
            After founding, investing in, and exiting several 7- to 9-figure
            companies, I&rsquo;ve decided to share the journey of my latest
            venture on YouTube. Follow along as I build day one&reg; from the
            ground up, balancing the highs and lows of entrepreneurship while
            documenting every step.
          </p>
          <Link
            href="https://www.youtube.com/@alvarogellings/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Vlog overview
          </Link>
        </div>

        <Link
          href="https://www.youtube.com/watch?v=nLnOZiAIKDs"
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full max-w-[600px] justify-self-center lg:justify-self-end"
        >
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/vlog-thumb.jpg"
              alt="A Realistic Weekend of Building an 8 Figure Sportswear Brand"
              width={720}
              height={405}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <PlayIcon className="h-16 w-16 text-white/90 transition-transform group-hover:scale-110" />
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between gap-3 px-1">
            <p className="text-[16px] md:text-[17px] font-medium tracking-[-0.025em] leading-snug text-white">
              A Realistic Weekend of Building an 8 Figure Sportswear Brand
              <br />
              <span className="text-[14px] font-normal text-[#a0a0a0]">
                Watch on YouTube
              </span>
            </p>
            <YouTubeBadgeIcon className="h-5 w-7 text-[#a0a0a0]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
