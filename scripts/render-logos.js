// Render the wireframe SVG to PNG favicons + a larger hero overlay version
// Run: node scripts/render-logos.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SVG_PATH = path.join(ROOT, 'public', 'logo.svg');
const OUT_DIR = path.join(ROOT, 'public');

const svg = fs.readFileSync(SVG_PATH);

const targets = [
  // favicon / app icon
  { size: 16, name: 'favicon-16.png' },
  { size: 32, name: 'favicon-32.png' },
  { size: 48, name: 'favicon-48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  // big hero overlay
  { size: 1024, name: 'logo-1024.png' },
];

(async () => {
  for (const t of targets) {
    const out = path.join(OUT_DIR, t.name);
    await sharp(svg, { density: 384 })
      .resize(t.size, t.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(out);
    const stat = fs.statSync(out);
    console.log(`  ${t.name.padEnd(22)} ${t.size}x${t.size}  ${(stat.size / 1024).toFixed(1)} KB`);
  }
  console.log('done.');
})();
