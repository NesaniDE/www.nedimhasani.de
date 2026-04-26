import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const BASE = new URL("..", import.meta.url).pathname;
const SRC = "/Users/nedim/Downloads/Unbenannt (1).png";
const DEST = join(BASE, "public/images/nedim.png");

await mkdir(dirname(DEST), { recursive: true });

await sharp(SRC)
  // Crop the empty transparent canvas around the person so the photo fills
  // its container instead of leaving a tall empty band above the head.
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 4 })
  .grayscale()
  .linear(0.96, 6)
  .modulate({ brightness: 1.02 })
  .blur(0.4)
  .png({ compressionLevel: 9, palette: false })
  .toFile(DEST);

const meta = await sharp(DEST).metadata();
console.log(`✓ wrote ${DEST} (${meta.width}x${meta.height})`);
