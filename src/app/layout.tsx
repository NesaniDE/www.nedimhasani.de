import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nedimhasani.de"),
  title: "Nedim Hasani",
  description:
    "Persönliche Seite von Nedim Hasani — Gründer von Nesani. Software, Web und App.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nedim Hasani",
    description:
      "Persönliche Seite von Nedim Hasani — Gründer von Nesani. Software, Web und App.",
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
      <body className="bg-background text-foreground min-h-screen">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
