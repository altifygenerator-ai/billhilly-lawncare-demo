import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import { site } from "@/data/site";

const siteUrl = "https://www.billhillylawncare.com";
const serviceNames = [
  "Lawn Mowing",
  "Weed Control",
  "Lawn Fertilization",
  "Spring & Fall Yard Cleanup",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: site.name,
      description:
        "Veteran-owned and operated lawn care service providing mowing, weed control, fertilization, and seasonal yard cleanup in Northwest Arkansas.",
      url: siteUrl,
      image: `${siteUrl}/images/og-image.jpg`,
      telephone: "+1-479-257-2137",
      address: {
        "@type": "PostalAddress",
        addressRegion: "AR",
        addressCountry: "US",
      },
      areaServed: site.areas.map((area) => `${area}, Arkansas`),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-479-257-2137",
        contactType: "customer service",
        areaServed: "US-AR",
        availableLanguage: "English",
      },
      sameAs: [site.facebook, site.google],
      makesOffer: serviceNames.map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
          provider: {
            "@id": `${siteUrl}/#business`,
          },
          areaServed: "Northwest Arkansas",
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: site.name,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
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
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <Hero />
        <TrustStrip />
        <ServicesSection />
        <GallerySection />
        <Reviews />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
