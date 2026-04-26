import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.nedimhasani.de";
const TITLE = "Nedim Hasani — Gründer von Nesani · Software, Web & App";
const DESCRIPTION =
  "Persönliche Seite von Nedim Hasani. Gründer von Nesani — ich baue Software-, Web- und App-Produkte für ambitionierte Marken im DACH-Raum. Aus Schwäbisch Gmünd.";
const KEYWORDS = [
  "Nedim Hasani",
  "Nesani",
  "Nesani UG",
  "Software-Entwickler Schwäbisch Gmünd",
  "Webentwicklung",
  "App-Entwicklung",
  "KI-Integration",
  "Autonome Agenten",
  "Next.js Entwickler",
  "DACH",
  "BEM-Marktplatz",
  "GD-Listen",
  "Nesani Editor",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Nedim Hasani",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Nedim Hasani", url: SITE_URL }],
  creator: "Nedim Hasani",
  publisher: "Nesani UG (haftungsbeschränkt) i.G.",
  applicationName: "Nedim Hasani",
  category: "personal",
  alternates: {
    canonical: SITE_URL,
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
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/seo/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Nedim Hasani",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nedim Hasani — Gründer von Nesani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/seo/og-image.png"],
    creator: "@nedimhasani",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#010101",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nedim Hasani",
  url: SITE_URL,
  image: `${SITE_URL}/seo/og-image.png`,
  jobTitle: "Founder · Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Nesani UG (haftungsbeschränkt) i.G.",
    url: "https://www.nesani.de",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Stuttgart",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Schwäbisch Gmünd",
    postalCode: "73527",
    addressCountry: "DE",
  },
  email: "info@nedimhasani.de",
  sameAs: [
    "https://www.linkedin.com/in/nedimhasani",
    "https://www.instagram.com/nedimhasani",
    "https://www.tiktok.com/@nedimhasani",
    "https://www.youtube.com/@nedimhasani",
    "https://github.com/NesaniDE",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nedim Hasani",
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: {
    "@type": "Person",
    name: "Nedim Hasani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${onest.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
