import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nedim Hasani",
    short_name: "Nedim Hasani",
    description:
      "Persönliche Seite von Nedim Hasani — Gründer von Nesani.",
    start_url: "/",
    display: "standalone",
    background_color: "#010101",
    theme_color: "#010101",
    lang: "de",
    icons: [
      {
        src: "/seo/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/seo/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/seo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
