/**
 * Generates every favicon asset from `app/icon.svg` — the single source of truth.
 *
 *   node scripts/generate-favicons.mjs
 *
 * Outputs:
 *   app/apple-icon.png   180x180  (iOS home screen)
 *   public/favicon.ico   16/32/48/64 PNG-in-ICO (legacy + broad browser support)
 *   public/favicon.svg   vector copy for the legacy CodeIgniter front-end
 *   public/favicon-32.png
 *   public/favicon-16.png
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "app", "icon.svg");
const svg = readFileSync(source);

const ICO_SIZES = [16, 32, 48, 64];

const render = (size) =>
  sharp(svg, { density: 384 }).resize(size, size, { fit: "contain" }).png().toBuffer();

/** Minimal ICONDIR container holding PNG payloads (supported since Windows Vista). */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(16 * images.length);
  let offset = header.length + directory.length;

  images.forEach(({ size, data }, index) => {
    const entry = index * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, entry);
    directory.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2); // palette size
    directory.writeUInt8(0, entry + 3); // reserved
    directory.writeUInt16LE(1, entry + 4); // colour planes
    directory.writeUInt16LE(32, entry + 6); // bits per pixel
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...images.map((image) => image.data)]);
}

const written = [];

for (const size of [16, 32, 48, 64]) {
  written.push(["public/favicon-" + size + ".png", await render(size)]);
}

written.push(["app/apple-icon.png", await sharp(svg, { density: 384 }).resize(180, 180).png().toBuffer()]);
written.push(["public/favicon.ico", buildIco(await Promise.all(ICO_SIZES.map(async (size) => ({ size, data: await render(size) }))))]);
written.push(["public/favicon.svg", svg]);

for (const [path, data] of written) {
  writeFileSync(join(root, path), data);
  console.log("wrote", path, data.length + " bytes");
}