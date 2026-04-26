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
  title: "Alvaro Gellings",
  description:
    "My mission is to build, scale, and fund entrepreneurs, talents, and creator brands to empower future generations.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen">{children}</body>
    </html>
  );
}
