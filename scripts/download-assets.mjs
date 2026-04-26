import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = new URL('..', import.meta.url).pathname;

const assets = [
  { url: 'https://www.alvarogellings.com/wp-content/themes/alvarogellings/images/logo.svg', dest: 'public/images/logo.svg' },
  { url: 'https://www.alvarogellings.com/wp-content/themes/alvarogellings/images/alvaro-neu.png', dest: 'public/images/alvaro.png' },
  { url: 'https://www.alvarogellings.com/wp-content/uploads/video-thumb.jpg', dest: 'public/images/video-thumb.jpg' },
  { url: 'https://www.alvarogellings.com/wp-content/uploads/AG-PB-720x405.jpg', dest: 'public/images/vlog-thumb.jpg' },
  { url: 'https://www.alvarogellings.com/wp-content/uploads/cropped-favIcon-32x32.png', dest: 'public/seo/favicon-32x32.png' },
  { url: 'https://www.alvarogellings.com/wp-content/uploads/cropped-favIcon-192x192.png', dest: 'public/seo/favicon-192x192.png' },
  { url: 'https://www.alvarogellings.com/wp-content/uploads/cropped-favIcon-180x180.png', dest: 'public/seo/apple-touch-icon.png' },
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
