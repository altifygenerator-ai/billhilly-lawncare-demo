import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://www.billhillylawncare.com";
const title = "Lawn Care in Northwest Arkansas | Billhilly Lawncare";
const description =
  "Veteran-owned Billhilly Lawncare provides mowing, weed control, fertilization, and seasonal yard cleanup in Bentonville, Rogers, Bella Vista, and Centerton, AR.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Billhilly Lawncare",
  title: {
    default: title,
    template: "%s | Billhilly Lawncare",
  },
  description,
  keywords: [
    "Billhilly Lawncare",
    "lawn care Northwest Arkansas",
    "lawn care Bentonville AR",
    "lawn care Rogers AR",
    "lawn care Bella Vista AR",
    "lawn care Centerton AR",
    "lawn mowing Northwest Arkansas",
    "weed control Northwest Arkansas",
    "lawn fertilization Northwest Arkansas",
    "yard cleanup Northwest Arkansas",
    "veteran owned lawn care",
  ],
  authors: [{ name: "Billhilly Lawncare", url: siteUrl }],
  creator: "Billhilly Lawncare",
  publisher: "Billhilly Lawncare",
  verification: {
    google: "EdRVE1Ca9LgxKUq5GJx7ai6Fel_bfAnqZe_Us0YCIs8",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Billhilly Lawncare",
    title,
    description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Billhilly Lawncare serving Northwest Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
  category: "lawn care service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
