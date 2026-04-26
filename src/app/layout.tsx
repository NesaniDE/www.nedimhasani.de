import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nedimhasani.de"),
  title: "Nesani — Digitale Strukturen für moderne Unternehmen",
  description:
    "Nesani entwickelt digitale Präsenz, KI-Integration und autonome Systeme für Unternehmen mit Anspruch. Aus Schwäbisch Gmünd — für den deutschsprachigen Raum.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192" },
      { url: "/seo/favicon-512x512.png", sizes: "512x512" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nesani — Digitale Strukturen für moderne Unternehmen",
    description:
      "Sichtbarer. Effizienter. Autonomer. Digitale Präsenz, KI-Integration und autonome Systeme — aus Schwäbisch Gmünd für den DACH-Raum.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${onest.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen">{children}</body>
    </html>
  );
}
