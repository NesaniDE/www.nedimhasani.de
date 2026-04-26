import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const BASE = new URL("..", import.meta.url).pathname;
const SRC = "/Users/nedim/Downloads/Unbenannt (1).png";
const DEST = join(BASE, "public/images/nedim.png");

await mkdir(dirname(DEST), { recursive: true });

await sharp(SRC)
  .grayscale()
  // softer tonality: mild contrast, slight lift in midtones
  .linear(0.96, 6)
  .modulate({ brightness: 1.02 })
  // very gentle blur to take the edge off without losing detail
  .blur(0.4)
  .png({ compressionLevel: 9, palette: false })
  .toFile(DEST);

console.log("✓ wrote", DEST);
