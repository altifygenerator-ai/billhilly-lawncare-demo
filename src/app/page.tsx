import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Billhilly Lawncare",
  description:
    "Veteran owned and operated lawn care service providing mowing, weed eating, fertilization, and seasonal cleanup services in Northwest Arkansas.",
  url: "https://www.billhillylawncare.com",
  telephone: "479-257-2137",
  areaServed: [
    {
      "@type": "City",
      name: "Bentonville",
      addressRegion: "AR",
    },
    {
      "@type": "City",
      name: "Rogers",
      addressRegion: "AR",
    },
    {
      "@type": "City",
      name: "Bella Vista",
      addressRegion: "AR",
    },
    {
      "@type": "City",
      name: "Centerton",
      addressRegion: "AR",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "AR",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/billhillylawncare",
  ],
  serviceType: [
    "Lawn mowing",
    "Weed eating",
    "Weed control",
    "Fertilization",
    "Spring cleanup",
    "Fall cleanup",
  ],
};

export default function Home() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

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