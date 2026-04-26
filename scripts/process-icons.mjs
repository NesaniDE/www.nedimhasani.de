import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const BASE = new URL("..", import.meta.url).pathname;
const SRC = "/Users/nedim/Downloads/WhatsApp Image 2026-04-26 at 19.41.43.jpeg";

const targets = [
  { size: 32, dest: "public/seo/favicon-32x32.png" },
  { size: 192, dest: "public/seo/favicon-192x192.png" },
  { size: 512, dest: "public/seo/favicon-512x512.png" },
  { size: 180, dest: "public/seo/apple-touch-icon.png" },
];

for (const t of targets) {
  const out = join(BASE, t.dest);
  await mkdir(dirname(out), { recursive: true });
  await sharp(SRC)
    .resize(t.size, t.size, { fit: "cover", position: "center" })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✓ ${t.dest} ${t.size}x${t.size}`);
}

// 1200x630 OG image (Twitter summary_large_image / Facebook). Centre the
// square logo on a black canvas with breathing room.
const ogDest = join(BASE, "public/seo/og-image.png");
const logoBuf = await sharp(SRC)
  .resize(560, 560, { fit: "cover", position: "center" })
  .png()
  .toBuffer();
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: { r: 1, g: 1, b: 1 },
  },
})
  .composite([{ input: logoBuf, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(ogDest);
console.log(`✓ public/seo/og-image.png 1200x630`);

// Also drop a single-size .ico-style PNG that Next will auto-pick up at the
// app router root; favicon.ico is fine as a 48x48 PNG renamed.
const icoDest = join(BASE, "src/app/favicon.ico");
await sharp(SRC)
  .resize(48, 48, { fit: "cover", position: "center" })
  .png({ compressionLevel: 9 })
  .toFile(icoDest);
console.log(`✓ src/app/favicon.ico (48x48 PNG)`);

console.log("Done.");
