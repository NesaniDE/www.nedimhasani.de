import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaModal } from "@/components/CtaModal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VlogSection } from "@/components/VlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <AboutSection />
        <VlogSection />
        <ContactSection />
      </main>
      <Footer />
      <CtaModal />
    </>
  );
}
