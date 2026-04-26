import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = new URL('..', import.meta.url).pathname;

const assets = [
  { url: 'https://www.nesani.de/icon-32.png', dest: 'public/seo/favicon-32x32.png' },
  { url: 'https://www.nesani.de/icon-192.png', dest: 'public/seo/favicon-192x192.png' },
  { url: 'https://www.nesani.de/icon-512.png', dest: 'public/seo/favicon-512x512.png' },
  { url: 'https://www.nesani.de/apple-icon.png', dest: 'public/seo/apple-touch-icon.png' },
];

async function fetchToFile({ url, dest }) {
  const target = join(BASE, dest);
  await mkdir(dirname(target), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(target, buf);
  console.log(`✓ ${dest} (${buf.length} bytes)`);
}

const batchSize = 4;
for (let i = 0; i < assets.length; i += batchSize) {
  await Promise.all(assets.slice(i, i + batchSize).map(fetchToFile));
}
console.log('Done.');
