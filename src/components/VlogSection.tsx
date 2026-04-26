const collaborators = [
  { name: "Nesani", note: "Founder", featured: true },
  { name: "ESN", note: "Sports nutrition" },
  { name: "Jako", note: "Sportswear" },
  { name: "Oktagon MMA", note: "Combat sports" },
  { name: "Christian Jungwirth", note: "MMA Professional" },
  { name: "and more", note: "Selected work", muted: true },
];

export function VlogSection() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 max-w-[680px]">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#a0a0a0]">
            Work · Collaborations
          </p>
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1.05] tracking-[-0.06em]">
            Brands and people I&rsquo;ve worked with.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
            A selection of companies and individuals I&rsquo;ve helped build
            software, web and app experiences for over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collaborators.map((c) => (
            <div
              key={c.name}
              className={`group relative overflow-hidden rounded-2xl ring-1 p-8 transition-all ${
                c.featured
                  ? "bg-white text-[#010101] ring-white"
                  : c.muted
                    ? "bg-white/[0.015] ring-white/5 text-[#878787]"
                    : "bg-white/[0.025] ring-white/10 hover:bg-white/[0.05] hover:ring-white/20"
              }`}
            >
              <p
                className={`text-[12px] uppercase tracking-[0.24em] ${
                  c.featured ? "text-[#010101]/60" : "text-[#a0a0a0]"
                }`}
              >
                {c.note}
              </p>
              <p
                className={`mt-6 text-[26px] md:text-[30px] font-medium leading-[1.05] tracking-[-0.04em] ${
                  c.featured ? "text-[#010101]" : c.muted ? "text-white/60" : "text-white"
                }`}
              >
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
