import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroAbout } from "@/components/HeroAbout";
import { VlogSection } from "@/components/VlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroAbout />
        <VlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
