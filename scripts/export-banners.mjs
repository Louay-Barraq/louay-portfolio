// Screenshots /banners/<id>/ from the running dev server into src/assets/banners/<id>.png.
// Usage: npm run dev (in another terminal), then `npm run banners [id …]`.
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BANNER_BASE ?? 'http://localhost:4321';
const outDir = fileURLToPath(new URL('../src/assets/banners/', import.meta.url));

const { banners } = await import('../src/data/banners.ts');
const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(banners);

mkdirSync(outDir, { recursive: true });
for (const id of ids) {
  const out = `${outDir}${id}.png`;
  execFileSync(CHROME, [
    '--headless=new',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1600,480',
    '--virtual-time-budget=4000',
    `--screenshot=${out}`,
    `${BASE}/banners/${id}/`,
  ], { stdio: 'ignore' });
  console.log(`✓ ${id} → src/assets/banners/${id}.png`);
}
