import { ArrowRightIcon } from "@/components/icons";

type Project = {
  status: "Live" | "Beta" | "Building" | "Operating";
  category: string;
  title: string;
  description: string;
  href?: string;
};

const projects: Project[] = [
  {
    status: "Operating",
    category: "Company",
    title: "Nesani UG",
    description:
      "The studio behind everything below. We build digital structures, AI integration and autonomous systems for ambitious companies in the DACH region — from idea to launch in weeks, not months.",
  },
  {
    status: "Beta",
    category: "Local · SaaS",
    title: "GD-Listen",
    description:
      "Curated top-10 lists for Schwäbisch Gmünd — the first guide locals actually use. Restaurants, cafés, weekend spots and small businesses, ranked honestly and updated continuously.",
  },
  {
    status: "Building",
    category: "Marketplace · AI",
    title: "BEM-Marktplatz",
    description:
      "A marketplace where AI agents hire real humans for real-world tasks. Comes with its own MCP server so any agent can post a job, track progress and pay out — bridging autonomous systems with the people on the ground.",
  },
  {
    status: "Building",
    category: "Product · AI",
    title: "Nesani Editor",
    description:
      "AI-powered website maintenance. Clients edit their site by chat, see a live preview, and only push to production after they hit approve. Next.js 16 + Supabase under the hood.",
  },
];

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  Beta: "bg-amber-400/15 text-amber-200 ring-amber-400/30",
  Building: "bg-sky-400/15 text-sky-200 ring-sky-400/30",
  Operating: "bg-white/10 text-white ring-white/20",
};

export function VlogSection() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 max-w-[680px]">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Now · Building in Public
          </p>
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1.05] tracking-[-0.06em]">
            What I&rsquo;m working on right now.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
            Four parallel bets on different problems. Some are live, some
            still in private beta — all built under the Nesani roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-8 transition-all hover:bg-white/[0.04] hover:ring-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ${statusColor[p.status]}`}
                >
                  {p.status}
                </span>
                <span className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0]">
                  {p.category}
                </span>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.05] tracking-[-0.045em] text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] tracking-[-0.02em] text-[#878787]">
                {p.description}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-[14px] text-white/70 group-hover:text-white transition-colors">
                More soon
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
