import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroAbout } from "@/components/HeroAbout";
import { VlogSection } from "@/components/VlogSection";
import { FaqJsonLd, FaqSection } from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Header />
      <main className="relative">
        <HeroAbout />
        <VlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
