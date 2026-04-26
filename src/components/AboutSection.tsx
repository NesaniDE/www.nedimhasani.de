export function AboutSection() {
  return (
    <section id="about" className="relative px-6 md:px-10 pt-24 md:pt-40 pb-32 border-t border-white/5">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="hidden lg:block" />
        <div className="max-w-[560px]">
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-10">
            About
          </h2>

          <h4 className="text-[20px] md:text-[22px] leading-[1.22] tracking-[-0.025em] text-white mb-8">
            Hi, I&rsquo;m Nedim — a builder who likes turning ideas into things
            people actually use.
          </h4>

          <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
            <p>
              This page is my home base on the web — a place to share what I&rsquo;m
              working on, what I&rsquo;ve built, and how to get in touch.
            </p>
            <p>
              I spend most of my time at the intersection of software, design and
              AI. Some of it ends up in client work, some in side projects, and
              some never leaves the notebook.
            </p>
            <p>
              If you want to collaborate, ask a question, or just say hi — drop
              me a message below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
