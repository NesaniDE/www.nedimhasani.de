import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const BASE = new URL("..", import.meta.url).pathname;
const SRC = "/Users/nedim/Downloads/Unbenannt (1).png";
const DEST = join(BASE, "public/images/nedim.png");

await mkdir(dirname(DEST), { recursive: true });

await sharp(SRC)
  .grayscale()
  // a touch more contrast so the portrait reads on the very dark hero
  .linear(1.08, -8)
  .png({ compressionLevel: 9, palette: false })
  .toFile(DEST);

console.log("✓ wrote", DEST);
