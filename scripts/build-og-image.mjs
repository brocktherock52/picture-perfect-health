/**
 * Generates /public/og-default.jpg (1200x630) for OpenGraph/Twitter sharing.
 * Composites Eric's portrait (hero-pph.jpg) on the left, Fraunces wordmark on
 * the right, with the trusted-by logo strip across the bottom.
 *
 * Run: node scripts/build-og-image.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const publicDir = resolve(projectRoot, "public");
const portraitPath = resolve(publicDir, "hero-pph.jpg");
const outPath = resolve(publicDir, "og-default.jpg");

const WIDTH = 1200;
const HEIGHT = 630;

async function buildOg() {
  // 1. Prep portrait: cover-fit to 480x630 on the left.
  const portraitBuffer = await sharp(portraitPath)
    .resize(480, 630, { fit: "cover", position: "attention" })
    .toBuffer();

  // 2. Build the right-side editorial card as SVG.
  const overlaySvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="cream" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FAF6EE" />
      <stop offset="1" stop-color="#F3ECDC" />
    </linearGradient>
    <linearGradient id="teal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0F766E" />
      <stop offset="1" stop-color="#0E7490" />
    </linearGradient>
    <filter id="portraitFade" x="0" y="0" width="100%" height="100%">
      <feGaussianBlur stdDeviation="0" />
    </filter>
  </defs>

  <!-- canvas -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#cream)" />

  <!-- portrait soft-edge frame (left band) -->
  <rect x="0" y="0" width="480" height="${HEIGHT}" fill="#1B1F2A" />

  <!-- right column copy -->
  <g font-family="Fraunces, Georgia, serif" fill="#12305C">
    <text x="520" y="170" font-size="76" font-weight="600" letter-spacing="-1">Picture Perfect</text>
    <text x="520" y="248" font-size="76" font-weight="600" letter-spacing="-1">Health</text>
  </g>

  <line x1="520" y1="290" x2="640" y2="290" stroke="#0F766E" stroke-width="3" />

  <g font-family="Inter, system-ui, sans-serif" fill="#3D3A35">
    <text x="520" y="335" font-size="26" font-weight="600">Corporate wellness for Fortune 500</text>
    <text x="520" y="372" font-size="22" font-weight="400" opacity="0.85">Founded 2006 by Dr. Eric Hal Feintuch, D.C.</text>
    <text x="520" y="402" font-size="22" font-weight="400" opacity="0.85">All 50 states. 250,000+ employees served.</text>
  </g>

  <!-- chip strip at bottom -->
  <g font-family="Inter, system-ui, sans-serif" font-weight="700" letter-spacing="2" font-size="18" fill="#12305C">
    <text x="520" y="500" opacity="0.55">TRUSTED BY</text>
  </g>
  <g font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="22" fill="#12305C">
    <text x="520" y="552">Quest Diagnostics</text>
    <text x="780" y="552">.</text>
    <text x="800" y="552">United Airlines</text>
  </g>
  <g font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="22" fill="#12305C">
    <text x="520" y="588">GE Healthcare</text>
    <text x="715" y="588">.</text>
    <text x="735" y="588">U.S. Senate</text>
    <text x="877" y="588">.</text>
    <text x="897" y="588">Korean Olympics</text>
  </g>

  <!-- accent corner mark -->
  <g transform="translate(1100,70)">
    <circle cx="0" cy="0" r="30" fill="url(#teal)" />
    <text x="0" y="6" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="26" font-weight="700" fill="#FAF6EE">PPH</text>
  </g>
</svg>`;

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: { r: 250, g: 246, b: 238 },
    },
  })
    .composite([
      { input: Buffer.from(overlaySvg), top: 0, left: 0 },
      { input: portraitBuffer, top: 0, left: 0 },
      // Re-overlay the right-side text on top of the portrait band edge
      { input: Buffer.from(overlaySvg), top: 0, left: 0, blend: "over" },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outPath);

  console.log("Wrote", outPath);
}

buildOg().catch((err) => {
  console.error(err);
  process.exit(1);
});
