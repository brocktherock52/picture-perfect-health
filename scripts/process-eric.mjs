import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "..", "public", "eric-real.jpg");

// Upscale + sharpen + soft tone for the editorial hero
async function build() {
  const baseDir = path.resolve(__dirname, "..", "public");
  await sharp(src)
    .resize({ width: 1200, height: 1500, fit: "cover", position: "top", kernel: "lanczos3" })
    .modulate({ brightness: 1.02, saturation: 0.95 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(baseDir, "eric-hero.jpg"));
  await sharp(src)
    .resize({ width: 1200, height: 1500, fit: "cover", position: "top", kernel: "lanczos3" })
    .modulate({ brightness: 1.02, saturation: 0.95 })
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 86 })
    .toFile(path.join(baseDir, "eric-hero.webp"));
  // square crop for og cards
  await sharp(src)
    .resize({ width: 800, height: 800, fit: "cover", position: "top", kernel: "lanczos3" })
    .modulate({ brightness: 1.02, saturation: 0.95 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(baseDir, "eric-square.jpg"));
  console.log("eric-hero.jpg ->", fs.statSync(path.join(baseDir, "eric-hero.jpg")).size);
  console.log("eric-hero.webp ->", fs.statSync(path.join(baseDir, "eric-hero.webp")).size);
  console.log("eric-square.jpg ->", fs.statSync(path.join(baseDir, "eric-square.jpg")).size);
}
build().catch((e) => { console.error(e); process.exit(1); });
