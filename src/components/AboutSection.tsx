export function AboutSection() {
  return (
    <section id="about" className="relative px-6 md:px-10 pt-24 md:pt-40 pb-32 border-t border-white/5">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="hidden lg:block" />
        <div className="max-w-[560px]">
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-10">
            About
          </h2>

          <h4 className="text-[20px] md:text-[22px] leading-[1.32] tracking-[-0.025em] text-white mb-8">
            Hi, I&rsquo;m Nedim — founder of Nesani and a software builder with
            years of work behind me in web, mobile and product engineering.
          </h4>

          <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.025em] text-[#878787]">
            <p>
              I studied Computer Science at the University of Stuttgart and have
              been shipping digital products ever since — from custom web
              platforms and mobile apps to internal tools and full-stack
              software for growing companies.
            </p>
            <p>
              Over the years I&rsquo;ve had the chance to work with strong
              brands and people, including{" "}
              <span className="text-white">ESN</span>,{" "}
              <span className="text-white">Jako</span>,{" "}
              <span className="text-white">Oktagon&nbsp;MMA</span>, and the
              MMA professional{" "}
              <span className="text-white">Christian Jungwirth</span> — among
              many others I&rsquo;m grateful to have collaborated with.
            </p>
            <p>
              Today I focus my time on{" "}
              <span className="text-white">Nesani</span>, where I build
              digital structures, AI integration and autonomous systems for
              modern companies. The personal projects you&rsquo;ll see here are
              the side of that work that doesn&rsquo;t fit a client brief.
            </p>
            <p>
              If you&rsquo;d like to talk about a project, an idea, or just say
              hi — drop me a message below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
