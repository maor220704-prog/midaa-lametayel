// Generates PWA/app icons from public/favicon.svg using sharp.
//
// The favicon is a purple splash-mark logo with a transparent background.
// For installability we need:
//   - pwa-192x192.png / pwa-512x512.png: "any" purpose icons, logo on the
//     app's primary background color (transparent PNG icons often render
//     oddly on home-screen backgrounds, so we bake in the brand color).
//   - maskable-icon-512x512.png: same, but with extra padding so the logo
//     survives being cropped to a circle/squircle by the OS mask.
//   - apple-touch-icon.png (180x180): iOS ignores the manifest entirely and
//     requires its own icon with NO transparency (iOS paints transparent
//     pixels black otherwise), so this one is always composited onto a
//     solid background.
//
// Run: node scripts/generate-icons.mjs
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const svgPath = path.join(root, "public", "favicon.svg");
const outDir = path.join(root, "public", "icons");

// Matches --color-primary in src/index.css's @theme block.
const PRIMARY = "#47664b";

// public/favicon.svg has a <mask type="alpha"> that librsvg/resvg (sharp's
// SVG rasterizer) doesn't fully honor: it leaves a stray 1-native-pixel-wide
// black line along the very top and bottom edge of the rendered bitmap, at
// any output size. It's invisible at 48x46 favicon size but glaring once
// blown up to app-icon sizes. Fix: rasterize at high density, crop exactly
// one native SVG unit off the top and bottom (where the artifact lives),
// then use that clean bitmap as the source for every icon. See
// scripts/tmp-preview/ during development for the before/after — the crop
// removes only the artifact, not any part of the logo itself.
const RENDER_DENSITY = 1536; // 48 svg units -> 1024px wide render
async function renderCleanLogo() {
  const raw = await sharp(svgPath, { density: RENDER_DENSITY }).png().toBuffer();
  const meta = await sharp(raw).metadata();
  const pxPerUnit = meta.width / 48;
  const cropPx = Math.ceil(pxPerUnit * 1);
  return sharp(raw)
    .extract({ left: 0, top: cropPx, width: meta.width, height: meta.height - 2 * cropPx })
    .png()
    .toBuffer();
}

const svgBuffer = await renderCleanLogo();

async function makeIcon({ file, size, padding, background }) {
  // Every icon here sits on a solid, opaque background, so flatten the
  // (still-transparent) logo onto that background *before* downscaling.
  // Resizing an RGBA image with a hard transparent/opaque edge via libvips'
  // default Lanczos kernel produces dark ringing artifacts along that edge
  // at small sizes; flattening first removes the alpha channel so there's
  // nothing left to ring.
  const flattened = await sharp(svgBuffer).flatten({ background }).png().toBuffer();
  const logoSize = Math.round(size * (1 - padding * 2));
  const logo = await sharp(flattened)
    .resize(logoSize, logoSize, { fit: "contain", background })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(path.join(outDir, file));

  console.log(`wrote ${file} (${size}x${size}, padding ${Math.round(padding * 100)}%)`);
}

await import("node:fs/promises").then((fs) => fs.mkdir(outDir, { recursive: true }));

await Promise.all([
  // Standard "any" purpose icons: brand background, modest padding.
  makeIcon({ file: "pwa-192x192.png", size: 192, padding: 0.12, background: PRIMARY }),
  makeIcon({ file: "pwa-512x512.png", size: 512, padding: 0.12, background: PRIMARY }),
  // Maskable: OS may crop to a circle, so keep the logo inside the ~80% safe zone.
  makeIcon({ file: "maskable-icon-512x512.png", size: 512, padding: 0.22, background: PRIMARY }),
  // iOS apple-touch-icon: must be fully opaque, no transparency.
  makeIcon({ file: "apple-touch-icon.png", size: 180, padding: 0.18, background: PRIMARY }),
]);

console.log("done");
