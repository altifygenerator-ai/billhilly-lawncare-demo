import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.billhillylawncare.com"),
  title: {
    default: "Billhilly Lawncare | Northwest Arkansas Lawn Care",
    template: "%s | Billhilly Lawncare",
  },
  description:
    "Billhilly Lawncare provides lawn mowing, weed control, fertilization, and spring and fall cleanup services in Bentonville, Rogers, Bella Vista, and Centerton, Arkansas.",
  keywords: [
    "Billhilly Lawncare",
    "lawn care Bentonville AR",
    "lawn care Rogers AR",
    "lawn care Bella Vista AR",
    "lawn care Centerton AR",
    "Northwest Arkansas lawn care",
    "lawn mowing Bentonville",
    "weed control Northwest Arkansas",
    "fertilization Northwest Arkansas",
    "spring cleanup",
    "fall cleanup",
    "veteran owned lawn care",
  ],
  authors: [{ name: "Billhilly Lawncare" }],
  creator: "Billhilly Lawncare",
  publisher: "Billhilly Lawncare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.billhillylawncare.com",
    siteName: "Billhilly Lawncare",
    title: "Billhilly Lawncare | Northwest Arkansas Lawn Care",
    description:
      "Veteran owned and operated lawn care serving Bentonville, Rogers, Bella Vista, and Centerton, Arkansas.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Billhilly Lawncare in Northwest Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billhilly Lawncare | Northwest Arkansas Lawn Care",
    description:
      "Lawn mowing, weed control, fertilization, and seasonal cleanup in Bentonville, Rogers, Bella Vista, and Centerton, Arkansas.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "local business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}