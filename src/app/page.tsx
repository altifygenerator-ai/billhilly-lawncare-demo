import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}