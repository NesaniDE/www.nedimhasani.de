import { ArrowRightIcon } from "@/components/icons";

const items = [
  {
    label: "Project",
    title: "Currently building",
    desc: "A few private experiments. Public ones land here once they survive contact with reality.",
  },
  {
    label: "Writing",
    title: "Notes & posts",
    desc: "Short pieces about software, AI tooling, and the messy work behind shipping things.",
  },
  {
    label: "Open source",
    title: "GitHub",
    desc: "Public code, occasional libraries and the odd one-off script worth keeping.",
  },
];

export function VlogSection() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 max-w-[640px]">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Work
          </p>
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em]">
            What I&rsquo;m up to.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl bg-white/[0.025] ring-1 ring-white/10 p-7 transition-all hover:bg-white/[0.04] hover:ring-white/20"
            >
              <p className="text-[12px] uppercase tracking-[0.22em] text-[#a0a0a0]">
                {p.label}
              </p>
              <h3 className="mt-4 text-[19px] md:text-[20px] font-medium leading-[1.25] tracking-[-0.025em] text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.55] tracking-[-0.02em] text-[#878787]">
                {p.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[14px] text-white/80 group-hover:text-white transition-colors">
                Soon
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
