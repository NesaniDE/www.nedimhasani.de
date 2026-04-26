import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VlogSection } from "@/components/VlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/*
          Combined hero + about section. On desktop the Hero is the sticky
          left column (7/12) and AboutSection is the scrolling right column
          (5/12) — so the portrait stays pinned while the bio rolls up next
          to it. On mobile both stack normally.
        */}
        <section id="hero-about" className="relative lg:grid lg:grid-cols-12 lg:gap-0">
          <Hero />
          <AboutSection />
        </section>
        <VlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
