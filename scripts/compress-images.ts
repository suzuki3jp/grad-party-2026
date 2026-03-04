/**
 * ローカル画像を圧縮して出力ディレクトリに保存するスクリプト
 *
 * 実行方法:
 *   npx tsx scripts/compress-images.ts
 */

import { mkdirSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import sharp from "sharp";

const INPUT_DIR = join(process.cwd(), "pictures");
const OUTPUT_DIR = join(process.cwd(), "compressed-pictures");
const MAX_DIMENSION = 2400;
const JPEG_QUALITY = 85;

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"]);

function formatBytes(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = readdirSync(INPUT_DIR).filter((f) =>
    IMAGE_EXTENSIONS.has(extname(f))
  );
  console.log(`${files.length} 件の画像が見つかりました\n`);

  const results = await Promise.all(
    files.map(async (file) => {
      const inputPath = join(INPUT_DIR, file);
      const outputPath = join(OUTPUT_DIR, file.replace(/\.[^.]+$/, ".jpg"));

      const image = sharp(inputPath).rotate(); // EXIF Orientation を適用
      const { width = 0, height = 0 } = await image.metadata();
      const needsResize = width > MAX_DIMENSION || height > MAX_DIMENSION;

      const pipeline = needsResize
        ? image.resize(MAX_DIMENSION, MAX_DIMENSION, { fit: "inside", withoutEnlargement: true })
        : image;

      const info = await pipeline
        .jpeg({ quality: JPEG_QUALITY, progressive: true })
        .toFile(outputPath);

      const { size: originalSize } = await import("node:fs").then((fs) =>
        fs.promises.stat(inputPath)
      );
      const compressedSize = info.size;
      const ratio = ((1 - compressedSize / originalSize) * 100).toFixed(1);

      console.log(`完了: ${file}  ${formatBytes(originalSize)} → ${formatBytes(compressedSize)} (-${ratio}%)`);
      return { originalSize, compressedSize };
    })
  );

  const totalOriginal = results.reduce((s, r) => s + r.originalSize, 0);
  const totalCompressed = results.reduce((s, r) => s + r.compressedSize, 0);

  console.log("\n===== 完了 =====");
  console.log(`合計 before: ${formatBytes(totalOriginal)}`);
  console.log(`合計 after:  ${formatBytes(totalCompressed)}`);
  console.log(
    `削減量:      ${formatBytes(totalOriginal - totalCompressed)} (${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%)`
  );
  console.log(`\n出力先: ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
